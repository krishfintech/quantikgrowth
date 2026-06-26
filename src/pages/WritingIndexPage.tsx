import React from 'react';
import { motion } from 'motion/react';
import {
  Eyebrow,
  MaskReveal,
  Seo,
  SiteLayout,
  useFadeUpVariants,
  useStaggerVariants,
  viewportOnce,
} from '../components/site';
import { writingByAudience } from '../data/writing';
import type { ArticleItem } from '../components/site';
import { breadcrumbSchema } from '../data/structuredData';
import { useAudience, type Audience } from '../audience';

const COPY: Record<Audience, { metaTitle: string; metaDescription: string; og: string; lead: string; em: string; intro: string }> = {
  venture: {
    metaTitle: 'Writing on how VC firms present themselves',
    metaDescription:
      'Notes on portfolio, proof, and publishing — the decisions that make a venture firm legible to the founders and LPs it wants to reach.',
    og: '/og/writing.png',
    lead: 'On how venture firms',
    em: 'present themselves.',
    intro:
      'Notes on portfolio, proof, and publishing — the small decisions that make a firm legible to the founders and LPs it wants to reach. This is also the content engine, working on our own site.',
  },
  portfolio: {
    metaTitle: 'Writing on how PMS firms grow AUM online',
    metaDescription:
      'Notes on credibility, discoverability, and trust — the decisions that make a SEBI-registered PMS legible to the HNIs and advisors it wants to reach.',
    og: '/og/portfolio-writing.png',
    lead: 'On how PMS firms',
    em: 'earn trust online.',
    intro:
      'Notes on credibility, discoverability, and trust — the small decisions that make a PMS firm legible to the HNIs and advisors it wants to reach. This is also the content engine, working on our own site.',
  },
};

const Meta = ({ article }: { article: ArticleItem }) => (
  <span className="text-[13px] text-ink-soft">
    {article.date} · {article.readingMinutes} min read
  </span>
);

const FeaturedArticle = ({ article }: { article: ArticleItem }) => {
  const fadeUp = useFadeUpVariants();

  return (
    <motion.a
      href={`/writing/${article.slug}`}
      variants={fadeUp}
      className="group block rounded-[18px] border border-line bg-paper-soft p-8 transition-colors duration-200 hover:border-line-strong md:p-12"
    >
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-brand-tint px-3 py-1 text-[12px] font-medium text-brand">Featured</span>
        <Meta article={article} />
      </div>
      <h2 className="mt-6 font-display font-normal text-[clamp(2rem,4vw,3rem)] leading-[1.08] tracking-[-0.015em] max-w-[20ch] group-hover:text-brand transition-colors duration-200">
        {article.title}
      </h2>
      <p className="mt-5 max-w-[58ch] text-[1.12rem] leading-[1.6] text-ink-soft">{article.excerpt}</p>
      <span className="mt-7 inline-flex items-center gap-2 text-[15px] text-brand">
        Read the article
        <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden>→</span>
      </span>
    </motion.a>
  );
};

const ArticleListItem = ({ article }: { article: ArticleItem }) => {
  const fadeUp = useFadeUpVariants();

  return (
    <motion.a
      href={`/writing/${article.slug}`}
      variants={fadeUp}
      className="group grid gap-y-2 border-b border-line py-9 lg:grid-cols-[160px_1fr] lg:gap-x-12"
    >
      <div className="pt-1">
        <Meta article={article} />
      </div>
      <div>
        <h3 className="font-display font-normal text-[clamp(1.4rem,2.4vw,1.85rem)] leading-[1.15] tracking-[-0.01em] group-hover:text-brand transition-colors duration-200">
          {article.title}
        </h3>
        <p className="mt-3 max-w-[60ch] text-[16px] leading-[1.55] text-ink-soft">{article.excerpt}</p>
      </div>
    </motion.a>
  );
};

const WritingIndexPage = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.05);
  const { audience, link } = useAudience();
  const c = COPY[audience];

  const [featured, ...rest] = writingByAudience(audience);

  return (
    <SiteLayout>
      <Seo
        title={c.metaTitle}
        description={c.metaDescription}
        path={link('/writing')}
        image={c.og}
        imageAlt={`QuantikGrowth — ${c.metaTitle}.`}
        keywords="venture capital writing, PMS marketing, thought leadership for investors, publishing for investment firms"
        jsonLd={breadcrumbSchema([
          { name: 'Home', path: link('/') },
          { name: 'Writing', path: link('/writing') },
        ])}
      />
      <section className="pt-[60px] pb-[36px] sm:pt-[96px] sm:pb-[48px]">
        <motion.div className="max-w-[1320px] mx-auto px-8 lg:px-12" variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-[22px]">Writing</Eyebrow>
          </motion.div>
          <h1 className="font-display font-normal text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.018em] max-w-[16ch]">
            <MaskReveal delay={0.1}>
              {c.lead} <em className="italic text-brand">{c.em}</em>
            </MaskReveal>
          </h1>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.02rem,1.5vw,1.2rem)] text-ink-soft max-w-[52ch] mt-[26px] leading-[1.55]"
          >
            {c.intro}
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-[40px]">
        <motion.div
          className="max-w-[1320px] mx-auto px-8 lg:px-12"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {featured && <FeaturedArticle article={featured} />}
        </motion.div>
      </section>

      {rest.length > 0 && (
        <section className="pb-[104px]">
          <motion.div
            className="max-w-[1320px] mx-auto px-8 lg:px-12"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp} className="mb-2 border-t border-ink pt-8">
              <span className="text-[13px] font-medium uppercase tracking-[0.14em] text-ink-soft">More writing</span>
            </motion.div>
            {rest.map((article) => (
              <React.Fragment key={article.slug}>
                <ArticleListItem article={article} />
              </React.Fragment>
            ))}
          </motion.div>
        </section>
      )}
    </SiteLayout>
  );
};

export default WritingIndexPage;
