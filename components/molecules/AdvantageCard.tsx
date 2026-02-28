import Typography from "@/components/atoms/Typography";
import { cn } from "@/lib/utils";

interface AdvantageCardProps {
  tag: string;
  title: string;
  desc: string;
  className?: string;
}

/**
 * Single advantage card in the "Why RKC" section.
 * bg-bg-subtle fills the grid cell so gap-px bg-border creates visible dividers.
 */
export default function AdvantageCard({
  tag,
  title,
  desc,
  className,
}: AdvantageCardProps) {
  return (
    <div className={cn("bg-bg-subtle px-site py-10 md:py-14", className)}>
      <Typography variant="card-label" textColor="accent" className="mb-10">
        {tag}
      </Typography>
      <Typography variant="card-title-base" as="h3" textColor="muted" className="mb-4">
        {title}
      </Typography>
      <Typography variant="card-body" textColor="faint">
        {desc}
      </Typography  >
    </div>
  );
}
