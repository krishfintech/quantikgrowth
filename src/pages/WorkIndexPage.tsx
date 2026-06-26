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
import { work } from '../data/work';
import type { WorkItem } from '../components/site';

const WorkCard = ({ item, index }: { item: WorkItem; index: number }) => {
  const fadeUp = useFadeUpVariants();

  return (
    <motion.a
      href={`/work/${item.slug}`}
      variants={fadeUp}
      className="group block border-t border-line py-12 transition-colors duration-200 first:border-t-0"
    >
      <div className="grid gap-y-7 lg:grid-cols-[1fr_1.15fr] lg:gap-x-16">
        {/* Left: identity */}
        <div>
          <div className="flex items-center gap-3 text-[13px] text-ink-soft">
            <span className="font-display text-[15px] italic text-brand">{String(index + 1).padStart(2, '0')}</span>
            <span>{item.sector} · {item.year}</span>
          </div>
          <h2 className="mt-4 font-display font-normal text-[clamp(2rem,3.6vw,2.9rem)] leading-[1.02] tracking-[-0.015em] group-hover:text-brand transition-colors duration-200">
            {item.company}
          </h2>
          <p className="mt-4 max-w-[40ch] text-[1.05rem] leading-[1.5] text-ink">{item.thesis}</p>
        </div>

        {/* Right: summary + metrics */}
        <div className="lg:pt-1">
          <p className="max-w-[54ch] text-[16px] leading-[1.6] text-ink-soft">{item.summary}</p>
          {item.metrics && (
            <div className="mt-7 flex flex-wrap gap-x-12 gap-y-5 border-t border-line pt-6">
              {item.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-[1.7rem] leading-none tracking-[-0.01em] text-brand">{m.value}</div>
                  <div className="mt-1.5 text-[13px] text-ink-soft">{m.label}</div>
                </div>
              ))}
            </div>
          )}
          <span className="mt-7 inline-flex items-center gap-2 text-[14px] text-brand">
            Read the case study
            <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden>→</span>
          </span>
        </div>
      </div>
    </motion.a>
  );
};

const WorkIndexPage = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.05);

  return (
    <SiteLayout>
      <Seo
        title="Work — venture firms, presented as well as they invest"
        description="A representative set of builds for VC and PE firms: portfolios made legible, track records turned into investment case studies, and a content engine that compounds."
        path="/work"
        keywords="venture capital case studies, VC website examples, portfolio design, investment case study"
      />
      <section className="pt-[96px] pb-[56px]">
        <motion.div className="max-w-[1120px] mx-auto px-8" variants={stagger} initial="hidden" animate="visible">
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
            className="text-[clamp(1.02rem,1.5vw,1.2rem)] text-ink-soft max-w-[54ch] mt-[26px] leading-[1.55]"
          >
            A representative set of builds — portfolios made legible, track records turned into case
            studies, and a content engine that compounds a firm's thinking into authority. Each is shown
            as representative work; the craft is real.
          </motion.p>
        </motion.div>
      </section>

      <section className="pb-[104px]">
        <motion.div
          className="max-w-[1120px] mx-auto px-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {work.map((item, i) => (
            <React.Fragment key={item.slug}>
              <WorkCard item={item} index={i} />
            </React.Fragment>
          ))}
          <p className="mt-12 max-w-[60ch] text-[13px] text-ink-soft">
            Built for venture firms. We take a select number of private equity and PMS engagements as
            pilots.
          </p>
        </motion.div>
      </section>
    </SiteLayout>
  );
};

export default WorkIndexPage;
