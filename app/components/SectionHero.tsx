export default function SectionHero() {
  return (
    <section className="relative z-10 pb-20 pt-20 sm:pt-24 lg:pb-24 lg:pt-[120px]">
      <div className="mx-auto grid w-[min(1120px,90vw)] items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-12">
        <div className="grid min-w-0 gap-6">
          <div className="inline-flex w-fit items-center rounded-full bg-accent px-3.5 py-1.5 text-sm font-semibold">
            Available for collabs
          </div>
          <h1 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[1.05] tracking-[-0.03em]">
            I build websites that feel like a cultural moment.
          </h1>
          <p className="max-w-xl text-[1.05rem] text-muted">
            I’m Shinan - a web maker blending product thinking, playful motion,
            and clean engineering. Cool, but not chaotic. Simple, but never
            boring.
          </p>
          {/* <div className="flex flex-wrap gap-4">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white shadow-button transition-transform duration-200 hover:-translate-y-0.5"
              href="/work"
            >
              See featured work
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-full px-0 py-3 font-semibold text-ink"
              href="/contact"
            >
              Start a project
            </Link>
          </div> */}
          {/* <div className="flex flex-wrap gap-2.5">
            <span className="rounded-full border border-black/10 bg-white/50 px-3.5 py-2 text-sm">
              Brand sites
            </span>
            <span className="rounded-full border border-black/10 bg-white/50 px-3.5 py-2 text-sm">
              Product landing
            </span>
            <span className="rounded-full border border-black/10 bg-white/50 px-3.5 py-2 text-sm">
              Web apps
            </span>
            <span className="rounded-full border border-black/10 bg-white/50 px-3.5 py-2 text-sm">
              Motion UI
            </span>
          </div> */}
        </div>
        <div className="relative min-w-0">
          <div className="hero-type-block relative overflow-hidden rounded-[28px] border border-black/10 bg-white/70 px-5 py-6 shadow-soft backdrop-blur-sm sm:rounded-[32px] sm:px-8 sm:py-9">
            <div className="absolute inset-x-6 top-6 h-px bg-[linear-gradient(90deg,transparent,rgba(16,16,18,0.18),transparent)]" />
            <div className="grid gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">
                Direction
              </p>
              <div className="hero-word-stack min-w-0 leading-none">
                <span className="hero-word hero-word--solid block break-words font-display text-[clamp(2.8rem,8vw,5.2rem)] uppercase tracking-[-0.05em] text-ink">
                  Build
                </span>
                <span className="hero-word hero-word--outline block break-words font-display text-[clamp(2.8rem,8vw,5.2rem)] uppercase tracking-[-0.05em] text-transparent [-webkit-text-stroke:1.5px_#101012]">
                  Culture
                </span>
                <span className="hero-word hero-word--accent block break-words font-display text-[clamp(2.8rem,8vw,5.2rem)] uppercase tracking-[-0.05em] text-accent3">
                  Motion
                </span>
              </div>
              <p className="max-w-sm text-sm text-muted sm:text-[0.95rem]">
                Frontend systems shaped like campaigns: sharp hierarchy, clear
                interaction, and just enough movement to feel alive.
              </p>
            </div>
            <div className="hero-ribbon mt-8 overflow-hidden rounded-full border border-black/10 bg-base/70 py-2">
              <div className="hero-ribbon__track flex min-w-max items-center gap-4 px-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
                <span>Design systems</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent3" />
                <span>Product launches</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
                <span>Frontend direction</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Motion language</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent3" />
                <span>Design systems</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent2" />
                <span>Product launches</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span>Frontend direction</span>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-3 top-10 hidden rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink shadow-md sm:block">
              Loud ideas
            </div>
            <div className="pointer-events-none absolute right-4 top-[38%] hidden rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted shadow-md md:block">
              Story-first UI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
