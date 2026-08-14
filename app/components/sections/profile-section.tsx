import { Eyebrow } from "@/app/components/eyebrow";
import { person, profile, sectionCopy } from "@/app/data/portfolio";

export function ProfileSection() {
  return (
    <section className="profile-section" id="profile">
      <div className="profile-layout">
        <aside className="profile-intro" data-reveal>
          <Eyebrow index="02">{sectionCopy.profile.eyebrow}</Eyebrow>
          <h2>
            {sectionCopy.profile.firstLine} <span>{sectionCopy.profile.firstEmphasis}</span><br />
            {sectionCopy.profile.secondLine} <em>{sectionCopy.profile.secondEmphasis}</em>
          </h2>
          <p className="profile-role">{person.role}</p>
          <dl className="profile-facts">
            {profile.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <span className="profile-mark" aria-hidden="true">{person.initials}</span>
        </aside>

        <div className="profile-dossier">
          <article className="profile-chapter" data-reveal>
            <header><span>01</span><h3>Experience</h3></header>
            <div className="profile-entry">
              <time>{profile.experience.year}</time>
              <div>
                <h4>{profile.experience.title}</h4>
                <p className="profile-place">{profile.experience.place}</p>
                <ul className="profile-responsibilities">
                  {profile.experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="profile-chapter" data-reveal>
            <header><span>02</span><h3>Education</h3></header>
            <div className="profile-entry-list">
              {profile.education.map((education) => (
                <div className="profile-entry profile-entry-compact" key={education.institution}>
                  <time>{education.dates[0]}<br />{education.dates[1]}</time>
                  <div>
                    <h4>{education.institution}</h4>
                    <p className="profile-place">{education.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <div className="profile-chapter-pair">
            <article className="profile-chapter" data-reveal>
              <header><span>03</span><h3>Languages</h3></header>
              <ul className="profile-data-list">
                {profile.languages.map((language) => (
                  <li key={language.language}>
                    <span>{language.language}</span>
                    <strong>{language.level}</strong>
                  </li>
                ))}
              </ul>
            </article>

            <article className="profile-chapter" data-reveal>
              <header><span>04</span><h3>Organization</h3></header>
              <div className="profile-organization-name">
                <h4>{profile.organization.name}</h4>
                <p>{profile.organization.fullName}</p>
              </div>
              <ul className="profile-data-list">
                {profile.organization.roles.map((role) => (
                  <li key={`${role.dates}-${role.title}`}>
                    <span>{role.dates}</span>
                    <strong>{role.title}</strong>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="profile-chapter" data-reveal>
            <header><span>05</span><h3>Achievements</h3></header>
            <ul className="profile-awards">
              {profile.achievements.map((achievement) => (
                <li key={`${achievement.year}-${achievement.title}`}>
                  <time>{achievement.year}</time>
                  <span>{achievement.title}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
