import { Button } from "@/components/button";
import { HeroPreview } from "@/components/hero-preview";
import { SpecStrip } from "@/components/spec-strip";

export default function HomePage() {
  return (
    <div className="-mx-5 overflow-hidden sm:-mx-8">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="grid gap-10 px-5 pb-16 pt-12 sm:px-8 sm:pb-18 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:pb-20 lg:pt-16">
        <div className="animate-fade-up">
          {/* Dispatch eyebrow with run number */}
          <p className="mb-5 flex items-center gap-4">
            <span className="border-l-2 border-stream pl-3 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-stream">
              HACD Incubator · MileStream
            </span>
            <span className="font-mono text-[0.6rem] tabular-nums text-ghost/40">
              #RUN-0001
            </span>
          </p>

          <h1 className="font-display text-[2.55rem] font-bold leading-[1.06] tracking-tight text-frost sm:text-5xl lg:text-[3.4rem]">
            Work delivered.
            <br />
            <span className="text-stream">Payment streamed.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ghost">
            MileStream forms PoW-backed contractor credentials on HACD.
            Milestone payments via Hacash HVM smart contracts are on the
            roadmap for $50–$500 gigs.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/form" variant="primary">
              Form credential →
            </Button>
            <Button href="/directory">Browse directory</Button>
          </div>

          <p className="mt-6 font-mono text-xs text-ghost/50">
            6-letter HACD name → permanent Contractor ID
          </p>
        </div>

        <HeroPreview />
      </section>

      {/* ── ISSUANCE PARAMETERS ───────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="px-5 pb-5 pt-6 sm:px-8">
          <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ghost">
            MSTR issuance parameters
          </p>
        </div>
        {/* SpecStrip has border-b; no top border here to avoid double line */}
        <SpecStrip />
      </section>

      {/* ── PROBLEM / SOLUTION ────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="grid px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">

          {/* Problem column */}
          <article className="py-10 pr-0 lg:border-r lg:border-border lg:py-14 lg:pr-10">
            <p className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ghost/60">
              The problem
            </p>
            <h2 className="font-display text-2xl font-semibold leading-tight text-frost sm:text-3xl">
              Clients ghost.
              <br />
              Badges lie.
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ghost">
              &ldquo;Verified&rdquo; profiles are database entries anyone can
              fake. Escrow tools are built for large transactions — too heavy
              for the $50–$500 gigs where ghosting hurts most.
            </p>
          </article>

          {/* Solution column */}
          <article className="border-t border-border py-10 lg:border-l-[3px] lg:border-l-stream lg:border-t-0 lg:py-14 lg:pl-10">
            <p className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-ghost/60">
              The solution
            </p>
            <h2 className="font-display text-2xl font-semibold text-frost sm:text-3xl">
              Credential + contract
            </h2>
            <ol className="mt-6 space-y-5">
              {[
                {
                  step: "Form",
                  copy: "Stack MSTR on HACD. Your 6-letter name becomes a permanent Contractor ID — costly to fake at scale.",
                },
                {
                  step: "Verify",
                  copy: null,
                  link: { href: "https://explorer.hacash.org", label: "explorer.hacash.org" },
                  suffix: ". Share a public proof page with any client.",
                  prefix: "Formation is permanent on ",
                },
                {
                  step: "Paid",
                  copy: "Roadmap: Hacash HVM milestone contracts — 25% on job start, 75% on delivery confirmation. Not live at launch.",
                },
              ].map(({ step, copy, link, prefix, suffix }) => (
                <li key={step} className="grid gap-2 sm:grid-cols-[4.5rem_1fr] sm:gap-5">
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-stream">
                    {step}
                  </span>
                  <span className="text-sm leading-relaxed text-ghost">
                    {copy ?? (
                      <>
                        {prefix}
                        <a
                          href={link!.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-proof underline-offset-2 hover:text-stream hover:underline"
                        >
                          {link!.label}
                        </a>
                        {suffix}
                      </>
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      {/* ── CTA RAIL ──────────────────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="grid gap-6 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <div className="border-l-[3px] border-stream pl-5 sm:pl-6">
            <h2 className="font-display text-xl font-semibold text-frost sm:text-2xl">
              Try the formation moment
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-ghost">
              Stack a demo credential in under a minute. Live formation runs on
              the HACD Launchpad after incubator approval.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:shrink-0">
            <Button href="/form" variant="primary">
              Start formation →
            </Button>
            <Button href="/gig">Fund a demo gig</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
