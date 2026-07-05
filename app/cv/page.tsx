import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import { CV_SESSION_COOKIE, verifyCvToken } from "../lib/cvAccess";
import { projects } from "../components/work/workData";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Private CV | Mohamed Shinan",
  description: "Private professional profile for invited recipients.",
  robots: {
    follow: false,
    index: false
  }
};

type CvPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function CvPage({ searchParams }: CvPageProps) {
  const secret = process.env.CV_ACCESS_SECRET;
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(CV_SESSION_COOKIE)?.value;
  const session =
    secret && sessionToken
      ? verifyCvToken(sessionToken, secret, "session")
      : null;

  if (!session) {
    const { error } = await searchParams;

    return (
      <section className="relative z-10 py-14 lg:py-20">
        <div className="mx-auto w-[min(760px,90vw)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Private CV
          </p>
          <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.08]">
            Invitation required.
          </h1>
          <p className="mt-5 max-w-2xl text-muted">
            This CV is available to invited recipients through a secure, expiring
            access link.
          </p>
          {error ? (
            <p className="mt-5 border-l-2 border-accent3 pl-4 text-sm text-muted">
              {error === "configuration"
                ? "CV access is not configured yet."
                : "This invitation link is missing, invalid, or has expired."}
            </p>
          ) : null}
          <Link
            className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 font-semibold text-white"
            href="/contact"
          >
            Request access
          </Link>
        </div>
      </section>
    );
  }

  return (
    <article className="relative z-10 py-12 lg:py-16">
      <div className="mx-auto w-[min(900px,90vw)]">
        <header className="border-b border-black/10 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Private professional profile
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-none">
            Mohamed Shinan
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Web developer focused on building practical, reliable digital
            experiences.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a className="font-semibold hover:text-accent3" href="mailto:info@shinan.dev">
              info@shinan.dev
            </a>
            <span className="text-muted">Maldives</span>
          </div>
        </header>

        <section className="grid gap-5 border-b border-black/10 py-8 md:grid-cols-[180px,1fr]">
          <h2 className="font-display text-xl">Profile</h2>
          <p className="text-muted">
            I turn ideas into fast, thoughtful websites, combining frontend
            engineering with product and interface design thinking.
          </p>
        </section>

        <section className="grid gap-6 border-b border-black/10 py-8 md:grid-cols-[180px,1fr]">
          <h2 className="font-display text-xl">Selected work</h2>
          <div className="grid gap-7">
            {projects.map((project) => (
              <div key={project.title}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-semibold">{project.title}</h3>
                  <span className="text-sm text-muted">{project.year}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{project.role}</p>
                <p className="mt-2 text-muted">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5 py-8 md:grid-cols-[180px,1fr]">
          <h2 className="font-display text-xl">Capabilities</h2>
          <p className="text-muted">
            Next.js, React, TypeScript, Tailwind CSS, responsive UI engineering,
            Figma, wireframing, product thinking, and interaction design.
          </p>
        </section>
      </div>
    </article>
  );
}
