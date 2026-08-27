import { useId } from "react";
import { cn } from "@/lib/utils";

export function MarkX({ className }: { className?: string }) {
  const id = useId();
  const fill = `url(#${id})`;

  return (
    <svg
      viewBox="0 0 200 156"
      aria-hidden
      className={cn("overflow-visible", className)}
    >
      <defs>
        <linearGradient id={id} x1="18" y1="6" x2="184" y2="150" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f3eee4" />
          <stop offset="38%" stopColor="#d4b57a" />
          <stop offset="72%" stopColor="#c6a46c" />
          <stop offset="100%" stopColor="#8d6e3a" />
        </linearGradient>
      </defs>
      <polygon fill={fill} points="15.7,28.3 163.7,152.3 157.1,125.9 184.3,127.7 36.3,3.7 42.9,30.1" />
      <polygon fill={fill} points="163.7,3.7 15.7,127.7 42.9,125.9 36.3,152.3 184.3,28.3 157.1,30.1" />
    </svg>
  );
}
