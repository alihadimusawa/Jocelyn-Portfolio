import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/app/components/icons";
import { getNextProject, getProject, projects } from "@/app/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const nextProject = getNextProject(slug);

  return (
    <main className="case-page" id="main-content">
      <section className="case-hero">
        <div className="case-cover" data-reveal>
          <Image
            src={project.cover}
            alt={project.imagePlaceholder ? `Temporary cover image for ${project.title}` : `${project.title} cover`}
            fill
            preload
            placeholder="blur"
            sizes="100vw"
            style={{ objectPosition: project.coverPosition }}
          />
          {project.imagePlaceholder && <span className="desktop-only">Project image · temporary</span>}
        </div>

        <div className="case-title" data-reveal>
          <Link href="/#projects" className="back-link">← All projects</Link>
          <div className="case-title-copy">
            <div className="case-number">Project / {project.number}</div>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
          </div>
        </div>

        <dl className={`case-meta case-meta-${Math.min(project.facts.length, 4)}`} data-reveal>
          {project.facts.map((fact) => (
            <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>
          ))}
        </dl>
      </section>

      <section className="case-brief">
        <p className="case-label" data-reveal>01 / Project brief</p>
        <div data-reveal>
          <h2>The story<br />behind the space.</h2>
          <p>{project.description}</p>
        </div>
        <div className="case-scope" data-reveal>
          <span>{project.upcoming ? "Needed" : "Focus"}</span>
          {project.focus.map((item) => <p key={item}>{item}</p>)}
        </div>
      </section>

      {project.sections.length > 0 && (
        <section className="case-sections">
          {project.sections.map((section, index) => (
            <article key={section.title} data-reveal>
              <p>{String(index + 2).padStart(2, "0")} / {section.label}</p>
              <h2>{section.title}</h2>
              <div>{section.body}</div>
            </article>
          ))}
        </section>
      )}

      <section className="case-gallery" aria-label={`${project.title} gallery`}>
        {project.gallery.map((image, index) => (
          <figure className={`gallery-item gallery-item-${index + 1}`} key={index} data-reveal>
            <div>
              <Image
                src={image}
                alt={project.imagePlaceholder ? `Temporary gallery image ${index + 1} for ${project.title}` : `${project.title} gallery image ${index + 1}`}
                fill
                placeholder="blur"
                sizes={index === 0 || index === 3 ? "100vw" : "(max-width: 820px) 100vw, 50vw"}
              />
            </div>
            <figcaption>{String(index + 1).padStart(2, "0")} / {project.imagePlaceholder ? "Temporary image — replace with project work" : project.title}</figcaption>
          </figure>
        ))}
      </section>

      <section className="next-project">
        <p>Next project</p>
        <Link href={`/projects/${nextProject.slug}`}>
          <span>{nextProject.number}</span>
          {nextProject.title}
          <ArrowIcon />
        </Link>
      </section>
    </main>
  );
}
