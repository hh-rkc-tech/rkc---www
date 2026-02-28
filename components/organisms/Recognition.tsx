import Heading from "@/components/atoms/Heading";
import CertRow from "@/components/molecules/CertRow";
import Typography from "../atoms/Typography";

const certifications = [
  { year: "25'", title: "ISO 9001:2015 Certified",          body: "Bureau Veritas",                     detail: "Quality Management System" },
  { year: "24'", title: "CE Marking — Machinery Directive", body: "European Conformity",                detail: "Directive 2006/42/EC" },
  { year: "24'", title: "Featured Manufacturer",            body: "Cine Gear Expo",                     detail: "Los Angeles" },
  { year: "23'", title: "Structural Load Certification",    body: "TÜV Rheinland",                      detail: "Full extension at rated payload" },
  { year: "23'", title: "RoHS Compliant",                   body: "Restriction of Hazardous Substances",detail: "EU Directive 2011/65/EU" },
  { year: "22'", title: "Approved Supplier",                body: "IATSE Local 600",                    detail: "International Cinematographers Guild" },
  { year: "22'", title: "PLASA Industry Member",            body: "PLASA Association",                  detail: "Professional Staging & Production" },
];

export default function Recognition() {
  return (
    <section className="border-t border-border px-site py-28 md:py-36">
      {/* Header */}
      <div className="flex justify-between items-end flex-wrap gap-8 mb-16">
        <Heading>Certifications &amp; Industry Recognition</Heading>
        <p className="font-sans text-[0.6rem] tracking-[0.25em] uppercase text-fg-ghost">
          [{certifications.length}] Total
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="min-w-[520px]">
          {/* Column headers */}
          <div className="grid grid-cols-[60px_1fr_1fr] gap-4 pb-3.5 border-b border-border">
            {["Year", "Certification", "Detail"].map((col) => (
              <Typography variant="card-label"
                key={col}
                textColor="ghost"
              >
                {col}
              </Typography>
            ))}
          </div>

          {certifications.map((cert) => (
            <CertRow key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
