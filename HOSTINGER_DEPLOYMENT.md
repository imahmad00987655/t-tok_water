# Hostinger Static Deployment Guide

This project is now a **static Vite SPA** (SSR removed).

## Deploy settings (GitHub/Hostinger static)

- Framework preset: `Vite`
- Root directory: `./`
- Build command: `npm run build`
- Output directory: `dist`
- Node version: `18+` (20 recommended)

## Route behavior

This app uses `HashRouter`, so URLs will work as:
- `/#/`
- `/#/products`
- `/#/about`
- `/#/contact`

No server-side rewrite rules are needed for these routes.

## Deploy steps

1. Push code to GitHub.
2. Trigger Hostinger deploy (or wait for auto deploy).
3. Confirm build finishes and `dist` is generated.
4. Open the domain and verify pages load using hash routes.
