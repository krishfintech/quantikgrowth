import React from 'react';
import { motion } from 'motion/react';
import {
  Button,
  Eyebrow,
  MaskReveal,
  Seo,
  SiteLayout,
  useFadeUpVariants,
  useStaggerVariants,
  viewportOnce,
} from '../components/site';
import { breadcrumbSchema, faqSchema, servicesSchema } from '../data/structuredData';
import { useAudience } from '../audience';
import { approachContent, type ApproachContent } from '../content/approach';

// --- Primitives --------------------------------------------------------------

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[1.12rem] leading-[1.8] text-ink mb-6 last:mb-0">{children}</p>
);

const Lead = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[clamp(1.2rem,2vw,1.5rem)] leading-[1.5] text-ink-soft font-display tracking-[-0.005em] max-w-[40ch]">
    {children}
  </p>
);

const Chapter = ({
  index,
  kicker,
  title,
  children,
}: {
  index: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) => {
  const fadeUp = useFadeUpVariants();

  return (
    <motion.section
      className="border-t border-line py-[56px] sm:py-[72px] scroll-mt-[90px]"
      id={kicker.toLowerCase().replace(/\s+/g, '-')}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="grid gap-y-8 lg:grid-cols-[240px_1fr] lg:gap-x-16">
        <div className="lg:sticky lg:top-[100px] lg:self-start">
          <div className="font-display text-[2.4rem] italic leading-none text-brand/30">{index}</div>
          <div className="mt-3 text-[13px] font-medium uppercase tracking-[0.16em] text-ink-soft">{kicker}</div>
        </div>
        <div>
          <h2 className="font-display font-normal text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.12] tracking-[-0.01em] max-w-[20ch]">
            {title}
          </h2>
          <div className="mt-7">{children}</div>
        </div>
      </div>
    </motion.section>
  );
};

const PointList = ({ points }: { points: string[] }) => (
  <ul className="mt-7 space-y-3 text-[15.5px] text-ink-soft">
    {points.map((x) => (
      <li key={x} className="flex gap-3.5">
        <span className="mt-[11px] h-px w-4 shrink-0 bg-brand" />
        {x}
      </li>
    ))}
  </ul>
);

const SeoWhy = ({ why }: { why: ApproachContent['seo']['why'] }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08);

  return (
    <motion.div
      className="mt-10 grid gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-3"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {why.map((w) => (
        <motion.div key={w.k} variants={fadeUp} className="bg-paper p-6">
          <div className="font-display text-[1.25rem] tracking-[-0.01em] text-brand">{w.k}</div>
          <p className="mt-3 text-[14.5px] leading-[1.55] text-ink-soft">{w.body}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

const EngineSteps = ({ steps }: { steps: ApproachContent['content']['steps'] }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.07);

  return (
    <motion.ol className="mt-10" variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      {steps.map((s, i) => (
        <motion.li key={s.n} variants={fadeUp} className="relative grid grid-cols-[44px_1fr] gap-x-5 pb-9 last:pb-0">
          {i < steps.length - 1 && (
            <span className="absolute left-[21px] top-[44px] bottom-2 w-px bg-line-strong" aria-hidden />
          )}
          <span className="z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full border border-brand/30 bg-brand-tint font-display text-[1.1rem] text-brand">
            {s.n}
          </span>
          <div className="pt-1.5">
            <h3 className="font-display text-[1.35rem] tracking-[-0.01em]">{s.t}</h3>
            <p className="mt-2.5 max-w-[52ch] text-[16px] leading-[1.55] text-ink-soft">{s.b}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
};

const Flywheel = ({ nodes }: { nodes: ApproachContent['together']['nodes'] }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.1);

  return (
    <motion.div className="mt-10 grid gap-4 md:grid-cols-3" variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      {nodes.map((n, i) => (
        <motion.div key={n.t} variants={fadeUp} className="relative rounded-[14px] border border-line bg-paper-soft p-6">
          <div className="font-display text-[15px] italic text-brand/40">{`0${i + 1}`}</div>
          <h3 className="mt-3 font-display text-[1.2rem] leading-tight tracking-[-0.01em]">{n.t}</h3>
          <p className="mt-2.5 text-[14.5px] leading-[1.5] text-ink-soft">{n.s}</p>
          {i < nodes.length - 1 && (
            <span className="absolute -right-[14px] top-1/2 hidden -translate-y-1/2 text-brand md:block" aria-hidden>→</span>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

// --- Page --------------------------------------------------------------------

const ApproachPage = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.05);
  const faqStagger = useStaggerVariants(0.06);
  const { audience, link } = useAudience();
  const c = approachContent[audience];

  return (
    <SiteLayout>
      <Seo
        title={c.meta.title}
        description={c.meta.description}
        path={link('/approach')}
        image={c.meta.og}
        imageAlt={`QuantikGrowth — ${c.meta.title}.`}
        keywords={c.meta.keywords}
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: link('/') },
            { name: 'Approach', path: link('/approach') },
          ]),
          ...servicesSchema,
          faqSchema(c.faq),
        ]}
      />
      <section className="pt-[60px] pb-[32px] sm:pt-[96px] sm:pb-[40px]">
        <motion.div className="max-w-[1320px] mx-auto px-8 lg:px-12" variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-[22px]">Approach</Eyebrow>
          </motion.div>
          <h1 className="font-display font-normal text-[clamp(2.4rem,5.2vw,4rem)] leading-[1.06] tracking-[-0.018em] max-w-[17ch]">
            <MaskReveal delay={0.1}>
              {c.hero.lead} <em className="italic text-brand">{c.hero.em}</em>
            </MaskReveal>
          </h1>
          <motion.div variants={fadeUp} className="mt-[28px]">
            <Lead>{c.hero.copy}</Lead>
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-[1320px] mx-auto px-8 lg:px-12">
        <Chapter index="01" kicker="Website design" title={c.website.title}>
          {c.website.paras.map((p, i) => (
            <React.Fragment key={i}>
              <P>{p}</P>
            </React.Fragment>
          ))}
          <PointList points={c.website.points} />
        </Chapter>

        <Chapter index="02" kicker="On-page SEO" title={c.seo.title}>
          <P>{c.seo.intro}</P>
          <SeoWhy why={c.seo.why} />
          <div className="mt-8" />
          <P>{c.seo.outro}</P>
        </Chapter>

        <Chapter index="03" kicker="Content engine" title={c.content.title}>
          <P>{c.content.intro}</P>
          <EngineSteps steps={c.content.steps} />
        </Chapter>

        <Chapter index="04" kicker="Why together" title={c.together.title}>
          <P>{c.together.intro}</P>
          <Flywheel nodes={c.together.nodes} />
        </Chapter>
      </div>

      {/* FAQ — AEO: question-headings + tight, quotable answers */}
      <section className="border-t border-line py-[60px] sm:py-[80px]" aria-labelledby="faq-heading">
        <div className="max-w-[1320px] mx-auto px-8 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow className="mb-[22px]">Questions, answered</Eyebrow>
            <h2 id="faq-heading" className="font-display font-normal text-[clamp(1.8rem,3.4vw,2.6rem)] tracking-[-0.01em] max-w-[22ch]">
              {c.faqHeading}
            </h2>
          </motion.div>

          <motion.dl
            className="mt-12 grid gap-px overflow-hidden rounded-[16px] border border-line bg-line md:grid-cols-2"
            variants={faqStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {c.faq.map((item) => (
              <motion.div key={item.q} variants={fadeUp} className="bg-paper p-7">
                <dt className="font-display text-[1.25rem] leading-[1.25] tracking-[-0.01em] text-ink">{item.q}</dt>
                <dd className="mt-3 text-[15.5px] leading-[1.6] text-ink-soft">{item.a}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </section>

      <section className="border-t border-line py-[60px] sm:py-[80px]">
        <div className="max-w-[1320px] mx-auto px-8 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <h2 className="font-display font-normal text-[clamp(1.8rem,3.4vw,2.6rem)] tracking-[-0.01em] max-w-[20ch]">
              See the design before you decide anything.
            </h2>
            <p className="mt-5 max-w-[50ch] text-[1.1rem] leading-[1.6] text-ink-soft">
              We build a real first design of your new site before you commit. If you love it, we
              continue — three revisions included. If you don't, you owe nothing.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button variant="primary" href="/contact" arrow>
                Start a project
              </Button>
              <Button variant="ghost" href="/work">
                See the work
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ApproachPage;
