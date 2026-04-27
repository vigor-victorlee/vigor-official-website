"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { ReactNode } from "react";

export type CarouselCard = {
  num: string;
  category: string;
  title: string;
  description: string;
  body?: ReactNode;
  icon?: ReactNode;
  gradient?: string;
};

export default function AppleCarousel({ cards, idPrefix }: { cards: CarouselCard[]; idPrefix: string }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<number | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>(".ac-card");
    const w = card ? card.getBoundingClientRect().width + 20 : 360;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (active !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [active]);

  return (
    <div className="ac-root">
      <div className="ac-track" ref={trackRef} role="list">
        {cards.map((c, i) => (
          <motion.button
            key={`${idPrefix}-${i}`}
            layoutId={`${idPrefix}-card-${i}`}
            type="button"
            className="ac-card"
            role="listitem"
            onClick={() => setActive(i)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            style={{
              background: c.gradient ?? "linear-gradient(180deg, #1a0e2e 0%, #0a0613 100%)",
            }}
          >
            <div className="ac-card-bg" />
            <div className="ac-card-inner">
              <div className="ac-card-top">
                <span className="ac-num">{c.num}</span>
                <span className="ac-category">{c.category}</span>
              </div>
              <div className="ac-card-icon">{c.icon}</div>
              <div className="ac-card-bottom">
                <h3 className="ac-title">{c.title}</h3>
                <p className="ac-desc">{c.description}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="ac-controls" aria-hidden="true">
        <button
          type="button"
          className="ac-arrow"
          disabled={!canPrev}
          onClick={() => scrollBy(-1)}
          aria-label="Previous"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className="ac-arrow"
          disabled={!canNext}
          onClick={() => scrollBy(1)}
          aria-label="Next"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {active !== null && cards[active] ? (
          <motion.div
            className="ac-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              layoutId={`${idPrefix}-card-${active}`}
              className="ac-modal"
              onClick={(e) => e.stopPropagation()}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              style={{
                background: cards[active].gradient ?? "linear-gradient(180deg, #1a0e2e 0%, #0a0613 100%)",
              }}
            >
              <button
                type="button"
                className="ac-modal-close"
                aria-label="Close"
                onClick={() => setActive(null)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <motion.div
                className="ac-modal-inner"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.32 }}
              >
                <div className="ac-modal-top">
                  <span className="ac-num">{cards[active].num}</span>
                  <span className="ac-category">{cards[active].category}</span>
                </div>
                <h2 className="ac-modal-title">{cards[active].title}</h2>
                <div className="ac-modal-body">
                  {cards[active].body ?? <p>{cards[active].description}</p>}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
