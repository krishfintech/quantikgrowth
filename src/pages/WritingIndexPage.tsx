import React from 'react';
import { motion } from 'motion/react';
import {
  Eyebrow,
  Seo,
  SiteLayout,
  useFadeUpVariants,
  useStaggerVariants,
  viewportOnce,
} from '../components/site';
import { writing } from '../data/writing';
import type { ArticleItem } from '../components/site';

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

  const [featured, ...rest] = writing;

  return (
    <SiteLayout>
      <Seo
        title="Writing — on how venture firms present themselves"
        description="Notes on portfolio, proof, and publishing — the small decisions that make a venture firm legible to the founders and LPs it wants to reach."
        path="/writing"
        keywords="venture capital writing, VC thought leadership, how venture firms present themselves, publishing for investors"
      />
      <section className="pt-[96px] pb-[48px]">
        <motion.div className="max-w-[1120px] mx-auto px-8" variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-[22px]">Writing</Eyebrow>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.018em] max-w-[16ch]"
          >
            On how venture firms <em className="italic text-brand">present themselves.</em>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.02rem,1.5vw,1.2rem)] text-ink-soft max-w-[52ch] mt-[26px] leading-[1.55]"
          >
            Notes on portfolio, proof, and publishing — the small decisions that make a firm legible to
            the founders and LPs it wants to reach. This is also the content engine, working on our own
            site.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-[40px]">
        <motion.div
          className="max-w-[1120px] mx-auto px-8"
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
            className="max-w-[1120px] mx-auto px-8"
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
