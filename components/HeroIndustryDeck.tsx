"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  IconBuildingFactory2,
  IconHeartbeat,
  IconShieldCheck,
  IconRoute,
  IconShoppingBag,
  IconCube3dSphere,
} from "@tabler/icons-react";

const AUTO_MS = 4500;

type Channel = {
  id: string;
  label: string;
  Icon: typeof IconBuildingFactory2;
  tag: string;
  project: string;
  metric: string;
  unit: string;
  caption: string;
  tags: string[];
};

const CHANNELS: Channel[] = [
  {
    id: "manufacturing",
    label: "Manufacturing",
    Icon: IconBuildingFactory2,
    tag: "MANUFACTURING",
    project: "Xentr.AI · Tier-1 supplier",
    metric: "94.2",
    unit: "% OEE",
    caption: "Line 03 · last sync 03s",
    tags: ["Edge inference 42ms", "12 lines"],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    Icon: IconHeartbeat,
    tag: "HEALTHCARE",
    project: "Hospital Superapp · Adventist",
    metric: "2.1",
    unit: "k flows/day",
    caption: "Penang · 12 sites live",
    tags: ["Audit-ready", "HL7/FHIR"],
  },
  {
    id: "government",
    label: "Government",
    Icon: IconShieldCheck,
    tag: "GOVERNMENT",
    project: "ESG · CBAM Scope 2",
    metric: "3,247",
    unit: "tCO₂e Q3",
    caption: "Q3 2025 backfilled · audit ready",
    tags: ["MITI-aligned", "Reg-grade"],
  },
  {
    id: "smartcity",
    label: "Smart City",
    Icon: IconRoute,
    tag: "SMART CITY",
    project: "Traffic Intelligence · KL",
    metric: "18",
    unit: "intersections",
    caption: "Sub-second inference at edge",
    tags: ["Edge nodes", "Computer vision"],
  },
  {
    id: "retail",
    label: "Retail & F&B",
    Icon: IconShoppingBag,
    tag: "RETAIL & F&B",
    project: "F&B Customer Superapp",
    metric: "1.04",
    unit: "M orders/mo",
    caption: "Multi-tenant · shipping since 2023",
    tags: ["Loyalty", "Order-ahead"],
  },
  {
    id: "immersive",
    label: "Immersive",
    Icon: IconCube3dSphere,
    tag: "IMMERSIVE",
    project: "3D Wayfinding · WebGL",
    metric: "<1",
    unit: "m accuracy",
    caption: "Sub-meter wayfinding · WebGL",
    tags: ["WebGL", "Hospital nav"],
  },
];

function Sparkline() {
  return (
    <svg viewBox="0 0 240 80" className="hd-viz" aria-hidden>
      <defs>
        <linearGradient id="hd-spark-g" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(183,139,255,0.32)" />
          <stop offset="100%" stopColor="rgba(183,139,255,0)" />
        </linearGradient>
      </defs>
      <path
        d="M 0 60 L 24 52 L 48 56 L 72 44 L 96 48 L 120 36 L 144 40 L 168 28 L 192 32 L 216 22 L 240 18 L 240 80 L 0 80 Z"
        fill="url(#hd-spark-g)"
      />
      <path
        d="M 0 60 L 24 52 L 48 56 L 72 44 L 96 48 L 120 36 L 144 40 L 168 28 L 192 32 L 216 22 L 240 18"
        fill="none"
        stroke="#b78bff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="240" cy="18" r="4" fill="#b78bff" />
      <circle cx="240" cy="18" r="9" fill="rgba(183,139,255,0.25)" />
    </svg>
  );
}

function Funnel() {
  return (
    <svg viewBox="0 0 240 80" className="hd-viz" aria-hidden>
      {[0, 1, 2].map((i) => {
        const w = 220 - i * 50;
        const x = (240 - w) / 2;
        const y = 8 + i * 24;
        return (
          <g key={i}>
            <rect x={x} y={y} width={w} height={14} rx={3} fill="rgba(183,139,255,0.18)" />
            <rect x={x} y={y} width={w * (1 - i * 0.18)} height={14} rx={3} fill="#b78bff" opacity={0.85} />
          </g>
        );
      })}
    </svg>
  );
}

function StackedBars() {
  const months = [
    [22, 12, 8],
    [18, 14, 10],
    [16, 13, 11],
    [14, 11, 12],
  ];
  return (
    <svg viewBox="0 0 240 80" className="hd-viz" aria-hidden>
      {months.map((m, i) => {
        const x = 16 + i * 56;
        let yOff = 76;
        return m.map((h, j) => {
          yOff -= h;
          const colors = ["rgba(183,139,255,0.95)", "rgba(106,13,221,0.85)", "rgba(70,9,140,0.7)"];
          return <rect key={`${i}-${j}`} x={x} y={yOff} width={36} height={h - 2} rx={2} fill={colors[j]} />;
        });
      })}
    </svg>
  );
}

