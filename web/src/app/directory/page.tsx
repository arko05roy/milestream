"use client";

import { ContractorCard } from "@/components/contractor-card";
import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";
import { useDemoStore } from "@/hooks/use-demo-store";
import { ON_CHAIN_CONTRACTORS } from "@/lib/on-chain";

export default function DirectoryPage() {
  const { store, hydrated } = useDemoStore();
  const onChain = ON_CHAIN_CONTRACTORS;
  const demo = store.contractors;

  if (!hydrated) {
    return (
      <p className="text-sm text-ghost">Loading directory…</p>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Contractor directory"
        title="Verified contractors"
        lead="Each Contractor ID is a unique HACD name with a permanent formation record. Costly to fake, easy to verify."
      />

      <section className="mb-10">
        <h2 className="mb-3 text-xs font-medium uppercase tracking-widest text-ghost">
          On-chain ({onChain.length})
        </h2>
        {onChain.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {onChain.map((c) => (
              <ContractorCard key={c.contractorId} contractor={c} isDemo={false} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-ghost">
            No contractors formed on-chain yet. After HACD Labs approval, Stack on
            the{" "}
            <a
              href="https://hacd.it/launchpad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-proof hover:text-stream"
            >
              Launchpad
            </a>
            .
          </p>
        )}
      </section>

      <section>
        <h2 className="mb-1 text-xs font-medium uppercase tracking-widest text-ghost">
          Demo formations ({demo.length})
        </h2>
        <p className="mb-4 text-xs text-ghost">
          Stored locally and labeled mocked. Not on explorer.hacash.org.
        </p>
        {demo.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {demo.map((c) => (
              <ContractorCard key={c.contractorId} contractor={c} isDemo />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border p-8 text-center">
            <p className="text-sm text-ghost">No demo formations yet.</p>
            <div className="mt-4">
              <Button href="/form" variant="primary">
                Form a credential
              </Button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
