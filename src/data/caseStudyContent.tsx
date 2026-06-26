export interface SpecItem {
  label: string;
  value: string;
}

export interface StateRow {
  l: string;
  v: string;
}

export interface ChallengePoint {
  title: string;
  body: string;
}

export interface CaseServiceBlock {
  n: string;
  kicker: string;
  title: string;
  body: string;
  points: string[];
  note: string;
}

export interface ResultMetric {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sub: string;
}

export interface TimelinePhase {
  phase: string;
  title: string;
  items: string[];
}

export interface CaseStudyContent {
  slug: string;
  badge: string;
  description: string;
  keywords: string;
  datePublished: string;
  spec: SpecItem[];
  context: {
    paras: string[];
    stateTitle: string;
    stateSubtitle: string;
    stateRows: StateRow[];
  };
  challenge: {
    intro: string;
    points: ChallengePoint[];
  };
  services: CaseServiceBlock[];
  build: {
    intro: string;
    before: string[];
    after: string[];
  };
  results: {
    intro: string;
    metrics: ResultMetric[];
    timeline: TimelinePhase[];
  };
  closing: {
    quote: string;
    attribution: string;
  };
}

const northbound: CaseStudyContent = {
  slug: 'northbound-capital',
  badge: 'Representative engagement',
  description:
    'How we rebuilt an early-stage climate fund around its portfolio, made it findable with on-page SEO, and added a content engine. Representative work.',
  keywords:
    'venture capital case study, climate VC website, portfolio website design, on-page SEO for investors, content engine case study',
  datePublished: '2026-06-20',
  spec: [
    { label: 'Engagement', value: 'Full build' },
    { label: 'Timeline', value: '6 weeks' },
    { label: 'Services', value: 'All three' },
    { label: 'Stage focus', value: 'Seed / Series A' },
  ],
  context: {
    paras: [
      'Northbound backs founders building the hardware and software of the energy transition — grid storage, electrified heat, the unglamorous infrastructure decarbonisation actually runs on. The partners write first cheques, often before a category is obvious, and they have the early portfolio to show for it.',
      'But almost none of that reached anyone. The site was a tidy directory: a logo grid, four partner bios, a contact form. A founder landing cold learned that Northbound invests in climate — and nothing about how it thinks, what it believes, or why a particular company belonged in its worldview.',
      'So growth was capped by who the partners already knew. Every good introduction came warm; nothing arrived from the open market. For a firm whose entire edge is early conviction, being invisible to the founders searching for exactly that conviction was the expensive problem.',
    ],
    stateTitle: 'Before',
    stateSubtitle: 'The directory site',
    stateRows: [
      { l: 'Website', v: 'Logo grid, bios, contact form' },
      { l: 'Search presence', v: 'Not ranking for any thesis term' },
      { l: 'Inbound', v: 'Referrals only' },
      { l: 'Partner writing', v: 'Occasional posts, then silence' },
    ],
  },
  challenge: {
    intro: 'Three things were holding the firm back — and not one of them was the quality of the investing.',
    points: [
      {
        title: 'A site that described, not argued',
        body: 'The portfolio was a wall of logos. It proved cheques had been written, but said nothing about judgment — the one thing a founder is actually trying to read.',
      },
      {
        title: 'Invisible when it mattered',
        body: 'When a climate founder searched for an investor in their space, Northbound was nowhere. Directories and aggregators ranked for the firm’s own territory.',
      },
      {
        title: 'Thinking trapped in the partners',
        body: 'The partners held genuinely original views on the energy transition. Those views lived in board meetings and at dinners, building no audience the firm owned.',
      },
    ],
  },
  services: [
    {
      n: '01',
      kicker: 'Website design',
      title: 'The portfolio, rebuilt as a set of arguments',
      body: 'We rebuilt the site around the companies rather than the firm. Each investment became a short, structured story — what Northbound saw, why it moved early, what the company became — so the logo wall turned into evidence of a point of view. The thesis moved to the front door, and pages load in under a second.',
      points: [
        'Portfolio companies told as editorial stories',
        'Investment case studies with a clear spine',
        'A thesis page a founder can map onto',
        'Sub-second loads, accessible, mobile-first',
      ],
      note: 'A founder now understands the firm’s worldview in the first ten seconds.',
    },
    {
      n: '02',
      kicker: 'On-page SEO',
      title: 'Built to be found by the right founders',
      body: 'We mapped the pages to the language founders and LPs actually use — "who funds grid storage," "seed investors for climate hardware" — and built the thesis and sector pages to answer them. Clean semantic structure, fast loads, and internal linking that compounds authority across the site, all from the first line of the build.',
      points: [
        'Pages mapped to real founder and LP searches',
        'Semantic structure and fast, crawlable pages',
        'Sector pages built to rank for the thesis',
        'Internal linking that compounds over time',
      ],
      note: 'Page one for four thesis-defining queries within two quarters.',
    },
    {
      n: '03',
      kicker: 'Content engine',
      title: 'The partners’ thinking, finally compounding',
      body: 'We stood up a content engine: a partner records a two-minute voicenote after a board meeting, and we turn it into a finished article on the site, then repurpose it into LinkedIn posts and an X thread. No writing required from the partners, and a weekly cadence the firm could actually sustain.',
      points: [
        'Voicenote or short video in — finished article out',
        'Published in the firm’s voice, SEO-structured',
        'Repurposed to LinkedIn and X',
        'A weekly cadence that builds a back catalogue',
      ],
      note: 'One voicenote a week became an article and four social posts.',
    },
  ],
  build: {
    intro: 'The clearest way to see the change is side by side. Same firm, same track record — a completely different front door.',
    before: [
      'Logo grid that proved cheques, not judgment',
      'Invisible in search for every thesis term',
      'Inbound entirely dependent on warm intros',
      'Partner insight stuck in meetings and DMs',
    ],
    after: [
      'Portfolio told as investment case studies',
      'Ranks page one for four thesis-defining queries',
      'A steady stream of inbound founder intros',
      'A weekly publishing cadence the firm owns',
    ],
  },
  results: {
    intro: "Representative outcomes over the first two quarters after launch — directional benchmarks for a build like this, not a single named client's audited figures.",
    metrics: [
      { value: 41, prefix: '+', suffix: '%', label: 'Inbound founder intros', sub: 'vs. referrals only before' },
      { value: 3.4, decimals: 1, suffix: '×', label: 'Organic search traffic', sub: 'two quarters after launch' },
      { value: 4, label: 'Page-one queries', sub: 'thesis-defining search terms' },
      { value: 18, label: 'Articles published', sub: 'from partner voicenotes' },
      { value: 72, suffix: '%', label: 'Portfolio read-depth', sub: 'median on case-study pages' },
      { value: 6, label: 'Weeks to launch', sub: 'kickoff to live site' },
    ],
    timeline: [
      { phase: 'Weeks 1–6', title: 'Build', items: ['Audit & positioning', 'Portfolio-led design', 'SEO-structured build'] },
      { phase: 'Months 2–3', title: 'Publish', items: ['Content engine live', 'Weekly cadence begins', 'Pages start indexing'] },
      { phase: 'Months 4–6', title: 'Compound', items: ['Rankings climb', 'Inbound grows', 'The archive compounds'] },
    ],
  },
  closing: {
    quote:
      'The goal was never a prettier website. It was a front door that does what the partners do in a room — make the case, with specifics, before anyone has to ask.',
    attribution: 'The Northbound build · representative engagement',
  },
};

