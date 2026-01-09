# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server with HMR (port 5173)

# Build (SSR with prerendering)
npm run build        # Full build: client + server + prerender

# Production
npm run start        # Run production server

# Linting
npm run lint         # ESLint check
```

## Architecture

This is a personal website built with React, Vite, and Tailwind CSS, featuring SSR with static prerendering for Netlify deployment.

### SSR Build Pipeline
1. `build:client` - Vite builds client bundle to `dist/client/`
2. `build:server` - Vite builds SSR bundle from `src/entry-server.tsx` to `dist/server/`
3. `prerender` - `scripts/prerender.js` renders the app to static HTML, replacing `<!--app-html-->` placeholder in `index.html`

### Entry Points
- `src/entry-client.tsx` - Client hydration entry (uses `hydrateRoot`)
- `src/entry-server.tsx` - Server rendering entry (exports `render()` function)
- `server.js` - Express server for development SSR and production serving

### Key Files
- `src/App.tsx` - Root component with QueryClient and TooltipProvider
- `src/pages/Index.tsx` - Main landing page composing section components
- `src/components/` - Page sections (HeroSection, ServicesSection, etc.)
- `src/components/ui/` - shadcn/ui components

### Path Aliases
`@/` resolves to `src/` (configured in vite.config.ts and tsconfig)

### Deployment
Deploys to Netlify as static site (`dist/client/` with SPA fallback redirects).
