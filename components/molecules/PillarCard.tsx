import Typography from "@/components/atoms/Typography";
import AccentBadge from "@/components/atoms/AccentBadge";
import { cn } from "@/lib/utils";

interface PillarCardProps {
  num: string;
  title: string;
  sub: string;
  body: string;
  spec: string;
  className?: string;
}

/**
 * Innovation pillar card — numbered block with spec badge + copy.
 * bg-bg-subtle fills the grid cell so gap-px bg-border creates visible dividers.
 */
export default function PillarCard({
  num,
  title,
  sub,
  body,
  spec,
  className,
}: PillarCardProps) {
  return (
    <div className={cn("bg-bg-subtle px-site py-12 lg:py-16", className)}>
      {/* Header row */}
      <div className="flex justify-between items-start mb-10">
        <span className="font-display text-[3rem] text-fg-ghost leading-none">
          {num}
        </span>
        <AccentBadge>{spec}</AccentBadge>
      </div>

      {/* Title */}
      <Typography variant="card-title-lg" as="h3" textColor="muted" className="mb-2">
        {title}
      </Typography>

      {/* Sub-title */}
      {/* <p className="font-sans text-[0.6rem] tracking-[0.18em] uppercase text-fg-faint mb-6">
        {sub}
      </p> */}
      <Typography variant="card-label" className="mb-6" textColor="faint">
        {sub}
      </Typography>


      {/* Body */}
      {/* <p className="font-sans text-[0.76rem] text-fg-faint leading-[1.8]">
        {body}
      </p> */}
      <Typography variant="card-body" textColor="faint">
        {body}
      </Typography>
    </div>
  );
}
