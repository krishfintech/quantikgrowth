import React from 'react';
import { ArticleFigure, BarsChart, Callout, CompareCols, FlowDiagram, StatStrip } from '../components/site/ArticleFigures';

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
  dek: 'A grid of portfolio logos proves you wrote a cheque. An investment case study proves you had a reason — and that the reason turned out to be right. Here is how to build the second thing.',
  author: { name: 'Krish Naidu', role: 'Founder, QuantikGrowth' },
  datePublished: '2026-06-10',
  seoTitle: 'The logo wall is dead',
  wordCount: 1450,
  description:
    'The logo wall proves money changed hands, nothing more. An investment case study shows how a venture firm decides — and how to build that system into the site.',
  keywords: 'venture portfolio page, investment case study, VC website design, logo wall, portfolio presentation, how VCs win founders',
  ogImageAlt: 'Essay: the logo wall is dead; long live the investment case study.',
  section: 'Portfolio',
  related: ['think-like-a-publisher', 'what-founders-read'],
  sections: [
    {
      id: 'logo-problem',
      heading: 'What a wall of logos actually says',
      body: (
        <>
          <P>
            The logo wall is the most common element on a venture website and the least informative one on the
            page. It is a grid of companies you have funded, arranged for visual rhythm, and it communicates
            exactly one fact: money changed hands. That is it. It cannot tell a visitor which deal you fought
            three other funds to win and which one you backed into through a warm intro. It cannot separate the
            conviction bet you led from the small cheque you wrote to stay in the room.
          </P>
          <P>
            Worse, every firm's wall looks the same. Open ten venture sites and you will see ten grids of
            tasteful monochrome logos, indistinguishable but for the names. The element that is supposed to be
            your proof of quality is the element that makes you look identical to everyone else. For a business
            whose entire product is being different — having a sharper view, earlier — that is an expensive
            kind of sameness.
          </P>
          <ArticleFigure caption="Same page real estate, two completely different jobs. One asserts; the other demonstrates.">
            <CompareCols
              left={{ title: 'A logo wall', items: ['Proves a cheque cleared', 'Looks like every other firm', 'Says nothing about how you decide', 'Read in half a second, forgotten in one'] }}
              right={{ title: 'An investment case study', items: ['Proves judgment, not just spend', 'Sounds like only your firm', 'Shows the thesis behind the cheque', 'Read for two minutes, remembered for a meeting'] }}
            />
          </ArticleFigure>
        </>
      ),
    },
    {
      id: 'what-founders-want',
      heading: 'Founders are buying judgment, not capital',
      body: (
        <>
          <P>
            Capital is a commodity. The founder you actually want — the one with options — already has multiple
            term sheets, and the money in each is roughly the same colour. What they are choosing between is
            not the cheque. It is the partner attached to it: whose judgment they trust, who understands the
            specific thing they are building, who will be useful when the company is on fire at 11pm.
          </P>
          <Pull>A founder cannot learn any of that from a grid of logos. They can only learn it from the story behind one.</Pull>
          <P>
            That is the gap a logo wall leaves wide open, and it is the gap a competitor with better-told work
            walks straight through. When a founder is doing their quiet diligence — and the good ones always
            are, which we wrote about in{' '}
            <A href="/writing/what-founders-read">what founders actually read before they take your call</A> —
            they are hunting for evidence of how you think. Give them a wall, and they leave with nothing.
          </P>
        </>
      ),
    },
    {
      id: 'anatomy',
      heading: 'The anatomy of an investment case study',
      body: (
        <>
          <P>
            A good investment case study is not a press release and it is not a brag. It has a spine — three
            parts, in order — and the order is the point. It walks a reader through a decision so they can
            judge the quality of the judgment.
          </P>
          <ArticleFigure caption="The spine of every case study worth reading. Skip a part and it collapses back into a logo.">
            <FlowDiagram
              steps={[
                { label: 'The thesis', sub: 'What you saw before the market did' },
                { label: 'The partnership', sub: 'What you actually did after the cheque' },
                { label: 'The outcome', sub: 'What happened — told honestly' },
              ]}
            />
          </ArticleFigure>
          <H3>The thesis</H3>
          <P>
            Start before the investment. What did you believe about this category, this team, this moment, that
            other people did not? This is where your taste lives. A founder reading it should think: that is a
            non-obvious view, and it was right. The thesis is the part a logo can never carry, because the logo
            only exists after the bet paid off.
          </P>
          <H3>The partnership</H3>
          <P>
            Then the unglamorous middle: what you did once the money was in. The intro that mattered, the hire
            you helped close, the hard board conversation, the down round you helped them survive. Founders talk
            to each other, and they ask one question above all others — what are these people like when things
            go wrong? Answer it here, with specifics.
          </P>
          <H3>The outcome</H3>
          <P>
            Finally, what happened — and the strongest case studies are honest about it, including the ones that
            are still unfolding or that didn't go to plan. Honesty about a mixed outcome is more persuasive than
            a wall of wins, because it tells the reader you will be honest with them too.
          </P>
        </>
      ),
    },
    {
      id: 'objection',
      heading: '“But our deals are confidential”',
      body: (
        <>
          <P>
            This is the first objection, every time, and it is a fair one. Some of what makes a deal interesting
            is genuinely sensitive. But "confidential" is rarely a reason to say nothing — it is a reason to
            choose carefully what you say. The thesis is usually yours to tell. The partnership can be told at
            the level of kind, not number. And founders, asked well and given approval over the words, are
            often glad to be quoted about a partner who showed up for them.
          </P>
          <P>
            In practice you will have a spectrum: a few named, founder-approved studies that do the heavy
            lifting; a few told at thesis level without figures; and the rest left as a quieter list. That is
            plenty. Three great case studies outperform thirty logos, because depth is what builds conviction
            and breadth is what builds a directory.
          </P>
        </>
      ),
    },
    {
      id: 'build-the-system',
      heading: 'Build it as a system, not a one-off',
      body: (
        <>
          <P>
            The reason firms don't have case studies is not that the stories don't exist — it's that writing one
            well is a job nobody owns, so it never gets done. The fix is to make it a repeatable system rather
            than a heroic effort: a template with the same spine every time, a site built so a new study can be
            published without a designer, and a light cadence so the body of proof grows as the wins land.
          </P>
          <P>
            That is exactly the work we do — a{' '}
            <A href="/work">website built around the portfolio as stories</A> rather than a grid, and a content
            engine that turns a partner's two-minute voicenote about a deal into a finished, publishable case
            study. The partner remembers the deal out loud; we do the writing and the structure.
          </P>
          <Callout>
            A logo says you were there. A case study says why you were right to be — and that is the only thing a
            founder with options is actually trying to find out. If your portfolio is still a grid,{' '}
            <A href="/contact">let's turn it into a set of arguments.</A>
          </Callout>
        </>
      ),
    },
  ],
};

