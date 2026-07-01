# Project Profile: MileStream

## One-liner

MileStream is a contractor-credential asset formed through HACD Stack, where each unique HACD becomes a permanent Contractor ID. Milestone payments are planned via Hacash HVM smart contracts.

## Category

Utility (hybrid FT + NFT)

## Problem

Freelancers on Telegram, Discord, and informal platforms routinely deliver work and never get paid. Clients hire strangers with no trust layer. Existing escrow tools target large Ethereum transactions — too heavy for $50–$500 gigs where ghosting is most common.

"Verified freelancer" badges on platforms are database entries anyone can fake. Zero formation cost means infinite throwaway profiles and reputation fraud.

## Asset concept

MileStream is a hybrid asset issued across 200 HACD lots.

- **FT component (MSTR)**: Each lot forms exactly 5,000 MSTR units. Total supply is fixed at 1,000,000 MSTR. Supply cannot increase beyond the 200 defined lots.
- **NFT component (Contractor ID)**: Each lot's unique 6-letter HACD name acts as a permanent Contractor ID — a distinct on-chain identity for the contractor directory.

Removing a Stack releases the HACD but burns the 5,000 MSTR tied to that lot and retires the Contractor ID.

## Product layers

**At launch — HACD Stack credentials:**
- Form MSTR and Contractor ID on the Launchpad.
- Verify formation on explorer.hacash.org.
- List in the contractor directory with public proof pages.

**Roadmap — Hacash HVM milestone payments:**
1. Client and contractor agree on scope and milestones.
2. Client funds an HVM milestone contract (e.g. 25% on start, 75% on delivery).
3. Contractor's HACD-formed Contractor ID appears in the directory with on-chain formation proof.

The HACD token addresses identity spam and fake credentials. HVM contracts address payment timing and client ghosting.

## Why HACD

- Formation cost (50 HAC per lot) makes contractor profiles costly to fake at scale.
- Each Contractor ID is tied to a unique PoW-mined HACD name, not a disposable wallet label.
- Hard cap of 200 lots keeps the founding contractor cohort scarce and reviewable.
- Formation history is permanent and visible on explorer.hacash.org.

## Target users

- Freelancers (design, development, writing, community management) doing $50–$500 gigs on informal channels.
- Clients who need a lightweight trust and payment layer before hiring a stranger.

## Issuer

- **Founder:** Arko Roy
- **Contact:** itsarko619@gmail.com
- **X:** @notarkoroy
- **Website:** https://arko05roy.github.io/milestream/
- **GitHub:** https://github.com/arko05roy/milestream

## Launch readiness

- Issuance structure: defined
- Stack cost: defined (50 HAC / HACD)
- Supply: defined (1,000,000 MSTR across 200 lots, 5,000 per lot)
- Designated address: 1C9883DEKbLKLfxmdavGJq6nr8MVe6LS6V
- Eight-document issuance package: complete
- launch_spec.json: validated (draft)
- Next.js web app: `web/` — formation demo, directory, proof pages (deploy or run locally)
- HVM milestone contracts: not yet deployed (roadmap)
- Launchpad listing: pending HACD Labs review
- Legal review: required before publication

---

*Draft profile. Issuer: Arko Roy. Not financial advice. Final Launchpad parameters must be verified by HACD Labs.*
