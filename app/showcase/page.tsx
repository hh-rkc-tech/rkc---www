import type { Metadata } from "next";
import PageWrapper from "@/components/templates/PageWrapper";
import PageHero from "@/components/organisms/PageHero";
import Testimonials from "@/components/organisms/Testimonials";
import Recognition from "@/components/organisms/Recognition";
import FeaturedWorks from "@/components/organisms/FeaturedWorks";

export const metadata: Metadata = {
  title: "Showcase",
  description: "Trusted by DoPs, grip teams, and production houses on Bollywood, Tollywood, and international shoots. Real testimonials from Yash Raj Films, DVV Entertainment, and more.",
};

export default function ShowcasePage() {
  return (
    <PageWrapper>
      <PageHero
        tag="[From the Set]"
        title="Showcase."
        description="Trusted by DoPs, grip teams, and production houses on Bollywood, Tollywood, and international shoots. Real testimonials, real productions, real results."
      />

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── Product grid ── */}
      <FeaturedWorks />

      {/* ── Certifications & Recognition ── */}
      <Recognition />
    </PageWrapper>
  );
}
