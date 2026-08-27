import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/site/logo";
import { club } from "@/data/club";
import { cn } from "@/lib/utils";

const MOBILE_LINKS = [
  { to: "/" as const, hash: "locations" as const, label: "Locations" },
  { to: "/memberships" as const, label: "Memberships" },
  { to: "/events" as const, label: "Events" },
  { to: "/merch" as const, label: "Merch" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8 || document.documentElement.scrollTop > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    setOpen(false);
  }

  const solid = scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[200] border-b transition-[background-color,border-color,backdrop-filter] duration-500 [transform:translateZ(0)]",
          open
            ? "border-transparent bg-transparent"
            : solid
              ? "border-line bg-bg/95 backdrop-blur-md"
              : "border-transparent bg-transparent",
        )}
      >
        <div className="relative mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-8 lg:h-[72px]">
          <button
            type="button"
            className={cn(
              "relative z-[201] flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] lg:hidden",
              open ? "text-bg" : "text-fg",
            )}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className="block h-[1.5px] w-[22px] bg-current transition-[transform,opacity] duration-[250ms] ease"
              style={{
                transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block h-[1.5px] w-[22px] bg-current transition-opacity duration-200 ease"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="block h-[1.5px] w-[22px] bg-current transition-[transform,opacity] duration-[250ms] ease"
              style={{
                transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
          <Logo
            className={cn(
              "max-lg:absolute max-lg:left-1/2 max-lg:-translate-x-1/2",
              open && "[&_img]:brightness-0",
            )}
          />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            <Link
              to="/"
              hash="locations"
              className="font-sans text-[11px] font-medium tracking-[0.18em] text-muted uppercase transition-colors hover:text-fg"
            >
              Locations
            </Link>
            <Link
              to="/memberships"
              className="font-sans text-[11px] font-medium tracking-[0.18em] text-muted uppercase transition-colors hover:text-fg"
              activeProps={{ className: "text-fg" }}
            >
              Memberships
            </Link>
            <Link
              to="/events"
              className="font-sans text-[11px] font-medium tracking-[0.18em] text-muted uppercase transition-colors hover:text-fg"
              activeProps={{ className: "text-fg" }}
            >
              Events
            </Link>
            <Link
              to="/merch"
              className="font-sans text-[11px] font-medium tracking-[0.18em] text-muted uppercase transition-colors hover:text-fg"
              activeProps={{ className: "text-fg" }}
            >
              Merch
            </Link>
          </nav>
          <div className="hidden lg:flex">
            <ContactLinks />
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[190] flex flex-col overflow-y-auto bg-fg px-6 pt-[104px] pb-7 text-bg lg:hidden",
          "transition-[opacity,transform,visibility] duration-[320ms] ease",
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-3 opacity-0",
        )}
        role="dialog"
        aria-modal={open}
        aria-label="Menu"
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile">
          {MOBILE_LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={"hash" in l ? l.hash : undefined}
              onClick={close}
              className="py-3.5 font-sans text-xs font-medium tracking-[0.2em] text-bg/70 uppercase hover:text-bg"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-7 border-t border-bg/10 pt-[22px]">
          <div className="flex gap-3.5">
            <a
              href={club.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center text-bg"
            >
              <InstagramIcon />
            </a>
            <a
              href={club.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-9 w-9 items-center justify-center text-bg"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>

        <p className="mt-7 font-display text-[22px] tracking-[-0.03em] text-bg/55 italic">
          {club.tagline}
        </p>

        <span className="mt-auto pt-8 font-sans text-[11px] tracking-[0.16em] text-bg/30 uppercase">
          Admin
        </span>
      </div>
    </>
  );
}

function ContactLinks({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex items-center gap-5">
      <a
        href={club.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="text-muted transition-colors hover:text-fg"
      >
        <InstagramIcon />
      </a>
      <a
        href={club.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        className="text-muted transition-colors hover:text-fg"
      >
        <FacebookIcon />
      </a>
      <a
        href="#contact"
        onClick={onNavigate}
        className="font-sans text-[11px] font-medium tracking-[0.18em] text-muted uppercase transition-colors hover:text-fg"
      >
        Contact
      </a>
    </div>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
    </svg>
  );
}
