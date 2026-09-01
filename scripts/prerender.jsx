/**
 * Build-time prerenderer.
 *
 * Renders every route to static HTML so crawlers, scrapers and link unfurlers
 * receive fully-populated markup instead of an empty <div id="root">.
 * React then hydrates on the client, so all interactivity is unchanged.
 *
 * Run automatically after `vite build` (see package.json "build").
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App.jsx';
import { ROUTES, ROUTE_PATHS, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../src/data/seo.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** JSON-LD so search engines understand what the organisation is. */
function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_URL + '/favicon.svg',
    email: 'meyoratech@gmail.com',
    description: ROUTES['/'].description,
    slogan: "We don't build software. We solve problems worth solving.",
  };
}

function headFor(pathname) {
  const { title, description } = ROUTES[pathname];
  const url = SITE_URL + (pathname === '/' ? '' : pathname);
  const image = SITE_URL + DEFAULT_OG_IMAGE;

  const tags = [
    `<title>${escape(title)}</title>`,
    `<meta name="description" content="${escape(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escape(title)}" />`,
    `<meta name="twitter:description" content="${escape(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
  ];

  if (pathname === '/') {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(organizationSchema())}</script>`
    );
  }

  return tags.join('\n  ');
}

let count = 0;

for (const pathname of ROUTE_PATHS) {
  const markup = renderToString(
    <StaticRouter location={pathname}>
      <App />
    </StaticRouter>
  );

  const html = template
    // strip the build's default title/description; per-route tags replace them
    .replace(/\s*<title>[\s\S]*?<\/title>/, '')
    .replace(/\s*<meta name="description"[^>]*>/, '')
    .replace('</head>', `  ${headFor(pathname)}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

  const outFile =
    pathname === '/' ? join(dist, 'index.html') : join(dist, pathname.slice(1), 'index.html');

  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, html, 'utf8');
  count += 1;
  console.log(`  prerendered ${pathname.padEnd(12)} -> ${outFile.replace(root + '\\', '').replace(root + '/', '')}`);
}

/* robots.txt + sitemap.xml */
const today = new Date().toISOString().slice(0, 10);

writeFileSync(
  join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
  'utf8'
);

writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    ROUTE_PATHS.map((p) => {
      const url = SITE_URL + (p === '/' ? '' : p);
      return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${p === '/' ? '1.0' : '0.8'}</priority>\n  </url>`;
    }).join('\n') +
    `\n</urlset>\n`,
  'utf8'
);

console.log(`  wrote robots.txt and sitemap.xml`);
console.log(`✓ prerendered ${count} routes`);
