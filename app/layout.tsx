import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ORIGIN } from "@/lib/constants";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleTagManager } from "@next/third-parties/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0f0f0" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "RK Cinematics® | Telescopic Camera Cranes & Cinema Equipment",
    template: "%s | RK Cinematics",
  },
  description:
    "Precision-engineered telescopic camera cranes, mobile bases, and production carts. Manufactured in Ahmedabad for Bollywood, Tollywood, and global productions. Silent-Glide Belt Drive. 2.5 m/s. Lease-to-Own.",
  keywords: [
    "telescopic camera crane",
    "camera crane India",
    "film equipment",
    "cinema equipment",
    "SETU series",
    "Bollywood film equipment",
    "Tollywood film equipment",
    "camera crane rental",
    "production equipment",
  ],
  authors: [{ name: "RK Cinematics" }],
  creator: "RK Cinematics",
  publisher: "RK Cinematics",
  metadataBase: new URL(ORIGIN),
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "RK Cinematics",
    title: "RK Cinematics® | Telescopic Camera Cranes",
    description: "Precision-engineered telescopic camera cranes for Bollywood, Tollywood, and global productions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "RK Cinematics® | Telescopic Camera Cranes",
    description: "Precision-engineered telescopic camera cranes for Bollywood, Tollywood, and global productions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
       * Anti-FOUC script: runs before React hydration.
       * Reads localStorage preference and sets .dark class on <html>.
       * suppressHydrationWarning above is required because the class
       * differs between server render and client hydration.
       */}
      {process.env.VERCEL_ENV === "production" ?
        <>
          <GoogleTagManager gtmId="GTM-W6G4RGTQ" />
          <SpeedInsights />
          <Analytics />
        </> : null
      }
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('egc-theme');
                if (t === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className={`${bebasNeue.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          {/*
           * CustomCursor lives here — at the root layout level — so it is
           * mounted ONCE for the entire app and NEVER unmounts on page
           * navigation. This prevents the cursor jumping back to (0,0)
           * every time the user navigates to a new page.
           */}
          {/* {isDesktop ? <CustomCursor /> : null} */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
