import type { Metadata } from "next";
import PageWrapper from "@/components/templates/PageWrapper";
import PageHero from "@/components/organisms/PageHero";
import ContactSection from "@/components/organisms/ContactSection";
import { ORIGIN } from "@/lib/constants";

export const metadata: Metadata = {
  title: "RK Cinematics | Contact",
  description: "Get in touch with RK Cinematics. Request a quote for telescopic camera cranes, mobile bases, and production carts. 24/7 AOG support line available.",
  
  metadataBase: new URL(ORIGIN),
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    title: "RK Cinematics | Contact",
    description:
    "Get in touch with RK Cinematics. Request a quote for telescopic camera cranes, mobile bases, and production carts. 24/7 AOG support line available.",
    url: `/`,
    siteName: "RK Cinematics",
    images: [
      {
        url: `${ORIGIN}/contact_og_image.png`, // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};



export default function ContactPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="[Mission Control]"
        title="Contact."
        description="Brief us on your production. We respond within 24 hours with a tailored configuration, load chart, and pricing. AOG support line available 24/7 for active productions."
      />
      <ContactSection />
    </PageWrapper>
  );
}
