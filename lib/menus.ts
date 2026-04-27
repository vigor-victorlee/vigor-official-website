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
  industries: {
    title: "Industries",
    lede: "Six verticals, one engineering practice. Pick a floor — we've shipped there.",
    cta: { label: "All industries →", href: "#industries" },
    cols: [
      {
        heading: "Operations",
        items: [
          { label: "Manufacturing", href: "#industries", desc: "Non-invasive IIoT, factory analytics, ops apps." },
          { label: "Smart City", href: "#industries", desc: "Traffic AI, edge IoT, city-scale data spines." },
        ],
      },
      {
        heading: "People",
        items: [
          { label: "Healthcare", href: "#industries", desc: "Hospital superapps, clinical workflows, NLP." },
          { label: "Retail & F&B", href: "#industries", desc: "Loyalty, ordering, store ops at scale." },
        ],
      },
      {
        heading: "Public & immersive",
        items: [
          { label: "Digital Government", href: "#industries", desc: "VMS, ESG, citizen platforms." },
          { label: "Immersive", href: "#industries", desc: "3D wayfinding, spatial, AR/VR." },
        ],
      },
    ],
    feature: {
      eyebrow: "Featured vertical",
      title: "Manufacturing",
      desc: "Retrofit a legacy CNC in four weeks — agent-grade insight on day 30.",
      href: "#industries",
    },
  },
  products: {
    title: "Products",
    lede: "Operator-built products that ship. One engineering spine.",
    cta: { label: "See all products →", href: "#products" },
    cols: [
      {
        heading: "In market",
        items: [
          { label: "Xentr.AI", href: "#products", desc: "Non-invasive IIoT + agentic AI for the floor.", status: "live" },
        ],
      },
      {
        heading: "In design",
        items: [
          { label: "VIGOR ESG", href: "#products", desc: "CBAM-native compliance. APAC-built.", status: "preview" },
        ],
      },
      {
        heading: "Programs",
        items: [
          { label: "Design partner program", href: "#contact", desc: "Co-build the next product in the portfolio." },
          { label: "Pilot program", href: "#contact", desc: "Live retrofit pilot on one line." },
        ],
      },
    ],
    feature: {
      eyebrow: "Featured product",
      title: "Xentr.AI",
      desc: "Live in market. Retrofit a legacy CNC in four weeks — agent-grade insight on day 30.",
      href: "#products",
    },
  },
  projects: {
    title: "Projects",
    lede: "A snapshot of work shipped — superapps, AI agents, IoT, firmware, cloud transformation.",
    cta: { label: "All projects →", href: "#projects" },
    cols: [
      {
        heading: "By vertical",
        items: [
          { label: "Manufacturing", href: "#projects", desc: "Frontier apps, Xentr.AI, prop-jig." },
          { label: "Healthcare", href: "#projects", desc: "Hospital superapp, NLP sentiment." },
          { label: "Smart City", href: "#projects", desc: "Traffic analytics, edge intelligence." },
        ],
      },
      {
        heading: "By capability",
        items: [
          { label: "AI & Agents", href: "#projects", desc: "Domain-tuned LLM agents in production." },
          { label: "Hardware", href: "#projects", desc: "Edge gateways, firmware, custom rigs." },
          { label: "Cloud transformation", href: "#projects", desc: "Re-platforming legacy monoliths." },
        ],
      },
      {
        heading: "Partnerships",
        items: [
          { label: "Microsoft enterprise AI", href: "#projects", desc: "Co-engineered Azure-native engagements." },
        ],
      },
    ],
    feature: {
      eyebrow: "Recently shipped",
      title: "3D immersive wayfinding",
      desc: "WebGL spatial app routing visitors with sub-meter accuracy.",
      href: "#projects",
    },
  },
};
