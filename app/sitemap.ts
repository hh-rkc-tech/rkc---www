import type { MetadataRoute } from "next";
// import { products } from "@/lib/products";
import { ORIGIN } from "@/lib/constants";
import { client } from "@/lib/sanity/client";

/**
 * Generate sitemap for SEO.
 * Includes all static pages and dynamic product pages.
 */

const productsQuery = `*[_type == "product"] {
  _id,
  name,
  "slug": slug.current
}`;
const articlesQuery = `*[_type == "blogPost"] {
  title,
    "slug": slug.current
}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = ORIGIN;
  const products = await client.fetch(productsQuery);
  const articles = await client.fetch(articlesQuery);


  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // {
    //   url: `${baseUrl}/innovation`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // {
    //   url: `${baseUrl}/showcase`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.7,
    // },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic product pages
  const productPages: MetadataRoute.Sitemap = products.map((product: any) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const articlePages: MetadataRoute.Sitemap = articles.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));


  return [...staticPages,
  ...productPages,
  ...articlePages
  ];
}