import type { CSSProperties } from "react";
import { Eyebrow } from "@/app/components/eyebrow";
import { sectionCopy, services } from "@/app/data/portfolio";

export function ServicesSection() {
  return (
    <section className="service-section" id="services">
      <div className="service-heading" data-reveal>
        <Eyebrow index="03">{sectionCopy.services.eyebrow}</Eyebrow>
        <h2>
          {sectionCopy.services.title}<br />
          <em>{sectionCopy.services.emphasis}</em>
        </h2>
        <p>{sectionCopy.services.summary}</p>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article
            className={`service-card service-card-${index + 1}`}
            style={{ "--item-index": index } as CSSProperties}
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
  );
}
