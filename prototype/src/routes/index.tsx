import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/contact-form";
import { FaqList } from "@/components/site/faq-list";
import { FindUs } from "@/components/site/find-us";
import { JsonLd } from "@/components/site/json-ld";
import { ReviewsTicker } from "@/components/site/reviews-ticker";
import { SiteShell } from "@/components/site/site-shell";
import { VideoFrame } from "@/components/site/video-frame";
import { club, events, memberships, pillars } from "@/data/club";
import { pageHead } from "@/lib/seo";

const PATHS = memberships.map((plan, i) => ({
  mile: `0${i + 1}`,
  plan,
  blurb: `${plan.summary} ${plan.points.join(". ")}.`,
}));

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
          <h1 className="sr-only">Level X, premium fitness and recovery</h1>
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

      <section id="the-club" className="lx-section scroll-mt-20">
        <div className="lx-wrap">
          <div className="club-grid">
            <div className="club-left">
              <span className="lx-kicker">Level X</span>
              <h2 className="club-heading">Why Choose Us</h2>
              <p className="club-facts">
                Fitness<span aria-hidden> · </span>Recovery<span aria-hidden> · </span>Mindset
              </p>
            </div>
            <div className="club-right">
              {pillars.map((p) => (
                <article key={p.num} className="club-block">
                  <span className="club-num">{p.num}</span>
                  <h3 className="club-name">{p.name}</h3>
                  <p className="club-copy">{p.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
        <div className="club-strip" aria-hidden>
          <div className="club-strip-track">
            {[
              "/images/strength-floor.jpg",
              "/images/sauna.jpg",
              "/images/plunge-room.jpg",
              "/images/gym-wide.jpg",
              "/images/training-bench.jpg",
              "/images/red-light.jpg",
            ]
              .concat([
                "/images/strength-floor.jpg",
                "/images/sauna.jpg",
                "/images/plunge-room.jpg",
                "/images/gym-wide.jpg",
                "/images/training-bench.jpg",
                "/images/red-light.jpg",
              ])
              .map((src, i) => (
                <img key={`${src}-${i}`} src={src} alt="" />
              ))}
          </div>
        </div>
        <div className="lx-wrap">
          <div className="club-actions">
            <Link to="/apply" className="club-btn club-btn--primary">
              Join now
            </Link>
            <Link to="/locations" className="club-btn club-btn--secondary">
              View locations
            </Link>
          </div>
        </div>
      </section>

      <section id="locations" className="loc-band lx-section scroll-mt-20">
        <div className="lx-wrap">
          <span className="lx-kicker">Locations</span>
          <h2 className="loc-heading">The clubs</h2>
          <p className="loc-line">
            <span aria-hidden>📍</span> Toowong is open now!
          </p>
          <Link to="/apply" className="loc-join">
            Join today
            <span aria-hidden>→</span>
          </Link>
          <div className="loc-card">
            <img src="/images/gym-wide.jpg" alt="" />
          </div>
          <p className="loc-line">
            <span aria-hidden>📍</span> Queen’s Wharf coming soon
          </p>
          <p className="loc-line">
            <span aria-hidden>📍</span> Gold Coast coming soon
          </p>
          <Link to="/locations" className="loc-more">
            See all locations
          </Link>
        </div>
      </section>

      <section className="lx-section">
        <div className="path-head">
          <h2 className="path-title">Select your membership</h2>
        </div>
        <div className="path-track">
          <div className="path-thread" />
          <div className="path-scroll">
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
                    className="path-cta"
                  >
                    {item.plan.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="path-hint">Scroll to explore →</p>
        </div>
      </section>

      <ReviewsTicker />

      <section className="lx-section">
        <div className="ev-head">
          <h2 className="lx-title font-display text-4xl sm:text-5xl">In the house</h2>
        </div>
        <div className="ev-list">
          {events.slice(0, 1).map((e) => (
            <Link key={e.slug} to="/events" className="ev-row">
              <div>
                <p className="ev-kind">{e.kind}</p>
                <h3 className="ev-name">{e.title}</h3>
              </div>
              <svg className="ev-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
          <Link to="/events" className="ev-row">
            <div>
              <p className="ev-kind">What’s on</p>
              <h3 className="ev-name">Upcoming events</h3>
            </div>
            <svg className="ev-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      <section id="about" className="lx-section scroll-mt-20">
        <div className="faq-head">
          <h2 className="lx-title">
            Frequently
            <br />
            asked questions
          </h2>
        </div>
        <FaqList />
      </section>

      <div id="contact" className="scroll-mt-24">
        <FindUs />
      </div>

      <section className="lx-section">
        <div className="lx-wrap text-center">
          <h2 className="lx-title font-display text-4xl sm:text-5xl">Contact Us</h2>
          <ContactForm />
        </div>
      </section>
    </SiteShell>
  );
}
