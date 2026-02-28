"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Custom cursor — outer ring (lagging) + inner dot (exact).
 *
 * Performance optimizations:
 * - RAF only runs when cursor position has changed
 * - Uses visibility API to pause animation when tab is hidden
 * - Hover detection uses event delegation on document
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0;
    let mouseY = 0;
    let curX = 0;
    let curY = 0;
    let raf: number | null = null;
    let isAnimating = false;

    /* ── Position tracking ── */
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      
      // Only start RAF if not already running
      if (!isAnimating) {
        isAnimating = true;
        raf = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      const dx = mouseX - curX;
      const dy = mouseY - curY;
      
      // Only update if there's meaningful movement
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        curX += dx * 0.12;
        curY += dy * 0.12;
        cursor.style.transform = `translate(${curX - 20}px, ${curY - 20}px)`;
        raf = requestAnimationFrame(animate);
      } else {
        // Stop RAF when cursor catches up (saves CPU when idle)
        isAnimating = false;
        raf = null;
      }
    };

    /* ── Hover detection via event delegation ── */
    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      }
    };
    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [data-cursor-hover]")) {
        setIsHovering(false);
      }
    };

    /* ── Pause animation when tab is hidden ── */
    const onVisibilityChange = () => {
      if (document.hidden && raf) {
        cancelAnimationFrame(raf);
        isAnimating = false;
        raf = null;
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Outer ring — lagging */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={[
          "cursor-none pointer-events-none fixed top-0 left-0 z-[9999]",
          "rounded-full border border-white mix-blend-difference",
          "transition-[width,height,margin] duration-300",
          isHovering ? "w-14 h-14 -ml-2 -mt-2" : "w-10 h-10",
        ].join(" ")}
      />
      {/* Inner dot — exact */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-white mix-blend-difference"
      />
    </>
  );
}
