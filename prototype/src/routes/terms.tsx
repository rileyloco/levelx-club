import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/site-shell";
import { club } from "@/data/club";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms of Use | Level X Club",
      description: "Terms of use for the Level X Club website.",
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-[720px] px-5 pt-28 pb-20 md:pt-36">
        <h1 className="font-display text-5xl">Terms</h1>
        <p className="mt-3 text-sm text-faint">Last updated 19 August 2026</p>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            This website is operated by Level X Club in Queensland, Australia. By
            using it you agree to these terms.
          </p>
          <h2 className="pt-4 font-display text-2xl text-fg">The site</h2>
          <p>
            Content is provided for information about our clubs, membership and
            events. We take care to keep it accurate, but facilities, hours and
            opening dates can change. Photographs and video show Level X clubs and
            may include coming locations that are not yet open.
          </p>
          <h2 className="pt-4 font-display text-2xl text-fg">Membership signup</h2>
          <p>
            The online signup on this site is a prototype. Completing it does not
            charge a card and does not by itself create a paid membership. When
            the live club takes payment, prices, billing and cancellation will be
            confirmed with you before anything is charged. Flagship locations are
            register-interest only until they open.
          </p>
          <h2 className="pt-4 font-display text-2xl text-fg">Intellectual property</h2>
          <p>
            The Level X name, mark, photography, video and site design are owned
            by us or used with permission. You may not copy or reuse them without
            written consent.
          </p>
          <h2 className="pt-4 font-display text-2xl text-fg">Liability</h2>
          <p>
            The website is provided as-is. To the extent permitted by Australian
            consumer law, we are not liable for loss arising from use of this
            site or reliance on its content. Nothing in these terms limits rights
            you have under the Australian Consumer Law.
          </p>
          <h2 className="pt-4 font-display text-2xl text-fg">Contact</h2>
          <p>
            <a className="text-accent" href={`mailto:${club.email}`}>
              {club.email}
            </a>
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
