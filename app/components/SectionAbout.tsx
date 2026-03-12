export default function SectionAbout() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto grid w-[min(1120px,90vw)] items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">About</p>
          <h2 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-[-0.02em]">
            Simple systems, loud outcomes.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            I design and build component-first experiences that scale. Think
            adaptive grids, smart motion, and content that feels alive. If
            you’ve got a brand with energy, I’ll help it show up.
          </p>
          <div className="mt-8 grid gap-5">
            <div className="grid grid-cols-[auto,1fr] gap-4">
              <span className="font-display text-base font-semibold text-accent3">01</span>
              <div>
                <h3 className="font-semibold">Component libraries</h3>
                <p className="text-muted">
                  Reusable sections that stay flexible across campaigns,
                  product, and content.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[auto,1fr] gap-4">
              <span className="font-display text-base font-semibold text-accent3">02</span>
              <div>
                <h3 className="font-semibold">Speed + polish</h3>
                <p className="text-muted">
                  Fast builds with cinematic motion, without slowing the stack.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[auto,1fr] gap-4">
              <span className="font-display text-base font-semibold text-accent3">03</span>
              <div>
                <h3 className="font-semibold">Story-first</h3>
                <p className="text-muted">
                  Each page is a narrative arc: hook, depth, conversion, repeat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-5">
          <div className="rounded-[18px] border border-black/10 bg-glass p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Currently</p>
            <h3 className="my-3 font-display text-[1.4rem]">Building for youth-led brands.</h3>
            <p className="text-muted">
              Focused on fashion, music, and creator economy startups.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <span className="rounded-full bg-black/5 px-3 py-1.5 text-xs">Remote</span>
              <span className="rounded-full bg-black/5 px-3 py-1.5 text-xs">GMT+5</span>
              <span className="rounded-full bg-black/5 px-3 py-1.5 text-xs">Freelance</span>
            </div>
          </div>
          <div className="rounded-[18px] border border-black/10 bg-[#fff9f2] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Services</p>
            <ul className="mt-4 grid list-none gap-3">
              <li>Design systems</li>
              <li>Landing pages</li>
              <li>Motion prototyping</li>
              <li>Webflow / Astro builds</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
