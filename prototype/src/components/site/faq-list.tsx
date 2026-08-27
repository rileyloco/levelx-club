import { useState } from "react";
import { faqs } from "@/data/club";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((item, i) => {
        const on = open === i;
        return (
          <div key={item.q} className={on ? "faq-item is-open" : "faq-item"}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={on}
              onClick={() => setOpen(on ? null : i)}
            >
              {item.q}
              <span className="faq-ico" aria-hidden>
                +
              </span>
            </button>
            <p className="faq-a">{item.a}</p>
          </div>
        );
      })}
    </div>
  );
}
