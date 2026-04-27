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
  { cat: "Healthcare", status: "Live", title: "Hospital superapp", desc: "Patient, clinician, and operations surfaces in one Flutter shell — appointments, records, and on-floor workflows.", foot1: "iOS · Android · Web", foot2: "2025", tags: ["healthcare"] },
  { cat: "Retail & F&B", status: "Live", title: "F&B chain superapp", desc: "Loyalty, ordering, and store ops engineered for a high-velocity regional chain.", foot1: "1M+ orders/mo", foot2: "2024", tags: ["retail"] },
  { cat: "Immersive", status: "Live", title: "3D immersive wayfinding", desc: "WebGL spatial app that renders venue interiors and routes visitors with sub-meter accuracy.", foot1: "Three.js · WebGL", foot2: "2025", tags: ["immersive"] },
  { cat: "Smart City", status: "Live", title: "Traffic analytics", desc: "Intersection-level vehicle classification, congestion modeling, and edge inference at city scale.", foot1: "Edge AI · CV", foot2: "2025", tags: ["smartcity"] },
  { cat: "Healthcare · AI", status: "Live", title: "Post-surgery sentiment analysis", desc: "NLP pipeline that scores patient feedback for clinical risk signals across the recovery window.", foot1: "NLP · Pipeline", foot2: "2025", tags: ["healthcare", "ai"] },
  { cat: "Government", status: "Live", title: "ESG application", desc: "Auditable Scope 1, 2, 3 architecture wired to operational data — built for CBAM and APAC reporting.", foot1: "GHG · CBAM", foot2: "2026", tags: ["government"] },
  { cat: "AI & Automation", status: "Live", title: "RPA replaces test automation", desc: "Robotic process automation handling QA flows on legacy systems where Selenium gave up.", foot1: "RPA · QA", foot2: "2025", tags: ["ai"] },
  { cat: "AI & Cloud", status: "Live", title: "Cloud application transformation", desc: "Re-platforming legacy monoliths into containerized, observable, multi-region cloud architecture.", foot1: "K8s · Hybrid cloud", foot2: "2025", tags: ["ai"] },
  { cat: "AI & Agents", status: "Live", title: "AI agent transformation", desc: "Domain-tuned agent layers replacing manual reconciliation, scheduling, and exception triage.", foot1: "LLM · Agents", foot2: "2026", tags: ["ai"] },
  { cat: "Manufacturing", status: "Live", title: "Service Frontier app", desc: "Field-service operator surface with offline-first sync, inspection capture, and SLA tracking.", foot1: "Mobile · Offline", foot2: "2024", tags: ["manufacturing"] },
  { cat: "Manufacturing", status: "Live", title: "Manufacturing Frontier app", desc: "Shop-floor operator UI for line leads — work orders, scrap, downtime reasons, shift handover.", foot1: "Operator UX", foot2: "2025", tags: ["manufacturing"] },
  { cat: "Manufacturing · AI", status: "Live", title: "Xentr.AI — manufacturing analytics", desc: "Non-invasive analytics platform turning PLC and SCADA signals into OEE, predictive maintenance, and agent ops.", foot1: "Product", foot2: "2024", tags: ["manufacturing", "ai"] },
  { cat: "Hardware", status: "Live", title: "IoT hardware development", desc: "Custom edge gateways and clamp-on sensor modules engineered for industrial environments.", foot1: "PCB · Edge", foot2: "2025", tags: ["hardware"] },
  { cat: "Hardware", status: "Live", title: "Firmware development", desc: "Embedded firmware for sensor arrays — real-time, OTA-updatable, hardened against floor reality.", foot1: "C · RTOS · OTA", foot2: "2025", tags: ["hardware"] },
  { cat: "Hardware · QA", status: "Live", title: "Prop jig with testing software", desc: "Custom inspection rigs with paired test software — pass/fail logic, traceability, MES integration.", foot1: "Jig · Test SW", foot2: "2025", tags: ["hardware", "manufacturing"] },
  { cat: "Government · Enterprise", status: "Live", title: "Vendor management system", desc: "Procurement-grade VMS with onboarding, scoring, contract lifecycle, and audit trail.", foot1: "Procurement", foot2: "2024", tags: ["government"] },
  { cat: "Enterprise", status: "Live", title: "CRM platform", desc: "Custom CRM tailored to a regional sales motion — pipeline, comms, and analytics in one stack.", foot1: "Salesforce-class", foot2: "2024", tags: ["retail", "government"] },
  { cat: "Enterprise · AI", status: "Partner", title: "Enterprise AI — Microsoft partnership", desc: "Co-engineered enterprise AI engagements as a Microsoft partner — Azure-native, identity-first.", foot1: "Azure · Copilot", foot2: "2026", tags: ["ai"] },
  { cat: "Retail · Mobile", status: "Live", title: "Mobile application development", desc: "Cross-platform native apps — payments, identity, content, and offline sync, end-to-end.", foot1: "iOS · Android", foot2: "2024", tags: ["retail"] },
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
