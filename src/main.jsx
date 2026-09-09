import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ChevronDown, Menu, Play, X } from 'lucide-react';
import './styles.css';

const heroImage = 'https://suirside.com/wp-content/uploads/2024/10/Quest-Cork-2.jpg';
const fallbackProject = 'https://suirside.com/wp-content/uploads/2024/10/Quest-Cork-2.jpg';
const officialLogo = 'https://suirside.com/wp-content/uploads/2021/02/logo.png';

const projects = [
  { title: 'EPA Headquarters', category: 'Commercial', place: 'Johnstown Castle Estate, Co. Wexford', image: 'https://suirside.com/wp-content/uploads/2026/02/EPA-Headquarters.jpg' },
  { title: 'Walsh Park Redevelopment', category: 'Sport / Leisure', place: 'Waterford', image: 'https://suirside.com/wp-content/uploads/2024/10/Walsh-Park-2.jpg' },
  { title: 'Bausch + Lomb — CSA', category: 'Pharmaceutical', place: 'Waterford', image: 'https://suirside.com/wp-content/uploads/2024/10/Bausch-Lomb-2.jpg' },
  { title: 'Waterford Gallery of Art', category: 'Conservation', place: 'Waterford', image: 'https://suirside.com/wp-content/uploads/2024/10/Waterford-Gallery-of-Art-2.jpg' },
  { title: 'Quest Cork', category: 'Commercial', place: 'Cork', image: fallbackProject },
  { title: 'EirGen Pharma', category: 'Pharmaceutical', place: 'Waterford', image: fallbackProject },
];

const categories = ['All', 'Commercial', 'Conservation', 'Educational', 'Fitout', 'Marine', 'Pharmaceutical', 'Residential', 'Sport / Leisure'];

const people = [
  ['Eddie Doherty', 'Managing Director'],
  ['Ned Doherty', 'Operations Director'],
  ['Sean Dower', 'Contracts Manager'],
  ['Enda Cummins', 'Construction Manager'],
];

const milestones = [
  ['2007', 'Suirside Construction founded in Waterford'],
  ['2013', 'Suirside Construction Ltd established'],
  ['2014', 'First public-sector contract'],
  ['2015', 'First pharmaceutical contract with Bausch + Lomb'],
  ['2017', 'Procore project management introduced'],
  ['2020', 'New Health & Safety management system'],
  ['2021', 'Excellence in Construction Conservation Award'],
  ['2022', 'Walsh Park redevelopment'],
  ['2023', 'New Airport Business Park premises'],
  ['2024', 'ISO 9001:2015 certification'],
];

function Logo({ dark = false }) {
  return (
    <div className={`logo-wrap ${dark ? 'logo-dark' : ''}`}>
      <img src={officialLogo} alt="Suirside Construction Ltd" />
    </div>
  );
}

