class SectionHomeCards extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="relative z-10 py-20" data-component="HomeCards">
        <div class="mx-auto w-[min(1120px,90vw)]">
          <div class="mb-10">
            <p class="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Explore</p>
            <h2 class="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-[-0.02em]">
              Choose a lane
            </h2>
          </div>
          <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <a
              class="group grid min-h-[180px] gap-3 rounded-[18px] border border-black/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
              href="work.html"
            >
              <p class="text-xs uppercase tracking-[0.2em] text-muted">Work</p>
              <h3 class="font-display text-lg">Projects</h3>
              <p class="text-sm text-muted">Case studies + launches.</p>
              <span class="text-sm font-semibold">View work</span>
            </a>
            <a
              class="group grid min-h-[180px] gap-3 rounded-[18px] border border-black/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
              href="about.html"
            >
              <p class="text-xs uppercase tracking-[0.2em] text-muted">About</p>
              <h3 class="font-display text-lg">Story</h3>
              <p class="text-sm text-muted">Focus + values.</p>
              <span class="text-sm font-semibold">Meet Shinan</span>
            </a>
            <a
              class="group grid min-h-[180px] gap-3 rounded-[18px] border border-black/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
              href="stack.html"
            >
              <p class="text-xs uppercase tracking-[0.2em] text-muted">Stack</p>
              <h3 class="font-display text-lg">Toolkit</h3>
              <p class="text-sm text-muted">What powers the builds.</p>
              <span class="text-sm font-semibold">See stack</span>
            </a>
            <a
              class="group grid min-h-[180px] gap-3 rounded-[18px] border border-black/10 bg-white p-5 transition-transform duration-200 hover:-translate-y-1"
              href="contact.html"
            >
              <p class="text-xs uppercase tracking-[0.2em] text-muted">Contact</p>
              <h3 class="font-display text-lg">Start</h3>
              <p class="text-sm text-muted">Brief + timeline.</p>
              <span class="text-sm font-semibold">Get in touch</span>
            </a>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("section-home-cards", SectionHomeCards);
