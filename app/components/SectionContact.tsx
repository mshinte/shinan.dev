export default function SectionContact() {
  return (
    <section className="relative z-10 py-24">
      <div className="mx-auto grid w-[min(1120px,90vw)] items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Contact</p>
          <h2 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-[-0.02em]">
            Let’s build something that hits.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Drop a short brief, timeline, and budget. I’ll reply within 48
            hours.
          </p>
          <div className="mt-5 grid gap-3 font-medium text-ink">
            <a className="hover:opacity-70" href="mailto:hello@shinan.studio">
              hello@shinan.studio
            </a>
            <a className="hover:opacity-70" href="https://www.instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="hover:opacity-70" href="https://www.behance.net" target="_blank" rel="noreferrer">
              Behance
            </a>
          </div>
        </div>
        <form className="grid gap-4 rounded-[28px] border border-black/10 bg-card p-6">
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.18em] text-muted" htmlFor="name">
              Name
            </label>
            <input
              className="rounded-[12px] border border-black/10 bg-white/90 px-3.5 py-3"
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.18em] text-muted" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-[12px] border border-black/10 bg-white/90 px-3.5 py-3"
              id="email"
              name="email"
              type="email"
              placeholder="name@email.com"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.18em] text-muted" htmlFor="project">
              Project details
            </label>
            <textarea
              className="rounded-[12px] border border-black/10 bg-white/90 px-3.5 py-3"
              id="project"
              name="project"
              rows={4}
              placeholder="Tell me about the project"
            />
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-white shadow-button transition-transform duration-200 hover:-translate-y-0.5"
            type="submit"
          >
            Send brief
          </button>
        </form>
      </div>
    </section>
  );
}
