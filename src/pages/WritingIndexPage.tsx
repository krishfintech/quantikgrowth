import React from 'react';
import { motion } from 'motion/react';
import { ArticleRow, Eyebrow, SiteLayout, useFadeUpVariants, useStaggerVariants } from '../components/site';
import { writing } from '../data/writing';

const WritingIndexPage = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.05);

  return (
    <SiteLayout>
      <section className="pt-[96px] pb-[48px]">
        <motion.div
          className="max-w-[1120px] mx-auto px-8"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
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
            the founders and LPs it wants to reach.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-[104px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <ArticleRow articles={writing} />
        </div>
      </section>
    </SiteLayout>
  );
};

export default WritingIndexPage;
