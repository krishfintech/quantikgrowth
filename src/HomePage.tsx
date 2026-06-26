import React from 'react';
import { motion } from 'motion/react';
import {
  ArticleRow,
  Button,
  Eyebrow,
  HeroArtifact,
  Nav,
  OfferBand,
  SiteFooter,
  WorkLedger,
  useFadeUpVariants,
  useStaggerVariants,
  viewportOnce,
  type NavLink,
} from './components/site';
import { work } from './data/work';
import { writing } from './data/writing';

const NAV_LINKS: NavLink[] = [
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

const Hero = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.1);

  return (
    <section className="pt-[72px] pb-[88px] sm:pt-[92px]">
      <div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-x-16 gap-y-14 items-center">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-[26px]">Digital infrastructure for venture & PE firms</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2.7rem,5.4vw,4.4rem)] leading-[1.05] tracking-[-0.018em] max-w-[15ch]"
          >
            A venture firm, presented <em className="italic text-brand">as well as it invests.</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.05rem,1.5vw,1.24rem)] text-ink-soft max-w-[50ch] mt-[28px] leading-[1.55]"
          >
            We do three things for VC and PE firms: design a clean, fast website around your portfolio,
            make it findable with on-page SEO, and run a content engine that turns your partners'
            voicenotes into articles and social — everywhere.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 sm:gap-6 mt-[40px]">
            <Button variant="primary" href="/work" arrow>
              See the work
            </Button>
            <Button variant="ghost" href="/contact">
              Book an intro call
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-[44px] flex flex-wrap gap-x-7 gap-y-2 text-[13.5px] text-ink-soft"
          >
            {['Website design', 'On-page SEO', 'Content engine'].map((item, i) => (
              <span key={item} className="flex items-center gap-2.5">
                <span className="h-1 w-1 rounded-full bg-brand" />
                {item}
                {i < 2 && <span className="ml-5 hidden text-line-strong sm:inline">/</span>}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroArtifact />
        </motion.div>
      </div>
    </section>
  );
};

// --- Service deep-dive -------------------------------------------------------

interface DeepService {
  index: string;
  kicker: string;
  title: React.ReactNode;
  body: string;
  points: string[];
  pilot?: string;
  visual: React.ReactNode;
}

const Bullet = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3.5">
    <span className="mt-[10px] h-px w-4 shrink-0 bg-brand" />
    <span className="text-[15.5px] leading-[1.5] text-ink-soft">{children}</span>
  </li>
);

// Visual 1 — portfolio as stories
const WebsiteVisual = () => (
  <div className="rounded-[16px] border border-line bg-paper-soft p-6 shadow-[0_24px_60px_-34px_rgba(19,36,28,0.3)]">
    <div className="mb-4 flex items-center justify-between">
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">Portfolio</span>
      <span className="font-display text-[13px] italic text-ink-soft">12 companies</span>
    </div>
    {[
      { name: 'Voltreon', thesis: 'Grid-scale storage for a renewable baseload.', tag: 'Led · Series A' },
      { name: 'Cropline', thesis: 'Yield data that underwrites the next harvest.', tag: 'Seed' },
      { name: 'Hearth', thesis: 'Heat pumps financed like a utility, not a purchase.', tag: 'Led · Seed' },
    ].map((c, i) => (
      <div
        key={c.name}
        className={`group flex items-baseline gap-4 py-4 ${i > 0 ? 'border-t border-line' : ''}`}
      >
        <span className="font-display text-[1.3rem] tracking-[-0.01em] text-ink">{c.name}</span>
        <span className="flex-1 text-[13.5px] leading-snug text-ink-soft">{c.thesis}</span>
        <span className="hidden shrink-0 text-[11px] text-brand sm:block">{c.tag}</span>
      </div>
    ))}
    <div className="mt-2 flex items-center gap-2 border-t border-line pt-4 text-[13px] text-brand">
      Read the thesis <span aria-hidden>→</span>
    </div>
  </div>
);

