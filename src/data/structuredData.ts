import { SITE_URL } from '../components/site/Seo';
import type { Audience } from '../audience';

type JsonLd = Record<string, unknown>;

const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const organizationSchema: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'QuantikGrowth',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  image: `${SITE_URL}/og/default.png`,
  description:
    'Digital-infrastructure studio for venture capital and private equity firms: website design, on-page SEO, and a content engine.',
  email: 'krishnaidu@quantikgrowth.in',
  areaServed: { '@type': 'Country', name: 'India' },
  sameAs: ['https://www.linkedin.com/company/quantikgrowth'],
  knowsAbout: [
    'Website design for venture capital firms',
    'On-page SEO for venture firms',
    'Content marketing for investment firms',
  ],
};

export const websiteSchema: JsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'QuantikGrowth',
  description: 'Website design, on-page SEO, and a content engine for venture & private equity firms.',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
};

export const servicesSchema: JsonLd[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website design',
    name: 'Website design for venture & private equity firms',
    description:
      'Clean, fast, editorial websites built around a firm’s portfolio and investment case studies.',
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'India' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Search engine optimization',
    name: 'On-page SEO for venture firms',
    description:
      'On-page SEO so a venture firm is found by the founders and LPs searching for it — inbound, discoverability, and authority.',
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'India' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Content marketing',
    name: 'Content engine for investment firms',
    description:
      'We turn a partner’s voicenotes and videos into polished articles and repurposed social posts across LinkedIn, X, and short-form video.',
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'India' },
  },
];

const service = (serviceType: string, name: string, description: string): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType,
  name,
  description,
  provider: { '@id': ORG_ID },
  areaServed: { '@type': 'Country', name: 'India' },
});

const CHATBOT_SERVICE = service(
  'AI investor-relations concierge',
  'AI Investor Relations Concierge for PMS firms',
  'A compliance-safe AI concierge that answers prospective-investor questions in a firm’s voice from approved material — information and analysis, never investment advice.',
);

/** Service JSON-LD per audience: 3 for venture, 4 for portfolio (adds the AI concierge). */
export const servicesSchemaFor = (audience: Audience): JsonLd[] =>
  audience === 'portfolio' ? [...servicesSchema, CHATBOT_SERVICE] : servicesSchema;

export const breadcrumbSchema = (items: { name: string; path: string }[]): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${SITE_URL}${it.path}`,
  })),
});

export const faqSchema = (qas: { q: string; a: string }[]): JsonLd => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: qas.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});
