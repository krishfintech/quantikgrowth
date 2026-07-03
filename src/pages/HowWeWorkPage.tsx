import React from 'react';
import { motion } from 'motion/react';
import {
  Button,
  Eyebrow,
  MaskReveal,
  Seo,
  SiteLayout,
  VoiceToContent,
  useFadeUpVariants,
  useStaggerVariants,
  viewportOnce,
  EASE,
} from '../components/site';
import { breadcrumbSchema, faqSchema, servicesSchemaFor } from '../data/structuredData';
import { useAudience, type Audience } from '../audience';

type StepKind = 'website' | 'seo' | 'content' | 'chatbot';
interface Step {
  n: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  kind: StepKind;
}
interface PipelineStage {
  label: string;
  what: string;
  value: string;
}
interface Copy {
  metaTitle: string;
  metaDescription: string;
  og: string;
  keywords: string;
  lead: string;
  em: string;
  intro: string;
  journey: Step[];
  engineIntro: string;
  pipeline: PipelineStage[];
  faq: { q: string; a: string }[];
}

const PIPELINE_BASE: PipelineStage[] = [
  { label: 'Voicenote', what: 'Five minutes of your raw thinking, recorded whenever it suits you.', value: 'No writing, no calendar, no meeting — just talk.' },
  { label: 'Article', what: 'A polished, publish-ready article on your own site.', value: 'Authority you own, on a page built to rank.' },
  { label: 'Newsletter', what: 'The same idea, shaped for your subscriber list.', value: 'Direct reach to people who already chose to hear from you.' },
  { label: 'LinkedIn & X', what: 'Repurposed into posts and a thread, written for each platform.', value: 'Reach where your audience already scrolls.' },
  { label: 'Everywhere your investors are', what: 'Repurposed for each remaining platform, sized and written to fit — never copy-pasted.', value: 'A consistent presence wherever attention already is.' },
];

