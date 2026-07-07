import React from 'react';
import { motion } from 'motion/react';
import {
  Eyebrow,
  MaskReveal,
  Seo,
  SITE_URL,
  SiteLayout,
  useFadeUpVariants,
  useStaggerVariants,
  viewportOnce,
} from '../components/site';
import { breadcrumbSchema } from '../data/structuredData';

/* --- Shared prose ----------------------------------------------------------- */
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[1.16rem] leading-[1.85] text-ink mb-7 last:mb-0">{children}</p>
);

/* A section with a quiet left-hand label and a content column — the single
   rhythm repeated top to bottom so the page reads as one authored document. */
const Section = ({
  label,
  children,
  wide = false,
}: {
  label: string;
  children: React.ReactNode;
  wide?: boolean;
}) => {
  const fadeUp = useFadeUpVariants();
  return (
    <motion.section
      className="border-t border-line py-[clamp(44px,7vw,76px)]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div className="grid gap-x-12 gap-y-7 md:grid-cols-[180px_minmax(0,1fr)]">
        <h2 className="font-display text-[13px] font-medium uppercase tracking-[0.16em] text-ink-soft md:pt-2">
          {label}
        </h2>
        <div className={wide ? '' : 'max-w-[62ch]'}>{children}</div>
      </div>
    </motion.section>
  );
};

/* Lettered, hairline-separated principle. */
const Principle = ({ letter, title, children }: { letter: string; title: string; children: React.ReactNode }) => (
  <div className="grid grid-cols-[28px_minmax(0,1fr)] gap-x-5 border-t border-line py-7 first:border-t-0 first:pt-0">
    <span className="font-display text-[1.05rem] leading-none text-brand pt-1.5">{letter}</span>
    <div>
      <h3 className="font-display font-medium text-[1.3rem] leading-[1.2] tracking-[-0.01em] text-ink">{title}</h3>
      <p className="mt-2.5 text-[1.05rem] leading-[1.65] text-ink-soft">{children}</p>
    </div>
  </div>
);

/* An outcome-led service line. */
const ServiceLine = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-t border-line py-6 first:border-t-0 first:pt-0">
    <h3 className="font-display font-medium text-[1.22rem] leading-[1.25] tracking-[-0.01em] text-ink">{title}</h3>
    <p className="mt-2 text-[1.05rem] leading-[1.65] text-ink-soft">{children}</p>
  </div>
);

