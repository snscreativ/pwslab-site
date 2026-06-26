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
    '.problem-wrap p, .problem-closing h2, .philosophy-text, .service-card, .company-grid, .cta-section h2, .cta-sub, .contact-heading, .contact-form'
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


  /* ── お問い合わせフォーム ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const status = document.getElementById('formStatus');
    const thanksCard = document.getElementById('thanksCard');
    const submitButton = contactForm.querySelector('button[type="submit"]');

    const setError = (name, message = '') => {
      const el = contactForm.querySelector(`[data-error-for="${name}"]`);
      if (el) el.textContent = message;
    };

    const clearErrors = () => {
      contactForm.querySelectorAll('.error-message').forEach(el => { el.textContent = ''; });
      if (status) status.textContent = '';
    };

    const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      clearErrors();

      const formData = new FormData(contactForm);
      const payload = {
        name: String(formData.get('name') || '').trim(),
        company: String(formData.get('company') || '').trim(),
        email: String(formData.get('email') || '').trim(),
        consultation: formData.getAll('consultation'),
        message: String(formData.get('message') || '').trim(),
        position: String(formData.get('position') || '').trim(),
        phone: String(formData.get('phone') || '').trim(),
        privacy: formData.get('privacy') === '同意します'
      };

      let hasError = false;
      if (!payload.name) { setError('name', 'お名前を入力してください。'); hasError = true; }
      if (!payload.company) { setError('company', '会社名を入力してください。'); hasError = true; }
      if (!payload.email) { setError('email', 'メールアドレスを入力してください。'); hasError = true; }
      else if (!validateEmail(payload.email)) { setError('email', '正しいメールアドレス形式で入力してください。'); hasError = true; }
      if (!payload.consultation.length) { setError('consultation', 'ご相談内容を1つ以上選択してください。'); hasError = true; }
      if (!payload.privacy) { setError('privacy', '個人情報の取り扱いへの同意が必要です。'); hasError = true; }
      if (hasError) return;

      submitButton.disabled = true;
      if (status) status.textContent = '送信中です。';

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) throw new Error(data.message || '送信に失敗しました。');
        contactForm.hidden = true;
        if (thanksCard) thanksCard.hidden = false;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) {
        if (status) status.textContent = err.message || '送信に失敗しました。時間をおいて再度お試しください。';
      } finally {
        submitButton.disabled = false;
      }
    });
  }

});
