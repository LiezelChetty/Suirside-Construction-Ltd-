import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Menu, Play, Users, X } from 'lucide-react';
import './styles.css';
import './credentials.css';

const officialLogo = '/suirside-logo.svg';
const whiteLogo = '/suirside-logo-white.svg';
const heroImage = 'https://suirside.com/wp-content/uploads/2021/11/DJI_0062-1-975x700.jpg';
const fallbackProject = 'https://suirside.com/wp-content/uploads/2021/11/DJI_0062-1-975x700.jpg';
const mobileHeroVideo = '/mobile-suirside-2021-lite.mp4';

const projects = [
  { title: 'Respond Housing – Ferrybank', category: 'Residential', place: 'Abbey Road, Ferrybank, Waterford', image: 'https://suirside.com/wp-content/uploads/2021/11/DJI_0062-1-975x700.jpg', url: 'https://suirside.com/respond-housing-waterford/' },
  { title: 'Dore Optical', category: 'Commercial', place: 'Waterford Road, Co. Kilkenny', image: 'https://suirside.com/wp-content/uploads/2022/09/ScreenShot2022-08-24at12.33.07.jpg', url: 'https://suirside.com/dore-optical/' },
  { title: 'IDA Waterford', category: 'Fitout', place: 'IDA Industrial Estate, Waterford', image: 'https://suirside.com/wp-content/uploads/2022/03/r-72.jpg', url: 'https://suirside.com/ida-waterford/' },
  { title: 'Bausch + Lomb', category: 'Pharmaceutical', place: 'Waterford', image: 'https://suirside.com/wp-content/uploads/2020/08/Bausch-lomb.jpeg', url: 'https://suirside.com/bausch-and-lomb/' },
  { title: 'Walsh Park Redevelopment — Phase 1', category: 'Sport / Leisure', place: 'Keanes Road, Waterford', image: 'https://suirside.com/wp-content/uploads/2024/01/DJI_0006.jpg', url: 'https://suirside.com/walsh-park-redevelopment-phase-1/' },
  { title: 'EirGen Pharma', category: 'Pharmaceutical', place: 'Waterford City', image: 'https://suirside.com/wp-content/uploads/2020/07/EirGen-Westside-e1721830338650.jpg', url: 'https://suirside.com/eirgen-pharma/' },
];

const categories = ['All', 'Commercial', 'Conservation', 'Educational', 'Fitout', 'Marine', 'Pharmaceutical', 'Residential', 'Sport / Leisure'];
const people = [['Eddie Doherty', 'Managing Director'], ['Ned Doherty', 'Operations Director'], ['Sean Dower', 'Contracts Manager'], ['Enda Cummins', 'Construction Manager']];
const milestones = [
  ['2007', 'Suirside Construction was founded in Waterford.', 'The beginning of the company’s journey in the South East.'],
  ['2013', 'Became a Limited Company.', 'Suirside formalised its growth as the business expanded.'],
  ['2013', 'Completed its first project over €1 million.', 'A significant step in project scale and capability.'],
  ['2014', 'Moved to Airport Business Park.', 'A new base supported the growing construction team.'],
  ['2014', 'Awarded its first Public Sector contract.', 'A milestone in Suirside’s public-sector experience.'],
  ['2015', 'Started its first Pharmaceutical contract with Bausch + Lomb.', 'Beginning a specialist sector track record that continues today.'],
  ['2017', 'Introduced Procore project management.', 'Technology became part of the company’s project delivery approach.'],
  ['2018', 'Reached 28 employees.', 'The in-house team reached its highest recorded headcount at that point.'],
  ['2019', 'Reached its highest annual turnover.', 'A marker of continued growth in the business.'],
  ['2020', 'Introduced a new Health & Safety management system.', 'Strengthening safety management across the company.'],
  ['2021', 'Awarded the Excellence in Construction Conservation Award.', 'Recognition for specialist conservation work.'],
  ['2022', 'Secured Phase 1 of the Walsh Park redevelopment.', 'A major Waterford project adding to the company’s sports portfolio.'],
  ['2023', 'Moved into a larger Airport Business Park premises.', 'The new premises supported the expanding construction team.'],
  ['2024', 'Achieved ISO 9001:2015 certification.', 'Formal recognition of Suirside’s commitment to quality management.'],
];

