"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MENUS } from "@/lib/menus";
import MegaMenu from "./MegaMenu";
import MobileDrawer from "./MobileDrawer";

const NAV_ITEMS = [
  { label: "Services", href: "/services", mm: "services" },
  { label: "Products", href: "/products", mm: "products" },
  { label: "About", href: "/about", mm: "about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [openMm, setOpenMm] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMm(null), 180);
  };
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMm(null);
        setDrawerOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="nav" onMouseLeave={scheduleClose}>
        <div className="nav-inner">
          <a href="#" className="brand" aria-label="VIGOR home">
            <span className="mark">
              <svg viewBox="0 0 200 200" fill="none">
                <g
                  stroke="currentColor"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                >
                  <path d="M 50 30 L 50 70 L 78 98" />
                  <path d="M 150 30 L 150 70 L 122 98" />
                  <path d="M 78 98 L 100 76 L 122 98" />
                  <path d="M 36 88 L 36 124 Q 36 146 58 146 L 100 178 L 142 146 Q 164 146 164 124 L 164 88" />
                </g>
              </svg>
            </span>
            <span className="word">VIGOR</span>
          </a>

          <div className="nav-links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => {
                  cancelClose();
                  setOpenMm(item.mm ?? null);
                }}
                onFocus={() => setOpenMm(item.mm ?? null)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a className="btn btn-primary btn-sm" href="#contact">
              Start a project
            </a>
            <button
              type="button"
              className="nav-burger"
              aria-label="Open menu"
              onClick={() => setDrawerOpen(true)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {openMm && MENUS[openMm] ? (
          <motion.div
            key={openMm}
            className="mega-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: [0.2, 0.7, 0.1, 1] }}
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            <div className="mega-backdrop" onClick={() => setOpenMm(null)} />
            <MegaMenu data={MENUS[openMm]} onItemClick={() => setOpenMm(null)} />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {drawerOpen ? (
          <MobileDrawer onClose={() => setDrawerOpen(false)} navItems={NAV_ITEMS} />
        ) : null}
      </AnimatePresence>
    </>
  );
}
