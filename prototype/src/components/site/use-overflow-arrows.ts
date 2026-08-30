import { useCallback, useEffect, useRef, useState } from "react";

export function useOverflowArrows() {
  const ref = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(max > 8 && el.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tick = () => update();
    tick();
    const frame = requestAnimationFrame(tick);
    el.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(tick);
    observer.observe(el);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [update]);

  function go(dir: number, selector: string, fallback: number) {
    const el = ref.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(selector);
    const gap = parseFloat(getComputedStyle(el).gap || "12") || 12;
    const step = card ? card.offsetWidth + gap : fallback;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  return { ref, canPrev, canNext, go };
}
