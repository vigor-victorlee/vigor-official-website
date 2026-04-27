import Nav from "@/components/Nav";
import HeroRotator from "@/components/HeroRotator";
import Reveal from "@/components/Reveal";
import Projects from "@/components/Projects";
import PopupCTA from "@/components/PopupCTA";

export default function Page() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="container-wide">
          <div className="hero-grid">
            <div className="hero-left reveal">
              <div className="hero-eyebrow">
                <span className="dot" />
                Six industries · One engineering practice
              </div>
              <h1 className="hero-headline">
                Deeptech<br />
                for the <span className="accent">real</span> world.
              </h1>
              <p className="hero-sub">
                We engineer software, hardware, and AI systems across manufacturing, healthcare, digital government, smart city, retail &amp; F&amp;B, and immersive. From hospital superapps to factory analytics, traffic intelligence to firmware — built by operators, shipped to production.
              </p>
              <HeroRotator />
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#contact">
                  Start a project
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a className="btn btn-ghost" href="#industries">Explore industries</a>
              </div>
              <div className="hero-meta">
                <div className="meta"><span className="k">Industries</span><span className="v">6 verticals</span></div>
                <div className="meta"><span className="k">Projects shipped</span><span className="v">19+ live</span></div>
                <div className="meta"><span className="k">Enterprise partner</span><span className="v">Microsoft</span></div>
              </div>
            </div>

            <div className="hero-schematic reveal" aria-hidden="true">
              <div className="schematic-head">
                <span>VIGOR · Data spine</span>
                <span className="live"><span className="pulse" />Live</span>
              </div>
              <div className="schematic-body">
                <svg className="schematic-svg" viewBox="0 0 400 320" fill="none">
                  <defs>
                    <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                      <stop offset="50%" stopColor="rgba(106,13,221,0.85)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
                    </linearGradient>
                    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.5" fill="rgba(255,255,255,0.12)" />
                    </pattern>
                  </defs>
                  <rect width="400" height="320" fill="url(#dots)" />
                  <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.55)" letterSpacing="0.04em">
                    <rect x="20" y="40" width="92" height="36" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)" />
                    <text x="34" y="62">PLC · CNC</text>
                    <rect x="20" y="100" width="92" height="36" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)" />
                    <text x="34" y="122">SCADA</text>
                    <rect x="20" y="160" width="92" height="36" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)" />
                    <text x="34" y="182">SENSORS</text>
                    <rect x="20" y="220" width="92" height="36" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.16)" />
                    <text x="34" y="242">ERP · MES</text>
                  </g>
                  <g stroke="url(#line-grad)" strokeWidth="1" fill="none">
                    <path d="M112 58 Q 160 58, 180 130 L 200 140" />
                    <path d="M112 118 Q 160 118, 180 140 L 200 145" />
                    <path d="M112 178 Q 160 178, 180 150 L 200 155" />
                    <path d="M112 238 Q 160 238, 180 165 L 200 160" />
                  </g>
                  <g>
                    <rect x="200" y="120" width="92" height="80" rx="6" fill="rgba(106,13,221,0.18)" stroke="rgba(106,13,221,0.6)" strokeWidth="1" />
                    <text x="217" y="155" fontFamily="Manrope, sans-serif" fontSize="11" fontWeight="700" fill="white" letterSpacing="0.04em">VIGOR</text>
                    <text x="208" y="175" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(255,255,255,0.62)" letterSpacing="0.06em">DATA SPINE</text>
                    <circle cx="246" cy="190" r="3" fill="#6A0DDD">
                      <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </g>
                  <g stroke="url(#line-grad)" strokeWidth="1" fill="none">
                    <path d="M292 140 Q 320 140, 340 70 L 360 70" />
                    <path d="M292 160 Q 320 160, 340 130 L 360 130" />
                    <path d="M292 180 Q 320 180, 340 190 L 360 190" />
                    <path d="M292 200 Q 320 200, 340 250 L 360 250" />
                  </g>
                  <g fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="0.04em">
                    <rect x="290" y="52" width="92" height="36" rx="4" fill="rgba(106,13,221,0.08)" stroke="rgba(106,13,221,0.4)" />
                    <text x="304" y="74" fill="rgba(229,212,251,0.92)">AI INSIGHT</text>
                    <rect x="290" y="112" width="92" height="36" rx="4" fill="rgba(106,13,221,0.08)" stroke="rgba(106,13,221,0.4)" />
                    <text x="304" y="134" fill="rgba(229,212,251,0.92)">OEE · UPTIME</text>
                    <rect x="290" y="172" width="92" height="36" rx="4" fill="rgba(106,13,221,0.08)" stroke="rgba(106,13,221,0.4)" />
                    <text x="304" y="194" fill="rgba(229,212,251,0.92)">ESG · CBAM</text>
                    <rect x="290" y="232" width="92" height="36" rx="4" fill="rgba(106,13,221,0.08)" stroke="rgba(106,13,221,0.4)" />
                    <text x="304" y="254" fill="rgba(229,212,251,0.92)">AGENT OPS</text>
                  </g>
                </svg>
              </div>
              <div className="schematic-foot" style={{ padding: "0 20px 18px" }}>
                <div className="sf-stat"><div className="k">Throughput</div><div className="v">1.8M<span className="accent">/d</span></div></div>
                <div className="sf-stat"><div className="k">Latency p99</div><div className="v">42<span className="accent">ms</span></div></div>
                <div className="sf-stat"><div className="k">Uptime</div><div className="v">99.98<span className="accent">%</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <div className="trust-strip" id="trusted">
        <div className="container-wide">
          <div className="trust-strip-inner">
            <div className="label">Trusted by</div>
            <div className="marks logos">
              <span className="logo logo-microsoft" title="Microsoft">
                <svg viewBox="0 0 23 23" aria-hidden="true">
                  <rect x="1" y="1" width="10" height="10" fill="#F25022" />
                  <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
                  <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
                  <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
                </svg>
                <span>Microsoft</span>
              </span>
              <span className="logo logo-dell" title="Dell Technologies">
                <svg viewBox="0 0 100 28" aria-hidden="true">
                  <circle cx="14" cy="14" r="13" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  <text x="7" y="19" fontFamily="Manrope, sans-serif" fontSize="13" fontWeight="800" fill="currentColor">D</text>
                  <text x="33" y="21" fontFamily="Manrope, sans-serif" fontSize="15" fontWeight="700" fill="currentColor" letterSpacing="-0.5">Technologies</text>
                </svg>
              </span>
              <span className="logo" title="SIRIM"><span className="wm">SIRIM</span></span>
              <span className="logo" title="MIMOS"><span className="wm">MIMOS</span></span>
              <span className="logo" title="NCER"><span className="wm">NCER</span></span>
              <span className="logo" title="ISO 27001"><span className="wm">ISO 27001</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* INDUSTRIES */}
      <Reveal stagger={0.06}>
        <section className="section industries-section" id="industries">
          <div className="container-wide">
            <div className="section-head reveal">
              <div className="left">
                <div className="eyebrow-violet">Industries we serve</div>
                <h2>Six verticals.<br />One engineering practice.</h2>
              </div>
              <div className="right">
                <p className="lede">From hospital floors to factory lines, traffic intersections to F&amp;B counters — we engineer software, hardware, and AI systems where uptime, accuracy, and audit pressure are real.</p>
              </div>
            </div>

            <div className="industries-grid">
              <a className="ind-card reveal" href="#projects">
                <div className="ind-num">Vertical 01</div>
                <svg className="ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20h20M4 20V10l5 4V10l5 4V6l5 4v10" /><path d="M9 20v-4M14 20v-4" /></svg>
                <h3>Manufacturing</h3>
                <p>Non-invasive IIoT, factory analytics, frontier ops apps, and prop-jig with embedded testing software.</p>
                <div className="ind-tags"><span>Xentr.AI</span><span>IIoT</span><span>Frontier ops</span></div>
              </a>
              <a className="ind-card reveal" href="#projects">
                <div className="ind-num">Vertical 02</div>
                <svg className="ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14V8a2 2 0 0 0-2-2h-3V3h-4v3H7a2 2 0 0 0-2 2v6" /><path d="M12 9v6M9 12h6" /><path d="M3 14h18l-2 7H5z" /></svg>
                <h3>Healthcare</h3>
                <p>Hospital superapps, post-surgery sentiment analysis, clinical workflow systems, and patient-facing mobile.</p>
                <div className="ind-tags"><span>Superapp</span><span>NLP</span><span>Mobile</span></div>
              </a>
              <a className="ind-card reveal" href="#projects">
                <div className="ind-num">Vertical 03</div>
                <svg className="ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" /></svg>
                <h3>Digital Government</h3>
                <p>Citizen platforms, vendor management systems, ESG reporting, and grant-aligned R&amp;D infrastructure.</p>
                <div className="ind-tags"><span>ESG</span><span>VMS</span><span>Citizen</span></div>
              </a>
              <a className="ind-card reveal" href="#projects">
                <div className="ind-num">Vertical 04</div>
                <svg className="ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v6M12 17v6M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M1 12h6M17 12h6M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
                <h3>Smart City</h3>
                <p>Traffic analytics, intersection intelligence, edge IoT meshes, and city-scale data spines.</p>
                <div className="ind-tags"><span>Traffic AI</span><span>Edge IoT</span><span>Analytics</span></div>
              </a>
              <a className="ind-card reveal" href="#projects">
                <div className="ind-num">Vertical 05</div>
                <svg className="ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18l-2 13H5z" /><path d="M8 7V5a4 4 0 0 1 8 0v2" /></svg>
                <h3>Retail &amp; F&amp;B</h3>
                <p>Customer-facing superapps, loyalty engines, CRM, and operations frontiers for high-volume chains.</p>
                <div className="ind-tags"><span>Superapp</span><span>CRM</span><span>Loyalty</span></div>
              </a>
              <a className="ind-card reveal" href="#projects">
                <div className="ind-num">Vertical 06</div>
                <svg className="ind-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                <h3>Immersive &amp; Entertainment</h3>
                <p>3D wayfinding, spatial experiences, AR/VR pilots, and interactive venue installations.</p>
                <div className="ind-tags"><span>3D</span><span>Wayfinding</span><span>Spatial</span></div>
              </a>
            </div>
          </div>
        </section>
      </Reveal>

      {/* PROJECTS */}
      <Reveal stagger={0.04}>
        <section className="section projects-section" id="projects">
          <div className="container-wide">
            <div className="section-head reveal">
              <div className="left">
                <div className="eyebrow-violet">Selected projects</div>
                <h2>What we&apos;ve shipped.</h2>
              </div>
              <div className="right">
                <p className="lede">A snapshot of the work — across superapps, AI agents, IoT hardware, firmware, RPA, and cloud transformation. Filter by domain or scroll the wall.</p>
              </div>
            </div>
            <Projects />
          </div>
        </section>
      </Reveal>

      {/* ARMS */}
      <Reveal>
        <section className="section arms">
          <div className="container-wide">
            <div className="section-head reveal">
              <div className="left">
                <div className="eyebrow-violet">What we do</div>
                <h2>Two arms.<br />One operator&apos;s mindset.</h2>
              </div>
              <div className="right">
                <p className="lede">VIGOR is the technology &amp; innovation parent — an advisory practice that builds, and a portfolio of products that ship. Both share one engineering DNA.</p>
              </div>
            </div>

            <div className="arms-grid">
              <article className="arm-card reveal">
                <div className="arm-num">Arm 01 / Advisory &amp; Build</div>
                <h3>Engineer-led<br />digital transformation.</h3>
                <p>Short engagements. Opinionated recommendations. We architect, build, and hand over — never indefinite consulting.</p>
                <ul className="arm-bullets">
                  <li><Check />Bespoke AI / LLM systems for industrial workflows</li>
                  <li><Check />Non-invasive IIoT retrofit on legacy machinery</li>
                  <li><Check />ESG / CBAM compliance architecture</li>
                  <li><Check />Grant-aligned R&amp;D scoping (SIRIM / MIDA)</li>
                </ul>
                <a className="arm-link" href="#contact">Explore services →</a>
              </article>

              <article className="arm-card reveal">
                <div className="arm-num">Arm 02 / Product portfolio</div>
                <h3>Operator-built<br />products that ship.</h3>
                <p>Each product carries the VIGOR foundation — type, motion, iconography, engineering posture — and earns its own accent identity.</p>
                <ul className="arm-bullets">
                  <li><Check />Xentr.AI — non-invasive factory operating system</li>
                  <li><Check />ESG / CBAM compliance product (in design)</li>
                  <li><Check />Shared data spine across the portfolio</li>
                  <li><Check />Hybrid endorsed brand — VIGOR endorses, doesn&apos;t lock up</li>
                </ul>
                <a className="arm-link" href="#products">Explore products →</a>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CAPABILITIES */}
      <Reveal stagger={0.05}>
        <section className="section capabilities">
          <div className="container-wide">
            <div className="section-head reveal">
              <div className="left">
                <div className="eyebrow-violet">Capabilities</div>
                <h2>Across the full stack of the floor.</h2>
              </div>
              <div className="right">
                <p>From the PLC up to the agent. From the sensor to the regulator. We work where engineering credibility actually matters.</p>
              </div>
            </div>

            <div className="cap-grid">
              <div className="cap-cell reveal">
                <span className="num">/01</span>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="3" /></svg>
                <h4>AI &amp; LLM Systems</h4>
                <p>Domain-tuned agents for inspection, scheduling, shop-floor decisions. Not chatbots — operators.</p>
              </div>
              <div className="cap-cell reveal">
                <span className="num">/02</span>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4" /></svg>
                <h4>Industrial IoT</h4>
                <p>Non-invasive retrofit on legacy machines. CI-grade observability without ripping the floor.</p>
              </div>
              <div className="cap-cell reveal">
                <span className="num">/03</span>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h3l3-7 6 14 3-7h3" /></svg>
                <h4>ESG &amp; CBAM</h4>
                <p>Auditable carbon and ESG reporting wired to the same data spine. Built for APAC exporters.</p>
              </div>
              <div className="cap-cell reveal">
                <span className="num">/04</span>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /><path d="M11 7h4a2 2 0 0 1 2 2v4" /></svg>
                <h4>Integrations</h4>
                <p>ERP, MES, PLC, SCADA tied into one queryable plane. We&apos;ve stitched them all.</p>
              </div>
              <div className="cap-cell reveal">
                <span className="num">/05</span>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 1-9 9M21 12a9 9 0 0 0-9-9M3 12a9 9 0 0 1 9-9M3 12a9 9 0 0 0 9 9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
                <h4>Cloud Infrastructure</h4>
                <p>Private and hybrid clouds engineered for industrial workloads — not generic SaaS.</p>
              </div>
              <div className="cap-cell reveal">
                <span className="num">/06</span>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13l2 2 4-4" /></svg>
                <h4>Test Automation</h4>
                <p>Quality systems and inspection pipelines that survive shift changes and floor reality.</p>
              </div>
              <div className="cap-cell reveal">
                <span className="num">/07</span>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="3" /><path d="M5 21a7 7 0 0 1 14 0" /></svg>
                <h4>Engineering Advisory</h4>
                <p>Engineer-led, opinionated, short engagements. Recommendations you can ship Monday.</p>
              </div>
              <div className="cap-cell reveal">
                <span className="num">/08</span>
                <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7" /><path d="M3 7l9 6 9-6M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" /></svg>
                <h4>Maintenance &amp; Support</h4>
                <p>Long-haul SLAs from the team that built it. No handoff to a managed-service vendor.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* PRODUCTS */}
      <Reveal>
        <section className="section products" id="products">
          <div className="container-wide">
            <div className="section-head reveal">
              <div className="left">
                <div className="eyebrow-violet">The portfolio</div>
                <h2>Products that share<br />one engineering spine.</h2>
              </div>
              <div className="right">
                <p>The VIGOR mark endorses. Each product earns its own identity. The foundation — Manrope, motion, iconography, engineering posture — travels.</p>
              </div>
            </div>

            <div className="products-stack">
              <article className="product-card reveal">
                <div>
                  <div className="product-mark">Product 01 · Factory operating system</div>
                  <h3>Xentr.AI</h3>
                  <div className="tagline">Non-invasive IIoT + agentic AI for the factory floor.</div>
                  <p className="desc">A factory operating system that retrofits to legacy machines without ripping the line — turning PLC and SCADA signals into agent-ready insight, OEE intelligence, and predictive maintenance.</p>
                  <div className="actions">
                    <a className="btn btn-light" href="#contact">Learn more</a>
                    <a className="btn btn-ghost" href="#contact">Book a walkthrough</a>
                  </div>
                </div>
                <div className="visual xentr">
                  <div className="badge-status live"><span className="dot" />In market</div>
                  <svg viewBox="0 0 320 240" style={{ width: "100%", height: "100%", display: "block" }}>
                    <defs>
                      <linearGradient id="xen-line" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="rgba(0,180,255,0.15)" />
                        <stop offset="50%" stopColor="rgba(0,180,255,0.85)" />
                        <stop offset="100%" stopColor="rgba(0,180,255,0.15)" />
                      </linearGradient>
                    </defs>
                    <g stroke="rgba(255,255,255,0.08)" strokeWidth="1">
                      <line x1="40" y1="60" x2="280" y2="60" />
                      <line x1="40" y1="100" x2="280" y2="100" />
                      <line x1="40" y1="140" x2="280" y2="140" />
                      <line x1="40" y1="180" x2="280" y2="180" />
                    </g>
                    <path d="M40 150 L 70 130 L 100 140 L 130 90 L 160 110 L 190 70 L 220 95 L 250 80 L 280 60" fill="none" stroke="url(#xen-line)" strokeWidth="2" />
                    <path d="M40 170 L 70 160 L 100 165 L 130 130 L 160 145 L 190 115 L 220 130 L 250 120 L 280 105" fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="1" strokeDasharray="3 3" />
                    <g fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(255,255,255,0.42)">
                      <text x="40" y="210">06:00</text>
                      <text x="120" y="210">10:00</text>
                      <text x="200" y="210">14:00</text>
                      <text x="260" y="210">18:00</text>
                    </g>
                    <text x="40" y="40" fontFamily="Manrope, sans-serif" fontSize="11" fontWeight="700" fill="white" letterSpacing="0.04em">OEE · LINE 03</text>
                    <text x="220" y="40" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="700" fill="#7ED4FF">94.2%</text>
                  </svg>
                </div>
              </article>

              <article className="product-card reveal">
                <div>
                  <div className="product-mark">Product 02 · ESG &amp; CBAM compliance</div>
                  <h3>VIGOR ESG</h3>
                  <div className="tagline">CBAM-native compliance, wired to the floor.</div>
                  <p className="desc">A Malaysian-built CBAM and ESG platform with the IIoT spine underneath. Auditable Scope 1, 2, 3 — connected to the same data backbone Xentr.AI runs on. APAC-built where the rest of the category isn&apos;t.</p>
                  <div className="actions">
                    <a className="btn btn-light" href="#contact">Learn more</a>
                    <a className="btn btn-ghost" href="#contact">Join the design partner program</a>
                  </div>
                </div>
                <div className="visual esg">
                  <div className="badge-status preview"><span className="dot" />In design</div>
                  <svg viewBox="0 0 320 240" style={{ width: "100%", height: "100%", display: "block" }}>
                    <defs>
                      <linearGradient id="esg-bar" x1="0" y1="1" x2="0" y2="0">
                        <stop offset="0%" stopColor="rgba(106,13,221,0.4)" />
                        <stop offset="100%" stopColor="rgba(229,212,251,0.95)" />
                      </linearGradient>
                    </defs>
                    <text x="40" y="40" fontFamily="Manrope, sans-serif" fontSize="11" fontWeight="700" fill="white" letterSpacing="0.04em">CBAM EMBEDDED EMISSIONS</text>
                    <text x="220" y="40" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="rgba(255,255,255,0.55)">tCO₂e/Q</text>
                    <g>
                      <rect x="50" y="120" width="22" height="80" fill="url(#esg-bar)" rx="2" />
                      <rect x="86" y="100" width="22" height="100" fill="url(#esg-bar)" rx="2" />
                      <rect x="122" y="80" width="22" height="120" fill="url(#esg-bar)" rx="2" />
                      <rect x="158" y="90" width="22" height="110" fill="url(#esg-bar)" rx="2" />
                      <rect x="194" y="70" width="22" height="130" fill="url(#esg-bar)" rx="2" />
                      <rect x="230" y="60" width="22" height="140" fill="url(#esg-bar)" rx="2" opacity="0.6" stroke="rgba(229,212,251,0.6)" strokeDasharray="2 2" />
                    </g>
                    <g fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(255,255,255,0.42)">
                      <text x="55" y="216">Q1</text>
                      <text x="91" y="216">Q2</text>
                      <text x="127" y="216">Q3</text>
                      <text x="163" y="216">Q4</text>
                      <text x="199" y="216">Q1</text>
                      <text x="235" y="216">FCST</text>
                    </g>
                  </svg>
                </div>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      {/* MANIFESTO */}
      <Reveal>
        <section className="section manifesto" id="manifesto">
          <div className="container-wide">
            <div className="manifesto-inner reveal">
              <div className="manifesto-num">01<span className="dot">.</span></div>
              <div className="manifesto-body">
                <div className="eyebrow-violet">Engineering posture</div>
                <p className="quote">Built by manufacturers, <span className="v">not theorists.</span></p>
                <p className="body">We&apos;ve stood on the floors we now instrument. Our engineers ship code that shipped products before — they know what a wet PLC cabinet looks like at 3am, and what an MES rollback feels like during a tier-1 customer audit. We don&apos;t pitch transformation. We engineer it, hand it over, and stay on call.</p>
                <p className="manifesto-attr">— VIGOR engineering principles · 2026</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* CTA */}
      <section className="cta-section" id="contact">
        <div className="container-wide">
          <div className="cta-panel reveal">
            <div>
              <h2>Predictive insights.<br />Smarter decisions.</h2>
              <p>Thirty-minute walkthrough on your data, your machines. No deck, no pitch — an engineer answering questions.</p>
            </div>
            <div className="actions">
              <a className="btn btn-light" href="mailto:victorlee@vigordigital.org">Book a consultation</a>
              <a className="btn btn-ghost" href="#products">See products</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container-wide">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="word">VIGOR</div>
              <p className="tagline">Operator-built deeptech bridging shop-floor operations with global compliance — engineered in Penang.</p>
              <p className="address">L3A-2, Level 3A, SPICE Arena 180,<br />Jalan Tun Dr. Awang, 11900 Relau,<br />Pulau Pinang, Malaysia</p>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#industries">About</a></li>
                <li><a href="#products">Services</a></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Products</h5>
              <ul>
                <li><a href="#products">Xentr.AI</a></li>
                <li><a href="#products">ESG / CBAM</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:victorlee@vigordigital.org">victorlee@vigordigital.org</a></li>
                <li><a href="mailto:info@vigordigital.org">info@vigordigital.org</a></li>
                <li><a href="tel:+60111131981">+6011-111 31981</a></li>
                <li><a href="https://thevigor.co">thevigor.co</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-base">
            <div className="reg">VIGOR Digital Solution Sdn. Bhd. (1496696D / 202301002777)<br />© 2026 VIGOR Digital Solution. All rights reserved.</div>
            <div className="accred">
              <span>SIRIM</span><span>MIMOS</span><span>MIDA</span><span>NCER</span><span>MIDF</span>
            </div>
          </div>
        </div>
      </footer>
      <PopupCTA />
    </>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}
