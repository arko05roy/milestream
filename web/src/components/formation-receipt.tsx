import type { ContractorRecord } from "@/lib/types";

function formatTime(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function FormationReceipt({ record }: { record: ContractorRecord }) {
  const isFormed = record.status === "formed";

  return (
    <div className="border border-border">
      {/* Receipt header band */}
      <div className="flex items-center justify-between gap-4 border-b border-border/70 bg-stream/10 px-5 py-3">
        <h3 className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.2em] text-stream">
          Formation Receipt
        </h3>
        <time className="font-mono text-[0.65rem] text-ghost" dateTime={record.formedAt}>
          {formatTime(record.formedAt)}
        </time>
      </div>

      {/* Data rows */}
      <dl className="divide-y divide-border/40 bg-elevated/20">
        <Row label="Contractor ID" value={record.contractorId} highlight />
        <Row label="MSTR formed" value={record.mstrAmount.toLocaleString()} />
        <Row label="Stack cost" value={`${record.stackCostHac} HAC`} />
        <Row
          label="Status"
          value={isFormed ? "formed on-chain" : "mocked for demo"}
          status={isFormed ? "on-chain" : "demo"}
        />
        {record.explorerUrl && (
          <div className="flex items-baseline justify-between gap-4 px-5 py-3">
            <dt className="shrink-0 text-[0.65rem] uppercase tracking-wider text-ghost">
              Explorer
            </dt>
            <dd>
              <a
                href={record.explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-proof underline-offset-2 hover:underline"
              >
                Verify ↗
              </a>
            </dd>
          </div>
        )}
      </dl>

      {/* Perforation footer */}
      <div className="border-t border-dashed border-border/60 bg-ink/30 px-5 py-3">
        <p className="text-center font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ghost/50">
          {isFormed
            ? "permanent record — explorer.hacash.org"
            : "demo only — not on explorer.hacash.org"}
        </p>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  highlight,
  status,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  status?: "on-chain" | "demo";
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 px-5 py-3">
      <dt className="shrink-0 text-[0.65rem] uppercase tracking-wider text-ghost">
        {label}
      </dt>
      <dd className="text-right">
        {status ? (
          <span
            className={`inline-block border px-2 py-0.5 text-xs font-medium ${
              status === "on-chain"
                ? "border-proof/50 bg-proof/10 text-proof"
                : "border-stream/50 bg-stream/10 text-stream"
            }`}
          >
            {value}
          </span>
        ) : (
          <span
            className={`font-mono text-sm ${highlight ? "font-bold text-stream" : "text-frost"}`}
          >
            {value}
          </span>
        )}
      </dd>
    </div>
  );
}
