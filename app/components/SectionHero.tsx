import Link from "next/link";

export default function SectionHero() {
  return (
    <section className="relative z-10 pb-24 pt-[120px]">
      <div className="mx-auto grid w-[min(1120px,90vw)] items-center gap-12 lg:grid-cols-2">
        <div className="grid gap-6">
          <div className="inline-flex w-fit items-center rounded-full bg-accent px-3.5 py-1.5 text-sm font-semibold">
            Available for collabs
          </div>
          <h1 className="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[1.05] tracking-[-0.03em]">
            I build websites that feel like a cultural moment.
          </h1>
          <p className="max-w-xl text-[1.05rem] text-muted">
            I’m Shinan — a web maker blending product thinking, playful motion,
            and clean engineering. Cool, but not chaotic. Simple, but never
            boring.
          </p>
          <div className="flex flex-wrap gap-4">
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
          </div>
          <div className="flex flex-wrap gap-2.5">
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
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="group relative grid place-items-center rounded-[28px] bg-[linear-gradient(135deg,#ffffff,rgba(58,227,255,0.15))] p-10 shadow-soft">
            <div className="avatar-bubble absolute -right-4 top-6 rounded-2xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-ink shadow-md">
              Hi there!
            </div>
            <svg
              className="h-64 w-64"
              viewBox="0 0 240 260"
              role="img"
              aria-label="Cartoon developer avatar waving"
            >
              <defs>
                <linearGradient id="hoodieGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#101012" />
                  <stop offset="100%" stopColor="#2d2f36" />
                </linearGradient>
              </defs>
              <rect x="36" y="12" width="168" height="236" rx="32" fill="#f7f4ef" />
              <path
                d="M62 172c10-36 44-60 78-60s68 24 78 60v40H62v-40Z"
                fill="url(#hoodieGradient)"
                stroke="#101012"
                strokeWidth="4"
              />
              <path
                d="M78 136c10-16 26-26 42-26s32 10 42 26"
                fill="#ff7a59"
                stroke="#101012"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="120" cy="78" r="42" fill="#ffffff" stroke="#101012" strokeWidth="4" />
              <path
                d="M86 64c10-18 26-26 46-26 12 0 24 3 34 10l-10 18c-8-6-16-8-24-8-12 0-22 6-28 16Z"
                fill="#ff7a59"
              />
              <circle cx="104" cy="82" r="4.5" fill="#101012" />
              <circle cx="136" cy="82" r="4.5" fill="#101012" />
              <path
                d="M102 98c10 10 26 10 36 0"
                stroke="#101012"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <g className="avatar-wave">
                <path
                  d="M168 146c16 6 26 18 30 36"
                  fill="none"
                  stroke="#101012"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <circle cx="202" cy="192" r="10" fill="#ffffff" stroke="#101012" strokeWidth="4" />
              </g>
              <path
                d="M70 176c8 10 18 16 30 18"
                fill="none"
                stroke="#101012"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <circle cx="102" cy="202" r="10" fill="#ffffff" stroke="#101012" strokeWidth="4" />
              <path
                d="M94 54c6-20 24-34 46-34 10 0 20 3 28 8"
                fill="none"
                stroke="#3ae3ff"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
            <div className="mt-6 flex items-center gap-3 text-[0.85rem] uppercase tracking-[0.16em] text-muted">
              <span>Graffiti Dev</span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent3" />
              <span>Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
