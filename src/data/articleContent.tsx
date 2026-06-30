import React from 'react';
import { Callout } from '../components/site/ArticleFigures';
import {
  ContentEnginePipeline,
  DiscoveryJourney,
  EvaluationFlow,
  FiveSecondsTimeline,
  LinearVsCompounding,
  LogoWallToStory,
  PresenceCeilingChart,
  SubstancePresentationGap,
} from '../components/site/ArticleGraphics';

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
  /** The article's own opening graphic, shown beneath the header. */
  heroFigure?: React.ReactNode;
  /** Force the sticky table of contents (the long mega essay). Defaults off. */
  toc?: boolean;
}

/* ================================================================== */
/* ARTICLE 1 — PMS — The growth ceiling most PMS firms never see        */
/* ================================================================== */

const pmsGrowthCeiling: ArticleContent = {
  slug: 'pms-growth-ceiling',
  dek: 'Most boutique PMS firms hit an invisible ceiling on AUM growth. It isn’t performance — it’s presence. Here is why the ceiling forms, and the three moves that lift it.',
  author: { name: 'Krish Naidu', role: 'Founder, QuantikGrowth' },
  datePublished: '2026-06-22',
  seoTitle: 'The growth ceiling most PMS firms never see',
  wordCount: 560,
  description:
    'Most boutique PMS firms hit an invisible ceiling on AUM growth. It isn’t performance — it’s presence. Here’s why it forms, and the three moves that lift it.',
  keywords:
    'PMS AUM growth, boutique PMS marketing, HNI research, portfolio management SEO India, PMS digital presence, SEBI registered PMS website',
  ogImageAlt: 'A line chart: returns alone plateau at a presence ceiling, while returns plus digital presence keep climbing.',
  section: 'Growth',
  related: ['pms-invisible-to-inevitable', 'revolutionizing-investment-firm-presence'],
  heroFigure: <PresenceCeilingChart />,
  sections: [
    {
      id: 'ceiling',
      heading: '',
      body: (
        <>
          <P>
            Every boutique PMS eventually meets an invisible ceiling — a point where AUM growth stalls even
            though the investing hasn’t. Talented manager, real edge, a track record that deserves to
            compound. And yet the inflows slow.
          </P>
          <P>
            The instinct is to blame the market, or fees, or distribution. The real bottleneck is usually
            quieter: the firm has outgrown its own digital presence.
          </P>
          <P>
            Here’s why that caps growth. An HNI — or, more often, their advisor or family office — researches a
            firm before a single rupee moves. If the firm is invisible in search, or lands them on a website
            that looks a decade behind the quality of the work, it never enters serious consideration. The
            returns are irrelevant if the firm is never evaluated in the first place. Growth gets capped not by
            alpha, but by reach and trust.
          </P>
          <P>That ceiling lifts in three moves.</P>

          <H3>A website that reads as institutional as the work</H3>
          <P>
            The first impression has to match the substance. A clear philosophy, the people behind it, an
            honest treatment of risk — the things that turn a curious prospect into a confident one.
          </P>

          <H3>On-page SEO, so the firm is found</H3>
          <P>
            When an HNI searches the category, the strategy, or the firm’s own name, you want to be there —
            credible and unmissable — not buried under competitors’ ads on your own brand.
          </P>

          <H3>A content engine, so the thinking compounds</H3>
          <P>
            Referrals are linear; discoverable authority compounds. When the manager’s views show up
            consistently — articles, commentary, social — the firm accumulates mindshare instead of relying on
            word of mouth alone. That is the entire idea behind a{' '}
            <A href="/approach">content engine</A>: capture the thinking that already happens, and let it work
            for years.
          </P>

          <P>
            The shift this creates is structural. A firm that’s findable, credible, and consistently visible
            starts converting inbound it never used to see — advisors who discovered it through a piece of
            writing, HNIs who searched and came away convinced. The trajectory bends upward because the firm is
            finally being evaluated as often as its performance deserves.
          </P>

          <Pull>Your returns earn the right to grow. Your presence decides whether you actually do.</Pull>

          <Callout>
            If your AUM has plateaued while your performance hasn’t, the ceiling is almost certainly presence,
            not alpha. <A href="/contact">Let’s lift it.</A>
          </Callout>
        </>
      ),
    },
  ],
};

