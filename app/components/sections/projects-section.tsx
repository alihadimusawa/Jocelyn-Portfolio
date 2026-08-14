import { Eyebrow } from "@/app/components/eyebrow";
import { ProjectWall } from "@/app/components/project-wall";
import { sectionCopy } from "@/app/data/portfolio";
import { projects } from "@/app/data/projects";

export function ProjectsSection() {
  return (
    <section className="project-showcase" id="projects">
      <div className="showcase-heading" data-reveal>
        <Eyebrow index="01">{sectionCopy.projects.eyebrow}</Eyebrow>
        <h2>
          {sectionCopy.projects.title}<br />
          <em>{sectionCopy.projects.emphasis}</em>
        </h2>
        <div className="project-count">
          <strong>{String(projects.length).padStart(2, "0")}</strong>
          <span>Projects<br />{sectionCopy.projects.period}</span>
        </div>
      </div>
      <ProjectWall projects={projects} />
    </section>
  );
}