const COPY: Record<Audience, Copy> = {
  venture: {
    metaTitle: 'How we work — website, SEO & content engine',
    metaDescription:
      'What working with us looks like: we build the website first, make it findable with on-page SEO, then run a content engine that turns one voicenote into content everywhere.',
    og: '/og/how-we-work.png',
    keywords: 'how quantikgrowth works, venture firm website process, content engine for VC, voicenote to article',
    lead: 'What working with us',
    em: 'actually looks like.',
    intro:
      "We're a young studio, so we'll be straight with you: we don't have client case studies to parade yet. What we do have is a method — built website-first, ranked with on-page SEO, and run by a content engine. Here is exactly how it works, and the transformation it delivers.",
    journey: [
      {
        n: '01',
        kicker: 'Website first',
        kind: 'website',
        title: 'We design and build the site.',
        body: 'Everything points back to a fast, editorial site built around your portfolio and your thesis. You see a real first design before you pay a rupee — love it and we continue with three revisions, or you owe nothing.',
        points: ['Portfolio as stories, not a logo wall', 'Investment case studies that show judgment', 'Sub-second loads, mobile-first'],
      },
      {
        n: '02',
        kicker: 'SEO · AEO · GEO',
        kind: 'seo',
        title: 'Then we make it findable — by people and AI.',
        body: 'A beautiful site nobody finds is a brochure. Your investors increasingly ask an AI before they ask around, so we structure every page to be ranked in search and cited by answer engines like ChatGPT, Perplexity, and Google’s AI Overviews — so you are the firm that comes up, reading as the authority.',
        points: ['Pages mapped to what founders and LPs actually search', 'AEO/GEO so AI answers cite you, not a directory', 'Clean semantics, fast loads, and structured data models can parse'],
      },
      {
        n: '03',
        kicker: 'Content engine',
        kind: 'content',
        title: 'Then the content engine runs, every week.',
        body: 'A partner sends a five-minute voicenote. We turn it into an article, a newsletter, and posts across every platform. Minutes of your time become a week of authority — compounding into search traffic and inbound.',
        points: ['One voicenote → article + a week of social', 'Published in your firm’s voice', 'A cadence that compounds month after month'],
      },
    ],
    engineIntro:
      'The content engine is the part most firms never get to, because writing is the bottleneck. We remove it. One voicenote becomes content everywhere — watch the transformation, stage by stage.',
    pipeline: PIPELINE_BASE,
    faq: [
      { q: 'Do you have case studies?', a: 'Not yet — we are a new studio and we would rather be honest than borrow someone else’s logos. What we show is the method and the transformation it is built to deliver, end to end.' },
      { q: 'How much work is the content engine for us?', a: 'About five minutes a week. A partner records a five-minute voicenote; we do the writing, formatting, SEO and repurposing. You approve a draft. That is the whole ask.' },
      { q: 'What do I get before I commit?', a: 'A real first design of your new site — a working page, not a moodboard. If you love it, we continue with three revisions included. If you don’t, you owe nothing.' },
    ],
  },
  portfolio: {
    metaTitle: 'How we work — website, SEO, content & AI concierge',
    metaDescription:
      'What working with us looks like for a PMS firm: a credibility-first website, on-page SEO, a content engine from fund-manager voicenotes, and an AI investor concierge.',
    og: '/og/portfolio-how-we-work.png',
    keywords: 'how quantikgrowth works, PMS website process, content engine for fund managers, AI investor relations concierge',
    lead: 'What working with us',
    em: 'actually looks like.',
    intro:
      "We're a young studio, so we'll be straight with you: we don't have client case studies to parade yet. What we do have is a method — built website-first, ranked with on-page SEO, run by a content engine, and backed by an AI investor concierge. Here is exactly how it works.",
    journey: [
      {
        n: '01',
        kicker: 'Website first',
        kind: 'website',
        title: 'We design and build the site.',
        body: 'Everything points back to a fast, credible site built around your strategy and discipline. You see a real first design before you pay — love it and we continue with three revisions, or you owe nothing.',
        points: ['Strategy and track record, with institutional clarity', 'Compliance-aware copy within SEBI guardrails', 'Sub-second loads, mobile-first'],
      },
      {
        n: '02',
        kicker: 'SEO · AEO · GEO',
        kind: 'seo',
        title: 'Then we make it findable — by people and AI.',
        body: 'When an HNI or advisor looks for a way to grow long-term wealth, a directory ranks for your category — not you. And increasingly they ask an AI first. We structure every page to be ranked in search and cited by answer engines like ChatGPT, Perplexity, and Google’s AI Overviews — so you are the firm that comes up, reading as the authority.',
        points: ['Pages mapped to what HNIs and advisors actually search', 'AEO/GEO so AI answers cite you, not a directory', 'Clean semantics, fast loads, and structured data models can parse'],
      },
      {
        n: '03',
        kicker: 'Content engine',
        kind: 'content',
        title: 'Then the content engine runs, every week.',
        body: 'A fund manager sends a five-minute voicenote. We turn it into a compliance-aware article, a newsletter, and posts across every platform. Minutes of their time become a week of trust — compounding into search traffic and qualified enquiry.',
        points: ['One voicenote → article + a week of social', 'Compliance-aware, in your firm’s voice', 'A cadence that compounds month after month'],
      },
      {
        n: '04',
        kicker: 'AI investor concierge',
        kind: 'chatbot',
        title: 'And an AI answers prospective investors, in your voice.',
        body: 'A prospective investor on your site at 11pm has questions. The AI Investor Relations Concierge answers them from your own approved material, qualifies the serious ones, and routes them to your team. Information and analysis — never advice.',
        points: ['Trained only on your approved material', 'No buy/sell/hold, no return promises — compliance-safe', 'Qualifies and routes serious enquiries to your team'],
      },
    ],
    engineIntro:
      'The content engine is the part most firms never get to, because writing is the bottleneck. We remove it. One voicenote becomes content everywhere — watch the transformation, stage by stage.',
    pipeline: PIPELINE_BASE,
    faq: [
      { q: 'Do you have case studies?', a: 'Not yet — we are a new studio and we would rather be honest than borrow someone else’s logos. What we show is the method and the transformation it is built to deliver, end to end.' },
      { q: 'Is the AI concierge compliant?', a: 'It is built to be. It is trained only on your approved material, gives information and analysis rather than advice, and never makes buy/sell/hold calls or return promises. You sign off on what it can say.' },
      { q: 'How much work is the content engine for us?', a: 'About five minutes a week. A fund manager records a five-minute voicenote; we do the writing, compliance-aware shaping, SEO and repurposing. You approve a draft. That is the whole ask.' },
    ],
  },
};

/* --- Animated visuals, one per journey step --------------------------------- */

const VP = { once: true, margin: '-15% 0px' } as const;

