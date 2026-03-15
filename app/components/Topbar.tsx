import Link from "next/link";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-black/10 bg-base/90 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1120px,90vw)] items-center justify-between gap-6 py-[18px]">
        <Link
          className="inline-flex items-center gap-2.5 font-display font-bold tracking-[0.04em]"
          href="/"
        >
          <span className="h-3 w-3 rounded-full bg-accent3" />
          <span> Mohamed Shinan</span>
        </Link>
        <nav className="hidden items-center gap-5 font-medium text-muted md:flex" aria-label="Primary">
          {/* <Link className="transition-colors duration-200 hover:text-ink" href="/about">
            About
          </Link> */}
          <Link className="transition-colors duration-200 hover:text-ink" href="/work">
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
