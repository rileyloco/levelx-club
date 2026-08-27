import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-12 w-full border border-line bg-elevated px-4 font-sans text-sm text-fg outline-none transition-colors placeholder:text-faint focus:border-accent",
        className,
      )}
      {...props}
    />
  );
}
