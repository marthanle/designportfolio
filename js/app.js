// Renders the home page and case-study pages, and drives hash-based routing.
const YEAR = 2026;

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function projectCard(p, index) {
  const num = String(index + 1).padStart(2, '0');
  return `
    <a class="project-card" href="#/case/${p.id}">
      <span class="project-card-num">${num}</span>
      <div class="project-body">
        <span class="tag-chip">${escapeHtml(p.tag)}</span>
        <h3>${escapeHtml(p.title)}</h3>
        <p class="blurb">${escapeHtml(p.blurb)}</p>
        <div class="project-meta">
          <div>
            <p class="label">Role</p>
            <p class="value">${escapeHtml(p.role)}</p>
          </div>
          <div>
            <p class="label">Tools</p>
            <p class="value">${escapeHtml(p.tools)}</p>
          </div>
        </div>
        <span class="view-link">View case study <span class="arrow">&rarr;</span></span>
      </div>
    </a>`;
}

function renderHome() {
  const cards = PROJECTS.map(projectCard).join('');
  return `
    <section class="mesh-zone">
      <div class="hero wrap">
        <div class="hero-copy">
          <div class="badge"><span class="badge-dot"></span>Open to new opportunities</div>
          <h1>Hi, I'm Martha, a product mind learning to design, build, and <span class="accent">make things real</span> &#10022;</h1>
          <p class="hero-role">Sr. Product Associate, based in Dallas</p>
          <p class="hero-desc">Surrounded by people who design and code for a living, I caught the bug, and now I'm learning to build my own ideas instead of just managing everyone else's.</p>
          <div class="hero-cta">
            <a class="btn-primary" href="#work">See my work</a>
            <a class="btn-secondary" href="assets/resume.pdf" target="_blank" rel="noopener">Resume</a>
          </div>
        </div>
        <div class="hero-photo-wrap">
          <img class="hero-photo" src="assets/hero.webp" alt="Martha Le headshot">
        </div>
      </div>
    </section>

    <section id="work" class="work-section wrap">
      <div class="section-head">
        <p class="eyebrow">Selected Work</p>
        <h2>Featured Projects</h2>
        <p>Case studies from work and coursework: some user-facing, some just for the love of making things.</p>
      </div>
      <div class="work-grid">${cards}</div>
    </section>

    <section id="about" class="about-section">
      <div class="wrap about-inner">
        <img class="about-photo" src="assets/about.webp" alt="Martha Le">
        <div class="about-copy">
          <p class="eyebrow">About Me</p>
          <h2>A little more about me</h2>
          <p>I'm a Sr. Product Associate based in Dallas who likes untangling messy workflows into interfaces that feel obvious in hindsight. My background spans internship work and coursework, from enterprise tools to mobile apps to 3D animation.</p>
          <p>I care most about the parts of a project that don't show up in the final screenshots: the research that shaped a decision, the constraint that led to a simpler flow. I'm always looking for the next problem worth untangling.</p>
        </div>
      </div>
    </section>

    <section id="philosophy" class="philosophy-section wrap">
      <div class="section-head">
        <p class="eyebrow">How I Work</p>
        <h2>Design Philosophy</h2>
        <p>Three principles that guide most of my decisions, big or small.</p>
      </div>
      <div class="philosophy-grid">
        <div class="philosophy-card">
          <p class="philosophy-num">01</p>
          <h3>User-Centered</h3>
          <p class="body">Every decision starts with the person using the product: their goals, context, and constraints shape everything that follows.</p>
        </div>
        <div class="philosophy-card">
          <p class="philosophy-num">02</p>
          <h3>Detail-Oriented</h3>
          <p class="body">The small stuff (spacing, copy, a transition's timing) is what makes a product feel considered instead of just functional.</p>
        </div>
        <div class="philosophy-card">
          <p class="philosophy-num">03</p>
          <h3>Collaborative</h3>
          <p class="body">The best work happens in the open, with engineers, PMs, and users weighing in early and often.</p>
        </div>
      </div>
    </section>

    <section id="skills" class="skills-section wrap">
      <div class="section-head" style="margin-bottom:32px;">
        <p class="eyebrow">Toolkit</p>
        <h2>Skills &amp; Tools</h2>
      </div>
      <div class="skills-list">
        <span class="skill-pill solid">UX Research</span>
        <span class="skill-pill">UI Design</span>
        <span class="skill-pill">Prototyping</span>
        <span class="skill-pill accent">Figma</span>
        <span class="skill-pill">Wireframing</span>
        <span class="skill-pill">Usability Testing</span>
        <span class="skill-pill accent">User Interviews</span>
        <span class="skill-pill">Design Systems</span>
        <span class="skill-pill">Visual Design</span>
        <span class="skill-pill solid">Interaction Design</span>
        <span class="skill-pill">Basic HTML/CSS</span>
        <span class="skill-pill">Presentation &amp; Storytelling</span>
      </div>
    </section>

    <section class="pullquote-section wrap">
      <p>Good design isn't decoration. It's <span class="text-accent">clarity</span>, built one small decision at a time &#10049;</p>
    </section>

    <section id="contact" class="contact-section">
      <div class="contact-inner">
        <h2>Let's build something good together</h2>
        <a class="contact-email" href="mailto:marthale2001@gmail.com">marthale2001@gmail.com</a>
        <div class="contact-links">
          <a href="https://www.linkedin.com/in/marthanle" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/marthanle" target="_blank" rel="noopener">GitHub</a>
          <a href="assets/resume.pdf" target="_blank" rel="noopener">Resume</a>
        </div>
        <div class="contact-foot">
          <span>Martha Le &copy; ${YEAR}</span>
          <span>Made with care in Dallas</span>
        </div>
      </div>
    </section>
  `;
}

