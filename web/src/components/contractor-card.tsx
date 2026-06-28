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
    <article className="group border-l-[3px] border-border bg-elevated/40 p-4 transition-colors hover:border-stream hover:bg-elevated/70 motion-reduce:transition-none">
      <p className="font-mono text-lg font-medium text-stream">
        {contractor.contractorId}
      </p>
      <p className="mt-1 text-sm text-ghost">
        {contractor.role}
        {contractor.skills ? ` · ${contractor.skills}` : ""}
      </p>
      <p className="mt-2">
        <span
          className={`inline-block rounded-md border px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide ${
            isDemo
              ? "border-stream/40 bg-stream/10 text-stream"
              : "border-proof/40 bg-proof/10 text-proof"
          }`}
        >
          {isDemo ? "mocked for demo" : "on-chain"}
        </span>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={proofHref}
          className="rounded-lg border border-border px-3 py-1.5 text-sm text-frost transition-colors hover:border-stream hover:text-stream"
        >
          View proof
        </Link>
        <Link
          href={`/gig?contractor=${contractor.contractorId}`}
          className="rounded-lg bg-stream px-3 py-1.5 text-sm font-medium text-ink transition-colors hover:bg-stream-glow"
        >
          Fund gig
        </Link>
        {contractor.explorerUrl && (
          <a
            href={contractor.explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-3 py-1.5 text-sm text-proof transition-colors hover:border-proof"
          >
            Explorer
          </a>
        )}
      </div>
    </article>
  );
}
