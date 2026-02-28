"use client";

import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "outline-accent";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white border border-accent hover:bg-accent-hover hover:border-accent-hover",
  ghost:
    "bg-transparent text-fg-muted border border-border-strong hover:border-fg-muted hover:text-fg-base",
  "outline-accent":
    "bg-transparent text-accent border border-accent-border hover:border-accent",
};

/**
 * Reusable button atom.
 * All hover states via Tailwind — zero inline styles.
 */
export default function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "font-sans text-[0.62rem] tracking-[0.20em] uppercase",
        "px-7 py-3.5 cursor-pointer transition-colors duration-300",
        "inline-flex items-center gap-3",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
