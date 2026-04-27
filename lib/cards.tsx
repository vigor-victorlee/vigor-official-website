import type { CarouselCard } from "@/components/AppleCarousel";

const VIOLET_GRADIENT = "linear-gradient(180deg, #1a0e2e 0%, #0a0613 100%)";
const VIOLET_BLUE = "linear-gradient(180deg, #1a1a3a 0%, #0a0a18 100%)";
const VIOLET_PINK = "linear-gradient(180deg, #2a0e2e 0%, #100618 100%)";
const VIOLET_TEAL = "linear-gradient(180deg, #0e2a2e 0%, #061018 100%)";

export const INDUSTRY_CARDS: CarouselCard[] = [
  {
    num: "Vertical 01",
    category: "Operations",
    title: "Manufacturing",
    description: "Non-invasive IIoT, factory analytics, frontier ops apps.",
    gradient: VIOLET_GRADIENT,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20M4 20V10l5 4V10l5 4V6l5 4v10" />
        <path d="M9 20v-4M14 20v-4" />
      </svg>
    ),
    body: (
      <>
        <p>We retrofit non-invasive IIoT onto legacy CNC and PLC machinery, build operator-grade frontier apps, and run factory analytics that survive shift changes and floor reality.</p>
        <ul>
          <li>Xentr.AI manufacturing analytics in market</li>
          <li>OEE intelligence and predictive maintenance</li>
          <li>Frontier ops apps for shop-floor leads</li>
          <li>Prop jigs with paired test software, MES integrated</li>
        </ul>
      </>
    ),
  },
  {
    num: "Vertical 02",
    category: "People",
    title: "Healthcare",
    description: "Hospital superapps, clinical workflows, NLP, patient mobile.",
    gradient: VIOLET_PINK,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14V8a2 2 0 0 0-2-2h-3V3h-4v3H7a2 2 0 0 0-2 2v6" />
        <path d="M12 9v6M9 12h6" />
        <path d="M3 14h18l-2 7H5z" />
      </svg>
    ),
    body: (
      <>
        <p>Hospital-grade superapps that unify patient, clinician, and operations surfaces. NLP pipelines that score post-surgery sentiment for clinical risk signals across the recovery window.</p>
        <ul>
          <li>Hospital superapp platform — iOS · Android · Web</li>
          <li>Post-surgery sentiment AI</li>
          <li>Clinical workflow systems</li>
          <li>Patient-facing mobile and engagement</li>
        </ul>
      </>
    ),
  },
  {
    num: "Vertical 03",
    category: "Public",
    title: "Digital Government",
    description: "Citizen platforms, VMS, ESG reporting, grant-aligned R&D.",
    gradient: VIOLET_BLUE,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />
      </svg>
    ),
    body: (
      <>
        <p>Procurement-grade vendor management, ESG and CBAM reporting, and grant-aligned R&amp;D scoping under SIRIM/MIDA frameworks. Built for citizen scale with identity and audit at the core.</p>
        <ul>
          <li>Procurement-grade VMS — onboarding, scoring, contract lifecycle</li>
          <li>ESG &amp; carbon reporting platform — Scope 1, 2, 3</li>
          <li>Citizen-facing digital services</li>
          <li>SIRIM · MIDA · MIMOS · NCER · MIDF accredited</li>
        </ul>
      </>
    ),
  },
  {
    num: "Vertical 04",
    category: "Operations",
    title: "Smart City",
    description: "Traffic AI, edge IoT, city-scale data spines.",
    gradient: VIOLET_TEAL,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v6M12 17v6M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M1 12h6M17 12h6M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    body: (
      <>
        <p>Intersection-level vehicle classification, congestion modeling, and edge inference at city scale. Built around the same data spine that powers our manufacturing analytics.</p>
        <ul>
          <li>Traffic intelligence platform</li>
          <li>Edge IoT meshes — clamp-on hardware</li>
          <li>City-scale observability</li>
          <li>Computer vision and edge AI</li>
        </ul>
      </>
    ),
  },
  {
    num: "Vertical 05",
    category: "People",
    title: "Retail & F&B",
    description: "Customer-facing superapps, loyalty engines, CRM.",
    gradient: VIOLET_GRADIENT,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7h18l-2 13H5z" />
        <path d="M8 7V5a4 4 0 0 1 8 0v2" />
      </svg>
    ),
    body: (
      <>
        <p>Customer-facing superapps for high-velocity F&amp;B chains: loyalty, ordering, and store operations engineered for the frontline.</p>
        <ul>
          <li>F&amp;B chain customer superapp — 1M+ orders / month</li>
          <li>Regional CRM platform</li>
          <li>Loyalty engines and engagement</li>
          <li>Cross-platform mobile apps</li>
        </ul>
      </>
    ),
  },
  {
    num: "Vertical 06",
    category: "Immersive",
    title: "Immersive & Entertainment",
    description: "3D wayfinding, spatial experiences, AR/VR pilots.",
    gradient: VIOLET_PINK,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    body: (
      <>
        <p>WebGL spatial experiences that render venue interiors and route visitors with sub-meter accuracy. AR/VR pilots and interactive venue installations.</p>
        <ul>
          <li>3D immersive wayfinding — Three.js · WebGL</li>
          <li>Spatial interactive installations</li>
          <li>AR/VR pilot programs</li>
          <li>Sub-meter routing and indoor positioning</li>
        </ul>
      </>
    ),
  },
];

