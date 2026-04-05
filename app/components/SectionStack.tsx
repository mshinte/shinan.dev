export default function SectionStack() {
  return (
    <section className="relative z-10 py-20 lg:py-24">
      <div className="mx-auto w-[min(1120px,90vw)]">
        <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Stack</p>
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-[-0.02em]">
              The toolkit
            </h2>
          </div>
          <p className="max-w-xl text-muted">
            A modular stack focused on speed, responsiveness, and clean delivery.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="grid gap-2 rounded-[18px] border border-black/10 bg-white p-5">
            <h3 className="font-display text-lg">Design</h3>
            <p className="text-muted">Figma, wireframes, visual systems, motion direction</p>
          </div>
          <div className="grid gap-2 rounded-[18px] border border-black/10 bg-white p-5">
            <h3 className="font-display text-lg">Frontend</h3>
            <p className="text-muted">Next.js, React, Tailwind CSS, responsive UI engineering</p>
          </div>
          <div className="grid gap-2 rounded-[18px] border border-black/10 bg-white p-5">
            <h3 className="font-display text-lg">Product</h3>
            <p className="text-muted">Information architecture, UX thinking, interaction clarity</p>
          </div>
          <div className="grid gap-2 rounded-[18px] border border-black/10 bg-white p-5">
            <h3 className="font-display text-lg">Build</h3>
            <p className="text-muted">GitHub, Vercel, performance tuning, maintainable handoff</p>
          </div>
        </div>
      </div>
    </section>
  );
}
