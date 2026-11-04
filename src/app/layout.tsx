import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Caveat, DM_Sans } from "next/font/google";
import { site } from "@/config/site";
import "./globals.css";

// Google renamed "Big Shoulders Display" to "Big Shoulders" (now one family with an optical-size axis).
const display = Big_Shoulders({ subsets: ["latin"], weight: ["500", "700", "900"], variable: "--font-big-shoulders", adjustFontFallback: false, fallback: ["Impact", "sans-serif"] });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const hand = Caveat({ subsets: ["latin"], weight: "600", variable: "--font-caveat" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Coal & Coffee — Rooftop Grill & Café, SKS Tower Mohakhali",
    template: "%s · Coal & Coffee",
  },
  description: site.description,
  openGraph: {
    title: "Coal & Coffee — Rooftop Grill & Café in Mohakhali",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_BD",
    type: "website",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#0e0d0c" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  servesCuisine: ["BBQ", "Kebab", "Café"],
  address: { "@type": "PostalAddress", streetAddress: "SKS Tower", addressLocality: "Mohakhali, Dhaka", addressCountry: "BD" },
  acceptsReservations: true,
  sameAs: [site.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${hand.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
