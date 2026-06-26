import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import {
  ArticleRow,
  Button,
  Eyebrow,
  HeroArtifact,
  MaskReveal,
  MobileCtaBar,
  Nav,
  OfferBand,
  Seo,
  SiteFooter,
  WorkLedger,
  useFadeUpVariants,
  useStaggerVariants,
  viewportOnce,
  type NavLink,
} from './components/site';
import { workByAudience } from './data/work';
import { writingByAudience } from './data/writing';
import { useAudience } from './audience';
import { homeContent } from './content/home';
import type {
  HomeContent,
  HomeService,
  WebsiteVisualData,
  SeoVisualData,
  ContentVisualData,
} from './content/home';

const NAV_LINKS: NavLink[] = [
  { label: 'Approach', href: '/approach' },
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// --- Shared bits -------------------------------------------------------------

const SectionHead = ({ title, label }: { title: string; label: string }) => {
  const fadeUp = useFadeUpVariants();
  return (
    <motion.div
      className="flex flex-wrap items-baseline justify-between gap-6 mb-[54px]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <h2 className="font-display font-normal text-[clamp(1.7rem,3vw,2.35rem)] tracking-[-0.01em]">{title}</h2>
      <span className="text-[14px] text-ink-soft">{label}</span>
    </motion.div>
  );
};

// --- Hero --------------------------------------------------------------------

const Hero = ({ hero }: { hero: HomeContent['hero'] }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.35);
  const reduceMotion = useReducedMotion();

  // Parallax-lite: the artifact drifts gently as the hero scrolls past.
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const artifactY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -48]);

  return (
    <section ref={sectionRef} className="pt-[60px] pb-[56px] sm:pt-[92px] sm:pb-[88px]">
      <div className="max-w-[1380px] mx-auto px-8 lg:px-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-x-20 gap-y-14 items-center">
        <div>
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <Eyebrow className="mb-[26px]">{hero.eyebrow}</Eyebrow>
            </motion.div>
          </motion.div>

          {/* Cinematic clip reveal — the headline rises into place */}
          <h1 className="font-display font-normal text-[clamp(2.7rem,5.4vw,4.4rem)] leading-[1.05] tracking-[-0.018em] max-w-[20ch]">
            <MaskReveal delay={0.12}>
              {hero.lead} <em className="italic text-brand">{hero.em}</em>
            </MaskReveal>
          </h1>

          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              className="text-[clamp(1.05rem,1.5vw,1.24rem)] text-ink-soft max-w-[56ch] mt-[28px] leading-[1.55]"
            >
              {hero.sub}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 sm:gap-6 mt-[40px]">
              <Button variant="primary" href="/work" arrow>
                See the work
              </Button>
              <Button variant="ghost" href="/contact">
                Book an intro call
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-[44px] flex flex-wrap gap-x-7 gap-y-2 text-[13.5px] text-ink-soft">
              {['Website design', 'On-page SEO', 'Content engine'].map((item, i) => (
                <span key={item} className="flex items-center gap-2.5">
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  {item}
                  {i < 2 && <span className="ml-5 hidden text-line-strong sm:inline">/</span>}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          style={{ y: artifactY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroArtifact />
        </motion.div>
      </div>
    </section>
  );
};

// --- Service deep-dive visuals ----------------------------------------------

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3.5">
    <span className="mt-[10px] h-px w-4 shrink-0 bg-brand" />
    <span className="text-[15.5px] leading-[1.5] text-ink-soft">{children}</span>
  </li>
);

const WebsiteVisual = ({ data }: { data: WebsiteVisualData }) => (
  <div className="rounded-[16px] border border-line bg-paper-soft p-6 shadow-[0_24px_60px_-34px_rgba(19,36,28,0.3)]">
    <div className="mb-4 flex items-center justify-between">
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">{data.label}</span>
      <span className="font-display text-[13px] italic text-ink-soft">{data.count}</span>
    </div>
    {data.rows.map((c, i) => (
      <div key={c.name} className={`group flex items-baseline gap-4 py-4 ${i > 0 ? 'border-t border-line' : ''}`}>
        <span className="font-display text-[1.3rem] tracking-[-0.01em] text-ink">{c.name}</span>
        <span className="flex-1 text-[13.5px] leading-snug text-ink-soft">{c.line}</span>
        <span className="hidden shrink-0 text-[11px] text-brand sm:block">{c.tag}</span>
      </div>
    ))}
    <div className="mt-2 flex items-center gap-2 border-t border-line pt-4 text-[13px] text-brand">
      {data.cta} <span aria-hidden>→</span>
    </div>
  </div>
);

const SeoVisual = ({ data }: { data: SeoVisualData }) => (
  <div className="rounded-[16px] border border-line bg-paper-soft p-6 shadow-[0_24px_60px_-34px_rgba(19,36,28,0.3)]">
    <div className="mb-5 flex items-end justify-between">
      <div>
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">Organic search</div>
        <div className="mt-1 font-display text-[2rem] leading-none tracking-[-0.01em] text-brand">{data.stat}</div>
        <div className="mt-1 text-[12px] text-ink-soft">{data.statSub}</div>
      </div>
      <svg viewBox="0 0 120 56" className="h-14 w-[120px]" fill="none" aria-hidden>
        <motion.path
          d="M2 50 C 28 48, 40 40, 60 30 S 96 10, 118 5"
          stroke="var(--color-brand)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.circle
          cx="118" cy="5" r="3.5" fill="var(--color-brand)"
          initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={viewportOnce}
          transition={{ delay: 1.3, duration: 0.3 }}
        />
      </svg>
    </div>
    <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">{data.chipsLabel}</div>
    <div className="mt-3 flex flex-wrap gap-2">
      {data.chips.map((q) => (
        <span key={q} className="rounded-full border border-brand/25 bg-brand-tint px-3 py-1.5 text-[12px] text-brand-deep">
          {q}
        </span>
      ))}
    </div>
  </div>
);

const ContentVisual = ({ data }: { data: ContentVisualData }) => (
  <div className="rounded-[16px] border border-line bg-paper-soft p-6 shadow-[0_24px_60px_-34px_rgba(19,36,28,0.3)]">
    <div className="flex items-center gap-3 rounded-lg border border-line bg-paper px-4 py-3.5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill="currentColor" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </span>
      <div className="flex-1">
        <div className="font-display text-[15px] text-ink">{data.sourceTitle}</div>
        <div className="text-[12px] text-ink-soft">{data.sourceSub}</div>
      </div>
      <span className="text-[12px] text-ink-soft">Mon</span>
    </div>

    <div className="my-2 ml-[31px] h-4 w-px bg-line-strong" />

    <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">Becomes, by Friday</div>
    <div className="mt-3 grid grid-cols-2 gap-2.5">
      {data.outputs.map((o) => (
        <div key={o.k} className="rounded-lg border border-line bg-paper px-3.5 py-3">
          <div className="font-display text-[14px] text-brand-deep">{o.k}</div>
          <div className="text-[12px] text-ink-soft">{o.v}</div>
        </div>
      ))}
    </div>
  </div>
);

const ServiceBlock = ({
  service,
  visual,
  flip,
}: {
  service: HomeService;
  visual: React.ReactNode;
  flip: boolean;
}) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.07);

  return (
    <motion.div
      className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.div variants={fadeUp} className={flip ? 'lg:order-2' : ''}>
        <div className="flex items-center gap-3 text-[13px] text-ink-soft">
          <span className="font-display text-[15px] italic text-brand">{service.index}</span>
          <span className="font-medium uppercase tracking-[0.16em]">{service.kicker}</span>
        </div>
        <h3 className="mt-4 font-display font-normal text-[clamp(1.7rem,2.8vw,2.3rem)] leading-[1.12] tracking-[-0.01em] max-w-[22ch]">
          {service.titleLead} <em className="italic text-brand">{service.titleEm}</em>
        </h3>
        <p className="mt-5 max-w-[52ch] text-[16.5px] leading-[1.55] text-ink-soft">{service.body}</p>
        <ul className="mt-7 space-y-3.5">
          {service.points.map((p) => (
            <React.Fragment key={p}>
              <Bullet>{p}</Bullet>
            </React.Fragment>
          ))}
        </ul>
        {service.pilot && (
          <span className="mt-6 inline-block rounded-full bg-brand-tint px-[11px] py-1 text-[13px] text-brand">
            {service.pilot}
          </span>
        )}
      </motion.div>

      <motion.div variants={fadeUp} className={flip ? 'lg:order-1' : ''}>
        {visual}
      </motion.div>
    </motion.div>
  );
};

const Process = ({ steps }: { steps: HomeContent['process'] }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08);

  return (
    <motion.div
      className="grid gap-px overflow-hidden rounded-[16px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {steps.map((step) => (
        <motion.div key={step.n} variants={fadeUp} className="bg-paper p-7 lg:p-8">
          <div className="font-display text-[1.8rem] italic text-brand/30">{step.n}</div>
          <h3 className="mt-5 font-display text-[1.3rem] tracking-[-0.01em]">{step.title}</h3>
          <p className="mt-3 text-[15px] leading-[1.5] text-ink-soft">{step.body}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

const ResultsBand = ({ results }: { results: HomeContent['results'] }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.1);

  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <motion.div variants={fadeUp} className="max-w-[56ch]">
        <Eyebrow className="mb-5">{results.eyebrow}</Eyebrow>
        <p className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.2] tracking-[-0.01em]">{results.quote}</p>
        <p className="mt-4 text-[14px] text-ink-soft">{results.note}</p>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-12 lg:grid-cols-4">
        {results.metrics.map((r) => (
          <div key={r.label}>
            <div className="font-display text-[clamp(2.2rem,4vw,3rem)] leading-none tracking-[-0.01em] text-brand">
              {r.value}
            </div>
            <div className="mt-3 text-[14px] leading-snug text-ink-soft">{r.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const VISUALS: Record<HomeService['visual'], (c: HomeContent) => React.ReactNode> = {
  website: (c) => <WebsiteVisual data={c.visualData.website} />,
  seo: (c) => <SeoVisual data={c.visualData.seo} />,
  content: (c) => <ContentVisual data={c.visualData.content} />,
};

// --- Page --------------------------------------------------------------------

const HomePage = () => {
  const { audience } = useAudience();
  const c = homeContent[audience];
  const homeWork = workByAudience(audience).slice(0, 3);
  const homeWriting = writingByAudience(audience).slice(0, 3);

  return (
    <div className="bg-paper">
      <Seo
        title={c.metaTitle}
        description={c.metaDescription}
        path={audience === 'venture' ? '/' : '/portfolio'}
        image={c.ogImage}
        imageAlt={`QuantikGrowth — ${c.metaTitle}.`}
        keywords={c.keywords}
      />
      <Nav links={NAV_LINKS} ctaLabel="Start a project" ctaHref="/contact" />

      <main>
        <Hero hero={c.hero} />

        <section id="services" className="border-t border-line py-[64px] sm:py-[92px] scroll-mt-[90px]">
          <div className="max-w-[1320px] mx-auto px-8 lg:px-12">
            <SectionHead title={c.servicesHead.title} label={c.servicesHead.label} />
            <div className="space-y-[104px]">
              {c.services.map((service, i) => (
                <React.Fragment key={service.index}>
                  <ServiceBlock service={service} visual={VISUALS[service.visual](c)} flip={i % 2 === 1} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="border-t border-line py-[64px] sm:py-[92px] scroll-mt-[90px]">
          <div className="max-w-[1320px] mx-auto px-8 lg:px-12">
            <SectionHead title={c.processHead.title} label={c.processHead.label} />
            <Process steps={c.process} />
          </div>
        </section>

        <section id="work" className="border-t border-line py-[64px] sm:py-[92px] scroll-mt-[90px]">
          <div className="max-w-[1320px] mx-auto px-8 lg:px-12">
            <SectionHead title={c.workHead.title} label={c.workHead.label} />
            <WorkLedger items={homeWork} />
            <div className="mt-9">
              <Button variant="ghost" href="/work" arrow>
                See all work
              </Button>
            </div>
          </div>
        </section>

        <section id="writing" className="border-t border-line py-[64px] sm:py-[92px] scroll-mt-[90px]">
          <div className="max-w-[1320px] mx-auto px-8 lg:px-12">
            <SectionHead title={c.writingHead.title} label={c.writingHead.label} />
            <ArticleRow articles={homeWriting} />
            <div className="mt-9">
              <Button variant="ghost" href="/writing" arrow>
                Read more
              </Button>
            </div>
          </div>
        </section>

        <section className="border-t border-line py-[64px] sm:py-[92px]">
          <div className="max-w-[1320px] mx-auto px-8 lg:px-12">
            <ResultsBand results={c.results} />
          </div>
        </section>

        <section className="border-t border-line py-[64px] sm:py-[92px]">
          <div className="max-w-[1320px] mx-auto px-8 lg:px-12">
            <OfferBand headline={c.offer.headline} body={c.offer.body} ctaLabel="Start a project" ctaHref="/contact" />
          </div>
        </section>
      </main>

      <SiteFooter
        id="contact"
        className="scroll-mt-[90px]"
        tagline={c.footerTagline}
        columns={[
          {
            heading: 'Explore',
            links: [
              { label: 'Approach', href: '/approach' },
              { label: 'Work', href: '/work' },
              { label: 'Writing', href: '/writing' },
              { label: 'About', href: '/about' },
            ],
          },
          {
            heading: 'Get in touch',
            links: [
              { label: 'krish@quantikgrowth.in', href: 'mailto:krish@quantikgrowth.in' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/quantikgrowth' },
              { label: 'Start a project', href: '/contact' },
            ],
          },
        ]}
        legalLeft="© 2026 QuantikGrowth"
        legalRight="Mumbai, India"
      />

      <div className="h-[88px] lg:hidden" aria-hidden />
      <MobileCtaBar />
    </div>
  );
};

export default HomePage;
