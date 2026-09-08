/* ============================================================
   DECK ENGINE
   - scales the 4480x1120 stage to fit any viewport
   - slide navigation (keyboard / click / hash / overview grid)
   - replayable enter-animations driven by [data-anim]
   ============================================================ */
(function () {
  'use strict';

  const STAGE_W = 4480, STAGE_H = 1120;

  const viewport = document.getElementById('viewport');
  const stage    = document.getElementById('stage');
  const progress = document.getElementById('progress');
  const counter  = document.getElementById('counter');
  const overview = document.getElementById('overview');

  const slides = Array.from(stage.querySelectorAll('.slide'));
  let index = 0;
  let fitMode = 'contain';           // 'contain' | 'cover' | 'actual'

  /* ---------- fit ------------------------------------------ */
  function fit() {
    const vw = window.innerWidth, vh = window.innerHeight;
    let s;
    if (fitMode === 'actual')      s = 1;
    else if (fitMode === 'cover')  s = Math.max(vw / STAGE_W, vh / STAGE_H);
    else                           s = Math.min(vw / STAGE_W, vh / STAGE_H);
    stage.style.transform = `scale(${s})`;
    document.documentElement.style.setProperty('--scale', s);
  }
  window.addEventListener('resize', fit, { passive: true });

  /* ---------- animation ------------------------------------ */
  function resetAnims(slide) {
    slide.querySelectorAll('[data-anim]').forEach(el => {
      el.classList.remove('is-in');
      el.style.removeProperty('--_d');
    });
  }

  function runAnims(slide) {
    const els = slide.querySelectorAll('[data-anim]');
    els.forEach((el, i) => {
      // explicit delay wins; otherwise stagger by document order within its group
      const explicit = el.dataset.delay;
      const step = Number(el.closest('[data-stagger]')?.dataset.stagger ?? 90);
      const d = explicit !== undefined ? Number(explicit) : i * step;
      el.style.setProperty('--_d', d + 'ms');
      if (el.dataset.dur) el.style.transitionDuration = el.dataset.dur + 'ms';
    });
    // force style flush so the transition actually plays
    void slide.offsetWidth;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      els.forEach(el => el.classList.add('is-in'));
    }));
  }

  /* ---------- navigation ----------------------------------- */
  function go(n, { silent = false } = {}) {
    n = Math.max(0, Math.min(slides.length - 1, n));
    const prev = slides[index];
    const next = slides[n];
    if (prev && prev !== next) {
      prev.classList.remove('is-active');
      prev.classList.add('is-leaving');
      setTimeout(() => prev.classList.remove('is-leaving'), 700);
      resetAnims(prev);
    }
    index = n;
    resetAnims(next);
    next.classList.add('is-active');
    runAnims(next);

    progress.style.width = ((index + 1) / slides.length * 100) + '%';
    counter.textContent = String(index + 1).padStart(2, '0') + ' / ' + String(slides.length).padStart(2, '0');
    document.body.dataset.slide = next.dataset.slide || (index + 1);
    if (!silent) history.replaceState(null, '', '#' + (index + 1));
    stage.dispatchEvent(new CustomEvent('slide:enter', { detail: { index, el: next } }));
  }

  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  /* ---------- overview grid -------------------------------- */
  function buildOverview() {
    overview.innerHTML = '';
    slides.forEach((s, i) => {
      const card = document.createElement('div');
      card.className = 'ov-card';
      card.style.background = getComputedStyle(s).backgroundColor || '#111';
      const title = s.dataset.title
        || s.querySelector('h1,h2,.headline')?.textContent.trim()
        || 'Slide ' + (i + 1);
      card.innerHTML = `<span class="ov-n">${String(i + 1).padStart(2, '0')}</span>
                        <span class="ov-t">${title}</span>`;
      card.addEventListener('click', () => { toggleOverview(false); go(i); });
      overview.appendChild(card);
    });
  }
  function toggleOverview(force) {
    const open = force !== undefined ? force : !overview.classList.contains('is-open');
    overview.classList.toggle('is-open', open);
    viewport.classList.toggle('is-overview', open);
  }

  /* ---------- input ---------------------------------------- */
  const KEY = {
    ArrowRight: next, ArrowDown: next, PageDown: next, ' ': next, Enter: next,
    ArrowLeft: prev, ArrowUp: prev, PageUp: prev,
    Home: () => go(0), End: () => go(slides.length - 1),
    f: () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(),
    o: () => toggleOverview(),
    g: () => stage.classList.toggle('show-grid'),
    c: () => { fitMode = fitMode === 'contain' ? 'cover' : fitMode === 'cover' ? 'actual' : 'contain'; fit(); },
    r: () => { resetAnims(slides[index]); runAnims(slides[index]); },
  };
  document.addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const fn = KEY[e.key] || KEY[e.key.toLowerCase()];
    if (fn) { e.preventDefault(); fn(); }
    else if (/^[0-9]$/.test(e.key)) { e.preventDefault(); go(Number(e.key) - 1); }
  });
  viewport.addEventListener('click', e => {
    if (e.target.closest('#chrome, a, button')) return;
    (e.clientX < window.innerWidth * 0.25 ? prev : next)();
  });
  // touch swipe
  let tx = 0;
  viewport.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  viewport.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 60) (dx < 0 ? next : prev)();
  }, { passive: true });

  document.querySelectorAll('[data-nav]').forEach(b =>
    b.addEventListener('click', () => ({ next, prev, overview: () => toggleOverview(), grid: () => stage.classList.toggle('show-grid') })[b.dataset.nav]()));

  /* ---------- boot ----------------------------------------- */
  // index.html?export=1 — strips the presenter chrome so PNG/PDF exports
  // carry nothing but the slide itself.
  if (/(?:^|[?&])export/.test(location.search)) document.body.classList.add('is-export');
  fit();
  buildOverview();
  const fromHash = parseInt(location.hash.slice(1), 10);
  go(Number.isFinite(fromHash) && fromHash > 0 ? fromHash - 1 : 0, { silent: true });

  // expose for debugging / presenter tooling
  window.Deck = { go, next, prev, fit, get index() { return index; }, slides, toggleOverview };
})();
