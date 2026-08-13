import type { StaticImageData } from "next/image";
import apartmentImage from "@/public/images/project-apartment.png";
import bedroomImage from "@/public/images/project-bedroom.png";
import livingImage from "@/public/images/jocelyn-hero.png";

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
  cover: StaticImageData;
  coverPosition: string;
  summary: string;
  description: string;
  facts: readonly ProjectFact[];
  focus: readonly string[];
  sections: readonly ProjectSection[];
  gallery: readonly StaticImageData[];
  imagePlaceholder: boolean;
  upcoming?: boolean;
};

export const projects: readonly Project[] = [
  {
    slug: "neofos-house",
    number: "01",
    title: "NeoFos House",
    category: "Residential",
    year: "2023",
    location: "Bandung",
    cover: livingImage,
    coverPosition: "center",
    summary: "A 91.5 m² tiny-house concept shaped around natural light, a sloped-roof skylight, and an eco-house material language.",
    description: "Jocelyn’s first college interior design studio project explores a tiny-house approach for a residence in Kenari Kebon Kopi, Bandung.",
    facts: [
      { label: "Type", value: "Residential" },
      { label: "Location", value: "Kenari Kebon Kopi, Bandung" },
      { label: "Year", value: "2023" },
      { label: "Area", value: "91.5 m²" },
    ],
    focus: ["Tiny House", "Eco House", "Natural Lighting"],
    sections: [
      {
        label: "Concept",
        title: "Eco Skylight House",
        body: "The concept draws on an eco-house language of exposed natural materials such as rock, brick, and wood. A skylight installed parallel to the sloped roof introduces natural light into the interior.",
      },
    ],
    gallery: [livingImage, apartmentImage, bedroomImage, livingImage],
    imagePlaceholder: true,
  },
  {
    slug: "into-the-wild-wood-of-razer",
    number: "02",
    title: "Into the Wild Wood of Razer",
    category: "Retail",
    year: "2023",
    location: "BCCF, Bandung",
    cover: bedroomImage,
    coverPosition: "center",
    summary: "A Razer retail concept translating its bold green identity into a jungle-inspired, technology-led environment.",
    description: "The second studio project uses BCCF Bandung as the site for a branded retail environment. Jocelyn selected Razer, a gaming-technology company, as the project’s focus.",
    facts: [
      { label: "Type", value: "Retail" },
      { label: "Location", value: "BCCF, Bandung" },
      { label: "Year", value: "2023" },
      { label: "Brand", value: "Razer" },
    ],
    focus: ["Bold", "Jungle", "Trust", "Relax"],
    sections: [
      {
        label: "Concept",
        title: "Into the Wild Wood",
        body: "The concept is built around four keywords: Bold, Jungle, Trust, and Relax. Together they connect Razer’s green identity and snake emblem with the site and its technological character.",
      },
    ],
    gallery: [bedroomImage, livingImage, apartmentImage, bedroomImage],
    imagePlaceholder: true,
  },
  {
    slug: "harth-chair",
    number: "03",
    title: "Harth Chair",
    category: "Furniture Design",
    year: "2023",
    location: "Academic Project",
    cover: apartmentImage,
    coverPosition: "center",
    summary: "A functional rattan chair exploring cultural amalgamation through rhythm, harmony, and shared identity.",
    description: "Harth Chair responds to cultural diversity in Italy by presenting amalgamation as a way to combine cultural influences without erasing their individual characteristics.",
    facts: [
      { label: "Type", value: "Furniture Design" },
      { label: "Year", value: "2023" },
      { label: "Material", value: "Rattan" },
      { label: "Output", value: "Functional prototype" },
    ],
    focus: ["Amalgamation", "Harmony", "Rhythm", "Craftsmanship"],
    sections: [
      {
        label: "Ideation",
        title: "Amalgamation",
        body: "Amalgamation is the process of mixing two cultures to create something new without leaving either identity behind. It frames diversity as a source of harmony.",
      },
      {
        label: "Construct Idea",
        title: "Harmony and Rhythm",
        body: "The design combines rhythm and harmony as an expression of cultures coexisting in diversity, using the rhythm of an African djembe and the harmony associated with Italian pasta as references.",
      },
      {
        label: "Manifestation",
        title: "From study to prototype",
        body: "The chair developed through craftsmanship research, consultations, reviews, and production updates, resulting in a fully functional rattan prototype.",
      },
    ],
    gallery: [apartmentImage, bedroomImage, livingImage, apartmentImage],
    imagePlaceholder: true,
  },
  {
    slug: "project-04",
    number: "04",
    title: "Project 04",
    category: "Upcoming",
    year: "TBA",
    location: "Details to follow",
    cover: livingImage,
    coverPosition: "center",
    summary: "An independent case-study page reserved for Jocelyn’s next project.",
    description: "Project details will be added when the title, brief, metadata, and images are supplied.",
    facts: [{ label: "Status", value: "Content coming soon" }],
    focus: ["Title", "Project story", "Images"],
    sections: [],
    gallery: [livingImage, bedroomImage, apartmentImage, livingImage],
    imagePlaceholder: true,
    upcoming: true,
  },
  {
    slug: "project-05",
    number: "05",
    title: "Project 05",
    category: "Upcoming",
    year: "TBA",
    location: "Details to follow",
    cover: bedroomImage,
    coverPosition: "center",
    summary: "An independent case-study page reserved for Jocelyn’s next project.",
    description: "Project details will be added when the title, brief, metadata, and images are supplied.",
    facts: [{ label: "Status", value: "Content coming soon" }],
    focus: ["Title", "Project story", "Images"],
    sections: [],
    gallery: [bedroomImage, apartmentImage, livingImage, bedroomImage],
    imagePlaceholder: true,
    upcoming: true,
  },
  {
    slug: "project-06",
    number: "06",
    title: "Project 06",
    category: "Upcoming",
    year: "TBA",
    location: "Details to follow",
    cover: apartmentImage,
    coverPosition: "center",
    summary: "An independent case-study page reserved for Jocelyn’s next project.",
    description: "Project details will be added when the title, brief, metadata, and images are supplied.",
    facts: [{ label: "Status", value: "Content coming soon" }],
    focus: ["Title", "Project story", "Images"],
    sections: [],
    gallery: [apartmentImage, livingImage, bedroomImage, apartmentImage],
    imagePlaceholder: true,
    upcoming: true,
  },
  {
    slug: "project-07",
    number: "07",
    title: "Project 07",
    category: "Upcoming",
    year: "TBA",
    location: "Details to follow",
    cover: livingImage,
    coverPosition: "center",
    summary: "An independent case-study page reserved for Jocelyn’s next project.",
    description: "Project details will be added when the title, brief, metadata, and images are supplied.",
    facts: [{ label: "Status", value: "Content coming soon" }],
    focus: ["Title", "Project story", "Images"],
    sections: [],
    gallery: [livingImage, apartmentImage, bedroomImage, livingImage],
    imagePlaceholder: true,
    upcoming: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const currentIndex = projects.findIndex((project) => project.slug === slug);
  return projects[(currentIndex + 1) % projects.length] ?? projects[0];
}
