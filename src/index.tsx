import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'

const app = new Hono()

app.use(
  jsxRenderer(({ children }) => {
    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>ILLUMINIX Entertainment – YouTube Strategy. Growth. Monetization.</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link href="/static/style.css" rel="stylesheet" />
        </head>
        <body>{children}</body>
      </html>
    )
  })
)

app.get('/', (c) => {
  return c.render(
    <>
      {/* ── NAV ── */}
      <header class="nav-bar">
        <div class="nav-inner">
          <a href="/" class="nav-logo">
            <span class="logo-text">ILLUMINIX</span>
            <span class="logo-sub">ENTERTAINMENT</span>
          </a>
          <nav class="nav-links">
            <a href="#services">Services</a>
            <a href="#technology">Technology</a>
            <a href="#results">Results</a>
            <a href="#about">About</a>
            <a href="#contact" class="nav-cta">Get Started</a>
          </nav>
          <button class="nav-hamburger" id="hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
        <div class="nav-mobile" id="mobileMenu">
          <a href="#services">Services</a>
          <a href="#technology">Technology</a>
          <a href="#results">Results</a>
          <a href="#about">About</a>
          <a href="#contact">Get Started</a>
        </div>
      </header>

      {/* ── HERO ── */}
      <section class="hero">
        <div class="hero-bg">
          <div class="hero-overlay"></div>
          <div class="hero-particles" id="particles"></div>
        </div>
        <div class="hero-content">
          <p class="hero-eyebrow">YouTube Strategy · Growth · Monetization</p>
          <h1 class="hero-title">
            Build the Channel<br />
            <span class="hero-title-accent">You Deserve.</span>
          </h1>
          <p class="hero-desc">
            Illuminix Entertainment is the premier YouTube management and growth firm — helping creators, celebrities, and brands build scalable, high-performing channels.
          </p>
          <div class="hero-actions">
            <a href="#contact" class="btn-primary">Start Growing Today</a>
            <a href="#results" class="btn-ghost">See Our Results</a>
          </div>
        </div>
        <div class="hero-scroll-hint">
          <span>Scroll</span>
          <i class="fas fa-chevron-down"></i>
        </div>
      </section>

      {/* ── STATS TICKER ── */}
      <section class="stats-bar">
        <div class="stats-inner">
          <div class="stat-item">
            <span class="stat-num">15+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">200+</span>
            <span class="stat-label">Channels Managed</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">685+</span>
            <span class="stat-label">Videos / Month</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">Billions</span>
            <span class="stat-label">Total Views</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-num">25+</span>
            <span class="stat-label">Creator Awards</span>
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section class="who-section" id="services">
        <div class="section-inner">
          <p class="section-eyebrow">Trusted By</p>
          <h2 class="section-title">Creators. Celebrities. Brands.</h2>
          <p class="section-sub">We specialize in scaling both emerging creators and established names across every category.</p>

          <div class="who-grid">
            <div class="who-card">
              <div class="who-icon"><i class="fas fa-user-star"></i></div>
              <h3>Influencers &amp; Creators</h3>
              <p>Turn your passion into a scalable media business with expert strategy and support.</p>
            </div>
            <div class="who-card">
              <div class="who-icon"><i class="fas fa-star"></i></div>
              <h3>Celebrities &amp; Public Figures</h3>
              <p>Extend your brand to the world's second-largest search engine with proven systems.</p>
            </div>
            <div class="who-card">
              <div class="who-icon"><i class="fas fa-music"></i></div>
              <h3>Musicians &amp; Entertainers</h3>
              <p>Grow your fanbase and monetize your content across every YouTube surface.</p>
            </div>
            <div class="who-card">
              <div class="who-icon"><i class="fas fa-building"></i></div>
              <h3>Businesses &amp; Brands</h3>
              <p>Transform YouTube into a powerful acquisition and audience-building channel.</p>
            </div>
            <div class="who-card">
              <div class="who-icon"><i class="fas fa-gamepad"></i></div>
              <h3>Gamers &amp; Personalities</h3>
              <p>Compete at the highest level with data-driven content strategy and growth systems.</p>
            </div>
            <div class="who-card">
              <div class="who-icon"><i class="fas fa-globe"></i></div>
              <h3>Consumer Brands</h3>
              <p>Build long-term audience equity that drives awareness, loyalty, and revenue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LUMISOFT TECHNOLOGY ── */}
      <section class="tech-section" id="technology">
        <div class="tech-bg-glow"></div>
        <div class="section-inner">
          <div class="tech-layout">
            <div class="tech-copy">
              <p class="section-eyebrow light">Proprietary Technology</p>
              <h2 class="section-title light">Powered by<br /><span class="accent-gold">LumiSoft™</span></h2>
              <p class="tech-desc">
                Every channel we manage is powered by LumiSoft™ — Illuminix's proprietary AI growth platform engineered to accelerate channel performance, optimize content strategy, and scale audiences at speed.
              </p>
              <ul class="tech-list">
                <li><i class="fas fa-check-circle"></i> Faster channel growth &amp; audience expansion</li>
                <li><i class="fas fa-check-circle"></i> Advanced performance analytics &amp; optimization</li>
                <li><i class="fas fa-check-circle"></i> Strategic content positioning for maximum reach</li>
                <li><i class="fas fa-check-circle"></i> Scalable management across hundreds of channels</li>
              </ul>
            </div>
            <div class="tech-visual">
              <div class="tech-orb">
                <div class="orb-ring ring-1"></div>
                <div class="orb-ring ring-2"></div>
                <div class="orb-ring ring-3"></div>
                <div class="orb-core">
                  <span class="orb-label">LumiSoft™</span>
                  <span class="orb-sublabel">AI Platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES / WHAT WE DO ── */}
      <section class="services-section">
        <div class="section-inner">
          <p class="section-eyebrow">What We Do</p>
          <h2 class="section-title">Full-Spectrum YouTube Management</h2>
          <p class="section-sub">Everything your channel needs — under one roof.</p>

          <div class="services-grid">
            <div class="service-card featured">
              <div class="service-icon"><i class="fas fa-chart-line"></i></div>
              <h3>Channel Growth Strategy</h3>
              <p>Data-driven roadmaps designed to grow your audience faster and more sustainably.</p>
            </div>
            <div class="service-card">
              <div class="service-icon"><i class="fas fa-video"></i></div>
              <h3>Content Production</h3>
              <p>685+ videos published per month. We handle ideation, scripting, editing, and publishing.</p>
            </div>
            <div class="service-card">
              <div class="service-icon"><i class="fas fa-dollar-sign"></i></div>
              <h3>Monetization Optimization</h3>
              <p>Maximize your AdSense revenue, memberships, and channel-level income streams.</p>
            </div>
            <div class="service-card">
              <div class="service-icon"><i class="fas fa-handshake"></i></div>
              <h3>Brand Deal Procurement</h3>
              <p>We negotiate sponsorships and integrations that align with your audience and brand.</p>
            </div>
            <div class="service-card">
              <div class="service-icon"><i class="fas fa-analytics"></i></div>
              <h3>Performance Analytics</h3>
              <p>Real-time dashboards and reporting powered by LumiSoft™ AI technology.</p>
            </div>
            <div class="service-card">
              <div class="service-icon"><i class="fas fa-cogs"></i></div>
              <h3>Channel Management</h3>
              <p>End-to-end operations management so you can focus on what you do best.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS SHOWCASE ── */}
      <section class="results-section" id="results">
        <div class="section-inner">
          <p class="section-eyebrow">Proven Results</p>
          <h2 class="section-title">The Numbers Speak.</h2>

          <div class="results-grid">
            <div class="result-card big">
              <div class="result-award"><i class="fas fa-trophy"></i></div>
              <span class="result-number">25+</span>
              <span class="result-text">YouTube Creator Awards<br /><small>Silver · Gold · Diamond</small></span>
            </div>
            <div class="result-card">
              <span class="result-number">1 in 5</span>
              <span class="result-text">Americans reached every<br />six months</span>
            </div>
            <div class="result-card">
              <span class="result-number">200+</span>
              <span class="result-text">Active channels<br />under management</span>
            </div>
            <div class="result-card">
              <span class="result-number">15+</span>
              <span class="result-text">Years of YouTube<br />expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT / FOUNDER ── */}
      <section class="about-section" id="about">
        <div class="section-inner about-layout">
          <div class="about-copy">
            <p class="section-eyebrow">Founder-Led Expertise</p>
            <h2 class="section-title">Meet Aaron James Karr</h2>
            <p>
              Illuminix was founded and is led by <strong>Aaron James Karr</strong>, one of the world's leading YouTube strategists. The company remains founder-owned and strategy-driven — ensuring every client receives elite-level expertise and time-tested growth systems.
            </p>
            <p>
              With over 15 years in the YouTube ecosystem, Aaron has built the systems, technology, and team infrastructure that power every channel Illuminix manages.
            </p>
            <div class="about-badges">
              <span class="badge"><i class="fas fa-award"></i> Diamond Creator Award</span>
              <span class="badge"><i class="fas fa-lock"></i> Founder-Owned</span>
              <span class="badge"><i class="fas fa-brain"></i> Strategy-Driven</span>
            </div>
          </div>
          <div class="about-visual">
            <div class="founder-card">
              <div class="founder-avatar">
                <i class="fas fa-user"></i>
              </div>
              <div class="founder-name">Aaron James Karr</div>
              <div class="founder-title">Founder &amp; CEO, Illuminix Entertainment</div>
              <div class="founder-quote">"We don't just grow channels — we build media empires."</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section class="mission-section">
        <div class="mission-bg"></div>
        <div class="section-inner mission-inner">
          <p class="section-eyebrow light">Our Mission</p>
          <h2 class="mission-title">
            Build scalable, high-performing<br />
            YouTube channels that generate<br />
            <span class="accent-gold">long-term growth, influence,<br />and revenue.</span>
          </h2>
        </div>
      </section>

      {/* ── CONTACT / CTA ── */}
      <section class="contact-section" id="contact">
        <div class="section-inner contact-inner">
          <p class="section-eyebrow">Let's Work Together</p>
          <h2 class="section-title">Ready to Grow?</h2>
          <p class="section-sub">Tell us about your channel and we'll show you what's possible.</p>
          <form class="contact-form" id="contactForm">
            <div class="form-row">
              <input type="text" placeholder="Your Name" required class="form-input" />
              <input type="email" placeholder="Email Address" required class="form-input" />
            </div>
            <div class="form-row">
              <input type="url" placeholder="YouTube Channel URL" class="form-input" />
              <select class="form-input form-select">
                <option value="" disabled selected>I am a...</option>
                <option>Creator / Influencer</option>
                <option>Celebrity / Public Figure</option>
                <option>Musician / Entertainer</option>
                <option>Brand / Business</option>
                <option>Gamer / Personality</option>
              </select>
            </div>
            <textarea placeholder="Tell us about your goals..." class="form-textarea" rows={4}></textarea>
            <button type="submit" class="btn-primary btn-full">Send Inquiry</button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer class="footer">
        <div class="footer-inner">
          <div class="footer-logo">
            <span class="logo-text">ILLUMINIX</span>
            <span class="logo-sub">ENTERTAINMENT</span>
          </div>
          <p class="footer-tagline">YouTube Strategy. Growth. Monetization.</p>
          <div class="footer-links">
            <a href="#services">Services</a>
            <a href="#technology">Technology</a>
            <a href="#results">Results</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <p class="footer-copy">&copy; {new Date().getFullYear()} Illuminix Entertainment. All rights reserved.</p>
        </div>
      </footer>

      <script src="/static/app.js"></script>
    </>
  )
})

export default app
