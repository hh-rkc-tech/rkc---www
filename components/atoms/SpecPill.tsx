import { cn } from "@/lib/utils";

interface SpecPillProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Small bordered pill used to show a product spec inline.
 */
export default function SpecPill({ children, className }: SpecPillProps) {
  return (
    <span
      className={cn(
        "font-sans text-[0.55rem] tracking-[0.12em] uppercase",
        "text-fg-muted border border-border px-2.5 py-1 inline-block",
        className
      )}
    >
      {children}
    </span>
  );
}
