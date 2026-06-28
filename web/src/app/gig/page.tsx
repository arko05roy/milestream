"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button, ButtonNative } from "@/components/button";
import { FormationReceipt } from "@/components/formation-receipt";
import { MilestoneBar } from "@/components/milestone-bar";
import { PageHeader } from "@/components/page-header";
import { StreamRail } from "@/components/stream-rail";
import { useDemoStore } from "@/hooks/use-demo-store";
import { ON_CHAIN_CONTRACTORS } from "@/lib/on-chain";
import type { ContractorRecord, GigRecord } from "@/lib/types";

function GigForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("contractor") ?? "";
  const { store, addGig, hydrated } = useDemoStore();

  const [contractorId, setContractorId] = useState(preselected);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(200);
  const [gig, setGig] = useState<GigRecord | null>(null);

  const allContractors: (ContractorRecord & { isDemo: boolean })[] = [
    ...ON_CHAIN_CONTRACTORS.map((c) => ({ ...c, isDemo: false })),
    ...store.contractors.map((c) => ({ ...c, isDemo: true })),
  ];

  const selectedId = contractorId || allContractors[0]?.contractorId || "";

  if (!hydrated) {
    return <p className="text-sm text-ghost">Loading…</p>;
  }

  if (!allContractors.length) {
    return (
      <>
        <PageHeader title="Start a gig" />
        <p className="text-sm text-ghost">
          No contractors in the directory yet.{" "}
          <Button href="/form" variant="ghost" className="inline px-0 py-0">
            Form a credential
          </Button>{" "}
          first.
        </p>
      </>
    );
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const startPay = Math.round(amount * 0.25);
    const deliveryPay = amount - startPay;

    const newGig: GigRecord = {
      id: `gig-${Date.now()}`,
      contractorId: selectedId,
      title: title.trim(),
      amount,
      milestones: [
        { label: "Job start", percent: 25, amount: startPay, status: "pending" },
        { label: "Delivery", percent: 75, amount: deliveryPay, status: "locked" },
      ],
      createdAt: new Date().toISOString(),
      status: "demo",
    };

    addGig(newGig);
    setGig(newGig);
  }

  const contractor = allContractors.find((c) => c.contractorId === selectedId);

  return (
    <>
      <PageHeader
        eyebrow="GrowStreams milestone"
        title="Fund a gig"
        lead="Clients fund a payment stream: 25% on job start, 75% on delivery confirmation."
      />

      <div className="mb-8 rounded-xl border border-border bg-slate/40 p-6">
        <StreamRail active={gig ? "paid" : "verify"} />
      </div>

      <p className="mb-6 text-sm text-ghost">
        This demo simulates stream creation. Live payments use{" "}
        <a
          href="https://www.growstreams.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-proof hover:text-stream"
        >
          GrowStreams
        </a>{" "}
        on Vara.
      </p>

      {!gig ? (
        <form onSubmit={handleSubmit} className="max-w-lg space-y-5">
          <div>
            <label className="mb-1.5 block text-sm text-ghost">Contractor</label>
            <select
              value={selectedId}
              onChange={(e) => setContractorId(e.target.value)}
              className="w-full rounded-lg border border-border bg-ink px-3 py-2.5 text-frost focus:border-stream focus:outline-none focus:ring-1 focus:ring-stream"
            >
              {allContractors.map((c) => (
                <option key={c.contractorId} value={c.contractorId}>
                  {c.contractorId} — {c.role}
                  {c.isDemo ? " (demo)" : ""}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-ghost">Gig title</label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Landing page redesign"
              className="w-full rounded-lg border border-border bg-ink px-3 py-2.5 text-frost placeholder:text-ghost/50 focus:border-stream focus:outline-none focus:ring-1 focus:ring-stream"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm text-ghost">Total amount (USDT)</label>
            <input
              type="number"
              required
              min={50}
              max={500}
              step={1}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full rounded-lg border border-border bg-ink px-3 py-2.5 text-frost focus:border-stream focus:outline-none focus:ring-1 focus:ring-stream"
            />
            <p className="mt-1 text-xs text-ghost">MileStream targets $50–$500 informal gigs.</p>
          </div>

          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-ghost">
              Milestone split
            </p>
            <MilestoneBar />
          </div>

          <ButtonNative type="submit" variant="primary">
            Create stream (demo)
          </ButtonNative>
        </form>
      ) : (
        <div className="animate-fade-up space-y-6">
          <div className="border-l-[3px] border-stream bg-elevated/60 p-5 sm:p-6">
            <h3 className="font-display text-lg font-semibold text-stream">
              Stream created (demo)
            </h3>
            <dl className="mt-4 space-y-3 font-mono text-sm">
              <Row label="Gig" value={gig.title} />
              <Row label="Contractor" value={gig.contractorId} />
              <Row label="Total" value={`$${gig.amount} USDT`} />
              <Row label="On start" value={`$${gig.milestones[0].amount} (25%)`} />
              <Row label="On delivery" value={`$${gig.milestones[1].amount} (75%)`} />
              <div className="flex justify-between border-t border-border pt-3">
                <span className="text-xs uppercase tracking-wider text-ghost">Status</span>
                <span className="rounded-md border border-stream/50 bg-stream/10 px-2 py-0.5 text-xs text-stream">
                  demo — not on GrowStreams
                </span>
              </div>
            </dl>
          </div>

          {contractor && <FormationReceipt record={contractor} />}

          <p className="text-sm text-ghost">
            For live streams, fund via GrowStreams after wallet connect.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.growstreams.xyz/app/projects/HACD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-stream px-4 py-2.5 text-sm font-medium text-ink hover:bg-stream-glow"
            >
              Open GrowStreams
            </a>
            <Button
              href={`/proof/${gig.contractorId}?demo=1`}
              variant="secondary"
            >
              Contractor proof
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border/60 pb-3">
      <span className="text-xs uppercase tracking-wider text-ghost">{label}</span>
      <span className="text-frost">{value}</span>
    </div>
  );
}

export default function GigPage() {
  return (
    <Suspense fallback={<p className="text-sm text-ghost">Loading…</p>}>
      <GigForm />
    </Suspense>
  );
}
