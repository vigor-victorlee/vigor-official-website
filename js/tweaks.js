/* ============================================================================
   VIGOR — Tweaks panel (vanilla JS, plays nice with host edit-mode protocol)
   Honors:
     - {type:'__activate_edit_mode'}   → open
     - {type:'__deactivate_edit_mode'} → close
     - announces __edit_mode_available once listener is wired
     - posts __edit_mode_set_keys when values change
     - posts __edit_mode_dismissed if user closes via the panel's X
   Apply tweaks to :root CSS variables on every page that imports this file.
============================================================================ */

(function () {
  // -------- read defaults baked into the page --------
  const defaultsScript = document.getElementById('vigor-tweak-defaults');
  let defaults = {
    accent: 'violet',          // violet | violet-deep | violet-light | navy
    heroMood: 'cosmic',        // cosmic | minimal | gradient | grid
    cornerRadius: 'rounded',   // sharp | rounded | pill
    motion: 'on',              // on | off
    showAccreditation: true
  };
  if (defaultsScript) {
    try {
      const txt = defaultsScript.textContent.trim();
      // Parse the EDITMODE block JSON
      const m = txt.match(/\/\*EDITMODE-BEGIN\*\/([\s\S]*?)\/\*EDITMODE-END\*\//);
      if (m) defaults = { ...defaults, ...JSON.parse(m[1]) };
    } catch (e) { /* keep defaults */ }
  }

  let state = { ...defaults };

  // -------- apply state to live page --------
  function apply() {
    const root = document.documentElement;
    // Accent
    const accents = {
      'violet':       { v: '#6A0DDD', v3: '#B584F0', v9: '#2A055C' },
      'violet-deep':  { v: '#482683', v3: '#8C6FBF', v9: '#1A0E3A' },
      'violet-light': { v: '#8E4FE8', v3: '#C9A7F4', v9: '#3D1A6E' },
      'navy':         { v: '#2D2E83', v3: '#7273C4', v9: '#0F1042' }
    };
    const a = accents[state.accent] || accents.violet;
    root.style.setProperty('--vigor-violet', a.v);
    root.style.setProperty('--vigor-violet-500', a.v);
    root.style.setProperty('--vigor-violet-300', a.v3);
    root.style.setProperty('--vigor-violet-900', a.v9);

    // Hero mood — set body data-attr so CSS can swap backgrounds
    document.body.setAttribute('data-hero-mood', state.heroMood);

    // Corner radius
    const radii = {
      sharp:   { sm: '2px',  md: '4px',  lg: '6px',  xl: '10px', pill: '999px' },
      rounded: { sm: '8px',  md: '12px', lg: '16px', xl: '24px', pill: '999px' },
      pill:    { sm: '14px', md: '20px', lg: '28px', xl: '36px', pill: '999px' }
    };
    const r = radii[state.cornerRadius] || radii.rounded;
    root.style.setProperty('--radius-sm', r.sm);
    root.style.setProperty('--radius-md', r.md);
    root.style.setProperty('--radius-lg', r.lg);
    root.style.setProperty('--radius-xl', r.xl);
    root.style.setProperty('--radius-pill', r.pill);

    // Motion
    document.body.setAttribute('data-motion', state.motion);

    // Accreditation row
    document.body.setAttribute('data-accred', state.showAccreditation ? 'on' : 'off');
  }

  // -------- panel UI --------
  function buildPanel() {
    const wrap = document.createElement('div');
    wrap.id = 'vigor-tweaks-panel';
    wrap.innerHTML = `
      <style>
        #vigor-tweaks-panel {
          position: fixed; right: 24px; bottom: 24px; z-index: 10000;
          width: 320px;
          background: rgba(11,10,16,0.94);
          backdrop-filter: blur(14px) saturate(140%);
          -webkit-backdrop-filter: blur(14px) saturate(140%);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          color: #fff;
          font-family: 'Manrope', system-ui, sans-serif;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(106,13,221,0.18);
          display: none;
          overflow: hidden;
          font-size: 13px;
        }
        #vigor-tweaks-panel.open { display: block; animation: vt-in 240ms cubic-bezier(0.32,0.72,0,1); }
        @keyframes vt-in {
          from { opacity: 0; transform: translateY(8px) scale(0.98); }
          to { opacity: 1; transform: none; }
        }
        #vigor-tweaks-panel .vt-head {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          cursor: move; user-select: none;
        }
        #vigor-tweaks-panel .vt-title {
          font-weight: 700; letter-spacing: -0.01em; font-size: 14px;
          display: flex; align-items: center; gap: 10px;
        }
        #vigor-tweaks-panel .vt-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: var(--vigor-violet, #6A0DDD);
          box-shadow: 0 0 8px var(--vigor-violet, #6A0DDD);
        }
        #vigor-tweaks-panel .vt-close {
          background: none; border: none; color: rgba(255,255,255,0.62);
          cursor: pointer; padding: 4px; border-radius: 4px; line-height: 0;
        }
        #vigor-tweaks-panel .vt-close:hover { color: #fff; background: rgba(255,255,255,0.06); }
        #vigor-tweaks-panel .vt-body { padding: 16px 18px 18px; max-height: 70vh; overflow-y: auto; }
        #vigor-tweaks-panel .vt-section { margin-bottom: 18px; }
        #vigor-tweaks-panel .vt-section:last-child { margin-bottom: 0; }
        #vigor-tweaks-panel .vt-label {
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(255,255,255,0.55); margin-bottom: 8px; font-weight: 500;
        }
        #vigor-tweaks-panel .vt-segs {
          display: grid; gap: 4px;
          background: rgba(255,255,255,0.04);
          border-radius: 8px; padding: 4px;
        }
        #vigor-tweaks-panel .vt-segs.cols-2 { grid-template-columns: 1fr 1fr; }
        #vigor-tweaks-panel .vt-segs.cols-3 { grid-template-columns: 1fr 1fr 1fr; }
        #vigor-tweaks-panel .vt-segs.cols-4 { grid-template-columns: repeat(4, 1fr); }
        #vigor-tweaks-panel .vt-seg {
          background: transparent; border: none; cursor: pointer;
          color: rgba(255,255,255,0.62); padding: 8px 4px;
          font-size: 12px; font-weight: 500; font-family: inherit;
          border-radius: 5px;
          transition: all 200ms cubic-bezier(0.32,0.72,0,1);
        }
        #vigor-tweaks-panel .vt-seg:hover { color: #fff; }
        #vigor-tweaks-panel .vt-seg.active {
          background: var(--vigor-violet, #6A0DDD);
          color: #fff;
          box-shadow: 0 2px 8px rgba(106,13,221,0.4);
        }
        #vigor-tweaks-panel .vt-swatches {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;
        }
        #vigor-tweaks-panel .vt-swatch {
          aspect-ratio: 1; border: 2px solid rgba(255,255,255,0.08);
          border-radius: 8px; cursor: pointer; position: relative;
          transition: all 200ms;
        }
        #vigor-tweaks-panel .vt-swatch:hover { transform: translateY(-2px); }
        #vigor-tweaks-panel .vt-swatch.active {
          border-color: #fff;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3);
        }
        #vigor-tweaks-panel .vt-toggle {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 12px; background: rgba(255,255,255,0.04);
          border-radius: 8px; cursor: pointer;
        }
        #vigor-tweaks-panel .vt-toggle-name { font-weight: 500; color: #fff; }
        #vigor-tweaks-panel .vt-switch {
          width: 36px; height: 20px; background: rgba(255,255,255,0.12);
          border-radius: 999px; position: relative;
          transition: background 200ms;
        }
        #vigor-tweaks-panel .vt-switch::after {
          content: ''; position: absolute; top: 2px; left: 2px;
          width: 16px; height: 16px; background: #fff;
          border-radius: 50%;
          transition: transform 200ms cubic-bezier(0.32,0.72,0,1);
        }
        #vigor-tweaks-panel .vt-toggle.on .vt-switch { background: var(--vigor-violet, #6A0DDD); }
        #vigor-tweaks-panel .vt-toggle.on .vt-switch::after { transform: translateX(16px); }
        #vigor-tweaks-panel .vt-foot {
          padding: 10px 18px; border-top: 1px solid rgba(255,255,255,0.06);
          font-family: 'JetBrains Mono', ui-monospace, monospace;
          font-size: 9.5px; letter-spacing: 0.06em; color: rgba(255,255,255,0.32);
          display: flex; justify-content: space-between;
        }
      </style>
      <div class="vt-head" id="vt-head">
        <div class="vt-title"><span class="vt-dot"></span> Tweaks</div>
        <button class="vt-close" id="vt-close" aria-label="Close">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="vt-body">
        <div class="vt-section">
          <div class="vt-label">Brand accent</div>
          <div class="vt-swatches" id="vt-accent">
            <div class="vt-swatch" data-v="violet" style="background:linear-gradient(135deg,#6A0DDD,#2A055C)" title="Violet (signature)"></div>
            <div class="vt-swatch" data-v="violet-deep" style="background:linear-gradient(135deg,#482683,#1A0E3A)" title="Deep violet"></div>
            <div class="vt-swatch" data-v="violet-light" style="background:linear-gradient(135deg,#8E4FE8,#3D1A6E)" title="Light violet"></div>
            <div class="vt-swatch" data-v="navy" style="background:linear-gradient(135deg,#2D2E83,#0F1042)" title="Navy (off-brand test)"></div>
          </div>
        </div>

        <div class="vt-section">
          <div class="vt-label">Hero atmosphere</div>
          <div class="vt-segs cols-2" id="vt-mood">
            <button class="vt-seg" data-v="cosmic">Cosmic</button>
            <button class="vt-seg" data-v="gradient">Gradient</button>
            <button class="vt-seg" data-v="grid">Grid</button>
            <button class="vt-seg" data-v="minimal">Minimal</button>
          </div>
        </div>

        <div class="vt-section">
          <div class="vt-label">Corner language</div>
          <div class="vt-segs cols-3" id="vt-radius">
            <button class="vt-seg" data-v="sharp">Sharp</button>
            <button class="vt-seg" data-v="rounded">Rounded</button>
            <button class="vt-seg" data-v="pill">Soft</button>
          </div>
        </div>

        <div class="vt-section">
          <div class="vt-label">Display</div>
          <div class="vt-toggle" id="vt-motion-toggle">
            <span class="vt-toggle-name">Motion &amp; animations</span>
            <span class="vt-switch"></span>
          </div>
          <div style="height:8px;"></div>
          <div class="vt-toggle" id="vt-accred-toggle">
            <span class="vt-toggle-name">Accreditation row</span>
            <span class="vt-switch"></span>
          </div>
        </div>
      </div>
      <div class="vt-foot">
        <span>VIGOR · Tweaks</span>
        <span id="vt-state">●</span>
      </div>
    `;
    document.body.appendChild(wrap);
    return wrap;
  }

  // -------- wire events --------
  function refreshUI(panel) {
    panel.querySelectorAll('#vt-accent .vt-swatch').forEach(el => {
      el.classList.toggle('active', el.dataset.v === state.accent);
    });
    panel.querySelectorAll('#vt-mood .vt-seg').forEach(el => {
      el.classList.toggle('active', el.dataset.v === state.heroMood);
    });
    panel.querySelectorAll('#vt-radius .vt-seg').forEach(el => {
      el.classList.toggle('active', el.dataset.v === state.cornerRadius);
    });
    panel.querySelector('#vt-motion-toggle').classList.toggle('on', state.motion === 'on');
    panel.querySelector('#vt-accred-toggle').classList.toggle('on', !!state.showAccreditation);
  }

  function persist() {
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { ...state } }, '*');
    } catch (e) {}
  }

  function wireEvents(panel) {
    panel.querySelectorAll('#vt-accent .vt-swatch').forEach(el => {
      el.addEventListener('click', () => {
        state.accent = el.dataset.v;
        apply(); refreshUI(panel); persist();
      });
    });
    panel.querySelectorAll('#vt-mood .vt-seg').forEach(el => {
      el.addEventListener('click', () => {
        state.heroMood = el.dataset.v;
        apply(); refreshUI(panel); persist();
      });
    });
    panel.querySelectorAll('#vt-radius .vt-seg').forEach(el => {
      el.addEventListener('click', () => {
        state.cornerRadius = el.dataset.v;
        apply(); refreshUI(panel); persist();
      });
    });
    panel.querySelector('#vt-motion-toggle').addEventListener('click', () => {
      state.motion = state.motion === 'on' ? 'off' : 'on';
      apply(); refreshUI(panel); persist();
    });
    panel.querySelector('#vt-accred-toggle').addEventListener('click', () => {
      state.showAccreditation = !state.showAccreditation;
      apply(); refreshUI(panel); persist();
    });
    panel.querySelector('#vt-close').addEventListener('click', () => {
      panel.classList.remove('open');
      try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch(e){}
    });

    // Drag
    const head = panel.querySelector('#vt-head');
    let drag = null;
    head.addEventListener('mousedown', (e) => {
      const r = panel.getBoundingClientRect();
      drag = { dx: e.clientX - r.left, dy: e.clientY - r.top };
      e.preventDefault();
    });
    document.addEventListener('mousemove', (e) => {
      if (!drag) return;
      panel.style.left = (e.clientX - drag.dx) + 'px';
      panel.style.top = (e.clientY - drag.dy) + 'px';
      panel.style.right = 'auto';
      panel.style.bottom = 'auto';
    });
    document.addEventListener('mouseup', () => { drag = null; });
  }

  // -------- host protocol --------
  function init() {
    apply();  // apply defaults immediately on every page

    const panel = buildPanel();
    refreshUI(panel);
    wireEvents(panel);

    window.addEventListener('message', (e) => {
      const d = e.data;
      if (!d || typeof d !== 'object') return;
      if (d.type === '__activate_edit_mode') {
        panel.classList.add('open');
      } else if (d.type === '__deactivate_edit_mode') {
        panel.classList.remove('open');
      }
    });

    // Announce after listener is wired
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch(e){}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
