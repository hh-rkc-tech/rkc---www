import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
}

/**
 * Semantic heading with display font option.
 * Default: h2, Inter light, base colour.
 */
export default function Heading({ as: Tag = "h2", children, className }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-sans font-light text-fg-base leading-[1.15] tracking-[-0.02em]",
        "text-[clamp(2rem,5vw,4rem)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
