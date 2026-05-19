"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useState } from "react";

type WorkFilter = "development" | "design";

const projects = [
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
  }
] satisfies Array<{
  category: string;
  title: string;
  description: string;
  role: string;
  stack: string[];
  type: string;
  year: string;
  discipline: WorkFilter;
}>;

const filters: Array<{ label: string; value: WorkFilter }> = [
  { label: "Development", value: "development" },
  { label: "Design", value: "design" }
];

const designPlaceholders = [
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

function DesignPlaceholderCard() {
  const [activeImage, setActiveImage] = useState(0);
  const placeholder = designPlaceholders[activeImage];

  function showPreviousImage() {
    setActiveImage((current) =>
      current === 0 ? designPlaceholders.length - 1 : current - 1
    );
  }

  function showNextImage() {
    setActiveImage((current) =>
      current === designPlaceholders.length - 1 ? 0 : current + 1
    );
  }

  return (
    <article className="grid gap-5 overflow-hidden rounded-[18px] border border-black/10 bg-card p-5 sm:grid-cols-[minmax(0,1.55fr)_minmax(220px,0.45fr)] sm:p-6">
      <div className="relative min-h-[300px] overflow-hidden rounded-[14px] border border-black/10 bg-base">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,16,18,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(16,16,18,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-12 inset-y-6 rounded-[12px] border border-black/10 bg-white/80 shadow-soft">
          <div className="h-10 border-b border-black/10 bg-white/70" />
          <div className="grid gap-3 p-4">
            <div className={`h-4 rounded-full bg-black/10 ${placeholder.titleWidth}`} />
            <div className={`h-24 rounded-[10px] ${placeholder.heroTone}`} />
            <div className="grid grid-cols-3 gap-2">
              {placeholder.tiles.map((tileClass, index) => (
                <div className={`h-10 rounded-[8px] ${tileClass}`} key={index} />
              ))}
            </div>
          </div>
        </div>
        <button
          aria-label="Previous design image"
          className="absolute left-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center px-2 text-3xl font-semibold leading-none text-ink transition-all duration-200 hover:-translate-x-0.5 hover:text-accent3 active:scale-95"
          onClick={showPreviousImage}
          type="button"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          aria-label="Next design image"
          className="absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center px-2 text-3xl font-semibold leading-none text-ink transition-all duration-200 hover:translate-x-0.5 hover:text-accent3 active:scale-95"
          onClick={showNextImage}
          type="button"
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>
      <div className="flex flex-col justify-between gap-5">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-muted">UI/UX Design</span>
          </div>
          <h3 className="font-display text-[1.2rem] sm:text-[1.3rem]">
            community Centric Events Management System
          </h3>
          <p className="mt-3 text-muted">
            A community-centric event management system for local organisers, with
            event creation, real-time communication, and secure QR ticketing.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Figma", "Wireframes", "UI Design"].map((item) => (
            <span
              className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-semibold text-muted"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function SectionWork() {
  const [activeFilter, setActiveFilter] = useState<WorkFilter>("development");
  const visibleProjects = projects.filter(
    (project) => project.discipline === activeFilter
  );

  return (
    <section className="relative z-10 pb-4 pt-10 lg:pb-6 lg:pt-12">
      <div className="mx-auto w-[min(1120px,90vw)]">
        <div className="mb-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-[-0.02em]">
              Projects I have worked on.
            </h2>
          </div>
          {/* <Link
            className="inline-flex items-center justify-center rounded-full border border-stroke px-5 py-2.5 font-semibold text-ink transition-colors duration-200 hover:bg-ink/5"
            href="/contact"
          >
            Request deck
          </Link> */}
        </div>

        <div className="mb-8 inline-flex rounded-full border border-black/10 bg-white/60 p-1">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive ? "bg-ink text-white" : "text-muted hover:text-ink"
                }`}
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                type="button"
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5">
          {activeFilter === "design" ? <DesignPlaceholderCard /> : null}
          {visibleProjects.map((project, index) => (
            <article
              className="grid min-h-[240px] gap-5 overflow-hidden rounded-[18px] border border-black/10 bg-card p-5 opacity-0 translate-y-4 animate-reveal sm:p-6 [animation-delay:var(--delay,0s)]"
              key={project.title}
              style={{ "--delay": `${index * 0.1}s` } as CSSProperties}
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted">
                    {project.category}
                  </div>
                  <h3 className="mt-2 break-words font-display text-[1.2rem] sm:text-[1.3rem]">
                    {project.title}
                  </h3>
                </div>
                <span className="w-fit rounded-full bg-black/5 px-3 py-1 text-sm font-semibold text-ink">
                  {project.year}
                </span>
              </div>
              <p className="max-w-3xl text-muted">{project.description}</p>
              <div className="grid gap-2 rounded-[14px] bg-base/70 p-4 text-sm sm:grid-cols-[140px,1fr]">
                <span className="font-semibold text-ink">Role</span>
                <span className="text-muted">{project.role}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-xs font-semibold text-muted"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-1 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
                <span>{project.type}</span>
                <Link className="font-semibold text-ink hover:text-accent3" href="/contact">
                  Ask about this project
                </Link>
              </div>
            </article>
          ))}

          {/* <article
            className="grid min-h-[240px] gap-4 overflow-hidden rounded-[18px] border border-black/10 bg-card p-6 opacity-0 translate-y-4 animate-reveal [animation-delay:var(--delay,0s)]"
            style={{ "--delay": "0.2s" } as CSSProperties}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Callaboration Work</div>
            <h3 className="font-display text-[1.3rem]">Project 3</h3>
            <p className="text-muted">
              Project description goes here. A brief overview of the project, its goals, and the impact it had.
            </p>
            <div className="flex items-center justify-between text-sm text-muted">
              <span>Experiential/Part Time</span>
              <span>2025</span>
            </div>
          </article> */}
        </div>
      </div>
    </section>
  );
}
