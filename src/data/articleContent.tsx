import React from 'react';

/* ------------------------------------------------------------------ */
/* Prose primitives — used inside article section bodies.              */
/* ------------------------------------------------------------------ */

const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[1.16rem] leading-[1.85] text-ink mb-7">{children}</p>
);

const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-display font-medium text-[1.3rem] leading-[1.25] tracking-[-0.01em] text-ink mt-10 mb-4">
    {children}
  </h3>
);

const Pull = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="my-11 border-l-2 border-brand pl-6">
    <p className="font-display text-[clamp(1.4rem,2.6vw,1.85rem)] leading-[1.35] tracking-[-0.01em] text-brand-deep">
      {children}
    </p>
  </blockquote>
);

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-brand underline decoration-brand/30 underline-offset-2 hover:decoration-brand transition-colors">
    {children}
  </a>
);

const UL = ({ children }: { children: React.ReactNode }) => (
  <ul className="mb-7 space-y-3">{children}</ul>
);

const LI = ({ children }: { children: React.ReactNode }) => (
  <li className="flex gap-3.5 text-[1.1rem] leading-[1.7] text-ink">
    <span className="mt-[14px] h-px w-4 shrink-0 bg-brand" />
    <span>{children}</span>
  </li>
);

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface ArticleSection {
  id: string;
  heading: string;
  body: React.ReactNode;
}

export interface ArticleContent {
  slug: string;
  dek: string;
  author: { name: string; role: string };
  /** ISO date (YYYY-MM-DD) for JSON-LD + article:published_time. */
  datePublished: string;
  /** Short <title> for SEO (the H1 headline can be longer). */
  seoTitle: string;
  /** Approximate word count, for Article structured data. */
  wordCount: number;
  /** SEO meta description (~150–160 chars). */
  description: string;
  keywords: string;
  ogImageAlt: string;
  section: string; // article:section / schema articleSection
  sections: ArticleSection[];
  related: string[];
}

/* ------------------------------------------------------------------ */
/* Flagship article                                                    */
/* ------------------------------------------------------------------ */

