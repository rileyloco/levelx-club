import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { events } from "@/data/club";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/events/")({
  head: () =>
    pageHead({
      title: "Events | Level X Club — Run Club, Breathwork & Briefings",
      description:
        "Level X member events: Toowong run club, breathwork, Foundation tours, contrast therapy clinics, and upcoming Queen’s Wharf and Gold Coast briefings.",
      path: "/events",
    }),
  component: EventsIndex,
});

function EventsIndex() {
  return (
    <SiteShell>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16">
          <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
            The calendar
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl sm:text-7xl">Events</h1>
          <p className="mt-5 max-w-xl text-base text-muted">
            Run club, breathwork, tours and briefings. Members first.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1400px] px-5 pb-16 md:px-8 md:pb-24">
          <ul className="grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
            {events.map((e) => (
              <li key={e.slug} className="flex flex-col">
                <img
                  src={e.image}
                  alt=""
                  className="aspect-16/10 w-full object-cover"
                />
                <p className="mt-5 font-sans text-[11px] tracking-[0.18em] text-accent uppercase">
                  {e.kind} · {e.locationLabel}
                </p>
                <h2 className="mt-2 font-display text-3xl md:text-4xl">{e.title}</h2>
                <p className="mt-2 font-sans text-xs font-normal tracking-[0.04em] text-muted">
                  {e.dateLabel} · {e.time}
                </p>
                <p className="mt-3 max-w-md text-sm font-normal leading-relaxed text-muted">
                  {e.summary}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[720px] px-5 py-20 text-center">
          <h2 className="font-display text-3xl">Apply first</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Events follow membership — and a few open briefings for people still
            deciding.
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
