import Link from "next/link";
import SectionTag from "@/components/atoms/SectionTag";
import Heading from "@/components/atoms/Heading";
import ProductCard from "@/components/molecules/ProductCard";
import { products } from "@/lib/products";
import Typography from "../atoms/Typography";

export default function FeaturedWorks() {
  return (
    <section
      id="products"
      className="border-t border-border px-site py-28 md:py-36"
    >
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-10 mb-16">
        <div>
          <SectionTag>[Product Catalog]</SectionTag>
          <Heading>
            The SETU Series.
            <br />
            <span className="text-fg-faint">Three cranes. One standard.</span>
          </Heading>
        </div>

        <div className="flex flex-col items-end gap-3 pt-2">
          {/* <p className="font-sans text-[0.65rem] text-fg-faint leading-[1.7] max-w-[280px] text-right tracking-[0.04em]">
            All RKC products ship with factory load certification, full wiring
            schematics, and a 6-hour SLA within Mumbai and Hyderabad zones.
          </p> */}
          <Typography variant="para-sm" className="text-right max-w-sm">
            Precision-engineered telescopic cranes & cinema gear. Built for fluid motion and heavy payloads. Elevate your production with RK Cinematics gear.
          </Typography>
          <Link
            href="/products"
            className="font-sans text-[0.6rem] tracking-[0.18em] uppercase text-accent no-underline hover:underline"
          >
            View All Products →
          </Link>
        </div>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} />
        ))}
      </div>
    </section>
  );
}
