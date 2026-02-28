"use client";

import Link from "next/link";
import Typography from "@/components/atoms/Typography";
import MetaItem from "@/components/molecules/MetaItem";
import SectionTag from "@/components/atoms/SectionTag";

const sitemapLinks = [
  { label: "Home",       href: "/" },
  { label: "Products",   href: "/products" },
  // { label: "Innovation", href: "/innovation" },
  // { label: "Showcase",   href: "/showcase" },
  // { label: "Services",   href: "/services" },
  { label: "Contact",    href: "/contact" },
  // { label: "About",      href: "#about" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/rk_cinematics?igsh=MzdxbDhleXpsNDQy" },
  { label: "YouTube",   href: "https://www.youtube.com/channel/UCQkB6hewTQ1cR_RJhR_359g" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/rkcinematics/" },
  { label: "Facebook",  href: "https://www.facebook.com/people/RKCinematics/100095535724322/" },

];

const aboutMeta = [
  { label: "Founded",         value: "2016" },
  { label: "Headquarters",    value: "Ahmedabad, Gujarat" },
  { label: "Primary Markets", value: "Mumbai · Hyderabad" },
  { label: "Products",        value: "RKC-20 / RKC-40 / RKC-60" },
  { label: "SLA Zone",        value: "48-Hour Response" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const handleAboutClick = (e: React.MouseEvent, href: string) => {
    if (href === "#about") {
      e.preventDefault();
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-bg-elevated">
      {/* ── About block ── */}
      {/* <div
        id="about"
        className="px-site pt-24 pb-20 md:pt-28 md:pb-24 border-b border-border"
      >
        <div className="flex justify-between items-start flex-wrap gap-16">
          // Left copy
          <div className="max-w-[560px]">
            <SectionTag>[About RK Cinematics]</SectionTag>
            <Typography variant="heading-lg" as="h2" textColor="muted" className="mb-8">
              The first intelligent camera crane
              <br />
              engineered in India.
            </Typography>
            <p className="font-sans text-[0.80rem] text-fg-faint leading-[1.85] mb-5">
              RK Cinematics is a precision cinema equipment manufacturer
              based in Ahmedabad, Gujarat. We design and fabricate telescopic
              camera cranes, mobile bases, and production carts for Bollywood,
              Tollywood, and global film productions.
            </p>
            <p className="font-sans text-[0.80rem] text-fg-faint leading-[1.85]">
              Every unit is CNC-machined, load-tested under factory certification,
              and deployed via air-suspension logistics. We don&apos;t build
              equipment — we solve the physics of camera movement.
            </p>
          </div>

          // Right meta
          <div className="flex flex-col gap-6 pt-1">
            {aboutMeta.map((item) => (
              <MetaItem key={item.label} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
      </div> */}

      {/* ── Wordmark + sitemap + bottom bar ── */}
      <div className="px-site py-28 md:py-36">
        {/* Wordmark + sitemap */}
        <div className="flex justify-between items-start flex-wrap gap-8 mb-20">
          {/* Wordmark */}
          <div>
            <Link href="/" className="no-underline block mb-3">
              <span className="font-display text-[clamp(2rem,7vw,7rem)] leading-[0.85] text-fg-muted tracking-[-0.01em]">
                <img src="/rklogo.svg" alt="RK Cinematics Logo" className="h-15 w-auto" />
              </span>
              {/* <sup className="text-accent text-base align-super">®</sup> */}
            </Link>
            <p className="font-sans text-[0.6rem] tracking-[0.20em] uppercase text-fg-ghost">
              Cinema Equipment Manufacturer · Ahmedabad, Gujarat
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <p className="font-sans text-[0.52rem] tracking-[0.25em] uppercase text-fg-ghost mb-5">
              Sitemap
            </p>
            <div className="flex flex-col gap-2.5">
              {sitemapLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleAboutClick(e, link.href)}
                  className="font-sans text-[0.72rem] tracking-[0.10em] uppercase text-fg-faint hover:text-fg-base transition-colors duration-300 no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border-faint pt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="font-sans text-[0.58rem] tracking-[0.16em] uppercase text-fg-ghost">
            Terms &amp; Conditions
          </p>
          <p className="font-sans text-[0.58rem] tracking-[0.16em] uppercase text-fg-ghost">
            © {year} RK Cinematics
          </p>
          <div className="flex gap-6 flex-wrap">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-sans text-[0.58rem] tracking-[0.16em] uppercase text-fg-ghost hover:text-accent transition-colors duration-300 no-underline"
              >
                {s.label}
              </a>
            ))}
          </div>
          {/* <p className="font-sans text-[0.58rem] tracking-[0.16em] uppercase text-fg-ghost">
            Privacy Policy
          </p> */}
        </div>
      </div>
    </footer>
  );
}
