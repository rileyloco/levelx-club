import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full border border-line bg-elevated px-4 py-3 font-sans text-sm text-fg outline-none transition-colors placeholder:text-faint focus:border-accent",
        className,
      )}
      {...props}
    />
  );
}
