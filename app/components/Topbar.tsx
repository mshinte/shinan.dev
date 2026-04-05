import Link from "next/link";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-base/90 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1120px,90vw)] flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-[18px]">
        <Link
          className="inline-flex max-w-full items-center gap-2.5 self-start break-words font-display font-bold tracking-[0.04em]"
          href="/"
        >
          <span className="h-3 w-3 rounded-full bg-accent3" />
          <span className="max-w-full"> Mohamed Shinan</span>
        </Link>
        <nav
          className="flex w-full flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-muted sm:w-auto sm:justify-end sm:text-base"
          aria-label="Primary"
        >
          {/* <Link className="transition-colors duration-200 hover:text-ink" href="/about">
            About
          </Link> */}
          <Link className="transition-colors duration-200 hover:text-ink" href="/experience">
            Experience
          </Link>
        
          {/* <Link className="transition-colors duration-200 hover:text-ink" href="/stack">
            Stack
          </Link> */}
          <Link className="transition-colors duration-200 hover:text-ink" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
