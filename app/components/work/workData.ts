export type WorkFilter = "development" | "design";

export type Project = {
  category: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  type: string;
  year: string;
  discipline: WorkFilter;
};

export const projects = [
  {
    category: "Final Year Project",
    title: "Community Centric Events Management System",
    description:
      "A community-centric event management system for local organisers, with event creation, real-time communication, and secure QR ticketing.",
    role: "Product design, frontend, and system flow",
    stack: ["PWA", "QR ticketing", "Realtime UX"],
    type: "Progressive Web App",
    year: "2025",
    discipline: "development"
  },
  {
    category: "Internship - Product",
    title: "Asset Management System",
    description:
      "A digital asset management system built to streamline asset tracking, maintenance visibility, and department-level coordination.",
    role: "Product UI, workflow mapping, and implementation support",
    stack: ["Web app", "Dashboard UX", "Asset tracking"],
    type: "Web App",
    year: "2025",
    discipline: "development"
  },
  {
    category: "UI/UX Design",
    title: "Community Centric Events Management System",
    description:
      "A community-centric event management system for local organisers, with event creation, real-time communication, and secure QR ticketing.",
    role: "Product flow, wireframes, and interface design",
    stack: ["Figma", "Wireframes", "UI Design"],
    type: "Design Project",
    year: "2025",
    discipline: "design"
  },
  {
    category: "SAAD Assignment",
    title: "Travel Safe Int (TSI)",
    description:
      "A travel booking platform concept designed for a System Analysis and Design module, focused on planning the system flow, user journeys, and booking experience.",
    role: "System analysis, user flow, and interface planning",
    stack: ["System Design", "Figma", "Travel Booking"],
    type: "Academic Design Project",
    year: "2025",
    discipline: "design"
  }
] satisfies Project[];

export const workFilters: Array<{ label: string; value: WorkFilter }> = [
  { label: "Development", value: "development" },
  { label: "Design", value: "design" }
];

export const designPlaceholders = [
  {
    titleWidth: "w-2/3",
    heroTone: "bg-black/5",
    tiles: ["bg-accent2/20", "bg-black/5", "bg-accent/20"]
  },
  {
    titleWidth: "w-1/2",
    heroTone: "bg-accent/20",
    tiles: ["bg-black/5", "bg-accent3/20", "bg-black/5"]
  },
  {
    titleWidth: "w-3/4",
    heroTone: "bg-accent3/20",
    tiles: ["bg-accent2/20", "bg-accent/20", "bg-black/5"]
  }
];
