import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef, type ReactNode } from "react";

/**
 * Typography component using Class Variance Authority (CVA)
 * Replaces all h1-h6 instances with a consistent design system.
 */

const typographyVariants = cva("", {
  variants: {
    variant: {
      // Display H1 - Hero section (video cutout with blend mode)
      "display-hero": "font-display text-[clamp(3.5rem,14vw,16rem)] leading-[0.85] tracking-[0.02em] select-none py-[0.15em] [mix-blend-mode:difference] drop-shadow-xl text-white",
      // Display H1 - Large hero/page titles
      "display-xl": "font-display text-[clamp(4rem,14vw,14rem)] leading-[0.88] tracking-[0.02em]",
      // Display H1 - Page titles (product pages)
      "display-lg": "font-display text-[clamp(4rem,12vw,10rem)] leading-[0.88] tracking-[0.02em]",
      // Display H1 - Error/NotFound pages
      "display-md": "font-display text-[clamp(4rem,12vw,8rem)] leading-[0.85]",
      // Sans H2 - Large section heading (Contact)
      "heading-xl": "font-sans font-light text-[clamp(2.5rem,8vw,7rem)] tracking-[-0.03em] leading-[0.9]",
      // Sans H2 - Medium section heading (Footer)
      "heading-lg": "font-sans font-light text-[clamp(1.6rem,3.5vw,3rem)] tracking-[-0.02em] leading-[1.15]",
      // Sans H2 - Small section heading (Product detail)
      "heading-md": "font-sans font-light text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.02em] leading-[1.2]",
      // Display H2/H3 - Product card title
      "heading-product": "font-display text-2xl tracking-[0.04em] leading-none",
      // Sans H3 - Card title (Process, Advantage)
      "card-title": "font-sans font-medium text-[0.88rem] tracking-[-0.01em] leading-[1.4]",
      // Sans H3 - Card title (Pillar)
      "card-title-lg": "font-sans font-medium text-xl tracking-[-0.01em]",
      "card-label": "font-sans text-xs tracking-widest uppercase",
      "card-body": "font-sans text-sm text-fg-faint leading-[1.8]",
      // Sans H3 - Card title (Advantage)
      "card-title-sm": "font-sans font-medium text-[0.9rem] tracking-[-0.01em] leading-[1.4]",
      "card-title-base": "font-sans font-medium text-base tracking-[-0.01em] leading-[1.4]",
      "para-base": "font-sans font-light text-base text-fg-faint leading-[1.85]",
      "para-sm": "font-sans text-sm text-fg-faint leading-[1.7] tracking-[0.04em]"
      
    },
    textColor: {
      base: "text-fg-base",
      muted: "text-fg-muted",
      faint: "text-fg-faint",
      accent: "text-accent",
      ghost: "text-fg-ghost",
    },
  },
  defaultVariants: {
    variant: "display-xl",
    textColor: "base",
  },
});

type TypographyVariantProps = VariantProps<typeof typographyVariants>;

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface TypographyProps {
  variant: NonNullable<TypographyVariantProps["variant"]>;
  as?: HeadingElement;
  textColor?: TypographyVariantProps["textColor"];
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Typography component for consistent headings across the app.
 *
 * Usage:
 * ```tsx
 * <Typography variant="display-xl" as="h1">MOTION.</Typography>
 * <Typography variant="heading-lg" as="h2" textColor="muted">Ready to move differently?</Typography>
 * <Typography variant="card-title" as="h3">Step 01</Typography>
 * ```
 */
const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ variant, as: Component = "h1", textColor = "base", className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant, textColor }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants, type TypographyVariantProps };
export default Typography;
