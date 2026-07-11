"use client";

import { useState } from "react";
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
  const [activeImage, setActiveImage] = useState(0);
  const [isInterfaceOpen, setIsInterfaceOpen] = useState(false);
  const hasImages = Boolean(project.images?.length);
  const slideCount = project.images?.length ?? 0;
  const currentImage = project.images?.[activeImage];
  const imageAspectClass =
    project.imageAspect === "ccems" ? "aspect-[2878/2058]" : "aspect-[1363/1024]";

  function showPreviousImage() {
    if (!slideCount) return;

    setActiveImage((current) =>
      current === 0 ? slideCount - 1 : current - 1
    );
  }

  function showNextImage() {
    if (!slideCount) return;

    setActiveImage((current) =>
      current === slideCount - 1 ? 0 : current + 1
    );
  }

  return (
    <article
      className="grid min-h-[240px] gap-5 overflow-hidden rounded-[18px] border border-black/10 bg-card p-5 opacity-0 translate-y-4 animate-reveal sm:p-6 [animation-delay:var(--delay,0s)]"
      style={{ "--delay": `${index * 0.1}s` } as CSSProperties}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="text-xs uppercase tracking-[0.2em] text-muted">
            {project.category}
          </div>
          <h3 className="mt-2 break-words font-display text-[1.2rem] sm:text-[1.3rem]">
            {project.title}
          </h3>
        </div>
        <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white/70 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted">
          {project.logo ? (
            <img
              alt={`${project.title} logo`}
              className="h-full w-full object-contain p-1"
              src={project.logo}
            />
          ) : (
            "Logo"
          )}
        </div>
      </div>
      <p className="max-w-3xl text-muted">{project.description}</p>
      <div className="grid gap-2 rounded-[14px] bg-base/70 p-4 text-sm sm:grid-cols-[140px,1fr]">
        <span className="font-semibold text-ink">Role</span>
        <span className="text-muted">{project.role}</span>
      </div>
      <div className="flex flex-col gap-1 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>{project.type}</span>
        <div className="flex flex-wrap gap-4">
          {hasImages ? (
            <button
              aria-expanded={isInterfaceOpen}
              className="font-semibold text-accent3 hover:text-ink"
              onClick={() => setIsInterfaceOpen((current) => !current)}
              type="button"
            >
              {isInterfaceOpen ? "Hide interface" : "View interface"}
            </button>
          ) : null}
        </div>
      </div>
      {hasImages && currentImage && isInterfaceOpen ? (
        <div
          className={`relative mx-auto w-full overflow-hidden rounded-[14px] border border-black/10 bg-base sm:w-[76%] ${imageAspectClass}`}
        >
          <div className="h-full w-full overflow-y-auto overflow-x-hidden [scrollbar-width:thin]">
            <img
              alt={`${project.title} screen ${activeImage + 1}`}
              className="h-auto w-full"
              src={currentImage}
            />
          </div>
          <button
            aria-label="Previous project screen"
            className="absolute left-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center px-2 text-3xl font-semibold leading-none text-ink transition-all duration-200 hover:-translate-x-0.5 hover:text-accent3 active:scale-95"
            onClick={showPreviousImage}
            type="button"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            aria-label="Next project screen"
            className="absolute right-3 top-1/2 inline-flex -translate-y-1/2 items-center justify-center px-2 text-3xl font-semibold leading-none text-ink transition-all duration-200 hover:translate-x-0.5 hover:text-accent3 active:scale-95"
            onClick={showNextImage}
            type="button"
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>
      ) : null}
    </article>
  );
}
