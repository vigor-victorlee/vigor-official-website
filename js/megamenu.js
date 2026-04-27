/* ============================================================================
   VIGOR — Mega menu + deep linking
   - Hover/click to open per-nav-item mega panel
   - Deep links: ?section= or #section scrolls to and pulses target
   - Works on all pages, vanilla JS
============================================================================ */

(function () {

  // -------- mega menu data --------
  const MENUS = {
    services: {
      title: 'Services',
      lede: 'Engineer-led advisory & build. Six capabilities, one opinionated team.',
      cta: { label: 'See all services →', href: 'services.html' },
      cols: [
        {
          heading: 'Intelligence',
          items: [
            { label: 'AI & LLM Systems',          href: 'services.html#ai-llm',         desc: 'Domain-tuned agents for industrial workflows.' },
            { label: 'Engineering Advisory',      href: 'services.html#advisory',       desc: 'Two-week diagnostics. Opinionated recs.' }
          ]
        },
        {
          heading: 'Floor & data',
          items: [
            { label: 'Industrial IoT',            href: 'services.html#iiot',           desc: 'Non-invasive retrofit on legacy machines.' },
            { label: 'Integration & Data',        href: 'services.html#integration',    desc: 'ERP, MES, PLC, SCADA on one plane.' },
            { label: 'Cloud & Edge',              href: 'services.html#cloud',          desc: 'Industrial-grade infra. Hybrid by default.' }
          ]
        },
        {
          heading: 'Compliance',
          items: [
            { label: 'ESG & CBAM',                href: 'services.html#esg',            desc: 'Auditable carbon, wired to the floor.' }
          ]
        }
      ],
      feature: {
        eyebrow: 'Featured engagement',
        title: 'Two-week diagnostic',
        desc: 'On-site, on the floor. We instrument and write down the problem in a way you can verify.',
        href: 'services.html#engagement'
      }
    },
    products: {
      title: 'Products',
      lede: 'Operator-built products that ship. One engineering spine.',
      cta: { label: 'See all products →', href: 'products.html' },
      cols: [
        {
          heading: 'In market',
          items: [
            { label: 'Xentr.AI',                  href: 'products.html#xentrai',        desc: 'Non-invasive IIoT + agentic AI for the floor.', status: 'live' }
          ]
        },
        {
          heading: 'In design',
          items: [
            { label: 'VIGOR ESG',                 href: 'products.html#esg',            desc: 'CBAM-native compliance. APAC-built.', status: 'preview' }
          ]
        },
        {
          heading: 'Programs',
          items: [
            { label: 'Design partner program',    href: 'contact.html?topic=design-partner', desc: 'Co-build the next product in the portfolio.' },
            { label: 'Pilot program',             href: 'contact.html?topic=pilot',     desc: 'Live retrofit pilot on one line.' }
          ]
        }
      ],
      feature: {
        eyebrow: 'Featured product',
        title: 'Xentr.AI',
        desc: 'Live in market. Retrofit a legacy CNC in four weeks — agent-grade insight on day 30.',
        href: 'products.html#xentrai'
      }
    },
    about: {
      title: 'About',
      lede: 'Operator-built deeptech, from Penang. Backed by Malaysia\'s innovation infrastructure.',
      cta: { label: 'See the company →', href: 'about.html' },
      cols: [
        {
          heading: 'Company',
          items: [
            { label: 'Why VIGOR exists',          href: 'about.html#story',             desc: 'The room we\'re building in.' },
            { label: 'How we\'re structured',     href: 'about.html#structure',         desc: 'Advisory + portfolio. Two arms.' },
            { label: 'Engineering principles',    href: 'about.html#principles',        desc: 'Six rules that show up everywhere.' }
          ]
        },
        {
          heading: 'Posture',
          items: [
            { label: 'Three pillars',             href: 'about.html#pillars',           desc: 'Data, automation, compliance.' },
            { label: 'Accreditation',             href: 'about.html#accreditation',     desc: 'SIRIM · MIMOS · MIDA · NCER · MIDF.' }
          ]
        }
      ],
      feature: {
        eyebrow: 'Manifesto',
        title: 'Built by manufacturers, not theorists.',
        desc: 'We\'ve stood on the floors we now instrument. That\'s the standard we ship to.',
        href: 'index.html#manifesto'
      }
    }
  };

  // -------- mount --------
  function mount() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    // Build overlay/panel container
    const overlay = document.createElement('div');
    overlay.id = 'vigor-mega';
    overlay.innerHTML = `
      <style>
        #vigor-mega {
          position: fixed; left: 0; right: 0; top: 0; z-index: 49;
          pointer-events: none;
        }
        #vigor-mega .mega-backdrop {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.4);
          backdrop-filter: blur(2px);
          opacity: 0;
          transition: opacity 220ms cubic-bezier(0.32,0.72,0,1);
          pointer-events: none;
        }
        #vigor-mega.open .mega-backdrop { opacity: 1; pointer-events: auto; }
        #vigor-mega .mega-panel {
          position: absolute;
          left: 50%; top: 64px;
          transform: translate(-50%, -8px);
          width: min(1080px, calc(100vw - 48px));
          background: rgba(11,10,16,0.96);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 16px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(106,13,221,0.10);
          padding: 32px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 220ms cubic-bezier(0.32,0.72,0,1), transform 220ms cubic-bezier(0.32,0.72,0,1);
        }
        #vigor-mega.open .mega-panel {
          opacity: 1;
          transform: translate(-50%, 0);
          pointer-events: auto;
        }
        #vigor-mega .mega-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 32px;
        }
        #vigor-mega .mega-col h6 {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase;
          color: var(--vigor-violet-300, #B584F0);
          margin: 0 0 16px;
          font-weight: 500;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        #vigor-mega .mega-col a {
          display: block;
          padding: 12px 14px;
          margin: 0 -14px;
          border-radius: 8px;
          color: rgba(255,255,255,0.92);
          text-decoration: none;
          transition: background 160ms ease;
        }
        #vigor-mega .mega-col a:hover {
          background: rgba(106,13,221,0.14);
        }
        #vigor-mega .mega-col .nm {
          display: flex; align-items: center; gap: 8px;
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: 14px;
          letter-spacing: -0.01em;
          color: #fff;
          margin-bottom: 4px;
        }
        #vigor-mega .mega-col .desc {
          font-size: 12px;
          line-height: 1.45;
          color: rgba(255,255,255,0.55);
        }
        #vigor-mega .mega-col .status-dot {
          width: 6px; height: 6px; border-radius: 50%;
        }
        #vigor-mega .mega-col .status-dot.live {
          background: #4ADE80; box-shadow: 0 0 6px #4ADE80;
        }
        #vigor-mega .mega-col .status-dot.preview {
          background: var(--vigor-violet-300, #B584F0);
          box-shadow: 0 0 6px var(--vigor-violet, #6A0DDD);
        }
        #vigor-mega .mega-feature {
          background: linear-gradient(160deg, rgba(106,13,221,0.18), rgba(45,46,131,0.10));
          border: 1px solid rgba(106,13,221,0.32);
          border-radius: 12px;
          padding: 24px;
          display: flex; flex-direction: column;
          height: 100%;
        }
        #vigor-mega .mega-feature .ey {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--vigor-violet-300, #B584F0);
          margin-bottom: 16px;
        }
        #vigor-mega .mega-feature .t {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: 22px;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #fff;
          margin-bottom: 10px;
        }
        #vigor-mega .mega-feature .d {
          font-size: 13px;
          line-height: 1.5;
          color: rgba(255,255,255,0.75);
          margin-bottom: 18px;
          flex: 1;
        }
        #vigor-mega .mega-feature .lk {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 600;
          color: #fff;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(255,255,255,0.32);
          align-self: flex-start;
          text-decoration: none;
        }
        #vigor-mega .mega-feature .lk:hover { color: var(--vigor-violet-300, #B584F0); border-color: var(--vigor-violet-300, #B584F0); }
        #vigor-mega .mega-foot {
          display: flex; justify-content: space-between; align-items: center;
          margin-top: 28px; padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        #vigor-mega .mega-foot .lede {
          font-size: 13px; color: rgba(255,255,255,0.62);
          max-width: 60ch;
        }
        #vigor-mega .mega-foot .cta {
          font-size: 13px; font-weight: 600;
          color: #fff;
          padding: 8px 14px;
          border: 1px solid rgba(255,255,255,0.24);
          border-radius: 999px;
          text-decoration: none;
          transition: all 160ms;
          white-space: nowrap;
        }
        #vigor-mega .mega-foot .cta:hover {
          background: var(--vigor-violet, #6A0DDD);
          border-color: var(--vigor-violet, #6A0DDD);
        }
        @media (max-width: 960px) {
          #vigor-mega { display: none; }
        }
      </style>
      <div class="mega-backdrop"></div>
      <div class="mega-panel"></div>
    `;
    document.body.appendChild(overlay);

    const panel = overlay.querySelector('.mega-panel');
    const backdrop = overlay.querySelector('.mega-backdrop');

    function renderPanel(key) {
      const m = MENUS[key];
      if (!m) return;
      const colsHtml = m.cols.map(c => `
        <div class="mega-col">
          <h6>${c.heading}</h6>
          ${c.items.map(it => `
            <a href="${it.href}">
              <div class="nm">${it.label}${it.status ? `<span class="status-dot ${it.status}"></span>` : ''}</div>
              ${it.desc ? `<div class="desc">${it.desc}</div>` : ''}
            </a>
          `).join('')}
        </div>
      `).join('');
      const featureHtml = m.feature ? `
        <div class="mega-feature">
          <div class="ey">${m.feature.eyebrow}</div>
          <div class="t">${m.feature.title}</div>
          <div class="d">${m.feature.desc}</div>
          <a href="${m.feature.href}" class="lk">Open
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
      ` : '';
      panel.innerHTML = `
        <div class="mega-grid">
          ${colsHtml}
          ${featureHtml}
        </div>
        <div class="mega-foot">
          <div class="lede">${m.lede}</div>
          <a class="cta" href="${m.cta.href}">${m.cta.label}</a>
        </div>
      `;
    }

    function open(key) {
      renderPanel(key);
      overlay.classList.add('open');
      overlay.style.pointerEvents = 'auto';
    }
    function close() {
      overlay.classList.remove('open');
      overlay.style.pointerEvents = 'none';
    }

    // Wire each nav link
    const links = navLinks.querySelectorAll('a');
    let activeKey = null;
    let closeTimer = null;

    links.forEach(a => {
      const href = a.getAttribute('href') || '';
      let key = null;
      if (href.startsWith('services')) key = 'services';
      else if (href.startsWith('products')) key = 'products';
      else if (href.startsWith('about')) key = 'about';
      if (!key) return;
      a.dataset.megaKey = key;
      a.style.position = 'relative';

      a.addEventListener('mouseenter', () => {
        clearTimeout(closeTimer);
        activeKey = key;
        open(key);
      });
      a.addEventListener('focus', () => {
        clearTimeout(closeTimer);
        activeKey = key;
        open(key);
      });
    });

    // Close logic — leave nav or panel
    navLinks.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        if (!panel.matches(':hover')) close();
      }, 150);
    });
    panel.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    panel.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(close, 120);
    });
    backdrop.addEventListener('click', close);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  // -------- deep linking --------
  // Supports:
  //   ?section=foo  → scroll to #foo + pulse
  //   ?topic=design-partner → fill contact form interest pill + textarea hint
  //   #foo (already native), but we add a pulse highlight
  const SECTION_LABELS = {
    'ai-llm': 'AI & LLM Systems',
    'iiot': 'Industrial IoT & Retrofit',
    'esg': 'ESG & CBAM Compliance',
    'integration': 'Integration & Data Engineering',
    'cloud': 'Cloud & Edge Infrastructure',
    'advisory': 'Engineering Advisory',
    'engagement': 'Engagement model',
    'xentrai': 'Xentr.AI',
    'story': 'Why VIGOR exists',
    'structure': 'How we\'re structured',
    'principles': 'Engineering principles',
    'pillars': 'Three pillars',
    'accreditation': 'Accreditation',
    'manifesto': 'Engineering posture'
  };

  function pulse(el) {
    if (!el) return;
    el.style.transition = 'box-shadow 600ms cubic-bezier(0.32,0.72,0,1), background 600ms cubic-bezier(0.32,0.72,0,1)';
    const prevShadow = el.style.boxShadow;
    el.style.boxShadow = '0 0 0 2px rgba(106,13,221,0.7), 0 0 32px rgba(106,13,221,0.45)';
    setTimeout(() => {
      el.style.boxShadow = prevShadow;
    }, 1400);
  }

  function findTarget(name) {
    // Try id first
    let el = document.getElementById(name);
    if (el) return el;
    // For services page — match h2 by label text
    const label = SECTION_LABELS[name];
    if (label) {
      const blocks = document.querySelectorAll('.service-block, .product-detail, .principle, .pillar, .backed-panel, .engagement, .manifesto');
      for (const b of blocks) {
        const h = b.querySelector('h2, h3, h4');
        if (h && h.textContent.trim().toLowerCase().includes(label.toLowerCase())) return b;
      }
    }
    return null;
  }

  function deepLink() {
    const params = new URLSearchParams(window.location.search);
    const section = params.get('section') || (window.location.hash ? window.location.hash.slice(1) : null);
    if (section) {
      // Defer to allow layout
      requestAnimationFrame(() => {
        setTimeout(() => {
          const t = findTarget(section);
          if (t) {
            const y = t.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
            pulse(t);
          }
        }, 60);
      });
    }

    // Contact-page topic
    const topic = params.get('topic');
    if (topic) {
      const map = {
        'design-partner': { check: 'i8', note: 'Interested in the ESG product design partner program.' },
        'pilot':          { check: 'i7', note: 'Interested in a Xentr.AI pilot on one line.' },
        'cbam':           { check: 'i3', note: 'CBAM compliance scoping.' },
        'iiot':           { check: 'i2', note: 'IIoT retrofit scoping.' },
        'ai':             { check: 'i1', note: 'AI / LLM system scoping.' }
      };
      const t = map[topic];
      if (t) {
        const cb = document.getElementById(t.check);
        if (cb) cb.checked = true;
        const ta = document.getElementById('message');
        if (ta && !ta.value) ta.value = t.note + '\n\n';
        const form = document.getElementById('contact-form');
        if (form) {
          requestAnimationFrame(() => {
            const y = form.getBoundingClientRect().top + window.scrollY - 100;
            window.scrollTo({ top: y, behavior: 'smooth' });
            pulse(form);
          });
        }
      }
    }
  }

  function init() {
    mount();
    deepLink();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
