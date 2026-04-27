import Nav from "@/components/Nav";
import HeroSpotlight from "@/components/HeroSpotlight";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products — VIGOR",
  description: "Operator-built products that ship. Xentr.AI in market, VIGOR ESG in design, plus design partner and pilot programs.",
};

type Product = {
  num: string;
  name: string;
  status: "live" | "preview";
  statusLabel: string;
  tagline: string;
  desc: string;
  features?: string[];
  href?: string;
};

type Program = {
  name: string;
  desc: string;
  longDesc: string;
};

const IN_MARKET: Product[] = [
  {
    num: "01",
    name: "Xentr.AI",
    status: "live",
    statusLabel: "In market",
    tagline: "Non-invasive IIoT + agentic AI for the factory floor.",
    desc: "A factory operating system that retrofits to legacy machines without ripping the line — turning PLC and SCADA signals into agent-ready insight, OEE intelligence, and predictive maintenance.",
    features: [
      "Retrofit a legacy CNC in four weeks",
      "Agent-grade insight on day 30",
      "PLC, SCADA, sensor and ERP integration on one queryable plane",
      "Operator-grade UX — built for shift leads, not data scientists",
    ],
    href: "https://xentr.ai",
  },
];

const IN_DESIGN: Product[] = [
  {
    num: "02",
    name: "VIGOR ESG",
    status: "preview",
    statusLabel: "In design",
    tagline: "CBAM-native compliance, wired to the floor.",
    desc: "A Malaysian-built CBAM and ESG platform with the IIoT spine underneath. Auditable Scope 1, 2, 3 — connected to the same data backbone Xentr.AI runs on. APAC-built where the rest of the category isn't.",
    features: [
      "Scope 1, 2, 3 emissions wired to operational data",
      "CBAM-aligned reporting and embedded emissions modeling",
      "Audit trail tied to the source-of-truth at the floor level",
      "APAC-first — built for Malaysian and regional exporters",
    ],
  },
];

