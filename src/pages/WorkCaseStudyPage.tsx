import React from 'react';
import { motion } from 'motion/react';
import {
  Button,
  CountUp,
  Eyebrow,
  Seo,
  SITE_URL,
  SiteLayout,
  useFadeUpVariants,
  useStaggerVariants,
  viewportOnce,
} from '../components/site';
import { work } from '../data/work';
import { caseStudyContent } from '../data/caseStudyContent';
import type { CaseServiceBlock } from '../data/caseStudyContent';

/* --- Compact service visuals ------------------------------------------------ */

const WebsiteMini = () => (
  <div className="overflow-hidden rounded-[12px] border border-white/10 bg-brand-deep">
    <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2.5">
      <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
      <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
      <span className="ml-2 text-[9px] text-white/40">northbound.vc/portfolio</span>
    </div>
    <div className="p-5">
      <div className="text-[9px] font-medium uppercase tracking-[0.2em] text-[#9FD9B8]">Voltreon</div>
      <div className="mt-2 font-display text-[16px] leading-tight text-white">Grid-scale storage for a renewable baseload</div>
      <p className="mt-2 text-[10px] leading-relaxed text-white/45">What we saw, why we moved at seed, and what it became.</p>
      <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] text-[#9FD9B8]">Read the thesis →</div>
    </div>
  </div>
);

const SeoMini = () => (
  <div className="rounded-[12px] border border-line bg-paper p-5">
    <div className="flex items-end justify-between">
      <div>
        <div className="text-[10px] font-medium uppercase tracking-[0.16em] text-ink-soft">Search position</div>
        <div className="font-display text-[2rem] leading-none text-brand">#1</div>
      </div>
      <svg viewBox="0 0 90 40" className="h-10 w-[90px]" fill="none" aria-hidden>
        <path d="M2 36 C 24 34, 36 24, 52 16 S 78 6, 88 3" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
    <div className="mt-4 flex flex-wrap gap-1.5">
      {['who funds grid storage', 'seed climate hardware'].map((q) => (
        <span key={q} className="rounded-full border border-brand/25 bg-brand-tint px-2.5 py-1 text-[10px] text-brand-deep">{q}</span>
      ))}
    </div>
  </div>
);

const ContentMini = () => (
  <div className="rounded-[12px] border border-line bg-paper p-5">
    <div className="flex items-center gap-2.5 rounded-lg border border-line bg-paper-soft px-3 py-2.5">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-tint text-brand">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill="currentColor" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </span>
      <span className="text-[11px] text-ink-soft">2-min voicenote</span>
      <span className="ml-auto text-[10px] text-ink-soft">Mon</span>
    </div>
    <div className="my-1.5 ml-[23px] h-3 w-px bg-line-strong" />
    <div className="rounded-lg border border-brand/25 bg-brand-tint px-3 py-2.5">
      <div className="text-[9px] font-medium uppercase tracking-[0.18em] text-brand">Article + 4 social posts</div>
      <div className="mt-1 font-display text-[13px] text-brand-deep">Published by Friday</div>
    </div>
  </div>
);

const SERVICE_VISUALS = [<WebsiteMini />, <SeoMini />, <ContentMini />];

/* --- Service block ---------------------------------------------------------- */

