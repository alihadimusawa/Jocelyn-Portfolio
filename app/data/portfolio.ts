export const person = {
  name: "Jocelyn Quinella",
  firstName: "Jocelyn",
  lastName: "Quinella",
  initials: "JQ",
  role: "Interior Designer",
  city: "Bandung",
  countryCode: "ID",
  country: "Indonesia",
  age: 22,
  experienceYears: 2,
} as const;

export const portfolioYear = 2026;

export const contact = {
  email: "jocelynquinella@gmail.com",
  emailHref: "mailto:jocelynquinella@gmail.com",
  phone: "+62 877-1119-1307",
  phoneHref: "tel:+6287711191307",
  cvUrl: "https://drive.google.com/file/d/1gTf0Zj1w8hY2LbR9PaF6oQ15vpR8U4dG/view?usp=drive_link",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jocelyn-quinella/" },
    { label: "Instagram", href: "https://www.instagram.com/jocelynqaa/" },
    { label: "Pinterest", href: "https://www.pinterest.com/jocelynquinella/" },
  ],
} as const;

export const navigation = [
  { label: "Projects", href: "/#projects" },
  { label: "Profile", href: "/#profile" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" },
] as const;

export const sectionCopy = {
  hero: {
    summary: ["Thoughtful interiors", "for everyday life."],
    portfolioIndex: `${person.initials} / ${portfolioYear}`,
  },
  introduction: {
    statement: "Space shapes how we live.",
    response: "Quiet, useful, human.",
  },
  projects: {
    eyebrow: "Selected projects",
    title: "Selected",
    emphasis: "work.",
    period: "2023—TBA",
  },
  profile: {
    eyebrow: "Profile",
    firstLine: "Ideas with",
    firstEmphasis: "purpose.",
    secondLine: "Spaces with",
    secondEmphasis: "feeling.",
  },
  services: {
    eyebrow: "Services",
    title: "Six ways to",
    emphasis: "shape a space.",
    summary: "From first conversation to the final detail.",
  },
  process: {
    eyebrow: "Design process",
    title: "From question",
    secondLine: "to",
    emphasis: "place.",
  },
  contact: {
    kicker: "Interior design portfolio",
    question: "Have a space",
    secondLine: "in mind?",
    callToAction: "Let's make it",
    copyrightYear: portfolioYear,
  },
} as const;

export const heroFacts = [
  { value: String(person.experienceYears).padStart(2, "0"), label: "years experience" },
  { value: "BINUS", label: "2022—2026" },
  { value: "KINDAI", label: "exchange · Japan" },
] as const;

export const profile = {
  facts: [
    { label: "Age", value: `${person.age} years old` },
    { label: "Based in", value: person.city },
    { label: "Experience", value: `${person.experienceYears} years` },
  ],
  experience: {
    year: "2025",
    title: "Interior Design Intern",
    place: "BESTGROUP Studio",
    responsibilities: [
      "Revised 3D models and 2D drawings",
      "Residential space design and site visits",
      "Final design rendering",
      "Material selection and adjustment",
      "Sanitary, furniture, and material specifications",
      "Client presentations and final design reports",
    ],
  },
  education: [
    {
      dates: ["Sep 2022", "Aug 2026"],
      institution: "BINUS University",
      detail: "Interior Design · Jakarta",
    },
    {
      dates: ["Apr 2025", "Aug 2025"],
      institution: "Kindai University",
      detail: "International Student · Osaka",
    },
  ],
  languages: [
    { language: "Indonesian", level: "Fluent" },
    { language: "English", level: "IELTS 7.5 · C1" },
    { language: "Japanese", level: "Beginner" },
  ],
  organization: {
    name: "HIMDI",
    fullName: "Himpunan Desain Interior",
    roles: [
      { dates: "2023—2024", title: "Chief, Human Resource" },
      { dates: "2022—2024", title: "Member" },
    ],
  },
  achievements: [
    { year: "2021", title: "Best Presentation · 3rd Place, Best Project" },
    { year: "2023", title: "Top 10, Interior Design I — Residential" },
    { year: "2023", title: "Class Best Display · Top 10, Interior Design II — Retail" },
    { year: "2023", title: "Top 10, Furniture Design II — Retail" },
  ],
} as const;

export const services = [
  { title: "Interior Design", note: "Concept to completion" },
  { title: "Space Planning", note: "Flow, function, proportion" },
  { title: "3D Visualization", note: "See it before build" },
  { title: "Renovation Design", note: "Existing space, reimagined" },
  { title: "Furniture & Material Selection", note: "Details that belong" },
  { title: "Project Consultation", note: "Clear next decisions" },
] as const;

export const processSteps = [
  "Consultation",
  "Concept",
  "Design Development",
  "3D Visualization",
  "Construction",
  "Final Result",
] as const;
