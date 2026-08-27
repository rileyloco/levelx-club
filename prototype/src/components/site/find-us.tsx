import { useState } from "react";
import { club, locations } from "@/data/club";

function mapSrc(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
}

export function FindUs() {
  const [slug, setSlug] = useState(locations[0]?.slug ?? "toowong");
  const current = locations.find((l) => l.slug === slug) ?? locations[0];

  return (
    <section className="find-band lx-section">
      <div className="lx-wrap text-center">
        <h2 className="lx-title font-display text-4xl sm:text-5xl">Where to find us</h2>
      </div>
      <div className="find-tabs">
        {locations.map((l) => (
          <button
            key={l.slug}
            type="button"
            className={l.slug === slug ? "find-tab is-on" : "find-tab"}
            onClick={() => setSlug(l.slug)}
          >
            {l.shortName}
          </button>
        ))}
      </div>
      {current ? (
        <div className="find-map">
          <iframe
            title={`${current.shortName} map`}
            src={mapSrc(current.address)}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : null}
      <div className="find-grid">
        <div>
          <h3 className="find-h">Location</h3>
          <div className="find-line" />
          <p className="find-p">{current?.name}</p>
          <p className="find-p">{current?.address}</p>
          {current?.status === "coming" ? <p className="find-soon">Coming soon</p> : null}
        </div>
        <div>
          <h3 className="find-h">Get in touch</h3>
          <div className="find-line" />
          <a className="find-a" href={`tel:${club.phone.replace(/\s/g, "")}`}>
            {club.phone}
          </a>
          <a className="find-a" href={`mailto:${club.email}`}>
            {club.email}
          </a>
        </div>
        <div>
          <h3 className="find-h">Follow us</h3>
          <div className="find-line" />
          <div className="find-social">
            <a href={club.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a href={club.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
