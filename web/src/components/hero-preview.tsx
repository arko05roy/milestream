import { StreamRail } from "@/components/stream-rail";

const DEMO_ROWS = [
  { label: "Contractor ID", value: "ARKORO", highlight: true },
  { label: "Stack cost",    value: "50 HAC" },
  { label: "MSTR formed",   value: "5,000" },
  { label: "Gig stream",    value: "$200 USDT" },
  { label: "Split",         value: "25% start · 75% delivery" },
] as const;

export function HeroPreview() {
  return (
    <aside
      className="animate-fade-up-delayed border border-border bg-elevated/40"
      aria-label="Example credential and payment stream"
    >
      {/* Header band — mirrors FormationReceipt */}
      <div className="flex items-center justify-between gap-4 border-b border-border/70 bg-stream/10 px-5 py-3">
        <p className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.2em] text-stream">
          Dispatch slip · demo
        </p>
        <time className="font-mono text-[0.65rem] text-ghost/70" dateTime="2026-06-28">
          2026-06-28
        </time>
      </div>

      {/* Data rows */}
      <div className="divide-y divide-border/40">
        {DEMO_ROWS.map((row, i) => (
          <div
            key={row.label}
            className="animate-ticker-in flex items-baseline justify-between gap-4 px-5 py-3"
            style={{ animationDelay: `${0.08 * i + 0.2}s` }}
          >
            <span className="shrink-0 text-[0.65rem] uppercase tracking-wider text-ghost">
              {row.label}
            </span>
            <span
              className={`text-right font-mono text-sm ${
                "highlight" in row && row.highlight
                  ? "font-bold text-stream"
                  : "text-frost"
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* Route rail footer */}
      <div className="border-t border-border bg-ink/30 px-5 py-5">
        <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ghost">
          Route checkpoints
        </p>
        <StreamRail active="paid" />
        <div className="relative mt-4 h-px overflow-hidden bg-border/50">
          <span
            className="animate-flow-dot absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-stream-glow shadow-[0_0_8px_rgba(240,184,77,0.6)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </aside>
  );
}
