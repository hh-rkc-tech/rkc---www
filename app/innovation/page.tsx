import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/templates/PageWrapper";
import PageHero from "@/components/organisms/PageHero";
import HowWeDoIt from "@/components/organisms/HowWeDoIt";

export const metadata: Metadata = {
  title: "Innovation",
  description: "First-principles engineering behind RKC telescopic camera cranes. Kevlar belt drive, aerospace-grade alloy, fly-by-wire leveling, and boron steel chassis.",
};

export default function InnovationPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="[First Principles Engineering]"
        title="Innovation."
        description="Every engineering decision begins by asking: what is the fundamental physical requirement? Then we reject every assumption inherited from legacy manufacturers. Four core breakthroughs define the RKC platform."
      />

      {/* ── Engineering pillars ── */}
      <HowWeDoIt />

      {/* ── Bottom CTA strip ── */}
      <div className="border-t border-border py-20 px-site flex justify-between items-center flex-wrap gap-8 bg-bg-elevated">
        <div>
          <p className="font-sans text-[0.55rem] tracking-[0.25em] uppercase text-fg-ghost mb-2.5">
            Ready to apply this engineering to your production?
          </p>
          <p className="font-sans font-light text-[clamp(1.1rem,2.5vw,2rem)] text-fg-muted tracking-[-0.01em]">
            See the RKC Series in full technical detail.
          </p>
        </div>
        <Link
          href="/products"
          className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-white bg-accent px-8 py-3.5 no-underline whitespace-nowrap hover:bg-accent/90 transition-colors"
        >
          View All Products →
        </Link>
      </div>
    </PageWrapper>
  );
}