const WebsiteBuild = () => {
  const bar = (i: number) => ({
    initial: { scaleX: 0 },
    whileInView: { scaleX: 1 },
    viewport: VP,
    transition: { duration: 0.5, delay: 0.15 + i * 0.12, ease: EASE },
  });
  const card = (i: number) => ({
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VP,
    transition: { duration: 0.45, delay: 0.5 + i * 0.1, ease: EASE },
  });
  return (
    <div className="overflow-hidden rounded-[12px] border border-line bg-paper">
      <div className="flex items-center gap-1.5 border-b border-line px-3.5 py-2.5">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="ml-2 flex-1 rounded bg-line/60 px-2.5 py-1 text-[9px] text-ink-soft/60">your-firm.com</span>
      </div>
      <div className="p-5">
        <motion.div className="h-3.5 w-2/3 origin-left rounded bg-ink/70 will-change-transform" {...bar(0)} />
        <div className="mt-3 space-y-2">
          <motion.div className="h-2 w-full origin-left rounded bg-line-strong will-change-transform" {...bar(1)} />
          <motion.div className="h-2 w-5/6 origin-left rounded bg-line-strong will-change-transform" {...bar(2)} />
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <motion.div key={i} className="h-14 rounded-md border border-line bg-paper-soft" {...card(i)} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SeoClimb = () => {
  const rows = [
    { name: 'Your firm', ours: true },
    { name: 'A directory listing', ours: false },
    { name: 'A competing fund', ours: false },
    { name: 'An aggregator page', ours: false },
  ];
  return (
    <div className="rounded-[12px] border border-line bg-paper p-5">
      <div className="mb-4 flex items-center gap-2 rounded-full border border-line-strong bg-paper-soft px-3.5 py-2 text-[11px] text-ink-soft">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
          <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        found when the right person searches
      </div>
      {rows.map((r, i) => (
        <motion.div
          key={r.name}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: r.ours ? [34, 34, 0] : 0 }}
          viewport={VP}
          transition={{ opacity: { duration: 0.4, delay: i * 0.08 }, y: { duration: 0.9, delay: 0.8, ease: EASE } }}
          className={`mb-2 flex items-center gap-3 rounded-md border px-3 py-2.5 will-change-transform ${
            r.ours ? 'border-brand/30 bg-brand-tint' : 'border-line bg-paper-soft'
          }`}
        >
          <span className={`font-display text-[13px] ${r.ours ? 'text-brand' : 'text-ink-soft/60'}`}>
            {r.ours ? '01' : String(i + 2).padStart(2, '0')}
          </span>
          <div className="flex-1">
            <div className={`h-2 rounded-full ${r.ours ? 'bg-brand/70' : 'bg-line-strong'}`} style={{ width: r.ours ? '72%' : `${54 - i * 7}%` }} />
            <div className={`mt-1.5 text-[10px] ${r.ours ? 'font-medium text-brand-deep' : 'text-ink-soft/55'}`}>{r.name}</div>
          </div>
          {r.ours && <span className="rounded-full bg-brand px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider text-white">You</span>}
        </motion.div>
      ))}
    </div>
  );
};

const ContentFlow = () => {
  const node = (i: number) => ({
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VP,
    transition: { duration: 0.45, delay: 0.15 + i * 0.22, ease: EASE },
  });
  return (
    <div className="rounded-[12px] border border-line bg-paper p-5">
      <motion.div className="flex items-center gap-3 rounded-lg border border-line bg-paper-soft px-3.5 py-3" {...node(0)}>
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-tint text-brand">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill="currentColor" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
        </span>
        <span className="flex flex-1 items-center gap-[3px]">
          {[10, 18, 8, 22, 14, 24, 12, 18, 9].map((h, i) => (
            <span key={i} className="w-[3px] rounded-full bg-brand/35" style={{ height: h }} />
          ))}
        </span>
        <span className="text-[10px] text-ink-soft">5:00</span>
      </motion.div>
      <div className="my-1.5 ml-[26px] h-3 w-px bg-line-strong" />
      <motion.div className="rounded-lg border border-brand/25 bg-brand-tint px-3.5 py-3" {...node(1)}>
        <div className="text-[9px] font-medium uppercase tracking-[0.18em] text-brand">Article · your site</div>
        <div className="mt-1.5 h-2 w-3/4 rounded-full bg-brand/20" />
      </motion.div>
      <div className="my-1.5 ml-[26px] h-3 w-px bg-line-strong" />
      <motion.div className="flex gap-2" {...node(2)}>
        {['Newsletter', 'LinkedIn', 'X', 'Clips'].map((k) => (
          <span key={k} className="flex-1 rounded-md border border-line bg-paper-soft px-2 py-1.5 text-center text-[9px] text-ink-soft">{k}</span>
        ))}
      </motion.div>
    </div>
  );
};

