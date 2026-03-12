"use client"
import Typography from "@/components/atoms/Typography";
import PageHero from "@/components/organisms/PageHero";
import PageWrapper from "@/components/templates/PageWrapper";
import { client } from "@/lib/sanity/client";
import { cn } from "@/lib/utils";
import { formatPublishedDate } from "@/lib/utils/formatedate";
import { createImageUrlBuilder } from "@sanity/image-url";
import Link from "next/link";
import { useState } from "react";

//TODO:Add metadata

const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}

const query = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
    publishedAt,
    author->,
    "img": mainImage,
    "plaintextBody": pt::text(body)
}`;

const posts = await client.fetch(query);
export default function BlogListingPage() {
    
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    if (!posts || posts.length === 0) {
        return (
            <div className="empty-state">
                <h1>Our Blog</h1>
                <p>No posts have been published yet. Check back soon!</p>
            </div>
        );

    }
    return (
        <PageWrapper>
            {/* ── Page Header ── */}
            <PageHero
                tag="[ Articles ]"
                title="BLOG"
                // TODO: Add Descrepitions
                // description="Every unit ships with factory load certification and a 48-hour SLA."
            />

            {/* Blog Grid */}
            <section className="px-site py-20 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border ">
                    {posts.map((post : any) => (
                        <Link key={post._id} href={`/blog/${post.slug}`} className="no-underline block">
                            <div
                                className="bg-bg-base relative overflow-hidden cursor-pointer h-full"
                                onMouseEnter={() => setHoveredId(post._id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    {post.img && (
                                        <img
                                            src={urlFor(post.img).width(800).url()}
                                            alt={post.title}
                                            className={cn(
                                                "w-full h-full object-cover block brightness-75 transition-transform duration-700",
                                                hoveredId === post._id ? "scale-[1.06]" : "scale-100"
                                            )}
                                        />
                                    )}
                                    <div className={cn(
                                        "absolute inset-0 bg-accent/[0.15] flex items-center justify-center transition-opacity duration-400",
                                        hoveredId === post._id ? "opacity-100" : "opacity-0"
                                    )}>
                                        <span className="font-sans text-[0.6rem] tracking-[0.20em] uppercase text-white border border-white/50 px-6 py-2.5">
                                            View Full Blog →
                                        </span>
                                    </div>
                                </div>

                                <div className="px-6 pt-7 pb-8">
                                    <div className="flex flex-row justify-between items-center mb-3">
                                        <div>
                                            <p className="font-sans text-xs text-[#E7218B] leading-[1.7]">{post.author.name}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-fg-faint">{formatPublishedDate(post.publishedAt)}</p>
                                        </div>
                                    </div>
                                    <div>
                                            <Typography variant="heading-product" as="h2">{post.title}</Typography>
                                    </div>
                                    <div>
                                            <Typography variant="para-sm"  className="pr-8 mt-2 tracking-normal truncate">{post.plaintextBody} </Typography>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </PageWrapper>
    );
};