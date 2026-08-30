import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { pillars } from "@/data/club";
import { useOverflowArrows } from "@/components/site/use-overflow-arrows";

const PHOTOS = [
  "/images/strength-floor.jpg",
  "/images/sauna.jpg",
  "/images/plunge-room.jpg",
  "/images/gym-wide.jpg",
  "/images/training-bench.jpg",
  "/images/red-light.jpg",
];

export function WhySection() {
  const photos = PHOTOS;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const { ref: cards, canPrev, canNext, go } = useOverflowArrows();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (paused || photos.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, index, photos.length]);

  return (
    <section id="the-club" className="lx-section scroll-mt-20">
      <div className="lx-wrap">
        <span className="lx-kicker">Level X</span>
        <h2 className="club-heading">Why Choose Us</h2>
        <p className="club-facts">
          Fitness<span aria-hidden> · </span>Recovery<span aria-hidden> · </span>Mindset
        </p>
        <div className="club-track">
          <button
            type="button"
            className={`club-arrow is-prev${canPrev ? " is-on" : ""}`}
            aria-label="Previous"
            disabled={!canPrev}
            onClick={() => go(-1, ".club-card", 272)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M14.5 6.5 9 12l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="club-cards" ref={cards}>
            {pillars.map((item) => (
              <article key={item.num} className="club-card">
                <span className="club-num">{item.num}</span>
                <h3 className="club-name">{item.name}</h3>
                <p className="club-copy">{item.copy}</p>
              </article>
            ))}
          </div>
          <button
            type="button"
            className={`club-arrow is-next${canNext ? " is-on" : ""}`}
            aria-label="Next"
            disabled={!canNext}
            onClick={() => go(1, ".club-card", 272)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M9.5 6.5 15 12l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div
          className="club-gallery"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="club-gallery__hero">
            <img src={photos[index]} alt="" />
          </div>
          <div className="club-gallery__thumbs" role="tablist" aria-label="Club photos">
            {photos.map((src, photoIndex) => (
              <button
                key={src}
                type="button"
                role="tab"
                aria-selected={photoIndex === index}
                className={photoIndex === index ? "is-on" : undefined}
                onClick={() => setIndex(photoIndex)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>
        <div className="club-actions">
          <Link to="/apply" className="lx-btn lx-btn--fill">
            Join now
          </Link>
          <Link to="/locations" className="lx-btn lx-btn--ghost">
            View locations
          </Link>
        </div>
      </div>
    </section>
  );
}
