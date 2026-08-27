import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/site-shell";
import { locations } from "@/data/club";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/locations/")({
  head: () =>
    pageHead({
      title: "Locations | Level X Club",
      description: "Level X clubs across Queensland. Toowong is open. Queen’s Wharf and the Gold Coast are next.",
      path: "/locations",
    }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <SiteShell>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16">
          <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
            Locations
          </p>
          <h1 className="mt-4 font-display text-5xl sm:text-7xl">The clubs</h1>
        </div>
      </section>
      <section>
        <div className="mx-auto grid max-w-[1400px] gap-3 px-5 pb-20 md:px-8 md:pb-28 lg:grid-cols-3">
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
                <h2 className="mt-2 font-display text-3xl">{l.shortName}</h2>
                <p className="mt-1 text-sm text-muted">{l.region}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
