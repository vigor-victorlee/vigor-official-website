"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const WORDS = ["real", "shipped", "audited", "regulated"];

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
            style={{
              display: "inline-block",
              padding: "0.04em 0.22em",
              borderRadius: 14,
              background: "linear-gradient(180deg, rgba(106,13,221,0.32), rgba(106,13,221,0.08))",
              border: "1px solid rgba(183,139,255,0.55)",
              boxShadow: "0 0 40px rgba(106,13,221,0.35), inset 0 0 20px rgba(183,139,255,0.12)",
              color: "#ffffff",
              backgroundClip: "padding-box",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                backgroundImage: "linear-gradient(180deg, #ffffff 20%, #cdb1ff 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              {WORDS[i]}
            </span>
          </motion.span>
        </AnimatePresence>
      </motion.span>{" "}
      world.
    </h1>
  );
}
