class SiteAmbient extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="ambient">
        <div class="ambient__blob ambient__blob--a"></div>
        <div class="ambient__blob ambient__blob--b"></div>
        <div class="ambient__grid"></div>
      </div>
    `;
  }
}

customElements.define("site-ambient", SiteAmbient);