function NodeMesh() {
  const nodes = [
    [40, 22],
    [98, 12],
    [162, 28],
    [210, 16],
    [54, 56],
    [128, 64],
    [200, 56],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [1, 5],
    [4, 5],
    [5, 6],
    [3, 6],
    [2, 5],
  ];
  return (
    <svg viewBox="0 0 240 80" className="hd-viz" aria-hidden>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="rgba(183,139,255,0.4)"
          strokeWidth="1"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 3 ? 6 : 3} fill="#b78bff" />
          {i === 3 ? <circle cx={x} cy={y} r={11} fill="rgba(183,139,255,0.18)" /> : null}
        </g>
      ))}
    </svg>
  );
}

function Heatmap() {
  const cells = Array.from({ length: 7 * 4 }, () => Math.random());
  return (
    <svg viewBox="0 0 240 80" className="hd-viz" aria-hidden>
      {cells.map((v, i) => {
        const col = i % 7;
        const row = Math.floor(i / 7);
        const intensity = 0.15 + v * 0.85;
        return (
          <rect
            key={i}
            x={10 + col * 32}
            y={6 + row * 18}
            width={28}
            height={14}
            rx={2}
            fill="#b78bff"
            opacity={intensity}
          />
        );
      })}
    </svg>
  );
}

function Wireframe() {
  return (
    <svg viewBox="0 0 240 80" className="hd-viz" aria-hidden>
      <g stroke="#b78bff" strokeWidth="1.2" fill="none" opacity="0.85">
        {/* Isometric cube wireframe */}
        <polygon points="120,12 168,32 120,52 72,32" />
        <polygon points="72,32 72,60 120,80 120,52" />
        <polygon points="168,32 168,60 120,80 120,52" />
        <line x1="72" y1="32" x2="72" y2="60" />
        <line x1="168" y1="32" x2="168" y2="60" />
        <line x1="120" y1="52" x2="120" y2="80" />
        {/* Internal grid */}
        <line x1="96" y1="22" x2="96" y2="50" opacity="0.4" />
        <line x1="144" y1="22" x2="144" y2="50" opacity="0.4" />
        <line x1="96" y1="22" x2="144" y2="22" opacity="0.4" />
        <line x1="96" y1="42" x2="144" y2="42" opacity="0.4" />
      </g>
      <circle cx="168" cy="32" r="3" fill="#b78bff" />
    </svg>
  );
}

const VIZ: Record<string, React.ReactNode> = {
  manufacturing: <Sparkline />,
  healthcare: <Funnel />,
  government: <StackedBars />,
  smartcity: <NodeMesh />,
  retail: <Heatmap />,
  immersive: <Wireframe />,
};

export default function HeroIndustryDeck() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const tickRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((p) => (p + 1) % CHANNELS.length);
    }, AUTO_MS);
    return () => clearInterval(t);
  }, [paused]);

  const ch = CHANNELS[active];

  return (
    <div
      className="lb-card hd-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="lb-head">
        <span className="lb-head-title">VIGOR · Industry channels</span>
        <span className="hd-counter">
          <span ref={tickRef}>{String(active + 1).padStart(2, "0")}</span>
          <span style={{ opacity: 0.4 }}>/{String(CHANNELS.length).padStart(2, "0")}</span>
        </span>
      </div>

      <div className="hd-body">
        <div className="hd-rail" role="tablist" aria-label="Industry channels">
          {CHANNELS.map((c, i) => {
            const Icon = c.Icon;
            const isActive = i === active;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`hd-tab${isActive ? " is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="hd-tab-icon">
                  <Icon size={18} stroke={1.6} />
                </span>
                <span className="hd-tab-label">{c.label}</span>
                {isActive ? (
                  <motion.span
                    className="hd-tab-bar"
                    layoutId="hd-tab-bar"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="hd-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={ch.id}
              className="hd-panel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.2, 0.7, 0.1, 1] }}
            >
              <div className="hd-panel-head">
                <span className="hd-panel-tag">{ch.tag}</span>
                <span className="hd-panel-caption">{ch.caption}</span>
              </div>
              <div className="hd-panel-project">{ch.project}</div>

              <div className="hd-panel-metric">
                <span className="hd-metric-v">{ch.metric}</span>
                <span className="hd-metric-u">{ch.unit}</span>
              </div>

              <div className="hd-panel-viz">{VIZ[ch.id]}</div>

              <div className="hd-panel-tags">
                {ch.tags.map((t) => (
                  <span key={t} className="hd-chip">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="hd-foot">
        <span>Six industries · one engineering practice</span>
        <span className="hd-progress" aria-hidden>
          {CHANNELS.map((_, i) => (
            <span key={i} className={`hd-dot${i === active ? " is-active" : ""}`} />
          ))}
        </span>
      </div>
    </div>
  );
}