// Visual 2 — discoverability / SEO
const SeoVisual = () => (
  <div className="rounded-[16px] border border-line bg-paper-soft p-6 shadow-[0_24px_60px_-34px_rgba(19,36,28,0.3)]">
    <div className="mb-5 flex items-end justify-between">
      <div>
        <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-soft">Organic search</div>
        <div className="mt-1 font-display text-[2rem] leading-none tracking-[-0.01em] text-brand">3.1×</div>
        <div className="mt-1 text-[12px] text-ink-soft">visits, six months in</div>
      </div>
      {/* rising sparkline */}
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
    <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">Ranks page one for</div>
    <div className="mt-3 flex flex-wrap gap-2">
      {['climate seed investors', 'who funds heat pumps', 'energy transition VC', 'best deep-tech funds'].map((q) => (
        <span key={q} className="rounded-full border border-brand/25 bg-brand-tint px-3 py-1.5 text-[12px] text-brand-deep">
          {q}
        </span>
      ))}
    </div>
  </div>
);

// Visual 3 — content engine cadence
const ContentVisual = () => (
  <div className="rounded-[16px] border border-line bg-paper-soft p-6 shadow-[0_24px_60px_-34px_rgba(19,36,28,0.3)]">
    <div className="flex items-center gap-3 rounded-lg border border-line bg-paper px-4 py-3.5">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" fill="currentColor" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
      </span>
      <div className="flex-1">
        <div className="font-display text-[15px] text-ink">One voicenote from a partner</div>
        <div className="text-[12px] text-ink-soft">2 min, recorded between meetings</div>
      </div>
      <span className="text-[12px] text-ink-soft">Mon</span>
    </div>

    <div className="my-2 ml-[31px] h-4 w-px bg-line-strong" />

    <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-soft">Becomes, by Friday</div>
    <div className="mt-3 grid grid-cols-2 gap-2.5">
      {[
        { k: 'Article', v: 'On your site' },
        { k: 'LinkedIn', v: '2 posts' },
        { k: 'X', v: '1 thread' },
        { k: 'Clip', v: '1 short video' },
      ].map((o) => (
        <div key={o.k} className="rounded-lg border border-line bg-paper px-3.5 py-3">
          <div className="font-display text-[14px] text-brand-deep">{o.k}</div>
          <div className="text-[12px] text-ink-soft">{o.v}</div>
        </div>
      ))}
    </div>
  </div>
);

const SERVICES: DeepService[] = [
  {
    index: '01',
    kicker: 'Website design',
    title: (
      <>
        A site built around the companies <em className="italic text-brand">you've backed</em>
      </>
    ),
    body: "Most venture sites read like a directory — a logo wall, a team page, a contact form. We rebuild yours around the work, so a founder or LP understands your taste and your thesis in the first ten seconds.",
    points: [
      'Portfolio companies told as short stories, not a grid of logos',
      'Investment case studies that show judgment, not just a cheque',
      'Sub-second loads, built to be read on a phone between meetings',
      'Thesis and partner pages that actually say something',
    ],
    visual: <WebsiteVisual />,
  },
  {
    index: '02',
    kicker: 'On-page SEO',
    title: (
      <>
        So the right people find you — and you <em className="italic text-brand">read as the authority</em>
      </>
    ),
    body: "When a founder looks for an investor in their space, or an LP checks you out before a first meeting, you want to be the firm they find — and the one whose pages read like the clearest thinking on the subject. That is what on-page SEO buys: inbound that arrives already convinced.",
    points: [
      'Pages mapped to what founders and LPs actually search for',
      'Clean semantic structure and fast loads that crawlers reward',
      'Thesis and sector pages built to rank for your point of view',
      'Internal linking that compounds authority across the site',
    ],
    visual: <SeoVisual />,
  },
  {
    index: '03',
    kicker: 'Content engine',
    title: (
      <>
        Your partners talk. We turn it into <em className="italic text-brand">authority, everywhere.</em>
      </>
    ),
    body: "The insight is already there — in a partner's head, on a call, in a two-minute voicenote or a short video. We shape it into a polished article on your site, then repurpose it into LinkedIn posts, X threads, and short clips. The partner spends minutes; the firm publishes everywhere.",
    points: [
      'Record a voicenote or short video — no writing required',
      "We shape it into an article in your firm's voice",
      'Repurposed across LinkedIn, X, and short-form video',
      'A steady cadence that compounds into search traffic and authority',
    ],
    pilot: 'Video production — available as a pilot',
    visual: <ContentVisual />,
  },
];

