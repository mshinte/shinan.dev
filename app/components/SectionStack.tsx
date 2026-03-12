export default function SectionStack() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto w-[min(1120px,90vw)]">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Stack</p>
            <h2 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-[-0.02em]">
              The toolkit
            </h2>
          </div>
          <p className="mt-3 max-w-xl text-muted">
            A modular stack focused on speed, responsiveness, and playful
            motion.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-2 rounded-[18px] border border-black/10 bg-white p-5">
            <h3 className="font-display text-lg">Design</h3>
            <p className="text-muted">Figma, Framer, Tokens, Motion</p>
          </div>
          <div className="grid gap-2 rounded-[18px] border border-black/10 bg-white p-5">
            <h3 className="font-display text-lg">Frontend</h3>
            <p className="text-muted">React, Astro, Next.js, Webflow</p>
          </div>
          <div className="grid gap-2 rounded-[18px] border border-black/10 bg-white p-5">
            <h3 className="font-display text-lg">UX</h3>
            <p className="text-muted">Story mapping, Prototyping, User testing</p>
          </div>
          <div className="grid gap-2 rounded-[18px] border border-black/10 bg-white p-5">
            <h3 className="font-display text-lg">Build</h3>
            <p className="text-muted">Vite, GSAP, Tailwind (only when needed)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
