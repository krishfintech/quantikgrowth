/** @type {import('next-sitemap').IConfig} */

// Static routes for both audience tracks + the data-driven slugs. Keep in sync
// with src/data/* and scripts/prerender.mjs.
const VENTURE_WORK = ['northbound-capital'];
const VENTURE_WRITING = ['think-like-a-publisher', 'logo-wall-is-dead', 'what-founders-read'];
const PORTFOLIO_WORK = ['meridian-pms'];
const PORTFOLIO_WRITING = ['think-like-a-publisher', 'what-hni-investors-read', 'seo-for-pms-firms'];

const track = (prefix, work, writing) => [
  prefix || '/',
  `${prefix}/approach`,
  `${prefix}/work`,
  `${prefix}/writing`,
  `${prefix}/contact`,
  ...work.map((s) => `${prefix}/work/${s}`),
  ...writing.map((s) => `${prefix}/writing/${s}`),
];

const PATHS = [
  ...track('', VENTURE_WORK, VENTURE_WRITING),
  '/about',
  ...track('/portfolio', PORTFOLIO_WORK, PORTFOLIO_WRITING),
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
