import SectionTag from "@/components/atoms/SectionTag";
import Heading from "@/components/atoms/Heading";
import TestimonialCard from "@/components/molecules/TestimonialCard";

const testimonials = [
  {
    quote:
      "We tested the SETU-40 on a 45-day feature in Film City. The extension speed matched what I've seen from imported Technocranes — but when something needed adjusting mid-shoot, the engineer was there in an hour. That doesn't happen with foreign equipment.",
    name: "Rajeev Menon",
    role: "Director of Photography",
    company: "@Yash Raj Films",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&q=80",
  },
  {
    quote:
      "The Mobile Base Pro handled the full RRR-scale set at Ramoji. Crab mode on a 20-tonne set floor with zero deviation. The 48V electric column saved us two minutes of setup on every single move. Over a 60-day shoot, that's hours.",
    name: "Senthil Kumar",
    role: "Key Grip",
    company: "@DVV Entertainment",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&q=80",
  },
  {
    quote:
      "The DIT Cart collapsed into a flight case in under two minutes. Flew to five cities in three weeks. No damage, no missing pins. The 19-inch rack rails meant my entire DIT rig mounted directly into the cart. It's the cleanest setup I've worked with.",
    name: "Priya Chandrasekhar",
    role: "Digital Imaging Technician",
    company: "@Excel Entertainment",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&q=80",
  },
  {
    quote:
      "I spec'd the SETU-60 for an aerial stunt sequence in Rajasthan. 60 feet, full extension, 55 kg payload including the remote head. Zero whip on fast pans. The truss geometry they've built into the boom sections is genuinely better engineering than what I've rented from Europe.",
    name: "Vikram Balaji",
    role: "Stunt & Special Effects DoP",
    company: "@S.S. Rajamouli Unit",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&q=80",
  },
  {
    quote:
      "We went with the Lease-to-Own model. By month 18, the crane had already paid for half of itself in rental income. By month 36 it's ours. I wish every piece of equipment on my inventory worked this way.",
    name: "Anand Shetty",
    role: "Owner / Rental House Director",
    company: "@Cinetech Rentals, Mumbai",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&q=80",
  },
];

/**
 * Testimonials — pure CSS marquee (animate-marquee from globals.css).
 * No JS requestAnimationFrame required.
 */
export default function Testimonials() {
  const tripled = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section
      id="showcase"
      className="border-t border-border bg-bg-subtle pt-28 pb-28 md:pt-36 md:pb-36"
    >
      <div className="px-site mb-16">
        <SectionTag>[Showcase / From the Set]</SectionTag>
        <Heading>
          Trusted by DoPs &amp; Grip teams
          <br />
          <span className="text-fg-faint">
            on India&apos;s biggest productions.
          </span>
        </Heading>
      </div>

      <div className="overflow-hidden">
        <div className="flex gap-5 w-max pl-site animate-marquee hover:[animation-play-state:paused]">
          {tripled.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