const AboutPage = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.06);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Krish Naidu',
    jobTitle: 'Founder',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    url: `${SITE_URL}/about`,
    sameAs: ['https://www.linkedin.com/in/krishnaidu0/'],
    knowsAbout: [
      'Indian equities',
      'Equity research',
      'Website design for investment firms',
      'On-page SEO',
      'Content strategy for investors',
    ],
  };

  return (
    <SiteLayout>
      <Seo
        title="About — a studio for investment firms"
        description="QuantikGrowth is a focused, founder-led studio that builds the websites, on-page SEO, and content engine investment firms use to present their judgment."
        path="/about"
        image="/og/default.png"
        imageAlt="About QuantikGrowth — a studio that builds digital infrastructure for investment firms."
        keywords="QuantikGrowth, about, digital infrastructure for investment firms, Krish Naidu, website design for VC and PMS firms"
        jsonLd={[
          personSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />

      {/* --- Opening manifesto --- */}
      <section className="pt-[64px] pb-[20px] sm:pt-[104px] sm:pb-[36px]">
        <motion.div
          className="max-w-[1360px] mx-auto px-8 lg:px-12"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="mb-[26px]">About</Eyebrow>
          </motion.div>
          <h1 className="font-display font-normal text-[clamp(2.1rem,5.2vw,4rem)] leading-[1.07] tracking-[-0.02em] max-w-[20ch]">
            <MaskReveal delay={0.08}>An investment firm’s edge is its thinking —</MaskReveal>
            <MaskReveal delay={0.16}>and almost none of it is visible online.</MaskReveal>
            <MaskReveal delay={0.24}>
              <em className="italic text-brand">We exist to close that gap.</em>
            </MaskReveal>
          </h1>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.05rem,1.6vw,1.28rem)] text-ink-soft max-w-[58ch] mt-[30px] leading-[1.6]"
          >
            QuantikGrowth is a focused, founder-led studio that builds the digital infrastructure investment
            firms use to present their judgment — clearly, and on their own terms.
          </motion.p>
        </motion.div>
      </section>

      <div className="max-w-[1360px] mx-auto px-8 lg:px-12 mt-10">
        {/* --- The point of view --- */}
        <Section label="The point of view">
          <P>
            The best investment firms are excellent at investing and forgettable at presenting it. The
            judgment that sets a firm apart stays locked in decks and conversations; online, it shows up as a
            logo wall and a contact form — while every allocation now begins with quiet research.
          </P>
          <blockquote className="mt-8 border-l-2 border-brand pl-6">
            <p className="font-display text-[clamp(1.4rem,2.6vw,1.9rem)] leading-[1.35] tracking-[-0.01em] text-brand-deep">
              Presence isn’t marketing. It’s infrastructure — and underbuilt, it quietly discounts every
              other strength a firm has.
            </p>
          </blockquote>
        </Section>

        {/* --- How we work --- */}
        <Section label="How we work">
          <Principle letter="A" title="Substance over flash">
            No stock photography, no buzzwords — clarity, restraint, and a real point of view.
          </Principle>
          <Principle letter="B" title="Infrastructure that compounds">
            Owned assets, not campaigns. Every page keeps working long after it ships.
          </Principle>
          <Principle letter="C" title="We speak your language">
            We understand investing from the inside, so the writing sounds like a partner.
          </Principle>
          <Principle letter="D" title="Senior attention, always">
            You work directly with the person doing the work. No hand-offs.
          </Principle>
        </Section>

        {/* --- What we do --- */}
        <Section label="What we do">
          <div>
            <ServiceLine title="A website that earns trust in ten seconds">
              Fast, editorial, built around your thesis and track record.
            </ServiceLine>
            <ServiceLine title="Discoverability, for people and AI">
              On-page SEO plus AEO/GEO — found and cited when they search, or ask an AI.
            </ServiceLine>
            <ServiceLine title="A content engine that compounds authority">
              Your thinking, captured as a five-minute voicenote and published on a cadence.
            </ServiceLine>
            <ServiceLine title="An AI investor-relations concierge — for PMS firms">
              Compliance-safe answers to diligence questions, around the clock. Information, never advice.
            </ServiceLine>
          </div>
        </Section>

        {/* --- The founder --- */}
        <Section label="The founder" wide>
          <div className="grid gap-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-12">
            <div className="md:pt-1">
              <div
                className="flex aspect-[4/5] w-full max-w-[260px] items-end justify-center overflow-hidden rounded-[16px] border border-line bg-brand-tint"
                role="img"
                aria-label="Portrait of Krish Naidu, founder of QuantikGrowth."
              >
                <span className="mb-8 font-display text-[3.4rem] leading-none tracking-[-0.02em] text-brand/60" aria-hidden>
                  KN
                </span>
              </div>
              <div className="mt-4">
                <div className="font-display text-[1.25rem] tracking-[-0.01em] text-ink">Krish Naidu</div>
                <div className="text-[14px] text-ink-soft">Founder, QuantikGrowth</div>
                <a
                  href="https://www.linkedin.com/in/krishnaidu0/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-[14px] text-brand underline decoration-brand/30 underline-offset-2 hover:decoration-brand"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="max-w-[60ch]">
              <P>
                QuantikGrowth exists at an unusual intersection: someone who understands investing from the
                inside, building the infrastructure to present it.
              </P>
              <P>
                Krish has spent years studying and trading Indian equities, and is building an AI-driven
                equity-research platform — so he reads a firm’s site the way an LP, an advisor, or an HNI
                does. The conviction is simple: investment firms rarely have a quality problem; they have a
                visibility problem. We close that gap, and stay small, so every client gets senior attention.
              </P>
            </div>
          </div>
        </Section>

        {/* --- The standard --- */}
        <Section label="The standard">
          <P>
            One test: the work must read as institutional as the firm it represents. We ship less and better,
            borrow no logos, invent no results — and if a page isn’t carrying its weight, it doesn’t go up.
          </P>
        </Section>
      </div>

      {/* --- Closing CTA --- */}
      <section className="border-t border-line">
        <motion.div
          className="max-w-[1360px] mx-auto px-8 lg:px-12 py-[clamp(56px,9vw,104px)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="font-display text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.2] tracking-[-0.015em] max-w-[22ch] text-ink">
            If your firm’s presence isn’t carrying the weight your work deserves —{' '}
            <a href="/contact" className="text-brand hover:underline underline-offset-4">
              let’s talk.
            </a>
          </p>
        </motion.div>
      </section>
    </SiteLayout>
  );
};

export default AboutPage;
