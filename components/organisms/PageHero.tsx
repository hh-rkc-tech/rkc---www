import Typography from "@/components/atoms/Typography";
import SectionTag from "@/components/atoms/SectionTag";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  /** Optional section tag text e.g. "[Mission Control]" */
  tag?: string;
  /** Large display title — the page name */
  title: string;
  /** Optional one-paragraph description beneath the title */
  description?: string;
  /** Extra Tailwind classes to override or extend the root element */
  className?: string;
}

/**
 * Consistent page-level hero heading block used across ALL inner pages.
 *
 * Renders:
 *   [tag]           ← SectionTag atom
 *   Giant H1 Title
 *   Description copy (optional)
 *
 * Background is bg-bg-subtle so it reads as a distinct section from
 * the bg-bg-base content below.
 */
export default function PageHero({
  tag,
  title,
  description,
  className,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "px-site pt-36 md:pt-40 pb-20 md:pb-24  bg-bg-subtle",
        className
      )}
    >
      {tag && <SectionTag>{tag}</SectionTag>}

      <Typography variant="display-lg" as="h1" className="mb-10">
        {title}
      </Typography>

      {description && (
        <p className="font-sans text-[clamp(0.75rem,1.5vw,0.92rem)] text-fg-faint leading-[1.8] font-light max-w-[42rem]">
          {description}
        </p>
      )}
    </div>
  );
}
