import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/site/logo";
import { club, locations } from "@/data/club";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-8 gap-y-8 px-5 py-10 md:grid-cols-12 md:px-8 md:py-12">
        <div className="col-span-2 md:col-span-5">
          <Logo />
          <p className="mt-3 max-w-xs text-xs font-normal leading-relaxed text-muted">
            Fitness, recovery and longevity. Queensland.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="mb-2 font-sans text-sm text-fg">Visit</p>
          <ul className="space-y-1.5 text-xs font-normal text-muted">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link
                  to="/locations/$slug"
                  params={{ slug: l.slug }}
                  className="transition-colors hover:text-fg"
                >
                  {l.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="mb-2 font-sans text-sm text-fg">Club</p>
          <ul className="space-y-1.5 text-xs font-normal text-muted">
            <li>
              <Link to="/memberships" className="transition-colors hover:text-fg">
                Memberships
              </Link>
            </li>
            <li>
              <Link to="/events" className="transition-colors hover:text-fg">
                Events
              </Link>
            </li>
            <li>
              <Link to="/merch" className="transition-colors hover:text-fg">
                Merch
              </Link>
            </li>
            <li>
              <Link to="/apply" className="transition-colors hover:text-fg">
                Apply
              </Link>
            </li>
          </ul>
        </div>

        <div id="contact" className="scroll-mt-24 col-span-2 md:col-span-3">
          <p className="mb-2 font-sans text-sm text-fg">Contact</p>
          <ul className="space-y-1.5 text-xs font-normal text-muted">
            <li>
              <a href={`mailto:${club.email}`} className="hover:text-fg">
                {club.email}
              </a>
            </li>
            <li>
              <a href={`tel:${club.phone.replace(/\s/g, "")}`} className="hover:text-fg">
                {club.phone}
              </a>
            </li>
            <li>
              <a href={club.instagram} target="_blank" rel="noreferrer" className="hover:text-fg">
                Instagram
              </a>
            </li>
            <li>
              <a href={club.facebook} target="_blank" rel="noreferrer" className="hover:text-fg">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-4 text-[10px] font-normal tracking-[0.14em] text-faint uppercase md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Level X</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-muted">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-muted">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