const ChatbotChat = () => {
  const bubble = (i: number) => ({
    initial: { opacity: 0, y: 8 },
    whileInView: { opacity: 1, y: 0 },
    viewport: VP,
    transition: { duration: 0.4, delay: 0.2 + i * 0.4, ease: EASE },
  });
  return (
    <div className="rounded-[12px] border border-line bg-paper p-5">
      <div className="mb-4 flex items-center gap-2.5 border-b border-line pb-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-white">AI</span>
        <span className="font-display text-[14px] text-ink">Investor concierge</span>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] text-ink-soft"><span className="h-1.5 w-1.5 rounded-full bg-brand" /> live</span>
      </div>
      <motion.div className="mb-3 flex justify-end" {...bubble(0)}>
        <span className="max-w-[80%] rounded-2xl rounded-tr-sm border border-line bg-paper-soft px-3 py-2 text-[12px] text-ink">What’s your strategy and the minimum?</span>
      </motion.div>
      <motion.div className="flex gap-2" {...bubble(1)}>
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-tint text-[9px] font-semibold text-brand">AI</span>
        <span className="max-w-[85%] rounded-2xl rounded-tl-sm border border-brand/20 bg-brand-tint px-3 py-2 text-[12px] leading-relaxed text-brand-deep">
          A concentrated, fundamentals-first strategy; the minimum is set by SEBI. I can shortlist you for a call.
        </span>
      </motion.div>
      <motion.div className="mt-3 inline-flex rounded-full border border-line bg-paper-soft px-2.5 py-1 text-[10px] text-ink-soft" {...bubble(2)}>
        Information, not advice
      </motion.div>
    </div>
  );
};

const JourneyVisual = ({ kind }: { kind: StepKind }) => (
  <div className="rounded-[18px] border border-line bg-paper-soft p-5 shadow-card sm:p-7">
    {kind === 'website' && <WebsiteBuild />}
    {kind === 'seo' && <SeoClimb />}
    {kind === 'content' && <ContentFlow />}
    {kind === 'chatbot' && <ChatbotChat />}
  </div>
);

