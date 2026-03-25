"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import PageWrapper from "@/components/templates/PageWrapper";
import Typography from "@/components/atoms/Typography";
import SectionTag from "@/components/atoms/SectionTag";
import Button from "@/components/atoms/Button";
import { cn } from "@/lib/utils";
import { client } from '../../lib/sanity/client';
import imageUrlBuilder from "@sanity/image-url";
import { products as sampleProducts } from "@/lib/products";
import SpecPill from "@/components/atoms/SpecPill";
import PageHero from "@/components/organisms/PageHero";



const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const filters = ["All", "Telescopic Crane", "Glider", "Cart"];

// The fixed query
const query = `*[_type == "product"] {
  _id,
  name,
  "slug": slug.current,
  tagline,
  tag,
  category->, 
  specs,
  "img": img, 
  "thumbnail": thumbnail.asset->url
}`;

export default function ProductsPageContent() {
  const [products, setProducts] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch data inside useEffect for Client Components
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Sanity fetch error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filtered = activeFilter === "All"
    ? products
    : products.filter((p) => p.category === activeFilter);

  console.log(products)

  if (loading) return <div className="pt-40 px-site text-white uppercase text-[0.6rem] tracking-widest">Loading Systems...</div>;

  return (
    <PageWrapper>
      {/* ── Page Header ── */}
        <PageHero
          tag="[Product Catalog]"
          title="PRODUCTS."
          description="Every unit ships with factory load certification and a 48-hour SLA."
        />
      <section className="px-site pt-3 md:pt-4 pb-2 md:pb-4 bg-bg-subtle">

        {/* <SectionTag> */}
          {/*           
          [Product Catalog]</SectionTag>
        <div className="flex justify-between items-end flex-wrap gap-8 mb-12">

          <Typography variant="display-xl" as="h1">PRODUCTS</Typography>
          <p className="font-sans text-[0.7rem] text-fg-faint leading-[1.75] max-w-[320px] tracking-[0.02em]">
            Every unit ships with factory load certification and a 48-hour SLA.
          </p>
        </div> */}
{/* 
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={cn(
                  "font-sans text-[0.58rem] tracking-[0.18em] uppercase px-4 py-2 border transition-colors",
                  activeFilter === f ? "bg-accent border-accent text-white" : "bg-transparent border-border text-fg-faint"
                )}
              >
                {f}
              </button>
            ))}
          </div> */}
      </section>

      {/* ── Product Grid ── */}
      <section className="px-site py-20 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {filtered.map((product) => (
            <Link key={product._id} href={`/products/${product.slug}`} className="no-underline block">
              <div
                className="bg-bg-base relative overflow-hidden cursor-pointer h-full"
                onMouseEnter={() => setHoveredId(product._id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  {product.img && (
                    <img
                      src={urlFor(product.img).width(800).url()}
                      alt={product.name}
                      className={cn(
                        "w-full h-full object-cover block brightness-75 transition-transform duration-700",
                        hoveredId === product._id ? "scale-[1.06]" : "scale-100"
                      )}
                    />
                  )}
                  <div className={cn(
                    "absolute inset-0 bg-accent/[0.15] flex items-center justify-center transition-opacity duration-400",
                    hoveredId === product._id ? "opacity-100" : "opacity-0"
                  )}>
                    <span className="font-sans text-[0.6rem] tracking-[0.20em] uppercase text-white border border-white/50 px-6 py-2.5">
                      View Full Specs →
                    </span>
                  </div>
                </div>

                <div className="px-6 pt-7 pb-8">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-sans text-[0.52rem] tracking-[0.22em] uppercase text-accent mb-1.5">
                        {product.category.title}
                      </p>
                      <Typography variant="heading-product" as="h2">{product.name}</Typography>
                    </div>
                    <span className="font-sans text-[0.52rem] tracking-[0.15em] text-fg-ghost">{product.tag}</span>
                  </div>
                  <p className="font-sans text-[0.7rem] text-fg-faint leading-[1.7] mb-5">{product.tagline}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.specs.map((specs:any) => (
                      <SpecPill key={specs}>{specs}</SpecPill>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </PageWrapper>
  );
}