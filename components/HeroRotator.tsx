"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const WORDS = [
  "Hospital superapps",
  "Factory analytics",
  "3D wayfinding",
  "Traffic intelligence",
  "F&B superapps",
  "Enterprise AI agents",
  "Firmware & IoT",
];

export default function HeroRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hero-rotator" aria-live="polite">
      <span className="hr-prefix">Now shipping →</span>
      <span className="hr-words" style={{ position: "relative", display: "inline-block", minHeight: "1.2em", minWidth: 220 }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={WORDS[i]}
            className="hr-word active"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: [0.2, 0.7, 0.1, 1] }}
            style={{ display: "inline-block" }}
          >
            {WORDS[i]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
