"use client";

import { useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const DOW_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
];

function nextBusinessDays(count: number): Date[] {
  const out: Date[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 1);
  while (out.length < count) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) out.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return out;
}

function fmtDay(d: Date) {
  return `${DOW_SHORT[d.getDay()]} ${d.getDate()} ${MONTHS_SHORT[d.getMonth()]}`;
}

export type Slot = { dateISO: string; time: string };

type Props = {
  selected: Slot | null;
  onSelect: (slot: Slot) => void;
};

export default function Scheduler({ selected, onSelect }: Props) {
  const days = useMemo(() => nextBusinessDays(14), []);
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const stripRef = useRef<HTMLDivElement | null>(null);

  const activeDay = days[activeDayIdx];
  const activeDayISO = activeDay.toISOString().slice(0, 10);

  return (
    <div className="sch">
      <div className="sch-head">
        <div>
          <div className="sch-eyebrow">SCHEDULE</div>
          <div className="sch-title">Pick a 30-minute slot</div>
        </div>
        <div className="sch-tz">
          <span className="sch-tz-dot" />
          Malaysia · MYT (UTC+8)
        </div>
      </div>

      <div className="sch-days" ref={stripRef}>
        {days.map((d, i) => {
          const active = i === activeDayIdx;
          return (
            <button
              key={d.toISOString()}
              type="button"
              className={`sch-day${active ? " is-active" : ""}`}
              onClick={() => setActiveDayIdx(i)}
            >
              <span className="sch-day-dow">{DOW_SHORT[d.getDay()]}</span>
              <span className="sch-day-num">{d.getDate()}</span>
              <span className="sch-day-mon">{MONTHS_SHORT[d.getMonth()]}</span>
              {active ? <motion.span layoutId="sch-day-bar" className="sch-day-bar" /> : null}
            </button>
          );
        })}
      </div>

      <div className="sch-slots-wrap">
        <div className="sch-slots-head">
          <span className="sch-slots-day">{fmtDay(activeDay)}</span>
          <span className="sch-slots-count">{TIME_SLOTS.length} slots</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDayISO}
            className="sch-slots"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.2, 0.7, 0.1, 1] }}
          >
            {TIME_SLOTS.map((t) => {
              const isSelected =
                selected?.dateISO === activeDayISO && selected.time === t;
              return (
                <button
                  key={t}
                  type="button"
                  className={`sch-slot${isSelected ? " is-selected" : ""}`}
                  onClick={() => onSelect({ dateISO: activeDayISO, time: t })}
                >
                  {t}
                </button>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
