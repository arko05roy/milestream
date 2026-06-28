# MileStream

Freelancer trust, formed through HACD.

MileStream forms **PoW-backed contractor credentials** (MSTR on HACD) so freelancers doing $50–$500 gigs can prove identity on-chain. Milestone payments are planned via **Hacash HVM smart contracts**.

## Repo layout

```
MileStream/
├── submission/     ← HACD Labs launch package (only copy of these files)
├── web/            ← Next.js app (main product UI)
└── PROGRESS.md     ← internal notes
```

## Web app

```bash
cd web && npm install && npm run dev
```

See [web/README.md](web/README.md).

## Launch package

Everything for HACD Labs lives in **[submission/](submission/)** — specs, copy, assets, intake forms, validator output.

```bash
python3 hacd-incubator-ai-issuance-skill/scripts/validate_launch_spec.py submission/launch_spec.json
```

Zip for upload: `milestream-submission.zip` (contents of `submission/`)

## Issuer

**Arko Roy** — [itsarko619@gmail.com](mailto:itsarko619@gmail.com) — [@notarkoroy](https://x.com/notarkoroy)

## Links

- [HACD Launchpad](https://hacd.it/launchpad)
- [HACD Incubator](https://hacd.it/incubator)
- [Hacash explorer](https://explorer.hacash.org)

---

*MSTR is a utility credential, not an investment. HVM payments are not live at launch.*
