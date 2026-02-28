import StatCard from "@/components/molecules/StatCard";

const stats = [
  {
    value: "2.5",
    unit: "m/s",
    label: "Telescopic Extension Speed",
    sub: "Silent-Glide Belt Drive",
  },
  {
    value: "85",
    unit: "kg",
    label: "Max Payload Capacity",
    sub: "RKC-40 at 10ft extension",
  },
  {
    value: "530",
    unit: "km",
    label: "Overnight Mumbai Deployment",
    sub: "Ahmedabad → Film City by 06:00",
  },
  {
    value: "36",
    unit: "mo",
    label: "Lease-to-Own Term",
    sub: "Zero large Capex for rental houses",
  },
];

/**
 * 2×2 grid of stat cards.
 * gap-px + bg-border creates 1px dividers between cells without JSX border props.
 * This also works correctly on mobile (2-col stays 2-col, dividers always correct).
 */
export default function StatsSection() {
  return (
    <section className="grid grid-cols-2 gap-px bg-border border-t border-border">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </section>
  );
}
