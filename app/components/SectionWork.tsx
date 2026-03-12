import Link from "next/link";
import type { CSSProperties } from "react";

export default function SectionWork() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto w-[min(1120px,90vw)]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">
              Featured work
            </p>
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-[-0.02em]">
              Projects that set the vibe
            </h2>
          </div>
          <Link
            className="inline-flex items-center justify-center rounded-full border border-stroke px-5 py-2.5 font-semibold text-ink transition-colors duration-200 hover:bg-ink/5"
            href="/contact"
          >
            Request deck
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article
            className="grid min-h-[240px] gap-4 overflow-hidden rounded-[18px] border border-black/10 bg-card p-6 opacity-0 translate-y-4 animate-reveal [animation-delay:var(--delay,0s)]"
            style={{ "--delay": "0s" } as CSSProperties}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Launch</div>
            <h3 className="font-display text-[1.3rem]">Cloud Nine Studio</h3>
            <p className="text-muted">
              A lifestyle brand refresh with scroll-triggered stories and
              commerce-ready blocks.
            </p>
            <div className="flex items-center justify-between text-sm text-muted">
              <span>Brand + Web</span>
              <span>2025</span>
            </div>
          </article>

          <article
            className="grid min-h-[240px] gap-4 overflow-hidden rounded-[18px] border border-black/10 bg-card p-6 opacity-0 translate-y-4 animate-reveal [animation-delay:var(--delay,0s)]"
            style={{ "--delay": "0.1s" } as CSSProperties}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Product</div>
            <h3 className="font-display text-[1.3rem]">Pulse Creator Hub</h3>
            <p className="text-muted">
              A creator management platform with dashboards, analytics, and a
              modular design system.
            </p>
            <div className="flex items-center justify-between text-sm text-muted">
              <span>Web App</span>
              <span>2026</span>
            </div>
          </article>

          <article
            className="grid min-h-[240px] gap-4 overflow-hidden rounded-[18px] border border-black/10 bg-card p-6 opacity-0 translate-y-4 animate-reveal [animation-delay:var(--delay,0s)]"
            style={{ "--delay": "0.2s" } as CSSProperties}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted">Campaign</div>
            <h3 className="font-display text-[1.3rem]">Futura Sound Fest</h3>
            <p className="text-muted">
              Ticketing microsite with immersive gradients, 3D typography, and
              fluid ticket flows.
            </p>
            <div className="flex items-center justify-between text-sm text-muted">
              <span>Experiential</span>
              <span>2025</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
