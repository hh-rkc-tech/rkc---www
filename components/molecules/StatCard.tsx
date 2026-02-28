import { cn } from "@/lib/utils";

interface StatCardProps {
  value: string;
  unit: string;
  label: string;
  sub: string;
  className?: string;
}

/**
 * Single statistic card — large number + unit + label + sub-text.
 * Used inside a gap-px bg-border grid (StatsSection) so no border props needed.
 */
export default function StatCard({
  value,
  unit,
  label,
  sub,
  className,
}: StatCardProps) {
  return (
    <div className={cn("bg-bg-base px-site py-14 md:py-20", className)}>
      {/* Number + unit */}
      <div className="flex items-baseline gap-1.5 mb-4">
        <span className="font-display text-[clamp(3.5rem,8vw,7rem)] leading-none text-fg-base tracking-[-0.01em]">
          {value}
        </span>
        <span className="font-display text-[clamp(1.5rem,3vw,2.5rem)] text-accent tracking-[0.02em]">
          {unit}
        </span>
      </div>

      {/* Label */}
      <p className="font-sans text-[0.75rem] font-medium tracking-[0.06em] uppercase text-fg-muted mb-2">
        {label}
      </p>

      {/* Sub */}
      <p className="font-sans text-[0.65rem] tracking-[0.04em] text-fg-faint">
        {sub}
      </p>
    </div>
  );
}
