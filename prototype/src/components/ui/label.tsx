import type { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(
        "mb-2 block font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-muted",
        className,
      )}
      {...props}
    />
  );
}
