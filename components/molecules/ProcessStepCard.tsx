import Typography from "@/components/atoms/Typography";
import { cn } from "@/lib/utils";

interface ProcessStepCardProps {
  num: string;
  title: string;
  desc: string;
  className?: string;
}

/**
 * Single numbered step card used in the Process section.
 * bg-bg-base fills the grid cell so gap-px bg-border creates visible dividers.
 */
export default function ProcessStepCard({
  num,
  title,
  desc,
  className,
}: ProcessStepCardProps) {
  return (
    <div className={cn("bg-bg-base px-site py-10 md:py-14", className)}>
      <p className="font-display text-[2.5rem] text-fg-ghost leading-none mb-8">
        {num}
      </p>
      <Typography variant="card-title-base" as="h3" textColor="muted" className="mb-4">
        {title}
      </Typography>
      <Typography variant="card-body" textColor="faint">
        {desc}
      </Typography>
    </div>
  );
}
