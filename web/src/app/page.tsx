import { Button } from "@/components/button";
import { StreamRail } from "@/components/stream-rail";
import { STATS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <section className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
        <div className="animate-fade-up">
          <p className="mb-3 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-stream">
            HACD Incubator · GrowStreams
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-frost sm:text-5xl">
            Work delivered.
            <br />
            <span className="text-stream">Payment streamed.</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ghost">
            Freelancers on informal platforms deliver work and never get paid.
            MileStream pairs PoW-backed contractor credentials with milestone
            payment streams for $50–$500 gigs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/form" variant="primary">
              Form credential
            </Button>
            <Button href="/directory">Browse directory</Button>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-slate/50 p-6 sm:p-8">
          <p className="mb-6 text-xs font-medium uppercase tracking-widest text-ghost">
            The stream
          </p>
          <StreamRail active="form" />
          <p className="mt-6 text-sm leading-relaxed text-ghost">
            Each step is a checkpoint on the route from anonymous freelancer to
            verified contractor with milestone pay locked in.
          </p>
        </div>
      </section>

      <section className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-elevated/30 px-4 py-5 text-center"
          >
            <p className="font-display text-2xl font-bold text-stream">{stat.value}</p>
            <p className="mt-1 text-xs text-ghost">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-10 grid gap-6 sm:grid-cols-2">
        <article className="rounded-xl border border-border bg-slate/40 p-6">
          <h2 className="font-display text-xl font-semibold text-frost">The problem</h2>
          <p className="mt-3 text-sm leading-relaxed text-ghost">
            Clients ghost after delivery. &ldquo;Verified&rdquo; badges are database
            entries anyone can fake. Escrow tools are built for large transactions —
            too heavy for the gigs where ghosting hurts most.
          </p>
        </article>
        <article className="rounded-xl border border-border bg-slate/40 p-6">
          <h2 className="font-display text-xl font-semibold text-frost">How it works</h2>
          <ul className="mt-3 space-y-3 text-sm text-ghost">
            <li>
              <strong className="text-frost">Form</strong> — Stack MSTR on HACD. Your
              6-letter HACD name becomes your Contractor ID.
            </li>
            <li>
              <strong className="text-frost">Verify</strong> — Formation is permanent on{" "}
              <a
                href="https://explorer.hacash.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-proof hover:text-stream"
              >
                explorer.hacash.org
              </a>
              .
            </li>
            <li>
              <strong className="text-frost">Get paid</strong> — Clients fund milestone
              streams via{" "}
              <a
                href="https://www.growstreams.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-proof hover:text-stream"
              >
                GrowStreams
              </a>{" "}
              (25% start, 75% delivery).
            </li>
          </ul>
        </article>
      </section>

      <section className="mt-10 border-l-[3px] border-stream bg-elevated/30 p-6 sm:p-8">
        <h2 className="font-display text-xl font-semibold text-frost">
          Try the formation moment
        </h2>
        <p className="mt-2 max-w-xl text-sm text-ghost">
          Stack a demo credential in under a minute. Real on-chain formation happens
          on the HACD Launchpad after approval.
        </p>
        <div className="mt-5">
          <Button href="/form" variant="primary">
            Start formation →
          </Button>
        </div>
      </section>
    </>
  );
}
