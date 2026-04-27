"use client";

import { motion } from "motion/react";
import type { MenuData } from "@/lib/menus";

export default function MegaMenu({
  data,
  onItemClick,
}: {
  data: MenuData;
  onItemClick: () => void;
}) {
  return (
    <motion.div
      className="mega-panel"
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.2, 0.7, 0.1, 1] }}
    >
      <div className="mega-head">
        <div>
          <h4>{data.title}</h4>
          <p style={{ marginTop: 6 }}>{data.lede}</p>
        </div>
        <a
          href={data.cta.href}
          onClick={onItemClick}
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: "var(--vigor-violet-400, #b78bff)",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          {data.cta.label}
        </a>
      </div>

      <div className="mega-cols">
        {data.cols.map((col, ci) => (
          <motion.div
            key={col.heading}
            className="mega-col"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, delay: 0.04 + ci * 0.04 }}
          >
            <h5>{col.heading}</h5>
            {col.items.map((it) => (
              <a key={it.label} href={it.href} onClick={onItemClick}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  {it.label}
                  {it.status === "live" ? (
                    <span
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        padding: "2px 6px",
                        borderRadius: 4,
                        background: "rgba(45, 200, 110, 0.18)",
                        color: "#7af0a8",
                      }}
                    >
                      LIVE
                    </span>
                  ) : null}
                  {it.status === "preview" ? (
                    <span
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.12em",
                        padding: "2px 6px",
                        borderRadius: 4,
                        background: "rgba(106, 13, 221, 0.22)",
                        color: "#cdb1ff",
                      }}
                    >
                      DESIGN
                    </span>
                  ) : null}
                </span>
                {it.desc ? <span className="desc">{it.desc}</span> : null}
              </a>
            ))}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mega-feature"
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.24, delay: 0.16 }}
      >
        <span className="eyebrow">{data.feature.eyebrow}</span>
        <h5>{data.feature.title}</h5>
        <p>{data.feature.desc}</p>
        <a href={data.feature.href} onClick={onItemClick}>
          Open →
        </a>
      </motion.div>
    </motion.div>
  );
}
