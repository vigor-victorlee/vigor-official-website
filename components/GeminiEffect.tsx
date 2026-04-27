"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

const PATHS = [
  "M0 663C145.5 663 191 663 332.5 663C474 663 487.5 432 614 432C740.5 432 793.5 663 1024 663C1254.5 663 1268 281 1364 281C1460 281 1492 281 1600 281",
  "M0 587C145.5 587 191 587 332.5 587C474 587 488 444 614 444C740 444 794 587 1024 587C1254 587 1268.5 369 1364 369C1459.5 369 1492 369 1600 369",
  "M0 514C145.5 514 191 514 332.5 514C474 514 487.5 514 614 514C740.5 514 793.5 514 1024 514C1254.5 514 1268 514 1364 514C1460 514 1492 514 1600 514",
  "M0 438C145.5 438 191 438 332.5 438C474 438 487 580 614 580C741 580 793 438 1024 438C1255 438 1267.5 654 1364 654C1460.5 654 1492 654 1600 654",
  "M0 364C145.5 364 191 364 332.5 364C474 364 487.5 797 614 797C740.5 797 793.5 134 1024 134C1254.5 134 1268 695 1364 695C1460 695 1492 695 1600 695",
];

const STAGES = [
  { label: "Floor", desc: "PLC · SCADA · sensors" },
  { label: "Spine", desc: "VIGOR data plane" },
  { label: "Intelligence", desc: "Domain-tuned agents" },
  { label: "Compliance", desc: "Auditable ESG / CBAM" },
  { label: "Outcome", desc: "Operator-grade decisions" },
];

function GeminiPath({ d, value }: { d: string; value: MotionValue<number> }) {
  return (
    <motion.path
      d={d}
      stroke="url(#gem-grad)"
      strokeWidth="2"
      fill="none"
      strokeDasharray="3500"
      style={{ strokeDashoffset: value }}
    />
  );
}

export default function GeminiEffect() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // each path lights up at a slightly different scroll point
  const v0 = useTransform(scrollYProgress, [0, 0.6], [3500, 0]);
  const v1 = useTransform(scrollYProgress, [0.05, 0.65], [3500, 0]);
  const v2 = useTransform(scrollYProgress, [0.1, 0.7], [3500, 0]);
  const v3 = useTransform(scrollYProgress, [0.15, 0.75], [3500, 0]);
  const v4 = useTransform(scrollYProgress, [0.2, 0.8], [3500, 0]);
  const values = [v0, v1, v2, v3, v4];

  const titleY = useTransform(scrollYProgress, [0, 0.4], [40, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="gem-root">
      <motion.div className="gem-title" style={{ y: titleY, opacity: titleOpacity }}>
        <div className="eyebrow-violet">One engineering spine</div>
        <h2>
          From the <span className="accent">PLC</span><br />
          to the <span className="accent">agent</span>.
        </h2>
        <p>One data plane. Five stages. Every signal traceable from the floor to the regulator and back to the operator.</p>
      </motion.div>

      <div className="gem-stage-list">
        {STAGES.map((s) => (
          <div key={s.label} className="gem-stage">
            <span className="gem-stage-label">{s.label}</span>
            <span className="gem-stage-desc">{s.desc}</span>
          </div>
        ))}
      </div>

      <svg
        viewBox="0 0 1600 800"
        className="gem-svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gem-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6A0DDD" />
            <stop offset="50%" stopColor="#b78bff" />
            <stop offset="100%" stopColor="#cdb1ff" />
          </linearGradient>
          <filter id="gem-blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <g filter="url(#gem-blur)" opacity="0.55">
          {PATHS.map((d, i) => (
            <GeminiPath key={`b-${i}`} d={d} value={values[i]} />
          ))}
        </g>
        <g>
          {PATHS.map((d, i) => (
            <GeminiPath key={`s-${i}`} d={d} value={values[i]} />
          ))}
        </g>
      </svg>
    </section>
  );
}
