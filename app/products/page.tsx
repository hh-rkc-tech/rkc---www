import type { Metadata } from "next";
import { ProductsPageContent } from "./ProductsPageContent";
import { ORIGIN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "RK Cinematics | Products",
  description: "Precision-engineered telescopic camera cranes, mobile bases, and production carts. SETU-20, SETU-40, SETU-60 with 48-hour SLA.",

  metadataBase: new URL(ORIGIN),
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    title: "RK Cinematics | Products",
    description: "Precision-engineered telescopic camera cranes, mobile bases, and production carts. SETU-20, SETU-40, SETU-60 with 48-hour SLA.",
    url: `/`,
    siteName: "RK Cinematics",
    images: [
      {
        url: `${ORIGIN}/products_og_image.png`, // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

};

export default function ProductsPage() {
  return <ProductsPageContent />;
}