import SectionTag from "@/components/atoms/SectionTag";
import Heading from "@/components/atoms/Heading";
import ProcessStepCard from "@/components/molecules/ProcessStepCard";
import MetaItem from "@/components/molecules/MetaItem";

const steps = [
  {
    num: "01",
    title: "Consultation & Spec Review",
    desc: "You brief us on the production — scale, locations, camera weight, remote head requirements. We draft a configuration that matches your shoot, not a stock rental catalogue.",
  },
  {
    num: "02",
    title: "Custom Fabrication & CNC",
    desc: "Every unit is built to your configuration at our Ahmedabad facility. Aero-Space Grade Alluminium sections are cut and finished. Electronics are wired, calibrated, and benched.",
  },
  {
    num: "03",
    title: "Factory Load Testing & QC",
    desc: "Before dispatch, every crane runs a 24-point inspection under full rated load. Extension cycles, leveling accuracy, and noise floor are measured and documented.",
  },
  {
    num: "04",
    title: "Air-Suspension Delivery & On-Set Setup",
    desc: "Equipment ships in ATA-300 flight cases via air-suspension truck. Our engineer is on location for setup, commissioning, and operator hand-off.",
  },
];

const sideInfo = [
  {
    label: "SLA Guarantee",
    value:
      "Any mechanical failure in Mumbai or Hyderabad met with a replacement unit or specialist within 24 to 48 hours.",
  },
  // {
  //   label: "Business Model",
  //   value:
  //     "Lease-to-Own over 36 months. Monthly fee covered by rental income. Own the asset outright at term end.",
  // },
  {
    label: "Customization",
    value:
      "Modular design allows for custom boom lengths, payload capacities, and remote head interfaces to suit your production needs.",
  }
];

export default function ProcessSection() {
  return (
    <section id="services" className="border-t border-border">
      {/* Header — padded */}
      <div className="px-site pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="flex justify-between items-start flex-wrap gap-10">
          <div>
            <SectionTag>[Services / How We Operate]</SectionTag>
            <Heading>
              From enquiry to equipment on set.
              <br />
              <span className="text-fg-faint">Four steps. Zero compromise.</span>
            </Heading>
          </div>

          <div className="flex flex-col gap-6 pt-2 max-w-[300px]">
            {sideInfo.map((item) => (
              <MetaItem key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
      </div>

      {/* Steps grid — full bleed, gap-px for dividers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border-t border-border">
        {steps.map((step) => (
          <ProcessStepCard key={step.num} {...step} />
        ))}
      </div>

      {/* Bottom padding */}
      <div className="pb-10 md:pb-16" />
    </section>
  );
}
