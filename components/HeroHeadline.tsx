"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const WORDS = ["real", "shipped", "audited", "operator-grade"];

export default function HeroHeadline() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <h1 className="hero-headline">
      Deeptech<br />
      for the{" "}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        style={{ display: "inline-flex", alignItems: "center" }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={WORDS[i]}
            layout
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.42, ease: [0.2, 0.7, 0.1, 1] }}
            className="accent"
            style={{
              display: "inline-block",
              padding: "0 0.18em",
              borderRadius: 12,
              backgroundImage: "linear-gradient(180deg, rgba(106,13,221,0.18), rgba(106,13,221,0.04))",
              border: "1px solid rgba(183,139,255,0.35)",
              whiteSpace: "nowrap",
            }}
          >
            {WORDS[i]}
          </motion.span>
        </AnimatePresence>
      </motion.span>{" "}
      world.
    </h1>
  );
}
