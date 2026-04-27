export type MenuItem = {
  label: string;
  href: string;
  desc?: string;
  status?: "live" | "preview";
};
export type MenuColumn = { heading: string; items: MenuItem[] };
export type MenuData = {
  title: string;
  lede: string;
  cta: { label: string; href: string };
  cols: MenuColumn[];
  feature: { eyebrow: string; title: string; desc: string; href: string };
};

export const MENUS: Record<string, MenuData> = {
  capabilities: {
    title: "Capabilities",
    lede: "Five disciplines, one engineering team. From the PLC up to the agent.",
    cta: { label: "All capabilities →", href: "/capabilities" },
    cols: [
      {
        heading: "Build",
        items: [
          { label: "Engineering", href: "/capabilities/engineering", desc: "Mobile, web, firmware — operator-grade software." },
          { label: "IoT", href: "/capabilities/iot", desc: "Non-invasive retrofit on legacy machines." },
          { label: "Cloud", href: "/capabilities/cloud", desc: "Industrial-grade hybrid infra. Identity-first." },
        ],
      },
      {
        heading: "Intelligence",
        items: [
          { label: "Data Analytics", href: "/capabilities/data-engineering", desc: "ERP, MES, PLC, SCADA on one queryable plane." },
          { label: "AI / Machine Learning", href: "/capabilities/machine-learning", desc: "Domain-tuned agents, not chatbots." },
        ],
      },
      {
        heading: "Compliance",
        items: [
          { label: "ESG & CBAM", href: "/capabilities/esg", desc: "Auditable carbon, wired to the floor." },
          { label: "Engineering Advisory", href: "/capabilities/advisory", desc: "Two-week diagnostics. Opinionated recs." },
        ],
      },
    ],
    feature: {
      eyebrow: "Featured engagement",
      title: "Two-week diagnostic",
      desc: "On-site, on the floor. We instrument and write the problem in a way you can verify.",
      href: "/capabilities#engagement",
    },
  },
  solutions: {
    title: "Solutions",
    lede: "Six verticals. Operator-built deeptech where uptime, accuracy, and audit pressure are real.",
    cta: { label: "All solutions →", href: "/solutions" },
    cols: [
      {
        heading: "Operations",
        items: [
          { label: "Manufacturing", href: "/solutions/manufacturing", desc: "Non-invasive IIoT, factory analytics, frontier ops." },
          { label: "Smart City", href: "/solutions/smart-city", desc: "Traffic AI, edge IoT, city-scale data spines." },
        ],
      },
      {
        heading: "People",
        items: [
          { label: "Healthcare", href: "/solutions/healthcare", desc: "Hospital superapps, clinical workflows, NLP." },
          { label: "Retail & F&B", href: "/solutions/retail", desc: "Loyalty, ordering, store ops at scale." },
        ],
      },
      {
        heading: "Public & immersive",
        items: [
          { label: "Digital Government", href: "/solutions/government", desc: "VMS, ESG, citizen platforms." },
          { label: "Immersive", href: "/solutions/immersive", desc: "3D wayfinding, spatial, AR/VR.", status: "live" },
        ],
      },
    ],
    feature: {
      eyebrow: "Featured product",
      title: "Xentr.AI",
      desc: "Live in market. Retrofit a legacy CNC in four weeks — agent-grade insight on day 30.",
      href: "/products#xentrai",
    },
  },
};
