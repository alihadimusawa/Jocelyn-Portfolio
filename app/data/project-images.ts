import buildCover from "@/public/images/projects/build-to-last/cover.webp";
import harthCover from "@/public/images/projects/harth-chair/cover.webp";
import infinityCover from "@/public/images/projects/infinity-and-beyond/cover.webp";
import neofosCover from "@/public/images/projects/neofos-house/cover.webp";
import persephoneCover from "@/public/images/projects/persephones-magic-pearl/cover.webp";
import pieceCover from "@/public/images/projects/piece-by-piece/cover.webp";
import razerCover from "@/public/images/projects/into-the-wild-wood-of-razer/cover.webp";

export type ProjectGalleryImage = {
  src: string;
  label: string;
  alt: string;
  fit: "cover" | "contain";
};

function createGallery(
  slug: string,
  title: string,
  labels: readonly string[],
  containedImages: readonly number[] = [],
): readonly ProjectGalleryImage[] {
  return labels.map((label, index) => ({
    src: `/images/projects/${slug}/gallery-${String(index + 1).padStart(2, "0")}.webp`,
    label,
    alt: `${title}: ${label}`,
    fit: containedImages.includes(index + 1) ? "contain" : "cover",
  }));
}

// The first five images are featured; the remaining ten form the compact archive.
export const projectImages = {
  neofosHouse: {
    cover: neofosCover,
    gallery: createGallery("neofos-house", "NeoFos House", [
      "backyard skylight terrace",
      "living room and staircase",
      "skylit foyer",
      "primary bathroom",
      "evening exterior",
      "balcony",
      "utility bathroom",
      "main bedroom",
      "compact bunk room",
      "study bedroom",
      "kitchen",
      "walkthrough view 01",
      "walkthrough view 02",
      "walkthrough view 03",
      "walkthrough view 04",
    ]),
  },
  intoTheWildWoodOfRazer: {
    cover: razerCover,
    gallery: createGallery(
      "into-the-wild-wood-of-razer",
      "Into the Wild Wood of Razer",
      [
        "main lounge",
        "café area",
        "esports zone",
        "retail display",
        "night façade",
        "outdoor café",
        "night garden",
        "upper lounge",
        "primary retail area",
        "secondary retail area",
        "walkthrough view 01",
        "walkthrough view 02",
        "walkthrough view 03",
        "walkthrough view 04",
        "walkthrough view 05",
      ],
    ),
  },
  infinityAndBeyond: {
    cover: infinityCover,
    gallery: createGallery("infinity-and-beyond", "Infinity and Beyond", [
      "open coworking floor",
      "coworking detail",
      "staff lounge",
      "meeting room",
      "focus pods",
      "executive office",
      "collaborative workspace",
      "manager office",
      "executive desk detail",
      "coworking lighting detail",
      "workstation detail",
      "lounge bar detail",
      "manager office detail",
      "meeting table detail",
      "focus pod detail",
    ]),
  },
  persephonesMagicPearl: {
    cover: persephoneCover,
    gallery: createGallery(
      "persephones-magic-pearl",
      "Persephone’s Magic Pearl",
      [
        "honeymoon suite",
        "spa treatment room",
        "villa living room",
        "villa bedroom",
        "buffet restaurant",
        "honeymoon suite perspective",
        "meeting room",
        "hotel office",
        "standard guest room 01",
        "standard guest room 02",
        "villa bathroom",
        "honeymoon suite detail",
        "lobby seating detail",
        "spa material detail",
        "villa furniture detail",
      ],
    ),
  },
  pieceByPiece: {
    cover: pieceCover,
    gallery: createGallery(
      "piece-by-piece",
      "Piece by Piece",
      [
        "biophilic play zone",
        "interactive bio display",
        "soft seating wall",
        "munch activity zone",
        "cafeteria activity island",
        "sensory garden detail",
        "biophilic dining area",
        "central dining space",
        "reception and transition zone",
        "thesis poster 01",
        "thesis poster 02",
        "walkthrough view 01",
        "walkthrough view 02",
        "walkthrough view 03",
        "walkthrough view 04",
      ],
      [10, 11],
    ),
  },
  buildToLast: {
    cover: buildCover,
    gallery: createGallery("build-to-last", "Build to Last", [
      "open-plan living and kitchen",
      "exterior patio",
      "primary bedroom",
      "double-height living room",
      "bathroom",
      "bedroom perspective 02",
      "bedroom perspective 03",
      "bedroom perspective 04",
      "bedroom perspective 05",
      "pool courtyard",
      "wide exterior",
      "living room perspective 01",
      "home office",
      "living room perspective 02",
      "living room material detail",
    ]),
  },
  harthChair: {
    cover: harthCover,
    gallery: createGallery(
      "harth-chair",
      "Harth Chair",
      [
        "indoor prototype",
        "early ideation sketches",
        "form exploration sketches",
        "construction sketches",
        "final presentation poster",
        "idea development board",
        "material palette",
        "structure concept",
        "anthropometric study",
        "visual concept board",
        "mood concept board",
        "prototype review",
        "technical drawing",
        "four-view presentation",
        "component drawing",
      ],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    ),
  },
} as const;
