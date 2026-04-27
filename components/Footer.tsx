import Image from "next/image";

const COLS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Xentr.AI", href: "/products#xentr-ai" },
      { label: "VIGOR ESG", href: "/products#vigor-esg" },
      { label: "Design partner program", href: "/products#design-partner-program" },
      { label: "Pilot program", href: "/products#pilot-program" },
    ],
  },
  {
    heading: "Capabilities",
    links: [
      { label: "AI & LLM Systems", href: "/#capabilities" },
      { label: "Industrial IoT", href: "/#capabilities" },
      { label: "ESG & CBAM", href: "/#capabilities" },
      { label: "Cloud Infrastructure", href: "/#capabilities" },
      { label: "Engineering Advisory", href: "/#capabilities" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Manufacturing", href: "/#industries" },
      { label: "Healthcare", href: "/#industries" },
      { label: "Digital Government", href: "/#industries" },
      { label: "Smart City", href: "/#industries" },
      { label: "Retail & F&B", href: "/#industries" },
      { label: "Immersive", href: "/#industries" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Career", href: "/career" },
      { label: "thevigor.co", href: "https://thevigor.co" },
    ],
  },
];

const CONTACT = [
  { label: "victorlee@vigordigital.org", href: "mailto:victorlee@vigordigital.org" },
  { label: "info@vigordigital.org", href: "mailto:info@vigordigital.org" },
  { label: "+6011-111 31981", href: "tel:+60111131981" },
];

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/vigordigital",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 18.337V9.927h-2.68v8.41h2.68zM6.999 8.76A1.55 1.55 0 1 0 7 5.66a1.55 1.55 0 0 0 0 3.1zm11.398 9.577v-4.806c0-2.491-1.331-3.65-3.106-3.65-1.432 0-2.073.787-2.43 1.34V9.927h-2.68c.035.755 0 8.41 0 8.41h2.68v-4.696c0-.241.017-.482.088-.654.193-.482.635-.98 1.376-.98.97 0 1.358.74 1.358 1.823v4.507h2.714z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/vigor-victorlee",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.04c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.45.11-3.03 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.74.11 3.03.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.79.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.16 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="ace-footer">
      <div className="ace-footer-grid">
        <div className="ace-footer-brand">
          <a href="/" className="ace-footer-logo" aria-label="VIGOR home">
            <Image src="/assets/VigorLogo.png" alt="Vigor Digital" width={146} height={48} />
          </a>
          <p className="ace-footer-tagline">
            Operator-built deeptech bridging shop-floor operations with global compliance — engineered in Penang.
          </p>
          <address className="ace-footer-addr">
            L3A-2, Level 3A, SPICE Arena 180,<br />
            Jalan Tun Dr. Awang, 11900 Relau,<br />
            Pulau Pinang, Malaysia
          </address>
          <div className="ace-footer-social">
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.heading} className="ace-footer-col">
            <h5>{col.heading}</h5>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="ace-footer-col ace-footer-contact">
          <h5>Contact</h5>
          <ul>
            {CONTACT.map((c) => (
              <li key={c.label}>
                <a href={c.href}>{c.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ace-footer-meta">
        <div className="ace-footer-accred">
          <span className="ace-footer-accred-label">Backed by</span>
          <span>SIRIM</span>
          <span>MIMOS</span>
          <span>MIDA</span>
          <span>NCER</span>
          <span>MIDF</span>
        </div>
        <div className="ace-footer-reg">
          VIGOR Digital Solution Sdn. Bhd. (1496696D / 202301002777) · © 2026
        </div>
      </div>

      <div className="ace-footer-mark" aria-hidden="true">
        VIGOR
      </div>
    </footer>
  );
}
