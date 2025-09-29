
# Citi Bank Hackathon

> Frontend prototype for the Citi Bank Hackathon — built with Vite + React + TypeScript and styled with Tailwind / shadcn-ui.

---

## Table of contents

- [About](#about)  
- [Demo / Screenshots](#demo--screenshots)  
- [Tech stack](#tech-stack)  
- [Features](#features)  
- [Getting started (local)](#getting-started-local)  
- [Available scripts](#available-scripts)  
- [Project structure](#project-structure)  
- [Deployment](#deployment)  
- [How to contribute](#how-to-contribute)  
- [License](#license)  
- [Contact](#contact)

---

## About

This repository contains the frontend for a hackathon project built during the Citi Bank Hackathon. It is a Vite + React + TypeScript app using Tailwind CSS and shadcn-ui components to provide a modern, responsive UI.

(Tech stack and repository files confirmed from the repo.) :contentReference[oaicite:0]{index=0}

---

## Demo / Screenshots

> Add screenshots or a link to a live demo here.

Example (replace with actual images or URL):

- `public/screenshots/home.png` — Home / dashboard
- `public/screenshots/transactions.png` — Transactions / analytics

---

## Tech stack

- Vite (dev tooling & build)
- React + TypeScript
- Tailwind CSS
- shadcn-ui (component primitives)
- Node / npm

(These technologies are present in the repository files such as `package.json`, `tailwind.config.ts` and the project root.) :contentReference[oaicite:1]{index=1}

---

## Features

*(Edit to reflect your project's real features — below are suggested placeholders you can keep / modify.)*

- Responsive dashboard and layout
- Transactions/insights UI (cards, tables, charts)
- Interactive forms for demo flows (simulated transfers, approvals)
- Component-based UI using shadcn primitives + Tailwind
- TypeScript-first codebase for safer development

---

## Getting started (local)

> Requirements
- Node.js (recommended via nvm)  
- npm (package-lock is present — repo expects npm installs)

Steps:

```bash
# 1. clone the repo
git clone https://github.com/ashxta/Citi-Bank-Hackathon.git
cd Citi-Bank-Hackathon

# 2. install dependencies
npm install

# 3. run dev server
npm run dev
````

Open the URL the dev server prints (usually `http://localhost:5173`).

(Repository contains `package-lock.json` and Vite config files.) ([GitHub][1])

---

## Available scripts

Common scripts (typical for Vite + npm — verify `package.json` for exact names):

```bash
npm run dev      # start development server (hot reload)
npm run build    # build production files to /dist
npm run preview  # locally preview built production bundle
npm run lint     # (if configured) run linter
```

Check `package.json` for the precise script names and adjust as needed. ([GitHub][1])

---

## Project structure

A high-level overview of files/folders you have (trimmed to what’s present):

```
Citi-Bank-Hackathon/
├─ public/                 # static assets
├─ src/                    # React + TS source
├─ index.html
├─ package.json
├─ tailwind.config.ts
├─ tsconfig.json
├─ vite.config.ts
└─ README.md               # <-- you can replace this with the content here
```

(See repo root for full list.) ([GitHub][1])

---

## Deployment

You can deploy the built `dist/` folder to any static hosting platform (Netlify, Vercel, GitHub Pages, or your own CDN). Typical steps for Vercel / Netlify:

1. Push branch to GitHub.
2. Connect the repository in your hosting provider.
3. Set build command: `npm run build`
4. Set publish directory: `dist`

If you want a one-click deploy, I can add a Vercel or Netlify configuration file for you.

---

## How to contribute

1. Fork the repo (or create a branch).
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make changes & tests.
4. Commit and open a Pull Request.

Notes:

* Keep components small and reusable.
* Use TypeScript types for props and state.
* Follow Tailwind utility patterns already present in the repo.

---

## License

Specify your license here (e.g. MIT). Example:

```
MIT License
© 2025 Ashita
```

---

## Contact

If you want help editing or committing this README into the repo, tell me and I’ll provide exact `git` commands. You can also include an email, website, or LinkedIn here.

---

### Quick links (from repo)

* Repository: `https://github.com/ashxta/Citi-Bank-Hackathon`. ([GitHub][1])


