import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";
import CvSessionTimer from "../components/cv/CvSessionTimer";
import CvTabs from "../components/cv/CvTabs";
import { CV_SESSION_COOKIE, verifyCvToken } from "../lib/cvAccess";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mohamed Shinan",
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
          {/* <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Private CV
          </p> */}
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
    <article className="relative z-10 py-10 lg:py-14">
      <div className="mx-auto w-[min(1000px,90vw)]">
        <header>
          {/* <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
            Private CV
          </p> */}
          <div className="mb-3 flex justify-end">
            <CvSessionTimer expiresAt={session.exp} />
          </div>
          <h1 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.08]">
            Professional profile
          </h1>
          <p className="mt-3 w-full text-justify leading-7 text-muted">
            Recent Bachelor of Software Engineering graduate from Asia Pacific University of Technology and
            Innovation with over seven years of retail experience. Strong problem-solving, communication, and
            teamwork skills, with a solid software engineering foundation. Seeking an opportunity as a Software
            Engineer while working toward becoming a Full Stack Developer.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {/* <a className="font-semibold hover:text-accent3" href="mailto:info@shinan.dev">
              info@shinan.dev
            </a> */}
            {/* <span className="text-muted">Maldives</span> */}
          </div>
        </header>
        <CvTabs />
      </div>
    </article>
  );
}