const thinkLikeAPublisher: ArticleContent = {
  slug: 'think-like-a-publisher',
  dek: 'Marketing rents attention. Publishing compounds it. For a firm whose entire product is judgment, that difference decides whether the best founders arrive already convinced — or never arrive at all.',
  author: { name: 'Krish Naidu', role: 'Founder, QuantikGrowth' },
  datePublished: '2026-06-18',
  seoTitle: 'Think like a publisher, not a marketer',
  wordCount: 1600,
  description:
    'Capital is a commodity; judgment is the product. Why venture firms that publish how they think — on a cadence — out-compound the ones that only market.',
  keywords:
    'venture capital content strategy, VC firm publishing, thought leadership for investors, venture firm SEO, content marketing for venture capital, how VCs attract founders',
  ogImageAlt: 'Essay: why a venture firm should think like a publisher, not a marketer.',
  section: 'Strategy',
  related: ['logo-wall-is-dead', 'what-founders-read'],
  sections: [
    {
      id: 'brochure',
      heading: 'The brochure and the archive',
      body: (
        <>
          <P>
            Most venture websites are built like brochures. There is a line about partnership, a grid of
            portfolio logos, a page of headshots, and a contact form. It is marketing in the oldest sense:
            a static claim about how good the firm is, addressed to no one in particular, refreshed once
            every few years when it starts to feel embarrassing. It informs. It does not persuade, and it
            certainly does not compound.
          </P>
          <P>
            A publisher behaves differently. A publisher ships — on a cadence, with a point of view, to an
            audience it is trying to earn rather than rent. Each thing it puts out is an asset that keeps
            working after it is published: it gets found in search, forwarded in DMs, quoted in other
            people's writing, and read by a founder at one in the morning three months later. The brochure
            and the archive are two different financial instruments. One depreciates. One appreciates.
          </P>
          <P>
            The firms that have understood this are not running content departments. They are doing
            something simpler and more durable: treating the firm's thinking as its most valuable output,
            and giving it somewhere permanent to live.
          </P>
        </>
      ),
    },
    {
      id: 'judgment',
      heading: 'Judgment is the product. Writing is the proof.',
      body: (
        <>
          <P>
            A venture firm does not sell capital. Capital is a commodity, and the founder you actually want
            already has three other term sheets. What a firm sells is judgment — the ability to see, earlier
            and more clearly than the market, which companies and which people compound. That is an
            invisible product. You cannot put it in a deck and you cannot photograph it.
          </P>
          <Pull>
            You cannot photograph judgment. You can only demonstrate it — and the most direct demonstration
            is sustained, specific writing about how you think.
          </Pull>
          <P>
            When a partner writes a sharp piece about why a category is mispriced, two things happen at once.
            Founders in that category recognise, before the first call, that this firm understands their
            world. And the firm builds a durable, searchable record of having held a view early — the closest
            thing to a track record you can show before the exits land. A claim that you have good judgment
            is marketing. A five-year archive of you exercising it in public is proof.
          </P>
        </>
      ),
    },
    {
      id: 'what-publishers-do',
      heading: 'What a publisher actually does',
      body: (
        <>
          <P>
            The word "publishing" makes partners picture a newsroom, a calendar, and a quota. It is simpler
            than that. Three habits separate a publisher from a firm that occasionally posts.
          </P>
          <H3>It owns its audience instead of renting it</H3>
          <P>
            A paid campaign rents attention from a platform; the moment you stop paying, it ends. A
            publisher builds something it owns — a domain that ranks, an archive that accumulates, a list of
            people who chose to hear from it. The asset stays on the firm's balance sheet, not the platform's.
          </P>
          <H3>It has a point of view</H3>
          <P>
            Brochures are careful to the point of saying nothing. Publishers take positions, because a
            position is what a reader can agree with, argue with, or remember. The firms worth talking to
            are the ones willing to be specific about what they believe and why.
          </P>
          <H3>It shows up on a cadence</H3>
          <P>
            Not volume — rhythm. One genuinely useful piece a month, sustained for two years, beats a burst
            of ten and then silence. Cadence is what turns scattered posts into a body of work.
          </P>
        </>
      ),
    },
    {
      id: 'compounding',
      heading: "Why publishing compounds and marketing doesn't",
      body: (
        <>
          <P>
            A campaign has a half-life measured in days. You spend, attention spikes, the spend stops, the
            attention decays. An essay behaves like an asset. It ranks in search for the question it answers
            and keeps ranking. It gets forwarded into the exact DMs you could never have bought your way
            into. It gets cited, and each citation is a link that makes the next piece rank a little more
            easily.
          </P>
          <Pull>
            The brochure depreciates the day it goes live. The published archive appreciates every day it
            stays up.
          </Pull>
          <P>
            This is also why publishing and on-page SEO are the same project, not two line items. An essay
            gives search something worth ranking; search delivers the essay to the precise founder it was
            written for. Do both and the archive becomes a quiet, always-on inbound channel — one that
            brings people to you already informed and already convinced, which is a very different
            conversation from a cold pitch.
          </P>
        </>
      ),
    },
    {
      id: 'website',
      heading: 'What this changes about the website',
      body: (
        <>
          <P>
            Take the publisher framing seriously and the site stops being a billboard and becomes a home for
            thinking. The writing is not a buried blog link in the footer; it is a first-class surface,
            designed to be read and easy to ship to. A single essay is built to keep paying out for years,
            not to be scrolled past on the way to the contact form.
          </P>
          <P>
            The portfolio changes too. A wall of logos proves only that money changed hands. Turn each
            position into a short argument — here is what we saw, here is why we moved, here is what happened
            — and the page starts demonstrating judgment instead of asserting it. That is the difference
            between <A href="/work">an investment case study and a logo</A>, and it is the thing a founder is
            actually trying to learn before they let you onto their cap table. We make that case at more
            length in <A href="/writing/logo-wall-is-dead">a separate piece on why the logo wall is dead</A>.
          </P>
        </>
      ),
    },
    {
      id: 'objection',
      heading: "But the partners don't have time to write",
      body: (
        <>
          <P>
            This is the real objection, and it is a fair one. The reason most firms don't publish isn't that
            they have nothing to say — partners say sharp, original things every day, in board meetings and
            on calls and over dinner. The reason is that turning a sharp thought into a finished article is a
            job nobody at the firm has time for. So the thinking stays in their heads, or goes to LinkedIn
            once a quarter and stops.
          </P>
          <P>
            The fix is to separate the two tasks. Having the insight and writing it up are different jobs,
            and only the first one requires a partner. The thinking can be captured in the most natural way
            possible — a two-minute voicenote after a meeting, a short video on the way to the airport — and
            the writing handed to someone whose actual job it is. The partner spends minutes; the firm
            publishes a finished article, and then the same idea is repurposed into the posts and threads
            that carry it across every platform.
          </P>
          <P>
            That is the entire premise of a <A href="/approach">content engine</A>: remove the part that
            costs partners time, and the cadence becomes sustainable. The bottleneck was never the ideas.
          </P>
        </>
      ),
    },
    {
      id: 'where-to-start',
      heading: 'Where a firm should start',
      body: (
        <>
          <P>
            Not with a content strategy deck. Start with the smallest version that is real.
          </P>
          <UL>
            <LI>Pick a cadence you can actually sustain — once a month is plenty, if you keep it.</LI>
            <LI>
              Write from real decisions, not trend takes. The pieces that compound are the ones only your
              firm could have written, because they came from something you actually did.
            </LI>
            <LI>
              Measure the right things. Not impressions — read-depth, search rankings for the questions you
              want to own, and whether better founders arrive already knowing what you think.
            </LI>
            <LI>Give it six to twelve months. Compounding is invisible right up until it isn't.</LI>
          </UL>
          <P>
            Get this right and the website stops introducing the firm and starts doing what the best partners
            do in a room: making the case, with specifics, before anyone has to ask for it. That is also,
            roughly, <A href="/writing/what-founders-read">what a founder reads before they take your call</A>
            {' '}— so it may as well be the strongest argument you have.
          </P>
        </>
      ),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Shorter companion pieces                                            */
/* ------------------------------------------------------------------ */

const logoWallIsDead: ArticleContent = {
  slug: 'logo-wall-is-dead',
  dek: 'A grid of portfolio logos proves you wrote a cheque. An investment case study proves you had a reason — and that the reason turned out to be right.',
  author: { name: 'Krish Naidu', role: 'Founder, QuantikGrowth' },
  datePublished: '2026-06-10',
  seoTitle: 'The logo wall is dead',
  wordCount: 180,
  description:
    'The logo wall tells a founder that money changed hands, nothing more. An investment case study shows how a firm decides — which is what founders actually want to learn.',
  keywords: 'venture portfolio page, investment case study, VC website design, logo wall, portfolio presentation',
  ogImageAlt: 'Essay: the logo wall is dead; long live the investment case study.',
  section: 'Design',
  related: ['think-like-a-publisher', 'what-founders-read'],
  sections: [
    {
      id: 'logo-vs-case-study',
      heading: 'What the logo cannot do',
      body: (
        <>
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
    },
  ],
};

const whatFoundersRead: ArticleContent = {
  slug: 'what-founders-read',
  dek: 'By the time a strong founder replies to your email, they have already decided what they think of you. Here is what they looked at to decide it.',
  author: { name: 'Krish Naidu', role: 'Founder, QuantikGrowth' },
  datePublished: '2026-05-20',
  seoTitle: 'What founders read before they call',
  wordCount: 190,
  description:
    'Strong founders do their diligence in reverse — four minutes on your site before they reply. Here is what they look for, and why most firms give them nothing to find.',
  keywords: 'founder diligence, what founders look for in investors, VC website, venture firm credibility',
  ogImageAlt: 'Essay: what founders actually read before they take your call.',
  section: 'Strategy',
  related: ['think-like-a-publisher', 'logo-wall-is-dead'],
  sections: [
    {
      id: 'diligence-in-reverse',
      heading: 'Diligence in reverse',
      body: (
        <>
          <P>
            The good ones do their diligence in reverse. Before they answer, they open a tab, type your
            firm's name, and spend four minutes deciding whether you are worth a call. They are not reading
            your tagline. They are looking for evidence that you understand the specific thing they are
            building.
          </P>
          <P>
            What they find is usually a portfolio grid and a contact form — which tells them nothing, so they
            fall back on warm intros and reputation. A firm that instead shows its thinking and its reasoning
            gives the founder something to react to, and turns a cold four minutes into the first half of a
            conversation.
          </P>
        </>
      ),
    },
  ],
};

export const articleContent: Record<string, ArticleContent> = {
  [thinkLikeAPublisher.slug]: thinkLikeAPublisher,
  [logoWallIsDead.slug]: logoWallIsDead,
  [whatFoundersRead.slug]: whatFoundersRead,
};
