import Image from "next/image";
import { ArrowIcon } from "@/app/components/icons";
import { contact, heroFacts, person, sectionCopy } from "@/app/data/portfolio";
import portraitImage from "@/public/images/jocelyn-portrait-placeholder.png";

export function HomeHero() {
  return (
    <>
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
          <p className="portrait-note">{sectionCopy.hero.portraitNote}</p>
        </div>

        <div className="hero-content">
          <div className="hero-role">
            <span>{person.role}</span>
            <span>{person.city} · {person.countryCode}</span>
          </div>

          <h1 aria-label={person.name}>
            <span className="word-mask"><span>{person.firstName}</span></span>
            <span className="word-mask hero-last-name"><span>{person.lastName}</span></span>
          </h1>

          <div className="hero-summary">
            <p>{sectionCopy.hero.summary[0]}<br />{sectionCopy.hero.summary[1]}</p>
            <div className="hero-actions">
              <a className="action action-solid" href="#projects">
                View projects <span aria-hidden="true">↓</span>
              </a>
              <a
                className="action action-outline"
                href={contact.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${person.name}’s CV on Google Drive (opens in a new tab)`}
              >
                View CV <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="hero-facts">
            {heroFacts.map((fact) => (
              <span key={fact.value}><strong>{fact.value}</strong> {fact.label}</span>
            ))}
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">{sectionCopy.hero.portfolioIndex}</div>
      </section>

      <section className="intro-strip" aria-label="Introduction">
        <p>{sectionCopy.introduction.statement}</p>
        <span>{sectionCopy.introduction.response}</span>
      </section>
    </>
  );
}
