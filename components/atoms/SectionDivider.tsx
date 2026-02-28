import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

/**
 * Decorative focus-thread ruler separator.
 * Uses the focus_threads.svg as a horizontal divider between sections.
 * Inverts in dark mode so it reads as a light mark on a dark background.
 */
export default function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("w-full overflow-hidden select-none pointer-events-none", className)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/focus_threads.svg"
        alt=""
        className="w-full h-auto dark:invert dark:opacity-20 opacity-25"
        draggable={false}
      />
    </div>
  );
}
