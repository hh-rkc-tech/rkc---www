"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  scrolled?: boolean;
  isHomepage?: boolean;
  onClick?: () => void;
}

/**
 * Single nav link — desktop variant.
 * Ultra-small all-caps Inter, hover brightens colour.
 */
export default function NavLinkItem({ href, children, className, onClick, scrolled, isHomepage }: NavLinkItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "font-sans text-[0.65rem] tracking-[0.18em] uppercase",
        "transition-colors duration-300 no-underline",
        isHomepage
        ? (scrolled ? "text-black hover:text-[#E7218B]" : "text-white hover:text-[#E7218B]")
        :  (scrolled ? "text-black hover:text-[#E7218B]" : "text-black hover:text-[#E7218B]"),
        className
      )}
    >
      {children}
    </Link>
  );
}
