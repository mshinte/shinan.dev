import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "./workData";

type DevelopmentProjectCardProps = {
  project: Project;
  index: number;
};

export default function DevelopmentProjectCard({
  project,
  index
}: DevelopmentProjectCardProps) {
  return (
    <article
      className="grid min-h-[240px] gap-5 overflow-hidden rounded-[18px] border border-black/10 bg-card p-5 opacity-0 translate-y-4 animate-reveal sm:p-6 [animation-delay:var(--delay,0s)]"
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
  );
}
