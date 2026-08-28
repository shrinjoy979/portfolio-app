
const roles = ["FULL-STACK ENGINEER","WEB3","AI"];
const marqueeItems = ["REACT","NEXT.JS","NODE.JS","TYPESCRIPT","PHP","LARAVEL","SQL","MONGODB","SOLANA","WEB3.JS","RUST","IONIC"];
const heroLabels = ["React","Next.js","Node.js","TypeScript","Laravel","MongoDB","Solana","GraphQL","MUI","PostgreSQL","JavaScript","PHP"];

const experience = [
  {idx:"01",company:"TetriQ Solutions",loc:"Remote",range:"NOV 2023 — PRESENT",
   positions:[
     {pos:"Full Stack Developer",type:"Full-time",date:"NOV 2023 — PRESENT",
      bullets:[
        "Enhanced full-stack web applications using ReactJS, Node.js, TypeScript, MongoDB and GraphQL to deliver seamless user experiences.",
        "Built MUI components for design consistency across 10+ features, optimizing loading time by 40%.",
        "Optimized integration of external APIs and libraries, resulting in a 20% performance increase in data loading."
      ], tech:["ReactJS","Node.js","TypeScript","MongoDB","GraphQL","MUI"]},
   ]},
  {idx:"02",company:"Think201",loc:"Bangalore, India",range:"AUG 2019 — SEP 2023",
   positions:[
     {pos:"Software Engineer",type:"Full-time",date:"DEC 2019 — SEP 2023",
      bullets:[
        "Engineered full-stack web applications using Next.js, ReactJS, Node.js, Angular, MUI, PHP, Laravel, SQL, MongoDB and Python — a 25% increase in user satisfaction scores.",
        "Delivered technical mentorship to three junior developers on coding and performance best practices, improving code efficiency across 10 key features."
      ], tech:["Next.js","ReactJS","Angular","Laravel","MongoDB","Python","Ionic"]},
     {pos:"Software Engineer",type:"Internship",date:"AUG 2019 — DEC 2019",
      bullets:[
        "Engineered front-end/back-end integration with JavaScript, PHP and Laravel, reducing page load times by 30% for 10,000+ monthly visitors.",
        "Shipped high-impact UI features, increasing daily active sessions by 300+ interactions weekly."
      ], tech:["JavaScript","PHP","Laravel"]},
   ]},
  {idx:"03",company:"Betalogics Consultancy Services",loc:"Kolkata, India",range:"FEB 2019 — AUG 2019",
   positions:[
     {pos:"Software Engineer",type:"Internship",date:"FEB 2019 — AUG 2019",
      bullets:[
        "Designed mobile-responsive web pages, built APIs and managed relational databases with SQL — improved loading times by 30%.",
        "Worked directly with clients on project goals, reducing coding errors by 25% through targeted solutions."
      ], tech:["SQL","REST APIs","Responsive Web"]},
   ]},
];

