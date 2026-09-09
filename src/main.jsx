import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, BarChart3, Menu, Play, Users, X } from 'lucide-react';
import './styles.css';
import './credentials.css';

const officialLogo = '/suirside-logo.svg';
const whiteLogo = '/suirside-logo-white.svg';
const heroImage = 'https://suirside.com/wp-content/uploads/2021/11/DJI_0062-1-975x700.jpg';
const fallbackProject = 'https://suirside.com/wp-content/uploads/2021/11/DJI_0062-1-975x700.jpg';

const projects = [
  { title: 'Respond Housing – Ferrybank', category: 'Residential', place: 'Waterford', image: 'https://suirside.com/wp-content/uploads/2021/11/DJI_0062-1-975x700.jpg' },
  { title: 'Dore Optical', category: 'Commercial', place: 'Ireland', image: 'https://suirside.com/wp-content/uploads/2022/09/DSC01505.jpg' },
  { title: 'IDA Waterford', category: 'Commercial', place: 'Waterford', image: 'https://suirside.com/wp-content/uploads/2022/03/r-72.jpg' },
  { title: 'Bausch + Lomb — CSA', category: 'Pharmaceutical', place: 'Waterford', image: 'https://suirside.com/wp-content/uploads/2020/08/Bausch-lomb.jpeg' },
  { title: 'Walsh Park Redevelopment', category: 'Sport / Leisure', place: 'Waterford', image: 'https://suirside.com/wp-content/uploads/2024/10/Walsh-Park-2.jpg' },
  { title: 'EirGen Pharma', category: 'Pharmaceutical', place: 'Waterford', image: fallbackProject },
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

function Logo({ dark = false }) {
  return <div className="logo-wrap"><img src={dark ? whiteLogo : officialLogo} alt="Suirside Construction Ltd" /></div>;
}

function App() {
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('All');
  const [activeMilestone, setActiveMilestone] = React.useState(milestones.length - 1);
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
  const active = milestones[activeMilestone];

  return <div className="site">
    <div className="concept-bar">SPECULATIVE WEBSITE CONCEPT BY DESIGNOVATION — NOT AN OFFICIAL SUIRSIDE WEBSITE</div>
    <header className="header"><a href="#top" className="header-logo"><Logo /></a><button className="menu-button" aria-label="Open menu" onClick={() => setOpen(true)}><span>MENU</span><Menu size={25} strokeWidth={1.8} /></button></header>
    {open && <div className="menu-overlay"><div className="menu-head"><Logo dark /><button className="close-button" onClick={() => setOpen(false)} aria-label="Close menu"><X size={28} /></button></div><nav>{['Projects', 'Services', 'About Suirside', 'People', 'Quality & Safety', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setOpen(false)}>{item}<ArrowUpRight size={22} /></a>)}</nav><div className="menu-foot"><span>Waterford · Ireland</span><span>Building Quality. Earning Trust.</span></div></div>}

    <main id="top">
      <section className="hero"><img className="hero-image" src={heroImage} onError={(e) => { e.currentTarget.src = fallbackProject; }} alt="Suirside construction project" /><div className="hero-overlay" /><div className="hero-content"><div className="eyebrow">MAIN CONTRACTOR · SOUTH EAST IRELAND</div><h1>Building quality.<br /><span>Earning trust.</span></h1><p>Commercial, residential, pharmaceutical, conservation, joinery & fitout.</p><div className="hero-actions"><a href="#projects" className="button button-orange">Explore projects <ArrowUpRight size={18} /></a><a href="#video" className="play-link"><Play size={15} fill="currentColor" /> Watch film</a></div></div><div className="hero-meta"><span>01 / 01</span><span>SUIRSIDE CONSTRUCTION LTD</span></div></section>
      <section className="credentials"><div className="section-label">CREDENTIALS</div><div className="credential-grid">{['SafeTcert', 'Construction Industry Federation', 'CIRI', 'Construction Conservation Heritage Award', 'ISO 9001:2015'].map((item) => <div className="credential" key={item}>{item}</div>)}</div></section>
      <section className="intro"><div className="section-label">01 / THE COMPANY</div><div className="intro-copy"><h2>Built for complex projects. <em>Trusted for the long term.</em></h2><p>Suirside is a Waterford-based main contractor delivering commercial, residential, pharmaceutical, conservation and fitout projects across Ireland.</p><a className="text-link" href="#about-suirside">Meet the team <ArrowUpRight size={17} /></a></div></section>

      <section className="proof-section" aria-label="Why work with Suirside">
        <div className="proof-intro"><div className="section-label">02 / WHY SUIRSIDE</div><h2>Big enough to deliver.<br /><em>Close enough to care.</em></h2><p>Strong resources, an experienced in-house team and proven project systems give clients the confidence to build with Suirside.</p></div>
        <div className="proof-grid">
          <article className="proof-card"><div className="proof-icon"><BarChart3 size={28} strokeWidth={1.7} /></div><div className="proof-stat">€9.5<span>M</span></div><div className="proof-label">Annual turnover</div><p>Continued growth and the resources to support complex projects from planning through completion.</p></article>
          <article className="proof-card"><div className="proof-icon"><Users size={28} strokeWidth={1.7} /></div><div className="proof-stat">30<span>+</span></div><div className="proof-label">People in-house</div><p>A dedicated team that takes pride in its work and stays close to every project.</p></article>
          <article className="proof-card proof-card-dark"><div className="proof-icon"><span className="procore-mark">P</span></div><div className="proof-stat proof-word">PROCORE</div><div className="proof-label">Project management</div><p>Project information and teams brought together in one system to make better decisions faster.</p><a href="https://www.procore.com/" target="_blank" rel="noreferrer" className="proof-link">Project delivery system <ArrowUpRight size={16} /></a></article>
        </div>
      </section>

      <section id="video" className="video-section"><div className="video-frame"><iframe src="https://player.vimeo.com/video/480718359?h=ba1b62ad5f&badge=0&autopause=0&player_id=0&app_id=58479" title="Suirside - ABOUT US" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe><div className="video-caption"><span>PROJECT FILM</span><strong>Suirside — About Us</strong><a href="https://vimeo.com/480718359/ba1b62ad5f" target="_blank" rel="noreferrer">Open film <ArrowUpRight size={16} /></a></div></div></section>
      <section id="projects" className="projects-section"><div className="section-top"><div><div className="section-label">03 / PROJECTS</div><h2>Selected work.</h2></div><a className="text-link" href="https://suirside.com/projects/">View all projects <ArrowUpRight size={17} /></a></div><div className="filters">{categories.map((c) => <button key={c} className={filter === c ? 'active' : ''} onClick={() => setFilter(c)}>{c}</button>)}</div><div className="project-grid">{filtered.map((project, i) => <article className={`project-card ${i % 3 === 0 ? 'project-large' : ''}`} key={project.title}><div className="project-image"><img src={project.image} onError={(e) => { e.currentTarget.src = fallbackProject; }} alt="" /><span className="project-index">{String(i + 1).padStart(2, '0')}</span></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.place}</p></div><span>{project.category}</span></div></article>)}</div></section>
      <section id="services" className="services-section"><div className="section-label">04 / CAPABILITY</div><div className="services-head"><h2>Key construction<br /><em>services.</em></h2><p>Commercial, residential, pharmaceutical, conservation, PSCS / EHS, joinery and fitout — delivered by a highly trained team.</p></div><div className="service-list">{['Commercial Construction', 'Pharmaceutical', 'Residential', 'Conservation', 'PSCS / EHS', 'Joinery & Fitout'].map((s, i) => <div className="service-row" key={s}><span>0{i + 1}</span><strong>{s}</strong><ArrowUpRight size={22} /></div>)}</div></section>
      <section id="about-suirside" className="people-section"><div className="section-label">05 / PEOPLE</div><div className="people-head"><h2>The people<br /><em>behind the build.</em></h2><p>Senior management is actively involved in every project, backed by a skilled in-house team.</p></div><div className="people-grid">{people.map(([name, role]) => <article className="person" key={name}><div className="portrait"><span>{name.split(' ').map((n) => n[0]).join('')}</span></div><div><h3>{name}</h3><p>{role}</p></div></article>)}</div></section>
      <section className="timeline-section"><div className="section-label">06 / SINCE 2007</div><div className="timeline-head"><h2>A history of<br /><em>building forward.</em></h2><p>Explore the moments that shaped Suirside from 2007 to ISO 9001:2015 certification.</p></div><div className="timeline-interactive"><div className="timeline-years" role="tablist" aria-label="Suirside company timeline">{milestones.map(([year], i) => <button key={`${year}-${i}`} className={i === activeMilestone ? 'active' : ''} onClick={() => setActiveMilestone(i)} role="tab" aria-selected={i === activeMilestone}><span>{year}</span><i /></button>)}</div><div className="timeline-detail" role="tabpanel"><div className="timeline-detail-year">{active[0]}</div><div><h3>{active[1]}</h3><p>{active[2]}</p></div><div className="timeline-counter">{String(activeMilestone + 1).padStart(2, '0')} / {String(milestones.length).padStart(2, '0')}</div></div></div></section>
      <section id="quality-&-safety" className="standards-section"><div className="section-label">07 / QUALITY & SAFETY</div><div className="standards-copy"><h2>Built on <em>standards.</em></h2><p>Safety, quality and responsible construction are integral to the way Suirside plans, manages and delivers work.</p></div><div className="standards-grid">{['ISO 9001:2015', 'SafeTcert', 'Health & Safety', 'Environmental Responsibility'].map((s) => <div key={s}>{s}<ArrowUpRight size={20} /></div>)}</div></section>
      <section id="contact" className="contact-section"><div className="section-label">08 / START A CONVERSATION</div><h2>Have a project<br /><em>in mind?</em></h2><a href="mailto:info@suirside.com" className="button button-orange large-button">Talk to Suirside <ArrowUpRight size={20} /></a><div className="contact-details"><span>+353 51 307 044</span><span>info@suirside.com</span><span>Waterford · Ireland</span></div></section>
    </main>
    <footer className="footer"><Logo dark /><div className="footer-right"><span>Building Quality. Earning Trust.</span><span>Speculative concept by Designovation</span></div></footer>
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
