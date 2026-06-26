// Dependency-free static prerender. Renders each route with react-dom/server,
// lifts the <Seo> metadata tags into <head>, and writes real HTML to
// dist/<route>/index.html so crawlers (and first paint) get full content.
// The client still boots via createRoot and re-renders — no hydration, so no
// SSR/CSR mismatch with the scroll/animation state.

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url)) + '/..';
const dist = join(root, 'dist');

// Keep in sync with src/data/*. Mirrors next-sitemap.config.js.
const WORK_SLUGS = ['northbound-capital'];
const WRITING_SLUGS = ['think-like-a-publisher', 'logo-wall-is-dead', 'what-founders-read'];
const ROUTES = [
  '/',
  '/approach',
  '/work',
  '/writing',
  '/about',
  '/contact',
  ...WORK_SLUGS.map((s) => `/work/${s}`),
  ...WRITING_SLUGS.map((s) => `/writing/${s}`),
];

// Tags that belong in <head> rather than the body.
const HEAD_PATTERNS = [
  /<title[^>]*>[\s\S]*?<\/title>/i,
  /<meta\b[^>]*?>/gi,
  /<link\b[^>]*?>/gi,
  /<script type="application\/ld\+json">[\s\S]*?<\/script>/gi,
];

function splitHeadTags(html) {
  const head = [];
  let body = html;
  for (const pattern of HEAD_PATTERNS) {
    body = body.replace(pattern, (match) => {
      head.push(match);
      return '';
    });
  }
  return { head: head.join('\n    '), body };
}

async function main() {
  const template = await readFile(join(dist, 'index.html'), 'utf8');
  const { render } = await import(pathToFileURL(join(root, 'dist-server', 'entry-server.js')).href);

  for (const route of ROUTES) {
    const rendered = render(route);
    const { head, body } = splitHeadTags(rendered);

    let page = template.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
    if (head) page = page.replace('</head>', `    ${head}\n  </head>`);

    const outPath =
      route === '/' ? join(dist, 'index.html') : join(dist, route.replace(/^\//, ''), 'index.html');
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, page, 'utf8');
    console.log(`prerendered ${route} -> ${outPath.replace(root, '.')}`);
  }
}

main().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
