"use client";

import Typography from "@/components/atoms/Typography";
import SectionTag from "@/components/atoms/SectionTag";


interface ContactInfoBlockProps {
  label: string;
  children: React.ReactNode;
}

function ContactInfoBlock({ label, children }: ContactInfoBlockProps) {
  return (
    <div className="border-t border-border pt-6">
      <p className="font-sans text-[0.55rem] tracking-[0.22em] uppercase text-fg-faint mb-2">
        {label}
      </p>
      {children}
    </div>
  );
}

export default function ContactSection() {
    

  return (
    <section
      id="contact"
      className="border-t border-border bg-bg-elevated block md:hidden"
    >



      {/* Heading + contact info */}
      <div className="px-site py-28 md:py-36 border border-border bg-white">
        <div className="flex justify-between items-start flex-wrap gap-8">
          {/* Left */}
          <div>
            <SectionTag>[Mission Control]</SectionTag>
            <Typography variant="heading-xl" as="h2">
              Ready to move 
              <br />
              the camera
              <br />
              <span className="text-fg-ghost">differently?</span>
            </Typography>
          </div>

          {/* Right: contact info */}
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
      </div>



    </section>
  );
}
