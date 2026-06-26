import React from 'react';
import { motion } from 'motion/react';
import {
  Button,
  Eyebrow,
  Seo,
  SiteLayout,
  useFadeUpVariants,
  useStaggerVariants,
  viewportOnce,
} from '../components/site';
import { breadcrumbSchema, faqSchema, servicesSchema } from '../data/structuredData';

// AEO: real questions a VC partner asks, each with a tight, directly-quotable
// answer. Rendered as question-headings + concise answers, and mirrored into
// FAQPage structured data below.
const APPROACH_FAQ = [
  {
    q: 'What does on-page SEO do for a venture firm?',
    a: 'On-page SEO makes a venture firm findable when founders and LPs search. It does three things: it brings inbound from people who arrive already convinced, it makes you discoverable for your own thesis terms instead of directories, and it positions your pages as the clearest thinking on a topic.',
  },
  {
    q: 'How do you turn voicenotes into content?',
    a: "A partner records a two-minute voicenote or short video after a meeting. We transcribe it, shape it into a finished article in your firm's voice, and you approve a draft. Then we publish it, structured for search, and repurpose it into LinkedIn posts, an X thread, and short clips.",
  },
  {
    q: 'How long does a website build take?',
    a: 'A full build typically runs about six weeks from kickoff to launch: audit and positioning, design, then an SEO-structured build. You see a real first design before committing, and the content engine begins publishing on a weekly cadence once the site is live.',
  },
  {
    q: 'Do you write the content, or do we?',
    a: "We do the writing. Your partners supply the thinking in the most natural form — a voicenote or a short video — and we turn it into finished articles and social posts. You approve drafts. The goal is authority that compounds without adding to a partner's week.",
  },
  {
    q: "What does it cost, and what's the risk?",
    a: "We build a real first design of your new site before you commit. If you love it, we continue, with three revisions included. If you don't, you owe nothing. Pricing depends on scope across the three services, and we quote it after a short call.",
  },
  {
    q: 'Do you only work with venture firms?',
    a: 'Venture and private equity firms are our focus. We also take a small number of PMS — portfolio management service — engagements as pilots. The work is the same: a portfolio-led site, on-page SEO, and a content engine that turns expertise into authority.',
  },
];

// --- Small primitives --------------------------------------------------------

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[1.12rem] leading-[1.8] text-ink mb-6 last:mb-0">{children}</p>
);

const Lead = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[clamp(1.2rem,2vw,1.5rem)] leading-[1.5] text-ink-soft font-display tracking-[-0.005em] max-w-[40ch]">
    {children}
  </p>
);