const ServiceBlock = ({ service, visual, flip }: { service: CaseServiceBlock; visual: React.ReactNode; flip: boolean }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.07);

  return (
    <motion.div
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.div variants={fadeUp} className={flip ? 'lg:order-2' : ''}>
        <div className="flex items-center gap-3 text-[13px] text-ink-soft">
          <span className="font-display text-[15px] italic text-brand">{service.n}</span>
          <span className="font-medium uppercase tracking-[0.16em]">{service.kicker}</span>
        </div>
        <h3 className="mt-3.5 font-display font-normal text-[clamp(1.5rem,2.6vw,2.1rem)] leading-[1.14] tracking-[-0.01em] max-w-[18ch]">
          {service.title}
        </h3>
        <p className="mt-4 max-w-[46ch] text-[16px] leading-[1.55] text-ink-soft">{service.body}</p>
        <ul className="mt-6 space-y-3">
          {service.points.map((p) => (
            <li key={p} className="flex gap-3.5 text-[15px] leading-[1.5] text-ink-soft">
              <span className="mt-[11px] h-px w-4 shrink-0 bg-brand" />
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-6 border-l-2 border-brand pl-4 text-[14.5px] italic leading-[1.5] text-brand-deep">{service.note}</p>
      </motion.div>

      <motion.div variants={fadeUp} className={flip ? 'lg:order-1' : ''}>
        <div className="rounded-[16px] border border-line bg-paper-soft p-6 shadow-[0_24px_60px_-34px_rgba(19,36,28,0.3)]">
          {visual}
        </div>
      </motion.div>
    </motion.div>
  );
};

const NotFound = () => (
  <SiteLayout>
    <Seo title="Case study not found" description="The case study you were looking for could not be found." path="/work" />
    <section className="pt-[120px] pb-[140px]">
      <div className="max-w-[1120px] mx-auto px-8">
        <h1 className="font-display text-[2.4rem] tracking-[-0.01em]">Case study not found</h1>
        <p className="text-ink-soft mt-4">
          <a href="/work" className="text-brand hover:underline">← Back to all work</a>
        </p>
      </div>
    </section>
  </SiteLayout>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-7 text-[12px] font-medium uppercase tracking-[0.16em] text-ink-soft">{children}</div>
);

const WorkCaseStudyPage = ({ slug }: { slug: string }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.1);
  const staggerGroup = useStaggerVariants(0.08);

  const item = work.find((w) => w.slug === slug);
  const content = caseStudyContent[slug];

  if (!item || !content) return <NotFound />;

  const path = `/work/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${item.company} — case study`,
    description: content.description,
    datePublished: content.datePublished,
    author: { '@type': 'Organization', name: 'QuantikGrowth' },
    publisher: {
      '@type': 'Organization',
      name: 'QuantikGrowth',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/favicon.svg` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${path}` },
  };

  return (
    <SiteLayout>
      <Seo
        title={`${item.company} — case study`}
        description={content.description}
        path={path}
        type="article"
        keywords={content.keywords}
        article={{ publishedTime: content.datePublished, section: 'Case study' }}
        jsonLd={jsonLd}
      />

      {/* Cover */}
      <section className="pt-[84px] pb-[20px]">
        <motion.div className="max-w-[1120px] mx-auto px-8" variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <a href="/work" className="text-[14px] text-ink-soft hover:text-brand transition-colors">← Selected work</a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-brand-tint px-3 py-1 text-[12px] font-medium text-brand">{content.badge}</span>
            <span className="text-[13px] text-ink-soft">{item.sector} · {item.year}</span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="mt-5 font-display font-normal text-[clamp(2.6rem,5.4vw,4.4rem)] leading-[1.04] tracking-[-0.018em]"
          >
            {item.company}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[44ch] text-[clamp(1.1rem,1.7vw,1.4rem)] leading-[1.45] text-ink"
          >
            {item.thesis}
          </motion.p>

          {/* Spec bar */}
          <motion.dl
            variants={fadeUp}
            className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-line bg-line sm:grid-cols-4"
          >
            {content.spec.map((s) => (
              <div key={s.label} className="bg-paper px-6 py-6">
                <dt className="text-[12px] uppercase tracking-[0.14em] text-ink-soft">{s.label}</dt>
                <dd className="mt-1.5 font-display text-[1.25rem] tracking-[-0.01em] text-ink">{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </section>

      {/* Context */}
      <section className="border-t border-line py-[72px] mt-12">
        <div className="max-w-[1120px] mx-auto px-8">
          <motion.div
            className="grid items-start gap-12 lg:grid-cols-[1fr_360px] lg:gap-16"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Context</SectionLabel>
              <h2 className="font-display font-normal text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.12] tracking-[-0.01em] max-w-[20ch]">
                Strong climate thesis. A website that gave none of it away.
              </h2>
              <div className="mt-7 max-w-[58ch] space-y-5">
                {content.context.paras.map((p, i) => (
                  <p key={i} className="text-[1.12rem] leading-[1.75] text-ink">{p}</p>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-[16px] border border-line bg-paper-soft p-7">
              <div className="font-display text-[1.3rem] tracking-[-0.01em]">{content.context.stateTitle}</div>
              <div className="text-[12px] uppercase tracking-[0.16em] text-ink-soft">{content.context.stateSubtitle}</div>
              <div className="mt-6 h-px w-full bg-line" />
              <dl className="mt-6 space-y-5">
                {content.context.stateRows.map((r) => (
                  <div key={r.l} className="flex gap-3.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-soft/40" />
                    <div>
                      <dt className="text-[11px] uppercase tracking-[0.12em] text-ink-soft">{r.l}</dt>
                      <dd className="text-[14.5px] text-ink">{r.v}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="border-t border-line py-[72px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <SectionLabel>The challenge</SectionLabel>
            <h2 className="font-display font-normal text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.12] tracking-[-0.01em] max-w-[24ch]">
              {content.challenge.intro}
            </h2>
          </motion.div>
          <motion.div
            className="mt-12 grid gap-px overflow-hidden rounded-[16px] border border-line bg-line md:grid-cols-3"
            variants={staggerGroup}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {content.challenge.points.map((c, i) => (
              <motion.div key={c.title} variants={fadeUp} className="bg-paper p-7">
                <div className="font-display text-[1.6rem] italic text-brand/30">{`0${i + 1}`}</div>
                <h3 className="mt-4 font-display text-[1.3rem] leading-tight tracking-[-0.01em]">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.55] text-ink-soft">{c.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What we did */}
      <section className="border-t border-line py-[72px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <SectionLabel>What we did</SectionLabel>
            <h2 className="font-display font-normal text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.12] tracking-[-0.01em] max-w-[22ch]">
              Three services, built to work as one system.
            </h2>
          </motion.div>
          <div className="mt-16 space-y-[88px]">
            {content.services.map((service, i) => (
              <React.Fragment key={service.n}>
                <ServiceBlock service={service} visual={SERVICE_VISUALS[i]} flip={i % 2 === 1} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* The build — before / after */}
      <section className="border-t border-line py-[72px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <SectionLabel>The build</SectionLabel>
            <h2 className="font-display font-normal text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.12] tracking-[-0.01em] max-w-[22ch]">
              Before and after.
            </h2>
            <p className="mt-5 max-w-[52ch] text-[1.05rem] leading-[1.6] text-ink-soft">{content.build.intro}</p>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-5 md:grid-cols-2"
            variants={staggerGroup}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUp} className="rounded-[16px] border border-line bg-paper-soft p-8">
              <div className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-soft">Before</div>
              <ul className="mt-6 space-y-4">
                {content.build.before.map((b) => (
                  <li key={b} className="flex gap-3.5 text-[15.5px] leading-[1.5] text-ink-soft">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-ink-soft/30" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-[16px] border border-brand/25 bg-brand-tint p-8">
              <div className="text-[12px] font-medium uppercase tracking-[0.16em] text-brand">After</div>
              <ul className="mt-6 space-y-4">
                {content.build.after.map((a) => (
                  <li key={a} className="flex gap-3.5 text-[15.5px] leading-[1.5] text-brand-deep">
                    <span className="mt-[7px] text-brand" aria-hidden>→</span>
                    {a}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="border-t border-line py-[80px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <SectionLabel>The outcome</SectionLabel>
            <h2 className="font-display font-normal text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.12] tracking-[-0.01em] max-w-[18ch]">
              What a build like this is worth.
            </h2>
            <p className="mt-5 max-w-[56ch] text-[14px] leading-[1.6] text-ink-soft">{content.results.intro}</p>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-line pt-12 lg:grid-cols-3">
            {content.results.metrics.map((m) => (
              <div key={m.label}>
                <div className="font-display text-[clamp(2.4rem,4.4vw,3.2rem)] leading-none tracking-[-0.01em] text-brand">
                  <CountUp end={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                </div>
                <div className="mt-3 text-[15px] text-ink">{m.label}</div>
                <div className="mt-1 text-[13px] text-ink-soft">{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            className="mt-16 grid gap-px overflow-hidden rounded-[16px] border border-line bg-line md:grid-cols-3"
            variants={staggerGroup}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {content.results.timeline.map((t) => (
              <motion.div key={t.phase} variants={fadeUp} className="bg-paper p-7">
                <div className="text-[12px] uppercase tracking-[0.14em] text-ink-soft">{t.phase}</div>
                <div className="mt-2 font-display text-[1.4rem] tracking-[-0.01em]">{t.title}</div>
                <ul className="mt-5 space-y-2.5">
                  {t.items.map((x) => (
                    <li key={x} className="flex items-center gap-2.5 text-[13.5px] text-ink-soft">
                      <span className="h-1 w-1 rounded-full bg-brand" />
                      {x}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-line py-[88px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <motion.figure
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-[40ch]"
          >
            <blockquote className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.25] tracking-[-0.01em] text-brand-deep">
              {content.closing.quote}
            </blockquote>
            <figcaption className="mt-6 text-[13px] uppercase tracking-[0.14em] text-ink-soft">
              {content.closing.attribution}
            </figcaption>
          </motion.figure>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" href="/contact" arrow>
              Start a project
            </Button>
            <Button variant="ghost" href="/approach">
              See the approach
            </Button>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default WorkCaseStudyPage;