const whatFoundersRead: ArticleContent = {
  slug: 'what-founders-read',
  dek: 'By the time a strong founder replies to your email, they have already decided what they think of you. Here is the four minutes they spent deciding it — and how to win them.',
  author: { name: 'Krish Naidu', role: 'Founder, QuantikGrowth' },
  datePublished: '2026-05-20',
  seoTitle: 'What founders read before they call',
  wordCount: 1400,
  description:
    'Strong founders do their diligence in reverse — four minutes on your site before they reply. Here is what they look for, why most firms give them nothing, and how to fix it.',
  keywords: 'founder diligence, what founders look for in investors, VC website, venture firm credibility, how VCs attract founders',
  ogImageAlt: 'Essay: what founders actually read before they take your call.',
  section: 'Strategy',
  related: ['think-like-a-publisher', 'logo-wall-is-dead'],
  sections: [
    {
      id: 'reverse-diligence',
      heading: 'The good ones do their diligence in reverse',
      body: (
        <>
          <P>
            Here is the uncomfortable truth about your inbound: by the time a strong founder replies to your
            email, they have already decided what they think of you. The decision happened before the reply,
            in a tab you never saw — your own website — and you weren't in the room to influence it.
          </P>
          <P>
            Founders with options run their diligence in reverse. They don't wait for the call to evaluate you;
            they evaluate you first, decide whether you're worth the call, and only then respond. The whole
            audition happens on your site, in a few minutes, while you assume the ball is in their court.
          </P>
          <ArticleFigure caption="The window is small and the stakes are not. Most of the decision is made in the time it takes to make a coffee.">
            <StatStrip
              items={[
                { value: '~10s', label: 'to form a first impression of the firm' },
                { value: '~4 min', label: 'a serious founder spends before replying' },
                { value: '1 tab', label: 'where the decision actually gets made' },
                { value: '0', label: 'of it you get to see or influence live' },
              ]}
            />
          </ArticleFigure>
        </>
      ),
    },
    {
      id: 'the-four-minutes',
      heading: 'What happens in those four minutes',
      body: (
        <>
          <P>
            It is a predictable little journey, and once you have watched enough founders describe it, you can
            map it almost step by step. They search your name, land on the homepage, scan for relevance, dig
            into one thing, and decide.
          </P>
          <ArticleFigure caption="The path is consistent. Each step is a place you either earn the next click or lose it.">
            <FlowDiagram
              steps={[
                { label: 'Search you', sub: 'Your name, your fund, the partner' },
                { label: 'Scan the homepage', sub: '“Do they get my world?”' },
                { label: 'Check the portfolio', sub: 'Anyone like me here?' },
                { label: 'Read one thing', sub: 'A case study or an essay' },
                { label: 'Decide', sub: 'Reply, ignore, or ask around' },
              ]}
            />
          </ArticleFigure>
          <P>
            Notice how much of this depends on things a generic site simply does not have: a homepage that
            signals a point of view, a portfolio that reads like stories rather than a grid, and at least one
            piece of real thinking to dig into. Miss any of them and the founder bounces to the next step early
            — usually straight to asking a mutual contact what you're "actually like," which means you've handed
            the decision to someone else.
          </P>
        </>
      ),
    },
    {
      id: 'what-they-look-for',
      heading: 'What they are actually looking for',
      body: (
        <>
          <P>
            Strip it down and a founder is testing four things, roughly in this order of weight. None of them
            is your tagline.
          </P>
          <BarsChart
            title="Where a founder's attention goes"
            bars={[
              { label: 'Do you understand my specific space?', value: 92, highlight: true },
              { label: 'Do you have a real point of view?', value: 80, highlight: true },
              { label: 'Is there proof of good judgment?', value: 70 },
              { label: 'Would you be a good partner when it’s hard?', value: 64 },
            ]}
          />
          <div className="mt-7" />
          <P>
            Relevance comes first by a distance. A founder building in climate hardware is not impressed that you
            funded a famous consumer app; they want to see that you have thought about their world. A point of
            view comes next — a firm that believes something specific is one a founder can argue with, agree
            with, and remember. Proof of judgment and partner quality round it out, and both are things a logo
            wall actively fails to provide.
          </P>
        </>
      ),
    },
    {
      id: 'why-most-fail',
      heading: 'Why most firms give them nothing',
      body: (
        <>
          <P>
            The median venture site answers none of the four. It opens with a line about "partnering with
            exceptional founders," shows a grid of logos, lists the team, and ends in a contact form. There is
            nothing to react to, nothing that signals you understand a particular space, and frequently the page
            is slow enough that a founder on their phone between meetings simply leaves.
          </P>
          <ArticleFigure caption="The gap between what a site offers and what a founder needs is where your inbound quietly leaks away.">
            <CompareCols
              left={{ title: 'What most sites offer', items: ['A generic partnership tagline', 'A grid of logos', 'A team page and a form', 'No writing, and a slow load'] }}
              right={{ title: 'What a strong founder needs', items: ['Evidence you understand their space', 'A point of view they can react to', 'A case study that proves judgment', 'A fast page they can read on a phone'] }}
            />
          </ArticleFigure>
        </>
      ),
    },
    {
      id: 'the-fix',
      heading: 'Give them something to react to',
      body: (
        <>
          <P>
            The fix is not a redesign for its own sake; it is building the site to win that four-minute
            audition. A homepage that states what you believe. A portfolio told as{' '}
            <A href="/writing/logo-wall-is-dead">investment case studies instead of logos</A>. At least one
            sharp, recent piece of writing in your voice. And the whole thing fast and findable, so the founder
            lands on it in the first place.
          </P>
          <Pull>A cold four minutes on a great site becomes the first half of a conversation. On a generic one, it becomes a reason to ask someone else about you.</Pull>
          <P>
            Findable matters as much as good: if your pages don't come up when a founder searches your space,
            the audition never starts. That is the case we make for{' '}
            <A href="/approach">website design, on-page SEO and a content engine together</A> — be found, then
            be persuasive, then keep publishing so there is always something fresh to react to.
          </P>
          <Callout>
            Your website is doing your most important meeting without you in the room. The only question is
            whether it's making your case — or quietly losing it.{' '}
            <A href="/contact">Let's make sure it's the first one.</A>
          </Callout>
        </>
      ),
    },
  ],
};

