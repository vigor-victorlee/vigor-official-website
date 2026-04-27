"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const PHRASES = [
  "deeptech for the factory floor",
  "deeptech for the hospital",
  "deeptech for the smart city",
  "deeptech for the regulator",
  "deeptech for the storefront",
  "deeptech for the immersive venue",
];

export default function HeroSubRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % PHRASES.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <p className="hero-sub" style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "0.4ch" }}>
      <span>We engineer</span>
      <span style={{ position: "relative", display: "inline-block", minWidth: "min(420px, 100%)" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={PHRASES[i]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.32, ease: [0.2, 0.7, 0.1, 1] }}
            style={{
              display: "inline-block",
              color: "var(--vigor-white)",
              fontWeight: 600,
              backgroundImage: "linear-gradient(90deg, #b78bff 0%, #ffffff 60%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {PHRASES[i]}
          </motion.span>
        </AnimatePresence>
      </span>
      <span>— built by operators, shipped to production.</span>
    </p>
  );
}
