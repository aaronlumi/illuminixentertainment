/* ═══════════════════════════════════════════════════════════
   VIDEO HERO — autoplay + mute toggle
   ═══════════════════════════════════════════════════════════ */
(function () {
  const video    = document.getElementById('heroVideo');
  const muteBtn  = document.getElementById('videoMute');
  if (!video || !muteBtn) return;

  // Ensure muted autoplay (browsers require it)
  video.muted = true;
  video.play().catch(() => {});

  // Mute / unmute toggle
  muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.innerHTML = video.muted
      ? '<i class="fas fa-volume-mute"></i>'
      : '<i class="fas fa-volume-up"></i>';
  });
})();

/* ── Nav scroll effect ── */
const nav = document.querySelector('.nav-bar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile nav toggle ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ── Hero Particles ── */
(function () {
  const container = document.getElementById('particles');
  if (!container) return;
  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    const blue = Math.random() > 0.45;
    p.style.cssText = `
      width:${Math.random()*4+1.5}px;height:${Math.random()*4+1.5}px;
      left:${Math.random()*100}%;bottom:-10px;
      background:${blue?'#005EB8':'#1a7fd4'};
      animation-delay:${Math.random()*18}s;animation-duration:${Math.random()*14+10}s;
    `;
    container.appendChild(p);
  }
})();

/* ── Billions counter animation ── */
(function () {
  const el = document.getElementById('billionsCounter');
  if (!el) return;
  let triggered = false;

  const run = () => {
    if (triggered) return;
    triggered = true;
    const total = 2200;
    const start = performance.now();
    const phases = [
      { end: 400,  fmt: n => Math.floor(n).toLocaleString() + 'M' },
      { end: 800,  fmt: n => (n/1000).toFixed(1) + 'B'            },
      { end: 1400, fmt: n => (n/1000).toFixed(2) + 'B'            },
      { end: 1800, fmt: n => Math.floor(n/1000) + 'B+'            },
      { end: 2200, fmt: ()  => 'Billions'                          },
    ];
    const ease = t => t < 0.5 ? 2*t*t : -1+(4-2*t)*t;
    const tick = now => {
      const elapsed = now - start;
      const p = Math.min(elapsed / total, 1);
      const count = ease(p) * 2500;
      const phase = phases.find(ph => elapsed < ph.end) || phases[phases.length-1];
      el.textContent = phase.fmt(count);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = 'Billions';
    };
    requestAnimationFrame(tick);
  };

  new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { run(); }
  }, { threshold: 0.5 }).observe(el);
})();

/* ── Scroll-in animations ── */
(function () {
  const targets = document.querySelectorAll(
    '.who-card, .service-card, .result-card, .stat-item, .tech-list li, .badge'
  );
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.style.transitionDelay = (i * 0.04) + 's';
        el.classList.add('visible');
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    obs.observe(el);
  });
})();

const style = document.createElement('style');
style.textContent = '.visible{opacity:1!important;transform:translateY(0)!important;}';
document.head.appendChild(style);

/* ── Contact form ── */
const form = document.getElementById('contactForm');
const successBox = document.getElementById('formSuccess');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    btn.style.opacity = '0.75';
    try {
      const res  = await fetch('/api/contact', { method:'POST', body: new FormData(form) });
      const data = await res.json();
      if (data.success) {
        form.style.display = 'none';
        if (successBox) successBox.style.display = 'flex';
      } else throw new Error();
    } catch {
      btn.textContent = 'Something went wrong — try again';
      btn.disabled = false; btn.style.opacity = '1';
      btn.style.background = '#ef4444';
      setTimeout(() => { btn.style.background = ''; btn.textContent = orig; }, 3500);
    }
  });
}

/* ── Smooth scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior:'smooth' });
  });
});
