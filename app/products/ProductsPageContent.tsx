"use client";

import Link from "next/link";
import { useState } from "react";
import PageWrapper from "@/components/templates/PageWrapper";
import Typography from "@/components/atoms/Typography";
import SectionTag from "@/components/atoms/SectionTag";
import SpecPill from "@/components/atoms/SpecPill";
import Button from "@/components/atoms/Button";
import { cn } from "@/lib/utils";
import { products } from "@/lib/products";

const filters = ["All", "Telescopic Crane", "Glider", "Cart"];

export function ProductsPageContent() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category.startsWith(activeFilter));

  return (
    <PageWrapper>
      {/* ── Page Header ── */}
      <section className="border-b border-border px-site pt-36 md:pt-40 pb-20 md:pb-24 bg-bg-subtle">
        <SectionTag>[Product Catalog]</SectionTag>
        <div className="flex justify-between items-end flex-wrap gap-8 mb-12">
          <Typography variant="display-xl" as="h1">
            PRODUCTS
          </Typography>
          <p className="font-sans text-[0.7rem] text-fg-faint leading-[1.75] max-w-[320px] tracking-[0.02em]">
            Every unit ships with factory load certification, full wiring
            schematics, and a 48-hour SLA within Mumbai and Hyderabad zones.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "font-sans text-[0.58rem] tracking-[0.18em] uppercase px-4 py-2",
                "border transition-colors duration-200",
                activeFilter === f
                  ? "bg-accent border-accent text-white"
                  : "bg-transparent border-border text-fg-faint hover:border-border-strong"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section className="px-site py-20 pb-32">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-px bg-border">
          {filtered.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="no-underline block"
            >
              <div
                className="bg-bg-base relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className={cn(
                      "w-full h-full object-cover block brightness-70",
                      "transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
                      hoveredId === product.id ? "scale-[1.06]" : "scale-100"
                    )}
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-accent/[0.15] flex items-center justify-center",
                      "transition-opacity duration-400",
                      hoveredId === product.id ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <span className="font-sans text-[0.6rem] tracking-[0.20em] uppercase text-white border border-white/50 px-6 py-2.5">
                      View Full Specs →
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-6 pt-7 pb-8">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-sans text-[0.52rem] tracking-[0.22em] uppercase text-accent mb-1.5">
                        {product.category}
                      </p>
                      <Typography variant="heading-product" as="h2">
                        {product.name}
                      </Typography>
                    </div>
                    <span className="font-sans text-[0.52rem] tracking-[0.15em] text-fg-ghost">
                      {product.tag}
                    </span>
                  </div>
                  <p className="font-sans text-[0.7rem] text-fg-faint leading-[1.7] mb-5">
                    {product.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <SpecPill key={spec}>{spec}</SpecPill>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-border mt-20 pt-12 flex justify-between items-center flex-wrap gap-6">
          <p className="font-sans text-[0.7rem] text-fg-faint leading-[1.75] max-w-[420px]">
            Need a custom configuration or a system not listed here? Our
            engineering team can fabricate to your production requirements.
          </p>
          <Link href="/contact">
            <Button variant="primary">Request Custom Spec →</Button>
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}