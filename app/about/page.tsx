import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — VIGOR Digital",
  description:
    "Operator-built deeptech, engineered in Penang. Vigor was founded by engineers who shipped on factory floors before they wrote a marketing line.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="contact-main">
        <section className="contact-hero">
          <div className="container-wide">
            <div className="contact-eyebrow">
              <span className="dot" />
              VIGOR DIGITAL · ENGINEERED IN PENANG
            </div>
            <h1 className="contact-title">
              Operator-built deeptech,
              <br />
              <span className="contact-title-accent">engineered in Penang.</span>
            </h1>
            <p className="contact-sub">
              We&apos;ve stood on the floors we now instrument. Our engineers ship code
              that shipped products before — they know what a wet PLC cabinet looks like
              at 3am, and what an MES rollback feels like during a tier-1 customer audit.
            </p>
          </div>
        </section>

        <section className="contact-board">
          <div className="container-wide">
            <div className="about-grid">
              <article className="about-card">
                <div className="about-card-eyebrow">01 · WHY WE EXIST</div>
                <h2 className="about-card-title">Engineered, not pitched.</h2>
                <p className="about-card-body">
                  Malaysian industry has been sold transformation by people who&apos;ve never
                  cabled a factory floor. We started Vigor because the gap between Big-4
                  consultancies and freelance dev shops was eating real budgets without
                  shipping real systems. We ship the system, hand it over, and stay on call.
                </p>
              </article>
              <article className="about-card">
                <div className="about-card-eyebrow">02 · WHAT WE DO</div>
                <h2 className="about-card-title">Deeptech for the real world.</h2>
                <p className="about-card-body">
                  Across six verticals — manufacturing, healthcare, government, smart city,
                  retail, immersive — we engineer the layer between operators and the data
                  spine: IIoT retrofits, agentic AI for shop-floor decisions, ESG/CBAM
                  compliance, and the mobile/cloud surface that ties it together.
                </p>
              </article>
              <article className="about-card">
                <div className="about-card-eyebrow">03 · HOW WE SHIP</div>
                <h2 className="about-card-title">Short engagements. Real handovers.</h2>
                <p className="about-card-body">
                  Every engagement runs on a 4-week paid pilot first — one line, one site,
                  one slice in production. If it lands, we scope the full build. If it
                  doesn&apos;t, you keep the pilot. No multi-year MSAs, no indefinite
                  consulting, no theatre.
                </p>
              </article>
              <article className="about-card">
                <div className="about-card-eyebrow">04 · WHO BACKS US</div>
                <h2 className="about-card-title">Malaysia&apos;s innovation infrastructure.</h2>
                <p className="about-card-body">
                  We&apos;re a Microsoft enterprise-AI partner, work with Dell and Red Hat on
                  industrial deployments, and align with SIRIM, MIMOS, MIDA, NCER, and MIDF on
                  grant-shaped R&amp;D. Penang Adventist Hospital was our first end-customer
                  superapp deployment in 2024.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-alt">
          <div className="container-wide">
            <div className="about-cta">
              <div>
                <div className="contact-alt-label">NEXT STEP</div>
                <h2 className="about-cta-title">Bring a real problem.</h2>
                <p className="contact-alt-addr">
                  An engineer — not a salesperson — will join the call. 30 minutes,
                  no deck, no pitch.
                </p>
              </div>
              <Link className="btn btn-primary about-cta-btn" href="/contact">
                Book a 30-min consultation
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
