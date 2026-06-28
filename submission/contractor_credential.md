# Contractor Credential — MileStream (MSTR)

## What is a Contractor ID?

A **Contractor ID** is the unique 6-letter HACD name you commit when you Stack on the Launchpad. It is registered on-chain as a permanent identity for that credential lot — not a platform username, not a wallet alias.

Example: stacking on HACD `ARKORO` registers **ARKORO** as your Contractor ID.

## What you get from one Stack

One Stack action on 1 HACD lot produces:

| Output | What it is |
|--------|------------|
| **5,000 MSTR** | Fungible credential balance (utility Stack Asset) |
| **1 Contractor ID** | Your unique 6-letter HACD name, permanently tied to that lot |

You do not register identity separately. Formation and identity happen in the same on-chain action.

## Why it is hard to fake

Informal platforms let anyone create unlimited "verified" profiles at zero cost. MileStream is different:

- Each Contractor ID requires a **PoW-mined HACD** committed as its container.
- Each lot costs **50 HAC** in formation cost plus a network fee.
- Only **200 lots** exist — a capped founding contractor cohort.
- Formation history is **permanent and public** on [explorer.hacash.org](https://explorer.hacash.org).

Creating 200 fake contractor profiles would require 200 HACD units and 10,000 HAC in formation costs — visible on-chain.

## What clients can verify

Anyone can verify a contractor without trusting MileStream's database:

1. **Public proof page** — share `/proof/{CONTRACTOR_ID}` from the MileStream directory.
2. **Hacash explorer** — confirm Stack formation, HACD name, and on-chain history.
3. **Directory listing** — only contractors with verified formation appear in the on-chain directory.

The credential proves **formation cost and on-chain provenance**. It does not guarantee work quality or guarantee payment — those are separate product layers.

## What it is not

- **Not a platform badge** — not revocable by a central admin; tied to HACD Stack formation.
- **Not payment escrow** — MSTR does not hold client funds. Milestone payments are a **Phase 2** product layer via Hacash HVM smart contracts (in development).
- **Not an investment** — MSTR is a utility credential Stack Asset. No price, yield, or return is guaranteed.
- **Not unlimited supply** — when all 200 lots are Stacked, no more Contractor IDs can be created.

## Removal / burn

If a participant removes their Stack from a HACD lot:

- The 5,000 MSTR for that lot are **burned**
- The Contractor ID is **retired**
- The HACD is released back to the holder
- Formation cost HAC is **not refunded**

## Launch vs roadmap

| Phase | Layer | Status |
|-------|-------|--------|
| **Launch** | HACD Stack → Contractor ID formation | Live at Launchpad after listing |
| **Roadmap** | Hacash HVM → milestone payment contracts (e.g. 25% start / 75% delivery) | In development |

**HACD Stack = contractor identity formation.**  
**HVM contracts = milestone payment execution (future).**

---

*Issuer: Arko Roy — itsarko619@gmail.com — @notarkoroy. Not financial advice.*
