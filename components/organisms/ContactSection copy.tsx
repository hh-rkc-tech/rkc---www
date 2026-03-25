"use client";

import { useState } from "react";
import Typography from "@/components/atoms/Typography";
import SectionTag from "@/components/atoms/SectionTag";
import Button from "@/components/atoms/Button";
import FormField from "@/components/molecules/FormField";
import { cn } from "@/lib/utils";

const regions = ["Mumbai", "Hyderabad", "Delhi / NCR", "International"];
const interests = [
  "Lease (36-Month)",
  "Purchase Outright",
  "Rental Partner Program",
  "Custom Fabrication",
];

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
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [downloadCad, setDownloadCad] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleInterest = (s: string) =>
    setSelectedInterests((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  return (
    <section
      id="contact"
      className="border-t border-border bg-bg-elevated"
    >
      {/* Form */}
      <div className="px-site pb-20 md:pb-28">
        <div className=" p-[clamp(2rem,5vw,3.5rem)]">
          <p className="font-sans font-light text-[clamp(1.25rem,3vw,1.75rem)] text-fg-muted tracking-[-0.01em] mb-10">
            Tell us about your production.
          </p>

          {sent ? (
            <div className="flex flex-col items-center justify-center h-56 gap-4">
              <p className="font-display text-[2.5rem] text-accent tracking-[0.04em]">
                Enquiry Received ✓
              </p>
              <p className="font-sans text-[0.72rem] text-fg-faint tracking-[0.08em]">
                Our team will respond within 24 hours with a tailored configuration.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="flex flex-col gap-7"
            >
              {/* Name + Production House */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="Name" type="text" placeholder="Rajeev Menon" required />
                <FormField label="Production House" type="text" placeholder="Yash Raj Films" required />
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField label="Email" type="email" placeholder="rajeev@studio.com" />
                <FormField label="Phone" type="tel" placeholder="+91 98XX XXXXXX" />
              </div>

              {/* Region selector */}
              <div>
                <label className="font-sans text-[0.55rem] tracking-[0.22em] uppercase text-fg-faint block mb-3">
                  Region
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {regions.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setSelectedRegion(r)}
                      className={cn(
                        "font-sans text-[0.68rem] tracking-[0.10em] uppercase py-3",
                        "border transition-colors duration-200",
                        selectedRegion === r
                          ? "border-accent bg-accent-subtle text-accent"
                          : "border-field-border bg-field-bg text-fg-faint hover:border-border-strong"
                      )}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interest selector */}
              <div>
                <label className="font-sans text-[0.55rem] tracking-[0.22em] uppercase text-fg-faint block mb-3">
                  I am interested in...
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interests.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggleInterest(s)}
                      className={cn(
                        "font-sans text-[0.68rem] tracking-[0.10em] uppercase py-3",
                        "border transition-colors duration-200",
                        selectedInterests.includes(s)
                          ? "border-accent bg-accent-subtle text-accent"
                          : "border-field-border bg-field-bg text-fg-faint hover:border-border-strong"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Production brief */}
              <div className="flex flex-col gap-2.5">
                <label className="font-sans text-[0.55rem] tracking-[0.22em] uppercase text-fg-faint block">
                  Production Brief
                </label>
                <textarea
                  rows={4}
                  placeholder="Describe your production — scale, locations, camera system, required arm length, timeline."
                  className={cn(
                    "w-full bg-field-bg border border-field-border",
                    "text-fg-base font-sans text-[0.82rem] px-4 py-3",
                    "outline-none placeholder:text-fg-faint resize-none",
                    "transition-colors duration-200 focus:border-accent/50"
                  )}
                />
              </div>

              {/* CAD Download checkbox */}
              <button
                type="button"
                onClick={() => setDownloadCad(!downloadCad)}
                className="flex items-center gap-3.5 bg-transparent border-none p-0 cursor-pointer text-left"
              >
                <div
                  className={cn(
                    "w-4 h-4 border shrink-0 flex items-center justify-center transition-colors duration-200",
                    downloadCad
                      ? "bg-accent border-accent"
                      : "bg-transparent border-border-strong"
                  )}
                >
                  {downloadCad && (
                    <span className="text-white text-[10px] leading-none">✓</span>
                  )}
                </div>
                <p className="font-sans text-[0.68rem] text-fg-faint tracking-[0.04em]">
                  Download Full CAD Specifications &amp; Load Charts with my response
                </p>
              </button>

              <Button
                type="submit"
                variant="primary"
                className="w-full justify-center py-4 text-[0.68rem]"
              >
                Submit Enquiry →
              </Button>

              <p className="font-sans text-[0.58rem] text-fg-ghost tracking-[0.06em] uppercase">
                By submitting, you agree to our Terms and Privacy Policy.
              </p>
            </form>
          )}
        </div>
      </div>



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
                1, Kalptaru Industrial Estate,
                <br />
                Sardar Patel Ring Rd, 
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
