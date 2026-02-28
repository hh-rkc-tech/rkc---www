"use client";

import LocomotiveScrollProvider from "@/components/providers/LocomotiveScrollProvider";
import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import MissionStatement from "@/components/organisms/MissionStatement";
import FeaturedWorks from "@/components/organisms/FeaturedWorks";
import ServicesMarquee from "@/components/organisms/ServicesMarquee";
import HowWeDoIt from "@/components/organisms/HowWeDoIt";
import ProcessSection from "@/components/organisms/ProcessSection";
import AdvantagesSection from "@/components/organisms/AdvantagesSection";
import Testimonials from "@/components/organisms/Testimonials";
import Recognition from "@/components/organisms/Recognition";
import ContactSection from "@/components/organisms/ContactSection";
import Footer from "@/components/organisms/Footer";
import ResultsSection from "../organisms/ResultsSection";
import StatsSection from "../organisms/StatsSection";

/**
 * Home page template — assembles all organisms into the full page layout.
 * Keeps the page file thin and the structure declarative.
 */
export default function HomeTemplate() {
  return (
    <>
      <LocomotiveScrollProvider>
        <Navbar isHomepage={true} />
        <main className="bg-bg-base min-h-screen">
          <HeroSection />
          <MissionStatement />
          <FeaturedWorks />
          <ServicesMarquee />
          {/* <HowWeDoIt /> */}
          <ProcessSection />
          <AdvantagesSection />
          {/* <Recognition /> */}
          {/* <Testimonials /> */}
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
