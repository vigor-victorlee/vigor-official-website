"use client";

import { useState } from "react";

type Project = {
  cat: string;
  status: string;
  title: string;
  desc: string;
  foot1: string;
  foot2: string;
  tags: string[];
};

const PROJECTS: Project[] = [
  {
    cat: "Healthcare",
    status: "Live",
    title: "Hospital Superapp Platform",
    desc: "Patient, clinician, and operations surfaces in one Flutter shell — appointments, records, and on-floor workflows.",
    foot1: "iOS · Android · Web",
    foot2: "2025",
    tags: ["healthcare"],
  },
  {
    cat: "Retail & F&B",
    status: "Live",
    title: "F&B Chain Customer Superapp",
    desc: "Loyalty, ordering, and store ops engineered for a high-velocity regional F&B chain.",
    foot1: "1M+ orders / month",
    foot2: "2024",
    tags: ["retail"],
  },
  {
    cat: "Immersive",
    status: "Live",
    title: "3D Immersive Wayfinding",
    desc: "WebGL spatial experience that renders venue interiors and routes visitors with sub-meter accuracy.",
    foot1: "Three.js · WebGL",
    foot2: "2025",
    tags: ["immersive"],
  },
  {
    cat: "Smart City",
    status: "Live",
    title: "Traffic Intelligence Platform",
    desc: "Intersection-level vehicle classification, congestion modeling, and edge inference at city scale.",
    foot1: "Edge AI · Computer Vision",
    foot2: "2025",
    tags: ["smartcity"],
  },
  {
    cat: "Healthcare · AI",
    status: "Live",
    title: "Post-Surgery Sentiment AI",
    desc: "NLP pipeline that scores patient feedback for clinical risk signals across the recovery window.",
    foot1: "NLP · Pipeline",
    foot2: "2025",
    tags: ["healthcare", "ai"],
  },
  {
    cat: "Government",
    status: "Live",
    title: "ESG & Carbon Reporting Platform",
    desc: "Auditable Scope 1, 2, 3 architecture wired to operational data — built for CBAM and APAC reporting.",
    foot1: "GHG · CBAM",
    foot2: "2026",
    tags: ["government"],
  },
  {
    cat: "AI & Automation",
    status: "Live",
    title: "RPA Test Automation Suite",
    desc: "Robotic process automation handling QA flows on legacy systems where Selenium gave up.",
    foot1: "RPA · QA",
    foot2: "2025",
    tags: ["ai"],
  },
  {
    cat: "Cloud · AI",
    status: "Live",
    title: "Cloud Application Transformation",
    desc: "Re-platforming legacy monoliths into containerized, observable, multi-region cloud architecture.",
    foot1: "Kubernetes · Hybrid Cloud",
    foot2: "2025",
    tags: ["ai"],
  },
  {
    cat: "AI & Agents",
    status: "Live",
    title: "Enterprise AI Agent Platform",
    desc: "Domain-tuned agent layers replacing manual reconciliation, scheduling, and exception triage.",
    foot1: "LLM · Agents",
    foot2: "2026",
    tags: ["ai"],
  },
  {
    cat: "Manufacturing",
    status: "Live",
    title: "Service Frontier Field App",
    desc: "Field-service operator surface with offline-first sync, inspection capture, and SLA tracking.",
    foot1: "Mobile · Offline",
    foot2: "2024",
    tags: ["manufacturing"],
  },
  {
    cat: "Manufacturing",
    status: "Live",
    title: "Manufacturing Frontier Operator App",
    desc: "Shop-floor operator UI for line leads — work orders, scrap, downtime reasons, shift handover.",
    foot1: "Operator UX",
    foot2: "2025",
    tags: ["manufacturing"],
  },
  {
    cat: "Manufacturing · AI",
    status: "Live",
    title: "Xentr.AI Manufacturing Analytics",
    desc: "Non-invasive analytics platform turning PLC and SCADA signals into OEE, predictive maintenance, and agent ops.",
    foot1: "Product",
    foot2: "2024",
    tags: ["manufacturing", "ai"],
  },
  {
    cat: "Hardware",
    status: "Live",
    title: "Custom Edge IoT Hardware",
    desc: "Custom edge gateways and clamp-on sensor modules engineered for industrial environments.",
    foot1: "PCB · Edge",
    foot2: "2025",
    tags: ["hardware"],
  },
  {
    cat: "Hardware",
    status: "Live",
    title: "Embedded Sensor Firmware",
    desc: "Embedded firmware for sensor arrays — real-time, OTA-updatable, hardened against floor reality.",
    foot1: "C · RTOS · OTA",
    foot2: "2025",
    tags: ["hardware"],
  },
  {
    cat: "Hardware · QA",
    status: "Live",
    title: "Prop Jig with Test Software",
    desc: "Custom inspection rigs with paired test software — pass/fail logic, traceability, MES integration.",
    foot1: "Jig · Test SW",
    foot2: "2025",
    tags: ["hardware", "manufacturing"],
  },
  {
    cat: "Government · Enterprise",
    status: "Live",
    title: "Procurement-Grade VMS",
    desc: "Vendor management with onboarding, scoring, contract lifecycle, and full audit trail.",
    foot1: "Procurement",
    foot2: "2024",
    tags: ["government"],
  },
  {
    cat: "Enterprise",
    status: "Live",
    title: "Regional CRM Platform",
    desc: "Custom CRM tailored to a regional sales motion — pipeline, comms, and analytics in one stack.",
    foot1: "Salesforce-class",
    foot2: "2024",
    tags: ["retail", "government"],
  },
  {
    cat: "Enterprise · AI",
    status: "Partner",
    title: "Microsoft Enterprise AI Partnership",
    desc: "Co-engineered enterprise AI engagements as a Microsoft partner — Azure-native, identity-first.",
    foot1: "Azure · Copilot",
    foot2: "2026",
    tags: ["ai"],
  },
  {
    cat: "Retail · Mobile",
    status: "Live",
    title: "Cross-Platform Mobile Apps",
    desc: "Native cross-platform apps — payments, identity, content, and offline sync, end-to-end.",
    foot1: "iOS · Android",
    foot2: "2024",
    tags: ["retail"],
  },
];

const FILTERS = [
  { f: "all", label: "All" },
  { f: "manufacturing", label: "Manufacturing" },
  { f: "healthcare", label: "Healthcare" },
  { f: "government", label: "Digital Government" },
  { f: "smartcity", label: "Smart City" },
  { f: "retail", label: "Retail & F&B" },
  { f: "immersive", label: "Immersive" },
  { f: "ai", label: "AI & Agents" },
  { f: "hardware", label: "Hardware" },
];

export default function Projects() {
  const [active, setActive] = useState("all");

  return (
    <>
      <div className="proj-filters">
        {FILTERS.map((f) => (
          <button
            key={f.f}
            type="button"
            className={`proj-filter${active === f.f ? " active" : ""}`}
            onClick={() => setActive(f.f)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="proj-grid">
        {PROJECTS.map((p) => {
          const visible = active === "all" || p.tags.includes(active);
          return (
            <article
              key={p.title}
              className={`proj-card${visible ? "" : " hidden"}`}
              data-tags={p.tags.join(" ")}
              style={visible ? undefined : { display: "none" }}
            >
              <div className="proj-head">
                <span className="proj-cat">{p.cat}</span>
                <span className="proj-status">{p.status}</span>
              </div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
              <div className="proj-foot">
                <span>{p.foot1}</span>
                <span>{p.foot2}</span>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
