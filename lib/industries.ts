export type IndustryProject = {
  tag: string;
  title: string;
  meta: string;
};

export type IndustryFAQ = {
  q: string;
  a: string;
};

export type Industry = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  lede: string;
  heroImage: string;
  metricValue: string;
  metricUnit: string;
  metricCaption: string;
  fitWith: string[];
  notFitIf: string[];
  projects: IndustryProject[];
  faqs: IndustryFAQ[];
  leadEngineer: {
    role: string;
    blurb: string;
  };
  ctaLine: string;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "manufacturing",
    label: "Manufacturing",
    eyebrow: "INDUSTRY · MANUFACTURING · CBAM-EXPOSED",
    title: "Deeptech for the",
    titleAccent: "factory floor.",
    lede:
      "We retrofit non-invasive IIoT onto legacy CNC and PLC machinery, build operator-grade frontier apps, and run factory analytics that survive shift changes and floor reality. From line 03 to the regulator, every signal traceable, every metric audit-ready.",
    heroImage: "/assets/industries/manufacturing.jpg",
    metricValue: "94.2",
    metricUnit: "% OEE",
    metricCaption: "Tier-1 supplier · Line 03 · 12 lines live",
    fitWith: [
      "You run >50 PLCs across 2+ lines, or one strategic line where downtime is measured in MYR per minute",
      "You're a Tier-1 / Tier-2 with EU export exposure — CBAM, EUDR, or supply-chain audit pressure",
      "You have at least one full-time IT/OT engineer to pair with us during deployment and stay after handover",
      "Annual digital / automation budget is RM 500k+ and operations leadership is bought in",
    ],
    notFitIf: [
      "You want a 1-week PoC for under RM 100k — our minimum engaged scope is the 4-week pilot",
      "You need only off-the-shelf SaaS — we engineer where the SaaS doesn't reach",
      "Procurement is leading the conversation without ops leadership behind it",
    ],
    projects: [
      {
        tag: "MANUFACTURING · 2025",
        title: "Xentr.AI Manufacturing Analytics",
        meta: "OEE +2.1pt this week · 12 lines · 42ms p99",
      },
      {
        tag: "MANUFACTURING · 2024",
        title: "Manufacturing Frontier Operator App",
        meta: "iOS · Android · offline-first",
      },
      {
        tag: "HARDWARE · 2024",
        title: "Custom IIoT Sensor Mesh",
        meta: "Non-invasive retrofit · 200+ machines",
      },
    ],
    faqs: [
      {
        q: "Will it work with our existing SCADA / MES?",
        a: "Yes. We tap PLCs non-invasively (OPC-UA, Modbus, side-channel) and write to your existing SCADA or MES rather than replacing it. We've integrated with Wonderware, AVEVA, Ignition, and several homegrown stacks.",
      },
      {
        q: "Do we need to replace any hardware?",
        a: "No. Every Vigor manufacturing engagement starts with the assumption that your hardware stays. If the line is producing, we don't touch it; we instrument around it. Hardware refresh is your call, not ours.",
      },
      {
        q: "Can it run offline / air-gapped?",
        a: "Yes. We default to edge-first inference for any analytics that drive operator decisions — the line keeps running even when the corporate network is down. Cloud sync is asynchronous and resumes when the link is back.",
      },
      {
        q: "What about CBAM and ESG compliance from day 1?",
        a: "Every signal we capture is timestamped, source-attributed, and stored in a format auditable for CBAM Scope 1/2 reporting. The data spine is the same one we use for our VIGOR ESG product, so compliance reports are a downstream artifact, not a separate project.",
      },
      {
        q: "Who owns the data and code after handover?",
        a: "You. Every SOW transfers code, schemas, and documentation to your team on milestone payment. We retain only generic library code we develop independently, listed explicitly in the SOW. No long-tail dependency on Vigor.",
      },
    ],
    leadEngineer: {
      role: "Lead engineer · Manufacturing engagements",
      blurb:
        "8 years on plant floors before joining Vigor. Certified Siemens S7. Previously led OEE platform rollout at a Tier-1 automotive supplier across 14 lines.",
    },
    ctaLine:
      "Bring a real line and a real problem. We'll architect it on the call.",
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    eyebrow: "INDUSTRY · HEALTHCARE · PDPA-NATIVE",
    title: "Deeptech for the",
    titleAccent: "hospital floor.",
    lede:
      "We engineer the layer between hospital operations and the regulator. Patient-facing superapps that work in low-signal wards, clinical workflow integration that survives the chaos of an ED on a Friday night, and audit logs the MOH inspector can read in their sleep.",
    heroImage: "/assets/industries/healthcare.jpg",
    metricValue: "12",
    metricUnit: "sites · 2.1k flows/day",
    metricCaption: "Penang Adventist Hospital · since 2024",
    fitWith: [
      "You're a private hospital network with 2+ sites, or a public hospital with regional rollout intent",
      "You have an existing HIS/EMR (Cerner, Epic, Allscripts, or homegrown) that needs to talk to mobile and web",
      "You have a clinical sponsor on the executive team — not just an IT-led project",
      "Annual digital health budget is RM 1M+ with PDPA / MyDIGITAL alignment as a hard constraint",
    ],
    notFitIf: [
      "You want a chatbot-as-doctor or clinical decision support that bypasses doctors — we don't ship that",
      "You need pure regulatory consulting without engineering output — we're builders",
      "You don't have IT or clinical-ops capacity to pair with us through deployment",
    ],
    projects: [
      {
        tag: "HEALTHCARE · 2024",
        title: "Hospital Superapp Platform",
        meta: "iOS · Android · Web · 12 sites",
      },
      {
        tag: "HEALTHCARE AI · 2025",
        title: "Clinical NLP Triage Assist",
        meta: "ED workflow · doctor-supervised",
      },
      {
        tag: "HEALTHCARE · 2024",
        title: "Outpatient Booking & Notification",
        meta: "PDPA-compliant · multi-tenant",
      },
    ],
    faqs: [
      {
        q: "PDPA compliance? MyDIGITAL alignment?",
        a: "Both, by default. Every healthcare engagement runs on Malaysian-resident infrastructure with PDPA Class A handling, role-based access, and audit logs the auditor can read directly. We support MyDIGITAL data classification and have shipped under those constraints since 2024.",
      },
      {
        q: "Will it work with our existing HIS / EMR?",
        a: "Yes. We integrate via HL7 v2, FHIR R4, or direct DB / message-bus depending on what your HIS exposes. Cerner, Epic, Allscripts, and most homegrown systems we've encountered have a workable surface.",
      },
      {
        q: "Offline mode for low-connectivity wards?",
        a: "Mandatory in our designs. Clinical apps default to offline-first with conflict-free replicated sync when the network returns. We've shipped this in wards where the WiFi drops every few hours.",
      },
      {
        q: "HL7/FHIR? DICOM imaging integration?",
        a: "HL7 v2 and FHIR R4 are baseline. DICOM is supported via separate integration — we partner on imaging vendors rather than reimplementing PACS, but we wire the workflow.",
      },
      {
        q: "Who's responsible if a doctor relies on a buggy alert?",
        a: "We design every clinical alert to be doctor-supervised — we never replace clinical judgment, only surface signal. Liability and clinical responsibility stay with the clinician; our job is to make sure the signal is reliable, traceable, and explainable.",
      },
    ],
    leadEngineer: {
      role: "Lead engineer · Healthcare engagements",
      blurb:
        "7 years across hospital IT and Flutter mobile. Shipped patient-facing apps in wards with 4G-only coverage. PDPA / FHIR specialist.",
    },
    ctaLine:
      "Bring a clinical sponsor and a real workflow. We'll architect it on the call.",
  },
  {
    slug: "government",
    label: "Government",
    eyebrow: "INDUSTRY · GOVERNMENT · GRANT-ALIGNED",
    title: "Deeptech for the",
    titleAccent: "regulator.",
    lede:
      "We build for ministries, agencies, and councils that need to ship something the auditor can defend three years from now. ESG/CBAM reporting platforms, traceable data spines, and procurement-grade VMS — engineered to outlast the political cycle that commissioned them.",
    heroImage: "/assets/industries/government.jpg",
    metricValue: "3,247",
    metricUnit: "tCO₂e Q3",
    metricCaption: "ESG · CBAM Scope 2 · audit-ready · backfilled",
    fitWith: [
      "Your project has ministerial sponsorship and a budgetary line item secured (not in approval limbo)",
      "You need a deliverable mapped to a specific MITI / MIDA / SIRIM / NCER initiative",
      "You're comfortable with grant-shaped R&D and have engineering counterparts to pair with us",
      "Procurement timeline is 6+ months — we cannot help if you need it in 3",
    ],
    notFitIf: [
      "You want pure consulting / advisory without shipped software — we engineer, we don't write white papers",
      "The procurement pathway requires bidding against 30 unnamed vendors — we don't compete on volume",
      "There's no internal procurement champion who can move it through a Malaysian ministry",
    ],
    projects: [
      {
        tag: "GOVERNMENT · 2025",
        title: "ESG & Carbon Reporting Platform",
        meta: "Q3 2025 backfilled · CBAM Scope 1/2",
      },
      {
        tag: "GOVERNMENT · 2024",
        title: "Procurement-Grade VMS",
        meta: "Multi-agency · audit logs",
      },
      {
        tag: "GOVERNMENT · 2025",
        title: "Citizen Service Mobile Platform",
        meta: "PDPA-native · biometric auth",
      },
    ],
    faqs: [
      {
        q: "MyDIGITAL alignment? MDEC accreditation?",
        a: "Yes. We design for MyDIGITAL data classification by default and our delivery posture aligns with MDEC's local-vendor preference. We're happy to bid as part of a consortium if your procurement requires it.",
      },
      {
        q: "Data residency in Malaysia? Cloud / on-prem?",
        a: "Default to Malaysian-resident infrastructure (AWS Malaysia region, Azure Singapore + Malaysia data plane, or on-prem). On-prem is supported and not a price premium — we run hybrid deployments routinely.",
      },
      {
        q: "PDPA + government data classification?",
        a: "Standard practice. We classify every data field on intake, apply the relevant retention and access policy, and surface the classification in audit logs. The auditor can read the lineage directly without a Vigor engineer in the room.",
      },
      {
        q: "Audit trails + reproducibility for the AG / AGC?",
        a: "Every transformation is logged with input, output, parameters, and time. We've defended our audit logs in front of an external auditor on the first try. Reproducibility is a load-bearing design constraint.",
      },
      {
        q: "How do you work with grant timelines (SIRIM / MIDA / MIMOS)?",
        a: "We've shipped under SIRIM-aligned R&D and MIDA grant-shaped engagements since 2024. We map deliverables to milestones, file the right reports, and don't burn months on grant theatre.",
      },
    ],
    leadEngineer: {
      role: "Lead engineer · Government engagements",
      blurb:
        "Background in regulated software (banking + healthcare) before joining. Has shipped against PDPA, GDPR, and MyDIGITAL classification frameworks.",
    },
    ctaLine:
      "Bring the procurement context and the deliverable shape. We'll scope it on the call.",
  },
  {
    slug: "smart-city",
    label: "Smart City",
    eyebrow: "INDUSTRY · SMART CITY · EDGE-FIRST",
    title: "Deeptech for the",
    titleAccent: "city corridor.",
    lede:
      "Edge-AI traffic intelligence, sub-meter wayfinding, and city-scale data spines that don't fall over when a typhoon takes out a fiber link. We build the bridge between a council's procurement reality and the operations centre's actual needs.",
    heroImage: "/assets/industries/smartcity.jpg",
    metricValue: "18",
    metricUnit: "intersections",
    metricCaption: "KL traffic intelligence · sub-second inference at edge",
    fitWith: [
      "You're a council, MBPP/MBSA-grade local authority, or developer with a smart-city build-out commitment",
      "You have at least one fiber backbone or 5G commitment for backhaul to the ops centre",
      "The use case is operational (traffic, lighting, waste, safety) — not vanity dashboards",
      "You have a CIO or smart city director with procurement authority and operational accountability",
    ],
    notFitIf: [
      "The brief is 'let's build something innovative' with no specific operational outcome attached",
      "You want pure hardware procurement without an engineered platform underneath",
      "The deployment scale is one intersection / one street as a permanent endpoint — we do those as pilots only",
    ],
    projects: [
      {
        tag: "SMART CITY · 2025",
        title: "Traffic Intelligence Platform",
        meta: "Edge inference · 18 intersections · KL",
      },
      {
        tag: "SMART CITY · 2024",
        title: "City Lighting Edge Mesh",
        meta: "LoRaWAN · 600+ nodes",
      },
      {
        tag: "SMART CITY · 2025",
        title: "Operations Centre Dashboard",
        meta: "Multi-tenant · 24/7 SLA",
      },
    ],
    faqs: [
      {
        q: "Can you integrate with our existing CCTV / traffic light systems?",
        a: "Yes — that's the default starting point. We tap existing camera feeds (RTSP, ONVIF) and traffic controller protocols (SCATS, NTCIP) rather than replacing them. Greenfield deployments are rare; we're built for brownfield.",
      },
      {
        q: "Edge inference latency at intersection level?",
        a: "Our KL traffic deployment runs at sub-second decision latency on commodity x86 edge boxes. Specific p99 numbers depend on the workload — we publish benchmarks in pilot reports.",
      },
      {
        q: "Privacy / surveillance concerns?",
        a: "Vigor's smart-city designs default to processing-on-edge with anonymization at capture. No raw video leaves the intersection unless explicitly required for an investigation, with audit logging and PDPA/MyDIGITAL alignment.",
      },
      {
        q: "Multi-vendor sensor compatibility?",
        a: "Our data spine is vendor-neutral by design. We've integrated cameras, lidars, radar, and IoT sensors from 6+ vendors in production — your existing infrastructure stays.",
      },
      {
        q: "Operations centre integration?",
        a: "We integrate with your existing OPS centre stack (or build one if needed). Standard practice is to surface our analytics into your existing dashboarding, not replace it.",
      },
    ],
    leadEngineer: {
      role: "Lead engineer · Smart-city engagements",
      blurb:
        "Computer-vision and edge inference background. Shipped traffic-classification at sub-second latency on commodity hardware. Wrote the KL traffic intelligence platform's core.",
    },
    ctaLine:
      "Bring the corridor and the operational outcome. We'll scope the pilot on the call.",
  },
  {
    slug: "retail",
    label: "Retail & F&B",
    eyebrow: "INDUSTRY · RETAIL & F&B · CHAIN-SCALE",
    title: "Deeptech for the",
    titleAccent: "storefront.",
    lede:
      "Customer superapps that handle 1M+ orders/month, store ops backends that survive 7am breakfast rush, and loyalty programs the CFO can defend at month-end close. Built for chains where every release ships to operators, not just designers.",
    heroImage: "/assets/industries/retail.jpg",
    metricValue: "1.04",
    metricUnit: "M orders/month",
    metricCaption: "F&B chain customer superapp · live since 2023 · multi-tenant",
    fitWith: [
      "You operate 10+ stores or franchises — we're not a single-shop builder",
      "You have an existing ERP / POS (SAP, Oracle, NetSuite, homegrown) we can integrate with",
      "Your COO knows what they want from technology — not just 'something digital'",
      "Annual tech budget is RM 800k+ with intent to ship, not just experiment",
    ],
    notFitIf: [
      "You want a TikTok-clone with 'AI features' bolted on",
      "You need only marketing automation — we don't compete with HubSpot or Klaviyo",
      "The ROI hypothesis is 'make us viral'",
    ],
    projects: [
      {
        tag: "RETAIL · 2024",
        title: "F&B Chain Customer Superapp",
        meta: "1M+ orders/month · iOS · Android",
      },
      {
        tag: "RETAIL · 2025",
        title: "Store Ops Mobile Backend",
        meta: "Offline-tolerant · multi-tenant",
      },
      {
        tag: "RETAIL · 2024",
        title: "Loyalty & Promotions Engine",
        meta: "CFO-auditable · multi-currency",
      },
    ],
    faqs: [
      {
        q: "Will the loyalty program survive an audit?",
        a: "Yes — that's the design constraint. Every transaction is double-entry with append-only audit logs, financial reconciliation reports, and an exportable trail your CFO can match against month-end close. We've defended loyalty audits for chains running 10M+ transactions/year.",
      },
      {
        q: "POS integration — Oracle / SAP / homegrown?",
        a: "All three are standard. We integrate via API where one exists, file-drop where it doesn't. Multi-tenant deployments often have heterogeneous POS — we handle that as a baseline.",
      },
      {
        q: "Multi-tenant for franchise operators?",
        a: "Yes. Default architecture supports franchise-level data isolation, brand-level rollups, and per-franchise access control. We've shipped this in chains with 50+ franchise operators on one platform.",
      },
      {
        q: "Order volume scaling — what breaks at 1M, 5M, 10M orders/month?",
        a: "Our F&B deployment runs comfortably at 1M+ orders/month on a modest infra footprint. Scaling to 10M is a tuning exercise (queue capacity, regional sharding) rather than a re-architecture.",
      },
      {
        q: "Offline ordering for poor-signal stores?",
        a: "Standard. The store ops backend defaults to offline-first with conflict-free sync. POS terminals continue to take orders when the WiFi or 4G is down; sync resumes when connectivity returns.",
      },
    ],
    leadEngineer: {
      role: "Lead engineer · Retail engagements",
      blurb:
        "Mobile + backend at scale. Has shipped order pipelines at 1M+/month, multi-tenant CRM, and loyalty engines audited by external auditors. Performance and reconciliation specialist.",
    },
    ctaLine:
      "Bring the chain context and the COO. We'll scope it on the call.",
  },
  {
    slug: "immersive",
    label: "Immersive",
    eyebrow: "INDUSTRY · IMMERSIVE · WEBGL-NATIVE",
    title: "Deeptech for the",
    titleAccent: "immersive venue.",
    lede:
      "WebGL-grade 3D wayfinding, immersive operator dashboards, and venue-scale visualization that runs on a tablet without melting it. We engineer the boring parts of immersive — the data wiring, the performance budget, the accessibility fallback — so the team can focus on the experience.",
    heroImage: "/assets/industries/immersive.jpg",
    metricValue: "<1",
    metricUnit: "m accuracy",
    metricCaption: "3D wayfinding · sub-meter · WebGL · runs on entry-level tablets",
    fitWith: [
      "You have a real venue (hospital, mall, factory, transit hub) needing wayfinding or visualization",
      "You have CAD / BIM / 3D scan data already, or budget to capture it",
      "You understand 3D wayfinding is engineering, not 'make a Unity game'",
      "Project budget is RM 200k+ for a deployed system (not a one-off demo)",
    ],
    notFitIf: [
      "You want a marketing-led VR experience with no operations integration",
      "You need only Unity / Unreal game development — we're systems engineers",
      "The output is a one-off demo, not a deployed system that survives a year of use",
    ],
    projects: [
      {
        tag: "IMMERSIVE · 2025",
        title: "3D Immersive Wayfinding",
        meta: "WebGL · sub-meter · hospital",
      },
      {
        tag: "IMMERSIVE · 2024",
        title: "Operator AR Maintenance Overlay",
        meta: "Tablet-grade · offline mode",
      },
      {
        tag: "IMMERSIVE · 2025",
        title: "Venue Operations Dashboard",
        meta: "3D telemetry visualization",
      },
    ],
    faqs: [
      {
        q: "Tablet / phone performance budget?",
        a: "We design for entry-level tablets and mid-range phones — no Pro-iPad assumptions. Our WebGL pipelines run at 60fps on devices three years old. Performance budget is part of every spec.",
      },
      {
        q: "Accessibility — does it work on low-end devices?",
        a: "Yes. Every immersive deployment ships with a non-3D fallback view (2D map, list nav) for accessibility and low-end devices. The fallback is not a second-class experience — it's a first-class entry point.",
      },
      {
        q: "Integration with existing wayfinding signage?",
        a: "Standard. We treat existing physical signage as an input source (locations, zones) and our 3D layer augments rather than replaces it. Shared data model, shared updates.",
      },
      {
        q: "Offline / poor-connectivity fallback?",
        a: "Mandatory. We bake the venue map into the app at build time and sync deltas asynchronously when the network returns. Hospital corridors and mall basements work fine.",
      },
      {
        q: "Maintenance — who updates the 3D model when the floor plan changes?",
        a: "We give your team a tooling pipeline for floor-plan updates — CAD/BIM in, 3D model out, deployment in minutes not weeks. Vigor stays on call for major retrofits via the maintenance retainer.",
      },
    ],
    leadEngineer: {
      role: "Lead engineer · Immersive engagements",
      blurb:
        "WebGL and Three.js veteran. Shipped 3D wayfinding for hospitals and malls. Performance-budget specialist; can squeeze 60fps out of a 3-year-old tablet.",
    },
    ctaLine:
      "Bring the venue and the operational use case. We'll scope it on the call.",
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
