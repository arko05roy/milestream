"use client";

import { use } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Button } from "@/components/button";
import { FormationReceipt } from "@/components/formation-receipt";
import { PageHeader } from "@/components/page-header";
import { STACK_COST_HAC } from "@/lib/constants";
import { useDemoStore } from "@/hooks/use-demo-store";
import { ON_CHAIN_CONTRACTORS } from "@/lib/on-chain";

function ProofContent({ id }: { id: string }) {
  const searchParams = useSearchParams();
  const isDemo = searchParams.get("demo") === "1";
  const { store, hydrated } = useDemoStore();

  if (!hydrated) {
    return <p className="text-sm text-ghost">Loading proof…</p>;
  }

  const record = isDemo
    ? store.contractors.find((c) => c.contractorId === id)
    : ON_CHAIN_CONTRACTORS.find((c) => c.contractorId === id);

  if (!record) {
    return (
      <>
        <PageHeader title="Contractor not found" />
        <p className="text-sm text-ghost">
          No formation record for{" "}
          <span className="font-mono text-frost">{id}</span>.
        </p>
        <div className="mt-6">
          <Button href="/directory">Back to directory</Button>
        </div>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Public proof — reviewer view"
        title={
          <>
            Contractor{" "}
            <span className="font-mono text-stream">{record.contractorId}</span>
          </>
        }
        lead={`${record.role}${record.skills ? ` · ${record.skills}` : ""}`}
      />

      <p className="mb-6 text-sm text-ghost">
        Anyone can open this page to verify the contractor&apos;s HACD formation
        record — not just the contractor.
      </p>

      <FormationReceipt record={record} />

      <article className="mt-6 border border-border bg-elevated/30">
        <div className="border-b border-border/60 bg-track/50 px-5 py-3">
          <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ghost">
            Why this can&apos;t be faked
          </h2>
        </div>
        <div className="divide-y divide-border/40">
          <div className="flex gap-4 px-5 py-4">
            <span className="shrink-0 font-mono text-xs text-stream/60">01</span>
            <p className="text-sm leading-relaxed text-ghost">
              Each Contractor ID is a PoW-mined HACD container. You can&apos;t register
              one without spending real compute — no free-tier fake profiles.
            </p>
          </div>
          <div className="flex gap-4 px-5 py-4">
            <span className="shrink-0 font-mono text-xs text-stream/60">02</span>
            <p className="text-sm leading-relaxed text-ghost">
              Formation cost is <span className="font-mono text-frost">{STACK_COST_HAC} HAC</span> per
              credential. Mass registration is economically hostile by design.
            </p>
          </div>
          <div className="flex gap-4 px-5 py-4">
            <span className="shrink-0 font-mono text-xs text-stream/60">03</span>
            <p className="text-sm leading-relaxed text-ghost">
              Formation time is written to the chain and cannot be backdated. The
              timestamp is the proof.
            </p>
          </div>
        </div>
      </article>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={`/gig?contractor=${record.contractorId}`} variant="primary">
          Fund a gig
        </Button>
        <Button href="/directory">Directory</Button>
        {record.explorerUrl && (
          <a
            href={record.explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-border px-4 py-2.5 text-sm text-proof hover:border-proof"
          >
            Explorer
          </a>
        )}
      </div>
    </>
  );
}

export default function ProofPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  return (
    <Suspense fallback={<p className="text-sm text-ghost">Loading proof…</p>}>
      <ProofContent id={id.toUpperCase()} />
    </Suspense>
  );
}
