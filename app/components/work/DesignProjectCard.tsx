"use client";

import { useState } from "react";
import { designPlaceholders } from "./workData";

export default function DesignProjectCard() {
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
