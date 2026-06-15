# AGENTS.md – Quick reference for the portfolio project

## Project stack
- **Static site** built with **React + Vite + TypeScript** (inline styles + CSS modules for hero)
- Deployment: **Netlify** (static `dist/` folder)

## Directory layout (important for agents)
```
/ (project root)
├─ src/
│  ├─ components/
│  │  ├─ ui/               ← animated shader component (unused)
│  │  ├─ Hero.tsx          ← hero section (CSS-based aurora)
│  │  └─ Hero.css          ← hero styles
│  ├─ data/                ← `linkedin.json` with skills, profile & projects
│  ├─ pages/               ← page components (e.g., `Home.tsx`)
│  ├─ styles/              ← global CSS
│  └─ main.tsx, App.tsx
├─ public/                  ← static assets (images in public/images/)
├─ vite.config.ts
├─ tailwind.config.ts
├─ netlify.toml
└─ package.json
```

## Portfolio data structure
- Data in `src/data/linkedin.json`:
  ```json
  {
    "competences": ["Digital Marketing", "AI Automations", ...],
    "profile": "Professional description...",
    "projects": [{"title":"...","desc":"...","image":"...","url":"..."}]
  }
  ```

## Core commands
- `npm run dev` – start Vite dev server
- `npm run build` – generate production assets
- `netlify deploy --prod` – publish to Netlify

## Permissions
- `read`, `grep`, `glob`, `webfetch`: **allow**
- `edit`, `bash`: **ask**