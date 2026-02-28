"use client";

import Link from "next/link";
import { useState } from "react";
import SpecPill from "@/components/atoms/SpecPill";
import Typography from "@/components/atoms/Typography";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  className?: string;
}

/**
 * Product card — image with zoom+overlay on hover, meta info, spec pills.
 */
export default function ProductCard({ product, className }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/products/${product.slug}`} className={cn("no-underline block", className)}>
      <div
        className="relative overflow-hidden bg-bg-surface cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.img}
            alt={product.name}
            className={cn(
              "w-full h-full object-cover block brightness-75",
              "transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
              hovered ? "scale-[1.06]" : "scale-100"
            )}
          />

          {/* Hover overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-accent/[0.18] flex items-center justify-center",
              "transition-opacity duration-400",
              hovered ? "opacity-100" : "opacity-0"
            )}
          >
            <span className="font-sans text-[0.65rem] tracking-[0.20em] uppercase text-white border border-white/50 px-5 py-2.5">
              View Specs →
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="px-5 pt-6 pb-7">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="font-sans text-[0.55rem] tracking-[0.22em] uppercase text-accent mb-1">
                {product.category}
              </p>
              <Typography variant="heading-product" as="h3">
                {product.name}
              </Typography>
            </div>
            <span className="font-sans text-[0.55rem] tracking-[0.15em] text-fg-ghost">
              {product.tag}
            </span>
          </div>

          <p className="font-sans text-[0.72rem] text-fg-faint leading-[1.7] mb-4">
            {product.desc}
          </p>

          {/* Spec pills */}
          <div className="flex flex-wrap gap-2">
            {product.specs.map((spec) => (
              <SpecPill key={spec}>{spec}</SpecPill>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
