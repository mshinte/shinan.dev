class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="relative z-10 py-10 pb-[60px] text-muted">
        <div class="mx-auto flex w-[min(1120px,90vw)] flex-wrap items-center justify-between gap-3">
          <p>Shinan © 2026</p>
          <p>Built with clarity + taste.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);
