import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { memberships } from "@/data/club";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/memberships")({
  head: () =>
    pageHead({
      title: "Memberships | Level X Club, Apply for Membership",
      description:
        "Begin your Level X journey. Apply for membership at Toowong, or register interest for Queen’s Wharf and the Gold Coast.",
      path: "/memberships",
    }),
  component: MembershipsPage,
});

function MembershipsPage() {
  return (
    <SiteShell>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16">
          <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
            Membership
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl sm:text-7xl">
            How you join
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted">
            Sign up online. Prototype pricing, no payment is taken yet.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1400px] gap-px bg-line md:grid-cols-3">
          {memberships.map((m, i) => (
            <article key={m.slug} className="flex flex-col bg-bg px-7 py-10 md:px-9">
              <p className="font-sans text-[11px] tracking-[0.24em] text-accent">
                0{i + 1} · {m.kicker}
              </p>
              <h2 className="mt-3 font-display text-4xl">{m.name}</h2>
              <p className="mt-4 font-display text-3xl text-fg">
                {m.price}
                {m.period ? (
                  <span className="ml-1 font-sans text-sm tracking-normal text-muted">
                    {m.period}
                  </span>
                ) : null}
              </p>
              <p className="mt-1 text-xs text-faint">{m.priceNote}</p>
              <ul className="mt-8 flex-1 space-y-2 text-sm text-muted">
                {m.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="mt-8">
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
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[800px] px-5 py-20 md:py-24">
          <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
            Process
          </p>
          <h2 className="mt-3 font-display text-4xl">How it works</h2>
          <ol className="mt-10 space-y-8">
            {[
              {
                n: "01",
                t: "Sign up",
                d: "Your details, a plan, accept the terms. Two minutes.",
              },
              {
                n: "02",
                t: "We confirm",
                d: "A tour of Toowong, or a briefing for a coming location. Payment goes live with the club.",
              },
              {
                n: "03",
                t: "Belong",
                d: "If it fits, you join. Floor, suite, app, events.",
              },
            ].map((s) => (
              <li key={s.n} className="grid gap-2 md:grid-cols-[80px_1fr]">
                <span className="font-sans text-[11px] tracking-[0.22em] text-accent">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-2xl">{s.t}</h3>
                  <p className="mt-1 text-sm text-muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteShell>
  );
}
