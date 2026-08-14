import Image from "next/image";
import type { ProjectGalleryImage } from "@/app/data/project-images";

const FEATURED_IMAGE_COUNT = 5;

type ProjectGalleryProps = {
  title: string;
  images: readonly ProjectGalleryImage[];
};

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const featuredImages = images.slice(0, FEATURED_IMAGE_COUNT);
  const archiveImages = images.slice(FEATURED_IMAGE_COUNT);

  return (
    <section className="case-gallery" id="project-gallery" aria-label={`${title} visual archive`}>
      <header className="case-gallery-heading" data-reveal>
        <p>Visual archive</p>
        <h2>Selected views.</h2>
        <span>{images.length} images</span>
      </header>

      <div className="case-gallery-featured">
        {featuredImages.map((image, index) => {
          const number = index + 1;
          const isWide = index === 0;
          const isLarge = index === 1 || index === 4;

          return (
            <figure
              className={`gallery-featured-item gallery-featured-item-${number}`}
              data-reveal="gallery"
              key={image.src}
            >
              <div className={`gallery-media${image.fit === "contain" ? " is-contained" : ""}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    isWide
                      ? "100vw"
                      : isLarge
                        ? "(max-width: 820px) 100vw, 58vw"
                        : "(max-width: 820px) 100vw, 42vw"
                  }
                />
              </div>
              <figcaption>
                <span className="gallery-number">{String(number).padStart(2, "0")}</span>
                <span className="gallery-label">{image.label}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      {archiveImages.length > 0 && (
        <div className="case-gallery-archive">
          <header data-reveal>
            <p>Full archive</p>
            <span>{archiveImages.length} additional views</span>
          </header>

          <div className="case-gallery-archive-grid" data-reveal="gallery-archive">
            {archiveImages.map((image, index) => {
              const number = FEATURED_IMAGE_COUNT + index + 1;

              return (
                <figure className="gallery-archive-item" key={image.src}>
                  <div className={`gallery-media${image.fit === "contain" ? " is-contained" : ""}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 820px) 50vw, (max-width: 1080px) 25vw, 20vw"
                    />
                  </div>
                  <figcaption>
                    <span className="gallery-number">{String(number).padStart(2, "0")}</span>
                    <span className="gallery-label">{image.label}</span>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
