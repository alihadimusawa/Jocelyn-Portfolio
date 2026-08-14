import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";
import { ArrowIcon } from "./icons";

export function ProjectWall({ projects }: { projects: readonly Project[] }) {
  return (
    <div className="project-wall">
      {projects.map((project, index) => (
        <article
          className={`project-tile project-tile-${index + 1}${project.cover ? "" : " is-placeholder"}${project.upcoming ? " is-upcoming" : ""}`}
          data-reveal="project"
          key={project.slug}
        >
          <Link href={`/projects/${project.slug}`}>
            <div className="project-visual">
              {project.cover ? (
                <Image
                  src={project.cover}
                  alt=""
                  fill
                  placeholder="blur"
                  sizes={index === 0 ? "(max-width: 820px) 100vw, 92vw" : "(max-width: 820px) 100vw, 47vw"}
                  style={{ objectPosition: project.coverPosition ?? "center" }}
                />
              ) : (
                <div className="project-placeholder" aria-hidden="true">
                  <span>{project.number}</span>
                  <small>{project.upcoming ? "Case study reserved" : "Project images coming soon"}</small>
                </div>
              )}

              <span className="project-accent" aria-hidden="true" />
              <div className="project-overlay">
                <div className="project-meta">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className="project-arrow" aria-hidden="true"><ArrowIcon /></span>
                </div>
              </div>
            </div>

            <div className="project-caption">
              <span>{project.number} / {project.location}</span>
              <span>View case study ↗</span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
