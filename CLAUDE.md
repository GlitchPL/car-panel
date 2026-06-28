# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Setup & Run
- Install dependencies: `npm install`
- Start dev server: `npm run dev` – opens the app at http://localhost:5173
- Build production bundle: `npm run build`
- Run tests (Vitest): `npm test`.  
  To run a single file, e.g., for `src/components/Parts.test.tsx`, use:
```
npx vitest src/components/Parts.test.tsx
```

## Project Structure
The application is a small React SPA. Entry point is **src/index.tsx** which renders the top‑level component **App.tsx**.

`src/App.tsx` composes five placeholder pages:
- Parts (`src/components/Parts.tsx`)
- Expenses (`src/components/Expenses.tsx`)
- ServiceHistory (`src/components/ServiceHistory.tsx`)
- FuelTracker (`src/components/FuelTracker.tsx`)
- VehicleProfile (`src/components/VehicleProfile.tsx`)

Each component currently renders a heading and placeholder comment; state, routing or styling are not yet added.

## Stack
* React 19
* Vite (default config)
* TypeScript
* Vitest for testing

Tailwind CSS and shadcn/ui are mentioned in the README but are not part of the current scaffold. If they are added later, add relevant configuration accordingly.

## Notes
- There is no lint or format script; consider adding ESLint/Prettier when scaling.
- No tests exist yet. Create `src/components/*.test.tsx` files and use Vitest to verify component rendering.
- The README (READ.md) contains high‑level product goals; they can guide future feature work.
