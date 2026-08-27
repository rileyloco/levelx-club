import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/site-shell";
import { club } from "@/data/club";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy | Level X Club",
      description: "How Level X Club collects and uses personal information from this website.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-[720px] px-5 pt-28 pb-20 md:pt-36">
        <h1 className="font-display text-5xl">Privacy</h1>
        <p className="mt-3 text-sm text-faint">Last updated 19 August 2026</p>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
          <p>
            Level X Club (“Level X”, “we”, “us”) is based in Queensland, Australia.
            This notice explains how we handle personal information collected through
            this website, in line with the Australian Privacy Principles.
          </p>
          <h2 className="pt-4 font-display text-2xl text-fg">What we collect</h2>
          <p>
            When you apply for membership or register interest, we collect the details
            you submit: name, phone, email, postcode, preferred location, membership
            interest, training goals, and anything you tell us in the message field.
            We also receive standard technical data from your browser (such as IP
            address and device type) via our hosting provider, Netlify.
          </p>
          <h2 className="pt-4 font-display text-2xl text-fg">How we use it</h2>
          <p>
            We use this information to review applications, contact you about tours,
            membership and events, and to operate and improve the website. We do not
            sell your information. Hosting and form delivery are provided by Netlify,
            which stores submissions so we can read them.
          </p>
          <h2 className="pt-4 font-display text-2xl text-fg">Retention and access</h2>
          <p>
            We keep enquiry records for as long as needed to handle your application
            and any follow-up, then delete or de-identify them when they are no longer
            required. You can ask to access or correct your information, or to have an
            enquiry removed, by emailing{" "}
            <a className="text-accent" href={`mailto:${club.email}`}>
              {club.email}
            </a>
            .
          </p>
          <h2 className="pt-4 font-display text-2xl text-fg">Contact</h2>
          <p>
            Questions about this policy:{" "}
            <a className="text-accent" href={`mailto:${club.email}`}>
              {club.email}
            </a>
            . If you are not satisfied with our response, you may contact the Office
            of the Australian Information Commissioner.
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