// ---- Case-study block renderers ----

function blockStory(b) {
  return `
    <div class="blk">
      ${b.kicker ? `<p class="blk-kicker">${escapeHtml(b.kicker)}</p>` : ''}
      ${b.heading ? `<h3>${escapeHtml(b.heading)}</h3>` : ''}
      <p>${escapeHtml(b.body)}</p>
    </div>`;
}

function blockQuote(b) {
  const points = (b.points || []).map((p, i) => `
    <div>
      <p class="num">${String(i + 1).padStart(2, '0')}</p>
      <p class="text">${escapeHtml(p)}</p>
    </div>`).join('');
  return `
    <div class="blk blk-quote">
      <p class="blk-kicker">${escapeHtml(b.kicker || 'The Problem')}</p>
      <p class="blk-quote-text">"${escapeHtml(b.quote)}"</p>
      <div class="blk-points-grid">${points}</div>
    </div>`;
}

function blockAudience(b) {
  const cards = (b.cards || []).map(c => `
    <div class="audience-card">
      <p class="title">${escapeHtml(c.title)}</p>
      <p class="body">${escapeHtml(c.body)}</p>
    </div>`).join('');
  return `
    <div class="blk">
      <p class="blk-kicker">Who It's For</p>
      <h3>${escapeHtml(b.heading)}</h3>
      <div class="audience-grid">${cards}</div>
    </div>`;
}

function blockDivider(b) {
  return `
    <div class="blk-divider">
      ${b.num ? `<p class="num">${escapeHtml(b.num)}</p>` : ''}
      <div>
        <p class="kicker">${escapeHtml(b.kicker)}</p>
        <p class="title">${escapeHtml(b.title)}</p>
      </div>
    </div>`;
}

function blockImageNote(b) {
  const gallery = (b.images || []).length ? `
    <div class="imagenote-grid">
      ${b.images.map(img => `
        <figure>
          <img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt || '')}" loading="lazy">
          ${img.caption ? `<figcaption>${escapeHtml(img.caption)}</figcaption>` : ''}
        </figure>`).join('')}
    </div>` : '';
  return `
    <div class="blk blk-imagenote">
      <h3>${escapeHtml(b.heading)}</h3>
      <p class="note">${escapeHtml(b.note)}</p>
      ${gallery}
    </div>`;
}

function blockColumns(b) {
  const items = (b.items || []).map(it => `
    <div>
      <p class="title">${escapeHtml(it.title)}</p>
      <p class="body">${escapeHtml(it.body)}</p>
    </div>`).join('');
  return `
    <div class="blk">
      <h3>${escapeHtml(b.heading)}</h3>
      <div class="columns-grid">${items}</div>
    </div>`;
}

function blockFeatures(b) {
  const items = (b.items || []).map(it => `
    <div class="feature-card">
      <p class="title">${escapeHtml(it.title)}</p>
      <p class="body">${escapeHtml(it.body)}</p>
    </div>`).join('');
  return `
    <div class="blk">
      <h3>${escapeHtml(b.heading)}</h3>
      <div class="features-grid">${items}</div>
    </div>`;
}

function blockBeforeAfter(b) {
  return `
    <div class="blk">
      <h3>${escapeHtml(b.heading)}</h3>
      <p class="beforeafter-sub" style="margin-bottom:0;">${escapeHtml(b.title)}</p>
    </div>`;
}

