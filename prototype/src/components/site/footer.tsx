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
            <a href={club.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href={club.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
        <div className="foot-lm__links">
          <p className="foot-lm__title">Quick links</p>
          <div className="foot-lm__line" />
          <Link to="/locations">Locations</Link>
          <Link to="/memberships">Memberships</Link>
          <Link to="/events">Events</Link>
          <Link to="/merch">Merch</Link>
          <Link to="/apply">Apply</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
      <p className="foot-lm__bottom">© {new Date().getFullYear()} Level X</p>
    </footer>
  );
}
