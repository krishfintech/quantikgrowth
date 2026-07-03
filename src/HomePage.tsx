import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import {
  ArticleRow,
  Button,
  Eyebrow,
  HeroVenture,
  HeroPortfolio,
  MaskReveal,
  MobileCtaBar,
  Nav,
  Offer,
  Seo,
  SiteFooter,
  VoiceToContent,
  useFadeUpVariants,
  useStaggerVariants,
  viewportOnce,
  EASE,
  type NavLink,
} from './components/site';
import { writingByAudience } from './data/writing';
import { useAudience } from './audience';
import { homeContent } from './content/home';
import type {
  HomeContent,
  HomeService,
  WebsiteVisualData,
  SeoVisualData,
  ContentVisualData,
  ChatbotVisualData,
} from './content/home';

const NAV_LINKS: NavLink[] = [
  { label: 'Approach', href: '/approach' },
  { label: 'How we work', href: '/work' },
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
      <h2 className="font-display font-normal text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.12] tracking-[-0.015em]">{title}</h2>
      <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-ink-soft">{label}</span>
    </motion.div>
  );
};

// --- Hero --------------------------------------------------------------------

const Hero = ({ hero }: { hero: HomeContent['hero'] }) => {
  const fadeUp = useFadeUpVariants();
  // Choreography: eyebrow settles first, the headline rises behind its mask,
  // then the supporting copy and actions follow as one breath.
  const stagger = useStaggerVariants(0.1, 0.55);
  const reduceMotion = useReducedMotion();
  const { audience } = useAudience();

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const artifactY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -48]);

  return (
    <section ref={sectionRef} className="pt-hero-t pb-hero-b">
      <div className="max-w-[1360px] mx-auto px-8 lg:px-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-x-20 gap-y-14 items-center">
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <Eyebrow className="mb-[26px]">{hero.eyebrow}</Eyebrow>
          </motion.div>

          <h1 className="font-display font-normal text-[clamp(2.7rem,5.4vw,4.4rem)] leading-[1.05] tracking-[-0.018em] max-w-[20ch]">
            <MaskReveal delay={0.15}>
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
                See how we work
              </Button>
              <Button variant="ghost" href="/contact">
                Book an intro call
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          style={{ y: artifactY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
        >
          {audience === 'portfolio' ? <HeroPortfolio /> : <HeroVenture />}
        </motion.div>
      </div>
    </section>
  );
};

// --- Service visuals ---------------------------------------------------------

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3.5">
    <span className="mt-[10px] h-px w-4 shrink-0 bg-brand" />
    <span className="text-[15.5px] leading-[1.5] text-ink-soft">{children}</span>
  </li>
);

