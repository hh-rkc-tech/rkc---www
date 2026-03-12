import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Typography from "@/components/atoms/Typography";
import { cn } from "@/lib/utils";
import PageWrapper from "@/components/templates/PageWrapper";
import { products, getProductBySlug, getAdjacentProducts } from "@/lib/products";
import { client } from "@/lib/sanity/client";
import { BlockContent } from "@/components/utility/portable-text";
import { createImageUrlBuilder } from "@sanity/image-url";

const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const query = `*[_type == "product"  && slug.current == $slug][0] {
  _id,
  name,
  "slug": slug.current,
  tagline,
  tag,
  category->, 
  specs,
  desc,
  detailSpecs,
  "img": img, 
  "thumbnail": thumbnail.asset->url,
  "brochure" : brochure.asset->url,
}`;

// Generate static pages for all products at build time
export default async function productDetailsPage(props: any) {
  const params = (await props.params)
  const slug = params.slug;
  console.log(slug);
  const product = await client.fetch(query, { slug });

  if (!product) {
    return (
      <div className="error-state">
        <h1>404 - Product Not Found</h1>
        <p>The Product you are looking for does not exist.</p>
      </div>
    )
  }



  // Generate metadata for SEO
  // export function generateMetadata({ 
  //   params 
  // }: { 
  //   params: Promise<{ slug: string }> 
  // }): Promise<Metadata> {
  //   return params.then(({ slug }) => {
  //     const product = getProductBySlug(slug);
  //     if (!product) return { title: "Product Not Found" };

  //     return {
  //       title: `${product.name} | RK Cinematics`,
  //       description: product.desc,
  //       openGraph: {
  //         title: `${product.name} | RK Cinematics`,
  //         description: product.tagline,
  //         images: [product.img],
  //         type: "website",
  //       },
  //     };
  //   });
  // }

  // Server Component - no "use client" needed for the page itself
  // export default async function ProductDetailPag({params,}: {params: Promise<{ slug: string }>;}) {
  //   const { slug } = await params;
  //   const product = getProductBySlug(slug);

  //   if (!product) notFound();

  // const { prev, next } = getAdjacentProducts(slug);
  // const maxPayload = product.loadChart
  //   ? Math.max(...product.loadChart.map((r) => r.payload))
  //   : 100;

  return (

    <PageWrapper>
      {/* ── Hero ── */}
      <section className="relative w-full h-screen aspect-2/1 flex items-end">
        <div className="">
          {/* Background image */}
          <img
            src={urlFor(product.img).width(800).url()}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.45] grayscale-[0.2] z-0"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-base via-bg-base/60 to-transparent z-[1]" />

          {/* Breadcrumb */}
          <div className="absolute top-28 left-[clamp(1.25rem,6vw,6.5rem)] z-[2] flex items-center gap-3">
            <Link
              href="/products"
              className="font-sans text-[0.58rem] tracking-[0.2em] uppercase text-fg-ghost hover:text-fg-faint transition-colors no-underline"
            >
              Products
            </Link>
            <span className="text-fg-ghost text-[0.55rem]">/</span>
            <span className="font-sans text-[0.58rem] tracking-[0.2em] uppercase text-accent">
              {product.name}
            </span>
          </div>

        </div>

        {/* Hero text */}
        <div className="relative z-[2] px-site pb-14 w-full flex justify-between items-end flex-wrap gap-4">
          <div>
            <p className="font-sans text-[0.58rem] tracking-[0.24em] uppercase text-accent mb-3">
              {product.category.title}
            </p>
            <Typography variant="display-lg" as="h1" className="m-0">
              {product.name}
            </Typography>
            <p className="font-sans text-[clamp(0.75rem,1.5vw,1rem)] text-fg-ghost mt-4 tracking-[0.02em] font-light">
              {product.tagline}
            </p>
          </div>
          {/* Spec pills row */}
          <div className="flex gap-2 flex-wrap py-5">
            {product.specs.map((spec: any) => (
              <span
                key={spec}
                className="font-sans text-[0.55rem] tracking-[0.12em] uppercase text-fg-muted border border-border-faint px-3 py-1.5 backdrop-blur-md bg-black/30"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

      </section>

      {/* ── Description + Detailed Specs ── */}
      <section className="border-b border-border px-site">

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          {/* Left: description */}
          <div>
            <p className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-accent mb-6">
              [Overview]
            </p>
            <p className="font-sans font-light text-lg leading-[1.65] tracking-[-0.01em] text-fg-muted mb-10">
              <BlockContent value={product.desc} />
            </p>

            {/* CTA buttons */}
            <div className="flex gap-3 flex-wrap">
              <Link href="/contact">
                <button className="font-sans text-[0.6rem] tracking-[0.2em] uppercase text-white bg-accent border border-accent px-7 py-3.5 cursor-pointer hover:bg-accent/90 transition-colors">
                  Request a Quote →
                </button>
              </Link>
              <Link href={product.brochure}>
                <button className="font-sans text-[0.6rem] pb-5 tracking-[0.2em] uppercase text-fg-muted bg-transparent border border-border px-7 py-3.5 cursor-pointer hover:border-border-strong transition-colors">
                  Download Brochure →
                </button>
              </Link>
            </div>
          </div>

          {/* Right: spec table */}
          <div>
            <p className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-fg-ghost mb-6 ">
              Specifications
            </p>
            <div>
              {product.detailSpecs?.map?.((spec: any, i: any) => (
                <div
                  key={spec.label}
                  className={cn(
                    "grid grid-cols-2 gap-4 py-3.5 border-b border-border/30 items-center",
                    i % 2 !== 0 && "bg-fg-base/[0.015]"
                  )}
                >
                  <p className="font-sans text-[0.62rem] text-fg-ghost tracking-[0.04em]">
                    {spec.label}
                  </p>
                  <p className="font-sans text-[0.68rem] font-medium text-fg-muted tracking-[0.02em]">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Load Chart (only for cranes with loadChart data) ── */}
      {product.loadChart && (
        <section className="border-b border-border py-24 px-site bg-bg-subtle">
          <div className="max-w-[1400px] mx-auto">
            <p className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-accent mb-5">
              [Load Chart]
            </p>
            <Typography variant="heading-md" as="h2" className="mb-14">
              {product.name} Payload vs. Extension
              <br />
              <span className="text-fg-ghost text-[0.7em]">
                Factory certified — all values at rated counterweight
              </span>
            </Typography>

            {/* <div className="max-w-[640px]">
              {product.loadChart.map((row) => (
                <div key={row.extension} className="mb-6">
                  <div className="flex justify-between mb-2 items-center">
                    <span className="font-sans text-[0.65rem] text-fg-ghost tracking-[0.06em]">
                      {row.extension}
                    </span>
                    <span className="flex items-baseline gap-2">
                      <span className="font-display text-[1.1rem] text-fg-base tracking-[0.04em]">
                        {row.payload} kg
                      </span>
                      <span className="font-sans text-[0.52rem] text-fg-ghost">
                        / {row.counterweight} kg CW
                      </span>
                    </span>
                  </div>
                  <div className="h-1 bg-border/30 rounded-sm overflow-hidden">
                    {/* Dynamic width must be inline — Tailwind can't generate arbitrary runtime values */}
            {/* <div
                      className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-sm transition-[width] duration-1000 ease-[cubic-bezier(0.76,0,0.24,1)]"
                      style={{ width: `${(row.payload / maxPayload) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div> */}

            <p className="font-sans text-[0.58rem] text-fg-ghost tracking-[0.04em] mt-8 leading-[1.7]">
              All load values tested under factory certification conditions.
              Counterweight values are minimum required for rated payload at the
              specified extension.
            </p>
          </div>
        </section>
      )}

      {/* ── SLA & Delivery Strip ── */}
      <section className="border-b border-border py-16 px-site">
        <div className="max-w-[1400px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-px bg-border">
          {[
            {
              label: "SLA Response",
              value: "48-Hour",
              sub: "Mumbai & Hyderabad zones",
            },
            {
              label: "Delivery Method",
              value: "Air-Suspension",
              sub: "Dedicated truck, on-site engineer",
            },
            {
              label: "Certification",
              value: "Factory Load Test",
              sub: "Full documentation included",
            },
            {
              label: "Financing",
              value: "Lease-to-Own",
              sub: "36-month program — own at term end",
            },
          ].map((item) => (
            <div key={item.label} className="bg-bg-base px-7 py-8">
              <p className="font-sans text-[0.52rem] tracking-[0.2em] uppercase text-fg-ghost mb-3">
                {item.label}
              </p>
              <p className="font-display text-[1.5rem] tracking-[0.04em] text-accent mb-1 leading-none">
                {item.value}
              </p>
              <p className="font-sans text-[0.62rem] text-fg-ghost tracking-[0.02em] leading-[1.5]">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Prev / Next Product navigation ── */}
      {/* <section
        className={cn(
          "px-site grid",
          prev && next ? "grid-cols-2" : "grid-cols-1"
        )}
      >
        {prev && (
          <Link href={`/products/${prev.slug}`} className="no-underline">
            <div
              className={cn(
                "p-12 border-b border-border transition-colors duration-300 hover:bg-accent/[0.04] cursor-pointer",
                next && "border-r border-border"
              )}
            >
              <p className="font-sans text-[0.52rem] tracking-[0.2em] uppercase text-fg-ghost mb-3">
                ← Previous
              </p>
              <p className="font-sans text-[0.55rem] tracking-[0.14em] uppercase text-fg-faint mb-1">
                {prev.category}
              </p>
              <p className="font-display text-[1.75rem] tracking-[0.04em] text-fg-base leading-none">
                {prev.name}
              </p>
            </div>
          </Link>
        )}
        {next && (
          <Link href={`/products/${next.slug}`} className="no-underline">
            <div className="p-12 text-right border-b border-border transition-colors duration-300 hover:bg-accent/[0.04] cursor-pointer">
              <p className="font-sans text-[0.52rem] tracking-[0.2em] uppercase text-fg-ghost mb-3">
                Next →
              </p>
              <p className="font-sans text-[0.55rem] tracking-[0.14em] uppercase text-fg-faint mb-1">
                {next.category}
              </p>
              <p className="font-display text-[1.75rem] tracking-[0.04em] text-fg-base leading-none">
                {next.name}
              </p>
            </div>
          </Link>
        )}
      </section> */}
    </PageWrapper>
  );
}

