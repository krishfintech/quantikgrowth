/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://quantikgrowth.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  output: 'export',
  outDir: './dist',
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/case-study'),
    await config.transform(config, '/insights'),
  ],
};

export default config;
