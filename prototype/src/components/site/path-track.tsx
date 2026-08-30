import { Link } from "@tanstack/react-router";
import { memberships } from "@/data/club";
import { useOverflowArrows } from "@/components/site/use-overflow-arrows";

const PATHS = memberships.map((plan, i) => ({
  mile: `0${i + 1}`,
  plan,
  blurb: `${plan.summary} ${plan.points.join(". ")}.`,
}));

export function PathTrack() {
  const { ref: scroller, canPrev, canNext, go } = useOverflowArrows();

  return (
    <section className="lx-section">
      <div className="path-head">
        <h2 className="path-title">Select your membership</h2>
      </div>
      <div className="path-track">
        <div className="path-thread" />
        <button
          type="button"
          className={`path-arrow is-prev${canPrev ? " is-on" : ""}`}
          aria-label="Previous path"
          disabled={!canPrev}
          onClick={() => go(-1, ".path-card", 244)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M14.5 6.5 9 12l5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="path-scroll" ref={scroller}>
          {PATHS.map((item) => (
            <article key={item.plan.slug} className="path-card">
              <p className="path-label">{item.plan.name}</p>
              <div className="path-mile">{item.mile}</div>
              <div className="path-body">
                <h3 className="path-name">
                  {item.plan.price}
                  {item.plan.period ? ` ${item.plan.period}` : ""}
                </h3>
                <div className="path-rule" />
                <p className="path-copy">{item.blurb}</p>
                <Link
                  to="/apply"
                  search={{
                    plan: item.plan.slug,
                    location: item.plan.slug === "foundation" ? "toowong" : undefined,
                  }}
                  className="lx-btn lx-btn--ghost path-cta"
                >
                  {item.plan.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
        <button
          type="button"
          className={`path-arrow is-next${canNext ? " is-on" : ""}`}
          aria-label="Next path"
          disabled={!canNext}
          onClick={() => go(1, ".path-card", 244)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M9.5 6.5 15 12l-5.5 5.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
