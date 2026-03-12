class SiteTopbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="sticky top-0 z-10 border-b border-black/10 bg-base/90 backdrop-blur-xl">
        <div class="mx-auto flex w-[min(1120px,90vw)] items-center justify-between gap-6 py-[18px]">
          <a class="inline-flex items-center gap-2.5 font-display font-bold tracking-[0.04em]" href="index.html">
            <span class="h-3 w-3 rounded-full bg-accent3"></span>
            <span>Shinan</span>
          </a>
          <nav class="hidden items-center gap-5 font-medium text-muted md:flex" aria-label="Primary">
            <a class="transition-colors duration-200 hover:text-ink" href="work.html">Work</a>
            <a class="transition-colors duration-200 hover:text-ink" href="about.html">About</a>
            <a class="transition-colors duration-200 hover:text-ink" href="stack.html">Stack</a>
            <a class="transition-colors duration-200 hover:text-ink" href="contact.html">Contact</a>
          </nav>
          <a
            class="inline-flex items-center justify-center rounded-full border border-stroke px-5 py-2.5 font-semibold text-ink transition-colors duration-200 hover:bg-ink/5"
            href="contact.html"
          >
            Let’s build
          </a>
        </div>
      </header>
    `;
  }
}

customElements.define("site-topbar", SiteTopbar);
