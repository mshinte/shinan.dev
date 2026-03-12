class SectionHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="relative z-10 pb-24 pt-[120px]" data-component="Hero">
        <div class="mx-auto grid w-[min(1120px,90vw)] items-center gap-12 lg:grid-cols-2">
          <div class="grid gap-6">
            <div class="inline-flex w-fit items-center rounded-full bg-accent px-3.5 py-1.5 text-sm font-semibold">
              Available for collabs
            </div>
            <h1 class="font-display text-[clamp(2.6rem,5vw,4.6rem)] leading-[1.05] tracking-[-0.03em]">
              I build bold, fast websites that feel like a cultural moment.
            </h1>
            <p class="max-w-xl text-[1.05rem] text-muted">
              I’m Shinan — a web maker blending product thinking, playful motion,
              and clean engineering. Cool, but not chaotic. Simple, but never
              boring.
            </p>
            <div class="flex flex-wrap gap-4">
              <a
                class="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white shadow-button transition-transform duration-200 hover:-translate-y-0.5"
                href="work.html"
              >
                See featured work
              </a>
              <a
                class="inline-flex items-center justify-center gap-2 rounded-full px-0 py-3 font-semibold text-ink"
                href="contact.html"
              >
                Start a project
              </a>
            </div>
            <div class="flex flex-wrap gap-2.5">
              <span class="rounded-full border border-black/10 bg-white/50 px-3.5 py-2 text-sm">Brand sites</span>
              <span class="rounded-full border border-black/10 bg-white/50 px-3.5 py-2 text-sm">Product landing</span>
              <span class="rounded-full border border-black/10 bg-white/50 px-3.5 py-2 text-sm">Web apps</span>
              <span class="rounded-full border border-black/10 bg-white/50 px-3.5 py-2 text-sm">Motion UI</span>
            </div>
          </div>
          <div class="grid gap-5 rounded-[28px] bg-[linear-gradient(135deg,#ffffff,rgba(58,227,255,0.15))] p-7 shadow-soft">
            <div class="flex items-center justify-between text-[0.85rem] uppercase tracking-[0.16em] text-muted">
              <span>Now Playing</span>
              <span class="font-semibold text-ink">Live build</span>
            </div>
            <div class="grid gap-3">
              <p class="font-display text-[1.4rem]">Portfolio 03 / Neon Daylight</p>
              <p class="text-muted">
                Lightweight site system with modular sections, dramatic type, and
                instant load.
              </p>
              <div class="grid gap-4 sm:grid-cols-3">
                <div>
                  <p class="font-display text-[1.6rem] font-semibold">98</p>
                  <p class="text-xs text-muted">Lighthouse</p>
                </div>
                <div>
                  <p class="font-display text-[1.6rem] font-semibold">4</p>
                  <p class="text-xs text-muted">Week sprint</p>
                </div>
                <div>
                  <p class="font-display text-[1.6rem] font-semibold">12</p>
                  <p class="text-xs text-muted">Sections</p>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-3 text-[0.85rem] text-muted">
              <span>React + Astro + GSAP</span>
              <span class="h-1.5 w-1.5 rounded-full bg-accent3"></span>
              <span>2026</span>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("section-hero", SectionHero);
