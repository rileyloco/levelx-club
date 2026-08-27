import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-bg px-6 text-center text-fg">
      <p className="font-sans text-[11px] tracking-[0.28em] text-accent uppercase">404</p>
      <h1 className="mt-4 font-display text-5xl">Not found</h1>
      <p className="mt-4 max-w-md text-sm text-muted">
        That page does not exist. Try a location, or apply for membership.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link to="/" hash="locations">
            View Locations
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/">Home</Link>
        </Button>
      </div>
    </main>
  );
}
