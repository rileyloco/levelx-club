import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/site-shell";
import { merch } from "@/data/club";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/merch/")({
  head: () =>
    pageHead({
      title: "Merch | Level X Club",
      description: "Level X club merch. Tee, cap, towel, bottle.",
      path: "/merch",
    }),
  component: MerchIndex,
});

function MerchIndex() {
  return (
    <SiteShell>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-12 md:px-8 md:pt-36 md:pb-16">
          <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
            Club
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl sm:text-7xl">Merch</h1>
          <p className="mt-5 max-w-xl text-base text-muted">
            A short list. Same standard as the floor.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-[1400px] gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {merch.map((item) => (
            <article key={item.slug} className="flex flex-col bg-bg px-6 py-10 md:px-8">
              <h2 className="font-display text-3xl">{item.name}</h2>
              <p className="mt-2 text-sm font-normal text-muted">{item.summary}</p>
              <p className="mt-4 font-display text-2xl">{item.priceLabel}</p>
              <div className="mt-6">
                <Link
                  to="/merch/checkout"
                  search={{ item: item.slug }}
                  className="inline-flex h-9 items-center justify-center rounded-full bg-accent px-3.5 font-sans text-[10px] font-normal tracking-[0.14em] text-accent-fg uppercase"
                >
                  Buy
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
