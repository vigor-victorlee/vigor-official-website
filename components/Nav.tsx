"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { MENUS } from "@/lib/menus";
import MegaMenu from "./MegaMenu";
import MobileDrawer from "./MobileDrawer";

const MAIN_NAV = [
  { label: "Capabilities", mm: "capabilities", hasDropdown: true },
  { label: "Solutions", mm: "solutions", hasDropdown: true },
];

const UTILITY_NAV = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Career", href: "/career" },
];

export default function Nav() {
  const [openMm, setOpenMm] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <header className={`vigor-nav-root${scrolled ? " is-shrunk" : ""}`} onMouseLeave={scheduleClose}>
        {/* Top utility bar */}
        <div className="utility-bar">
          <div className="utility-inner">
            <button type="button" className="lang-pill" aria-label="Language">
              <Image src="/assets/UKFlag.png" alt="" width={20} height={14} />
              <span>English</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <nav className="utility-links">
              {UTILITY_NAV.map((u) => (
                <a key={u.label} href={u.href}>
                  {u.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main bar */}
        <div className="main-bar">
          <div className="main-inner">
            <a href="/" className="vigor-logo" aria-label="VIGOR home">
              <Image
                src="/assets/VigorLogo.png"
                alt="Vigor Digital"
                width={154}
                height={58}
                priority
              />
            </a>

            <nav className="main-links" aria-label="Main">
              {MAIN_NAV.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className={`main-link${openMm === item.mm ? " is-open" : ""}`}
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenMm(item.mm);
                  }}
                  onFocus={() => setOpenMm(item.mm)}
                  onClick={() => setOpenMm(openMm === item.mm ? null : item.mm)}
                >
                  {item.label}
                  <svg className="caret" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              ))}
            </nav>

            <div className="main-actions">
              <a href="/contact" className="get-started">
                <span>Get Started</span>
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
        </div>
      </header>

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
          <MobileDrawer
            onClose={() => setDrawerOpen(false)}
            navItems={[
              { label: "Capabilities", href: "/capabilities" },
              { label: "Solutions", href: "/solutions" },
              ...UTILITY_NAV,
            ]}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
