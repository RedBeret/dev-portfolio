# Dev Portfolio

![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript&logoColor=black) ![GitHub stars](https://img.shields.io/github/stars/RedBeret/dev-portfolio?style=social)

This repository powers my public portfolio site. It is built to present the public side of my work clearly: thoughtful software, practical automation, technical leadership, writing, and selected projects that show how I build.

## What It Includes

- **Two portfolio views:** A frontend/product view and a backend/systems view that change the emphasis across the page.
- **English and Spanish content:** Both language options are supported through JSON-driven content.
- **Responsive design:** Layout holds up across desktop, tablet, and mobile.
- **Project storytelling:** Featured work includes richer context, project focus, and what each build is meant to show.
- **Blog integration:** Recent writing is pulled in to keep the site current.
- **Modern frontend tooling:** The app runs on React, Vite, and Sass.

## Local Development

1. Clone the repo.
2. Run `npm install`.
3. Start the local dev server with `npm run dev`.
4. Build the production bundle with `npm run build`.

This repo is standardized on `npm`, and `package-lock.json` is the source of truth for dependency updates.

## Maintenance Notes

- Portfolio content lives primarily in `public/res_primaryLanguage.json`, `public/res_secondaryLanguage.json`, and `public/portfolio_shared_data.json`.
- GitHub automation for dependency updates, CI, and CodeQL lives in `.github/`.
- `npm run ci:check` runs the local verification flow used in CI.

