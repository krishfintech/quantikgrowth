import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react';
import {
  Button,
  Seo,
  SITE_URL,
  SiteLayout,
  useFadeUpVariants,
  useStaggerVariants,
  viewportOnce,
} from '../components/site';
import { writing } from '../data/writing';
import { articleContent } from '../data/articleContent';
import type { ArticleSection } from '../data/articleContent';

/* --- Scrollspy: highlight the table-of-contents entry in view --------------- */
const useScrollSpy = (ids: string[]) => {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|')]);

  return active;
};

/* --- Reading progress bar --------------------------------------------------- */
const ProgressBar = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 30, mass: 0.2 });
  if (reduceMotion) return null;
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-brand"
      aria-hidden
    />
  );
};

/* --- Table of contents ------------------------------------------------------ */
const TableOfContents = ({ sections, active }: { sections: ArticleSection[]; active: string }) => (
  <nav aria-label="On this page" className="text-[14px]">
    <div className="mb-4 text-[12px] font-medium uppercase tracking-[0.16em] text-ink-soft">On this page</div>
    <ul className="space-y-2.5 border-l border-line">
      {sections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            className={`-ml-px block border-l-2 pl-4 leading-snug transition-colors duration-200 ${
              active === s.id
                ? 'border-brand text-brand'
                : 'border-transparent text-ink-soft hover:text-ink'
            }`}
          >
            {s.heading}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

/* --- A figure with descriptive alt text (the article's core metaphor) ------- */
const ArchiveFigure = () => {
  const reduceMotion = useReducedMotion();
  return (
    <figure className="my-12 rounded-[16px] border border-line bg-paper-soft p-8">
      <svg
        viewBox="0 0 360 150"
        className="w-full"
        role="img"
        aria-label="A line chart contrasting two assets over time: a marketing brochure's value declines steadily from launch, while a published archive's value rises and accelerates."
      >
        {/* axes */}
        <line x1="34" y1="14" x2="34" y2="124" stroke="var(--color-line-strong)" strokeWidth="1" />
        <line x1="34" y1="124" x2="346" y2="124" stroke="var(--color-line-strong)" strokeWidth="1" />
        {/* brochure: declining */}
        <motion.path
          d="M40 36 C 110 58, 200 92, 340 114"
          fill="none"
          stroke="var(--color-ink-soft)"
          strokeWidth="2"
          strokeDasharray="5 5"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        />
        {/* archive: rising and accelerating */}
        <motion.path
          d="M40 116 C 150 110, 250 86, 340 22"
          fill="none"
          stroke="var(--color-brand)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={reduceMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <text x="344" y="18" textAnchor="end" className="fill-brand" fontSize="11" fontWeight="500">Archive</text>
        <text x="344" y="110" textAnchor="end" fill="var(--color-ink-soft)" fontSize="11">Brochure</text>
        <text x="40" y="138" fill="var(--color-ink-soft)" fontSize="10">launch</text>
        <text x="346" y="138" textAnchor="end" fill="var(--color-ink-soft)" fontSize="10">years later</text>
      </svg>
      <figcaption className="mt-5 text-[14px] leading-[1.5] text-ink-soft">
        Two instruments. The brochure is worth most the day it ships and depreciates from there; the
        published archive compounds — ranking, getting forwarded, and getting cited long after it goes live.
      </figcaption>
    </figure>
  );
};

/* --- Related / more writing ------------------------------------------------- */
const RelatedFooter = ({ slugs }: { slugs: string[] }) => {
  const related = slugs
    .map((slug) => writing.find((w) => w.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <section className="border-t border-line py-[72px]">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="mb-9 text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">More writing</div>
        <div className="grid gap-px overflow-hidden rounded-[16px] border border-line bg-line md:grid-cols-2">
          {related.map((a) => (
            <a key={a.slug} href={`/writing/${a.slug}`} className="group block bg-paper p-7 transition-colors hover:bg-paper-soft">
              <div className="text-[13px] text-ink-soft">
                {a.date} · {a.readingMinutes} min read
              </div>
              <h3 className="mt-3 font-display text-[1.4rem] leading-[1.15] tracking-[-0.01em] group-hover:text-brand transition-colors">
                {a.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-[1.5] text-ink-soft">{a.excerpt}</p>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <p className="font-display text-[1.4rem] tracking-[-0.01em]">
            This essay is the content engine, working on our own site.
          </p>
          <Button variant="primary" href="/approach" arrow>
            See how it works
          </Button>
        </div>
      </div>
    </section>
  );
};

const NotFound = () => (
  <SiteLayout>
    <Seo title="Article not found" description="The article you were looking for could not be found." path="/writing" />
    <section className="pt-[120px] pb-[140px]">
      <div className="max-w-[680px] mx-auto px-6">
        <h1 className="font-display text-[2.4rem] tracking-[-0.01em]">Article not found</h1>
        <p className="text-ink-soft mt-4">
          <a href="/writing" className="text-brand hover:underline">
            ← Back to all writing
          </a>
        </p>
      </div>
    </section>
  </SiteLayout>
);

const ArticlePage = ({ slug }: { slug: string }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.07, 0.05);

  const article = writing.find((a) => a.slug === slug);
  const content = articleContent[slug];

  const ids = content ? content.sections.map((s) => s.id) : [];
  const active = useScrollSpy(ids);

  if (!article || !content) return <NotFound />;

  const path = `/writing/${slug}`;
  const showToc = content.sections.length > 2;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: content.description,
    datePublished: content.datePublished,
    dateModified: content.datePublished,
    author: { '@type': 'Person', name: content.author.name },
    publisher: {
      '@type': 'Organization',
      name: 'QuantikGrowth',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
    image: `${SITE_URL}/og-image.jpg`,
    articleSection: content.section,
    keywords: content.keywords,
  };

  return (
    <SiteLayout>
      <Seo
        title={article.title}
        description={content.description}
        path={path}
        type="article"
        keywords={content.keywords}
        imageAlt={content.ogImageAlt}
        article={{
          publishedTime: content.datePublished,
          author: content.author.name,
          section: content.section,
        }}
        jsonLd={jsonLd}
      />
      <ProgressBar />

      <div className="mx-auto max-w-[1120px] px-6 pt-[72px] pb-[40px] lg:px-8">
        <div className={showToc ? 'lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-x-14' : ''}>
          {/* Sticky TOC (desktop only) */}
          {showToc && (
            <aside className="hidden lg:block">
              <div className="sticky top-[100px]">
                <TableOfContents sections={content.sections} active={active} />
              </div>
            </aside>
          )}

          {/* Article body */}
          <article className="mx-auto max-w-[700px]">
            <motion.header variants={stagger} initial="hidden" animate="visible">
              <motion.div variants={fadeUp}>
                <a href="/writing" className="text-[14px] text-ink-soft hover:text-brand transition-colors">
                  ← Writing
                </a>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                className="mt-8 font-display font-normal text-[clamp(2.2rem,4.6vw,3.2rem)] leading-[1.08] tracking-[-0.018em]"
              >
                {article.title}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="mt-6 font-display text-[clamp(1.2rem,2vw,1.45rem)] leading-[1.45] tracking-[-0.005em] text-ink-soft"
              >
                {content.dek}
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-6 text-[14px]"
              >
                <span className="text-ink">{content.author.name}</span>
                <span className="text-ink-soft">{content.author.role}</span>
                <span className="text-line-strong" aria-hidden>·</span>
                <span className="text-ink-soft">
                  {article.date} · {article.readingMinutes} min read
                </span>
              </motion.div>
            </motion.header>

            {showToc && <ArchiveFigure />}

            {/* Mobile TOC */}
            {showToc && (
              <details className="mt-8 rounded-[12px] border border-line bg-paper-soft p-5 lg:hidden">
                <summary className="cursor-pointer text-[14px] font-medium text-ink">On this page</summary>
                <div className="mt-4">
                  <TableOfContents sections={content.sections} active={active} />
                </div>
              </details>
            )}

            <div className="mt-10">
              {content.sections.map((s) => (
                <motion.section
                  key={s.id}
                  id={s.id}
                  className="scroll-mt-[100px]"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  <h2 className="mt-12 mb-5 font-display font-medium text-[1.7rem] leading-[1.18] tracking-[-0.01em] text-ink first:mt-0">
                    {s.heading}
                  </h2>
                  {s.body}
                </motion.section>
              ))}
            </div>
          </article>
        </div>
      </div>

      <RelatedFooter slugs={content.related} />
    </SiteLayout>
  );
};

export default ArticlePage;
