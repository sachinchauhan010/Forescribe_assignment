# Forescribe Assignment

A slightly reworked README for the Forescribe frontend assignment. This project converts a Figma landing page into a responsive, animated interface using Next.js, TypeScript, and TailwindCSS. The write-up below is based on the supplied materials and the live demo.

Live demo: [forescribe-task.vercel.app](https://forescribe-task.vercel.app/)
Source (design reference): [sachinchauhan010 / Forescribe_assignment](https://github.com/sachinchauhan010/Forescribe_assignment)

This repository is a small frontend project built as an assignment to demonstrate layout fidelity to a Figma design, accessibility-conscious components, and lightweight animations.

## What this project includes

- Responsive landing / marketing UI implemented with the Next.js App Router
- About and Contact pages
- Theme toggle (light / dark) and small interactive components
- Form with validation using `react-hook-form`
- Motion / micro-interactions via Framer Motion
- Tailwind CSS for utility-first styling

## What's different in this variation

I made a few small, intentional tweaks to the baseline assignment to improve clarity and polish:

- Subtle two-column layout on the Contact page for better information hierarchy.
- Entrance and micro-interactions powered by Framer Motion to improve perceived quality.
- Simplified button component patterns to avoid invalid HTML nesting when used with Next's `Link`.
- Cleaner README with explicit setup and assumptions.

These are low-risk visual and accessibility improvements; the underlying structure and behavior remain compatible with the original design intent.

## Tech stack

- Next.js (App Router)
- React 19 + TypeScript
- Tailwind CSS
- Framer Motion
- react-hook-form

## Quick start (development)

Requirements:

- Node.js 18+ (recommended)
- npm (or yarn/pnpm)

Install and run locally:

```bash
# clone the repository (use your fork or the referenced repo)
git clone https://github.com/sachinchauhan010/Forescribe_assignment.git
cd Forescribe_assignment

# install dependencies
npm install

# start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Production build

```bash
npm run build
npm start
```

## Project structure (high level)

- `app/` — Next.js app routes and UI
- `app/components/` — Reusable UI components (Button, ThemeToggle, etc.)
- `lib/` — Small helpers or animation utilities
- `public/` — Static assets (images, icons)
- `README.md`, `package.json`, `tsconfig.json` — project metadata and scripts

## Assumptions made

- The assignment is a static, frontend-focused demo with no server-side API requirements.
- Contact form submissions are placeholders (console.log) unless you wire up an API or service.
- The design reference may include assets and copy; I kept the UI visually faithful while making small improvements for accessibility and semantics.

