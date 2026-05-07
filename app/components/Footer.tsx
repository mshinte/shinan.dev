import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-black/10 py-8 text-sm text-muted">
      <div className="mx-auto flex w-[min(1120px,90vw)] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Mohamed Shinan</p>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Footer">
          <Link className="transition-colors duration-200 hover:text-accent3" href="/about">
            About
          </Link>
          <Link className="transition-colors duration-200 hover:text-accent3" href="/experience">
            Experience
          </Link>
          <Link className="transition-colors duration-200 hover:text-accent3" href="/stack">
            Stack
          </Link>
          <Link className="transition-colors duration-200 hover:text-accent3" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
