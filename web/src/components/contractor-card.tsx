import Link from "next/link";
import type { ContractorRecord } from "@/lib/types";

export function ContractorCard({
  contractor,
  isDemo,
}: {
  contractor: ContractorRecord;
  isDemo: boolean;
}) {
  const proofHref = `/proof/${contractor.contractorId}${isDemo ? "?demo=1" : ""}`;

  return (
    <article className="group overflow-hidden border border-border bg-elevated/30 transition-[border-color,background-color] duration-200 hover:border-stream/50 hover:bg-elevated/50">
      {/* ID plate — the credential's visual identity */}
      <div className="relative overflow-hidden border-b border-border/60 bg-track/70 px-5 py-5">
        {/* Watermark grid — only visible on hover */}
        <div
          className="id-plate-grid absolute inset-0 text-frost opacity-0 transition-opacity duration-300 group-hover:opacity-[0.035]"
          aria-hidden="true"
        />
        <div className="relative flex items-start justify-between gap-3">
          <p className="animate-id-glow font-mono text-[1.65rem] font-bold leading-none tracking-[0.22em] text-stream">
            {contractor.contractorId}
          </p>
          <span
            className={`mt-1 shrink-0 border px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-widest ${
              isDemo
                ? "border-stream/40 bg-stream/10 text-stream"
                : "border-proof/40 bg-proof/10 text-proof"
            }`}
          >
            {isDemo ? "demo" : "on-chain"}
          </span>
        </div>
        <p className="relative mt-2 text-sm text-ghost">
          {contractor.role}
          {contractor.skills ? (
            <>
              <span className="mx-1.5 opacity-40">·</span>
              <span className="text-ghost/80">{contractor.skills}</span>
            </>
          ) : null}
        </p>
      </div>

      {/* Action strip */}
      <div className="flex flex-wrap items-center gap-1.5 bg-ink/20 px-4 py-3">
        <Link
          href={proofHref}
          className="rounded border border-border/70 px-3 py-1.5 text-xs font-medium text-ghost transition-[color,border-color] duration-150 hover:border-stream/50 hover:text-frost"
        >
          View proof
        </Link>
        {contractor.explorerUrl && (
          <a
            href={contractor.explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-border/70 px-3 py-1.5 text-xs text-proof transition-[color,border-color] duration-150 hover:border-proof/50"
          >
            Explorer ↗
          </a>
        )}
        <Link
          href={`/gig?contractor=${contractor.contractorId}`}
          className="ml-auto rounded bg-stream px-3 py-1.5 text-xs font-medium text-ink transition-[background-color] duration-150 hover:bg-stream-glow"
        >
          Fund gig →
        </Link>
      </div>
    </article>
  );
}
