import type { Metadata } from "next";
import PageWrapper from "@/components/templates/PageWrapper";
import PageHero from "@/components/organisms/PageHero";
import ContactSection from "@/components/organisms/ContactSection";
import { ORIGIN } from "@/lib/constants";
import { TallyForm } from "@/components/molecules/tally-form";

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


interface ContactInfoBlockProps {
  label: string;
  children: React.ReactNode;
}

function ContactInfoBlock({ label, children }: ContactInfoBlockProps) {
  return (
    <div className="border-t border-border pt-6 w-3/4">
      <p className="font-sans text-[0.55rem] tracking-[0.22em] uppercase text-fg-faint mb-2">
        {label}
      </p>
      {children}
    </div>
  );
}



export default function ContactPage() {
  return (
    <PageWrapper>
      <PageHero
        tag="[Mission Control]"
        title="Contact."
        description="Brief us on your production. We respond within 24 hours with a tailored configuration, load chart, and pricing. AOG support line available 24/7 for active productions."
      />

      <section className="px-site pb-28 md:pb-36 bg-white">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2 h-96 hidden md:block">
            <div className="flex flex-col gap-8 pt-2 min-w-[220px]">
              <ContactInfoBlock label="General Enquiries">
                <a
                  href="mailto:rkcinematics2807@gmail.com"
                  className="font-sans text-[0.78rem] text-accent tracking-[0.06em] no-underline hover:underline"
                >
                  rkcinematics2807@gmail.com
                </a>
              </ContactInfoBlock>

              <ContactInfoBlock label="Support Line">
                <p className="font-sans text-[0.78rem] text-fg-muted">+91 9374218010</p>
                <p className="font-sans text-[0.6rem] text-fg-faint tracking-[0.04em] mt-1">
                  24/7 production support
                </p>
              </ContactInfoBlock>

              <ContactInfoBlock label="Facility">
                <p className="font-sans text-[0.78rem] text-fg-muted leading-[1.6]">
                  1, Sardar Patel Ring Rd,
                  <br />
                  Odhav Industrial Estate,
                  <br />
                  Odhav,
                  <br />
                  Ahmedabad, Kathwada, Gujarat 382415
                </p>
              </ContactInfoBlock>
            </div>




          </div>
          <div className="w-full md:w-1/2 h-96">
            <TallyForm formId="81d7ek" />
          </div>
        </div>
      </section>
      <ContactSection />
    </PageWrapper>
  );
}
