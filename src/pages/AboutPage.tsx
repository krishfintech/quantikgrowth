import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow, SiteLayout, useFadeUpVariants, useStaggerVariants, viewportOnce } from '../components/site';

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[1.15rem] leading-[1.85] text-ink mb-7 last:mb-0">{children}</p>
);

const Block = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const fadeUp = useFadeUpVariants();

  return (
    <motion.section
      className="border-t border-line py-[52px]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="grid md:grid-cols-[200px_1fr] gap-x-10 gap-y-5">
        <h2 className="font-display font-medium text-[15px] uppercase tracking-[0.08em] text-ink-soft pt-1">
          {label}
        </h2>
        <div className="max-w-[60ch]">{children}</div>
      </div>
    </motion.section>
  );
};

const AboutPage = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.06);

  return (
    <SiteLayout>
      <section className="pt-[96px] pb-[40px]">
        <motion.div
          className="max-w-[1120px] mx-auto px-8"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-[22px]">About</Eyebrow>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2.3rem,5vw,3.6rem)] leading-[1.08] tracking-[-0.018em] max-w-[20ch]"
          >
            A venture firm should present <em className="italic text-brand">as well as it invests.</em>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.05rem,1.6vw,1.28rem)] text-ink-soft max-w-[54ch] mt-[26px] leading-[1.55]"
          >
            QuantikGrowth is a small studio that builds the digital infrastructure venture and private
            equity firms use to present their judgment — clearly, quickly, and on their own terms.
          </motion.p>
        </motion.div>
      </section>

      <div className="max-w-[1120px] mx-auto px-8 mt-8">
        <Block label="Point of view">
          <P>
            The best firms are excellent investors and forgettable publishers. Their websites read like
            directories — a wall of logos, a page of bios, a contact form — while their actual edge,
            their judgment, stays locked in decks and conversations.
          </P>
          <P>
            We think that's a mistake. A firm's site is the first thing a strong founder or an LP reads,
            and it should carry the same care the firm brings to a deal. Present the portfolio as a set
            of stories. Turn good decisions into case studies. Give partners a place to think in public.
            Done properly, the site stops introducing the firm and starts making its case.
          </P>
        </Block>

        <Block label="How we work">
          <P>
            Fast, and in public. We build a real first design before you pay — not a moodboard, a working
            page — so you're reacting to the actual thing, not a promise. If it lands, we continue with
            three revisions included. If it doesn't, you owe nothing.
          </P>
          <P>
            We keep engagements small and the surface area tight: clean, fast sites with a publishing
            engine the team will actually use. No retainers padded with deliverables nobody reads.
          </P>
        </Block>

        <Block label="Where we come from">
          <P>
            Our roots are in India's investment industry — we still take a small number of PMS pilots
            alongside our venture work.
          </P>
        </Block>
      </div>

      <section className="pt-[20px] pb-[104px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <a
            href="/contact"
            className="group inline-flex items-center gap-2 font-display text-[clamp(1.6rem,3.2vw,2.4rem)] tracking-[-0.01em] text-ink hover:text-brand transition-colors"
          >
            Start a project
            <span className="text-brand group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>
    </SiteLayout>
  );
};

export default AboutPage;
