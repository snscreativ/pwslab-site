/* ══════════════════════════════════════
   PwS LP — main.js
   ══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── スクロール時にヘッダーに影を追加 ── */
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10
      ? '0 2px 16px rgba(0,0,0,0.06)'
      : 'none';
  }, { passive: true });

  /* ── スムーズスクロール（href="#..."リンク共通） ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 72; // ヘッダー高さ分
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ── フェードインアニメーション（IntersectionObserver） ── */
  const fadeEls = document.querySelectorAll(
    '.problem-wrap p, .problem-closing h2, .philosophy-text, .service-card, .company-grid, .cta-section h2, .cta-sub'
  );

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

});
