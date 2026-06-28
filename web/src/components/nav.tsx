import Link from "next/link";
import { DemoBadge } from "./demo-badge";

const links = [
  { href: "/form", label: "Form credential" },
  { href: "/directory", label: "Directory" },
  { href: "/gig", label: "Start gig" },
];

function MileMark() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-stream"
    >
      <rect x="1" y="7" width="16" height="4" fill="currentColor" opacity="0.25" />
      <rect x="7" y="1" width="4" height="16" fill="currentColor" />
    </svg>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-slate/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-frost transition-colors hover:text-stream"
        >
          <MileMark />
          MileStream
        </Link>
        <nav className="flex flex-1 flex-wrap justify-end gap-0.5 sm:justify-center sm:gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-sm text-ghost transition-[color,background-color] duration-150 hover:bg-elevated hover:text-frost"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <DemoBadge />
      </div>
    </header>
  );
}