/* ================================================================== */
/* ARTICLE 2 — PMS — From invisible to inevitable                       */
/* ================================================================== */

const pmsInvisibleToInevitable: ArticleContent = {
  slug: 'pms-invisible-to-inevitable',
  dek: 'Some boutique PMS firms attract HNIs effortlessly; others chase every rupee. The difference is rarely performance — it’s a system that makes a firm easy to discover, trust, and remember.',
  author: { name: 'Krish Naidu', role: 'Founder, QuantikGrowth' },
  datePublished: '2026-06-18',
  seoTitle: 'From invisible to inevitable',
  wordCount: 560,
  description:
    'Some boutique PMS firms attract HNIs effortlessly; others chase every rupee. The difference is rarely performance — it’s a system. Here is the system.',
  keywords:
    'PMS lead generation, HNI discovery journey, PMS website trust, content engine for PMS, AI investor relations concierge, portfolio management marketing India',
  ogImageAlt: 'A five-stage HNI discovery path — Search, Website, Trust signals, Conversation, Allocation — with drop-off markers showing where firms lose people.',
  section: 'Trust',
  related: ['pms-growth-ceiling', 'revolutionizing-investment-firm-presence'],
  heroFigure: <DiscoveryJourney />,
  sections: [
    {
      id: 'system',
      heading: '',
      body: (
        <>
          <P>
            Some boutique firms seem to attract serious investors effortlessly. Others, with equal talent,
            chase every mandate. The difference is rarely the portfolio. It’s whether the firm has built a
            system that makes it easy to discover, trust, and remember.
          </P>
          <P>
            It helps to see how an HNI actually arrives at a firm. They search — a strategy, a category, a name
            a friend mentioned. They land on the website. They test it for trust signals. If it holds, they
            reach out. Eventually, they allocate. Most firms break that chain early: invisible in search, or a
            site that fails the trust test in seconds.
          </P>
          <P>Here’s the system that keeps the chain intact.</P>

          <H3>Be findable</H3>
          <P>
            On-page SEO plus a complete Google Business Profile, so the firm shows up — credibly — the moment
            someone looks.
          </P>

          <H3>Convert the first impression</H3>
          <P>
            An institutional website that states the philosophy clearly, shows the people, and talks about risk
            like adults. This is where “interested” becomes “I trust them.”
          </P>

          <H3>Stay top of mind</H3>
          <P>
            A content engine turns the manager’s thinking — captured as quick voicenotes — into articles and
            social posts. Over months, the firm shows up everywhere a prospective HNI looks, shifting from
            “who?” to “I keep seeing them, and they clearly know their stuff.”
          </P>

          <H3>Capture interest at its peak</H3>
          <P>
            A clear path to a conversation — and, for PMS firms, an AI investor-relations concierge that answers
            diligence questions around the clock, in the firm’s voice, strictly within compliance lines:
            analysis, never advice.
          </P>

          <P>
            None of this is luck. Each piece compounds: every article is a permanent asset, every trust signal
            lowers friction, every search that resolves in your favour widens the funnel. Do it consistently
            and a good firm becomes impossible to overlook. It is the same growth ceiling we describe in{' '}
            <A href="/writing/pms-growth-ceiling">the growth ceiling most PMS firms never see</A> — lifted, on
            purpose.
          </P>

          <Pull>Inevitability is just a system, run patiently.</Pull>

          <Callout>
            A good firm should never have to chase a mandate it deserves.{' '}
            <A href="/contact">Let’s build the system that makes yours inevitable.</A>
          </Callout>
        </>
      ),
    },
  ],
};

/* ================================================================== */
/* ARTICLE 3 — VC — The first five seconds                              */
/* ================================================================== */