const projects = [
  {size:"large",cat:"WEB3 / GAMING",title:"SNAKESWIN",desc:"A real-time multiplayer Snake & Ladder game where players place bets using Solana — the winner takes double the bet amount in Solana rewards, classic gameplay underneath.",tech:["React","Node.js","Web3.js","Solana"],live:true,liveUrl:"https://snake-win.vercel.app/",gh:true,ghUrl:"https://github.com/shrinjoy979/multiplayer-snake-and-ladder-game-frontend-web3",badge:"HACKATHON WINNER"},
  {size:"medium",cat:"WEB3 / SOLANA",title:"SOLi",desc:"Custom token creation, airdrop requests, Solana transfers, message signing and token swaps, plus a companion Chrome extension.",tech:["React","Web3.js","Solana","Tailwind CSS"],live:true,liveUrl:"https://sol-i.vercel.app/",gh:true,ghUrl:"https://github.com/shrinjoy979/SOLi"},
  {size:"small",cat:"AI / APP BUILDER",title:"LOVABLE CLONE",desc:"AI-powered app builder inspired by Lovable — build apps through chat with live preview, streaming AI, file editing, and downloadable codebases.",tech:["Next.js","React","TypeScript","Express","Tailwind CSS"],live:true,liveUrl:"https://lovable-shrinjoy.vercel.app/",gh:true,ghUrl:"https://github.com/shrinjoy979/lovable-clone"},
  {size:"small",cat:"AI / COMPUTER VISION",title:"AI OBJECT DETECTOR",desc:"An algorithm that distinguishes persons from non-persons in real time with 90% accuracy.",tech:["Next.js","TensorFlow"],live:true,liveUrl:"https://ai-object-detector.vercel.app/",gh:true,ghUrl:"https://github.com/shrinjoy979/ai-object-detector-nextjs"},
  {size:"small",cat:"AI / LLM",title:"TINYLLAMA LORA FINE-TUNE",desc:"Fine-tuned TinyLlama with LoRA — custom dataset prep, Hugging Face training, and inference on a parameter-efficient adapter.",tech:["Python","PyTorch","Hugging Face","LoRA"],gh:true,ghUrl:"https://github.com/shrinjoy979/llm-fine-tuning-with-tinyllama-lora"},
  {size:"small",cat:"AI / CLI TOOL",title:"CLAUDE CODING AGENT",desc:"A TypeScript coding agent powered by Claude that reads, writes, and edits files, lists directories, and runs commands through a simple agent loop.",tech:["TypeScript","Node.js","Claude API"],gh:true,ghUrl:"https://github.com/shrinjoy979/claude-coding-agent"},
  {size:"small",cat:"AI / CLI TOOL",title:"CHATGPT CLI CHATBOT",desc:"A command-line chatbot using the ChatGPT API to process queries and enhance the developer workflow.",tech:["Node.js","OpenAI API"],gh:true,ghUrl:"https://github.com/shrinjoy979/chatgpt-chatbot-using-nodejs"},
  {size:"small",cat:"RUST",title:"100+ RUST PROBLEMS",desc:"100 Rust practice problems covering fundamentals, intermediate concepts, and async programming — with test-based evaluation.",tech:["Rust","Cargo"],gh:true,ghUrl:"https://github.com/shrinjoy979/rust-assignments-problems"},
];

const skills = [
  {cat:"Languages",items:["JavaScript","TypeScript","PHP","SQL"]},
  {cat:"Frameworks",items:["React","Next.js","Node.js","Laravel","Angular","Ionic"]},
  {cat:"UI / Styling",items:["MUI","Tailwind CSS","Bootstrap","jQuery"]},
  {cat:"Data",items:["MongoDB","PostgreSQL","GraphQL"]},
  {cat:"Web3",items:["Solana","Web3.js"]},
  {cat:"Currently Learning",items:["Rust","Flutter"]},
];

const education = [
  {school:"Liverpool John Moores University",degree:"Master of Science",meta:"2024 — 2025"},
  {school:"Dr. Sudhir Chandra Sur Degree Engineering College",degree:"B.Tech, Computer Science & Engineering",meta:"KOLKATA, INDIA · 2015 — 2019"},
];

const achievements = [
  {title:"100xDEVS HACKATHON WINNER",desc:"Won the 100xDevs Hackathon bounty for building an innovative project end to end under time pressure.",year:"HACKATHON"},
  {title:"LED PLATFORM RE-ARCHITECTURE",desc:"Re-architected a core platform serving 100,000+ requests per month, improving speed by 20%.",year:"TETRIQ SOLUTIONS"},
  {title:"MENTORED 3 JUNIOR ENGINEERS",desc:"Delivered technical mentorship on coding and performance best practices, lifting code efficiency across 10 key features.",year:"THINK201"},
];

function el(tag, cls, html){ const e=document.createElement(tag); if(cls) e.className=cls; if(html!==undefined) e.innerHTML=html; return e; }

// bolds standalone metrics like "40%", "10+", "100,000+" inside bullet text
function boldStats(text){
  return text.replace(/\b\d[\d,]*(\.\d+)?(%|\+)/g, '<strong class="stat-strong">$&</strong>');
}

