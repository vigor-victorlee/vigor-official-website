"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

type NavItem = { label: string; href: string };

export default function MobileDrawer({
  onClose,
  navItems,
}: {
  onClose: () => void;
  navItems: NavItem[];
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <motion.div
      className="mobile-drawer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
      onClick={onClose}
    >
      <motion.aside
        className="mobile-drawer-panel"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.28, ease: [0.2, 0.7, 0.1, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mobile-drawer-head">
          <span className="word">VIGOR</span>
          <button
            type="button"
            className="mobile-drawer-close"
            aria-label="Close menu"
            onClick={onClose}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="mobile-drawer-links" aria-label="Mobile">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={onClose}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.24, delay: 0.06 + i * 0.04 }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <div className="mobile-drawer-cta">
          <a className="btn btn-primary" href="#contact" onClick={onClose}>
            Start a project
          </a>
          <a className="btn btn-ghost" href="#industries" onClick={onClose}>
            Explore industries
          </a>
        </div>
      </motion.aside>
    </motion.div>
  );
}
