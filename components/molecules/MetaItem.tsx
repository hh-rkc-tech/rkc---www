import { cn } from "@/lib/utils";
import { Typography } from "../atoms/Typography";

interface MetaItemProps {
  label: string;
  value: string;
  className?: string;
}

/**
 * Label / value pair with top border divider.
 * Used in mission statement sidebar, footer about block, etc.
 */
export default function MetaItem({ label, value, className }: MetaItemProps) {
  return (
    <div
      className={cn(
        "border-t border-border pt-4",
        className
      )}
    >
      <Typography variant="card-label" textColor="faint" className="mb-1">
        {label}
      </Typography>
      <Typography variant="card-body" textColor="muted">
        {value}
      </Typography>
    </div>
  );
}
