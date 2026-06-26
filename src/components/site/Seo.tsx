import React from 'react';

/**
 * Per-page document metadata. Relies on React 19's native hoisting of
 * <title>/<meta>/<link> into <head> — no external head manager needed, and it
 * renders correctly during static prerendering (Phase F). JSON-LD is emitted as
 * an inline <script>, which is valid and crawlable anywhere in the document.
 */

export const SITE_URL = 'https://quantikgrowth.in';
export const SITE_NAME = 'QuantikGrowth';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`; // TODO(Phase F): ship this asset

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
      <meta property="og:image" content={image} />
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
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </>
  );
};
