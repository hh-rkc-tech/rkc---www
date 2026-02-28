import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  img: string;
  className?: string;
}

/**
 * Single testimonial card used in the scrolling carousel.
 */
export default function TestimonialCard({
  quote,
  name,
  role,
  company,
  img,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "shrink-0 flex flex-col justify-between gap-10 min-h-[280px]",
        "w-[clamp(280px,45vw,440px)] p-10",
        "border border-border bg-bg-surface",
        className
      )}
    >
      {/* Quote */}
      <p className="font-sans text-[0.82rem] text-fg-muted leading-[1.8] font-light">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="border-t border-border pt-6 flex items-center gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={name}
          width={32}
          height={32}
          className="rounded-full object-cover border border-border-strong grayscale-[30%] shrink-0"
        />
        <div>
          <p className="font-sans text-[0.72rem] text-fg-muted font-medium tracking-[0.05em] uppercase">
            {name}
          </p>
          <p className="font-sans text-[0.58rem] tracking-[0.12em] uppercase text-fg-faint mt-0.5">
            {role}{" "}
            <span className="text-accent">{company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