const meridian: CaseStudyContent = {
  slug: 'meridian-pms',
  badge: 'Representative engagement',
  description:
    'How we rebuilt a SEBI-registered PMS around its track record, made it findable to searching HNIs, and added a content engine. Representative work.',
  keywords:
    'PMS case study, portfolio management website India, SEBI registered PMS marketing, on-page SEO for wealth managers, content engine for fund managers',
  datePublished: '2026-06-22',
  spec: [
    { label: 'Engagement', value: 'Full build' },
    { label: 'Timeline', value: '6 weeks' },
    { label: 'Services', value: 'All three' },
    { label: 'Firm type', value: 'SEBI-registered PMS' },
  ],
  context: {
    paras: [
      'Meridian runs a disciplined, fundamentals-first PMS with an enviable multi-year track record across mid and small caps. The performance was real and the team was credible — and almost none of it reached the investors who could act on it.',
      'The website was a brochure from 2016: a stock photo, a one-line strategy blurb, a phone number, and a PDF. An HNI who looked Meridian up learned that it managed money — and nothing about the discipline behind the returns or what it was like to be a client.',
      'So every new mandate came through a referral. Growth was capped by the partners’ personal network while directories and aggregators ranked for exactly the terms Meridian’s ideal investors were searching.',
    ],
    stateTitle: 'Before',
    stateSubtitle: 'The brochure site',
    stateRows: [
      { l: 'Website', v: 'Stock photo, one strategy page, a PDF' },
      { l: 'Search presence', v: 'Outranked by directories' },
      { l: 'Enquiries', v: 'Referrals only' },
      { l: 'Manager writing', v: 'Quarterly note, then silence' },
    ],
  },
  challenge: {
    intro: 'Three things were holding the firm back — and not one of them was the quality of the investing.',
    points: [
      {
        title: 'A site that signalled "small", not "institutional"',
        body: 'The brochure quietly told a wealthy investor the firm was sub-scale, before a single performance figure was read.',
      },
      {
        title: 'Invisible when wealth was searching',
        body: 'When an HNI searched for a way to grow long-term wealth, aggregators and listicles ranked for Meridian’s own category — and sold the lead elsewhere.',
      },
      {
        title: 'A track record nobody could follow',
        body: 'The discipline behind the returns lived in PDFs and review meetings, building no trust with investors who were still deciding.',
      },
    ],
  },
  services: [
    {
      n: '01',
      kicker: 'Website design',
      title: 'The track record, rebuilt to read as institutional',
      body: 'We rebuilt the site around the performance and the discipline behind it. Strategy, AUM, and SEBI registration communicate in the first five seconds, with compliance-aware copy that stays within the guardrails. The firm now looks like the institution its numbers already were.',
      points: [
        'Performance and strategy with institutional clarity',
        'SEBI-registration and compliance-aware copy',
        'A credibility layer that signals scale',
        'Sub-second loads, accessible, mobile-first',
      ],
      note: 'An HNI now reads "institutional and disciplined" in the first five seconds.',
    },
    {
      n: '02',
      kicker: 'On-page SEO',
      title: 'Found by HNIs and advisors, not directories',
      body: 'We mapped pages to the language HNIs and their advisors actually use — "best PMS for long-term wealth," "portfolio management for HNIs in India" — and built the strategy and approach pages to answer them. Clean structure, fast loads, and internal linking that compounds authority.',
      points: [
        'Pages mapped to real HNI and advisor searches',
        'Semantic structure and fast, crawlable pages',
        'Strategy pages built to rank for the firm’s point of view',
        'Internal linking that compounds over time',
      ],
      note: 'Page one for four wealth-defining queries within two quarters.',
    },
    {
      n: '03',
      kicker: 'Content engine',
      title: 'The managers’ thinking, finally reaching investors',
      body: 'We stood up a content engine: a fund manager records a two-minute voicenote after a review, and we turn it into a compliance-aware article on the site, then repurpose it into LinkedIn posts and an X thread. No writing required, and a weekly cadence the firm could sustain.',
      points: [
        'Voicenote or short video in — finished article out',
        'Compliance-aware, in the firm’s voice, SEO-structured',
        'Repurposed to LinkedIn and X',
        'A weekly cadence that builds trust over time',
      ],
      note: 'One voicenote a week became an article and four social posts.',
    },
  ],
  build: {
    intro: 'The clearest way to see the change is side by side. Same firm, same track record — a completely different front door.',
    before: [
      'A brochure that signalled sub-scale',
      'Outranked by directories for every wealth term',
      'Enquiries entirely dependent on referrals',
      'Manager insight stuck in PDFs and meetings',
    ],
    after: [
      'A site that reads as institutional and disciplined',
      'Ranks page one for four wealth-defining queries',
      'A steady stream of qualified HNI enquiries',
      'A weekly publishing cadence the firm owns',
    ],
  },
  results: {
    intro: "Representative outcomes over the first two quarters after launch — directional benchmarks for a build like this, not a single named client's audited figures.",
    metrics: [
      { value: 34, prefix: '+', suffix: '%', label: 'Qualified HNI enquiries', sub: 'vs. referrals only before' },
      { value: 3.2, decimals: 1, suffix: '×', label: 'Organic search traffic', sub: 'two quarters after launch' },
      { value: 4, label: 'Page-one queries', sub: 'wealth-defining search terms' },
      { value: 16, label: 'Articles published', sub: 'from manager voicenotes' },
      { value: 68, suffix: '%', label: 'Strategy read-depth', sub: 'median on approach pages' },
      { value: 6, label: 'Weeks to launch', sub: 'kickoff to live site' },
    ],
    timeline: [
      { phase: 'Weeks 1–6', title: 'Build', items: ['Audit & positioning', 'Credibility-first design', 'SEO-structured build'] },
      { phase: 'Months 2–3', title: 'Publish', items: ['Content engine live', 'Weekly cadence begins', 'Pages start indexing'] },
      { phase: 'Months 4–6', title: 'Compound', items: ['Rankings climb', 'Enquiries grow', 'The archive compounds'] },
    ],
  },
  closing: {
    quote:
      'The goal was never a prettier website. It was a front door that does what a great relationship manager does — make the case for the discipline, with specifics, before anyone has to ask.',
    attribution: 'The Meridian build · representative engagement',
  },
};

export const caseStudyContent: Record<string, CaseStudyContent> = {
  [northbound.slug]: northbound,
  [meridian.slug]: meridian,
};
