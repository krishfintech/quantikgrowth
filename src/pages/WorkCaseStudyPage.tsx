import React from 'react';
import { motion } from 'motion/react';
import { Eyebrow, SiteLayout, useFadeUpVariants, useStaggerVariants, viewportOnce } from '../components/site';
import { work } from '../data/work';

/* ------------------------------------------------------------------ */
/* Co-located body content, keyed by slug.                             */
/* The cover (company, thesis, metrics) is read from data/work.ts;     */
/* the narrative below lives here as a small component per study.       */
/* ------------------------------------------------------------------ */

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[1.08rem] text-ink-soft leading-[1.8] mb-5 last:mb-0">{children}</p>
);

interface CaseBody {
  whatTheyDo: React.ReactNode;
  theBuild: React.ReactNode;
  outcome: React.ReactNode;
}

const caseStudyBodies: Record<string, CaseBody> = {
  'atlas-ventures': {
    whatTheyDo: (
      <>
        <P>
          Atlas Ventures is an early-stage firm writing first cheques into seed and Series A founders,
          mostly in developer tools and applied AI. Their edge is a specific, opinionated thesis about
          where technical teams compound — and a willingness to back it before the market agrees.
        </P>
        <P>
          That conviction lived in the partners' heads and in their conversations. It did not live on
          the website, which presented as a tidy but anonymous grid of logos.
        </P>
      </>
    ),
    theBuild: (
      <>
        <P>
          We rebuilt the site around the portfolio rather than around the firm. Each company became a
          short, structured story — what Atlas saw, why they moved early, and what the company became —
          so the logo wall turned into evidence of a point of view.
        </P>
        <P>
          The thesis moved to the front door: a founder landing cold can understand, in the first ten
          seconds, what Atlas believes and whether their company belongs in that worldview. Fast pages,
          restrained typography, and a portfolio that reads top-to-bottom did the rest.
        </P>
      </>
    ),
    outcome: (
      <>
        <P>
          Within six weeks of launch, qualified inbound founder introductions rose 38%, and the median
          visitor spent more than twice as long in the portfolio section. The partners stopped sending
          decks to explain their thesis — they started sending a link.
        </P>
      </>
    ),
  },
  'meridian-capital': {
    whatTheyDo: (
      <>
        <P>
          Meridian Capital is a growth-equity firm backing profitable, founder-led businesses through
          their scaling years. Their track record was genuinely strong — and almost entirely invisible,
          scattered across pitch decks, partner memory, and a handful of press hits.
        </P>
      </>
    ),
    theBuild: (
      <>
        <P>
          We built an editorial case-study system. Each investment follows the same spine — the thesis,
          the partnership, the outcome — so a reader sees not just that a deal happened, but the
          judgment behind it and how it played out.
        </P>
        <P>
          The system is designed to be filled over time: a template the team can extend without a
          designer, so the body of proof grows with every realised win.
        </P>
      </>
    ),
    outcome: (
      <>
        <P>
          Nine case studies shipped in the first quarter. LP deck requests rose 27%, and average read
          depth on the case studies held at 74% — people were finishing them. A quiet track record
          became a story an allocator could follow without a meeting.
        </P>
      </>
    ),
  },
  northwind: {
    whatTheyDo: (
      <>
        <P>
          Northwind is a multi-stage firm whose partners are prolific thinkers — the kind who write
          long, argue in public, and shape how founders frame their own companies. That writing was
          building audiences on Substack and LinkedIn, on platforms the firm didn't own.
        </P>
      </>
    ),
    theBuild: (
      <>
        <P>
          We gave them a publishing engine on their own domain: fast, clean, and built for cadence. The
          partners draft in a system they actually enjoy using, and essays ship without a developer in
          the loop.
        </P>
        <P>
          Every piece is structured for search and for sharing, so a single essay keeps working long
          after it's posted — compounding into authority the firm owns outright.
        </P>
      </>
    ),
    outcome: (
      <>
        <P>
          Fourteen essays went out in the first quarter. Organic search traffic tripled, and the
          newsletter added more than 1,900 subscribers — an owned audience the partners now reach
          directly, on their terms.
        </P>
      </>
    ),
  },
};

const Section = ({ label, children }: { label: string; children: React.ReactNode }) => {
  const fadeUp = useFadeUpVariants();

  return (
    <motion.section
      className="border-t border-line py-[56px]"
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

const NotFound = () => (
  <SiteLayout>
    <section className="pt-[120px] pb-[140px]">
      <div className="max-w-[1120px] mx-auto px-8">
        <h1 className="font-display text-[2.4rem] tracking-[-0.01em]">Case study not found</h1>
        <p className="text-ink-soft mt-4">
          <a href="/work" className="text-brand hover:underline">
            ← Back to all work
          </a>
        </p>
      </div>
    </section>
  </SiteLayout>
);

const WorkCaseStudyPage = ({ slug }: { slug: string }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.1);

  const index = work.findIndex((w) => w.slug === slug);
  const item = work[index];
  const body = caseStudyBodies[slug];

  if (!item || !body) return <NotFound />;

  const next = work[(index + 1) % work.length];

  return (
    <SiteLayout>
      {/* Cover */}
      <section className="pt-[88px] pb-[20px]">
        <motion.div
          className="max-w-[1120px] mx-auto px-8"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <a href="/work" className="text-[14px] text-ink-soft hover:text-brand transition-colors">
              ← Selected work
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-7">
            <Eyebrow className="mb-[22px]">
              {item.sector} · {item.year}
            </Eyebrow>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2.6rem,5.4vw,4.4rem)] leading-[1.04] tracking-[-0.018em]"
          >
            {item.company}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-[clamp(1.1rem,1.7vw,1.4rem)] text-ink leading-[1.45] max-w-[40ch] mt-6"
          >
            {item.thesis}
          </motion.p>

          {item.metrics && item.metrics.length > 0 && (
            <motion.dl
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line rounded-[14px] overflow-hidden mt-12"
            >
              {item.metrics.map((m) => (
                <div key={m.label} className="bg-paper px-7 py-8">
                  <dt className="text-[13px] text-ink-soft">{m.label}</dt>
                  <dd className="font-display text-[2.1rem] tracking-[-0.01em] text-brand mt-1.5">
                    {m.value}
                  </dd>
                </div>
              ))}
            </motion.dl>
          )}
        </motion.div>
      </section>

      <div className="max-w-[1120px] mx-auto px-8 mt-12">
        <Section label="Thesis">
          <P>{item.summary}</P>
        </Section>
        <Section label="What they do">{body.whatTheyDo}</Section>
        <Section label="The build">{body.theBuild}</Section>
        <Section label="Outcome">{body.outcome}</Section>
      </div>

      {/* Next case study */}
      <section className="border-t border-ink mt-6">
        <a
          href={`/work/${next.slug}`}
          className="group block max-w-[1120px] mx-auto px-8 py-[60px] transition-colors hover:bg-paper-soft"
        >
          <span className="text-[13px] text-ink-soft">Next case study</span>
          <div className="flex items-baseline justify-between gap-6 mt-3">
            <span className="font-display text-[clamp(1.8rem,3.6vw,2.8rem)] tracking-[-0.01em] group-hover:text-brand transition-colors">
              {next.company}
            </span>
            <span className="text-brand text-[1.6rem] group-hover:translate-x-1 transition-transform">→</span>
          </div>
          <p className="text-[15px] text-ink-soft max-w-[52ch] mt-2">{next.thesis}</p>
        </a>
      </section>
    </SiteLayout>
  );
};

export default WorkCaseStudyPage;
