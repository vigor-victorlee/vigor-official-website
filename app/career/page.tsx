import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Careers — VIGOR Digital",
  description:
    "We hire when we have a real role to fill. If you've shipped to factory floors, hospital wards, or city corridors — write to us.",
};

const SIGNALS = [
  {
    label: "01 · You shipped before you wrote a CV",
    body:
      "We hire people who can name three production systems they wrote, with the year, the customer, and what broke at 3am. If your portfolio is GitHub commits to a learning project, we&rsquo;re probably not the fit yet.",
  },
  {
    label: "02 · You&rsquo;ve been on the floor",
    body:
      "Plant floors, hospital wards, traffic operations rooms, retail back-of-house. Not the boardroom. Our engineers walk the floor with the operator before they touch a keyboard.",
  },
  {
    label: "03 · You can hand systems over",
    body:
      "We don&rsquo;t do indefinite consulting. Every engagement ends with a handover, a runbook, and an on-call SLA. The hardest part of our job is making the customer&rsquo;s team able to run without us.",
  },
  {
    label: "04 · You speak two languages — code and operator",
    body:
      "A maintenance technician on shift work doesn&rsquo;t care about your stack. They care whether the dashboard is up at 06:00. You translate between those two worlds.",
  },
];

export default function CareerPage() {
  return (
    <>
      <Nav />
      <main className="contact-main">
        <section className="contact-hero">
          <div className="container-wide">
            <div className="contact-eyebrow">
              <span className="dot" />
              CAREERS · WE HIRE WHEN WE HAVE A REAL ROLE
            </div>
            <h1 className="contact-title">
              We hire engineers who&apos;ve
              <br />
              <span className="contact-title-accent">stood on the floor.</span>
            </h1>
            <p className="contact-sub">
              We don&apos;t run an open-roles page just because every company does. We open
              roles when we have a real engagement to staff — and we close them when the
              right person walks through the door. If that&apos;s you, write to us before
              we post.
            </p>
          </div>
        </section>

        <section className="contact-board">
          <div className="container-wide">
            <div className="about-grid">
              {SIGNALS.map((s) => (
                <article key={s.label} className="about-card">
                  <div className="about-card-eyebrow">{s.label}</div>
                  <p
                    className="about-card-body"
                    dangerouslySetInnerHTML={{ __html: s.body }}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-alt">
          <div className="container-wide">
            <div className="about-cta">
              <div>
                <div className="contact-alt-label">WRITE TO US</div>
                <h2 className="about-cta-title">No CV form. No application portal.</h2>
                <p className="contact-alt-addr">
                  Send an email with three production systems you&apos;ve shipped, the
                  customer, the year, and what broke at 3am. Reply within 5 working days.
                </p>
              </div>
              <a
                className="btn btn-primary about-cta-btn"
                href="mailto:victorlee@vigordigital.org?subject=Vigor%20Career%20%E2%80%94%20three%20systems%20I%27ve%20shipped"
              >
                Email Victor
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <p className="contact-alt-addr" style={{ marginTop: 32 }}>
              Or follow{" "}
              <Link
                href="https://www.linkedin.com/company/vigordigital"
                target="_blank"
                style={{ color: "#b78bff" }}
              >
                Vigor on LinkedIn
              </Link>{" "}
              — that&apos;s where active roles get posted when they exist.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
