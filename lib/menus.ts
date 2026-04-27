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

// All hrefs route to the home-page sections (#capabilities, #industries, #products)
// so users land on existing content rather than 404 pages we haven't built yet.

export const MENUS: Record<string, MenuData> = {
  capabilities: {
    title: "Capabilities",
    lede: "Five disciplines, one engineering team. From the PLC up to the agent.",
    cta: { label: "All capabilities →", href: "/#capabilities" },
    cols: [
      {
        heading: "Build",
        items: [
          { label: "Engineering", href: "/#capabilities", desc: "Mobile, web, firmware — operator-grade software." },
          { label: "IoT", href: "/#capabilities", desc: "Non-invasive retrofit on legacy machines." },
          { label: "Cloud", href: "/#capabilities", desc: "Industrial-grade hybrid infra. Identity-first." },
        ],
      },
      {
        heading: "Intelligence",
        items: [
          { label: "Data Analytics", href: "/#capabilities", desc: "ERP, MES, PLC, SCADA on one queryable plane." },
          { label: "AI / Machine Learning", href: "/#capabilities", desc: "Domain-tuned agents, not chatbots." },
        ],
      },
      {
        heading: "Compliance",
        items: [
          { label: "ESG & CBAM", href: "/#capabilities", desc: "Auditable carbon, wired to the floor." },
          { label: "Engineering Advisory", href: "/#capabilities", desc: "Two-week diagnostics. Opinionated recs." },
        ],
      },
    ],
    feature: {
      eyebrow: "Featured engagement",
      title: "Two-week diagnostic",
      desc: "On-site, on the floor. We instrument and write the problem in a way you can verify.",
      href: "/#capabilities",
    },
  },
  solutions: {
    title: "Solutions",
    lede: "Six verticals. Operator-built deeptech where uptime, accuracy, and audit pressure are real.",
    cta: { label: "All solutions →", href: "/#industries" },
    cols: [
      {
        heading: "Operations",
        items: [
          { label: "Manufacturing", href: "/#industries", desc: "Non-invasive IIoT, factory analytics, frontier ops." },
          { label: "Smart City", href: "/#industries", desc: "Traffic AI, edge IoT, city-scale data spines." },
        ],
      },
      {
        heading: "People",
        items: [
          { label: "Healthcare", href: "/#industries", desc: "Hospital superapps, clinical workflows, NLP." },
          { label: "Retail & F&B", href: "/#industries", desc: "Loyalty, ordering, store ops at scale." },
        ],
      },
      {
        heading: "Public & immersive",
        items: [
          { label: "Digital Government", href: "/#industries", desc: "VMS, ESG, citizen platforms." },
          { label: "Immersive", href: "/#industries", desc: "3D wayfinding, spatial, AR/VR.", status: "live" },
        ],
      },
    ],
    feature: {
      eyebrow: "Featured product",
      title: "Xentr.AI",
      desc: "Live in market. Retrofit a legacy CNC in four weeks — agent-grade insight on day 30.",
      href: "/products#xentr-ai",
    },
  },
};
