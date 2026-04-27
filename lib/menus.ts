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
  services: {
    title: "Services",
    lede: "Engineer-led advisory & build. Six capabilities, one opinionated team.",
    cta: { label: "See all services →", href: "/services" },
    cols: [
      {
        heading: "Intelligence",
        items: [
          { label: "AI & LLM Systems", href: "/services#ai-llm", desc: "Domain-tuned agents for industrial workflows." },
          { label: "Engineering Advisory", href: "/services#advisory", desc: "Two-week diagnostics. Opinionated recs." },
        ],
      },
      {
        heading: "Floor & data",
        items: [
          { label: "Industrial IoT", href: "/services#iiot", desc: "Non-invasive retrofit on legacy machines." },
          { label: "Integration & Data", href: "/services#integration", desc: "ERP, MES, PLC, SCADA on one plane." },
          { label: "Cloud & Edge", href: "/services#cloud", desc: "Industrial-grade infra. Hybrid by default." },
        ],
      },
      {
        heading: "Compliance",
        items: [
          { label: "ESG & CBAM", href: "/services#esg", desc: "Auditable carbon, wired to the floor." },
        ],
      },
    ],
    feature: {
      eyebrow: "Featured engagement",
      title: "Two-week diagnostic",
      desc: "On-site, on the floor. We instrument and write down the problem in a way you can verify.",
      href: "/services#engagement",
    },
  },
  products: {
    title: "Products",
    lede: "Operator-built products that ship. One engineering spine.",
    cta: { label: "See all products →", href: "/products" },
    cols: [
      {
        heading: "In market",
        items: [
          { label: "Xentr.AI", href: "/products#xentrai", desc: "Non-invasive IIoT + agentic AI for the floor.", status: "live" },
        ],
      },
      {
        heading: "In design",
        items: [
          { label: "VIGOR ESG", href: "/products#esg", desc: "CBAM-native compliance. APAC-built.", status: "preview" },
        ],
      },
      {
        heading: "Programs",
        items: [
          { label: "Design partner program", href: "/contact?topic=design-partner", desc: "Co-build the next product in the portfolio." },
          { label: "Pilot program", href: "/contact?topic=pilot", desc: "Live retrofit pilot on one line." },
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
  about: {
    title: "About",
    lede: "Operator-built deeptech, from Penang. Backed by Malaysia's innovation infrastructure.",
    cta: { label: "See the company →", href: "/about" },
    cols: [
      {
        heading: "Company",
        items: [
          { label: "Why VIGOR exists", href: "/about#story", desc: "The room we're building in." },
          { label: "How we're structured", href: "/about#structure", desc: "Advisory + portfolio. Two arms." },
          { label: "Engineering principles", href: "/about#principles", desc: "Six rules that show up everywhere." },
        ],
      },
      {
        heading: "Posture",
        items: [
          { label: "Three pillars", href: "/about#pillars", desc: "Data, automation, compliance." },
          { label: "Accreditation", href: "/about#accreditation", desc: "SIRIM · MIMOS · MIDA · NCER · MIDF." },
        ],
      },
    ],
    feature: {
      eyebrow: "Manifesto",
      title: "Built by manufacturers, not theorists.",
      desc: "We've stood on the floors we now instrument. That's the standard we ship to.",
      href: "/#manifesto",
    },
  },
};
