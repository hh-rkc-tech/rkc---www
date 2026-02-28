import type { MetadataRoute } from "next";

/**
 * Generate robots.txt for SEO.
 * Allows all crawlers and points to sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://elgajjar.com/sitemap.xml",
  };
}