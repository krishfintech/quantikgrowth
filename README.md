# QuantikGrowth

Marketing site for QuantikGrowth — a digital-infrastructure studio for venture,
private equity, and PMS firms. Built with Vite + React 19, server-rendered to
static HTML (SSG) at build time and deployed on Vercel.

## Run locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install`
2. Start the dev server:
   `npm run dev`

## Build

`npm run build` generates OG images, builds the client and SSR bundles,
prerenders every route to static HTML in `dist/`, and writes the sitemap.
`npm run preview` serves the production build locally.
