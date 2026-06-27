# MileStream

Freelancer trust, formed through HACD.

MileStream pairs **PoW-backed contractor credentials** (MSTR on HACD) with **GrowStreams milestone payments** so freelancers doing $50–$500 gigs on informal platforms can prove identity and get paid after delivery.

## Problem

- Clients ghost after work is delivered
- "Verified" freelancer profiles are free to fake
- Escrow tools are too heavy for small gigs

## Solution

| Layer | Role |
|-------|------|
| **HACD (MSTR)** | Contractor credential — 200 lots, 50 HAC formation cost, unique Contractor ID per HACD name |
| **GrowStreams** | Milestone payment streams (e.g. 25% start / 75% delivery) |

## Issuer

**Arko Roy** — [itsarko619@gmail.com](mailto:itsarko619@gmail.com) — [@notarkoroy](https://x.com/notarkoroy)

## Links

- [Contractor directory (site)](https://arko05roy.github.io/milestream/)
- [HACD Launchpad](https://hacd.it/launchpad)
- [HACD Incubator application](https://hacd.it/incubator)
- [GrowStreams HACD quest](https://www.growstreams.xyz/app/projects/HACD)

## Launch package

This repo contains the complete HACD Incubator submission:

- `launch_spec.json` — validated machine-readable spec
- 8 markdown documents (intake, fit review, profile, stack design, launchpad copy, FAQ, X drafts, checklist)
- `validation_output.txt` — validator pass output

### Token parameters

| Parameter | Value |
|-----------|-------|
| Type | HYBRID (MSTR + Contractor ID) |
| Supply | 1,000,000 MSTR |
| Lots | 200 (20 pilot + 180 public) |
| Per lot | 5,000 MSTR + 1 Contractor ID |
| Stack cost | 50 HAC / HACD |
| Max per participant | 5 HACD |

### Validate locally

```bash
git clone https://github.com/Satyam-10124/hacd-incubator-ai-issuance-skill.git
python3 hacd-incubator-ai-issuance-skill/scripts/validate_launch_spec.py launch_spec.json
```

## Campaign

Built for **HACD Labs Incubator Season 2** via the **GrowStreams** quest.

## Risk

MSTR is a utility credential, not an investment. MileStream is not a licensed escrow service. No price, yield, or return is guaranteed.

---

*Issuer confirmed: Arko Roy. Pending HACD Labs review.*
