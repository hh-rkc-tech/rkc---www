"use client";

import LocomotiveScrollProvider from "@/components/providers/LocomotiveScrollProvider";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";

interface PageWrapperProps {
  children: React.ReactNode;
}

/**
 * Standard shell for every inner page.
 *
 * Provides:
 *  - CustomCursor          (was missing from all inner pages)
 *  - LocomotiveScrollProvider
 *  - Navbar (always-visible variant)
 *  - Footer
 *
 * Usage — just wrap page content:
 *   <PageWrapper>
 *     <PageHero ... />
 *     <SomeOrganismSection />
 *   </PageWrapper>
 */
export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <LocomotiveScrollProvider>
        <Navbar visible={true} />
        <main className="bg-bg-base min-h-screen">
          {children}
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