const JourneyStep = ({ step, flip }: { step: Step; flip: boolean }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.07);

  return (
    <motion.div
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <motion.div variants={fadeUp} className={flip ? 'lg:order-2' : ''}>
        <div className="flex items-center gap-3 text-[13px] text-ink-soft">
          <span className="font-display text-[15px] italic text-brand">{step.n}</span>
          <span className="font-medium uppercase tracking-[0.16em]">{step.kicker}</span>
        </div>
        <h3 className="mt-4 font-display font-normal text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.12] tracking-[-0.01em] max-w-[18ch]">
          {step.title}
        </h3>
        <p className="mt-5 max-w-[50ch] text-[16.5px] leading-[1.55] text-ink-soft">{step.body}</p>
        <ul className="mt-6 space-y-3">
          {step.points.map((p) => (
            <li key={p} className="flex gap-3.5 text-[15.5px] leading-[1.5] text-ink-soft">
              <span className="mt-[11px] h-px w-4 shrink-0 bg-brand" />
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div variants={fadeUp} className={flip ? 'lg:order-1' : ''}>
        <JourneyVisual kind={step.kind} />
      </motion.div>
    </motion.div>
  );
};

const HowWeWorkPage = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.05);
  const pipelineStagger = useStaggerVariants(0.08);
  const { audience, link } = useAudience();
  const c = COPY[audience];

  return (
    <SiteLayout>
      <Seo
        title={c.metaTitle}
        description={c.metaDescription}
        path={link('/work')}
        image={c.og}
        imageAlt={`QuantikGrowth — ${c.metaTitle}.`}
        keywords={c.keywords}
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: link('/') },
            { name: 'How we work', path: link('/work') },
          ]),
          ...servicesSchemaFor(audience),
          faqSchema(c.faq),
        ]}
      />

      {/* Hero */}
      <section className="pt-hero-t pb-hero-b">
        <motion.div className="max-w-[1360px] mx-auto px-8 lg:px-12" variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-[22px]">How we work</Eyebrow>
          </motion.div>
          <h1 className="font-display font-normal text-[clamp(2.4rem,5.4vw,4.2rem)] leading-[1.05] tracking-[-0.018em] max-w-[16ch]">
            <MaskReveal delay={0.1}>
              {c.lead} <em className="italic text-brand">{c.em}</em>
            </MaskReveal>
          </h1>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.05rem,1.6vw,1.28rem)] text-ink-soft max-w-[60ch] mt-[26px] leading-[1.6]"
          >
            {c.intro}
          </motion.p>
        </motion.div>
      </section>

      {/* The journey */}
      <section className="border-t border-line py-section">
        <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
          <div className="space-y-section">
            {c.journey.map((step, i) => (
              <React.Fragment key={step.n}>
                <JourneyStep step={step} flip={i % 2 === 1} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* The signature animation */}
      <section id="engine" className="border-t border-line py-section scroll-mt-[90px]">
        <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
          <Eyebrow className="mb-[22px]">The content engine</Eyebrow>
          <h2 className="font-display font-normal text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.12] tracking-[-0.015em] max-w-[20ch]">
            One voicenote becomes content <em className="italic text-brand">everywhere.</em>
          </h2>
          <p className="mt-5 max-w-[60ch] text-[1.05rem] leading-[1.6] text-ink-soft">{c.engineIntro}</p>
        </div>
        <VoiceToContent className="max-w-[1360px] mx-auto px-8 lg:px-12 mt-10" />
      </section>

      {/* Pipeline deep-dive */}
      <section className="border-t border-line py-section">
        <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
          <Eyebrow className="mb-[22px]">The journey, step by step</Eyebrow>
          <h2 className="font-display font-normal text-[clamp(1.9rem,3.2vw,2.6rem)] leading-[1.12] tracking-[-0.015em] max-w-[22ch]">
            What each stage does for you.
          </h2>

          <motion.ol
            className="mt-12"
            variants={pipelineStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {c.pipeline.map((s, i) => (
              <motion.li
                key={s.label}
                variants={fadeUp}
                className="relative grid grid-cols-[44px_1fr] gap-x-5 pb-9 last:pb-0 sm:grid-cols-[64px_1fr_1fr] sm:gap-x-8"
              >
                {i < c.pipeline.length - 1 && (
                  <span className="absolute left-[21px] top-[44px] bottom-1 w-px bg-line-strong sm:left-[31px]" aria-hidden />
                )}
                <span className="z-10 flex h-[44px] w-[44px] items-center justify-center rounded-full border border-brand/30 bg-brand-tint font-display text-[1rem] text-brand sm:h-[64px] sm:w-[64px] sm:text-[1.4rem]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pt-1.5 sm:pt-3">
                  <h3 className="font-display text-[1.4rem] tracking-[-0.01em]">{s.label}</h3>
                  <p className="mt-2 text-[15.5px] leading-[1.5] text-ink-soft">{s.what}</p>
                </div>
                <div className="col-start-2 mt-2 sm:col-start-3 sm:mt-3 sm:pl-8 sm:border-l sm:border-line">
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-brand">What it does</span>
                  <p className="mt-1.5 text-[15px] leading-[1.5] text-ink">{s.value}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Founding clients — no named clients yet, so we invite the first documented ones */}
      <section className="border-t border-line py-section">
        <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-[18px] border border-brand/40 bg-brand p-8 text-white sm:p-11"
          >
            <div className="text-[13px] font-medium uppercase tracking-[0.16em] text-brand-muted">Founding clients</div>
            <h2 className="mt-4 font-display font-normal text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.15] tracking-[-0.01em] max-w-[24ch]">
              The first firms we work with become our first published case studies.
            </h2>
            <p className="mt-4 max-w-[64ch] text-[1.05rem] leading-[1.6] text-brand-muted">
              We are selecting a small number of founding clients, invited at half the build investment in
              exchange for allowing us to document the work. It is offered once, at this level, and only a few
              places remain.
            </p>
            <div className="mt-8">
              <Button variant="primary" href="/contact" arrow className="bg-white! text-brand-deep! hover:bg-brand-tint!">
                Become a founding client
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-section">
        <div className="max-w-[1360px] mx-auto px-8 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <h2 className="font-display font-normal text-[clamp(1.9rem,3.2vw,2.6rem)] tracking-[-0.015em] max-w-[20ch]">
              Start with a design you can see.
            </h2>
            <p className="mt-5 max-w-[50ch] text-[1.1rem] leading-[1.6] text-ink-soft">
              We build a real first design of your new site before you commit. If you love it, we continue —
              three revisions included. If you don't, you owe nothing.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button variant="primary" href="/contact" arrow>
                Start a project
              </Button>
              <Button variant="ghost" href="/approach">
                See the approach
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default HowWeWorkPage;