const whatHniInvestorsRead: ArticleContent = {
  slug: 'what-hni-investors-read',
  dek: 'Performance gets you onto the shortlist. The website decides whether a wealthy investor believes you can be trusted with the next decade of their capital. Here is what they read, and what quietly loses them.',
  author: { name: 'Krish Naidu', role: 'Founder, QuantikGrowth' },
  datePublished: '2026-06-12',
  seoTitle: 'What an HNI reads before trusting a PMS',
  wordCount: 1480,
  description:
    'A wealthy investor researches a PMS firm before the first call. Strong returns shortlist you; the website decides whether you survive it. What builds trust, and what breaks it.',
  keywords: 'PMS firm website, HNI investor research, SEBI registered PMS, portfolio management trust, wealth management marketing India',
  ogImageAlt: 'Essay: what an HNI reads before they trust a PMS firm.',
  section: 'Strategy',
  related: ['think-like-a-publisher', 'seo-for-pms-firms'],
  sections: [
    {
      id: 'trust-before-call',
      heading: 'Trust is decided before the first call',
      body: (
        <>
          <P>
            An HNI investor with serious capital does not pick up the phone cold. They hear your name — from a
            friend at a dinner, an advisor, a search result — and then they do the natural thing: they go and
            look you up. By the time they call, if they call, they have already formed a view. Your website is
            where that view gets formed, and you are not in the room while it happens.
          </P>
          <ArticleFigure caption="The judgment is quiet, fast, and largely complete before any conversation begins.">
            <StatStrip
              items={[
                { value: '~10s', label: 'to decide if you look institutional' },
                { value: '1 search', label: 'between hearing your name and judging it' },
                { value: '₹50L+', label: 'the decision they’re weighing up' },
                { value: '10 yrs', label: 'of trust they’re deciding whether to extend' },
              ]}
            />
          </ArticleFigure>
        </>
      ),
    },
    {
      id: 'returns-not-enough',
      heading: 'Strong returns get you shortlisted, not hired',
      body: (
        <>
          <P>
            This is the part most firms get wrong. They assume the numbers do the selling — that a good track
            record is self-evidently persuasive. It isn't. Returns get you onto the shortlist; they are the
            price of being considered at all. What gets you the mandate is something the numbers cannot prove on
            their own.
          </P>
          <Pull>The investor is not only asking “are the returns good?” They are asking “is this firm durable, disciplined, and safe with the next decade of my wealth?”</Pull>
          <P>
            Those are trust questions, not performance questions, and a brochure site from 2016 answers them
            before a single figure is read — usually with a quiet "no." A stock photo of a glass tower, a stale
            "About Us," and a phone number tell a wealthy, careful person that the firm is sub-scale, whatever
            the returns say. The site is the institution they can see.
          </P>
        </>
      ),
    },
    {
      id: 'three-things',
      heading: 'The three things the page has to communicate',
      body: (
        <>
          <P>
            In the first few seconds, a serious prospect is checking for three signals. Get them right and you
            earn the time to make your fuller case. Miss them and the numbers never get a fair hearing.
          </P>
          <ArticleFigure caption="Three signals, in order. Each one buys you the attention to deliver the next.">
            <FlowDiagram
              steps={[
                { label: 'Legitimacy', sub: 'SEBI-registered — and what that protects' },
                { label: 'Clarity', sub: 'A strategy that is explicable, not a black box' },
                { label: 'The people', sub: 'Credible, present, accountable' },
              ]}
            />
          </ArticleFigure>
          <H3>Legitimacy you make legible</H3>
          <P>
            Being a SEBI-registered portfolio manager is your single strongest trust asset — and most firms
            mention it in the footer like a formality. Lead with it, and explain in plain words what it means
            for the investor: the custody, the reporting, the regulatory floor beneath the relationship.
          </P>
          <H3>A strategy you can actually explain</H3>
          <P>
            Wealthy investors are wary of black boxes, and rightly so. A page that explains how you select, how
            you think about risk, and what you will and won't do is more reassuring than any performance chart.
            Discipline, described clearly, reads as competence.
          </P>
          <H3>People they can see</H3>
          <P>
            Money is given to people, not entities. The investor wants to know who is managing it, what shaped
            their judgment, and that they are present and accountable. A real point of view from a named fund
            manager does more for trust than any amount of polished corporate copy.
          </P>
        </>
      ),
    },
    {
      id: 'what-breaks-trust',
      heading: 'What quietly breaks trust',
      body: (
        <>
          <P>
            Just as important as what builds trust is what erodes it without you noticing. Wealthy investors are
            pattern-matchers; small signals carry disproportionate weight, because the downside of a wrong
            choice is large and slow to reverse.
          </P>
          <ArticleFigure caption="None of these is about returns. All of them change whether the returns get believed.">
            <CompareCols
              left={{ title: 'Quietly breaks trust', items: ['A stock photo and a single PDF', 'Footer-only mention of SEBI status', 'No named, visible fund managers', 'Performance claims that feel non-compliant'] }}
              right={{ title: 'Quietly builds trust', items: ['Strategy explained in plain words', 'Registration and process, front and centre', 'Fund managers with a real point of view', 'Confident, compliant, return-claim-free copy'] }}
            />
          </ArticleFigure>
        </>
      ),
    },
    {
      id: 'compliance',
      heading: 'Credible and compliant are the same project',
      body: (
        <>
          <P>
            Here is the reassuring part: doing this well does not mean walking up to the compliance line. The
            most trust-building content is also the safest — education, philosophy, and process rather than
            performance promises. You build credibility precisely by giving information and analysis rather than
            advice; by being the firm that explains, not the one that pitches a number.
          </P>
          <P>
            That is the same instinct behind treating your site as a place that publishes rather than markets,
            which we argue in{' '}
            <A href="/writing/think-like-a-publisher">why a firm should think like a publisher</A>. And it is why
            the AI Investor Relations Concierge we build for PMS firms is designed to answer prospective
            investors in your voice while staying strictly to information and analysis — never buy/sell/hold,
            never a return promise.
          </P>
        </>
      ),
    },
    {
      id: 'the-fix',
      heading: 'Make the site your most patient relationship manager',
      body: (
        <>
          <P>
            Done properly, the site stops being a digital business card and becomes the firm's most patient
            relationship manager — making the case for your discipline and your track record while the team is
            focused on the markets, answering the questions a prospect has at 11pm, and signalling
            institutional quality before a number is read.
          </P>
          <P>
            That is the work: a{' '}
            <A href="/approach">credibility-first website, on-page SEO, a content engine and the AI concierge</A>,
            built to earn trust the way a great RM does — consistently, in your voice, within the rules.
          </P>
          <Callout>
            Your returns earned the shortlist. Whether you win the mandate is being decided right now, on a page
            you can't see. <A href="/contact">Let's make sure it's making your case.</A>
          </Callout>
        </>
      ),
    },
  ],
};

