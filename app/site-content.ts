// Page markup rendered by app/page.tsx via dangerouslySetInnerHTML.
export const siteBodyHtml = `
<div class="bg-grid"></div>
<div class="grain"></div>
<div id="progress"></div>
<div id="cursor"><span id="cursor-label"></span></div>

<header id="site-header">
  <div class="wrap">
    <nav>
      <button class="logo" onclick="scrollToId('hero')">SHRINJOY</button>
      <ul class="nav-links" id="nav-links">
        <li><button data-target="about" onclick="scrollToId('about')">About</button></li>
        <li><button data-target="experience" onclick="scrollToId('experience')">Experience</button></li>
        <li><button data-target="projects" onclick="scrollToId('projects')">Projects</button></li>
        <li><button data-target="skills" onclick="scrollToId('skills')">Skills</button></li>
        <li><button data-target="education" onclick="scrollToId('education')">Education</button></li>
        <li><button data-target="open-source" onclick="scrollToId('open-source')">Open Source</button></li>
        <li><button data-target="contact" onclick="scrollToId('contact')">Contact</button></li>
      </ul>
      <div style="display:flex; align-items:center; gap:.6rem;">
        <button class="theme-toggle" id="theme-toggle" aria-label="Toggle color theme">
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
        </button>
        <button class="talk-btn" onclick="scrollToId('contact')">Let's Talk ↗</button>
        <button class="hamburger" id="hamburger-btn" aria-label="Open menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
        </button>
      </div>
    </nav>
  </div>
</header>

<div id="mobile-menu">
  <ul>
    <li><button style="animation-delay:.05s" onclick="scrollToId('about')">About</button></li>
    <li><button style="animation-delay:.1s" onclick="scrollToId('experience')">Experience</button></li>
    <li><button style="animation-delay:.15s" onclick="scrollToId('projects')">Projects</button></li>
    <li><button style="animation-delay:.2s" onclick="scrollToId('skills')">Skills</button></li>
    <li><button style="animation-delay:.25s" onclick="scrollToId('education')">Education</button></li>
    <li><button style="animation-delay:.3s" onclick="scrollToId('open-source')">Open Source</button></li>
    <li><button style="animation-delay:.35s" onclick="scrollToId('contact')">Contact</button></li>
  </ul>
  <div class="mobile-theme-row" style="animation-delay:.4s;">
    <span>THEME</span>
    <button class="theme-toggle" id="theme-toggle-mobile" aria-label="Toggle color theme">
      <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
    </button>
  </div>
</div>

<main>

<section id="hero">
  <div class="wrap hero-grid">
    <div>
      <div class="status-dot"><span class="dot"></span>AVAILABLE FOR NEW ROLES</div>
      <h1 class="hero-name">SHRINJOY<br/>SAHA</h1>
      <div class="role-cycle" id="role-cycle"><span class="bracket">//</span><div class="role-cycle-inner" id="role-cycle-inner"></div></div>
      <p class="hero-intro">Software engineer with <strong class="stat-strong">7+ years</strong> building full-stack applications — from client-facing React interfaces to the APIs and databases underneath them.</p>
      <div class="hero-cta">
        <button class="btn-solid" onclick="scrollToId('projects')">View Projects ↓</button>
        <a class="btn-outline" href="https://github.com/shrinjoy979" target="_blank" rel="noopener">GitHub ↗</a>
        <button class="btn-ghost" onclick="scrollToId('contact')">Let's Talk ↗</button>
      </div>
    </div>
    <div class="hero-visual bracketed" id="hero-visual">
      <span class="bk-tl"></span><span class="bk-tr"></span><span class="bk-bl"></span><span class="bk-br"></span>
      <div class="hv-grid"></div>
      <div class="hv-scan"></div>
    </div>
  </div>
  <div class="scroll-cue"><span class="eyebrow" style="border:none;">SCROLL</span></div>
</section>

<div class="marquee-wrap">
  <div class="marquee-track" id="marquee-track"></div>
</div>

<section id="about">
  <div class="wrap">
    <p class="eyebrow reveal" style="margin-bottom:2.5rem;">A LITTLE ABOUT ME</p>
    <div class="about-grid">
      <p class="about-quote reveal">"I like turning complex technical problems into simple, reliable products."</p>
      <div>
        <p class="about-bio reveal">Over the past <strong class="stat-strong">7+ years</strong> I've worked across the stack — Next.js and React on the frontend, Node.js and Laravel on the backend, SQL and MongoDB underneath. I led the re-architecture of a platform serving <strong class="stat-strong">100,000+</strong> requests a month, improving speed by <strong class="stat-strong">20%</strong>, and I'm currently deepening into AI — LoRA and Hugging Face — plus Rust on the side.</p>
      </div>
    </div>
  </div>
</section>

<section style="padding-top:2rem; padding-bottom:2rem;">
  <div class="wrap stats-grid" id="stats-grid">
    <div class="stat reveal"><div class="stat-num" data-count="7" data-suffix="+">0</div><div class="eyebrow" style="border:none;">YEARS EXPERIENCE</div></div>
    <div class="stat reveal"><div class="stat-num" data-count="25" data-suffix="+">0</div><div class="eyebrow" style="border:none;">PROJECTS SHIPPED</div></div>
    <div class="stat reveal"><div class="stat-num" data-count="100" data-suffix="K+">0</div><div class="eyebrow" style="border:none;">REQUESTS / MONTH</div></div>
    <div class="stat reveal"><div class="stat-num" data-count="1" data-suffix="">0</div><div class="eyebrow" style="border:none;">HACKATHON WIN</div></div>
  </div>
</section>

<section class="showcase-section" aria-label="Project media showcase">
  <p class="eyebrow wrap" style="margin-bottom:1.5rem;">IN THE LAB</p>
  <div class="showcase-marquee-wrap">
    <div class="showcase-track" id="showcase-track">
      <div class="showcase-set" id="showcase-set">
      <div class="showcase-card">
        <img src="/showcase/snakeswin-landing.jpg" alt="SnakesWin — Landing Page" loading="lazy" decoding="async"/>
        <span class="showcase-caption">SnakesWin — Landing Page</span>
      </div>
      <div class="showcase-card">
        <video autoplay muted loop playsinline preload="metadata" poster="/showcase/snakeswin-demo-poster.jpg"><source src="/showcase/snakeswin-demo.mp4" type="video/mp4"/></video>
        <span class="showcase-caption">SnakesWin — Live Demo</span>
      </div>
      <div class="showcase-card">
        <img src="/showcase/snakeswin-wallet-confirm.jpg" alt="SnakesWin — Wallet Confirm" loading="lazy" decoding="async"/>
        <span class="showcase-caption">SnakesWin — Wallet Confirm</span>
      </div>
      <div class="showcase-card">
        <img src="/showcase/snakeswin-gameplay.jpg" alt="SnakesWin — Live Match" loading="lazy" decoding="async"/>
        <span class="showcase-caption">SnakesWin — Live Match</span>
      </div>
      <div class="showcase-card">
        <video autoplay muted loop playsinline preload="metadata"><source src="/showcase/soli-demo.mp4" type="video/mp4"/></video>
        <span class="showcase-caption">SOLi — Live Demo</span>
      </div>
      <div class="showcase-card">
        <img src="/showcase/solana-ico-dapp.jpg" alt="Solana ICO Dapp" loading="lazy" decoding="async"/>
        <span class="showcase-caption">Solana ICO Dapp</span>
      </div>
      <div class="showcase-card">
        <img src="/showcase/coding-agent-cli.jpg" alt="Coding Agent — CLI Tool" loading="lazy" decoding="async"/>
        <span class="showcase-caption">Coding Agent — CLI Tool</span>
      </div>
      <div class="showcase-card">
        <video autoplay muted loop playsinline preload="metadata"><source src="/showcase/care-stake-demo.mp4" type="video/mp4"/></video>
        <span class="showcase-caption">$HEALTH — Live Demo</span>
      </div>
      <div class="showcase-card">
        <img src="/showcase/cloudy-weather-cli.jpg" alt="Cloudy — Weather CLI" loading="lazy" decoding="async"/>
        <span class="showcase-caption">Cloudy — Weather CLI</span>
      </div>
      <div class="showcase-card">
        <video autoplay muted loop playsinline preload="metadata"><source src="/showcase/lovable-clone-demo.mp4" type="video/mp4"/></video>
        <span class="showcase-caption">Lovable Clone — Live Demo</span>
      </div>
      <div class="showcase-card">
        <video autoplay muted loop playsinline preload="metadata"><source src="/showcase/pop-demo.mp4" type="video/mp4"/></video>
        <span class="showcase-caption">POP — Live Demo</span>
      </div>
      </div>
    </div>
  </div>
</section>

<section id="experience">
  <div class="wrap">
    <p class="eyebrow reveal" style="margin-bottom:2.5rem;">EXPERIENCE</p>
    <div style="border-top:1px solid var(--line);" id="exp-list"></div>
  </div>
</section>

<section id="projects">
  <div class="wrap">
    <div class="proj-head">
      <div>
        <p class="eyebrow reveal" style="margin-bottom:1rem;">SELECTED WORK</p>
        <h2 class="proj-title reveal">Things I've built,<br/>shipped and put in front of users.</h2>
      </div>
    </div>
    <div class="proj-grid" id="proj-grid"></div>
  </div>
</section>

<section id="skills" style="border-top:1px solid var(--line);">
  <div class="wrap">
    <p class="eyebrow reveal" style="margin-bottom:3rem;">SKILLS</p>
    <div class="skills-grid" id="skills-grid"></div>
  </div>
</section>

<section id="education" style="border-top:1px solid var(--line);">
  <div class="wrap">
    <p class="eyebrow reveal" style="margin-bottom:2.5rem;">EDUCATION</p>
    <div class="edu-grid reveal" id="edu-grid"></div>
  </div>
</section>

<section id="open-source" style="border-top:1px solid var(--line);">
  <div class="wrap">
    <div class="os-head">
      <div>
        <p class="eyebrow reveal" style="margin-bottom:1rem;">OPEN SOURCE</p>
        <h2 class="proj-title reveal" style="font-size:2.6rem;">Public by default.</h2>
      </div>
      <div class="os-live-row reveal">
        <span class="live-dot"></span>
        <span class="live-label" id="os-live-label">SYNCING WITH GITHUB…</span>
      </div>
    </div>
    <div class="grid-cal-wrap reveal" style="margin-top:1rem;">
      <div class="grid-cal-months" id="grid-cal-months"></div>
      <div class="grid-cal" id="grid-cal"></div>
    </div>
    <p class="os-note" id="os-note">Connecting to github.com/shrinjoy979…</p>
    <div class="repo-grid" id="repo-grid"></div>
  </div>
</section>

<section style="border-top:1px solid var(--line);">
  <div class="wrap">
    <p class="eyebrow reveal" style="margin-bottom:3rem;">ACHIEVEMENTS</p>
    <div class="ach-grid" id="ach-grid"></div>
  </div>
</section>

<section class="signoff-section" style="border-top:1px solid var(--line);">
  <div class="wrap">
    <div class="signoff bracketed">
      <span class="bk-tl"></span><span class="bk-tr"></span><span class="bk-bl"></span><span class="bk-br"></span>
      <svg class="signoff-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="12" r="3"/><path d="M6 9v6M18 9a9 9 0 0 1-9 9"/></svg>
      <p class="signoff-line">
        <span class="signoff-prompt">$</span>
        <span id="signoff-typed">git commit -m "Thank you "</span><span class="cursor-blink"></span>
      </p>
    </div>
  </div>
</section>

<section id="contact" style="border-top:1px solid var(--line);">
  <div class="wrap">
    <p class="eyebrow reveal" style="margin-bottom:1.5rem;">CONTACT</p>
    <h2 class="contact-heading reveal">LET'S BUILD<br/>SOMETHING.</h2>
    <p class="contact-sub reveal">Open to full-stack, AI and Web3 opportunities.</p>
    <button class="get-in-touch reveal" type="button" onclick="scrollToId('contact-links')">Get In Touch ↓</button>
    <div class="contact-links reveal" id="contact-links">
      <span class="contact-email-row">
        <a href="mailto:shrinjoysaha41@gmail.com">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
          shrinjoysaha41@gmail.com
        </a>
        <button class="copy-btn" id="copy-email-btn" data-copy="shrinjoysaha41@gmail.com" aria-label="Copy email address" type="button">
          <svg class="icon-copy" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          <svg class="icon-check" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </button>
      </span>
      <a href="tel:+919007829306">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +91-9007829306
      </a>
      <a href="https://github.com/shrinjoy979" target="_blank" rel="noopener">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.02 3.26 9.28 7.78 10.79.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.74.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.73 0c2.19-1.47 3.15-1.16 3.15-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.31-5.19 5.59.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.79.55C20.24 21.29 23.5 17.04 23.5 12.02 23.5 5.74 18.27.5 12 .5Z"/></svg>
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/shrinjoy-saha/" target="_blank" rel="noopener">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
        LinkedIn
      </a>
      <a href="https://t.me/shrinjoy" target="_blank" rel="noopener" id="telegram-link">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M21.94 3.44a1.5 1.5 0 0 0-1.6-.2L2.6 10.98a1.4 1.4 0 0 0 .1 2.6l4.53 1.5 1.74 5.6a1.13 1.13 0 0 0 1.85.44l2.6-2.42 4.5 3.35a1.42 1.42 0 0 0 2.26-.85l3.24-15.6a1.5 1.5 0 0 0-.98-1.66ZM8.98 14.4l-.02.02-1.1-3.66 10.9-6.85-9.16 8.9-.62 1.6Zm1.4 4.9-.9-2.9 2.24-2.09 1.9 1.42-3.24 3.57Z"/></svg>
        Telegram
      </a>
      <a href="https://discord.com/users/shrinjoy" target="_blank" rel="noopener">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.45.86-.61 1.25a18.3 18.3 0 0 0-5.49 0 12.6 12.6 0 0 0-.62-1.25.08.08 0 0 0-.08-.04c-1.7.3-3.34.81-4.89 1.52a.07.07 0 0 0-.03.03C.53 8.6-.32 12.68.1 16.72a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.11 13.1 13.1 0 0 1-1.87-.89.08.08 0 0 1-.01-.13c.13-.09.25-.19.37-.29a.07.07 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.07.07 0 0 1 .08.01c.12.1.24.2.37.29a.08.08 0 0 1-.01.13c-.6.35-1.22.65-1.87.89a.08.08 0 0 0-.04.11c.36.7.78 1.37 1.23 2a.08.08 0 0 0 .08.03 19.8 19.8 0 0 0 6.01-3.03.08.08 0 0 0 .03-.06c.5-4.68-.83-8.73-3.53-12.32a.06.06 0 0 0-.03-.03ZM8.02 14.24c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42Z"/></svg>
        Discord
      </a>
    </div>
  </div>
</section>

</main>

<footer>
  <div class="wrap footer-row">
    <p>© 2026 Shrinjoy Saha</p>
  </div>
</footer>
`;
