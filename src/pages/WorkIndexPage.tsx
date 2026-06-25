import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow, SiteLayout, WorkLedger, useFadeUpVariants, useStaggerVariants } from '../components/site';
import { work } from '../data/work';

const WorkIndexPage = () => {
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
            <Eyebrow className="mb-[22px]">Selected work</Eyebrow>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.06] tracking-[-0.018em] max-w-[18ch]"
          >
            Firms presented <em className="italic text-brand">as well as they invest.</em>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.02rem,1.5vw,1.2rem)] text-ink-soft max-w-[52ch] mt-[26px] leading-[1.55]"
          >
            A representative set of builds — portfolios made legible, track records turned into case
            studies, and publishing engines that compound a firm's thinking into authority.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-[104px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <WorkLedger items={work} />
          <p className="text-[13px] text-ink-soft mt-10 max-w-[60ch]">
            Built for venture firms. We take a select number of private equity and PMS engagements as
            pilots.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
};

export default WorkIndexPage;
