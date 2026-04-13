# BTE Demo Starter

This is a handoff-ready starter project for the BTE rebuild concept.

What is included:
- Next.js app structure
- Homepage, catalog, product, quote, account, and checkout demo pages
- Prisma schema starter for catalog, quotes, proposals, and ecommerce basics
- Mock API routes for search and quote submission
- Notes on major modules already planned

Important:
- This is a demo/starter package, not a finished production deployment.
- Canva can be used to present screenshots or layouts inspired by this, but it does not run a Next.js site directly from a zip.
- For a live test site, this zip should be opened in a code environment and deployed to Vercel, Netlify, or similar.

## Quick start

1. Install dependencies
   npm install
2. Copy `.env.example` to `.env`
3. Generate Prisma client
   npm run db:generate
4. Start dev server
   npm run dev

## Suggested demo flow
- Homepage
- Catalog search
- Product detail
- Quote request
- Customer portal
- Checkout

## What was intentionally simplified
- Auth is not fully wired in this zip
- Payment and ERP are represented as placeholders
- Inventory, pricing, and BOM parsing are documented in comments rather than fully connected