const PROGRAMS: Program[] = [
  {
    name: "Design partner program",
    desc: "Co-build the next product in the portfolio.",
    longDesc: "We take 3–5 design partners per cohort. You get hands-on engineering input on the product, exclusive pricing on launch, and a real seat at the table while we shape v1.",
  },
  {
    name: "Pilot program",
    desc: "Live retrofit pilot on one line.",
    longDesc: "A four-week paid pilot — we instrument one line, deliver a working dashboard, and write the deployment plan for the rest of the floor. No multi-year MSA required.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero" style={{ minHeight: "auto", paddingTop: 120, paddingBottom: 60 }}>
        <HeroSpotlight />
        <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-eyebrow">
            <span className="dot" />
            The portfolio
          </div>
          <h1 className="hero-headline" style={{ maxWidth: 980 }}>
            Operator-built products<br />
            that <span className="accent">ship</span>.
          </h1>
          <p className="hero-sub" style={{ maxWidth: 720 }}>
            Each product carries the VIGOR foundation — type, motion, iconography, engineering posture — and earns its own accent identity. One engineering spine across the portfolio.
          </p>
        </div>
      </section>

      {/* COLUMN OVERVIEW */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container-wide">
          <div className="prod-cols">
            <ProductColumn label="In market" badge="live">
              {IN_MARKET.map((p) => (
                <ProductLink key={p.name} product={p} />
              ))}
            </ProductColumn>
            <ProductColumn label="In design" badge="preview">
              {IN_DESIGN.map((p) => (
                <ProductLink key={p.name} product={p} />
              ))}
            </ProductColumn>
            <ProductColumn label="Programs">
              {PROGRAMS.map((p) => (
                <a key={p.name} className="prod-link" href={`#${slug(p.name)}`}>
                  <span className="prod-link-name">{p.name}</span>
                  <span className="prod-link-desc">{p.desc}</span>
                </a>
              ))}
            </ProductColumn>
            <aside className="prod-feature beam-card">
              <span className="prod-feature-eyebrow">Featured product</span>
              <h3>Xentr.AI</h3>
              <p>Live in market. Retrofit a legacy CNC in four weeks — agent-grade insight on day 30.</p>
              <a className="prod-feature-link" href="#xentrai">
                Open
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* PRODUCT DEEP-DIVES */}
      <section className="section">
        <div className="container-wide">
          <div className="prod-stack">
            {[...IN_MARKET, ...IN_DESIGN].map((p) => (
              <article key={p.name} id={slug(p.name)} className="prod-deep beam-card">
                <header className="prod-deep-head">
                  <div className="prod-deep-num">Product {p.num} · {p.statusLabel}</div>
                  <span className={`badge-status ${p.status}`}>
                    <span className="dot" />
                    {p.statusLabel}
                  </span>
                </header>
                <h2 className="prod-deep-title">{p.name}</h2>
                <p className="prod-deep-tagline">{p.tagline}</p>
                <p className="prod-deep-desc">{p.desc}</p>
                {p.features ? (
                  <ul className="prod-deep-features">
                    {p.features.map((f) => (
                      <li key={f}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="prod-deep-actions">
                  <a className="btn btn-primary" href={p.href ?? "/contact"}>
                    {p.status === "live" ? "Open" : "Join the design partner program"}
                  </a>
                  <a className="btn btn-ghost" href="/contact">Book a walkthrough</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS DEEP-DIVE */}
      <section className="section">
        <div className="container-wide">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow-violet">Programs</div>
              <h2>Two ways to build with us.</h2>
            </div>
            <div className="right">
              <p className="lede">Short engagements with real outcomes. We don&apos;t do indefinite consulting — we instrument, ship, and hand over.</p>
            </div>
          </div>
          <div className="prog-grid">
            {PROGRAMS.map((p) => (
              <article key={p.name} id={slug(p.name)} className="prog-card lift-card">
                <h3>{p.name}</h3>
                <p className="prog-desc">{p.desc}</p>
                <p className="prog-long">{p.longDesc}</p>
                <a className="arm-link" href="/contact">
                  Apply
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SHARED SPINE */}
      <section className="section">
        <div className="container-wide">
          <div className="manifesto-inner">
            <div className="manifesto-num">02<span className="dot">.</span></div>
            <div className="manifesto-body">
              <div className="eyebrow-violet">One engineering spine</div>
              <p className="quote">Operator-built products that ship. <span className="v">One engineering spine.</span></p>
              <p className="body">The VIGOR mark endorses. Each product earns its own identity. The foundation — Manrope, motion, iconography, engineering posture, the data spine — travels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container-wide">
          <div className="cta-panel">
            <div>
              <h2>Want a walkthrough?<br />Or co-build the next one.</h2>
              <p>Thirty-minute walkthrough on Xentr.AI, or a real conversation about joining the design partner program for the next product in the portfolio.</p>
            </div>
            <div className="actions">
              <a className="btn btn-light" href="/contact">Book a walkthrough</a>
              <a className="btn btn-ghost" href="/contact?topic=design-partner">Apply as design partner</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function ProductColumn({
  label,
  badge,
  children,
}: {
  label: string;
  badge?: "live" | "preview";
  children: React.ReactNode;
}) {
  return (
    <div className="prod-col">
      <div className="prod-col-head">
        <span className="prod-col-label">{label}</span>
        {badge ? <span className={`prod-col-dot ${badge}`} aria-hidden="true" /> : null}
      </div>
      <div className="prod-col-body">{children}</div>
    </div>
  );
}

function ProductLink({ product }: { product: Product }) {
  return (
    <a className="prod-link" href={`#${slug(product.name)}`}>
      <span className="prod-link-name">
        {product.name}
        <span className={`prod-status-dot ${product.status}`} aria-hidden="true" />
      </span>
      <span className="prod-link-desc">{product.tagline}</span>
    </a>
  );
}
