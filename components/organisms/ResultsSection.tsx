import SectionTag from "@/components/atoms/SectionTag";
import Heading from "@/components/atoms/Heading";

const loadChart = [
  { extension: "10 ft",      payload: 85, counterweight: 200 },
  { extension: "20 ft",      payload: 80, counterweight: 350 },
  { extension: "30 ft",      payload: 70, counterweight: 500 },
  { extension: "40 ft (Max)",payload: 60, counterweight: 750 },
];

const MAX_PAYLOAD = 85;

const comparisonRows = [
  { spec: "Max Reach",        egc: "40 ft (12.2 m)",      competitor: "38 ft" },
  { spec: "Telescopic Speed", egc: "2.5 m/s",             competitor: "1.8 m/s" },
  { spec: "Max Payload",      egc: "75 kg (Under-slung)", competitor: "60 kg" },
  { spec: "Arm Weight",       egc: "850 kg",              competitor: "1,100 kg" },
  { spec: "Lens Height",      egc: "25 ft (Over-slung)",  competitor: "22 ft" },
  { spec: "Noise Floor",      egc: "< 20 dB",             competitor: "> 35 dB" },
];

export default function ResultsSection() {
  return (
    <section className="border-t border-border px-site py-28 md:py-36">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-8 mb-20">
        <div>
          <SectionTag>[Technical Data]</SectionTag>
          <Heading>
            SETU-40 Load Chart
            <br />
            <span className="text-fg-faint">&amp; Competitive Benchmark</span>
          </Heading>
        </div>
        <p className="font-sans text-[0.68rem] text-fg-faint leading-[1.7] max-w-[280px] pt-2 tracking-[0.04em]">
          All load values tested at factory under certification conditions.
          Competitor standard derived from comparative analysis of MovieBird and
          Chapman-Leonard specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Load Chart */}
        <div>
          <p className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-fg-faint mb-8">
            Payload vs. Extension
          </p>
          <div className="flex flex-col gap-5">
            {loadChart.map((row) => (
              <div key={row.extension}>
                <div className="flex justify-between mb-2">
                  <span className="font-sans text-[0.65rem] text-fg-muted tracking-[0.04em]">
                    {row.extension}
                  </span>
                  <span className="font-display text-[1rem] text-fg-base tracking-[0.04em]">
                    {row.payload} kg
                    <span className="font-sans text-[0.55rem] text-fg-faint ml-2">
                      / {row.counterweight} kg CW
                    </span>
                  </span>
                </div>
                {/* Bar */}
                <div className="h-[3px] bg-fg-ghost rounded overflow-hidden">
                  <div
                    className="h-full bg-accent rounded"
                    style={{ width: `${(row.payload / MAX_PAYLOAD) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison table */}
        <div>
          <p className="font-sans text-[0.6rem] tracking-[0.22em] uppercase text-fg-faint mb-8">
            SETU-40 vs. Competitor Standard
          </p>

          {/* Header row */}
          <div className="grid grid-cols-3 gap-4 pb-3 border-b border-border mb-2">
            {["Specification", "SETU-40", "Competitor"].map((h) => (
              <p
                key={h}
                className="font-sans text-[0.55rem] tracking-[0.18em] uppercase text-fg-ghost"
              >
                {h}
              </p>
            ))}
          </div>

          {comparisonRows.map((row) => (
            <div
              key={row.spec}
              className="grid grid-cols-3 gap-4 py-3.5 border-b border-border-faint items-center"
            >
              <p className="font-sans text-[0.68rem] text-fg-faint">{row.spec}</p>
              <p className="font-sans text-[0.72rem] font-medium text-accent">{row.egc}</p>
              <p className="font-sans text-[0.68rem] text-fg-faint">{row.competitor}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