const vcFirstFiveSeconds: ArticleContent = {
  slug: 'vc-first-five-seconds',
  dek: 'A founder decides whether to take your fund seriously in about five seconds — long before the first call, and almost entirely on your online presence. Here is what wins them.',
  author: { name: 'Krish Naidu', role: 'Founder, QuantikGrowth' },
  datePublished: '2026-06-24',
  seoTitle: 'The first five seconds',
  wordCount: 520,
  description:
    'A founder decides whether to take your fund seriously in about five seconds — and almost none of it is about your returns. Here’s how to win them.',
  keywords:
    'VC deal flow, founder first impression, venture firm website, VC digital presence, how VCs attract founders, venture firm SEO',
  ogImageAlt: 'A five-second timeline of what a founder registers about a fund online, from “does this look serious?” to “are these my kind of people?”',
  section: 'Strategy',
  related: ['vc-portfolio-best-salesperson', 'revolutionizing-investment-firm-presence'],
  heroFigure: <FiveSecondsTimeline />,
  sections: [
    {
      id: 'five-seconds',
      heading: '',
      body: (
        <>
          <P>
            A founder decides whether to take your fund seriously in about five seconds — long before the first
            call, and almost entirely on your online presence.
          </P>
          <P>
            Deal flow is a competition for the attention of the best founders, and the best founders research
            relentlessly. Your fund’s digital presence is the first filter they run, usually without telling
            you. Win those seconds and the right founders lean in. Lose them and you’re working twice as hard
            for half the access.
          </P>
          <P>What actually wins the five seconds isn’t size — it’s clarity:</P>
          <UL>
            <LI>
              A thesis stated plainly — what you believe and what you won’t touch — so a founder instantly knows
              whether you get their world.
            </LI>
            <LI>
              A portfolio told as stories, not a logo wall. The reason you backed a company early is signal; a
              grid of logos is noise.
            </LI>
            <LI>Partners who read like people a founder would want in their corner through the hard years.</LI>
            <LI>Restrained, confident design — the quiet signal that serious people are behind the fund.</LI>
          </UL>
          <P>
            This is where the right digital infrastructure changes everything downstream. A site that nails the
            first impression, <A href="/approach">SEO that puts you in front of founders and LPs</A> when they
            search, and a content engine that turns your partners’ thinking into visible authority — together
            they lift the top of your funnel, where a small improvement compounds into materially better deal
            flow and easier LP conversations.
          </P>

          <Pull>You can’t outsource taste. But you can make yours obvious in five seconds.</Pull>

          <Callout>
            Your fund is being judged right now, on a page you can’t see, by exactly the founders you want.{' '}
            <A href="/contact">Let’s make those five seconds count.</A>
          </Callout>
        </>
      ),
    },
  ],
};

/* ================================================================== */
/* ARTICLE 4 — VC — Your portfolio is your best salesperson            */
/* ================================================================== */

