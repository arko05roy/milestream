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

      <section className="mb-12">
        <div className="mb-4 flex items-center gap-3">
          <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ghost">
            On-chain
          </h2>
          <span className="border border-proof/30 bg-proof/10 px-2 py-0.5 font-mono text-[0.6rem] text-proof">
            {onChain.length}
          </span>
        </div>
        {onChain.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {onChain.map((c, i) => (
              <div
                key={c.contractorId}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <ContractorCard contractor={c} isDemo={false} />
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-border/60 px-6 py-8">
            <p className="text-sm text-ghost">
              No contractors formed on-chain yet. After HACD Labs approval,
              Stack on the{" "}
              <a
                href="https://hacd.it/launchpad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-proof underline-offset-2 hover:text-stream hover:underline"
              >
                Launchpad
              </a>
              .
            </p>
          </div>
        )}
      </section>

      <section>
        <div className="mb-4 flex items-center gap-3">
          <h2 className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ghost">
            Demo formations
          </h2>
          <span className="border border-stream/30 bg-stream/10 px-2 py-0.5 font-mono text-[0.6rem] text-stream">
            {demo.length}
          </span>
          <span className="text-[0.65rem] text-ghost/50">
            · local only, not on explorer
          </span>
        </div>
        {demo.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {demo.map((c, i) => (
              <div
                key={c.contractorId}
                className="animate-fade-up"
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <ContractorCard contractor={c} isDemo />
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-border/50 px-6 py-10 text-center">
            <p className="text-sm text-ghost">No demo formations yet.</p>
            <div className="mt-5">
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