// ---------- duration calculator ----------
const MONTHS = {jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};
function parseMonthYear(str){
  str = str.trim();
  if(/present/i.test(str)){
    const now = new Date();
    return now.getFullYear()*12 + now.getMonth();
  }
  const [mon, yr] = str.split(/\s+/);
  const m = MONTHS[mon.slice(0,3).toLowerCase()];
  return parseInt(yr,10)*12 + m;
}
// "NOV 2023 — PRESENT" -> "2 yrs 9 mos" (inclusive of both start and end month, matching LinkedIn's convention)
function formatDuration(rangeStr){
  const [startStr, endStr] = rangeStr.split(/—|-/);
  const start = parseMonthYear(startStr);
  const end = parseMonthYear(endStr);
  const totalMonths = end - start + 1;
  const yrs = Math.floor(totalMonths / 12);
  const mos = totalMonths % 12;
  const parts = [];
  if(yrs > 0) parts.push(`${yrs} yr${yrs===1?'':'s'}`);
  if(mos > 0 || yrs===0) parts.push(`${mos} mo${mos===1?'':'s'}`);
  return parts.join(' ');
}

// ---------- theme toggle ----------
(function initTheme(){
  // Defaults to light regardless of OS preference; the toggle still lets
  // the visitor switch to dark and back.
  document.documentElement.setAttribute('data-theme', 'light');
})();
function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
}
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);

const roleWrap = document.getElementById('role-cycle-inner');
let roleI = 0;
function renderRole(){
  const old = roleWrap.querySelector('span.word');
  if(old) old.remove();
  const span = el('span', 'word', roles[roleI]);
  span.style.opacity = 0; span.style.transform='translateY(20px)'; span.style.transition='opacity .4s ease, transform .4s ease';
  roleWrap.appendChild(span);
  requestAnimationFrame(()=>{ span.style.opacity=1; span.style.transform='translateY(0)'; });
}
renderRole();
setInterval(()=>{ roleI=(roleI+1)%roles.length; renderRole(); }, 2200);

const track = document.getElementById('marquee-track');
[...marqueeItems, ...marqueeItems].forEach(item=>{
  track.appendChild(el('span','word',item));
  track.appendChild(el('span','dot','◆'));
});

// duplicate the showcase set at runtime (not in the HTML source) so the
// embedded media isn't shipped twice — this keeps the file small while
// still giving a seamless infinite-scroll illusion. The clone is appended
// as a SIBLING of the original set (inside .showcase-track), not nested
// inside it, and the exact pixel gap between the two sets is measured so
// the CSS translateX shift lines up perfectly — no overlap, no jump.
(function(){
  const showcaseTrack = document.getElementById('showcase-track');
  const showcaseSet = document.getElementById('showcase-set');
  if(!showcaseTrack || !showcaseSet) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion) return;

  const clone = showcaseSet.cloneNode(true);
  clone.removeAttribute('id');
  Array.from(clone.querySelectorAll('video')).forEach(v=>{ v.removeAttribute('autoplay'); v.pause(); });
  showcaseTrack.appendChild(clone);

  function setShift(){
    const shift = clone.offsetLeft - showcaseSet.offsetLeft;
    if(shift > 0) showcaseTrack.style.setProperty('--showcase-shift', shift + 'px');
  }
  // measure after layout settles (images/video affect width as they load)
  window.requestAnimationFrame(setShift);
  window.addEventListener('load', setShift);
})();

const hv = document.getElementById('hero-visual');
const hvNodes = [];
heroLabels.forEach((label,i)=>{
  const x = 8 + ((i*41)%80);
  const y = 10 + ((i*57)%78);
  const depth = 0.25 + (i%4)*0.15;
  const node = el('span','hv-label',label);
  node.style.left = x+'%'; node.style.top = y+'%';
  hv.appendChild(node);
  hvNodes.push({el:node, depth});
});
document.getElementById('hero').addEventListener('mousemove', (e)=>{
  const rect = hv.getBoundingClientRect();
  const mx = (e.clientX - rect.left)/rect.width;
  const my = (e.clientY - rect.top)/rect.height;
  hvNodes.forEach(n=>{
    const dx = (mx-0.5)*26*n.depth, dy=(my-0.5)*26*n.depth;
    n.el.style.transform = `translate(${dx}px,${dy}px)`;
  });
});