const vcPortfolioBestSalesperson: ArticleContent = {
  slug: 'vc-portfolio-best-salesperson',
  dek: 'Most funds display their portfolio as a wall of logos. The best funds turn that same portfolio into their most persuasive salesperson — proof of judgment, not a grid of names.',
  author: { name: 'Krish Naidu', role: 'Founder, QuantikGrowth' },
  datePublished: '2026-06-20',
  seoTitle: 'Your portfolio is your best salesperson',
  wordCount: 520,
  description:
    'Most funds display their portfolio as a wall of logos. The best funds turn it into their most persuasive sales asset — proof of judgment, not a grid of names.',
  keywords:
    'VC portfolio page, investment case study, logo wall, venture firm website, LP diligence, how VCs win founders',
  ogImageAlt: 'A flat 3×3 grid of identical logo tiles transforming into a single, detailed investment case-study card.',
  section: 'Portfolio',
  related: ['vc-first-five-seconds', 'revolutionizing-investment-firm-presence'],
  heroFigure: <LogoWallToStory />,
  sections: [
    {
      id: 'portfolio',
      heading: '',
      body: (
        <>
          <P>
            Most funds display their portfolio as a wall of logos. The best funds turn that same portfolio into
            their most persuasive salesperson.
          </P>
          <P>
            A logo grid tells a founder almost nothing. They can’t tell a tiny seed cheque from a lead Series A,
            and they certainly can’t see the judgment behind it. Every fund has a logo wall; it’s the
            lowest-information asset on the site.
          </P>
          <P>
            What actually convinces a founder — or an LP — is the why. Why you backed that company when others
            passed, what you saw early, how you helped after the wire cleared, what it became. That’s proof of
            judgment, and judgment is the real thing both founders and LPs are evaluating.
          </P>
          <P>Turning a portfolio into proof takes three things.</P>

          <H3>Investment case studies</H3>
          <P>
            Each meaningful bet told as a short, structured story: the thesis, what you saw, the partnership,
            and the outcome — told honestly.
          </P>

          <H3>SEO, so the stories get found</H3>
          <P>By the founders and LPs searching your space, exactly when they’re forming a view of you.</P>

          <H3>A content engine</H3>
          <P>
            So your partners’ reasoning behind the bets becomes a steady stream of articles and posts —
            compounding authority that pulls in deal flow instead of chasing it.
          </P>

          <P>
            The improvement is sharp and immediate. A founder reads your case studies and thinks{' '}
            <em>this fund actually understands my space</em>. An LP reads them and sees judgment, not just a
            returns table. Both walk into the conversation with more conviction than any pitch could
            manufacture.
          </P>

          <Pull>Stop displaying your portfolio. Start letting it sell for you.</Pull>

          <Callout>
            If your portfolio is still a grid of logos, it’s your quietest salesperson.{' '}
            <A href="/contact">Let’s turn it into your loudest.</A>
          </Callout>
        </>
      ),
    },
  ],
};

/* ================================================================== */
/* ARTICLE 5 — MEGA / FEATURED                                          */
/* Revolutionizing how PMS and VC firms present themselves online       */
/* ================================================================== */

