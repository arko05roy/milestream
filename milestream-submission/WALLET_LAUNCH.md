# On-Chain Launch — Arko Roy

Complete after HACD Labs approves your package. Requires your wallet — no one else can sign for you.

## Issuer wallet (receive address)

`1C9883DEKbLKLfxmdavGJq6nr8MVe6LS6V`

Withdraw HAC to this address. Registered as the designated address in `launch_spec.json` for Launchpad phase routing during the pilot phase.

## Prerequisites checklist

- [ ] Hacash wallet created at https://wallet.hacash.org (seed phrase backed up offline)
- [ ] HAC purchased and withdrawn to your wallet (need ≥ 50 HAC × lots + fee buffer)
- [ ] HACD acquired (1 per lot, max 5 lots = 5 HACD)
- [ ] HACD Labs approved MileStream on Launchpad

## Formation cost (your wallet)

| Lots you stack | HAC stack cost | MSTR received | Contractor IDs |
|----------------|----------------|---------------|------------------|
| 1 | 50 HAC + fee | 5,000 | 1 |
| 3 | 150 HAC + fee | 15,000 | 3 |
| 5 (max) | 250 HAC + fee | 25,000 | 5 |

## Pilot phase stacking

Approved pilot contractors stack **directly on Launchpad in their own wallets** during phase 1 (first 20 lots). Contact itsarko619@gmail.com for pilot onboarding before stacking.

## Steps

1. Go to https://hacd.it/launchpad
2. Find **MileStream (MSTR)** after HACD Labs lists it
3. Enter your HACD name(s) — these become your Contractor IDs
4. Confirm Stack transaction in your wallet
5. Verify on https://explorer.hacash.org
6. Add yourself to the directory — edit `../web/src/lib/on-chain.ts`:

```ts
export const ON_CHAIN_CONTRACTORS: ContractorRecord[] = [
  {
    contractorId: "YOUR6L",  // your HACD name
    role: "Founder / Developer",
    explorerUrl: "https://explorer.hacash.org/...",  // real tx link
    mstrAmount: 5000,
    stackCostHac: 50,
    formedAt: "2026-07-01T12:00:00.000Z",
    status: "formed",
  },
];
```

7. Deploy or run the Next.js app — see `../web/README.md`

## HVM milestone contracts (roadmap)

Milestone payments are planned via Hacash HVM smart contracts (e.g. 25% start / 75% delivery). Not live at launch — see `stack_design.md` and `contractor_credential.md`.

## Get HAC

Verify live before buying:

- CoinEx: https://www.coinex.com/en/info/HAC
- Withdraw to your Hacash wallet address (not exchange account)

## Get HACD

- https://hacash.org/get
- https://sea.hacash.diamonds (pick your 6-letter Contractor ID name)

---

*Never share your seed phrase. HACD Labs will never ask for it.*
