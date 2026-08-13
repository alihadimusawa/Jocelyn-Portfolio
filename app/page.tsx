import Image from "next/image";
import { ArrowIcon } from "./components/icons";
import { ProcessProgress } from "./components/process-progress";
import { ProjectWall } from "./components/project-wall";
import { projects } from "./data/projects";
import portraitImage from "@/public/images/jocelyn-portrait-placeholder.png";

const services = [
  { title: "Interior Design", note: "Concept to completion" },
  { title: "Space Planning", note: "Flow, function, proportion" },
  { title: "3D Visualization", note: "See it before build" },
  { title: "Renovation Design", note: "Existing space, reimagined" },
  { title: "Furniture & Material Selection", note: "Details that belong" },
  { title: "Project Consultation", note: "Clear next decisions" },
];

const process = [
  "Consultation",
  "Concept",
  "Design Development",
  "3D Visualization",
  "Construction",
  "Final Result",
];

function Eyebrow({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="eyebrow"><span>{index}</span>{children}</p>
  );
}

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero" id="top">
        <div className="hero-portrait">
          <Image
            src={portraitImage}
            alt="Temporary editorial portrait placeholder for Jocelyn; replace with her real photograph"
            fill
            preload
            placeholder="blur"
            sizes="(max-width: 820px) 100vw, 52vw"
          />
          <p className="portrait-note">Portrait placeholder</p>
        </div>

        <div className="hero-content">
          <div className="hero-role">
            <span>Interior Designer</span>
            <span>Bandung · ID</span>
          </div>

          <h1 aria-label="Jocelyn Quinella">
            <span className="word-mask"><span>Jocelyn</span></span>
            <span className="word-mask hero-last-name"><span>Quinella</span></span>
          </h1>

          <div className="hero-summary">
            <p>Thoughtful interiors<br />for everyday life.</p>
            <div className="hero-actions">
              <a className="action action-solid" href="#projects">
                View projects <span aria-hidden="true">↓</span>
              </a>
              <a
                className="action action-outline"
                href="https://drive.google.com/file/d/1_hJMKX5bak-BXuEqiWAPcjr6c_O2oSNb/view"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Jocelyn Quinella’s CV on Google Drive (opens in a new tab)"
              >
                View CV <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-facts">
            <span><strong>02</strong> years experience</span>
            <span><strong>BINUS</strong> 2022—2026</span>
            <span><strong>KINDAI</strong> exchange · Japan</span>
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">JQ / 2026</div>
      </section>

      <section className="intro-strip" aria-label="Introduction">
        <p>Space shapes how we live.</p>
        <span>Quiet, useful, human.</span>
      </section>

      <section className="project-showcase" id="projects">
        <div className="showcase-heading" data-reveal>
          <Eyebrow index="01">Selected projects</Eyebrow>
          <h2>Selected<br /><em>work.</em></h2>
          <div className="project-count"><strong>{String(projects.length).padStart(2, "0")}</strong><span>Projects<br />2023—TBA</span></div>
        </div>
        <ProjectWall projects={projects} />
      </section>

      <section className="profile-section" id="profile">
        <div className="profile-layout">
          <aside className="profile-intro" data-reveal>
            <Eyebrow index="02">Profile</Eyebrow>
            <h2>Ideas with <span>purpose.</span><br />Spaces with <em>feeling.</em></h2>
            <p className="profile-role">Interior Designer</p>
            <dl className="profile-facts">
              <div><dt>Age</dt><dd>21</dd></div>
              <div><dt>Based in</dt><dd>Bandung</dd></div>
              <div><dt>Experience</dt><dd>2 years</dd></div>
            </dl>
            <span className="profile-mark" aria-hidden="true">JQ</span>
          </aside>

          <div className="profile-dossier">
            <article className="profile-chapter" data-reveal>
              <header><span>01</span><h3>Experience</h3></header>
              <div className="profile-entry">
                <time>2025</time>
                <div>
                  <h4>Interior Design Intern</h4>
                  <p className="profile-place">BESTGROUP Studio</p>
                  <ul className="profile-responsibilities">
                    <li>Revised 3D models and 2D drawings</li>
                    <li>Residential space design and site visits</li>
                    <li>Final design rendering</li>
                    <li>Material selection and adjustment</li>
                    <li>Sanitary, furniture, and material specifications</li>
                    <li>Client presentations and final design reports</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="profile-chapter" data-reveal>
              <header><span>02</span><h3>Education</h3></header>
              <div className="profile-entry-list">
                <div className="profile-entry profile-entry-compact">
                  <time>Sep 2022<br />Aug 2026</time>
                  <div><h4>BINUS University</h4><p className="profile-place">Interior Design · Jakarta</p></div>
                </div>
                <div className="profile-entry profile-entry-compact">
                  <time>Apr 2025<br />Aug 2025</time>
                  <div><h4>Kindai University</h4><p className="profile-place">International Student · Osaka</p></div>
                </div>
              </div>
            </article>

            <div className="profile-chapter-pair">
              <article className="profile-chapter" data-reveal>
                <header><span>03</span><h3>Languages</h3></header>
                <ul className="profile-data-list">
                  <li><span>Indonesian</span><strong>Fluent</strong></li>
                  <li><span>English</span><strong>IELTS 7.5 · C1</strong></li>
                  <li><span>Japanese</span><strong>Beginner</strong></li>
                </ul>
              </article>

              <article className="profile-chapter" data-reveal>
                <header><span>04</span><h3>Organization</h3></header>
                <div className="profile-organization-name"><h4>HIMDI</h4><p>Himpunan Desain Interior</p></div>
                <ul className="profile-data-list">
                  <li><span>2023—2024</span><strong>Chief, Human Resource</strong></li>
                  <li><span>2022—2024</span><strong>Member</strong></li>
                </ul>
              </article>
            </div>

            <article className="profile-chapter" data-reveal>
              <header><span>05</span><h3>Achievements</h3></header>
              <ul className="profile-awards">
                <li><time>2021</time><span>Best Presentation · 3rd Place, Best Project</span></li>
                <li><time>2023</time><span>Top 10, Interior Design I — Residential</span></li>
                <li><time>2023</time><span>Class Best Display · Top 10, Interior Design II — Retail</span></li>
                <li><time>2023</time><span>Top 10, Furniture Design II — Retail</span></li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="service-section" id="services">
        <div className="service-heading" data-reveal>
          <Eyebrow index="03">Services</Eyebrow>
          <h2>Six ways to<br /><em>shape a space.</em></h2>
          <p>From first conversation to the final detail.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article
              className={`service-card service-card-${index + 1}`}
              style={{ "--item-index": index } as React.CSSProperties}
              key={service.title}
              data-reveal="service"
            >
              <div className="service-card-top">
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="service-mark" aria-hidden="true">+</span>
              </div>
              <div className="service-card-copy">
                <h3>{service.title}</h3>
                <p>{service.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-intro" data-reveal>
          <Eyebrow index="04">Design process</Eyebrow>
          <h2>From question<br />to <span>place.</span></h2>
        </div>
        <ProcessProgress>
          <ol className="process-path">
            {process.map((step, index) => (
              <li key={step} style={{ "--step-index": index } as React.CSSProperties}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </li>
            ))}
          </ol>
        </ProcessProgress>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-kicker"><span>Interior design portfolio</span><span>Bandung · Indonesia</span></div>
        <p>Have a space<br />in mind?</p>
        <a href="mailto:jocelynquinella@gmail.com">Let&apos;s make it <ArrowIcon /></a>
        <div className="contact-grid">
          <a href="mailto:jocelynquinella@gmail.com">jocelynquinella@gmail.com</a>
          <a href="tel:+6287711191307">+62 877-1119-1307</a>
          <div><a href="https://www.linkedin.com/in/jocelyn-quinella/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com/jocelynqaa/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.pinterest.com/jocelynquinella/" target="_blank" rel="noreferrer">Pinterest ↗</a></div>
        </div>
        <div className="contact-bottom"><span>Jocelyn Quinella</span><span>© 2026</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
