import { Eyebrow } from "@/app/components/eyebrow";
import { ProcessProgress } from "@/app/components/process-progress";
import { processSteps, sectionCopy } from "@/app/data/portfolio";

export function ProcessSection() {
  return (
    <section className="process-section" id="process">
      <div className="process-intro" data-reveal>
        <Eyebrow index="04">{sectionCopy.process.eyebrow}</Eyebrow>
        <h2>
          {sectionCopy.process.title}<br />
          {sectionCopy.process.secondLine} <span>{sectionCopy.process.emphasis}</span>
        </h2>
      </div>
      <ProcessProgress>
        <ol className="process-path">
          {processSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </li>
          ))}
        </ol>
      </ProcessProgress>
    </section>
  );
}
