import type { Metadata } from "next";
import "./globals.css";
import "lenis/dist/lenis.css";
import SmoothScroll from "@/components/SmoothScroll";

const SITE_URL = "https://vigordigital.org";
const SITE_TITLE = "VIGOR — Engineered, not pitched.";
const SITE_DESCRIPTION =
  "Operator-built deeptech across manufacturing, healthcare, government, smart city, retail, and immersive. AI agents, IIoT, ESG, mobile, firmware, RPA, cloud — engineered, not pitched.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · VIGOR Digital",
  },
  description: SITE_DESCRIPTION,
  applicationName: "VIGOR Digital",
  keywords: [
    "deeptech Malaysia",
    "industrial IoT Penang",
    "Xentr.AI",
    "CBAM compliance Malaysia",
    "AI agents manufacturing",
    "engineering services Penang",
    "operator-grade software",
    "factory floor IIoT",
  ],
  authors: [{ name: "Vigor Digital Solution Sdn. Bhd." }],
  creator: "Vigor Digital",
  publisher: "Vigor Digital Solution Sdn. Bhd.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: SITE_URL,
    siteName: "VIGOR Digital",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/assets/vigor-full-logo.svg",
        width: 1200,
        height: 630,
        alt: "VIGOR — Engineered, not pitched.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/assets/vigor-full-logo.svg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/assets/vigor-logomark.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body data-accent="violet" data-hero-mood="cosmic" data-corner="rounded" data-motion="on">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
