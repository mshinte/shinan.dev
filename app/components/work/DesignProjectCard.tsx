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
  const isMobileImage = project.imageLayout === "mobile";
  const mobileBackgroundClass =
    project.imageTheme === "food"
      ? "bg-[radial-gradient(circle_at_50%_42%,rgba(255,143,78,0.2),transparent_34%),linear-gradient(135deg,rgba(255,246,238,0.96),rgba(255,235,218,0.7))]"
      : "bg-[radial-gradient(circle_at_50%_42%,rgba(89,178,218,0.18),transparent_34%),linear-gradient(135deg,rgba(239,250,253,0.96),rgba(226,245,241,0.75))]";
  const previousImage =
    hasImages && project.images
      ? project.images[activeImage === 0 ? slideCount - 1 : activeImage - 1]
      : null;
  const nextImage =
    hasImages && project.images
      ? project.images[activeImage === slideCount - 1 ? 0 : activeImage + 1]
      : null;

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
      className="grid gap-5 overflow-hidden rounded-[18px] border border-black/10 bg-card p-5 opacity-0 translate-y-4 animate-reveal sm:p-6 [animation-delay:var(--delay,0s)]"
      style={{ "--delay": `${index * 0.1}s` } as CSSProperties}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
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
      <div
        className={`relative overflow-hidden rounded-[14px] border border-black/10 bg-base ${
          hasImages
            ? isMobileImage
              ? "min-h-[640px]"
              : "aspect-[1440/1024]"
            : "min-h-[300px]"
        }`}
      >
        {hasImages && currentImage ? (
          <div
            className={
              isMobileImage
                ? `absolute inset-0 flex items-center justify-center p-5 ${mobileBackgroundClass}`
                : "absolute inset-0"
            }
          >
            {isMobileImage ? (
              <div className="flex items-center justify-center gap-4 sm:gap-6">
                {previousImage ? (
                  <div className="relative hidden h-[500px] w-[230px] overflow-hidden rounded-[28px] border border-black/10 bg-white opacity-70 shadow-soft lg:block">
                    <Image
                      alt={`${project.title} previous screen`}
                      className="object-contain"
                      fill
                      sizes="180px"
                      src={previousImage}
                    />
                  </div>
                ) : null}
                <div className="h-[580px] w-[267px] overflow-y-auto overflow-x-hidden rounded-[32px] border border-black/10 bg-white shadow-soft [scrollbar-width:thin]">
                  <img
                    alt={`${project.title} screen ${activeImage + 1}`}
                    className="h-auto w-full"
                    src={currentImage}
                  />
                </div>
                {nextImage ? (
                  <div className="relative hidden h-[500px] w-[230px] overflow-hidden rounded-[28px] border border-black/10 bg-white opacity-70 shadow-soft lg:block">
                    <Image
                      alt={`${project.title} next screen`}
                      className="object-contain"
                      fill
                      sizes="180px"
                      src={nextImage}
                    />
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="h-full w-full overflow-y-auto overflow-x-hidden [scrollbar-width:thin]">
                <img
                  alt={`${project.title} screen ${activeImage + 1}`}
                  className="h-auto w-full"
                  src={currentImage}
                />
              </div>
            )}
          </div>
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
    </article>
  );
}
