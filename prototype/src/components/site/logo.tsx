import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  to = "/",
}: {
  className?: string;
  to?: string;
}) {
  return (
    <Link
      to={to}
      className={cn("inline-flex items-center transition-opacity hover:opacity-80", className)}
      aria-label="Level X home"
    >
      <img
        src="/images/logo.png"
        alt="Level X"
        className="h-4 w-auto md:h-5"
      />
    </Link>
  );
}
