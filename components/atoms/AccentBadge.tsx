import { cn } from "@/lib/utils";
import Typography from "./Typography";

interface AccentBadgeProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Small accent-coloured bordered badge used for spec callouts.
 * e.g. "< 20 dB at full speed"
 */
export default function AccentBadge({ children, className }: AccentBadgeProps) {
  return (
    <Typography
      variant="card-label"
      className={cn(
        "text-accent border border-accent-border px-3 py-1 inline-block",
        className
      )}
    >
      {children}
    </Typography>
  );
}
