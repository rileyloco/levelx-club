import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CtaPair } from "@/components/site/cta-pair";
import { JsonLd } from "@/components/site/json-ld";
import { SiteShell } from "@/components/site/site-shell";
import { Button } from "@/components/ui/button";
import { locationBySlug, locations, trainers } from "@/data/club";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const location = locationBySlug(params.slug);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead({
          title: loaderData.location.seoTitle,
          description: loaderData.location.seoDescription,
          path: `/locations/${loaderData.location.slug}`,
        })
      : pageHead({
          title: "Location | Level X Club",
          description: "Level X Club locations across Queensland.",
          path: "/",
        }),
  component: LocationPage,
});

function LocationPage() {
  const { location } = Route.useLoaderData();
  const trainer = location.slug === "toowong" ? trainers[0] : undefined;

  if (location.status === "coming") {
    return (
      <SiteShell>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "HealthClub",
            name: location.name,
            description: location.seoDescription,
            image: location.image,
          }}
        />

        <section className="relative min-h-[80dvh] overflow-hidden">
          <img
            src={location.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/40 to-transparent" />
          <div className="relative z-10 flex min-h-[80dvh] flex-col items-start justify-end px-5 pb-16 pt-28 md:px-10 lg:px-16">
            <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
              Coming soon
            </p>
            <h1 className="mt-4 font-display text-5xl sm:text-7xl">{location.headline}</h1>
            <p className="mt-5 font-sans text-sm tracking-[0.18em] text-fg/80 uppercase">
              Coming soon
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link
                  to="/apply"
                  search={{ location: location.slug, plan: "flagship" }}
                >
                  Register interest
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto flex max-w-[720px] flex-wrap justify-center gap-6 px-5 py-12 text-sm">
            {locations
              .filter((l) => l.slug !== location.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  to="/locations/$slug"
                  params={{ slug: l.slug }}
                  className="text-muted hover:text-fg"
                >
                  {l.shortName} →
                </Link>
              ))}
          </div>
        </section>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: location.name,
          description: location.seoDescription,
          address: {
            "@type": "PostalAddress",
            streetAddress: location.address,
            addressLocality: location.suburb,
            addressRegion: "QLD",
            addressCountry: "AU",
          },
          telephone: location.phone,
          openingHours: location.hours,
          image: location.image,
        }}
      />

      <section className="relative min-h-[70dvh] overflow-hidden">
        <img
          src={location.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-bg via-bg/35 to-transparent" />
        <div className="relative z-10 flex min-h-[70dvh] flex-col justify-end px-5 pb-14 pt-28 md:px-10 lg:px-16">
          <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
            {location.eyebrow} · {location.statusLabel}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl sm:text-7xl">
            {location.headline}
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted">{location.lede}</p>
          <CtaPair
            className="mt-10"
            primaryTo="/apply"
            primaryLabel={
              location.status === "open" ? "Apply now" : "Register interest"
            }
            secondaryTo="/memberships"
            secondaryLabel="View Memberships"
          />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[800px] px-5 py-16 md:py-20">
          <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
            Visit
          </p>
          <h2 className="mt-3 font-display text-4xl">{location.shortName}</h2>
          <dl className="mt-10 divide-y divide-line border-y border-line">
            <div className="grid gap-1 py-5 sm:grid-cols-[140px_1fr]">
              <dt className="text-[11px] tracking-[0.16em] text-faint uppercase">
                Address
              </dt>
              <dd className="text-sm text-fg">{location.address}</dd>
            </div>
            {location.hours ? (
              <div className="grid gap-1 py-5 sm:grid-cols-[140px_1fr]">
                <dt className="text-[11px] tracking-[0.16em] text-faint uppercase">
                  Hours
                </dt>
                <dd className="text-sm text-fg">{location.hours}</dd>
              </div>
            ) : null}
            {location.phone ? (
              <div className="grid gap-1 py-5 sm:grid-cols-[140px_1fr]">
                <dt className="text-[11px] tracking-[0.16em] text-faint uppercase">
                  Phone
                </dt>
                <dd className="text-sm">
                  <a
                    className="text-fg hover:text-accent"
                    href={`tel:${location.phone.replace(/\s/g, "")}`}
                  >
                    {location.phone}
                  </a>
                </dd>
              </div>
            ) : null}
            {location.parking ? (
              <div className="grid gap-1 py-5 sm:grid-cols-[140px_1fr]">
                <dt className="text-[11px] tracking-[0.16em] text-faint uppercase">
                  Getting here
                </dt>
                <dd className="text-sm text-muted">{location.parking}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
          <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
            The floor
          </p>
          <h2 className="mt-3 font-display text-4xl">What’s here</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {location.facilities.map((f) => (
              <article key={f.name} className="overflow-hidden border border-line bg-surface">
                {f.image ? (
                  <img src={f.image} alt="" className="aspect-16/10 w-full object-cover" />
                ) : null}
                <div className="p-6">
                  <h3 className="font-display text-2xl">{f.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {location.timetable.length > 0 ? (
        <section id="timetable" className="scroll-mt-20 border-t border-line">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8 md:py-24">
            <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
              This week
            </p>
            <h2 className="mt-3 font-display text-4xl">Timetable</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
              {location.timetableNote}
            </p>
            <div className="mt-10 overflow-x-auto">
              <div className="grid min-w-[640px] grid-cols-7 gap-px bg-line">
                {location.timetable.map((day) => (
                  <div key={day.day} className="bg-bg p-4">
                    <p className="font-sans text-[10px] tracking-[0.18em] text-accent uppercase">
                      {day.day}
                    </p>
                    <ul className="mt-4 space-y-4">
                      {day.slots.map((slot) => (
                        <li key={`${day.day}-${slot.time}`}>
                          <p className="text-sm text-fg">{slot.time}</p>
                          <p className="text-xs text-muted">{slot.kind}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {trainer ? (
        <section className="border-t border-line">
          <div className="mx-auto grid max-w-[1400px] overflow-hidden md:grid-cols-12">
            <div className="relative min-h-[360px] md:col-span-5">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center px-5 py-12 md:col-span-7 md:px-12">
              <p className="font-sans text-[11px] tracking-[0.22em] text-accent uppercase">
                {trainer.role}
              </p>
              <h2 className="mt-3 font-display text-4xl">{trainer.name}</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                {trainer.bio}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-line">
        <div className="mx-auto max-w-[720px] px-5 py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            {location.status === "open" ? "Apply for this location" : "Register interest"}
          </h2>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link
                to="/apply"
                search={{
                  location: location.slug,
                  plan: location.status === "open" ? "foundation" : "flagship",
                }}
              >
                {location.status === "open" ? "Apply now" : "Register interest"}
              </Link>
            </Button>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm">
            {locations
              .filter((l) => l.slug !== location.slug)
              .map((l) => (
                <Link
                  key={l.slug}
                  to="/locations/$slug"
                  params={{ slug: l.slug }}
                  className="text-muted hover:text-fg"
                >
                  {l.shortName} →
                </Link>
              ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
