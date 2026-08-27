import { Link } from "@tanstack/react-router";
import { club } from "@/data/club";

export function Footer() {
  return (
    <footer className="foot-lm">
      <div className="foot-lm__main">
        <div className="foot-lm__brand">
          <p className="foot-lm__title">Level X Club</p>
          <div className="foot-lm__line" />
          <a href={`mailto:${club.email}`}>{club.email}</a>
          <a href={`tel:${club.phone.replace(/\s/g, "")}`}>{club.phone}</a>
          <div className="foot-lm__social">
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
        <div className="foot-lm__links">
          <p className="foot-lm__title">Quick links</p>
          <div className="foot-lm__line" />
          <Link to="/locations">Locations</Link>
          <Link to="/apply">Apply</Link>
          <Link to="/events">Events</Link>
        </div>
      </div>
      <div className="foot-lm__bottom">
        <p>© {new Date().getFullYear()} Level X</p>
        <div className="foot-lm__legal">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
