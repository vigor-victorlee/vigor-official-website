"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function PopupCTA() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("vigor-pop-shown")) return;
    const t = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("vigor-pop-shown", "1");
    }, 120000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onTrigger = () => setOpen(true);
    document.querySelectorAll<HTMLElement>("[data-pop-cta]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        onTrigger();
      });
    });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const app = (data.get("app") as string) || "";
    const budget = (data.get("budget") as string) || "";
    const timeline = (data.get("timeline") as string) || "";
    const email = (data.get("email") as string) || "";
    if (!app || !budget || !timeline || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please fill in all fields with a valid email.");
      return;
    }
    setErrorMsg(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ app, budget, timeline, email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }
      setSubmitted(true);
      setTimeout(() => {
        setOpen(false);
        setSubmitted(false);
      }, 2400);
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="pop-cta-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pc-title"
          className="show"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <motion.div
            className="pop-cta"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.1, 1] }}
          >
            <button
              className="pc-close"
              type="button"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <div className="pc-success" style={{ display: "block" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <h2>Got it.</h2>
                <p className="pc-sub">A VIGOR engineer will reach out within 48 hours.</p>
              </div>
            ) : (
              <div>
                <div className="pc-eyebrow">Let&apos;s build something</div>
                <h2 id="pc-title">Tell us about your project.</h2>
                <p className="pc-sub">A few quick details and a VIGOR engineer will reach out within 48 hours.</p>
                <form onSubmit={handleSubmit}>
                  <div className="pc-field">
                    <label htmlFor="pc-app">What are you building?</label>
                    <select id="pc-app" name="app" required defaultValue="">
                      <option value="">Select a project type…</option>
                      <option>Mobile / Superapp</option>
                      <option>Hospital / Healthcare system</option>
                      <option>Manufacturing analytics (Xentr.AI)</option>
                      <option>Traffic / Smart city analytics</option>
                      <option>3D / Immersive / Wayfinding</option>
                      <option>ESG / CBAM compliance</option>
                      <option>AI agent / LLM transformation</option>
                      <option>Cloud / Frontier transformation</option>
                      <option>RPA / Test automation</option>
                      <option>IoT hardware / Firmware</option>
                      <option>CRM / VMS / Enterprise</option>
                      <option>Other — tell us</option>
                    </select>
                  </div>
                  <div className="pc-row">
                    <div className="pc-field">
                      <label htmlFor="pc-budget">Budget range</label>
                      <select id="pc-budget" name="budget" required defaultValue="">
                        <option value="">Select budget…</option>
                        <option>Under USD 25k</option>
                        <option>USD 25k – 75k</option>
                        <option>USD 75k – 200k</option>
                        <option>USD 200k – 500k</option>
                        <option>USD 500k+</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                    <div className="pc-field">
                      <label htmlFor="pc-timeline">Timeline</label>
                      <select id="pc-timeline" name="timeline" required defaultValue="">
                        <option value="">Select timeline…</option>
                        <option>ASAP (under 1 month)</option>
                        <option>1–3 months</option>
                        <option>3–6 months</option>
                        <option>6+ months</option>
                        <option>Exploratory</option>
                      </select>
                    </div>
                  </div>
                  <div className="pc-field">
                    <label htmlFor="pc-email">Work email</label>
                    <input id="pc-email" name="email" type="email" required placeholder="you@company.com" />
                  </div>
                  {errorMsg ? (
                    <div className="pc-error" role="alert" style={{ color: "#ff8585", fontSize: 13, marginTop: 8 }}>
                      {errorMsg}
                    </div>
                  ) : null}
                  <div className="pc-actions">
                    <span className="small">We won&apos;t add you to a marketing list.</span>
                    <button className="btn btn-primary" type="submit" disabled={submitting}>
                      {submitting ? "Sending…" : "Submit project"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
