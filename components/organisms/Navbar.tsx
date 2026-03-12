"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import NavLinkItem from "@/components/atoms/NavLinkItem";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Products",   href: "/products" },
  // { label: "Innovation", href: "/innovation" },
  // { label: "Showcase",   href: "/showcase" },
  // { label: "Events",   href: "/event" },
  { label: "Blog",   href: "/blog" },
  { label: "Contact",    href: "/contact" },
];

interface NavbarProps {
  visible?: boolean;
  isHomepage?: boolean;
}

export default function Navbar({ visible = true, isHomepage = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      {/* ── Main bar ── */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100]",
          "flex items-center justify-between",
          "px-site h-14",
          "transition-all duration-400",
          isHomepage
           ? "text-black"
           : "text-black",
          scrolled
            ? "bg-bg-elevated/[0.92] backdrop-blur-md border-b border-border"
            : "bg-transparent border-b border-transparent",
          visible ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-[1.5rem] tracking-[0.04em] text-fg-base no-underline hover:text-accent transition-colors duration-300"
        >
          <img src="/rklogo.svg" alt="RK Cinematics Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLinkItem key={link.label} href={link.href} scrolled={scrolled} isHomepage={isHomepage}>
              {link.label}
            </NavLinkItem>
          ))}

          {/* <ThemeToggle /> */}

          <Link
            href="/contact"
            className={cn(
              "font-sans text-[0.6rem] tracking-[0.20em] uppercase",
              "text-white bg-accent border border-accent px-5 py-2",
              "hover:bg-accent-hover hover:border-accent-hover",
              "transition-colors duration-300 no-underline"
            )}
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          {/* <ThemeToggle /> */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-[5px] p-1 bg-transparent border-none"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={cn(
                  "block w-[22px] h-[1.5px] bg-fg-base transition-all duration-300 origin-center",
                  menuOpen && i === 0 && "translate-y-[6.5px] rotate-45",
                  menuOpen && i === 1 && "scale-x-0 opacity-0",
                  menuOpen && i === 2 && "-translate-y-[6.5px] -rotate-45"
                )}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-[99] bg-bg-elevated/[0.97] flex flex-col justify-center items-center gap-10">
          {NAV_LINKS.map((link) => (
            <NavLinkItem
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-[2.5rem] tracking-[0.08em] text-fg-faint hover:text-fg-base"
            >
              {link.label}
            </NavLinkItem>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={cn(
              "font-sans text-[0.7rem] tracking-[0.25em] uppercase",
              "text-white bg-accent px-8 py-3.5 mt-4 no-underline",
              "hover:bg-accent-hover transition-colors duration-300"
            )}
          >
            Get a Quote
          </Link>
        </div>
      )}
    </>
  );
}
