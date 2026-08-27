import { reviews } from "@/data/club";

export function ReviewsTicker() {
  const row = [...reviews, ...reviews];
  return (
    <section className="lx-section">
      <div className="rev-head">
        <h2 className="rev-title">From the floor</h2>
      </div>
      <div className="rev-ticker">
        <div className="rev-track">
          {row.map((q, i) => (
            <span key={`a-${i}`} className={i % 2 ? "rev-quote is-gold" : "rev-quote"}>
              “{q}”
            </span>
          ))}
        </div>
      </div>
      <div className="rev-ticker">
        <div className="rev-track is-rev">
          {row.map((q, i) => (
            <span key={`b-${i}`} className={i % 2 ? "rev-quote" : "rev-quote is-gold"}>
              “{q}”
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
