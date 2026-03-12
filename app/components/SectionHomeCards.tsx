import Link from "next/link";

export default function SectionHomeCards() {
  return (
    <section className="relative z-10 py-20">
      <div className="mx-auto w-[min(1120px,90vw)]">
        <div className="mb-10">
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Explore</p>
          <h2 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-[-0.02em]">
            Choose a lane
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Link
            className="group grid min-h-[180px] gap-3 rounded-[18px] border border-black/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
            href="/work"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Work</p>
            <h3 className="font-display text-lg">Projects</h3>
            <p className="text-sm text-muted">Case studies + launches.</p>
            <span className="text-sm font-semibold">View work</span>
          </Link>
          <Link
            className="group grid min-h-[180px] gap-3 rounded-[18px] border border-black/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
            href="/about"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted">About</p>
            <h3 className="font-display text-lg">Story</h3>
            <p className="text-sm text-muted">Focus + values.</p>
            <span className="text-sm font-semibold">Meet Shinan</span>
          </Link>
          <Link
            className="group grid min-h-[180px] gap-3 rounded-[18px] border border-black/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
            href="/stack"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Stack</p>
            <h3 className="font-display text-lg">Toolkit</h3>
            <p className="text-sm text-muted">What powers the builds.</p>
            <span className="text-sm font-semibold">See stack</span>
          </Link>
          <Link
            className="group grid min-h-[180px] gap-3 rounded-[18px] border border-black/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
            href="/contact"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Contact</p>
            <h3 className="font-display text-lg">Start</h3>
            <p className="text-sm text-muted">Brief + timeline.</p>
            <span className="text-sm font-semibold">Get in touch</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
