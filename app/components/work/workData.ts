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
  images?: string[];
  imageLayout?: "wide" | "mobile";
  imageAspect?: "standard" | "ccems";
  imageTheme?: "wellness" | "food";
  scope?: string[];
};

export const projects = [
  {
    category: "Final Year Project",
    title: "Community Centric Events Management System",
    description:
      "A community-centric event management system for local organisers, with event creation, real-time communication, and secure QR ticketing.",
    role: "Product design, frontend, backend,system flow and  documentation",
    stack: ["PWA", "QR ticketing", "Realtime UX"],
    type: "Progressive Web App",
    year: "2025",
    discipline: "development",
    imageLayout: "wide",
    imageAspect: "ccems",
    images: [
      "/projects/ccems/Login.jpg",
      "/projects/ccems/Dashboard.jpg",
      "/projects/ccems/Events.jpg",
      "/projects/ccems/Reports.jpg"
    ]
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
    discipline: "development",
    imageLayout: "wide",
    images: [
      "/projects/asset tracking/Login Page.jpg",
      "/projects/asset tracking/Dashboard Page.jpg",
      "/projects/asset tracking/Asset List.jpg"
    ]
  },
  {
    category: "System Analysis and Design - Assignment",
    title: "Travel Safe Int (TSI)",
    description:
      "A travel booking platform concept designed for a System Analysis and Design module, focused on planning the system flow, user journeys, and booking experience.",
    role: "System analysis, user flow, and interface planning",
    stack: ["System Design", "Figma", "Travel Booking", "User Flow", "Booking UX"],
    type: "Academic Design Project",
    year: "2025",
    discipline: "design",
    imageLayout: "wide",
    scope: ["Booking flow", "Passenger details", "Payment screen", "Itinerary view"],
    images: [
      "/projects/tsi/TSI Home Page.jpg",
      "/projects/tsi/TSI Page -2 (DEP Flight).jpg",
      "/projects/tsi/TSI Page -3 (RET Flight).jpg",
      "/projects/tsi/TSI Page -4 (Passenger Details).jpg",
      "/projects/tsi/TSI Page-5 (Payment).jpg",
      "/projects/tsi/TSI Page-6 Itenary.jpg"
    ]
  },
  {
    category: "Human Computer Interaction - Assignment",
    title: "Chill Space",
    description:
      "A mobile wellness app concept designed for a Human Computer Interaction module, focused on matching system design decisions to a target market through mood check-ins, anonymous community posting, quick relief activities, and a personalisable profile.",
    role: "Target-user research, mobile UX flow, and interface design",
    stack: ["Mobile UX", "Figma", "Wellness App", "User Research"],
    type: "Academic Mobile App Design",
    year: "2025",
    discipline: "design",
    imageLayout: "mobile",
    imageTheme: "wellness",
    scope: [
      "Mood check-in",
      "Anonymous community",
      "Quick relief activities",
      "Personalised profile",
      "Wellness tracker",
      "Target market fit"
    ],
    images: [
      "/projects/wellness/Landing Page.jpg",
      "/projects/wellness/Intro Page 1.jpg",
      "/projects/wellness/Intro Page 2.jpg",
      "/projects/wellness/Intro Page 3.jpg",
      "/projects/wellness/Sign In.jpg",
      "/projects/wellness/Sign Up.jpg",
      "/projects/wellness/Dashboard.jpg",
      "/projects/wellness/Mood 1.jpg",
      "/projects/wellness/Mood 2.jpg",
      "/projects/wellness/Mood 3.jpg",
      "/projects/wellness/Community 1.jpg",
      "/projects/wellness/Community 1.2.jpg",
      "/projects/wellness/Relief 1.jpg",
      "/projects/wellness/Relief 1.1.jpg",
      "/projects/wellness/Relief 1.2.jpg",
      "/projects/wellness/Wellness Tracker 1.jpg",
      "/projects/wellness/Wellness Tracker 1.2.1.jpg",
      "/projects/wellness/Profile 1.jpg",
      "/projects/wellness/Profile 1.2.jpg",
      "/projects/wellness/Profile 1.4.jpg"
    ]
  },
  {
    category: "Venture Building - Assignment",
    title: "ByteBites",
    description:
      "A mobile food ordering venture concept created for a Venture Building module, focused on evaluating an entrepreneurial idea of home cooked meals, designing the app experience, planning revenue opportunities, and shaping the pitch around a viable business model.",
    role: "Venture concept, mobile UX flow, revenue planning, and pitch design",
    stack: ["Mobile UX", "Figma", "Business Model", "Food Tech"],
    type: "Academic Venture App Design",
    year: "2025",
    discipline: "design",
    imageLayout: "mobile",
    imageTheme: "food",
    scope: [
      "Meal plans",
      "Instant ordering",
      "Subscription flow",
      "Delivery tracking",
      "Revenue model",
      "Pitch concept"
    ],
    images: [
      "/projects/ByteBites/Welcome Page.jpg",
      "/projects/ByteBites/Login Page.jpg",
      "/projects/ByteBites/Register Page.jpg",
      "/projects/ByteBites/Dashboard Page.jpg",
      "/projects/ByteBites/Instant Order Page.jpg",
      "/projects/ByteBites/Meal Plan Page.jpg",
      "/projects/ByteBites/Subscription Page.jpg",
      "/projects/ByteBites/Delivery Page.jpg"
    ]
  },
  {
    category: "Project Management - Assignment",
    title: "CRL+You",
    description:
      "A project management module concept focused on planning a realistic IT project by combining project phases, tools, techniques, and human factors into a structured delivery approach.",
    role: "Project planning, interface flow, and delivery documentation",
    stack: ["Project Planning", "Figma", "Workflow Design"],
    type: "Academic Project Management Design",
    year: "2025",
    discipline: "design",
    imageLayout: "wide",
    scope: [
      "Project phases",
      "Team coordination",
      "Delivery workflow",
      "Stakeholder flow"
    ],
    images: [
      "/projects/crl+you/Login.jpg",
      "/projects/crl+you/Register.jpg",
      "/projects/crl+you/Join Us.jpg",
      "/projects/crl+you/Dashboard.jpg"
    ]
  }
] satisfies Project[];

export const workFilters: Array<{ label: string; value: WorkFilter }> = [
  { label: "Built Projects", value: "development" },
  { label: "Design Studies", value: "design" }
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
