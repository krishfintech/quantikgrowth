import React from 'react';

/**
 * Per-page document metadata. Relies on React 19's native hoisting of
 * <title>/<meta>/<link> into <head> — no external head manager needed, and it
 * renders correctly during static prerendering (Phase F). JSON-LD is emitted as
 * an inline <script>, which is valid and crawlable anywhere in the document.
 */

export const SITE_URL = 'https://quantikgrowth.in';
export const SITE_NAME = 'QuantikGrowth';
const DEFAULT_OG_IMAGE = '/og/default.png';

// Site-wide identity graph, emitted on every page (defined inline to avoid a
// circular import with data/structuredData).
const SITE_GRAPH: Record<string, unknown>[] = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    image: `${SITE_URL}/og/default.png`,
    description:
      'Digital-infrastructure studio for venture capital, private equity and PMS firms: website design, on-page SEO, and a content engine.',
    email: 'krishnaidu@quantikgrowth.in',
    areaServed: { '@type': 'Country', name: 'India' },
    sameAs: ['https://www.linkedin.com/in/krishnaidu0/'],
    knowsAbout: [
      'Website design for venture capital firms',
      'On-page SEO for venture firms',
      'Content marketing for investment firms',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/writing?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  },
];

interface SeoProps {
  title: string;
  description: string;
  /** Path beginning with "/", e.g. "/writing/slug". Becomes the canonical + og:url. */
  path: string;
  type?: 'website' | 'article';
  image?: string;
  imageAlt?: string;
  keywords?: string;
  article?: {
    publishedTime?: string;
    author?: string;
    section?: string;
  };
  /** A schema.org object (or array) serialised into a JSON-LD script. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export const Seo = ({
  title,
  description,
  path,
  type = 'website',
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  keywords,
  article,
  jsonLd,
}: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta property="og:locale" content="en_IN" />
      {type === 'article' && article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {type === 'article' && article?.author && <meta property="article:author" content={article.author} />}
      {type === 'article' && article?.section && <meta property="article:section" content={article.section} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}

      {/* Site-wide Organization + WebSite identity graph (every page) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SITE_GRAPH) }} />

      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </>
  );
};
