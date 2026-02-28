// const items = [
//   "Silent-Glide Belt Drive",
//   "2.5 m/s Extension Speed",
//   "Active Digital Leveling",
//   "7075-T6 Aerospace Alloy",
//   "Multi-Mode Steering",
//   "Flight-Ready Cart System",
//   "Lease-to-Own",
//   "6-Hour SLA",
//   "Boron Steel Chassis",
//   "MEMS Gyroscope Control",
//   "Modular Architecture",
//   "Air-Suspension Delivery",
// ];

const items = [
  "Electric Touch Screen",
  "Fully Battery operated",
  "Hydraulic Fluid head",
  "Stabilized Telescopic arm motion",
  "Motorized system",
  "Motion control &  Encoding",
  "Quick Setup & Easy to transport ",
  "Aerospace-grade Aluminium",
  // "Boron Steel Chassis",
  // "MEMS Gyroscope Control",
  // "Modular Architecture",
  // "Air-Suspension Delivery",
];



/**
 * CSS-animation marquee — no JS frame loop, no inline styles needed.
 * The track is tripled so the loop is seamless.
 */
export default function ServicesMarquee() {
  const tripled = [...items, ...items, ...items];

  return (
    <section className="border-t border-border border-b border-b-border bg-bg-subtle py-8 overflow-hidden">
      <div className="overflow-hidden">
        <div
          className="flex w-max animate-marquee hover:[animation-play-state:paused]"
        >
          {tripled.map((item, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="font-sans text-[0.65rem] tracking-[0.22em] uppercase text-fg-faint whitespace-nowrap px-7">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
