"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";
import { designPlaceholders, type Project } from "./workData";

type DesignProjectCardProps = {
  project: Project;
  index: number;
};

export default function DesignProjectCard({
  project,
  index
}: DesignProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const hasImages = Boolean(project.images?.length);
  const slideCount = hasImages ? project.images!.length : designPlaceholders.length;
  const placeholder = designPlaceholders[activeImage % designPlaceholders.length];
  const currentImage = project.images?.[activeImage];

  function showPreviousImage() {
    setActiveImage((current) =>
      current === 0 ? slideCount - 1 : current - 1
    );
  }

  function showNextImage() {
    setActiveImage((current) =>
      current === slideCount - 1 ? 0 : current + 1
    );
  }

  return (
    <article
      className={`grid gap-5 overflow-hidden rounded-[18px] border border-black/10 bg-card p-5 opacity-0 translate-y-4 animate-reveal sm:p-6 [animation-delay:var(--delay,0s)] ${
        hasImages ? "" : "sm:grid-cols-[minmax(0,1.55fr)_minmax(220px,0.45fr)]"
      }`}
      style={{ "--delay": `${index * 0.1}s` } as CSSProperties}
    >
      <div
        className={`relative overflow-hidden rounded-[14px] border border-black/10 bg-base ${
          hasImages ? "aspect-[16/10] max-h-[620px]" : "min-h-[300px]"
        }`}
      >
        {hasImages && currentImage ? (
          <Image
            alt={`${project.title} screen ${activeImage + 1}`}
            className="object-contain"
            fill
            priority={index === 0}
            sizes="(min-width: 640px) 60vw, 90vw"
            src={currentImage}
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,16,18,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(16,16,18,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
            <div className="absolute inset-x-12 inset-y-6 rounded-[12px] border border-black/10 bg-white/80 shadow-soft">
              <div className="h-10 border-b border-black/10 bg-white/70" />
              <div className="grid gap-3 p-4">
                <div
                  className={`h-4 rounded-full bg-black/10 ${placeholder.titleWidth}`}
                />
                <div className={`h-24 rounded-[10px] ${placeholder.heroTone}`} />
                <div className="grid grid-cols-3 gap-2">
                  {placeholder.tiles.map((tileClass, index) => (
                    <div className={`h-10 rounded-[8px] ${tileClass}`} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
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
      <div
        className={`flex flex-col gap-5 ${
          hasImages ? "sm:flex-row sm:items-end sm:justify-between" : ""
        }`}
      >
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              {project.category}
            </span>
          </div>
          <h3 className="font-display text-[1.2rem] sm:text-[1.3rem]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-3xl text-muted">{project.description}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          {project.stack.map((item) => (
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
