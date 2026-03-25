import Heading from "@/components/atoms/Heading";
import AdvantageCard from "@/components/molecules/AdvantageCard";

const advantages = [
  {
    tag: "[01]",
    title: "30% Lighter",
    desc: "Aerospace aluminum versus the mild steel used by legacy crane manufacturers. Less mass means faster acceleration, smaller counterweight, and a lighter total payload on the base.",
  },
  {
    tag: "[02]",
    title: "Local Engineering Support",
    desc: "Our engineers are in Ahmedabad with a replacement unit ready to roll. 24 to 48-hour SLA guarantee in Mumbai and Hyderabad.",
  },
  {
    tag: "[03]",
    title: "Built for Indian Sets",
    desc: "Uneven stages in Film City. Cobblestones in Rajmahal. Sand in Rajasthan. Our Mobile Base was tested in Indian conditions by Indian grips — not in a European factory parking lot.",
  },
  // {
  //   tag: "[04]",
  //   title: "Lease-to-Own, Not Lease-Forever",
  //   desc: "After 36 months of monthly payments — covered by the rental income the crane generates — it is yours. No import duties, no surprise service fees. The asset sits on your balance sheet, not ours.",
  // },
  {
    tag: "[04]",
    title: "Precision Motion, Not Just a Lift",
    desc: "Our cranes are engineered as precision motion control systems, not glorified elevators. Stabilized telescopic arm motion, and vibration damping ensure fluid, repeatable moves every time.",
  }
];

export default function AdvantagesSection() {
  return (
    <section className="border-t border-border bg-bg-subtle">
      {/* Header — padded */}
      <div className="px-site pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="flex justify-between items-start flex-wrap gap-10">
          <Heading>
            Why Indian productions
            <br />
            <span className="text-fg-faint">are switching to RK Cinematics.</span>
          </Heading>
          <p className="font-sans text-[0.6rem] tracking-[0.28em] uppercase text-fg-ghost pt-2">
            [The RK Cinematics Advantage]
          </p>
        </div>
      </div>

      {/* Cards grid — full bleed, gap-px for dividers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border-t border-border">
        {advantages.map((a) => (
          <AdvantageCard key={a.tag} {...a} />
        ))}
      </div>

      {/* Bottom padding */}
      <div className="pb-10 md:pb-16" />
    </section>
  );
}
