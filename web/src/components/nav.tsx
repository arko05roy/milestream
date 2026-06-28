import Link from "next/link";
import { DemoBadge } from "./demo-badge";

const links = [
  { href: "/form", label: "Form credential" },
  { href: "/directory", label: "Directory" },
  { href: "/gig", label: "Start gig" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-slate/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center gap-4 px-5 py-3.5">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-frost transition-colors hover:text-stream"
        >
          MileStream
        </Link>
        <nav className="flex flex-1 flex-wrap gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm text-ghost transition-colors hover:bg-elevated hover:text-stream"
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