function App() {
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="site">
      <div className="concept-bar">SPECULATIVE WEBSITE CONCEPT BY DESIGNOVATION — NOT AN OFFICIAL SUIRSIDE WEBSITE</div>

      <header className="header">
        <a href="#top" className="header-logo"><Logo /></a>
        <button className="menu-button" aria-label="Open menu" onClick={() => setOpen(true)}>
          <span>MENU</span><Menu size={25} strokeWidth={1.8} />
        </button>
      </header>

      {open && (
        <div className="menu-overlay">
          <div className="menu-head"><Logo dark /><button className="close-button" onClick={() => setOpen(false)} aria-label="Close menu"><X size={28} /></button></div>
          <nav>
            {['Projects', 'Services', 'About Suirside', 'People', 'Quality & Safety', 'News', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setOpen(false)}>{item}<ArrowUpRight size={22} /></a>
            ))}
          </nav>
          <div className="menu-foot"><span>Waterford · Ireland</span><span>Building Quality. Earning Trust.</span></div>
        </div>
      )}

      <main id="top">
        <section className="hero">
          <img className="hero-image" src={heroImage} onError={(e) => { e.currentTarget.src = fallbackProject; }} alt="Suirside construction project" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow">MAIN CONTRACTOR · SOUTH EAST IRELAND</div>
            <h1>Building quality.<br /><span>Earning trust.</span></h1>
            <p>Commercial, residential, pharmaceutical, conservation, joinery & fitout.</p>
            <div className="hero-actions"><a href="#projects" className="button button-orange">Explore projects <ArrowUpRight size={18} /></a><a href="#video" className="play-link"><Play size={15} fill="currentColor" /> Watch film</a></div>
          </div>
          <div className="hero-meta"><span>01 / 01</span><span>SUIRSIDE CONSTRUCTION LTD</span></div>
        </section>

        <section className="credentials">
          <div className="section-label">CREDENTIALS</div>
          <div className="credential-grid">
            {['SafeTcert', 'Construction Industry Federation', 'CIRI', 'Public Sector Excellence Award', 'ISO 9001:2015'].map((item) => <div className="credential" key={item}>{item}</div>)}
          </div>
        </section>

        <section className="intro">
          <div className="section-label">01 / THE COMPANY</div>
          <div className="intro-copy">
            <h2>Built for complex projects. <em>Trusted for the long term.</em></h2>
            <p>Suirside is a Waterford-based main contractor delivering commercial, residential, pharmaceutical, conservation and fitout projects across Ireland.</p>
            <a className="text-link" href="#about-suirside">About Suirside <ArrowUpRight size={17} /></a>
          </div>
        </section>

        <section id="video" className="video-section">
          <div className="video-placeholder">
            <img src={heroImage} alt="Project film placeholder" />
            <div className="video-overlay" />
            <div className="video-center"><span><Play size={22} fill="currentColor" /></span><small>PROJECT FILM</small></div>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-top"><div><div className="section-label">02 / PROJECTS</div><h2>Selected work.</h2></div><a className="text-link" href="https://suirside.com/projects/">View all projects <ArrowUpRight size={17} /></a></div>
          <div className="filters">{categories.map((c) => <button key={c} className={filter === c ? 'active' : ''} onClick={() => setFilter(c)}>{c}</button>)}</div>
          <div className="project-grid">{filtered.map((project, i) => (
            <article className={`project-card ${i % 3 === 0 ? 'project-large' : ''}`} key={project.title}>
              <div className="project-image"><img src={project.image} onError={(e) => { e.currentTarget.src = fallbackProject; }} alt="" /><span className="project-index">0{i + 1}</span></div>
              <div className="project-info"><div><h3>{project.title}</h3><p>{project.place}</p></div><span>{project.category}</span></div>
            </article>
          ))}</div>
        </section>

        <section id="services" className="services-section">
          <div className="section-label">03 / CAPABILITY</div>
          <div className="services-head"><h2>Key construction<br /><em>services.</em></h2><p>From complex live environments to conservation and specialist fitout, the same focus on programme, quality and delivery runs through every project.</p></div>
          <div className="service-list">{['Commercial Construction', 'Pharmaceutical', 'Residential', 'Conservation', 'Joinery & Fitout', 'Marine & Civil'].map((s, i) => <div className="service-row" key={s}><span>0{i + 1}</span><strong>{s}</strong><ArrowUpRight size={22} /></div>)}</div>
        </section>

        <section id="about-suirside" className="people-section">
          <div className="section-label">04 / PEOPLE</div>
          <div className="people-head"><h2>The people<br /><em>behind the build.</em></h2><p>Leadership, delivery and construction expertise brought together around every project.</p></div>
          <div className="people-grid">{people.map(([name, role]) => <article className="person" key={name}><div className="portrait"><span>{name.split(' ').map((n) => n[0]).join('')}</span></div><div><h3>{name}</h3><p>{role}</p></div></article>)}</div>
        </section>

        <section className="timeline-section">
          <div className="section-label">05 / SINCE 2007</div>
          <div className="timeline-head"><h2>A history of<br /><em>building forward.</em></h2><p>More than a decade of project delivery, new capabilities and long-term relationships.</p></div>
          <div className="timeline">{milestones.map(([year, copy]) => <div className="milestone" key={year}><strong>{year}</strong><span>{copy}</span></div>)}</div>
        </section>

        <section id="quality-&-safety" className="standards-section">
          <div className="section-label">06 / QUALITY & SAFETY</div>
          <div className="standards-copy"><h2>Built on <em>standards.</em></h2><p>Safety, quality and responsible construction are integral to the way Suirside plans, manages and delivers work.</p></div>
          <div className="standards-grid">{['ISO 9001:2015', 'SafeTcert', 'Health & Safety', 'Environmental Responsibility'].map((s) => <div key={s}>{s}<ArrowUpRight size={20} /></div>)}</div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-label">07 / START A CONVERSATION</div>
          <h2>Have a project<br /><em>in mind?</em></h2>
          <a href="mailto:info@suirside.com" className="button button-orange large-button">Talk to Suirside <ArrowUpRight size={20} /></a>
          <div className="contact-details"><span>+353 51 307 044</span><span>info@suirside.com</span><span>Waterford · Ireland</span></div>
        </section>
      </main>

      <footer className="footer">
        <Logo dark />
        <div className="footer-right"><span>Building Quality. Earning Trust.</span><span>Speculative concept by Designovation</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
