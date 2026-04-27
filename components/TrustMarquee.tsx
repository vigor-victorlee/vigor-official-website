"use client";

import Image from "next/image";

type Item = { src: string; alt: string; w: number; h: number };

const ITEMS: Item[] = [
  { src: "/assets/microsoft.svg", alt: "Microsoft", w: 130, h: 28 },
  { src: "/assets/dell.svg", alt: "Dell Technologies", w: 130, h: 32 },
  { src: "/assets/sirim.png", alt: "SIRIM", w: 96, h: 68 },
  { src: "/assets/mimos.png", alt: "MIMOS Berhad", w: 110, h: 52 },
  { src: "/assets/mida.png", alt: "Malaysian Investment Development Authority (MIDA)", w: 150, h: 56 },
  { src: "/assets/ncer.png", alt: "Northern Corridor Economic Region (NCER)", w: 130, h: 48 },
  { src: "/assets/midf.svg", alt: "Malaysian Industrial Development Finance (MIDF)", w: 110, h: 40 },
];

function Row({ extraKey, hidden }: { extraKey: string; hidden?: boolean }) {
  return (
    <>
      {ITEMS.map((it, i) => (
        <span key={`${extraKey}-${i}`} className="marquee-item" aria-hidden={hidden}>
          <Image src={it.src} alt={hidden ? "" : it.alt} width={it.w} height={it.h} />
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
