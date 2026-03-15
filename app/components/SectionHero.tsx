import Link from "next/link";
import AvatarMascot from "./AvatarMascot";

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
        <div className="relative flex items-center justify-center">
          <AvatarMascot />
        </div>
      </div>
    </section>
  );
}