const seoForPmsFirms: ArticleContent = {
  slug: 'seo-for-pms-firms',
  dek: 'When an HNI searches for a way to grow long-term wealth, a directory ranks for your category — and sells your prospect as a lead. On-page SEO fixes who gets found. Here is how, and how to do it within SEBI’s guardrails.',
  author: { name: 'Krish Naidu', role: 'Founder, QuantikGrowth' },
  datePublished: '2026-05-28',
  seoTitle: 'On-page SEO for PMS firms',
  wordCount: 1500,
  description:
    'On-page SEO for PMS firms: why directories rank for your category, what on-page SEO does, the queries HNIs type, and how to rank within SEBI’s guardrails.',
  keywords: 'SEO for PMS firms, portfolio management SEO India, how PMS firms get found, wealth management SEO, HNI search, SEBI compliant content',
  ogImageAlt: 'Essay: on-page SEO for PMS firms.',
  section: 'SEO',
  related: ['think-like-a-publisher', 'what-hni-investors-read'],
  sections: [
    {
      id: 'directories-rank',
      heading: 'Right now, a directory ranks for your category',
      body: (
        <>
          <P>
            Run the experiment yourself. Type "best PMS for long-term wealth" or "portfolio management for HNIs
            in India" into Google and look at the first page. It is aggregators, listicles, and comparison
            directories — pages built by businesses whose entire model is to capture your prospective investor
            and sell them on as a lead, often to several firms at once. The firm doing the actual investing, the
            one with the real track record, is nowhere to be seen.
          </P>
          <ArticleFigure caption="Illustrative of a typical first page for a high-intent wealth query. The work gets done by one firm; the traffic goes to another.">
            <BarsChart
              title='Who ranks for “best PMS for long-term wealth”'
              bars={[
                { label: 'Comparison directory', value: 94 },
                { label: 'Listicle / “top 10” post', value: 82 },
                { label: 'Lead-gen aggregator', value: 71 },
                { label: 'A SEBI-registered PMS firm (you)', value: 9, highlight: true },
              ]}
            />
          </ArticleFigure>
          <P>
            Every one of those clicks is a wealthy person actively looking for what you do, handed to an
            intermediary because your pages aren't there to receive them. It is the most qualified demand you
            will ever have access to, leaking to a directory.
          </P>
        </>
      ),
    },
    {
      id: 'not-branding',
      heading: 'This is an on-page problem, not a branding one',
      body: (
        <>
          <P>
            It is tempting to read all this as a branding issue — "we need more awareness." It isn't. The
            directories don't outrank you because they're better-known; they outrank you because they have
            pages that answer the exact question being asked, written and structured so a search engine can
            read and trust them. They did the unglamorous on-page work. You didn't.
          </P>
          <P>
            Most PMS sites give search engines almost nothing to work with: a single "Strategy" page, an "About
            Us," a contact form, and a PDF factsheet that Google can barely read. There is no page that answers
            "how does a PMS differ from a mutual fund," no page that explains your approach in the language a
            prospect uses, nothing mapped to a real query. With nothing to rank, you don't rank. It is that
            mechanical.
          </P>
        </>
      ),
    },
    {
      id: 'what-onpage-does',
      heading: 'What on-page SEO actually does for a PMS firm',
      body: (
        <>
          <P>
            On-page SEO is simply the discipline of making your own pages the best possible answer to the
            questions your investors ask — and making them legible to search engines. For a PMS firm it pays off
            in three distinct ways.
          </P>
          <ArticleFigure caption="Three returns on the same unglamorous work. None of them depends on a bigger ad budget.">
            <CompareCols
              left={{ title: 'Without it', items: ['Directories own your category', 'Inbound depends on referrals', 'Your strategy is invisible to search', 'You pay for every lead, forever'] }}
              right={{ title: 'With it', items: ['You rank for your own terms', 'Inbound arrives already qualified', 'Your thinking is the first result', 'An owned asset that compounds free'] }}
            />
          </ArticleFigure>
          <P>
            The middle point is the one to dwell on: an investor who found you by searching "portfolio
            management for HNIs" has, by definition, gone looking for exactly what you offer. That is the most
            qualified enquiry there is — warmer than any cold list, and it cost you nothing per click once the
            page is ranking.
          </P>
        </>
      ),
    },
    {
      id: 'the-queries',
      heading: 'The queries your investors actually type',
      body: (
        <>
          <P>
            Good on-page SEO starts by mapping the real journey a prospect takes through search — from learning,
            to comparing, to choosing — and building a page that meets them at each stage.
          </P>
          <ArticleFigure caption="Three intents, three kinds of page. Together they cover the whole path from curiosity to mandate.">
            <FlowDiagram
              steps={[
                { label: 'Learning', sub: '“PMS vs mutual funds”, “what is a PMS”' },
                { label: 'Comparing', sub: '“best PMS for long-term wealth”' },
                { label: 'Choosing', sub: 'your firm name, your strategy' },
              ]}
            />
          </ArticleFigure>
          <P>
            Each intent wants a different page. The learner wants a clear, genuinely useful explainer — and if
            yours is the best one, you have earned their trust at the very start of their journey. The comparer
            wants an honest, confident account of your approach. The chooser wants your strategy and process,
            findable and fast. Build all three and you are present at every step instead of just hoping for a
            referral at the end.
          </P>
        </>
      ),
    },
    {
      id: 'compounds-with-content',
      heading: 'SEO and content are one project, not two',
      body: (
        <>
          <P>
            Here is where it compounds. Every one of those pages is also a piece of content — and every piece of
            content your fund managers produce is another page that can rank for another real question. SEO
            gives your content an audience; content gives your SEO something worth ranking. Treat them as one
            system and the whole thing snowballs.
          </P>
          <Pull>A factsheet ranks for nothing. A fund manager’s clear answer to a question a thousand investors are typing ranks for years.</Pull>
          <P>
            That is exactly what the{' '}
            <A href="/approach">content engine</A> is for: a manager records a five-minute voicenote answering a
            real investor question, and it becomes a clean, compliance-aware article — another page in the
            search index, working for you while the team is in the markets.
          </P>
        </>
      ),
    },
    {
      id: 'compliance-seo',
      heading: 'Ranking without overpromising',
      body: (
        <>
          <P>
            The reassuring truth is that the content that ranks best is also the content that is safest. Search
            rewards genuinely useful, educational pages — explainers, philosophy, process — which is precisely
            the content that stays well within SEBI's guardrails. You rank by teaching, not by promising
            returns. Information and analysis outrank a sales pitch, and they keep you compliant at the same
            time.
          </P>
          <Callout>
            The most qualified investors in the country are searching for what you do — and a directory is
            collecting them. On-page SEO, done within the rules, is how you collect them instead.{' '}
            <A href="/contact">Let's get your firm in front of them.</A>
          </Callout>
        </>
      ),
    },
  ],
};

export const articleContent: Record<string, ArticleContent> = {
  [thinkLikeAPublisher.slug]: thinkLikeAPublisher,
  [logoWallIsDead.slug]: logoWallIsDead,
  [whatFoundersRead.slug]: whatFoundersRead,
  [whatHniInvestorsRead.slug]: whatHniInvestorsRead,
  [seoForPmsFirms.slug]: seoForPmsFirms,
};
