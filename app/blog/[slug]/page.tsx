import PageHero from "@/components/organisms/PageHero";
import PageWrapper from "@/components/templates/PageWrapper";
import { client } from "@/lib/sanity/client";
import { formatPublishedDate } from "@/lib/utils/formatedate";
import { createImageUrlBuilder } from "@sanity/image-url";
import { PortableText } from "next-sanity";
import Image from 'next/image';
import Link from "next/link";

const builder = createImageUrlBuilder(client);
function urlFor(source: any) {
    return builder.image(source);
}

const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    publishedAt,
    author->,
    "img": mainImage,
    body
}`;

export default async function BlogPostPage(props: { params: { slug: string } }) {
    const params = (await props.params)
    const slug = params.slug
    const post = await client.fetch(query, { slug });
    // console.log('Fetched post:', post);
    if (!post) {
        return (
            <div className="error-state">
                <h1>404 - Post Not Found</h1>
                <p>The article you are looking for does not exist.</p>
            </div>
        );
    }
    // console.log(post.author)
    return (
        <PageWrapper>
            {/* Breadcrumb */}
        <div className="absolute top-28 left-[clamp(1.25rem,6vw,6.5rem)] z-[2] flex items-center gap-3">
          <Link
            href="/blog"
            className="font-sans text-[0.58rem] tracking-[0.2em] uppercase text-fg-ghost hover:text-fg-faint transition-colors no-underline"
          >
            Blog
          </Link>
          <span className="text-fg-ghost text-[0.55rem]">/</span>
          <span className="font-sans text-[0.58rem] tracking-[0.2em] uppercase text-accent">
            {post.title}
          </span>
        </div>
            {/* ── Page Header ── */}
            <PageHero
                // tag="[ Blogs ]"
                title={post.title}
                titleVariant="display-md"
                className="pb-4 md:pb-10"
                // description="Every unit ships with factory load certification and a 48-hour SLA."
            />
            <article>
                <div>
                    {post.img && (
                        <div style={{ position: 'relative', width: '100%', marginBottom: '2rem' }} className="flex justify-center">
                            <Image
                                src={urlFor(post.img).url()}
                                alt={`Cover image for ${post.title}`}
                                width={800}
                                height={800}
                                style={{ objectFit: 'cover', borderRadius: '12px' }}
                                priority
                            />
                        </div>
                    )}
                </div>
                <div className="bg-white">
                    <div className="prose bg-white mx-auto max-w-2xl pt-10 px-site">
                        <PortableText components={{
                            block: {
                                h1: ({ children }) => <h1 className="text-3xl mt-20 mb-10 " >{children}</h1>,
                                h2: ({ children }) => <h2 className="text-2xl mt-16 mb-8" >{children}</h2>,
                                h3: ({ children }) => <h3 className="text-xl mt-12 mb-6" >{children}</h3>,
                                p: ({ children }) => <p className="text-base mb-4" >{children}</p>
                            },
                            types: {
                                // Custom objects like images GO HERE, not in 'block'
                                image: ({ value }: { value: any }) => {
                                    if (!value?.asset?._ref) return null; // Always fail fast if data is missing

                                    return (
                                        <div style={{ position: 'relative', width: '100%', height: '400px', margin: '2rem 0' }}>
                                            <Image
                                                src={urlFor(value).auto('format').fit('max').url()}
                                                alt={value.alt || 'Article inline image'}
                                                fill
                                                style={{ objectFit: 'contain', borderRadius: '8px' }}
                                                sizes="(max-width: 800px) 100vw, 800px"
                                            />
                                        </div>
                                    );
                                }
                            }
                        }}
                            value={post.body}
                        />
                    </div>
                    <div style={{ textAlign: 'left', marginTop: '5rem', }} className="flex flex-row gap-x-10 pb-10 justify-center">
                        <div>
                            <Image
                                src={urlFor(post.author.mainImage).url()}
                                alt={`Cover image for ${post.author?.name || 'Unknown Author'}`}
                                width={400}
                                height={400}
                                style={{ borderRadius: '12px' }}
                                priority
                                className='h-12 w-12'
                            />
                        </div>
                        <div>
                            <p style={{ color: '#666' }}>Written by {post.author?.name || 'Unknown Author'}</p>

                            <p>{formatPublishedDate(post.publishedAt)}</p>
                        </div>
                    </div>
                </div>
            </article>
        </PageWrapper>
    );
}