const heroSlides = [
  {
    label: '01 / HOME',
    eyebrow: 'MAIN CONTRACTOR · SOUTH EAST IRELAND',
    title: <>Building quality.<br /><span>Earning trust.</span></>,
    copy: 'Commercial, residential, pharmaceutical, conservation, joinery & fitout.',
    image: heroImage,
    cta: 'Explore projects',
    href: '#projects',
  },
  {
    label: '02 / ABOUT US',
    eyebrow: 'WATERFORD · ESTABLISHED 2007',
    title: <>Built in Waterford.<br /><span>Trusted nationwide.</span></>,
    copy: 'A Waterford-based main contractor with an experienced in-house team and a proven record across complex projects.',
    image: 'https://suirside.com/wp-content/uploads/2021/11/DJI_0041-975x700.jpg',
    cta: 'About Suirside',
    href: '#about-suirside',
  },
  {
    label: '03 / SERVICES',
    eyebrow: 'CONSTRUCTION · FITOUT · PROJECT DELIVERY',
    title: <>From first brief.<br /><span>To final handover.</span></>,
    copy: 'Commercial, residential, pharmaceutical, conservation, PSCS / EHS, joinery and fitout.',
    image: 'https://suirside.com/wp-content/uploads/2022/09/ScreenShot2022-08-24at12.33.07.jpg',
    cta: 'View services',
    href: '#services',
    mobileVideo: true,
  },
];

function Logo({ dark = false }) {
  return <div className="logo-wrap"><img src={dark ? whiteLogo : officialLogo} alt="Suirside Construction Ltd" /></div>;
}

function ProcoreLogo() {
  return <img className="procore-logo" src="https://images.ctfassets.net/8pep15rt0kef/4oLg1KCm8PfBkfS0h2hhQa/c2373ccd56d1210271a3f4bd082383d3/procore-logo.svg" alt="Procore" />;
}

