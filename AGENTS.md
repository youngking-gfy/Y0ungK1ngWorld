# AGENTS.md

Personal knowledge base / blog built with **VuePress 2 + vuepress-theme-plume**. Content is Chinese-language study notes (公安联考 civil-service exam prep, CTF/forensics, security). The `docs/` tree is also opened as an Obsidian vault (`.obsidian/`).

## Commands

- Dev server: `npm run docs:dev` (from repo root) or `npm run dev` (from `docs/`)
- Build: `npm run docs:build` (root) or `npm run build` (docs/)
- Clean build cache: `npm run clean` (docs/)
- **`docs/` has its own `package.json`, `node_modules/`, and `package-lock.json`** — install deps and run dev/build from `docs/`, not the root. Root scripts just forward to `docs/`.

## Layout

- `docs/.vuepress/` — site config. `config.ts` (main), `plume.config.ts` (theme), `notes.ts` (note collections), `navbar.ts`, `client.ts`, `theme/` (custom.css, Custom.vue).
- `docs/notes/` — actual content, one directory per topic (`ncsec`, `Forensics`, `ctfshow`, `learn`, `menu`, `paper`, `pentest`, ...).
- `docs/preview/` — scratch/draft area, **not** wired into `notes.ts`; pages there are not part of the site nav.
- `docs/notes/demo/` — leftover scaffold (`foo.md`, `bar.md`); ignore it.

## Conventions

- Every note needs frontmatter: `title`, `createTime` (format `YYYY/MM/DD HH:mm:ss`), and `permalink` (auto-generated hash-style, e.g. `/ncsec/avrj0bx2/`). Navbar and cross-links reference these permalinks, not file paths.
- **Adding a new note collection requires registering it in `docs/.vuepress/notes.ts`** via `defineNoteConfig({ dir, link, sidebar })` and adding it to the `notes` array; optionally add a navbar entry in `navbar.ts`.
- Enabled markdown extensions (see `config.ts`): mermaid, echarts, chartjs, markmap, flowchart, katex math, timeline, annotation, pdf embed, bilibili embed, plot (hidden text `!!xx!!`), collapse.
- Site is `zh-CN`; keep new content in Chinese to match.

## Gotchas

- `docs/notes/learn/1earn/` is a **vendored copy** of https://github.com/ffffffff0x/1earn (security knowledge repo). Its nested `.gitignore` excludes many files (e.g. `/1earn/Develop/*`, `/1earn/Security/Reverse/`) — those exist locally but are intentionally not committed. Don't treat it as original content.
- `config.ts` sets `shouldPrefetch: false` (site is large) and `cache: 'filesystem'` (build cache in `docs/.vuepress/.cache` / `.temp`, gitignored).
- Git repo currently has no commits yet (fresh `master` branch).