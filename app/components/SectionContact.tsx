import ContactForm from "./ContactForm";

export default function SectionContact() {
  return (
    <section className="relative z-10 py-20 lg:py-24">
      <div className="mx-auto grid w-[min(1120px,90vw)] items-start gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted">Contact</p>
          <h2 className="font-display text-[clamp(2rem,3vw,3rem)] leading-[1.1] tracking-[-0.02em]">
            Let’s build something that hits.
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Drop a short brief, timeline, and budget to inquiry@shinan.dev, I’ll reply within 48
            hours.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