function blockReflection(b) {
  return `
    <div class="reflection-block">
      <p class="blk-kicker accent">Reflection</p>
      <p class="quote">"${escapeHtml(b.quote)}"</p>
      <div class="two-col">
        <div>
          <p class="head">If I Kept Going</p>
          <p class="body">${escapeHtml(b.keepGoing)}</p>
        </div>
        <div>
          <p class="head">What I'd Do Differently</p>
          <p class="body">${escapeHtml(b.differently)}</p>
        </div>
      </div>
    </div>`;
}

function blockWorkingWithAI(b) {
  const helped = (b.helped || []).map(h => `<li>${escapeHtml(h)}</li>`).join('');
  const fellShort = (b.fellShort || []).map(f => `<li>${escapeHtml(f)}</li>`).join('');
  return `
    <div class="blk">
      <p class="blk-kicker">Process, Honestly</p>
      <h3>${escapeHtml(b.heading)}</h3>
      <div class="two-col">
        <div>
          <p class="head">Where It Helped</p>
          <ul>${helped}</ul>
        </div>
        <div>
          <p class="head">Where It Fell Short</p>
          <ul>${fellShort}</ul>
        </div>
      </div>
    </div>`;
}

function blockStyleDirections(b) {
  const dirs = (b.directions || []).map(d => {
    const swatches = (d.palette || []).map(c => `<div class="sw" style="background:${c};"></div>`).join('');
    return `
      <div class="direction-card">
        <div class="head-row">
          <p class="title">${escapeHtml(d.title)}</p>
          ${d.chosen ? `<span class="chosen-badge">Final Direction</span>` : ''}
        </div>
        <p class="sub">${escapeHtml(d.sub)}</p>
        <div class="direction-meta">
          <div class="palette-swatches">${swatches}</div>
          <p class="type">${escapeHtml(d.type)}</p>
        </div>
        <p class="verdict">${escapeHtml(d.verdict)}</p>
      </div>`;
  }).join('');
  return `
    <div class="blk">
      <p class="blk-kicker accent">Style Directions</p>
      <h3>${escapeHtml(b.heading)}</h3>
      <div class="style-directions">${dirs}</div>
      <p class="blend-logic">${escapeHtml(b.blendLogic)}</p>
    </div>`;
}

function blockColorDecision(b) {
  const options = (b.options || []).map(o => {
    const swatches = (o.swatches || []).map(sw => `
      <div class="swatch-item">
        <div class="bar" style="background:${sw.color};"></div>
        <p class="label">${escapeHtml(sw.label)}</p>
      </div>`).join('');
    return `
      <div class="color-option">
        <div class="head-row">
          <p class="title">${escapeHtml(o.title)}</p>
          ${o.chosen ? `<span class="chosen-badge">Chosen</span>` : ''}
        </div>
        <p class="sub">${escapeHtml(o.sub)}</p>
        <div class="swatch-grid">${swatches}</div>
        <p class="verdict">${escapeHtml(o.verdict)}</p>
      </div>`;
  }).join('');
  return `
    <div class="blk">
      <p class="blk-kicker accent">The Color Decision</p>
      <h3>${escapeHtml(b.heading)}</h3>
      <p>${escapeHtml(b.intro)}</p>
      <div class="color-decision-options">${options}</div>
      <div class="two-col">
        <div>
          <p class="head">Why This One</p>
          <p class="body">${escapeHtml(b.criteria)}</p>
        </div>
        <div>
          <p class="head">The Tradeoff I Accepted</p>
          <p class="body">${escapeHtml(b.tradeoff)}</p>
        </div>
      </div>
      <p class="color-decision-close">${escapeHtml(b.close)}</p>
    </div>`;
}

const BLOCK_RENDERERS = {
  story: blockStory,
  quote: blockQuote,
  audience: blockAudience,
  divider: blockDivider,
  imageNote: blockImageNote,
  columns: blockColumns,
  features: blockFeatures,
  beforeAfter: blockBeforeAfter,
  reflectionBlock: blockReflection,
  workingWithAI: blockWorkingWithAI,
  styleDirections: blockStyleDirections,
  colorDecision: blockColorDecision,
};

