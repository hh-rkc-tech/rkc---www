import HomeTemplate from "@/components/templates/HomeTemplate";
import { Metadata } from "next";
import { ORIGIN } from "@/lib/constants";
/**
 * Home page — delegates entirely to the HomeTemplate.
 * All sections are composed inside the template via atomic design.
 */


// TODO: Need to understand metadata
export const metadata: Metadata = {
  title: "RK Cinematics | Professional Cinematography Services",
  description:
    "Discover RK Cinematics, a trusted provider of professional cinematography services. Explore high-quality visual storytelling solutions for global industries.",
  metadataBase: new URL(ORIGIN),
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    title: "RK Cinematics | Professional Cinematography Services",
    description:
      "Discover RK Cinematics, a trusted provider of professional cinematography services. Explore high-quality visual storytelling solutions for global industries.",
    url: `/`,
    siteName: "RK Cinematics",
    images: [
      {
        url: `${ORIGIN}/homepage_og_image.png`, // Must be an absolute URL
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function Home() {
  return <HomeTemplate />;
}
