import "./App.css";
import { Icon } from "./components/atoms/Icon";
import { SectionTitle } from "./components/atoms/SectionTitle";
import portrait from "./assets/my-photo.jpg";

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

function App() {
  return <main>
    <nav className="nav"><a className="brand" href="#top"><span className="brand-mark">SM</span><span>Szymon Malinowski</span></a><div className="nav-links"><a href="#about">About</a><a href="#experience">Experience</a><a href="#education">Education</a><a className="nav-cta" href="mailto:szymon.malinowski@gmx.de">Contact <Icon name="arrow" /></a></div></nav>

    <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow"><span className="eyebrow-dot" /> Available for a web development internship</p><h1>Building the web<br /><em>with purpose.</em></h1><p className="hero-intro">I’m Szymon, a Full Stack Web Developer in training based in Essen. I’m looking for an internship from November to February where I can apply and deepen my web development skills.</p><div className="hero-actions"><a className="button button-dark" href="#experience">Explore my journey <Icon name="arrow" /></a><a className="text-link" href="mailto:szymon.malinowski@gmx.de">Get in touch <Icon name="arrow" /></a></div></div><div className="hero-side"><img className="portrait-placeholder" src={portrait} alt="Portrait of Szymon Malinowski" /></div></section>

    <section className="contact-strip"><a href="mailto:szymon.malinowski@gmx.de"><Icon name="mail" /> szymon.malinowski@gmx.de</a><a href="tel:+491781423666"><Icon name="phone" /> +49 178 1423 666</a><span><Icon name="pin" /> Essen, Germany</span><a href="https://linkedin.com/in/szymon-malinowski" target="_blank" rel="noreferrer"><Icon name="linkedin" /> LinkedIn</a><a href="https://github.com/szymon-malinowski" target="_blank" rel="noreferrer"><Icon name="github" /> GitHub</a></section>

    <section className="content-grid" id="about"><aside><SectionTitle>Profile</SectionTitle><p className="profile-copy">Full Stack Web Developer currently completing a one-year full-time training programme. Looking for a new challenge where I can bring together, apply, and deepen my skills as a web developer.</p><SectionTitle>Skills</SectionTitle><div className="skill-list">{["HTML", "CSS", "TypeScript", "React", "MS Office"].map(skill => <span key={skill}>{skill}</span>)}</div><SectionTitle>Languages</SectionTitle><div className="language-list"><p><strong>Polish</strong><span>Native</span></p><p><strong>English</strong><span>B2</span></p><p><strong>German</strong><span>B2</span></p></div><SectionTitle>Certificates</SectionTitle><div className="certificates"><p><strong>German</strong> <span>B2</span></p><p><strong>ILS certificate</strong> <span>Web Developer</span></p><p><strong>Intermediate secondary school certificate</strong></p></div></aside>

      <div className="main-column"><div id="experience"><SectionTitle>Experience</SectionTitle><div className="timeline">{experience.map((item, index) => <article className="timeline-item" key={item.company}><div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div><div><p className="dates">{item.dates} <span>· {item.place}</span></p><h3>{item.role}</h3><p className="company">{item.company}</p><p className="detail">{item.detail}</p></div></article>)}</div></div><div id="education" className="education"><SectionTitle>Education</SectionTitle><div className="education-list">{education.map(item => <article key={item[1]}><p className="dates">{item[0]} <span>· {item[3]}</span></p><h3>{item[1]}</h3><p className="company">{item[2]}</p></article>)}</div></div><section className="interests"><SectionTitle>Hobbies</SectionTitle><div className="interest-tags"><span>Books</span><span>Programming</span><span>Video games</span></div></section></div>
    </section>
    <footer><span>© 2026 Szymon Malinowski</span><span>Made with curiosity in Essen <span className="footer-heart">♥</span></span></footer>
  </main>;
}

export default App;