const expList = document.getElementById('exp-list');
experience.forEach((exp,i)=>{
  const row = el('div','exp-row reveal'+(i===0?' open':''));
  const primaryTitle = exp.positions[0].pos;
  const uniqueTypes = [...new Set(exp.positions.map(p=>p.type))];
  const typeLine = uniqueTypes.join(' and ');
  const duration = formatDuration(exp.range);

  const positionsHtml = exp.positions.map((p, pi) => `
    <div class="exp-position${exp.positions.length > 1 ? ' has-line' : ''}">
      ${exp.positions.length > 1 ? '<span class="exp-position-dot"></span>' : ''}
      <div class="exp-position-body">
        ${exp.positions.length > 1 ? `
          <div class="exp-position-head">
            <span class="exp-position-title">${p.pos}</span>
            <span class="exp-position-type">${p.type}</span>
            <span class="exp-position-date">${p.date} · ${formatDuration(p.date)}</span>
          </div>
        ` : ''}
        <ul>${p.bullets.map(b=>`<li>${boldStats(b)}</li>`).join('')}</ul>
        <div>${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');

  row.innerHTML = `
    <button class="exp-head">
      <span class="exp-idx">${exp.idx}</span>
      <span class="exp-mid">
        <span><span class="exp-company">${exp.company}</span><br/><span class="exp-pos">${primaryTitle}</span><div class="exp-type-line">${typeLine}</div><div class="exp-loc">${exp.loc}</div></span>
        <span><span class="exp-date">${exp.range}</span><div class="exp-duration">${duration}</div></span>
      </span>
      <span class="exp-plus">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </span>
    </button>
    <div class="exp-body"><div class="exp-body-inner">
      ${positionsHtml}
    </div></div>
  `;
  row.querySelector('.exp-head').addEventListener('click', ()=>{
    const wasOpen = row.classList.contains('open');
    document.querySelectorAll('.exp-row').forEach(r=>r.classList.remove('open'));
    if(!wasOpen) row.classList.add('open');
  });
  expList.appendChild(row);
});

const projGrid = document.getElementById('proj-grid');
projects.forEach((p,i)=>{
  const card = el('article','card '+p.size+' reveal');
  card.innerHTML = `
    <div class="card-top">
      <span style="font-family:var(--mono); font-size:.72rem; color:var(--mute-dark);">${String(i+1).padStart(2,'0')}</span>
      ${p.badge?`<span class="badge"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4z"/><path d="M7 5H4a2 2 0 0 0 0 4h.5M17 5h3a2 2 0 0 1 0 4h-.5"/></svg>${p.badge}</span>`:''}
    </div>
    <div class="eyebrow" style="margin-top:2rem; border:none;">${p.cat}</div>
    <h3>${p.title}
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
    </h3>
    <p class="desc">${p.desc}</p>
    <div class="tech-wrap">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
    <div class="card-links">
      ${p.live?`<a class="live" href="${p.liveUrl||'#'}" ${p.liveUrl?'target="_blank" rel="noopener"':'onclick="return false;"'}>Live Demo ↗</a>`:''}
      ${p.gh?`<a class="gh" href="${p.ghUrl||'#'}" ${p.ghUrl?'target="_blank" rel="noopener"':'onclick="return false;"'}>⌥ GitHub</a>`:''}
    </div>
  `;
  if(p.ghUrl){
    card.setAttribute('role','link');
    card.tabIndex = 0;
    const openRepo = ()=> window.open(p.ghUrl, '_blank', 'noopener');
    card.addEventListener('click', (e)=>{
      if(e.target.closest('a')) return;
      openRepo();
    });
    card.addEventListener('keydown', (e)=>{
      if(e.target.closest('a')) return;
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        openRepo();
      }
    });
  }
  projGrid.appendChild(card);
});

const skillsGrid = document.getElementById('skills-grid');
skills.forEach(group=>{
  const wrap = el('div','');
  wrap.appendChild(el('h3','',group.cat));
  const tagWrap = el('div','');
  group.items.forEach(s=> tagWrap.appendChild(el('span','skill-tag',s)));
  wrap.appendChild(tagWrap);
  skillsGrid.appendChild(wrap);
});

const eduGrid = document.getElementById('edu-grid');
education.forEach(ed=>{
  const card = el('div','edu-card');
  card.innerHTML = `<h3>${ed.school}</h3><div class="edu-degree">${ed.degree}</div><div class="edu-meta">${ed.meta}</div>`;
  eduGrid.appendChild(card);
});

const achGrid = document.getElementById('ach-grid');
achievements.forEach(a=>{
  const card = el('div','ach-card reveal');
  card.innerHTML = `<h3>${a.title}</h3><div class="desc">${a.desc}</div><div class="ach-year">${a.year}</div>`;
  achGrid.appendChild(card);
});

// ---------- live GitHub feed ----------
const GITHUB_USERNAME = 'shrinjoy979';
// Repo cards under the contribution graph (e.g. rust-programs, care-stake-solana).
// Set false to hide them; the heatmap still syncs live.
const SHOW_GITHUB_REPO_CARDS = false;
// Optional extra filter when cards are on: skip these repo names.
const HIDDEN_GITHUB_REPOS = [];

function renderContributionGrid(contributions){
  const gridCal = document.getElementById('grid-cal');
  const monthsRow = document.getElementById('grid-cal-months');
  gridCal.innerHTML = ''; monthsRow.innerHTML = '';

  const byDate = {};
  contributions.forEach(d=> byDate[d.date] = d);

  const today = new Date();
  const end = new Date(today);
  end.setDate(end.getDate() + (6 - end.getDay())); // align to this week's Saturday
  const start = new Date(end);
  start.setDate(start.getDate() - (53 * 7 - 1));

  for(let w=0; w<53; w++){
    const week = el('div','week');
    let monthLabel = '';
    for(let d=0; d<7; d++){
      const dt = new Date(start);
      dt.setDate(start.getDate() + w*7 + d);
      if(dt.getDate() === 1) monthLabel = dt.toLocaleString('en-US', {month:'short'});
      const iso = dt.toISOString().slice(0,10);
      const cell = el('div','cell');
      if(dt > today){
        cell.style.visibility = 'hidden';
      } else {
        const entry = byDate[iso];
        const count = entry ? entry.count : 0;
        const lvl = entry ? Math.min(entry.level ?? (count > 0 ? 1 : 0), 4) : 0;
        if(lvl > 0){ cell.style.background = 'var(--accent)'; cell.style.opacity = String(0.22 + lvl*0.2); }
        cell.title = `${count} contribution${count===1?'':'s'} on ${iso}`;
      }
      week.appendChild(cell);
    }
    gridCal.appendChild(week);
    monthsRow.appendChild(el('span', '', monthLabel));
  }
}

function renderRepoCards(repos){
  const repoGrid = document.getElementById('repo-grid');
  if(!SHOW_GITHUB_REPO_CARDS){
    repoGrid.style.display = 'none';
    repoGrid.innerHTML = '';
    return;
  }
  repoGrid.style.display = '';
  repoGrid.innerHTML = '';
  if(!repos.length){
    repoGrid.innerHTML = '<p style="font-family:var(--mono); font-size:.8rem; color:var(--mute-dark); padding:1.5rem; grid-column:1/-1;">No public repositories found.</p>';
    return;
  }
  repos.forEach(r=>{
    const a = el('a','repo-card');
    a.href = r.html_url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.innerHTML = `
      <div class="repo-top"><span class="name">${r.name}</span><span class="stars"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${r.stargazers_count}</span></div>
      <div class="desc">${r.description ? r.description : 'No description provided.'}</div>
      <div class="lang">${r.language || '—'}</div>
    `;
    repoGrid.appendChild(a);
  });
}

async function loadGitHubData(){
  const liveLabel = document.getElementById('os-live-label');
  const note = document.getElementById('os-note');
  try{
    const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`);
    let repos = [];
    if(SHOW_GITHUB_REPO_CARDS){
      const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
      if(!reposRes.ok) throw new Error('GitHub API request failed');
      repos = await reposRes.json();
    }

    const contribJson = contribRes.ok ? await contribRes.json() : null;
    const contributions = contribJson && Array.isArray(contribJson.contributions) ? contribJson.contributions : [];

    const hidden = new Set(HIDDEN_GITHUB_REPOS);
    const topRepos = Array.isArray(repos)
      ? repos.filter(r => !r.fork && !hidden.has(r.name)).sort((a,b) => (b.stargazers_count||0) - (a.stargazers_count||0)).slice(0,4)
      : [];
    renderRepoCards(topRepos);
    renderContributionGrid(contributions);

    liveLabel.textContent = 'LIVE FROM GITHUB';
    note.textContent = `Synced with github.com/${GITHUB_USERNAME} · ${new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}`;
  } catch(err){
    liveLabel.textContent = 'LIVE SYNC UNAVAILABLE';
    note.textContent = 'Could not reach the GitHub API right now — check your connection or github.com/' + GITHUB_USERNAME + ' directly.';
    renderContributionGrid([]);
    renderRepoCards([]);
  }
}
loadGitHubData();

