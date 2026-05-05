"use client";

import { useState } from "react";
import { motion } from "motion/react";
import type { Slot } from "./Scheduler";

const DOW_LONG = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const MONTHS_LONG = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function fmtSlotLong(slot: Slot) {
  const d = new Date(slot.dateISO + "T00:00:00");
  return `${DOW_LONG[d.getDay()]}, ${d.getDate()} ${MONTHS_LONG[d.getMonth()]} · ${slot.time} MYT`;
}

type Props = {
  slot: Slot | null;
  onClear: () => void;
};

export default function BookingForm({ slot, onClear }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!slot) {
      setError("Pick a slot from the calendar first.");
      return;
    }
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const payload = {
      slot,
      name: (data.get("name") as string) || "",
      email: (data.get("email") as string) || "",
      company: (data.get("company") as string) || "",
      role: (data.get("role") as string) || "",
      brief: (data.get("brief") as string) || "",
      mode: (data.get("mode") as string) || "video",
    };
    if (!payload.name || !payload.email || !payload.company || !payload.brief) {
      setError("Fill in name, email, company, and project brief.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setError("Enter a valid work email.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Could not confirm booking.");
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not confirm booking.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success && slot) {
    return (
      <motion.div
        className="bf bf-success"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.32, ease: [0.2, 0.7, 0.1, 1] }}
      >
        <div className="bf-success-mark">
          <svg viewBox="0 0 24 24" width="42" height="42" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="bf-title">Confirmed.</h3>
        <p className="bf-success-line">{fmtSlotLong(slot)}</p>
        <ul className="bf-next">
          <li>Calendar invite (.ics) on its way to your inbox.</li>
          <li>An engineer — not a salesperson — will join the call.</li>
          <li>Bring a real problem. We&apos;ll architect it live.</li>
        </ul>
        <p className="bf-fineprint">
          If you don&apos;t see the email in 5 minutes, check spam, or reply to{" "}
          <a href="mailto:victorlee@vigordigital.org">victorlee@vigordigital.org</a>.
        </p>
      </motion.div>
    );
  }

  return (
    <form className="bf" onSubmit={onSubmit}>
      <div className="bf-head">
        <div className="bf-eyebrow">BOOKING</div>
        <div className="bf-title">Confirm your slot</div>
        <div className="bf-slot">
          {slot ? (
            <>
              <span className="bf-slot-when">{fmtSlotLong(slot)}</span>
              <button type="button" className="bf-slot-clear" onClick={onClear}>
                Change
              </button>
            </>
          ) : (
            <span className="bf-slot-empty">Pick a slot from the calendar →</span>
          )}
        </div>
      </div>

      <div className="bf-grid">
        <div className="bf-field">
          <label htmlFor="bf-name">Full name</label>
          <input id="bf-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="bf-field">
          <label htmlFor="bf-email">Work email</label>
          <input id="bf-email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        </div>
        <div className="bf-field">
          <label htmlFor="bf-company">Company</label>
          <input id="bf-company" name="company" type="text" autoComplete="organization" required />
        </div>
        <div className="bf-field">
          <label htmlFor="bf-role">Role</label>
          <input id="bf-role" name="role" type="text" autoComplete="organization-title" placeholder="CTO, Head of Eng, COO…" />
        </div>
      </div>

      <div className="bf-field">
        <label htmlFor="bf-brief">What do you want to build?</label>
        <textarea
          id="bf-brief"
          name="brief"
          rows={4}
          required
          placeholder="One paragraph. Industry, scale, what's been tried, what's stuck."
        />
      </div>

      <div className="bf-field">
        <label>Meeting type</label>
        <div className="bf-mode">
          <label className="bf-mode-opt">
            <input type="radio" name="mode" value="video" defaultChecked />
            <span>Video call (Google Meet)</span>
          </label>
          <label className="bf-mode-opt">
            <input type="radio" name="mode" value="penang" />
            <span>On-site, Penang (SPICE Arena)</span>
          </label>
        </div>
      </div>

      {error ? (
        <div className="bf-error" role="alert">
          {error}
        </div>
      ) : null}

      <div className="bf-actions">
        <span className="bf-fineprint">No marketing list. We respond within 24 hours.</span>
        <button className="btn btn-primary" type="submit" disabled={submitting || !slot}>
          {submitting ? "Confirming…" : "Confirm 30-min consultation"}
        </button>
      </div>
    </form>
  );
}
