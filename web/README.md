# MileStream web app

Next.js app — formation demo, contractor directory, public proof pages, and HVM milestone gig demo (roadmap).

This is the **main product UI**. The legacy `site/` static folder is not used.

## Run locally

```bash
cd web
npm install
npm run dev
```

Open http://localhost:3000

## Routes

| Path | Purpose |
|------|---------|
| `/` | Landing + issuance parameters |
| `/form` | Demo credential formation |
| `/directory` | Contractor directory (on-chain + demo) |
| `/proof/[id]` | Public proof page per Contractor ID |
| `/gig` | Milestone funding demo (HVM roadmap) |

## Add on-chain contractors

After Stack formation on the Launchpad, edit `src/lib/on-chain.ts`:

```ts
export const ON_CHAIN_CONTRACTORS: ContractorRecord[] = [
  {
    contractorId: "YOUR6L",
    role: "Founder / Developer",
    explorerUrl: "https://explorer.hacash.org/...", // real tx link
    mstrAmount: 5000,
    stackCostHac: 50,
    formedAt: "2026-07-01T12:00:00.000Z",
    status: "formed",
  },
];
```

Demo formations from `/form` stay in localStorage and are labeled separately.

## Deploy

Build and deploy `web/` to Vercel (or any Next.js host):

```bash
npm run build
npm run start
```

Update `website` in `submission/launch_spec.json` with your production URL after deploy.

## Stack

Next.js 16 · React 19 · Tailwind CSS 4 · TypeScript
