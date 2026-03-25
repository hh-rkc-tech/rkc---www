"use client";

import SectionTag from "@/components/atoms/SectionTag";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";
import MetaItem from "@/components/molecules/MetaItem";
import { Typography } from "../atoms/Typography";
import { useRouter } from "next/navigation";

const meta = [
  { label: "Founded", value: "2022" },
  { label: "Headquarters", value: "Ahmedabad, Gujarat" },
  { label: "Primary Markets", value: "Mumbai · Hyderabad" },
  { label: "Specialty", value: "Telescopic Cranes, Sliders, Dual Axis slider, Camera carts, Dollys." },
];

export default function MissionStatement() {

const router = useRouter()

  return (
    <section className="border-t border-border px-site py-28 md:py-36">
      {/* Top split */}
      <div className="flex justify-between items-start flex-wrap gap-10 mb-24">
        {/* Left */}
        <div className="max-w-5xl">
          <SectionTag>[Our Mission]</SectionTag>
          <Heading className="mb-8">
            Indian cinema has evolved into a global powerhouse.
            <br />
            <span className="text-fg-faint">Its infrastructure should match.</span>
          </Heading>
          <Typography variant="para-base" className="max-w-2xl">
            RK Cinematics was founded on a single observation: the best
            DoPs in Bollywood and Tollywood were limited not by vision, but by
            equipment. Imported cranes arrive months late, cost multiples of the
            lease value in service fees, and come with engineers who have never
            set foot on an Indian set.
          </Typography>
        </div>
        {/* Meta column */}
        <div className="flex flex-col gap-7 min-w-[200px] pt-2">
          {meta.map((item) => (
            <MetaItem key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </div>

      {/* Pull quote */}
      <div className="border-t border-border pt-14 flex gap-12 items-start flex-wrap">
        <p className="font-sans text-[0.6rem] tracking-[0.20em] uppercase text-fg-ghost shrink-0 pt-1">
          [Philosophy]
        </p>
        <blockquote className="font-sans font-light text-[clamp(1.1rem,2.5vw,1.75rem)] text-fg-muted tracking-[-0.01em] leading-[1.5] max-w-[700px] m-0 border-none">
          &ldquo;A camera crane is not a lift. It is a precision instrument for
          moving a sensor through three-dimensional space with zero vibration.
          We engineer it that way.&rdquo;
        </blockquote>
      </div>

      {/* CTA */}
      <div className="mt-16">
        <Button
          variant="outline-accent"
          onClick={() => {
            // Redirect to contact page
            router.push("/contact")
          }}
        >
          Request Full Catalog →
        </Button>
      </div>
    </section>
  );
}
