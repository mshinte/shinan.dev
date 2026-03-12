class SectionStack extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="relative z-10 py-24" data-component="Stack">
        <div class="mx-auto w-[min(1120px,90vw)]">
          <div class="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p class="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Stack</p>
              <h2 class="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-[-0.02em]">
                The toolkit
              </h2>
            </div>
            <p class="mt-3 max-w-xl text-muted">
              A modular stack focused on speed, responsiveness, and playful
              motion.
            </p>
          </div>

          <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div class="grid gap-2 rounded-[18px] border border-black/10 bg-white p-5">
              <h3 class="font-display text-lg">Design</h3>
              <p class="text-muted">Figma, Framer, Tokens, Motion</p>
            </div>
            <div class="grid gap-2 rounded-[18px] border border-black/10 bg-white p-5">
              <h3 class="font-display text-lg">Frontend</h3>
              <p class="text-muted">React, Astro, Next.js, Webflow</p>
            </div>
            <div class="grid gap-2 rounded-[18px] border border-black/10 bg-white p-5">
              <h3 class="font-display text-lg">UX</h3>
              <p class="text-muted">Story mapping, Prototyping, User testing</p>
            </div>
            <div class="grid gap-2 rounded-[18px] border border-black/10 bg-white p-5">
              <h3 class="font-display text-lg">Build</h3>
              <p class="text-muted">Vite, GSAP, Tailwind (only when needed)</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("section-stack", SectionStack);
