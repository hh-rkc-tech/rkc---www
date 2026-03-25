import SectionTag from "@/components/atoms/SectionTag";
import Heading from "@/components/atoms/Heading";
import PillarCard from "@/components/molecules/PillarCard";
import Typography from "../atoms/Typography";

const pillars = [
  {
    num: "01",
    title: "The Millennium Transmission",
    sub: "Steel-Reinforced Kevlar Belt Drive",
    body: "Gears have backlash. Chains have chatter. The SETU series uses a steel-core Kevlar timing belt to deliver 2.5 m/s extension speed silently — below 20dB on a live sound stage.",
    spec: "< 20 dB at full speed",
  },
  {
    num: "02",
    title: "Aerospace-Grade Alloy",
    sub: "Aerospace Grade Aluminum Boom Sections",
    body: "The same alloy used in fighter jet airframes. At one-third the weight of steel with equivalent tensile strength, it reduces counterweight load and allows faster acceleration without flex.",
    spec: "⅓ weight vs steel",
  },
  {
    num: "03",
    title: "Fly-by-Wire Leveling",
    sub: "MEMS Gyroscope + Direct-Drive Servo",
    body: "Traditional cranes use heavy steel leveling rods. We removed them entirely. A MEMS gyroscope at the fulcrum feeds a direct-drive servo motor — real-time, frictionless, 30% lighter arm.",
    spec: "30% lighter arm assembly",
  },
  {
    num: "04",
    title: "Boron Steel Fulcrum",
    sub: "Laser-Cut Structural Chassis",
    body: "The base and main fulcrum are laser-cut from boron steel — the same structural philosophy as the Tesla Cybertruck. An immovable center of gravity regardless of extension load.",
    spec: "Immovable under 750 kg counterweight",
  },
];

export default function HowWeDoIt() {
  return (
    <section id="innovation" className="border-t border-border bg-bg-subtle">
      {/* Header — padded */}
      <div className="px-site pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="flex justify-between items-start flex-wrap gap-10">
          <div>
            <SectionTag>[Innovation / First Principles]</SectionTag>
            <Heading>
              We don&apos;t build cranes.
              <br />
              <span className="text-fg-faint">
                We solve the physics of camera movement.
              </span>
            </Heading>
          </div>
          {/* <p className="font-sans text-[0.72rem] text-fg-faint leading-[1.75] max-w-[320px] pt-2">
            Every engineering decision begins by asking: what is the fundamental
            physical requirement? Then we reject every assumption inherited from
            legacy manufacturers.
          </p> */}
          <Typography variant="para-base" className="max-w-2xl pt-2">
            Every engineering decision begins by asking: what is the fundamental
            physical requirement? Then we reject every assumption inherited from
            legacy manufacturers.
          </Typography>
        </div>
      </div>

      {/* 2×2 grid — full bleed, gap-px for dividers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border-t border-border">
        {pillars.map((p) => (
          <PillarCard key={p.num} {...p} />
        ))}
      </div>

      {/* Bottom padding */}
      <div className="pb-10 md:pb-16" />
    </section>
  );
}
