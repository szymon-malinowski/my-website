import "./App.css";

const Icon = ({ name }: { name: "mail" | "phone" | "pin" | "linkedin" | "github" | "arrow" | "spark" }) => {
  const paths = {
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M6.5 3.5 9 3l2 5-2 1.5a14 14 0 0 0 5 5L15.5 13l5 2 .5 2.5A2 2 0 0 1 19 20C10.7 20 4 13.3 4 5a2 2 0 0 1 2.5-1.5Z" />,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    linkedin: <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 10v6M8 7.5v.01M12 16v-3.2a2.8 2.8 0 0 1 5.6 0V16M12 10v6" /></>,
    github: <path d="M12 3a9 9 0 0 0-2.8 17.6c.45.08.62-.2.62-.44v-1.55c-2.52.55-3.05-1.2-3.05-1.2-.4-1.03-.98-1.3-.98-1.3-.8-.55.06-.54.06-.54.88.06 1.35.9 1.35.9.78 1.35 2.06.96 2.57.73.08-.57.3-.96.55-1.18-2.01-.23-4.13-1-4.13-4.48 0-.99.35-1.8.92-2.43-.1-.23-.4-1.15.09-2.4 0 0 .75-.24 2.47.93A8.6 8.6 0 0 1 12 8.45a8.6 8.6 0 0 1 2.25.3c1.72-1.17 2.47-.93 2.47-.93.49 1.25.18 2.17.09 2.4.57.63.92 1.44.92 2.43 0 3.49-2.12 4.24-4.14 4.47.33.29.62.84.62 1.7v2.53c0 .24.16.52.63.43A9 9 0 0 0 12 3Z" />,
    arrow: <><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></>,
    spark: <><path d="m12 3 1.6 6.4L20 11l-6.4 1.6L12 19l-1.6-6.4L4 11l6.4-1.6L12 3Z" /><path d="m19 17 .5 2 2 .5-2 .5-.5 2-.5-2-2-.5 2-.5.5-2Z" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
};

const experience = [
  { dates: "03.2025 — 07.2025", role: "Office assistant", company: "NEUE ARBEIT der Diakonie Essen gGmbH", place: "Essen", detail: "Supported day-to-day office operations and kept administrative work moving smoothly." },
  { dates: "07.2023 — 07.2024", role: "Reception assistant", company: "Arbeit und Bildung Essen GmbH", place: "Essen", detail: "Welcomed visitors and supported reception and front-desk operations." },
  { dates: "01.2023 — 06.2023", role: "Professional perspective programme", company: "Weststadt Akademie GmbH", place: "Essen", detail: "Built professional confidence and explored the next step toward a career in technology." },
];

const education = [
  ["12.2025 — present", "Full Stack Web Developer", "DCI Digital Career Institute GmbH", "Remote"],
  ["09.2021 — 06.2022", "German language course, B2", "Volkshochschule Essen", "Essen"],
  ["05.2016 — 03.2017", "Web Developer training", "ILS Institut für Lernsysteme GmbH", "Remote"],
  ["02.2013 — 02.2014", "Intermediate secondary school certificate", "Volkshochschule Essen", "Essen"],
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <div className="section-title"><span>{children}</span></div>;
}

function App() {
  return <main>
    <nav className="nav"><a className="brand" href="#top"><span className="brand-mark">SM</span><span>Szymon Malinowski</span></a><div className="nav-links"><a href="#about">About</a><a href="#experience">Experience</a><a href="#education">Education</a><a className="nav-cta" href="mailto:szymon.malinowski@gmx.de">Contact <Icon name="arrow" /></a></div></nav>

    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> Available for a web development internship</p><h1>Building the web<br /><em>with purpose.</em></h1><p className="hero-intro">I’m Szymon, a Full Stack Web Developer in training based in Essen. I enjoy turning thoughtful ideas into clear, accessible, and useful digital experiences.</p><div className="hero-actions"><a className="button button-dark" href="#experience">Explore my journey <Icon name="arrow" /></a><a className="text-link" href="mailto:szymon.malinowski@gmx.de">Get in touch <Icon name="arrow" /></a></div></div><div className="hero-side"><img className="portrait-placeholder" src="/mein-foto.jpg" alt="Portrait of Szymon Malinowski" /></div></section>

    <section className="contact-strip"><a href="mailto:szymon.malinowski@gmx.de"><Icon name="mail" /> szymon.malinowski@gmx.de</a><a href="tel:+491781423666"><Icon name="phone" /> +49 178 1423 666</a><span><Icon name="pin" /> Essen, Germany</span><a href="https://linkedin.com/in/szymon-malinowski" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a><a href="https://github.com/szymon-malinowski" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a></section>

    <section className="content-grid" id="about"><aside><SectionTitle>Profile</SectionTitle><p className="profile-copy">Full Stack Web Developer currently completing a one-year full-time training programme. Looking for a new challenge where I can bring together, apply, and deepen my skills as a web developer.</p><SectionTitle>Skills</SectionTitle><div className="skill-list">{["HTML", "CSS", "TypeScript", "React", "MS Office"].map(skill => <span key={skill}>{skill}</span>)}</div><SectionTitle>Languages</SectionTitle><div className="language-list"><p><strong>Polish</strong><span>Native</span></p><p><strong>English</strong><span>B2</span></p><p><strong>German</strong><span>B2</span></p></div><SectionTitle>Certificates</SectionTitle><div className="certificates"><p><strong>German</strong> <span>B2</span></p><p><strong>ILS certificate</strong> <span>Web Developer</span></p><p><strong>Intermediate secondary school certificate</strong></p></div></aside>

      <div className="main-column"><div id="experience"><SectionTitle>Experience</SectionTitle><div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.company}><div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div><div><p className="dates">{item.dates} <span>· {item.place}</span></p><h3>{item.role}</h3><p className="company">{item.company}</p><p className="detail">{item.detail}</p></div></article>)}</div></div><div id="education" className="education"><SectionTitle>Education</SectionTitle><div className="education-list">{education.map(item => <article key={item[1]}><p className="dates">{item[0]} <span>· {item[3]}</span></p><h3>{item[1]}</h3><p className="company">{item[2]}</p></article>)}</div></div><section className="interests"><SectionTitle>Hobbies</SectionTitle><div className="interest-tags"><span>Books</span><span>Programming</span><span>Video games</span></div></section></div>
    </section>
    <footer><span>© 2026 Szymon Malinowski</span><span>Made with curiosity in Essen <span className="footer-heart">♥</span></span></footer>
  </main>;
}

export default App;
