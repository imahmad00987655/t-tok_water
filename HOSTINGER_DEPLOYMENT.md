# Hostinger Node.js Deployment Guide

## Why 403 happens on this project

This app is **SSR (TanStack Start)**. It needs a running Node process.
If domain points to static `public_html` only (without Node app routing), Hostinger can return `403 Forbidden`.

## What was added in this repo

- `server.mjs` (Node HTTP server for SSR handler)
- `package.json` scripts:
  - `npm run build`
  - `npm start` (runs `node server.mjs`)
  - `npm run start:prod` (build + start)

## Hostinger hPanel setup (Node.js plan)

1. Open **Advanced -> Node.js** in hPanel.
2. Create/select your Node app.
3. Set:
   - **Application root**: folder where `package.json` exists
   - **Startup file**: `server.mjs`
   - **Node version**: 18+ (recommended 20+)
4. Connect your domain/subdomain to this Node app (important).
5. Open terminal/SSH in app root and run:
   - `npm ci`
   - `npm run build`
6. Click **Restart app** in hPanel (or stop/start).

## Verify after deploy

- Open browser at your domain.
- If needed, test with:
  - `curl -I https://your-domain.com`
- You should get `200` (or valid redirect), not `403`.

## If 403 still appears

- Domain is still pointing to normal static hosting path, not Node app.
- Wrong **Application root** selected in Node app.
- Wrong **Startup file** (must be `server.mjs`).
- App crashed after restart (check Node app logs in hPanel).

## Important command reminder

- Correct build command: `npm run build`
- `npm build` is invalid and will fail.
