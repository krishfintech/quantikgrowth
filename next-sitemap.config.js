/** @type {import('next-sitemap').IConfig} */

// Static routes for both audience tracks + the data-driven slugs. Keep in sync
// with src/data/* and scripts/prerender.mjs.
const VENTURE_WRITING = [
  'revolutionizing-investment-firm-presence',
  'vc-first-five-seconds',
  'vc-portfolio-best-salesperson',
];
const PORTFOLIO_WRITING = [
  'revolutionizing-investment-firm-presence',
  'pms-growth-ceiling',
  'pms-invisible-to-inevitable',
];

const track = (prefix, writing) => [
  prefix || '/',
  `${prefix}/approach`,
  `${prefix}/work`,
  `${prefix}/writing`,
  `${prefix}/contact`,
  ...writing.map((s) => `${prefix}/writing/${s}`),
];

const PATHS = [
  ...track('', VENTURE_WRITING),
  '/about',
  ...track('/portfolio', PORTFOLIO_WRITING),
];

const config = {
  siteUrl: 'https://quantikgrowth.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  output: 'export',
  outDir: './dist',
  additionalPaths: async (config) => Promise.all(PATHS.map((p) => config.transform(config, p))),
};

export default config;
