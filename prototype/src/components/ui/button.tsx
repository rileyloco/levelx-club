import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border font-sans font-medium leading-none transition-[color,background-color,border-color,transform,box-shadow] duration-150 ease-out hover:not-disabled:-translate-y-px active:not-disabled:scale-[0.98] disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-accent text-accent-fg hover:bg-[color-mix(in_srgb,var(--color-accent)_82%,var(--color-surface))]",
        outline:
          "border-line-strong bg-transparent text-fg hover:border-[color-mix(in_srgb,var(--color-fg)_32%,var(--color-line))] hover:bg-[color-mix(in_srgb,var(--color-fg)_8%,var(--color-bg))]",
        ghost:
          "border-transparent bg-transparent text-muted hover:bg-[color-mix(in_srgb,var(--color-fg)_6%,transparent)] hover:text-fg",
        inverse:
          "border-transparent bg-fg text-bg hover:bg-[color-mix(in_srgb,var(--color-fg)_82%,var(--color-accent))]",
      },
      size: {
        md: "min-h-9 rounded-[9px] px-3.5 text-[13.5px]",
        lg: "min-h-11 rounded-[11px] px-[18px] text-[15px]",
        sm: "min-h-[30px] rounded-lg px-[11px] text-[12.5px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
