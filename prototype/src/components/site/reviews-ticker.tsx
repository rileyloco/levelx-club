import { reviews } from "@/data/club";

export function ReviewsTicker() {
  const row = [...reviews, ...reviews];
  return (
    <section className="lx-section rev-band">
      <div className="rev-head">
        <h2 className="rev-title">Reviews from the community</h2>
        <div className="rev-stats">
          <span className="rev-stars" aria-hidden>
            ★★★★★
          </span>
        </div>
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
