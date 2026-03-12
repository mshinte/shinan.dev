class SectionContact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="relative z-10 py-24" data-component="Contact">
        <div class="mx-auto grid w-[min(1120px,90vw)] items-start gap-10 lg:grid-cols-2">
          <div>
            <p class="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Contact</p>
            <h2 class="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-[-0.02em]">
              Let’s build something that hits.
            </h2>
            <p class="mt-3 max-w-xl text-muted">
              Drop a short brief, timeline, and budget. I’ll reply within 48
              hours.
            </p>
            <div class="mt-5 grid gap-3 font-medium text-ink">
              <a class="hover:opacity-70" href="mailto:hello@shinan.studio">hello@shinan.studio</a>
              <a class="hover:opacity-70" href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a class="hover:opacity-70" href="https://www.behance.net" target="_blank" rel="noreferrer">
                Behance
              </a>
            </div>
          </div>
          <form class="grid gap-4 rounded-[28px] border border-black/10 bg-card p-6">
            <div class="grid gap-2">
              <label class="text-xs uppercase tracking-[0.18em] text-muted" for="name">Name</label>
              <input
                class="rounded-[12px] border border-black/10 bg-white/90 px-3.5 py-3"
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
              />
            </div>
            <div class="grid gap-2">
              <label class="text-xs uppercase tracking-[0.18em] text-muted" for="email">Email</label>
              <input
                class="rounded-[12px] border border-black/10 bg-white/90 px-3.5 py-3"
                id="email"
                name="email"
                type="email"
                placeholder="name@email.com"
              />
            </div>
            <div class="grid gap-2">
              <label class="text-xs uppercase tracking-[0.18em] text-muted" for="project">
                Project details
              </label>
              <textarea
                class="rounded-[12px] border border-black/10 bg-white/90 px-3.5 py-3"
                id="project"
                name="project"
                rows="4"
                placeholder="Tell me about the project"
              ></textarea>
            </div>
            <button
              class="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white shadow-button transition-transform duration-200 hover:-translate-y-0.5"
              type="submit"
            >
              Send brief
            </button>
          </form>
        </div>
      </section>
    `;
  }
}

customElements.define("section-contact", SectionContact);