export const CAPABILITY_CARDS: CarouselCard[] = [
  {
    num: "/01",
    category: "Intelligence",
    title: "AI & LLM Systems",
    description: "Domain-tuned agents for inspection, scheduling, shop-floor decisions. Not chatbots — operators.",
    gradient: VIOLET_GRADIENT,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="3" /></svg>,
  },
  {
    num: "/02",
    category: "Floor & Data",
    title: "Industrial IoT",
    description: "Non-invasive retrofit on legacy machines. CI-grade observability without ripping the floor.",
    gradient: VIOLET_BLUE,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" /></svg>,
  },
  {
    num: "/03",
    category: "Compliance",
    title: "ESG & CBAM",
    description: "Auditable carbon and ESG reporting wired to the same data spine. Built for APAC exporters.",
    gradient: VIOLET_TEAL,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h3l3-7 6 14 3-7h3" /></svg>,
  },
  {
    num: "/04",
    category: "Floor & Data",
    title: "Integrations",
    description: "ERP, MES, PLC, SCADA tied into one queryable plane. We've stitched them all.",
    gradient: VIOLET_PINK,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /><path d="M11 7h4a2 2 0 0 1 2 2v4" /></svg>,
  },
  {
    num: "/05",
    category: "Build",
    title: "Cloud Infrastructure",
    description: "Private and hybrid clouds engineered for industrial workloads — not generic SaaS.",
    gradient: VIOLET_BLUE,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 1-9 9M21 12a9 9 0 0 0-9-9M3 12a9 9 0 0 1 9-9M3 12a9 9 0 0 0 9 9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>,
  },
  {
    num: "/06",
    category: "Build",
    title: "Test Automation",
    description: "Quality systems and inspection pipelines that survive shift changes and floor reality.",
    gradient: VIOLET_GRADIENT,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13l2 2 4-4" /></svg>,
  },
  {
    num: "/07",
    category: "Advisory",
    title: "Engineering Advisory",
    description: "Engineer-led, opinionated, short engagements. Recommendations you can ship Monday.",
    gradient: VIOLET_TEAL,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3" /><path d="M5 21a7 7 0 0 1 14 0" /></svg>,
  },
  {
    num: "/08",
    category: "Support",
    title: "Maintenance & Support",
    description: "Long-haul SLAs from the team that built it. No handoff to a managed-service vendor.",
    gradient: VIOLET_PINK,
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" /><path d="M3 7l9 6 9-6M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" /></svg>,
  },
];