function renderCase(project) {
  const idx = PROJECTS.findIndex(p => p.id === project.id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const hasBlocks = !!(project.blocks && project.blocks.length);

  const blocksHtml = hasBlocks
    ? project.blocks.map((b, i) => (BLOCK_RENDERERS[b.type] || (() => ''))(b, project.id, i)).join('')
    : '';

  const genericSectionsHtml = !hasBlocks && project.sections
    ? project.sections.map(sec => `
        <div class="case-section">
          <h3>${escapeHtml(sec.heading)}</h3>
          <p>${escapeHtml(sec.body)}</p>
        </div>`).join('')
    : '';

  const learnedHtml = !hasBlocks ? `
    <div class="learned-box">
      <p class="eyebrow">What I Learned</p>
      <p class="body">${escapeHtml(project.reflection)}</p>
    </div>` : '';

  const liveLinkHtml = project.liveUrl ? `
    <a class="case-live-link" href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener">View Live Site &#8599;</a>` : '';

  return `
    <div class="case-page">
      <a class="case-back" href="#/">&larr; All projects</a>
      <span class="tag-chip" style="margin-bottom:16px;display:inline-block;">${escapeHtml(project.tag)}</span>
      <h1>${escapeHtml(project.title)}</h1>
      <div class="case-meta">
        <div><p class="label">Role</p><p class="value">${escapeHtml(project.role)}</p></div>
        <div><p class="label">Timeline</p><p class="value">${escapeHtml(project.timeline)}</p></div>
        <div><p class="label">Tools</p><p class="value">${escapeHtml(project.tools)}</p></div>
      </div>
      ${liveLinkHtml}
      <p class="case-overview">${escapeHtml(project.overview)}</p>
      ${blocksHtml}
      ${genericSectionsHtml}
      ${learnedHtml}
      <div class="next-project">
        <p class="label">Next Project</p>
        <a href="#/case/${next.id}">${escapeHtml(next.title)} &rarr;</a>
      </div>
    </div>`;
}

// ---- Router ----

const app = document.getElementById('app');
const navHome = document.getElementById('nav-home');
const navBack = document.getElementById('nav-back');

// In-page anchors (#work, #about, #contact, ...) should scroll natively,
// not trigger a route re-render that would replace the target mid-scroll.
const ROUTE_HASH = /^#\/(?:case\/[\w-]+)?$/;

function render() {
  const hash = window.location.hash || '#/';
  if (app.childElementCount > 0 && !ROUTE_HASH.test(hash)) return;
  const caseMatch = hash.match(/^#\/case\/([\w-]+)/);
  if (caseMatch) {
    const project = PROJECTS.find(p => p.id === caseMatch[1]);
    if (project) {
      app.innerHTML = renderCase(project);
      navHome.classList.add('hidden');
      navBack.classList.remove('hidden');
      window.scrollTo(0, 0);
      document.title = `${project.title} | Martha Le`;
      return;
    }
  }
  app.innerHTML = renderHome();
  navHome.classList.remove('hidden');
  navBack.classList.add('hidden');
  document.title = 'Martha Le | Product Design Portfolio';
}

window.addEventListener('hashchange', () => { render(); updateScrollProgress(); });
render();

// ---- Scroll progress underline ----

const scrollProgress = document.getElementById('scroll-progress');

function updateScrollProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const pct = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
}

window.addEventListener('scroll', updateScrollProgress, { passive: true });
window.addEventListener('resize', updateScrollProgress);
updateScrollProgress();

// ---- Magnetic nav pill ----

const navPill = document.getElementById('nav-pill');
const navPillLinks = document.querySelectorAll('#nav-home a:not(.nav-resume)');

navPillLinks.forEach((link) => {
  link.addEventListener('mouseenter', () => {
    navPill.style.width = `${link.offsetWidth}px`;
    navPill.style.transform = `translateX(${link.offsetLeft}px)`;
    navPill.style.opacity = '1';
  });
});
navHome.addEventListener('mouseleave', () => { navPill.style.opacity = '0'; });

// ---- Sparkle burst (logo + resume links) ----

function spawnSparkles(x, y) {
  const chars = ['✦', '✧', '❁'];
  const colors = ['var(--accent)', 'oklch(70% 0.09 260)', 'oklch(72% 0.08 150)'];
  for (let i = 0; i < 8; i++) {
    const el = document.createElement('span');
    el.className = 'sparkle-particle';
    el.textContent = chars[Math.floor(Math.random() * chars.length)];
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    const angle = Math.random() * Math.PI * 2;
    const dist = 36 + Math.random() * 40;
    el.style.setProperty('--sx', `${x}px`);
    el.style.setProperty('--sy', `${y}px`);
    el.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
    el.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 700);
  }
}

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('.brand, a[href="assets/resume.pdf"]');
  if (trigger) spawnSparkles(e.clientX, e.clientY);
});
