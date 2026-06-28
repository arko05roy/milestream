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
    <div className="border-l-[3px] border-stream bg-elevated/60 p-5 sm:p-6">
      <h3 className="font-display text-lg font-semibold text-stream">
        Formation receipt
      </h3>
      <dl className="mt-4 space-y-3">
        <Row label="Contractor ID" value={record.contractorId} mono />
        <Row label="MSTR formed" value={record.mstrAmount.toLocaleString()} mono />
        <Row label="Stack cost" value={`${record.stackCostHac} HAC`} mono />
        <Row label="Formed at" value={formatTime(record.formedAt)} mono />
        <div className="flex items-baseline justify-between gap-4 border-t border-border pt-3">
          <dt className="text-xs uppercase tracking-wider text-ghost">Status</dt>
          <dd>
            <span
              className={`inline-block rounded-md border px-2 py-0.5 text-xs font-medium ${
                isFormed
                  ? "border-proof/50 bg-proof/10 text-proof"
                  : "border-stream/50 bg-stream/10 text-stream"
              }`}
            >
              {isFormed ? "formed on-chain" : "mocked for demo"}
            </span>
          </dd>
        </div>
        {record.explorerUrl && (
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-xs uppercase tracking-wider text-ghost">Explorer</dt>
            <dd>
              <a
                href={record.explorerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-proof hover:underline"
              >
                Verify
              </a>
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}

function Row({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3 last:border-0">
      <dt className="shrink-0 text-xs uppercase tracking-wider text-ghost">{label}</dt>
      <dd className={`text-right text-sm ${mono ? "font-mono" : ""} text-frost`}>
        {value}
      </dd>
    </div>
  );
}
