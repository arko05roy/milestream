# Stack Design: MileStream

## Asset type

Hybrid FT + NFT

- **FT:** MSTR (fungible credential balance)
- **NFT:** HACD name as Contractor ID (unique per lot)

## Supply

- Total supply: 1,000,000 MSTR
- HACD lots: 200
- Units per HACD: 5,000 MSTR
- Contractor IDs: up to 200 (one unique HACD name per lot)
- All lots are equal: Yes

Supply formula check:

```
total_supply = total_hacd_lots × units_per_hacd_lot
1,000,000 = 200 × 5,000 ✓
```

## Stack cost

- Cost per HACD: 50 HAC
- Estimated total formation cost reference: 10,000 HAC (200 × 50 HAC)
- Network fee: standard Hacash transaction fee per lot (paid by participant)
- Formation cost reference is an on-chain cost input, not a guaranteed price floor.

Minimum backing reference per lot: 1 HACD + 50 HAC + network fee.

## Formation rules

1. Each participant must hold at least 1 HACD and enough HAC to cover 50 HAC stack cost plus network fee per lot.
2. Each participant may Stack between 1 and 5 HACD lots per the launch rules.
3. Each Stack transaction on 1 HACD lot produces exactly 5,000 MSTR and registers that HACD name as one Contractor ID.
4. All 200 lots follow identical rules within their phase.
5. Once all 200 lots are Stacked, no more MSTR can be formed and no more Contractor IDs can be created.

## Phase model

| Phase | Lots | Who |
|-------|------|-----|
| First phase | 20 | Pilot contractors onboarded during the incubator sprint |
| Public phase | 180 | Open to qualified freelancers after pilot validation |

Phase lot sum: 20 + 180 = 200 ✓

## Participant flow

1. Complete MileStream contractor onboarding (contact: itsarko619@gmail.com).
2. Prepare 1–5 HACD units. Their names become your Contractor IDs.
3. Prepare enough HAC: (number of HACD) × 50 HAC + estimated network fee.
4. Go to https://hacd.it/launchpad and find MileStream (MSTR).
5. Enter your HACD name(s) and confirm the Stack transaction.
6. Verify your MSTR balance and Contractor ID(s) on the Launchpad or at explorer.hacash.org.

## Removal / burn logic

If a participant removes the Stack from a HACD lot, the 5,000 MSTR tied to that lot are burned and that Contractor ID is retired. The HACD is released back to the holder's free HACD. Stack cost HAC is not refunded.

## Hybrid clarification

- The **MSTR balance** is fungible — 5,000 MSTR from lot A is identical to 5,000 MSTR from lot B.
- The **Contractor ID** is the unique HACD name and identifies which contractor formed which lot.
- Both are produced by the same single Stack action.

## Payment streaming (product layer — in development)

Milestone payments are designed to run via GrowStreams (https://www.growstreams.xyz):

- Proposed template: 25% released at job start, 75% at delivery confirmation.
- Client funds stream in USDT on Vara via GrowStreams.
- The Stack token does not hold escrow funds.

---

*Draft design. Issuer: Arko Roy. Not financial advice. Final Launchpad parameters must be verified by HACD Labs.*