const WebsiteVisual = ({ data }: { data: WebsiteVisualData }) => (
  <div className="rounded-[16px] border border-line bg-paper-soft p-6 shadow-card">
    <div className="mb-4 flex items-center justify-between">
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">{data.label}</span>
      <span className="font-display text-[13px] italic text-ink-soft">{data.count}</span>
    </div>
    {data.rows.map((c, i) => (
      <div key={c.name} className={`flex items-baseline gap-4 py-4 ${i > 0 ? 'border-t border-line' : ''}`}>
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
  <div className="rounded-[16px] border border-line bg-paper-soft p-6 shadow-card">
    <div className="mb-5 flex items-end justify-between">
      <div>
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">Organic search</div>
        <div className="mt-1 font-display text-[1.9rem] leading-none tracking-[-0.01em] text-brand">{data.headline}</div>
        <div className="mt-1 text-[12px] text-ink-soft">{data.sub}</div>
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
          transition={{ duration: 1.4, ease: EASE }}
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
  <div className="rounded-[16px] border border-line bg-paper-soft p-6 shadow-card">
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

const ChatbotVisual = ({ data }: { data: ChatbotVisualData }) => (
  <div className="rounded-[16px] border border-line bg-paper-soft p-6 shadow-card">
    <div className="mb-4 flex items-center gap-2.5 border-b border-line pb-4">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-[11px] font-semibold text-white">AI</span>
      <div className="font-display text-[15px] text-ink">{data.title}</div>
      <span className="ml-auto flex items-center gap-1.5 text-[11px] text-ink-soft">
        <span className="h-1.5 w-1.5 rounded-full bg-brand" /> live
      </span>
    </div>
    <div className="space-y-3">
      <div className="flex justify-end">
        <p className="max-w-[80%] rounded-2xl rounded-tr-sm bg-paper border border-line px-3.5 py-2.5 text-[13px] text-ink">
          {data.question}
        </p>
      </div>
      <div className="flex gap-2.5">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-tint text-[10px] font-semibold text-brand">AI</span>
        <p className="max-w-[85%] rounded-2xl rounded-tl-sm bg-brand-tint border border-brand/20 px-3.5 py-2.5 text-[13px] leading-relaxed text-brand-deep">
          {data.answer}
        </p>
      </div>
    </div>
    <div className="mt-4 inline-flex rounded-full bg-paper border border-line px-3 py-1 text-[11px] text-ink-soft">
      {data.disclaimer}
    </div>
  </div>
);

const renderVisual = (service: HomeService, c: HomeContent): React.ReactNode => {
  switch (service.visual) {
    case 'website':
      return <WebsiteVisual data={c.visualData.website} />;
    case 'seo':
      return <SeoVisual data={c.visualData.seo} />;
    case 'content':
      return <ContentVisual data={c.visualData.content} />;
    case 'chatbot':
      return c.visualData.chatbot ? <ChatbotVisual data={c.visualData.chatbot} /> : null;
    default:
      return null;
  }
};

const ServiceBlock = ({ service, visual, flip }: { service: HomeService; visual: React.ReactNode; flip: boolean }) => {
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
        <div className="flex flex-wrap items-center gap-3 text-[13px] text-ink-soft">
          <span className="font-display text-[15px] italic text-brand">{service.index}</span>
          <span className="font-medium uppercase tracking-[0.16em]">{service.kicker}</span>
          {service.badge && (
            <span className="rounded-full bg-brand px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-white">
              {service.badge}
            </span>
          )}
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

// Repurposing flow: what you already have → the engine → working everywhere.
// The only place existing video / in-office capture is surfaced.
const RepurposeFlow = () => {
  const reduceMotion = useReducedMotion();
  const sources = ['Talks & panels', 'Webinars', 'Existing video', 'A 5-min voicenote', 'An in-office shoot'];
  const outputs = ['Articles', 'A newsletter', 'LinkedIn', 'X', 'Everywhere else'];
  const item = (i: number, from: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, x: from },
          whileInView: { opacity: 1, x: 0 },
          viewport: viewportOnce,
          transition: { duration: 0.6, delay: 0.08 + i * 0.07, ease: EASE },
        };

  return (
    <div className="rounded-[18px] border border-line bg-paper-soft p-6 shadow-float sm:p-8">
      <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
        <div className="space-y-2.5">
          <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">What you already have</div>
          {sources.map((s, i) => (
            <motion.div key={s} {...item(i, -16)} className="rounded-lg border border-line bg-paper px-3.5 py-2.5 text-[13.5px] text-ink">
              {s}
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3 lg:flex-col lg:gap-2">
          <span className="text-brand lg:rotate-0" aria-hidden>→</span>
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-center text-[10px] font-semibold uppercase leading-tight tracking-wide text-white">
            The<br />engine
          </div>
          <span className="text-brand" aria-hidden>→</span>
        </div>

        <div className="space-y-2.5">
          <div className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-brand">Working everywhere</div>
          {outputs.map((o, i) => (
            <motion.div key={o} {...item(i, 16)} className="rounded-lg border border-brand/25 bg-brand-tint px-3.5 py-2.5 text-[13.5px] text-brand-deep">
              {o}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Process = ({ process }: { process: HomeContent['process'] }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08);

  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <motion.p variants={fadeUp} className="-mt-6 mb-12 max-w-[62ch] text-[1.15rem] leading-[1.6] text-ink-soft">
        {process.intro}
      </motion.p>

      <motion.div variants={fadeUp}>
        <RepurposeFlow />
      </motion.div>

      <div className="mt-12 grid gap-px overflow-hidden rounded-[16px] border border-line bg-line sm:grid-cols-3">
        {process.cards.map((step) => (
          <motion.div key={step.n} variants={fadeUp} className="bg-paper p-7 lg:p-8">
            <div className="font-display text-[1.8rem] italic text-brand/30">{step.n}</div>
            <h3 className="mt-5 font-display text-[1.3rem] leading-[1.18] tracking-[-0.01em]">{step.title}</h3>
            <p className="mt-3 text-[15px] leading-[1.5] text-ink-soft">{step.body}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const MethodBand = ({ method }: { method: HomeContent['method'] }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.1);

  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <motion.div variants={fadeUp} className="max-w-[56ch]">
        <Eyebrow className="mb-5">{method.eyebrow}</Eyebrow>
        <p className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.25] tracking-[-0.01em]">{method.quote}</p>
        <p className="mt-4 text-[14px] text-ink-soft">{method.note}</p>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-12 lg:grid-cols-4">
        {method.items.map((r) => (
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

// --- Page --------------------------------------------------------------------

const HomePage = () => {
  const { audience } = useAudience();
  const c = homeContent[audience];
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

        <section id="services" className="border-t border-line py-section scroll-mt-[90px]">
          <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
            <SectionHead title={c.servicesHead.title} label={c.servicesHead.label} />
            <div className="space-y-section">
              {c.services.map((service, i) => (
                <React.Fragment key={service.index}>
                  <ServiceBlock service={service} visual={renderVisual(service, c)} flip={i % 2 === 1} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* The signature content-engine animation */}
        <section id="engine" className="border-t border-line py-section scroll-mt-[90px]">
          <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
            <SectionHead title={c.engineHead.title} label={c.engineHead.label} />
            <p className="-mt-6 mb-12 max-w-[60ch] text-[1.05rem] leading-[1.6] text-ink-soft">{c.engineIntro}</p>
          </div>
          <VoiceToContent className="max-w-[1360px] mx-auto px-8 lg:px-12" />
          <div className="max-w-[1360px] mx-auto px-8 lg:px-12 mt-12">
            <Button variant="ghost" href="/work" arrow>
              See the full pipeline
            </Button>
          </div>
        </section>

        <section id="process" className="border-t border-line py-section scroll-mt-[90px]">
          <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
            <SectionHead title={c.processHead.title} label={c.processHead.label} />
            <Process process={c.process} />
          </div>
        </section>

        <section id="writing" className="border-t border-line py-section scroll-mt-[90px]">
          <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
            <SectionHead title={c.writingHead.title} label={c.writingHead.label} />
            <ArticleRow articles={homeWriting} />
            <div className="mt-9">
              <Button variant="ghost" href="/writing" arrow>
                Read more
              </Button>
            </div>
          </div>
        </section>

        <section className="border-t border-line py-section">
          <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
            <MethodBand method={c.method} />
          </div>
        </section>

        <section id="offer" className="border-t border-line py-section scroll-mt-[90px]">
          <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
            <Offer />
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
              { label: 'How we work', href: '/work' },
              { label: 'Writing', href: '/writing' },
              { label: 'About', href: '/about' },
            ],
          },
          {
            heading: 'Get in touch',
            links: [
              { label: 'krishnaidu@quantikgrowth.in', href: 'mailto:krishnaidu@quantikgrowth.in' },
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
