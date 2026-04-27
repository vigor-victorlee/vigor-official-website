import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIGOR — Engineered, not pitched.",
  description:
    "Operator-built deeptech across manufacturing, healthcare, government, smart city, retail, and immersive. AI agents, IIoT, ESG, mobile, firmware, RPA, cloud — engineered, not pitched.",
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
        {children}
      </body>
    </html>
  );
}
