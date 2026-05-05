import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { INDUSTRIES, getIndustry } from "@/lib/industries";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return {};
  return {
    title: `${ind.label} — VIGOR Digital`,
    description: ind.lede.slice(0, 160),
    openGraph: {
      title: `Vigor for ${ind.label}`,
      description: ind.lede.slice(0, 160),
      images: [{ url: ind.heroImage, alt: `Vigor for ${ind.label}` }],
    },
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();

  return (
    <>
      <Nav />
      <main className="ind-main">
        {/* HERO */}
        <section className="ind-hero">
          <div className="ind-hero-bg">
            <Image
              src={ind.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="ind-hero-img"
            />
            <div className="ind-hero-veil" />
          </div>
          <div className="container-wide ind-hero-inner">
            <div className="ind-eyebrow">
              <span className="dot" />
              {ind.eyebrow}
            </div>
            <h1 className="ind-title">
              {ind.title}
              <br />
              <span className="ind-title-accent">{ind.titleAccent}</span>
            </h1>
            <p className="ind-lede">{ind.lede}</p>
            <div className="ind-hero-meta">
              <div className="ind-metric">
                <span className="ind-metric-v">{ind.metricValue}</span>
                <span className="ind-metric-u">{ind.metricUnit}</span>
              </div>
              <div className="ind-metric-cap">{ind.metricCaption}</div>
            </div>
            <div className="ind-hero-ctas">
              <Link href="/contact" className="btn btn-primary ind-cta-btn">
                Book a 30-min {ind.label} fit call
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/#projects" className="btn btn-ghost ind-cta-btn ind-cta-ghost">
                See all projects
              </Link>
            </div>
          </div>
        </section>

        {/* QUALIFIERS */}
        <section className="ind-section">
          <div className="container-wide">
            <div className="ind-qual-grid">
              <article className="ind-qual ind-qual-fit">
                <div className="ind-qual-eyebrow">WE WORK WITH YOU IF</div>
                <ul className="ind-qual-list">
                  {ind.fitWith.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </article>
              <article className="ind-qual ind-qual-no">
                <div className="ind-qual-eyebrow">WE&apos;RE NOT A FIT IF</div>
                <ul className="ind-qual-list">
                  {ind.notFitIf.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="ind-section ind-section-tight">
          <div className="container-wide">
            <div className="ind-section-head">
              <div className="ind-section-eyebrow">RECENT WORK</div>
              <h2 className="ind-section-title">
                What we&apos;ve shipped in {ind.label.toLowerCase()}.
              </h2>
            </div>
            <div className="ind-projects">
              {ind.projects.map((p) => (
                <article key={p.title} className="ind-project">
                  <div className="ind-project-tag">{p.tag}</div>
                  <h3 className="ind-project-title">{p.title}</h3>
                  <div className="ind-project-meta">{p.meta}</div>
                </article>
              ))}
            </div>
            <p className="ind-projects-note">
              Detailed case studies (P/A/O/M/Q with named engineer + outcome metric) are
              published as we secure customer permission.{" "}
              <Link href="/contact" className="ind-link">
                Ask for a reference call →
              </Link>
            </p>
          </div>
        </section>

        {/* LEAD ENGINEER */}
        <section className="ind-section ind-section-tight">
          <div className="container-wide">
            <article className="ind-engineer">
              <div className="ind-engineer-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
                  <path d="M5 21a7 7 0 0114 0" />
                </svg>
              </div>
              <div className="ind-engineer-body">
                <div className="ind-engineer-role">{ind.leadEngineer.role}</div>
                <p className="ind-engineer-blurb">{ind.leadEngineer.blurb}</p>
                <p className="ind-engineer-fineprint">
                  Names and faces published as the team page rolls out. In the meantime, the
                  engineer who&apos;d lead your engagement is the one who&apos;ll be on the
                  consultation call — not a sales rep.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="ind-section">
          <div className="container-wide">
            <div className="ind-section-head">
              <div className="ind-section-eyebrow">FAQ</div>
              <h2 className="ind-section-title">
                {ind.label} questions, answered.
              </h2>
            </div>
            <div className="ind-faqs">
              {ind.faqs.map((f, i) => (
                <details key={i} className="ind-faq">
                  <summary className="ind-faq-q">
                    <span>{f.q}</span>
                    <svg className="ind-faq-chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="ind-faq-a">{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ind-section ind-cta-section">
          <div className="container-wide">
            <div className="ind-cta-panel">
              <div>
                <div className="ind-section-eyebrow">NEXT STEP</div>
                <h2 className="ind-cta-title">{ind.ctaLine}</h2>
                <p className="ind-cta-sub">
                  30 minutes. No deck, no pitch — an engineer answering questions.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary ind-cta-btn">
                Book the {ind.label} fit call
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* OTHER INDUSTRIES */}
        <section className="ind-section ind-section-tight">
          <div className="container-wide">
            <div className="ind-section-head">
              <div className="ind-section-eyebrow">OTHER VERTICALS</div>
              <h2 className="ind-section-title">Six industries · one engineering practice.</h2>
            </div>
            <div className="ind-others">
              {INDUSTRIES.filter((i) => i.slug !== ind.slug).map((other) => (
                <Link
                  key={other.slug}
                  href={`/industries/${other.slug}`}
                  className="ind-other"
                >
                  <span className="ind-other-label">{other.label}</span>
                  <svg
                    className="arrow"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
