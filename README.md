# Meyora

Marketing website for Meyora — [meyora.in](https://meyora.in)

> We don't build software. We solve problems worth solving.

Built with React and Vite. Every route is prerendered to static HTML at build
time, so search engines and link unfurlers receive fully-populated markup.

## Getting started

Requires Node 18 or newer.

```bash
npm install
npm run dev          # http://localhost:5173
```

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build, then prerenders every route |
| `npm run build:no-prerender` | Vite build only — for debugging the bundle |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | ESLint |

## Project structure

```
public/            Favicon and logo assets
scripts/
  prerender.jsx    Renders each route to static HTML, writes robots + sitemap
  run-prerender.js Runs the above through Vite's SSR pipeline
src/
  components/      Layout, Navbar, Footer, Logo, Select, Seo
  data/
    content.js     All site copy — problems, solutions, FAQs, principles
    seo.js         Per-route titles, descriptions, and SITE_URL
  pages/           Home, Solutions, Philosophy, Contact
  hooks/           useToggleIndex
  index.css        Global styles, brand palette, responsive spacing tokens
```

Site copy lives in `src/data/content.js` rather than inside components, so text
edits don't mean touching JSX.

## Rendering and SEO

`npm run build` runs Vite, then `scripts/prerender.jsx` renders each route with
`react-dom/server` and writes a real HTML file per route:

```
dist/index.html            dist/philosophy/index.html
dist/solutions/index.html  dist/contact/index.html
dist/robots.txt            dist/sitemap.xml
```

React hydrates that markup in the browser, so all interactivity is unchanged.

Per-route titles, descriptions, canonicals, Open Graph and Twitter tags come
from `src/data/seo.js`, which is shared by the build and by the runtime `Seo`
component (which keeps tags correct during client-side navigation). The homepage
also carries Organization JSON-LD.

**`SITE_URL` in `src/data/seo.js` drives every absolute URL** — canonicals,
`og:url`, the sitemap and robots. Change it there and nowhere else.

## Contact form

The form posts to [Web3Forms](https://web3forms.com), so there is no backend to
run. Copy `.env.example` to `.env` and add the access key:

```
VITE_WEB3FORMS_KEY=your-key-here
```

Without a key the form asks visitors to email meyoratech@gmail.com directly
instead of silently failing. `.env` is gitignored — never commit the key.

## Deploying

Static build; any static host works (Netlify, Vercel, Cloudflare Pages).

- Build command `npm run build`, publish directory `dist`
- **Do not add a catch-all `/* → /index.html` SPA rewrite.** It would serve the
  homepage HTML at every path and discard the per-page metadata. The default
  static file handling on the hosts above already does the right thing.
- Serve one hostname only — pick `meyora.in` or `www.meyora.in` and redirect the
  other, since canonicals point at the bare domain
- After the first deploy, submit `https://meyora.in/sitemap.xml` to Google
  Search Console to trigger indexing
