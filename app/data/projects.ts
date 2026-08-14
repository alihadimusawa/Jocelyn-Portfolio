import type { StaticImageData } from "next/image";
import { projectImages, type ProjectGalleryImage } from "./project-images";

type ProjectFact = {
  label: string;
  value: string;
};

type ProjectSection = {
  label: string;
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  location: string;
  cover?: StaticImageData;
  coverPosition?: string;
  summary: string;
  description: string;
  facts: readonly ProjectFact[];
  focus: readonly string[];
  sections: readonly ProjectSection[];
  gallery: readonly ProjectGalleryImage[];
  upcoming?: boolean;
};

export const projects: readonly Project[] = [
  {
    slug: "neofos-house",
    number: "01",
    title: "NeoFos House",
    category: "Residential",
    year: "2023",
    location: "Kenari Kebon Kopi, Bandung",
    cover: projectImages.neofosHouse.cover,
    summary: "I designed a compact 91.5 m² home that uses natural light and honest materials to make small-space living feel open and comfortable.",
    description: "For my first interior design studio project, I reimagined a residence in Kenari Kebon Kopi, Bandung, through an efficient tiny-house approach.",
    facts: [
      { label: "Type", value: "Residential" },
      { label: "Location", value: "Kenari Kebon Kopi, Bandung" },
      { label: "Year", value: "2023" },
      { label: "Recognition", value: "Top 10 Best Design" },
    ],
    focus: ["Tiny-house Planning", "Natural Lighting", "Eco-conscious Materials", "Efficient Living"],
    sections: [
      {
        label: "Concept",
        title: "Eco Skylight House",
        body: "I paired exposed rock, brick, and wood with a skylight set along the sloped roof, bringing daylight deeper into the interior while strengthening its connection to nature.",
      },
    ],
    gallery: projectImages.neofosHouse.gallery,
  },
  {
    slug: "into-the-wild-wood-of-razer",
    number: "02",
    title: "Into the Wild Wood of Razer",
    category: "Retail",
    year: "2023",
    location: "BCCF, Bandung",
    cover: projectImages.intoTheWildWoodOfRazer.cover,
    summary: "I translated Razer’s bold green identity into an immersive retail environment where gaming technology meets a relaxed jungle atmosphere.",
    description: "For my second studio project, I transformed a site at BCCF Bandung into a branded retail experience for gaming-technology company Razer.",
    facts: [
      { label: "Type", value: "Retail" },
      { label: "Location", value: "BCCF, Bandung" },
      { label: "Year", value: "2023" },
      { label: "Recognition", value: "Top 10 Best Design · Class Best Display" },
    ],
    focus: ["Bold", "Jungle", "Trust", "Relax"],
    sections: [
      {
        label: "Concept",
        title: "Into the Wild Wood",
        body: "I developed the space around four keywords—Bold, Jungle, Trust, and Relax—connecting Razer’s green palette and snake emblem with technology and organic forms.",
      },
    ],
    gallery: projectImages.intoTheWildWoodOfRazer.gallery,
  },
  {
    slug: "infinity-and-beyond",
    number: "03",
    title: "Infinity and Beyond",
    category: "Office",
    year: "2024",
    location: "BNI Tower, Jakarta",
    cover: projectImages.infinityAndBeyond.cover,
    summary: "I designed a two-level airline office that transforms the movement of a runway into a workplace for exploration, innovation, and limitless growth.",
    description: "Located on the 25th and 26th floors of BNI Tower, this project challenged me to create a dynamic office while responding to the existing structure of a high-rise building.",
    facts: [
      { label: "Type", value: "Office" },
      { label: "Location", value: "BNI Tower, Central Jakarta" },
      { label: "Year", value: "2024" },
      { label: "Floors", value: "25–26" },
    ],
    focus: ["Airline Identity", "High-rise Planning", "Innovation", "Limitless Growth"],
    sections: [
      {
        label: "Concept",
        title: "Infinity and Beyond",
        body: "I used the runway as a symbol of journeys without limits, shaping a workplace that encourages continuous improvement and thinking beyond conventional boundaries.",
      },
    ],
    gallery: projectImages.infinityAndBeyond.gallery,
  },
  {
    slug: "persephones-magic-pearl",
    number: "04",
    title: "Persephone’s Magic Pearl",
    category: "Hotel",
    year: "2024",
    location: "Pantai Mutiara, Jakarta",
    cover: projectImages.persephonesMagicPearl.cover,
    summary: "I created a five-star hotel experience inspired by a mythical pearl that offers escape, transformation, and passage into another world.",
    description: "For my fourth interior studio project, I designed a luxury hotel at Mangrove Resort on Jl. Pantai Mutiara, using storytelling to shape the guest journey within architecture by Chyntia Wijaya.",
    facts: [
      { label: "Type", value: "Hotel" },
      { label: "Location", value: "Mangrove Resort, Pantai Mutiara" },
      { label: "Year", value: "2024" },
      { label: "Architecture", value: "Chyntia Wijaya" },
    ],
    focus: ["Luxury Hospitality", "Storytelling", "Mythology", "Guest Experience"],
    sections: [
      {
        label: "Concept",
        title: "Persephone’s Magic Pearl",
        body: "I imagined guests searching for magical pearls hidden throughout Pantai Mutiara, leaving the underworld of everyday life behind and entering a more restorative vacation experience.",
      },
    ],
    gallery: projectImages.persephonesMagicPearl.gallery,
  },
  {
    slug: "piece-by-piece",
    number: "05",
    title: "Piece by Piece",
    category: "Daycare",
    year: "2026",
    location: "Bandung",
    cover: projectImages.pieceByPiece.cover,
    summary: "I designed a sensory daycare where children can learn, explore, and develop through environments shaped around their changing needs.",
    description: "This thesis project explores a daycare center in Bandung for children from infancy to seven years old, supporting cognitive, motor, social, and character development through play.",
    facts: [
      { label: "Type", value: "Daycare" },
      { label: "Location", value: "Jl. Nursijan, Lengkong, Bandung" },
      { label: "Year", value: "2026" },
      { label: "Area", value: "4,597.8 m²" },
    ],
    focus: ["Sensory Design", "Early Childhood", "Reggio Emilia", "Social Learning"],
    sections: [
      {
        label: "Concept",
        title: "A Place to Belong",
        body: "I shaped the environment piece by piece, using sensory experiences and Reggio Emilia principles to encourage curiosity, collaboration, independence, and a sense of belonging.",
      },
    ],
    gallery: projectImages.pieceByPiece.gallery,
  },
  {
    slug: "build-to-last",
    number: "06",
    title: "Build to Last",
    category: "Residential",
    year: "2024",
    location: "DAIKIN Designer Award",
    cover: projectImages.buildToLast.cover,
    summary: "I developed a sustainable residential concept inspired by the tortoise as a symbol of adaptability, resilience, and longevity.",
    description: "This project examines how a home can respond to environmental change while remaining durable, balanced, and relevant over time.",
    facts: [
      { label: "Type", value: "Residential" },
      { label: "Competition", value: "DAIKIN Designer Award" },
      { label: "Year", value: "2024" },
      { label: "Division", value: "Konseptual Desain Interior Aplikasi Rumah Tinggal (Pelajar)" },
    ],
    focus: ["Metamorphic", "Adaptive", "Longevity", "Relation"],
    sections: [
      {
        label: "Concept",
        title: "Tortoise",
        body: "I combined four principles—Metamorphic, Adaptive, Longevity, and Relation—to create a residential environment that responds to change and supports a long-term sustainability mission.",
      },
    ],
    gallery: projectImages.buildToLast.gallery,
  },
  {
    slug: "harth-chair",
    number: "07",
    title: "Harth Chair",
    category: "Furniture Design",
    year: "2023",
    location: "Academic Project",
    cover: projectImages.harthChair.cover,
    coverPosition: "center 56%",
    summary: "I designed a functional rattan chair that explores cultural amalgamation through rhythm, harmony, and shared identity.",
    description: "With Harth Chair, I responded to cultural diversity in Italy by combining distinct influences without removing the identity of either culture.",
    facts: [
      { label: "Type", value: "Furniture Design" },
      { label: "Year", value: "2023" },
      { label: "Materials", value: "Rattan · aluminium · fabric" },
      { label: "Recognition", value: "Top 10, Furniture Design II — Retail" },
    ],
    focus: ["Amalgamation", "Harmony", "Rhythm", "Craftsmanship"],
    sections: [
      {
        label: "Ideation",
        title: "Amalgamation",
        body: "I used amalgamation to frame cultural difference as a source of harmony rather than separation.",
      },
      {
        label: "Construct Idea",
        title: "Harmony and rhythm",
        body: "I combined the rhythm of an African djembe with the visual harmony of Italian pasta forms, translating both references into one balanced furniture design.",
      },
      {
        label: "Manifestation",
        title: "From study to prototype",
        body: "I worked with craftspeople through consultations, reviews, and production updates until the design became a fully functional rattan prototype.",
      },
    ],
    gallery: projectImages.harthChair.gallery,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  return projects[(currentIndex + 1) % projects.length] ?? projects[0];
}
