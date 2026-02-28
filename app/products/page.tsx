import type { Metadata } from "next";
import { ProductsPageContent } from "./ProductsPageContent";

export const metadata: Metadata = {
  title: "Products",
  description: "The RKC Series - precision-engineered telescopic camera cranes, mobile bases, and production carts. RKC-20, RKC-40, RKC-60 with 6-hour SLA.",
};

export default function ProductsPage() {
  return <ProductsPageContent />;
}