import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/templates/PageWrapper";
import PageHero from "@/components/organisms/PageHero";
import ServicesMarquee from "@/components/organisms/ServicesMarquee";
import ProcessSection from "@/components/organisms/ProcessSection";
import AdvantagesSection from "@/components/organisms/AdvantagesSection";

export const metadata: Metadata = {
  title: "Services",
  description: "From consultation and custom fabrication to air-suspension delivery and on-set commissioning. Full-service telescopic camera crane solutions with 6-hour SLA.",
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="[How We Operate]"
        title="Services."
        description="From consultation and custom fabrication to air-suspension delivery and on-set commissioning — four steps with zero compromise. Backed by a 6-hour SLA in Mumbai and Hyderabad zones."
      />

      {/* ── Capabilities marquee ── */}
      <ServicesMarquee />

      {/* ── 4-step process ── */}
      <ProcessSection />

      {/* ── Why RKC advantages ── */}
      <AdvantagesSection />

      {/* ── Bottom CTA ── */}
      <div className="border-t border-border py-20 px-site flex justify-between items-center flex-wrap gap-8 bg-bg-elevated">
        <div>
          <p className="font-sans text-[0.55rem] tracking-[0.25em] uppercase text-fg-ghost mb-2.5">
            Ready to begin?
          </p>
          <p className="font-sans font-light text-[clamp(1.1rem,2.5vw,2rem)] text-fg-muted tracking-[-0.01em]">
            Brief us on your production requirements.
          </p>
        </div>
        <Link
          href="/contact"
          className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-white bg-accent px-8 py-3.5 no-underline whitespace-nowrap hover:bg-accent/90 transition-colors"
        >
          Get in Touch →
        </Link>
      </div>
    </PageWrapper>
  );
}
