"use client";

import { useState } from "react";
import { Button, ButtonNative } from "@/components/button";
import { FormationReceipt } from "@/components/formation-receipt";
import { PageHeader } from "@/components/page-header";
import { StreamRail } from "@/components/stream-rail";
import {
  HACD_PATTERN,
  MSTR_PER_LOT,
  STACK_COST_HAC,
} from "@/lib/constants";
import { useDemoStore } from "@/hooks/use-demo-store";
import { ON_CHAIN_CONTRACTORS } from "@/lib/on-chain";
import type { ContractorRecord } from "@/lib/types";

export default function FormPage() {
  const { addContractor } = useDemoStore();
  const [contractorId, setContractorId] = useState("");
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [forming, setForming] = useState(false);
  const [record, setRecord] = useState<ContractorRecord | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const id = contractorId.trim();
    if (!HACD_PATTERN.test(id)) {
      setError("Enter exactly 6 uppercase letters for your HACD name.");
      return;
    }

    const taken = [
      ...ON_CHAIN_CONTRACTORS.map((c) => c.contractorId),
    ].includes(id);
    if (taken) {
      setError(`Contractor ID ${id} is already taken on-chain.`);
      return;
    }

    setForming(true);
    setRecord(null);

    setTimeout(() => {
      const newRecord: ContractorRecord = {
        contractorId: id,
        role: role.trim() || "Contractor",
        skills: skills.trim() || undefined,
        mstrAmount: MSTR_PER_LOT,
        stackCostHac: STACK_COST_HAC,
        formedAt: new Date().toISOString(),
        status: "mocked",
      };

      const added = addContractor(newRecord);
      if (!added) {
        setError(`Contractor ID ${id} is already taken.`);
        setForming(false);
        return;
      }

      setRecord(newRecord);
      setForming(false);
    }, 1800);
  }

  return (
    <>
      <PageHeader
        eyebrow="Formation moment"
        title="Form your contractor credential"
        lead={`Your 6-letter HACD name becomes a permanent Contractor ID. Stack cost: ${STACK_COST_HAC} HAC → ${MSTR_PER_LOT.toLocaleString()} MSTR.`}
      />

      <div className="mb-10 border border-border bg-track/50 p-6">
        <StreamRail active={record ? "verify" : forming ? "form" : "form"} />
      </div>

      <p className="mb-6 text-sm text-ghost">
        This demo mocks the Stack step. Live formation uses{" "}
        <a
          href="https://hacd.it/launchpad"
          target="_blank"
          rel="noopener noreferrer"
          className="text-proof hover:text-stream"
        >
          hacd.it/launchpad
        </a>
        .
      </p>

      {!record && (
        <form onSubmit={handleSubmit} className="max-w-lg space-y-6">
          {/* Credential ID — plate-scale input */}
          <div>
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <label
                htmlFor="hacd-name"
                className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ghost"
              >
                HACD name · Contractor ID
              </label>
              <span className="font-mono text-[0.65rem] text-ghost/60">
                {contractorId.length}/6 chars
              </span>
            </div>
            <div className="relative">
              <input
                id="hacd-name"
                value={contractorId}
                onChange={(e) =>
                  setContractorId(
                    e.target.value.toUpperCase().replace(/[^A-Z]/g, "").slice(0, 6),
                  )
                }
                placeholder="ARKORO"
                autoComplete="off"
                className="w-full border-2 border-border bg-track/60 py-4 text-center font-mono text-3xl font-bold tracking-[0.45em] text-stream placeholder:text-ghost/25 placeholder:tracking-[0.3em] focus:border-stream focus:outline-none focus:bg-track/80"
              />
              {/* Live preview under input */}
              <div
                className={`mt-0 border border-t-0 border-border/60 bg-ink/60 px-4 py-2 transition-opacity duration-200 ${contractorId.length > 0 ? "opacity-100" : "opacity-0"}`}
              >
                <p className="font-mono text-[0.65rem] text-ghost/70">
                  <span className="text-stream">{contractorId.padEnd(6, "_")}</span>
                  <span className="ml-3 text-ghost/50">→ Contractor ID on HACD</span>
                </p>
              </div>
            </div>
            <p className="mt-1.5 text-[0.65rem] text-ghost/60">6 uppercase letters A–Z. Permanent after formation.</p>
          </div>

          <Field label="Role">
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Frontend developer"
              className="w-full border border-border bg-ink px-3 py-2.5 text-frost placeholder:text-ghost/40 focus:border-stream/70 focus:outline-none focus:ring-1 focus:ring-stream/30"
            />
          </Field>
          <Field label="Skills" hint="Optional — shown in directory and proof page">
            <input
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="React, design systems"
              className="w-full border border-border bg-ink px-3 py-2.5 text-frost placeholder:text-ghost/40 focus:border-stream/70 focus:outline-none focus:ring-1 focus:ring-stream/30"
            />
          </Field>

          {error && (
            <div className="border border-stream/40 bg-stream/8 px-4 py-3" role="alert">
              <p className="font-mono text-xs text-stream">{error}</p>
            </div>
          )}

          <div className="flex items-center gap-4">
            <ButtonNative type="submit" variant="primary" disabled={forming}>
              Stack MSTR →
            </ButtonNative>
            <p className="text-[0.65rem] text-ghost/60">
              50 HAC stack cost → 5,000 MSTR
            </p>
          </div>
        </form>
      )}

      {forming && (
        <p className="animate-stream-pulse py-12 text-center font-mono text-stream">
          Stacking MSTR on HACD {contractorId}…
        </p>
      )}

      {record && (
        <div className="animate-fade-up space-y-6">
          <FormationReceipt record={record} />
          <p className="text-sm text-ghost">
            Your Contractor ID is in the directory. Share your proof page with clients.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button
              href={`/proof/${record.contractorId}?demo=1`}
              variant="primary"
            >
              Open proof page
            </Button>
            <Button href="/directory">View directory</Button>
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm text-ghost">{label}</label>
      {children}
      {hint && <p className="mt-1 text-xs text-ghost/80">{hint}</p>}
    </div>
  );
}