const ServiceBlock = ({ service, flip }: { service: DeepService; flip: boolean }) => {
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
        <h3 className="mt-4 font-display font-normal text-[clamp(1.7rem,2.8vw,2.3rem)] leading-[1.12] tracking-[-0.01em] max-w-[18ch]">
          {service.title}
        </h3>
        <p className="mt-5 max-w-[46ch] text-[16.5px] leading-[1.55] text-ink-soft">{service.body}</p>
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
        {service.visual}
      </motion.div>
    </motion.div>
  );
};

// --- Process -----------------------------------------------------------------

const PROCESS = [
  {
    n: '01',
    title: 'Audit & positioning',
    body: 'We study your portfolio, your thesis, and how you currently show up when someone searches for a firm like yours.',
  },
  {
    n: '02',
    title: 'Design first',
    body: 'You see a real design of your new site before you commit. Love it and we continue, three revisions included. If you don\'t, you owe nothing.',
  },
  {
    n: '03',
    title: 'Build & publish',
    body: 'A fast, editorial site goes live — portfolio, case studies, and thesis pages structured from the start to be found.',
  },
  {
    n: '04',
    title: 'The engine runs',
    body: 'Each week your partners send a voicenote or video. We turn it into an article and a week of social. Authority compounds.',
  },
];

const Process = () => {
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
      {PROCESS.map((step) => (
        <motion.div key={step.n} variants={fadeUp} className="bg-paper p-7 lg:p-8">
          <div className="font-display text-[1.8rem] italic text-brand/30">{step.n}</div>
          <h3 className="mt-5 font-display text-[1.3rem] tracking-[-0.01em]">{step.title}</h3>
          <p className="mt-3 text-[15px] leading-[1.5] text-ink-soft">{step.body}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

// --- Results band ------------------------------------------------------------

const RESULTS = [
  { value: '+38%', label: 'inbound founder intros' },
  { value: '3.1×', label: 'organic search traffic' },
  { value: '1 + 4', label: 'article & social posts a week, from one voicenote' },
  { value: '6 wks', label: 'kickoff to launch' },
];

const ResultsBand = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.1);

  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <motion.div variants={fadeUp} className="max-w-[46ch]">
        <Eyebrow className="mb-5">What a build like this is worth</Eyebrow>
        <p className="font-display text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.2] tracking-[-0.01em]">
          A venture firm's website is the one partner that keeps working while everyone else is in meetings.
        </p>
        <p className="mt-4 text-[14px] text-ink-soft">
          Representative outcomes from the kind of work we do — directional, not a single named client.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-12 lg:grid-cols-4">
        {RESULTS.map((r) => (
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

const HomePage = () => (
  <div className="bg-paper">
    <Nav links={NAV_LINKS} ctaLabel="Start a project" ctaHref="/contact" />

    <main>
      <Hero />

      <section id="services" className="border-t border-line py-[92px] scroll-mt-[90px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead title="What we build" label="Three things, done properly" />
          <div className="space-y-[104px]">
            {SERVICES.map((service, i) => (
              <React.Fragment key={service.index}>
                <ServiceBlock service={service} flip={i % 2 === 1} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-t border-line py-[92px] scroll-mt-[90px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead title="How it works" label="From first call to a running engine" />
          <Process />
        </div>
      </section>

      <section id="work" className="border-t border-line py-[92px] scroll-mt-[90px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead title="Selected work" label="Representative builds" />
          <WorkLedger items={work.slice(0, 3)} />
          <div className="mt-9">
            <Button variant="ghost" href="/work" arrow>
              See all work
            </Button>
          </div>
        </div>
      </section>

      <section id="writing" className="border-t border-line py-[92px] scroll-mt-[90px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead title="Writing" label="On how venture firms present themselves" />
          <ArticleRow articles={writing.slice(0, 3)} />
          <div className="mt-9">
            <Button variant="ghost" href="/writing" arrow>
              Read more
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-[92px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <ResultsBand />
        </div>
      </section>

      <section className="border-t border-line py-[92px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <OfferBand
            headline="You see the design before you pay."
            body="We build a real first design of your new site. If you love it, we continue — three revisions included. If you don't, you owe nothing."
            ctaLabel="Start a project"
            ctaHref="/contact"
          />
        </div>
      </section>
    </main>

    <SiteFooter
      id="contact"
      className="scroll-mt-[90px]"
      tagline="Digital infrastructure for venture & private equity firms — with select PMS pilots. Based in Mumbai."
      columns={[
        {
          heading: 'Explore',
          links: [
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
  </div>
);

export default HomePage;
