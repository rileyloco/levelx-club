import { createFileRoute } from "@tanstack/react-router";
import { ApplyForm } from "@/components/site/apply-form";
import { SiteShell } from "@/components/site/site-shell";
import { pageHead } from "@/lib/seo";

type ApplySearch = {
  location?: string;
  plan?: string;
};

export const Route = createFileRoute("/apply")({
  validateSearch: (search: Record<string, unknown>): ApplySearch => ({
    location: typeof search.location === "string" ? search.location : undefined,
    plan: typeof search.plan === "string" ? search.plan : undefined,
  }),
  head: () =>
    pageHead({
      title: "Apply for Membership | Level X Club",
      description:
        "Apply for Level X Club membership. Foundation at Toowong, Club membership, or register interest for Queen’s Wharf and the Gold Coast.",
      path: "/apply",
    }),
  component: ApplyPage,
});

function ApplyPage() {
  const { location, plan } = Route.useSearch();

  return (
    <SiteShell>
      <div className="mx-auto max-w-[1400px] px-5 pt-28 pb-20 md:px-8 md:pt-36 md:pb-28">
        <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">
          Online signup
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl sm:text-6xl">
          Sign up
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
          Your details, a plan, the terms. Prototype only — no payment is taken.
        </p>
        <div className="mt-12 max-w-xl">
          <ApplyForm defaultLocation={location} defaultPlan={plan} />
        </div>
      </div>
    </SiteShell>
  );
}
