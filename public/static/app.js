/* ── Nav scroll effect ── */
const nav = document.querySelector('.nav-bar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

/* ── Mobile nav toggle ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ── Hero Particles ── */
(function () {
  const container = document.getElementById('particles');
  if (!container) return;
  const count = 28;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const size  = Math.random() * 4 + 1.5;
    const left  = Math.random() * 100;
    const delay = Math.random() * 18;
    const dur   = Math.random() * 14 + 10;
    const gold  = Math.random() > 0.5;
    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      bottom: -10px;
      background: ${gold ? '#f0b429' : '#8b5cf6'};
      animation-delay: ${delay}s;
      animation-duration: ${dur}s;
    `;
    container.appendChild(p);
  }
})();

/* ── Scroll-in animations ── */
(function () {
  const targets = document.querySelectorAll(
    '.who-card, .service-card, .result-card, .stat-item, .tech-list li, .badge'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.transitionDelay = (i * 0.04) + 's';
        el.classList.add('visible');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    observer.observe(el);
  });
})();

// Helper: add visible class styles via JS
const style = document.createElement('style');
style.textContent = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
document.head.appendChild(style);

/* ── Contact form feedback ── */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = '✓ Inquiry Received!';
    btn.style.background = '#22c55e';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
}

/* ── Smooth anchor scrolling with offset ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
