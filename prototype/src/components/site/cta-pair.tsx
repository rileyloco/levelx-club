import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Path = "/" | "/memberships" | "/apply" | "/events";

export function CtaPair({
  className,
  primaryTo = "/apply",
  primaryLabel = "Apply now",
  secondaryTo = "/memberships",
  secondaryLabel = "View Memberships",
  invert = false,
  arrow = false,
}: {
  className?: string;
  primaryTo?: Path;
  primaryLabel?: string;
  secondaryTo?: Path;
  secondaryLabel?: string;
  invert?: boolean;
  arrow?: boolean;
}) {
  return (
    <div className={cn("flex flex-row items-center gap-2.5", className)}>
      <Button asChild variant={invert ? "inverse" : "primary"} size="lg">
        <Link to={primaryTo}>
          {primaryLabel}
          {arrow ? (
            <svg
              viewBox="0 0 16 16"
              aria-hidden
              className="h-3 w-3 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          ) : null}
        </Link>
      </Button>
      <Button asChild variant="outline" size="lg">
        <Link to={secondaryTo}>{secondaryLabel}</Link>
      </Button>
    </div>
  );
}
