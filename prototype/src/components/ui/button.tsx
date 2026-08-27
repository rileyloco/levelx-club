import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-sans font-medium uppercase transition-[color,background-color,border-color,transform,opacity] duration-200 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-accent text-accent-fg hover:bg-fg hover:text-bg",
        outline:
          "border border-line-strong bg-transparent text-fg hover:border-fg hover:bg-fg hover:text-bg",
        ghost: "text-muted hover:text-fg",
        inverse: "bg-fg text-bg hover:bg-accent hover:text-accent-fg",
      },
      size: {
        md: "h-10 px-4 text-[10px] tracking-[0.14em] sm:h-11 sm:px-5 sm:text-[11px] sm:tracking-[0.16em]",
        lg: "h-10 px-4 text-[10px] tracking-[0.14em] sm:h-11 sm:px-6 sm:text-[11px] sm:tracking-[0.16em]",
        sm: "h-9 px-3.5 text-[10px] tracking-[0.14em]",
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
