import { cn } from "@/lib/utils";
import { Typography } from "../atoms/Typography";

interface CertRowProps {
  year: string;
  title: string;
  body: string;
  detail: string;
  className?: string;
}

/**
 * Single certification row in the Recognition table.
 */
export default function CertRow({ year, title, body, detail, className }: CertRowProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-[60px_1fr_1fr] items-center gap-4 py-5 border-b border-border-faint",
        className
      )}
    >
      {/* Year */}
      <p className="font-sans text-[0.7rem] tracking-[0.05em] text-fg-faint">
        {year}
      </p>

      {/* Title + body */}
      <div>
        <Typography variant="para-base" textColor="muted" className="mb-0.5">
          {title}
        </Typography>
        <Typography variant="para-sm" textColor="faint">
          {body}
        </Typography>
      </div>

      {/* Detail */}
      <Typography variant="para-sm" textColor="faint">
        {detail}
      </Typography>
    </div>
  );
}