// ---------- copy-to-clipboard buttons (email, Discord username, ...) ----------
function initCopyButton(btn){
  if(!btn) return;
  let resetTimer = null;
  const baseLabel = btn.getAttribute('aria-label') || 'Copy';
  btn.addEventListener('click', async ()=>{
    const value = btn.getAttribute('data-copy');
    try{
      if(navigator.clipboard && window.isSecureContext){
        await navigator.clipboard.writeText(value);
      } else {
        const ta = document.createElement('textarea');
        ta.value = value; ta.style.position = 'fixed'; ta.style.opacity = '0';
        document.body.appendChild(ta); ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      btn.classList.add('copied');
      btn.setAttribute('aria-label', 'Copied');
      clearTimeout(resetTimer);
      resetTimer = setTimeout(()=>{
        btn.classList.remove('copied');
        btn.setAttribute('aria-label', baseLabel);
      }, 1600);
    } catch(err){
      // clipboard unavailable — surrounding link/text still shows the value
    }
  });
}
initCopyButton(document.getElementById('copy-email-btn'));

const cursor = document.getElementById('cursor');
if(!window.matchMedia('(pointer: coarse)').matches){
  document.addEventListener('mousemove', (e)=>{
    cursor.style.transform = `translate(${e.clientX}px,${e.clientY}px) translate(-50%,-50%) rotate(45deg)`;
  });
  document.addEventListener('mouseover', (e)=>{
    const card = e.target.closest('.card');
    const interactive = e.target.closest('a, button');
    if(card){ cursor.style.width='40px'; cursor.style.height='40px'; }
    else if(interactive){ cursor.style.width='20px'; cursor.style.height='20px'; }
    else { cursor.style.width='8px'; cursor.style.height='8px'; }
  });
}

window.addEventListener('scroll', ()=>{
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  document.getElementById('progress').style.width = scrolled+'%';
  document.getElementById('site-header').classList.toggle('scrolled', h.scrollTop > 40);
});

const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
hamburgerBtn.addEventListener('click', ()=>{
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden':'';
  hamburgerBtn.innerHTML = mobileMenu.classList.contains('open')
    ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>'
    : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>';
});
document.querySelectorAll('#mobile-menu button').forEach(b=>{
  b.addEventListener('click', ()=>{ mobileMenu.classList.remove('open'); document.body.style.overflow=''; });
});

function scrollToId(id){
  document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  mobileMenu.classList.remove('open');
  document.body.style.overflow='';
}

const sectionIds = ['about','experience','projects','skills','education','open-source','contact'];
const spyObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      document.querySelectorAll('.nav-links button').forEach(b=>b.classList.remove('active'));
      const btn = document.querySelector(`.nav-links button[data-target="${entry.target.id}"]`);
      if(btn) btn.classList.add('active');
    }
  });
}, {rootMargin:'-40% 0px -50% 0px'});
sectionIds.forEach(id=>{ const s=document.getElementById(id); if(s) spyObserver.observe(s); });

const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('in'); revealObserver.unobserve(entry.target); }
  });
}, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.reveal').forEach(elx=> revealObserver.observe(elx));

const statObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const target = entry.target;
      const count = target.dataset.count;
      if(count){
        const suffix = target.dataset.suffix || '';
        const dur = 1300; const start = performance.now(); const num = parseInt(count,10);
        function tick(now){
          const p = Math.min((now-start)/dur,1);
          const eased = 1-Math.pow(1-p,3);
          target.textContent = Math.round(eased*num)+suffix;
          if(p<1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
      statObserver.unobserve(target);
    }
  });
}, {threshold:.4});
document.querySelectorAll('.stat-num[data-count]').forEach(elx=> statObserver.observe(elx));
