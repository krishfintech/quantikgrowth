/** @type {import('next-sitemap').IConfig} */

// Static routes + the data-driven work/writing slugs. Keep in sync with
// src/data/work.ts, src/data/writing.ts and src/data/caseStudyContent.tsx.
const WORK_SLUGS = ['northbound-capital'];
const WRITING_SLUGS = ['think-like-a-publisher', 'logo-wall-is-dead', 'what-founders-read'];

const PATHS = [
  '/',
  '/approach',
  '/work',
  '/writing',
  '/about',
  '/contact',
  ...WORK_SLUGS.map((s) => `/work/${s}`),
  ...WRITING_SLUGS.map((s) => `/writing/${s}`),
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