const revolutionizingPresence: ArticleContent = {
  slug: 'revolutionizing-investment-firm-presence',
  dek: 'The investment industry has a presentation problem. Venture funds, PE shops and PMS boutiques present themselves at a fraction of the sophistication of their actual work — and it is quietly costing them growth. Here is the new standard.',
  author: { name: 'Krish Naidu', role: 'Founder, QuantikGrowth' },
  datePublished: '2026-06-26',
  seoTitle: 'How investment firms should present themselves online',
  wordCount: 1500,
  description:
    'Venture funds, PE shops and PMS boutiques present themselves online at a fraction of the sophistication of their work — and it’s costing them growth. The new standard.',
  keywords:
    'investment firm website, VC and PMS digital presence, content engine for investment firms, on-page SEO for investors, investment firm marketing, AI investor relations concierge',
  ogImageAlt: 'A 2×2 quadrant: most investment firms cluster in high substance but low digital presence; the target is high on both.',
  section: 'Strategy',
  related: ['vc-first-five-seconds', 'pms-growth-ceiling'],
  heroFigure: <SubstancePresentationGap />,
  toc: true,
  sections: [
    {
      id: 'problem',
      heading: 'The presentation problem',
      body: (
        <>
          <P>
            The investment industry has a presentation problem. The firms managing serious capital — venture
            funds, private equity shops, PMS boutiques — routinely present themselves online at a fraction of
            the sophistication of their actual work. A brilliant process behind a website built in 2014.
            Genuine conviction, invisible in search. Institutional substance, amateur presence.
          </P>
          <P>
            For a long time that didn’t matter much. It does now. Every allocation, every term sheet, every
            mandate begins with research — a founder, an LP, an HNI, an advisor, quietly forming a judgment
            before any conversation happens. The digital layer is no longer marketing. It’s the first room
            every prospect walks into, and most firms have left it unfurnished.
          </P>
        </>
      ),
    },
    {
      id: 'why-gap',
      heading: 'Why the gap exists',
      body: (
        <>
          <P>
            Most investment firms treat digital presence as marketing — slightly beneath them, a thing for
            consumer brands. So it gets outsourced once, cheaply, and forgotten. But presence isn’t marketing;
            it’s infrastructure — the same way a data room or a compliance process is infrastructure.
            Underbuild it and every other strength is discounted by whoever’s evaluating you.
          </P>
        </>
      ),
    },
    {
      id: 'why-now',
      heading: 'Why it matters now',
      body: (
        <>
          <EvaluationFlow />
          <P>
            Whoever’s evaluating you runs roughly the same sequence: they search, they judge the first
            impression, they look for a clear point of view, they read the people, they test how the firm talks
            about risk, and only then do they decide whether to engage. Most firms break that sequence in the
            first two steps — invisible in search, or a first impression that quietly says <em>small,
            unserious, careless</em>. Everything good about the firm is then discounted before it’s ever seen.
          </P>
        </>
      ),
    },
    {
      id: 'new-standard',
      heading: 'The new standard',
      body: (
        <>
          <P>
            Closing the gap isn’t a redesign. It’s three pieces of infrastructure, built to work together.
          </P>

          <H3>The website as the institutional front door</H3>
          <P>
            Fast, clean, editorial — built around the firm’s thinking and its track record, designed to make a
            prospect trust it in the first ten seconds.
          </P>

          <H3>On-page SEO and discoverability</H3>
          <P>So the firm is found, credibly, exactly when it counts — and not beaten on its own name.</P>

          <H3>A content engine</H3>
          <P>
            The hardest part of authority is consistency, and partners don’t have time to write. So the firm’s
            thinking is captured as it already happens — a five-minute voicenote, a quick video — and turned
            into articles, newsletters, and social content across every platform.
          </P>
          <ContentEnginePipeline />
        </>
      ),
    },
    {
      id: 'compounding',
      heading: 'The compounding difference',
      body: (
        <>
          <LinearVsCompounding />
          <P>
            This is why the shift is structural, not cosmetic. The old way — occasional campaigns, reliance on
            referrals — is linear and evaporates the moment you stop. The new way is an owned, compounding
            asset: every article, every case study, every search that resolves in your favour keeps working for
            years. A firm that builds this doesn’t just look better; it accumulates an advantage that’s very
            hard for a competitor to catch.
          </P>
        </>
      ),
    },
    {
      id: 'each-firm',
      heading: 'What it looks like for each firm',
      body: (
        <>
          <H3>For a venture fund</H3>
          <P>
            A presence that{' '}
            <A href="/writing/vc-first-five-seconds">wins the first five seconds</A> with the best founders,
            turns the portfolio into proof of judgment, and gives LPs conviction in diligence — better deal
            flow at the top, easier commitments at the bottom.
          </P>
          <H3>For a PMS firm</H3>
          <P>
            A presence that makes the firm findable and trusted by HNIs and their advisors, an engine that
            compounds the manager’s authority, and an AI investor-relations concierge that answers diligence
            questions around the clock — compliance-safe, analysis not advice — lifting the{' '}
            <A href="/writing/pms-growth-ceiling">AUM-growth ceiling</A> that performance alone can’t.
          </P>
        </>
      ),
    },
    {
      id: 'move-first',
      heading: 'The firms that move first',
      body: (
        <>
          <P>
            This isn’t about looking modern. It’s a re-architecting of how an investment firm is discovered,
            evaluated, and trusted in a world where the first impression is always digital. The firms that move
            first will look inevitable. The rest will keep wondering why their returns aren’t translating into
            growth.
          </P>
          <Pull>
            The gap between how good a firm is and how good it looks online is the most valuable, least
            contested opportunity in the industry right now.
          </Pull>
          <P>It’s a decision, not a budget. Make it.</P>
          <Callout>
            If your firm’s presence isn’t carrying the weight your work deserves,{' '}
            <A href="/contact">that’s exactly the gap we close.</A>
          </Callout>
        </>
      ),
    },
  ],
};

export const articleContent: Record<string, ArticleContent> = {
  [revolutionizingPresence.slug]: revolutionizingPresence,
  [pmsGrowthCeiling.slug]: pmsGrowthCeiling,
  [pmsInvisibleToInevitable.slug]: pmsInvisibleToInevitable,
  [vcFirstFiveSeconds.slug]: vcFirstFiveSeconds,
  [vcPortfolioBestSalesperson.slug]: vcPortfolioBestSalesperson,
};
