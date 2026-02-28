"use client";

import { useEffect } from "react";

export default function LocomotiveScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let scroll: { destroy: () => void } | null = null;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.07,
          duration: 1.4,
          smoothWheel: true,
          wheelMultiplier: 0.9,
        },
      });
    };

    initScroll();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <>{children}</>;
}