function App() {
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('All');
  const [activeMilestone, setActiveMilestone] = React.useState(milestones.length - 1);
  const [heroSlide, setHeroSlide] = React.useState(0);
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const active = milestones[activeMilestone];

  React.useEffect(() => {
    const timer = window.setInterval(() => setHeroSlide((current) => (current + 1) % heroSlides.length), 7500);
    return () => window.clearInterval(timer);
  }, []);

  const previousHero = () => setHeroSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  const nextHero = () => setHeroSlide((current) => (current + 1) % heroSlides.length);

  return <div className="site">
    <style>{`
      .hero-slider{position:absolute;inset:0;overflow:hidden}
      .hero-slide{position:absolute;inset:0;display:flex;align-items:flex-end;transition:opacity .8s ease,visibility .8s ease}
      .hero-slide-bg{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform 1.2s ease}
      .hero-slide.active .hero-slide-bg{transform:scale(1.02)}
      .hero-slide-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(20,21,22,.86) 0%,rgba(20,21,22,.46) 48%,rgba(20,21,22,.08) 100%),linear-gradient(0deg,rgba(0,0,0,.68),transparent 55%)}
      .hero-slide-content{position:relative;z-index:2;width:100%}
      .hero-dots{position:absolute;z-index:8;right:42px;bottom:72px;display:flex;gap:8px}
      .hero-dot{width:34px;height:3px;border:0;padding:0;background:rgba(255,255,255,.32);cursor:pointer;transition:background .3s ease,width .3s ease}
      .hero-dot.active{background:#f58220;width:52px}
      .hero-arrows{position:absolute;z-index:8;right:42px;top:50%;display:flex;gap:7px;transform:translateY(-50%)}
      .hero-arrow{width:42px;height:42px;border:1px solid rgba(255,255,255,.38);background:rgba(20,21,22,.16);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;backdrop-filter:blur(5px)}
      .hero-arrow:hover{background:#f58220;color:#17191b;border-color:#f58220}
      .hero-slide-count{position:absolute;right:42px;top:28px;z-index:8;color:#fff;font-size:8px;font-weight:700;letter-spacing:.16em}
      .hero-service-video{display:none}
      .procore-logo{width:min(100%,230px);height:auto;display:block;filter:brightness(0) invert(1)}
      .proof-card-dark .proof-icon{padding:8px}
      .proof-card-dark .procore-logo{filter:none}
      @media(max-width:720px){
        .hero-arrows{right:20px;top:auto;bottom:88px;transform:none}
        .hero-dots{left:6vw;right:auto;bottom:32px}
        .hero-slide-count{right:20px;top:22px}
        .hero-slide .hero-image-desktop{display:block}
        .hero-slide.services-slide .hero-image-desktop{display:none}
        .hero-service-video{display:block;position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
        .hero-slide-overlay{background:linear-gradient(90deg,rgba(20,21,22,.86),rgba(20,21,22,.24)),linear-gradient(0deg,rgba(0,0,0,.72),transparent 60%)}
        .hero-content{padding-bottom:128px}
        .hero h1{font-size:clamp(45px,13vw,72px)}
        .hero p{font-size:13px}
        .hero-actions{gap:16px}
        .hero-meta{bottom:18px;left:6vw;right:6vw}
      }
    `}</style>
    <div className="concept-bar">SPECULATIVE WEBSITE CONCEPT BY DESIGNOVATION — NOT AN OFFICIAL SUIRSIDE WEBSITE</div>
    <header className="header"><a href="#top" className="header-logo"><Logo /></a><button className="menu-button" aria-label="Open menu" onClick={() => setOpen(true)}><span>MENU</span><Menu size={25} strokeWidth={1.8} /></button></header>
    {open && <div className="menu-overlay"><div className="menu-head"><Logo dark /><button className="close-button" onClick={() => setOpen(false)} aria-label="Close menu"><X size={28} /></button></div><nav>{['Projects', 'Services', 'About Suirside', 'People', 'Quality & Safety', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setOpen(false)}>{item}<ArrowUpRight size={22} /></a>)}</nav><div className="menu-foot"><span>Waterford · Ireland</span><span>Building Quality. Earning Trust.</span></div></div>}

    <main id="top">
      <section className="hero">
        <div className="hero-slider" aria-label="Suirside homepage feature slides">
          {heroSlides.map((slide, index) => <div key={slide.label} className={`hero-slide ${index === heroSlide ? 'active' : ''} ${slide.mobileVideo ? 'services-slide' : ''}`} style={{ opacity: index === heroSlide ? 1 : 0, visibility: index === heroSlide ? 'visible' : 'hidden', pointerEvents: index === heroSlide ? 'auto' : 'none' }}>
            <img className="hero-slide-bg hero-image-desktop" src={slide.image} alt="" onError={(e) => { e.currentTarget.src = fallbackProject; }} />
            {slide.mobileVideo && <video className="hero-service-video" src={mobileHeroVideo} autoPlay muted loop playsInline preload="metadata" aria-label="Suirside mobile services film" />}
            <div className="hero-slide-overlay" />
            <div className="hero-slide-content"><div className="hero-content"><div className="eyebrow">{slide.eyebrow}</div><h1>{slide.title}</h1><p>{slide.copy}</p><div className="hero-actions"><a href={slide.href} className="button button-orange">{slide.cta} <ArrowUpRight size={18} /></a>{index === 0 && <a href="#video" className="play-link"><Play size={15} fill="currentColor" /> Watch film</a>}</div></div></div>
            <div className="hero-meta"><span>{slide.label}</span><span>SUIRSIDE CONSTRUCTION LTD</span></div>
          </div>)}
          <div className="hero-slide-count">{String(heroSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}</div>
          <div className="hero-arrows"><button className="hero-arrow" onClick={previousHero} aria-label="Previous slide"><ArrowLeft size={17} /></button><button className="hero-arrow" onClick={nextHero} aria-label="Next slide"><ArrowRight size={17} /></button></div>
          <div className="hero-dots">{heroSlides.map((slide, index) => <button key={slide.label} className={`hero-dot ${index === heroSlide ? 'active' : ''}`} onClick={() => setHeroSlide(index)} aria-label={`Show ${slide.label}`} />)}</div>
        </div>
      </section>

      <section className="credentials"><div className="section-label">CREDENTIALS</div><div className="credential-grid">{['SafeTcert', 'Construction Industry Federation', 'CIRI', 'Construction Conservation Heritage Award', 'ISO 9001:2015'].map((item) => <div className="credential" key={item}>{item}</div>)}</div></section>
      <section className="intro"><div className="section-label">01 / THE COMPANY</div><div className="intro-copy"><h2>Built for complex projects. <em>Trusted for the long term.</em></h2><p>Suirside is a Waterford-based main contractor delivering commercial, residential, pharmaceutical, conservation and fitout projects across Ireland.</p><a className="text-link" href="#about-suirside">Meet the team <ArrowUpRight size={17} /></a></div></section>

      <section className="proof-section" aria-label="Why work with Suirside">
        <div className="proof-intro"><div className="section-label">02 / WHY SUIRSIDE</div><h2>Big enough to deliver.<br /><em>Close enough to care.</em></h2><p>Strong resources, an experienced in-house team and proven project systems give clients the confidence to build with Suirside.</p></div>
        <div className="proof-grid">
          <article className="proof-card"><div className="proof-icon"><BarChart3 size={28} strokeWidth={1.7} /></div><div className="proof-stat">€9.5<span>M</span></div><div className="proof-label">Annual turnover</div><p>Continued growth and the resources to support complex projects from planning through completion.</p></article>
          <article className="proof-card"><div className="proof-icon"><Users size={28} strokeWidth={1.7} /></div><div className="proof-stat">30<span>+</span></div><div className="proof-label">People in-house</div><p>A dedicated team that takes pride in its work and stays close to every project.</p></article>
          <article className="proof-card proof-card-dark"><div className="proof-icon"><ProcoreLogo /></div><div className="proof-stat proof-word">PROCORE</div><div className="proof-label">Project management</div><p>Project information and teams brought together in one system to make better decisions faster.</p><a href="https://www.procore.com/" target="_blank" rel="noreferrer" className="proof-link">Project delivery system <ArrowUpRight size={16} /></a></article>
        </div>
      </section>

      <section id="video" className="video-section"><div className="video-frame"><iframe src="https://player.vimeo.com/video/480718359?h=ba1b62ad5f&badge=0&autopause=0&player_id=0&app_id=58479" title="Suirside - ABOUT US" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe><div className="video-caption"><span>PROJECT FILM</span><strong>Suirside — About Us</strong><a href="https://vimeo.com/480718359/ba1b62ad5f" target="_blank" rel="noreferrer">Open film <ArrowUpRight size={16} /></a></div></div></section>
      <section id="projects" className="projects-section"><div className="section-top"><div><div className="section-label">03 / PROJECTS</div><h2>Selected work.</h2></div><a className="text-link" href="https://suirside.com/projects/">View all projects <ArrowUpRight size={17} /></a></div><div className="filters">{categories.map((c) => <button key={c} className={filter === c ? 'active' : ''} onClick={() => setFilter(c)}>{c}</button>)}</div><div className="project-grid">{filtered.map((project, i) => <article className={`project-card ${i % 3 === 0 ? 'project-large' : ''}`} key={project.title}><a href={project.url} target="_blank" rel="noreferrer" className="project-card-link" aria-label={`View ${project.title}`}><div className="project-image"><img src={project.image} onError={(e) => { e.currentTarget.src = fallbackProject; }} alt={project.title} /><span className="project-index">{String(i + 1).padStart(2, '0')}</span><span className="project-view">View project <ArrowUpRight size={16} /></span></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.place}</p></div><span>{project.category}</span></div></a></article>)}</div></section>
      <section id="services" className="services-section"><div className="section-label">04 / CAPABILITY</div><div className="services-head"><h2>Key construction<br /><em>services.</em></h2><p>Commercial, residential, pharmaceutical, conservation, joinery and fitout — delivered by a highly trained team.</p></div><div className="service-list">{['Commercial Construction', 'Pharmaceutical', 'Residential', 'Conservation', 'PSCS / EHS', 'Joinery & Fitout'].map((s, i) => <div className="service-row" key={s}><span>0{i + 1}</span><strong>{s}</strong><ArrowUpRight size={22} /></div>)}</div></section>
      <section id="about-suirside" className="people-section"><div className="section-label">05 / PEOPLE</div><div className="people-head"><h2>The people<br /><em>behind the build.</em></h2><p>Senior management is actively involved in every project, backed by a skilled in-house team.</p></div><div className="people-grid">{people.map(([name, role]) => <article className="person" key={name}><div className="portrait"><span>{name.split(' ').map((n) => n[0]).join('')}</span></div><div><h3>{name}</h3><p>{role}</p></div></article>)}</div></section>
      <section className="timeline-section"><div className="section-label">06 / SINCE 2007</div><div className="timeline-head"><h2>A history of<br /><em>building forward.</em></h2><p>Explore the moments that shaped Suirside from 2007 to ISO 9001:2015 certification.</p></div><div className="timeline-interactive"><div className="timeline-years" role="tablist" aria-label="Suirside company timeline">{milestones.map(([year], i) => <button key={`${year}-${i}`} className={i === activeMilestone ? 'active' : ''} onClick={() => setActiveMilestone(i)} role="tab" aria-selected={i === activeMilestone}><span>{year}</span><i /></button>)}</div><div className="timeline-detail" role="tabpanel"><div className="timeline-detail-year">{active[0]}</div><div><h3>{active[1]}</h3><p>{active[2]}</p></div><div className="timeline-counter">{String(activeMilestone + 1).padStart(2, '0')} / {String(milestones.length).padStart(2, '0')}</div></div></div></section>
      <section id="quality-&-safety" className="standards-section"><div className="section-label">07 / QUALITY & SAFETY</div><div className="standards-copy"><h2>Built on <em>standards.</em></h2><p>Safety, quality and responsible construction are integral to the way Suirside plans, manages and delivers work.</p></div><div className="standards-grid">{['ISO 9001:2015', 'SafeTcert', 'Health & Safety', 'Environmental Responsibility'].map((s) => <div key={s}>{s}<ArrowUpRight size={20} /></div>)}</div></section>
      <section id="contact" className="contact-section"><div className="section-label">08 / START A CONVERSATION</div><h2>Have a project<br /><em>in mind?</em></h2><a href="mailto:info@suirside.com" className="button button-orange large-button">Talk to Suirside <ArrowUpRight size={20} /></a><div className="contact-details"><span>+353 51 307 044</span><span>info@suirside.com</span><span>Waterford · Ireland</span></div></section>
    </main>
    <footer className="footer"><Logo dark /><div className="footer-right"><span>Building Quality. Earning Trust.</span><span>Speculative concept by Designovation</span></div></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
