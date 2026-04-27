"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useTransform, animate } from "motion/react";

type Stat = { k: string; v: string; suffix?: string; prefix?: string; numeric?: number };

const STATS: Stat[] = [
  { k: "Projects shipped", v: "19", suffix: "+", numeric: 19 },
  { k: "Verticals", v: "6", numeric: 6 },
  { k: "Throughput", v: "1.8", suffix: "M/d", numeric: 1.8 },
  { k: "Latency p99", v: "42", suffix: "ms", numeric: 42 },
];

const SHIPPING = [
  { tag: "HEALTHCARE", title: "Hospital Superapp Platform", meta: "v2.1.4 · 12 sites" },
  { tag: "MANUFACTURING", title: "Xentr.AI Manufacturing Analytics", meta: "OEE +2.1pt this week" },
  { tag: "SMART CITY", title: "Traffic Intelligence Platform", meta: "edge inference · 18 intersections" },
  { tag: "GOVERNMENT", title: "ESG & Carbon Reporting Platform", meta: "Q3 2025 backfilled" },
  { tag: "AI & AGENTS", title: "Enterprise AI Agent Platform", meta: "Microsoft co-engineered" },
  { tag: "IMMERSIVE", title: "3D Immersive Wayfinding", meta: "WebGL · sub-meter" },
  { tag: "RETAIL & F&B", title: "F&B Chain Customer Superapp", meta: "1M+ orders / month" },
];

const PARTNERS = ["Microsoft", "Dell", "SIRIM", "MIMOS", "MIDA", "NCER", "MIDF", "Adventist"];

function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (latest) => {
    if (stat.numeric === undefined) return stat.v;
    if (Number.isInteger(stat.numeric)) return Math.round(latest).toString();
    return latest.toFixed(1);
  });

  useEffect(() => {
    if (!inView || stat.numeric === undefined) return;
    const c = animate(mv, stat.numeric, { duration: 1.2, ease: [0.2, 0.7, 0.1, 1] });
    return () => c.stop();
  }, [inView, mv, stat.numeric]);

  return (
    <span ref={ref} className="lb-stat">
      <span className="lb-stat-k">{stat.k}</span>
      <span className="lb-stat-v">
        {stat.prefix}
        <motion.span>{display}</motion.span>
        <span className="lb-stat-suf">{stat.suffix}</span>
      </span>
    </span>
  );
}

export default function HeroLiveBoard() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SHIPPING.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="lb-card">
      <div className="lb-head">
        <span className="lb-head-title">VIGOR · Live impact</span>
        <span className="lb-live">
          <span className="lb-live-dot" />
          LIVE
        </span>
      </div>

      <div className="lb-stats">
        {STATS.map((s) => (
          <StatCounter key={s.k} stat={s} />
        ))}
      </div>

      <div className="lb-section">
        <div className="lb-section-label">Now shipping</div>
        <div className="lb-feed" role="status" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              className="lb-feed-row"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.32, ease: [0.2, 0.7, 0.1, 1] }}
            >
              <span className="lb-feed-tag">{SHIPPING[i].tag}</span>
              <span className="lb-feed-title">{SHIPPING[i].title}</span>
              <span className="lb-feed-meta">{SHIPPING[i].meta}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="lb-section">
        <div className="lb-section-label">Trusted by · backed by</div>
        <div className="lb-partners">
          {PARTNERS.map((p) => (
            <span key={p} className="lb-partner">
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="lb-foot">
        <span>Built by operators · shipped to production · 2026</span>
        <span className="lb-pulse">
          <span />
          <span />
          <span />
        </span>
      </div>
    </div>
  );
}
