import Link from "next/link";
import type { CSSProperties } from "react";

const projects = [
  {
    category: "Final Year Project",
    title: "Community Centric Events Management System",
    description:
      "A community-centric event management system for local organisers, with event creation, real-time communication, and secure QR ticketing.",
    role: "Product design, frontend, and system flow",
    stack: ["PWA", "QR ticketing", "Realtime UX"],
    type: "Progressive Web App",
    year: "2025"
  },
  {
    category: "Internship - Product",
    title: "Asset Management System",
    description:
      "A digital asset management system built to streamline asset tracking, maintenance visibility, and department-level coordination.",
    role: "Product UI, workflow mapping, and implementation support",
    stack: ["Web app", "Dashboard UX", "Asset tracking"],
    type: "Web App",
    year: "2025"
  }
];

export default function SectionWork() {
  return (
    <section className="relative z-10 py-20 lg:py-24">
      <div className="mx-auto w-[min(1120px,90vw)]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">
              Featured work
            </p>
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

        <div className="grid gap-5">
          {projects.map((project, index) => (
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
