"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" }
];

export default function Topbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-base/90 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1120px,90vw)] flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-[18px]">
        <Link
          className="inline-flex max-w-full items-center gap-2.5 self-start break-words font-display font-bold tracking-[0.04em]"
          href="/"
        >
          <span className="max-w-full"> Mohamed Shinan</span>
        </Link>
        <nav
          className="flex w-full flex-wrap items-center gap-x-2 gap-y-2 border-t border-black/10 pt-3 text-sm font-medium sm:w-auto sm:justify-end sm:border-t-0 sm:pt-0 sm:text-base"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full px-3 py-1.5 transition-colors duration-200 ${
                  isActive
                    ? "bg-ink text-white"
                    : "text-ink hover:bg-white/70 hover:text-accent3"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
