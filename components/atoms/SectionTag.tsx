import { cn } from "@/lib/utils";
import Typography from "./Typography";

interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Small bracketed uppercase label used at the top of every section.
 * e.g. [Our Mission]
 */
export default function SectionTag({ children, className }: SectionTagProps) {
  return (
    <Typography      variant="card-label" textColor="accent"
      className={cn(
        "mb-6 tracking-[0.4rem]",
        className
      )}
    >
      {children}
    </Typography>
  );
}
