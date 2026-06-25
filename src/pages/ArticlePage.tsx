import React from 'react';
import { motion } from 'motion/react';
import { SiteLayout, useFadeUpVariants, useStaggerVariants } from '../components/site';
import { writing } from '../data/writing';

/* ------------------------------------------------------------------ */
/* Prose primitives — shared by every article body.                    */
/* ------------------------------------------------------------------ */

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[1.15rem] leading-[1.85] text-ink mb-7">{children}</p>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-display font-medium text-[1.65rem] leading-[1.2] tracking-[-0.01em] text-ink mt-12 mb-5">
    {children}
  </h2>
);

const Lead = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[1.3rem] leading-[1.6] text-ink-soft mb-8">{children}</p>
);

/* ------------------------------------------------------------------ */
/* Co-located article bodies, keyed by slug.                           */
/* ------------------------------------------------------------------ */

const articleBodies: Record<string, React.ReactNode> = {
  'think-like-a-publisher': (
    <>
      <Lead>
        Marketing rents attention. Publishing compounds it. For a firm whose entire product is judgment,
        that difference is not cosmetic — it decides whether the best founders arrive already convinced.
      </Lead>
      <P>
        Most venture websites are built like brochures. There is a tagline about partnership, a grid of
        portfolio logos, a page of partner headshots, and a contact form. It is marketing in the oldest
        sense: a static claim about how good the firm is, addressed to no one in particular, refreshed
        once every few years when it starts to feel embarrassing. It informs. It does not persuade, and
        it certainly does not compound.
      </P>
      <P>
        A publisher behaves differently. A publisher ships — regularly, with a point of view, to an
        audience it is trying to earn rather than rent. Each thing it puts out is an asset that keeps
        working: it gets found in search, forwarded in DMs, quoted in other people's essays, and read
        by a founder at 1 a.m. three months after it was written. The brochure depreciates the day it
        goes live. The published archive appreciates.
      </P>
      <H2>Judgment is the product, and writing is the only proof of it</H2>
      <P>
        A venture firm does not sell capital — capital is a commodity, and the founder you actually want
        has three other term sheets. What a firm sells is judgment: the ability to see, earlier and more
        clearly than the market, which companies and which people compound. That is an invisible product.
        You cannot photograph it. You can only demonstrate it, and the most direct demonstration is
        sustained, public, specific writing about how you think.
      </P>
      <P>
        When a partner writes a sharp essay about why a category is mispriced, two things happen at once.
        Founders in that category recognise that this firm understands their world before the first call.
        And the firm builds a durable, searchable record of having been right early — the closest thing
        to a track record you can show before the exits land.
      </P>
      <H2>What this changes about the website</H2>
      <P>
        If you take the publisher framing seriously, the firm's site stops being a billboard and becomes
        a home for thinking. The writing is not a buried blog link in the footer; it is a first-class
        surface, designed to be read, easy to ship to, and built so a single essay keeps paying out for
        years. The portfolio stops being a wall of logos and becomes a set of arguments — here is what we
        saw, here is why we moved, here is what happened.
      </P>
      <P>
        None of this requires a content team or a publishing calendar borrowed from a media company. It
        requires a system the partners will actually use, and the discipline to treat thinking as the
        firm's most valuable output — not a marketing afterthought. Get that right, and the website stops
        introducing the firm and starts doing what the best partners do in a room: making the case, before
        anyone has to ask for it.
      </P>
    </>
  ),
  'logo-wall-is-dead': (
    <>
      <Lead>
        A grid of portfolio logos proves you wrote a cheque. An investment case study proves you had a
        reason — and that the reason turned out to be right.
      </Lead>
      <P>
        The logo wall is the most common element on a venture website and the least informative. It tells
        a visitor that money changed hands, nothing more. It cannot distinguish the deal you fought for
        from the one you backed into, or the conviction bet from the index-style spray. Every firm's wall
        looks roughly the same, which is precisely the problem.
      </P>
      <P>
        An investment case study does the work the logo cannot. It has a spine: the thesis you held, the
        partnership you built, and the outcome that followed. Read three of them and a founder understands
        your taste — not that you invest, but how you decide. That is the thing they are actually trying
        to learn before they let you onto their cap table.
      </P>
    </>
  ),
  'what-founders-read': (
    <>
      <Lead>
        By the time a strong founder replies to your email, they have already decided what they think of
        you. Here is what they looked at to decide it.
      </Lead>
      <P>
        The good ones do their diligence in reverse. Before they answer, they open a tab, type your firm's
        name, and spend four minutes deciding whether you are worth a call. They are not reading your
        tagline. They are looking for evidence that you understand the specific thing they are building.
      </P>
      <P>
        What they find is usually a portfolio grid and a contact form — which tells them nothing, so they
        fall back on warm intros and reputation. A firm that instead shows its thinking and its reasoning
        gives the founder something to react to, and turns a cold four minutes into the first half of a
        conversation.
      </P>
    </>
  ),
};

const NotFound = () => (
  <SiteLayout>
    <section className="pt-[120px] pb-[140px]">
      <div className="max-w-[680px] mx-auto px-6">
        <h1 className="font-display text-[2.4rem] tracking-[-0.01em]">Article not found</h1>
        <p className="text-ink-soft mt-4">
          <a href="/writing" className="text-brand hover:underline">
            ← Back to all writing
          </a>
        </p>
      </div>
    </section>
  </SiteLayout>
);

const ArticlePage = ({ slug }: { slug: string }) => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.07, 0.05);

  const article = writing.find((a) => a.slug === slug);
  const body = articleBodies[slug];

  if (!article || !body) return <NotFound />;

  return (
    <SiteLayout>
      <article className="max-w-[680px] mx-auto px-6 pt-[80px] pb-[110px]">
        <motion.header variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <a href="/writing" className="text-[14px] text-ink-soft hover:text-brand transition-colors">
              ← Writing
            </a>
          </motion.div>
          <motion.p variants={fadeUp} className="text-[13.5px] text-ink-soft mt-8">
            {article.date} · {article.readingMinutes} min read
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display font-normal text-[clamp(2.1rem,4.4vw,3rem)] leading-[1.1] tracking-[-0.015em] mt-3"
          >
            {article.title}
          </motion.h1>
        </motion.header>

        <motion.div
          className="mt-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          {body}
        </motion.div>
      </article>
    </SiteLayout>
  );
};

export default ArticlePage;
