import { ArrowIcon } from "@/app/components/icons";
import { contact, person, sectionCopy } from "@/app/data/portfolio";

export function ContactSection() {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-kicker">
        <span>{sectionCopy.contact.kicker}</span>
        <span>{person.city} · {person.country}</span>
      </div>
      <p>
        {sectionCopy.contact.question}<br />{sectionCopy.contact.secondLine}
      </p>
      <a href={contact.emailHref}>
        {sectionCopy.contact.callToAction} <ArrowIcon />
      </a>
      <div className="contact-grid">
        <a href={contact.emailHref}>{contact.email}</a>
        <a href={contact.phoneHref}>{contact.phone}</a>
        <div>
          {contact.socialLinks.map((social) => (
            <a href={social.href} target="_blank" rel="noreferrer" key={social.label}>{social.label} ↗</a>
          ))}
        </div>
      </div>
      <div className="contact-bottom">
        <span>{person.name}</span>
        <span>© {sectionCopy.contact.copyrightYear}</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
