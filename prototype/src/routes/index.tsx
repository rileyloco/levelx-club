import { createFileRoute, Link } from "@tanstack/react-router";
import { JsonLd } from "@/components/site/json-ld";
import { SiteShell } from "@/components/site/site-shell";
import { VideoFrame } from "@/components/site/video-frame";
import { Button } from "@/components/ui/button";
import { club, locations, memberships, pillars } from "@/data/club";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const head = pageHead({
      title: club.seoTitle,
      description: club.seoDescription,
      path: "/",
    });
    return {
      ...head,
      links: [
        ...head.links,
        { rel: "preload", as: "image", href: "/images/hero-poster-5s.jpg" },
        {
          rel: "preload",
          as: "video",
          href: "/videos/hero-5s-720.mp4",
          type: "video/mp4",
          media: "(max-width: 767px)",
        },
        {
          rel: "preload",
          as: "video",
          href: "/videos/hero-5s-1080.mp4",
          type: "video/mp4",
          media: "(min-width: 768px)",
        },
      ],
    };
  },
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: club.name,
          description: club.seoDescription,
          email: club.email,
          telephone: club.phone,
          url: "https://levelxclub.com.au",
          areaServed: "Queensland, Australia",
          sameAs: [club.instagram],
        }}
      />

      <VideoFrame
        src="/videos/hero-5s-720.mp4"
        srcHd="/videos/hero-5s-1080.mp4"
        poster="/images/hero-poster-5s.jpg"
        className="flex h-dvh items-center justify-center"
        overlay=""
        preload="auto"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,9,8,.62) 0%, rgba(9,9,8,.40) 45%, rgba(9,9,8,.78) 100%)",
          }}
        />
        <div className="relative z-10 flex w-full flex-col items-center px-6 text-center">
          <h1 className="sr-only">Level X — premium fitness and recovery</h1>
          <img
            src="/images/logo-x.png"
            alt=""
            className="h-24 w-auto sm:h-32 mix-blend-screen"
          />
          <p className="mt-4 max-w-xs font-sans text-[13px] font-light tracking-[0.12em] text-fg/70">
            Premium fitness & recovery
          </p>
          <div className="mt-8 flex items-center justify-center gap-2">
            <a
              href="#locations"
              className="inline-flex items-center justify-center gap-1.5 rounded-[8px] border border-accent bg-accent px-4 py-2 font-sans text-[10px] font-normal tracking-[0.16em] text-fg uppercase"
            >
              Locations
              <span aria-hidden>→</span>
            </a>
            <Link
              to="/memberships"
              className="inline-flex items-center justify-center rounded-[8px] border border-white/30 bg-transparent px-4 py-2 font-sans text-[10px] font-normal tracking-[0.16em] text-fg uppercase"
            >
              Memberships
            </Link>
          </div>
        </div>
      </VideoFrame>

      <section id="the-club" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
          <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
            The club
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl sm:text-5xl">
            Training and recovery under one roof.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Three practices. One standard.
          </p>
          <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
            {pillars.map((p) => (
              <article key={p.num} className="bg-bg px-6 py-10 md:px-8">
                <p className="font-sans text-[11px] tracking-[0.24em] text-accent">
                  {p.num}
                </p>
                <h3 className="mt-4 font-display text-3xl">{p.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{p.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="scroll-mt-20 border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
          <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
            Locations
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">The clubs</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Toowong is open. Queen’s Wharf and the Gold Coast are next.
          </p>
          <div className="mt-10 grid gap-3 text-left lg:grid-cols-3">
            {locations.map((l) => (
              <Link
                key={l.slug}
                to="/locations/$slug"
                params={{ slug: l.slug }}
                className="group relative min-h-[380px] overflow-hidden bg-surface"
              >
                <img
                  src={l.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/30 to-transparent" />
                <div className="relative flex h-full min-h-[380px] flex-col justify-end p-6">
                  <p className="font-sans text-[10px] tracking-[0.2em] text-accent uppercase">
                    {l.statusLabel}
                  </p>
                  <h3 className="mt-2 font-display text-3xl">{l.shortName}</h3>
                  <p className="mt-1 text-sm text-muted">{l.region}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
          <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
            Membership
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">How you join</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Invite only. Application first. A conversation after that.
          </p>
          <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
            {memberships.map((m, i) => (
              <article key={m.slug} className="flex flex-col bg-bg px-6 py-10 md:px-8">
                <p className="font-sans text-[11px] tracking-[0.24em] text-accent">
                  0{i + 1} · {m.kicker}
                </p>
                <h3 className="mt-4 font-display text-3xl">{m.name}</h3>
                <p className="mt-3 font-display text-2xl">
                  {m.price}
                  {m.period ? (
                    <span className="ml-1 font-sans text-sm text-muted">{m.period}</span>
                  ) : null}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{m.summary}</p>
                <div className="mt-6">
                  <Button asChild size="sm" variant={m.available ? "primary" : "outline"}>
                    <Link
                      to="/apply"
                      search={{
                        plan: m.slug,
                        location: m.slug === "foundation" ? "toowong" : undefined,
                      }}
                    >
                      {m.cta}
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Button asChild>
              <Link to="/memberships">View memberships</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-line">
        <div className="grid md:grid-cols-2">
          <img
            src="/images/strength-floor.jpg"
            alt=""
            className="h-full min-h-[320px] w-full object-cover md:min-h-[480px]"
          />
          <div className="flex flex-col justify-center px-5 py-16 md:px-12 md:py-24">
            <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
              About
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl">
              Why recovery was never an afterthought.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              Level X was born from a simple belief: fitness and recovery should
              be an experience, not a transaction. Founded in Brisbane in 2026,
              we built both under one roof — without compromising on either.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              What started as a single club in Toowong is becoming a network
              across Queensland. Same standard. Different doors.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[720px] px-5 py-20 text-center md:py-28">
          <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
            Apply
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">
            Put your name down.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
            We read every application. If it is a fit, we invite you in for a
            conversation — not a sales script.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/apply">Apply for membership</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
