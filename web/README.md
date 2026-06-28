# MileStream Web App

Next.js demo for the HACD Incubator sprint — formation moment, contractor directory, and GrowStreams milestone gigs.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/form` | Formation moment — mock Stack credential |
| `/directory` | On-chain + demo contractors |
| `/gig` | Milestone stream setup (25/75 demo) |
| `/proof/[id]` | Public contractor proof page |

## On-chain contractors

After real Stack formation, add entries to `src/lib/on-chain.ts`.

## Design

Custom MileStream design system: ink/frost palette, amber stream rail, Syne + Outfit + IBM Plex Mono.
