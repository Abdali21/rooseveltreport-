# Roosevelt Monthly Report

A local, static-export-ready Next.js presentation foundation for Roosevelt Private School's English-language monthly report covering 1–31 October 2026. Report content and screenshots are intentionally left empty until approved material is supplied.

## Requirements

- Node.js 24 LTS (recommended; see `.nvmrc`), or a compatible Node.js 22 LTS release
- npm 10+

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app uses the Next.js App Router, TypeScript, Tailwind CSS, and Lucide React. Components are Server Components unless a future interactive feature specifically requires a Client Component.

## Quality checks and production build

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build` generates a fully static site in `out/`. Image optimization is disabled in `next.config.ts`, so future local screenshots and images can be exported for static hosting without a Next.js image server.

## Project structure

```text
src/
├── app/
│   ├── globals.css       # Design tokens, global accessibility, and print styles
│   ├── layout.tsx        # English document metadata and Poppins font
│   └── page.tsx          # Report page composition
├── components/
│   ├── layout/           # Reusable shell, header, and section navigation
│   └── report/           # Reusable report section presentation
└── data/
    └── report.ts         # Typed report content and evidence source
```

## Editing report content

Edit `src/data/report.ts`. Each section currently has:

- `summary`: `null` until approved copy is available
- `highlights`: an empty list for future completed-work points
- `evidence`: an empty list for future screenshots and captions

Keep factual copy, metrics, and evidence metadata in that file rather than embedding them in presentation components. Place future static assets in `public/` and reference them with root-relative paths such as `/evidence/example.webp`. Every image must have meaningful alternative text.

The five required section records and their stable anchor IDs are already present. Do not rename an `id` after links to the section have been shared.

## Design and accessibility foundation

The global stylesheet defines the required dark green (`#183B34`), orange (`#D88D30`), warm white (`#F9F6F1`), and Poppins tokens. The layout includes responsive spacing, a keyboard skip link, visible focus states, reduced-motion behavior, semantic section landmarks, and A4-oriented print rules.

## Static hosting

The project is configured with `output: "export"` and trailing slashes. Upload the contents of `out/` to any static host when deployment is authorized. No deployment configuration, API routes, database, CMS, authentication, or external integrations are included in this phase.
