import type { ReactNode } from "react";

const professionalLinks = [
  {
    href: "https://www.linkedin.com/in/mohamedshinan/",
    label: "LinkedIn",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7.5 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.84c0-1.87-.03-4.27-2.6-4.27-2.6 0-3 2.03-3 4.13V23h-4V8Z" />
      </svg>
    )
  },
  {
    href: "https://github.com/mohamedshinan",
    label: "GitHub",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.05 0 0 .96-.31 3.16 1.18A10.94 10.94 0 0 1 12 6.04c.98 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.58.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.15v3.14c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    )
  },
  {
    href: "mailto:inquiry@shinan.dev",
    label: "Email",
    icon: (
      <svg aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    )
  }
];

type IconLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
};

function IconLink({ href, icon, label }: IconLinkProps) {
  const isEmail = href.startsWith("mailto:");

  return (
    <a
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-ink transition-colors duration-200 hover:bg-ink hover:text-white"
      href={href}
      rel={isEmail ? undefined : "noreferrer"}
      target={isEmail ? undefined : "_blank"}
    >
      {icon}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-black/10 py-6 text-sm text-muted">
      <div className="mx-auto flex w-[min(1120px,90vw)] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Mohamed Shinan</p>
        <nav className="flex flex-wrap items-center gap-3" aria-label="Professional links">
          {professionalLinks.map((link) => (
            <IconLink
              href={link.href}
              icon={link.icon}
              key={link.label}
              label={link.label}
            />
          ))}
        </nav>
      </div>
    </footer>
  );
}
