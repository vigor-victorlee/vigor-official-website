"use client";

import Image from "next/image";

type Item = { src: string; alt: string; noInvert?: boolean };

const ITEMS: Item[] = [
  { src: "/assets/microsoft.svg", alt: "Microsoft" },
  { src: "/assets/dell.svg", alt: "Dell Technologies" },
  { src: "/assets/redhat.svg", alt: "Red Hat" },
  { src: "/assets/adventist.png", alt: "Penang Adventist Hospital" },
  { src: "/assets/sirim.svg", alt: "SIRIM", noInvert: true },
  { src: "/assets/mimos.png", alt: "MIMOS Berhad", noInvert: true },
  { src: "/assets/mida.png", alt: "MIDA" },
  { src: "/assets/ncer.png", alt: "NCER" },
  { src: "/assets/midf.svg", alt: "MIDF" },
];

function Row({ extraKey, hidden }: { extraKey: string; hidden?: boolean }) {
  return (
    <>
      {ITEMS.map((it, i) => (
        <span
          key={`${extraKey}-${i}`}
          className={`marquee-item${it.noInvert ? " marquee-item--raw" : ""}`}
          aria-hidden={hidden}
        >
          <Image
            src={it.src}
            alt={hidden ? "" : it.alt}
            width={160}
            height={48}
            unoptimized={it.src.endsWith(".svg")}
          />
        </span>
      ))}
    </>
  );
}

export default function TrustMarquee() {
  return (
    <div className="marquee" role="region" aria-label="Trusted by">
      <div className="marquee-track">
        <Row extraKey="a" />
        <Row extraKey="b" hidden />
      </div>
    </div>
  );
}