/** A numbered service chapter with a sticky kicker rail on desktop. */
const Chapter = ({
  index,
  kicker,
  title,
  children,
}: {
  index: string;
  kicker: string;
  title: React.ReactNode;
  children: React.ReactNode;
}) => {
  const fadeUp = useFadeUpVariants();

  return (
    <motion.section
      className="border-t border-line py-[72px] scroll-mt-[90px]"
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

// --- SEO "why" triad ---------------------------------------------------------

const SEO_WHY = [
  {
    k: 'Inbound',
    body: 'A founder who finds you by searching arrives already convinced. They have read your thesis, seen the companies you backed, and decided you understand their world — before the first email.',
  },
  {
    k: 'Discoverability',
    body: 'LPs and founders search in plain language: "who funds climate hardware," "seed investors for fintech in India." If those pages aren\'t yours, they\'re a competitor\'s — or a directory that sells your name as a lead.',
  },
  {
    k: 'Authority',
    body: 'Ranking for the topics you have a view on does more than bring traffic. It positions the firm as the clearest thinker on the subject. The search result becomes part of the pitch.',
  },
];

const SeoWhy = () => {
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
      {SEO_WHY.map((w) => (
        <motion.div key={w.k} variants={fadeUp} className="bg-paper p-6">
          <div className="font-display text-[1.25rem] tracking-[-0.01em] text-brand">{w.k}</div>
          <p className="mt-3 text-[14.5px] leading-[1.55] text-ink-soft">{w.body}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

// --- Content-engine steps ----------------------------------------------------

const ENGINE_STEPS = [
  {
    n: '1',
    t: 'A partner records, in two minutes',
    b: 'After a board meeting, on a walk, between flights — a partner records a voicenote or a short video about what they just learned. No outline, no writing. Just the thinking, out loud.',
  },
  {
    n: '2',
    t: 'We shape it into an article',
    b: "We transcribe it and turn it into a clean, well-argued article in your firm's voice — structure, headings, the right examples — not a transcript with the ums removed.",
  },
  {
    n: '3',
    t: 'You approve; we publish',
    b: 'You see a draft and give one round of notes. We publish it on your site, structured for search from the first line — title, headings, internal links, schema.',
  },
  {
    n: '4',
    t: 'We repurpose it everywhere',
    b: 'The same idea becomes a LinkedIn post, an X thread, and a short clip if there was video — sized and written for each platform, not copy-pasted across them.',
  },
  {
    n: '5',
    t: 'It compounds, weekly',
    b: 'Repeat at a steady cadence and the firm builds a body of work: a back catalogue that ranks, an audience that grows, and partners who are known for their thinking.',
  },
];

const EngineSteps = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.07);

  return (
    <motion.ol
      className="mt-10"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {ENGINE_STEPS.map((s, i) => (
        <motion.li key={s.n} variants={fadeUp} className="relative grid grid-cols-[44px_1fr] gap-x-5 pb-9 last:pb-0">
          {/* connector line */}
          {i < ENGINE_STEPS.length - 1 && (
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

// --- Compounding flywheel ----------------------------------------------------

const Flywheel = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.1);

  const nodes = [
    { t: 'Content gives SEO something worth ranking', s: 'Every article is a page that can rank for a real question.' },
    { t: 'SEO gives content an audience', s: 'Search delivers the exact founders and LPs the article was written for.' },
    { t: 'Together they produce inbound', s: 'People arrive informed, convinced, and ready to talk — on your terms.' },
  ];

  return (
    <motion.div
      className="mt-10 grid gap-4 md:grid-cols-3"
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {nodes.map((n, i) => (
        <motion.div
          key={n.t}
          variants={fadeUp}
          className="relative rounded-[14px] border border-line bg-paper-soft p-6"
        >
          <div className="font-display text-[15px] italic text-brand/40">{`0${i + 1}`}</div>
          <h3 className="mt-3 font-display text-[1.2rem] leading-tight tracking-[-0.01em]">{n.t}</h3>
          <p className="mt-2.5 text-[14.5px] leading-[1.5] text-ink-soft">{n.s}</p>
          {i < nodes.length - 1 && (
            <span className="absolute -right-[14px] top-1/2 hidden -translate-y-1/2 text-brand md:block" aria-hidden>
              →
            </span>
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

  return (
    <SiteLayout>
      <Seo
        title="Website design, SEO & content for VC firms"
        description="How we build for venture firms: a portfolio-led site, on-page SEO that brings inbound, and a content engine that turns voicenotes into articles and social."
        path="/approach"
        image="/og/approach.png"
        imageAlt="QuantikGrowth approach: website design, on-page SEO, and a content engine."
        keywords="venture firm website, on-page SEO for VC, content engine, voicenote to article, VC inbound marketing"
        jsonLd={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Approach', path: '/approach' },
          ]),
          ...servicesSchema,
          faqSchema(APPROACH_FAQ),
        ]}
      />
      <section className="pt-[96px] pb-[40px]">
        <motion.div className="max-w-[1120px] mx-auto px-8" variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-[22px]">Approach</Eyebrow>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2.4rem,5.2vw,4rem)] leading-[1.06] tracking-[-0.018em] max-w-[17ch]"
          >
            Three things, each done <em className="italic text-brand">as if it were the whole job.</em>
          </motion.h1>
          <motion.div variants={fadeUp} className="mt-[28px]">
            <Lead>
              We don't sell a menu. We do website design, on-page SEO, and a content engine — and the
              reason they're worth doing together is that each one makes the other two work harder.
            </Lead>
          </motion.div>
        </motion.div>
      </section>

      <div className="max-w-[1120px] mx-auto px-8">
        <Chapter
          index="01"
          kicker="Website design"
          title={<>The site is the firm's first impression. Make it argue the case.</>}
        >
          <P>
            A strong founder reads your site before they reply to your email. An LP reads it before a
            first meeting. In both cases the question is the same — does this firm understand my world,
            and is its judgment any good? Most venture sites answer neither. They show a wall of logos, a
            page of bios, and a contact form, and leave the visitor to infer the rest.
          </P>
          <P>
            We rebuild the site around the work. The portfolio becomes a set of short stories rather than
            a grid. Your best decisions become investment case studies — the thesis, the partnership, the
            outcome — so the site proves judgment instead of just listing names. It loads in under a
            second and reads well on a phone, because that's where it will actually be opened.
          </P>
          <ul className="mt-7 space-y-3 text-[15.5px] text-ink-soft">
            {[
              'Portfolio companies told as stories, with the thesis behind each cheque',
              'Editorial investment case studies that show how you think',
              'Thesis and sector pages a founder can map themselves onto',
              'Sub-second loads, accessible, and built to read on mobile',
            ].map((x) => (
              <li key={x} className="flex gap-3.5">
                <span className="mt-[11px] h-px w-4 shrink-0 bg-brand" />
                {x}
              </li>
            ))}
          </ul>
        </Chapter>

        <Chapter
          index="02"
          kicker="On-page SEO"
          title={<>Being good is not the same as being found.</>}
        >
          <P>
            On-page SEO is the part of the work most firms underrate, so it's the part we argue hardest
            for. It isn't keyword stuffing or a monthly report of vanity metrics. It's making sure that
            when the right person searches, your pages are what they find — and that those pages read like
            the clearest thinking on the subject. There are three reasons it matters to a venture firm.
          </P>
          <SeoWhy />
          <div className="mt-8" />
          <P>
            In practice it's unglamorous and concrete: page titles and descriptions written for humans and
            crawlers both, a clean semantic structure, fast loads, descriptive links, structured data, and
            — above all — pages that exist for the questions your audience actually asks. We do this from
            the first line of the build, not as a bolt-on afterward, because retrofitting SEO onto a
            finished site is how it ends up half-done.
          </P>
        </Chapter>

        <Chapter
          index="03"
          kicker="Content engine"
          title={<>Your partners already have the insight. We remove the writing.</>}
        >
          <P>
            The reason most firms don't publish isn't that they have nothing to say — it's that turning a
            sharp thought into a finished article is a job nobody has time for. So the thinking stays in
            partners' heads, or it goes to LinkedIn once a quarter and stops. The content engine fixes the
            bottleneck by removing the part that costs partners time: the writing.
          </P>
          <EngineSteps />
        </Chapter>

        <Chapter
          index="04"
          kicker="Why together"
          title={<>SEO and content don't add up. They compound.</>}
        >
          <P>
            This is why we do all three rather than one. A beautiful site with nothing to read doesn't
            rank. SEO with no content has nothing to point at. Content with no SEO builds someone else's
            audience. Put them together and they feed each other.
          </P>
          <Flywheel />
        </Chapter>
      </div>

      {/* FAQ — AEO: question-headings + tight, quotable answers */}
      <section className="border-t border-line py-[80px]" aria-labelledby="faq-heading">
        <div className="max-w-[1120px] mx-auto px-8">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
            <Eyebrow className="mb-[22px]">Questions, answered</Eyebrow>
            <h2
              id="faq-heading"
              className="font-display font-normal text-[clamp(1.8rem,3.4vw,2.6rem)] tracking-[-0.01em] max-w-[22ch]"
            >
              What VC partners ask before they start.
            </h2>
          </motion.div>

          <motion.dl
            className="mt-12 grid gap-px overflow-hidden rounded-[16px] border border-line bg-line md:grid-cols-2"
            variants={faqStagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {APPROACH_FAQ.map((item) => (
              <motion.div key={item.q} variants={fadeUp} className="bg-paper p-7">
                <dt className="font-display text-[1.25rem] leading-[1.25] tracking-[-0.01em] text-ink">
                  {item.q}
                </dt>
                <dd className="mt-3 text-[15.5px] leading-[1.6] text-ink-soft">{item.a}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </section>

      <section className="border-t border-line py-[80px]">
        <div className="max-w-[1120px] mx-auto px-8">
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
