import type { Audience } from '../audience';

export interface HomeService {
  index: string;
  kicker: string;
  titleLead: string;
  titleEm: string;
  body: string;
  points: string[];
  pilot?: string;
  badge?: string;
  visual: 'website' | 'seo' | 'content' | 'chatbot';
}

export interface WebsiteVisualData {
  label: string;
  count: string;
  rows: { name: string; line: string; tag: string }[];
  cta: string;
}
export interface SeoVisualData {
  headline: string;
  sub: string;
  chipsLabel: string;
  chips: string[];
}
export interface ContentVisualData {
  sourceTitle: string;
  sourceSub: string;
  outputs: { k: string; v: string }[];
}
export interface ChatbotVisualData {
  title: string;
  question: string;
  answer: string;
  disclaimer: string;
}

export interface HomeContent {
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  keywords: string;
  hero: { eyebrow: string; lead: string; em: string; sub: string };
  servicesHead: { title: string; label: string };
  services: HomeService[];
  engineHead: { title: string; label: string };
  engineIntro: string;
  processHead: { title: string; label: string };
  process: { n: string; title: string; body: string }[];
  writingHead: { title: string; label: string };
  method: { eyebrow: string; quote: string; note: string; items: { value: string; label: string }[] };
  offer: { headline: string; body: string; note?: string };
  footerTagline: string;
  visualData: {
    website: WebsiteVisualData;
    seo: SeoVisualData;
    content: ContentVisualData;
    chatbot?: ChatbotVisualData;
  };
}

const WEBSITE_VENTURE: WebsiteVisualData = {
  label: 'Your new site',
  count: '8 pages',
  rows: [
    { name: 'Portfolio', line: 'Each company as a short, structured story.', tag: 'Stories' },
    { name: 'Case study', line: 'Thesis · partnership · outcome.', tag: 'Editorial' },
    { name: 'Thesis', line: 'What you back, and why, in plain words.', tag: 'POV' },
  ],
  cta: 'See the structure',
};

const SEO_VENTURE: SeoVisualData = {
  headline: 'Found first',
  sub: 'when a founder or LP searches',
  chipsLabel: 'Built to rank for',
  chips: ['investors for climate hardware', 'who funds fintech in india', 'seed VC for developer tools', 'best deep-tech funds'],
};

const CONTENT_DATA = (who: string): ContentVisualData => ({
  sourceTitle: `One voicenote from a ${who}`,
  sourceSub: '5 minutes, no writing required',
  outputs: [
    { k: 'Article', v: 'On your site' },
    { k: 'Newsletter', v: 'To your list' },
    { k: 'LinkedIn + X', v: '3 posts' },
    { k: 'YouTube + IG', v: 'Short clips' },
  ],
});

const METHOD_ITEMS = [
  { value: '1 → 5', label: 'one voicenote becomes an article and posts across five platforms' },
  { value: 'Weekly', label: 'a steady publishing cadence, with no extra work from your team' },
  { value: '< 1s', label: 'page loads, engineered to rank' },
  { value: '6 wks', label: 'from kickoff to a live, findable site' },
];

const venture: HomeContent = {
  metaTitle: 'Websites & SEO for venture capital firms',
  metaDescription:
    'We design fast, editorial websites for VC and PE firms, make them findable with on-page SEO, and turn partner voicenotes into articles and social.',
  ogImage: '/og/home.png',
  keywords:
    'venture capital website design, VC firm web design, private equity website, on-page SEO for investors, content engine for venture firms',
  hero: {
    eyebrow: 'Digital infrastructure for venture & PE firms',
    lead: 'A venture firm, presented',
    em: 'as well as it invests.',
    sub: "We do three things for VC and PE firms: design a clean, fast website around your portfolio, make it findable with on-page SEO, and run a content engine that turns your partners' voicenotes into articles and social — everywhere.",
  },
  servicesHead: { title: 'What we build', label: 'Three things, done properly' },
  services: [
    {
      index: '01',
      kicker: 'Website design',
      titleLead: 'A site built around the companies',
      titleEm: "you've backed",
      body: 'Most venture sites read like a directory — a logo wall, a team page, a contact form. We rebuild yours around the work, so a founder or LP understands your taste and your thesis in the first ten seconds.',
      points: [
        'Portfolio companies told as short stories, not a grid of logos',
        'Investment case studies that show judgment, not just a cheque',
        'Sub-second loads, built to be read on a phone between meetings',
        'Thesis and partner pages that actually say something',
      ],
      visual: 'website',
    },
    {
      index: '02',
      kicker: 'On-page SEO',
      titleLead: 'So the right people find you — and you',
      titleEm: 'read as the authority',
      body: 'When a founder looks for an investor in their space, or an LP checks you out before a first meeting, you want to be the firm they find — and the one whose pages read like the clearest thinking on the subject. That is what on-page SEO buys: inbound that arrives already convinced.',
      points: [
        'Pages mapped to what founders and LPs actually search for',
        'Clean semantic structure and fast loads that crawlers reward',
        'Thesis and sector pages built to rank for your point of view',
        'Internal linking that compounds authority across the site',
      ],
      visual: 'seo',
    },
    {
      index: '03',
      kicker: 'Content engine',
      titleLead: 'Your partners talk. We turn it into',
      titleEm: 'authority, everywhere.',
      body: "The insight is already there — in a partner's head, on a call, in a five-minute voicenote or a short video. We shape it into a polished article on your site, then repurpose it into a newsletter, LinkedIn and X posts, and short clips. The partner spends minutes; the firm publishes everywhere.",
      points: [
        'Record a voicenote or short video — no writing required',
        "We shape it into an article in your firm's voice",
        'Repurposed across newsletter, LinkedIn, X, YouTube and Instagram',
        'A steady cadence that compounds into search traffic and authority',
      ],
      pilot: 'Video production — available as a pilot',
      visual: 'content',
    },
  ],
  engineHead: { title: 'The content engine', label: 'voicenote → article → everywhere' },
  engineIntro:
    'One five-minute voicenote from a partner becomes a finished article on your site — then a newsletter, LinkedIn and X posts, and organic reach on YouTube and Instagram. Watch it happen.',
  processHead: { title: 'How we work', label: 'From first call to a running engine' },
  process: [
    { n: '01', title: 'Audit & positioning', body: 'We study your portfolio, your thesis, and how you currently show up when someone searches for a firm like yours.' },
    { n: '02', title: 'Design first', body: "You see a real design of your new site before you commit. Love it and we continue, three revisions included. If you don't, you owe nothing." },
    { n: '03', title: 'Build & rank', body: 'A fast, editorial site goes live — portfolio, thesis and sector pages structured from the first line to be found.' },
    { n: '04', title: 'The engine runs', body: 'Each week your partners send a voicenote or video. We turn it into an article and a week of social. Authority compounds.' },
  ],
  writingHead: { title: 'Writing', label: 'On how venture firms present themselves' },
  method: {
    eyebrow: 'What you actually get',
    quote: "We have no client case studies to show yet — so here's the honest version: the method, and the transformation it's built to deliver.",
    note: 'No borrowed logos. No invented numbers. Just the system, and what it does for a firm like yours.',
    items: METHOD_ITEMS,
  },
  offer: {
    headline: 'You see the design before you pay.',
    body: "We build a real first design of your new site. If you love it, we continue — three revisions included. If you don't, you owe nothing.",
  },
  footerTagline: 'Digital infrastructure for venture & private equity firms — with select PMS engagements. Based in Mumbai.',
  visualData: {
    website: WEBSITE_VENTURE,
    seo: SEO_VENTURE,
    content: CONTENT_DATA('partner'),
  },
};

const portfolio: HomeContent = {
  metaTitle: 'Websites, SEO & an AI concierge for PMS firms',
  metaDescription:
    'We design fast, credible websites for SEBI-registered PMS firms, rank them when HNIs search, run a content engine from fund-manager voicenotes, and add an AI investor-relations concierge.',
  ogImage: '/og/portfolio-home.png',
  keywords:
    'PMS website design India, portfolio management website, SEBI registered PMS marketing, on-page SEO for wealth managers, AI investor relations chatbot',
  hero: {
    eyebrow: 'Digital infrastructure for PMS & investment firms',
    lead: 'A PMS firm, presented',
    em: 'as well as it performs.',
    sub: "We do four things for SEBI-registered PMS and AIF firms: design a credible website around your track record, rank it when HNIs search, run a content engine from your fund managers' voicenotes — and add an AI concierge that answers prospective investors in your voice.",
  },
  servicesHead: { title: 'What we build', label: 'Four things, done properly' },
  services: [
    {
      index: '01',
      kicker: 'Website design',
      titleLead: 'A site built around your track record and your',
      titleEm: 'edge',
      body: 'An HNI investor experiences your brand before they ever pick up the phone. If your site reads like 2014, the fund feels like history. We rebuild it around your strategy, your discipline, and your SEBI registration — institutional clarity in the first five seconds.',
      points: [
        'Strategy and discipline, communicated with institutional clarity',
        'Compliance-aware copy that stays within SEBI guardrails',
        'A credibility layer that signals scale before your AUM reaches it',
        'Sub-second loads, built to be read on a phone',
      ],
      visual: 'website',
    },
    {
      index: '02',
      kicker: 'On-page SEO',
      titleLead: 'So HNIs and advisors find you — and you',
      titleEm: 'read as the authority',
      body: 'When an HNI searches for a way to grow long-term wealth, or an advisor vets a fund before recommending it, you want to be the firm they find — and the one whose pages read like the clearest thinking on the strategy. On-page SEO turns search into a steady stream of qualified enquiry.',
      points: [
        'Pages mapped to what HNIs and advisors actually search for',
        'Clean semantic structure and fast loads that crawlers reward',
        'Strategy and approach pages built to rank for your point of view',
        'Internal linking that compounds authority across the site',
      ],
      visual: 'seo',
    },
    {
      index: '03',
      kicker: 'Content engine',
      titleLead: 'Your fund managers talk. We turn it into',
      titleEm: 'authority, everywhere.',
      body: "The insight is already there — in a fund manager's head, on a call, in a five-minute voicenote or a short video. We shape it into a compliance-aware article on your site, then a newsletter, LinkedIn and X posts, and short clips. The manager spends minutes; the firm publishes everywhere.",
      points: [
        'Record a voicenote or short video — no writing required',
        "We shape it into a compliance-aware article in your firm's voice",
        'Repurposed across newsletter, LinkedIn, X, YouTube and Instagram',
        'A steady cadence that compounds into search traffic and trust',
      ],
      pilot: 'Video production — available as a pilot',
      visual: 'content',
    },
    {
      index: '04',
      kicker: 'AI investor concierge',
      titleLead: 'An AI that answers prospective investors in',
      titleEm: 'your voice',
      body: 'A prospective investor on your site at 11pm has questions: the strategy, the minimum, the process. The AI Investor Relations Concierge answers them in your firm’s voice, drawn from your own approved material — and qualifies the serious ones for a call. Analysis and information, never advice.',
      points: [
        'Trained only on your approved, compliance-checked material',
        'Compliance-safe by design: no buy/sell/hold, no return promises',
        'Answers strategy, process and minimums — then routes to your team',
        'Available only on the portfolio track',
      ],
      badge: 'Portfolio only',
      visual: 'chatbot',
    },
  ],
  engineHead: { title: 'The content engine', label: 'voicenote → article → everywhere' },
  engineIntro:
    "One five-minute voicenote from a fund manager becomes a compliance-aware article on your site — then a newsletter, LinkedIn and X posts, and organic reach on YouTube and Instagram. Watch it happen.",
  processHead: { title: 'How we work', label: 'From first call to a running engine' },
  process: [
    { n: '01', title: 'Audit & positioning', body: 'We study your strategy, your discipline, and how you currently show up when an HNI or advisor searches for a firm like yours.' },
    { n: '02', title: 'Design first', body: "You see a real design of your new site before you commit. Love it and we continue, three revisions included. If you don't, you owe nothing." },
    { n: '03', title: 'Build & rank', body: 'A fast, compliance-aware site goes live — strategy and approach pages structured from the first line to be found.' },
    { n: '04', title: 'The engine runs', body: 'Each week your fund managers send a voicenote or video. We turn it into an article and a week of social. Trust compounds.' },
  ],
  writingHead: { title: 'Writing', label: 'On how PMS firms earn trust online' },
  method: {
    eyebrow: 'What you actually get',
    quote: "We have no client case studies to show yet — so here's the honest version: the method, and the transformation it's built to deliver.",
    note: 'No borrowed logos. No invented numbers. Just the system, and what it does for a firm like yours.',
    items: METHOD_ITEMS,
  },
  offer: {
    headline: 'You see the design before you pay.',
    body: "We build a real first design of your new site. If you love it, we continue — three revisions included. If you don't, you owe nothing.",
    note: 'Portfolio firms also get the AI Investor Relations Concierge — a compliance-safe chatbot that answers prospective investors in your voice.',
  },
  footerTagline: 'Digital infrastructure for SEBI-registered PMS & investment firms, and venture capital. Based in Mumbai.',
  visualData: {
    website: {
      label: 'Your new site',
      count: '8 pages',
      rows: [
        { name: 'Strategy', line: 'Your approach, in institutional clarity.', tag: 'Clear' },
        { name: 'Track record', line: 'Framed within SEBI guardrails.', tag: 'Compliant' },
        { name: 'Approach', line: 'How you think about risk and return.', tag: 'POV' },
      ],
      cta: 'See the structure',
    },
    seo: {
      headline: 'Found first',
      sub: 'when an HNI or advisor searches',
      chipsLabel: 'Built to rank for',
      chips: ['best pms for long-term wealth', 'portfolio management for hni', 'sebi registered pms india', 'pms vs mutual funds'],
    },
    content: CONTENT_DATA('fund manager'),
    chatbot: {
      title: 'AI Investor Relations Concierge',
      question: 'What’s your investment approach, and the minimum?',
      answer:
        'We run a concentrated, fundamentals-first strategy and our minimum is set by SEBI for PMS. I can walk you through how we think about risk and shortlist you for a call with the team.',
      disclaimer: 'General information, not investment advice.',
    },
  },
};

export const homeContent: Record<Audience, HomeContent> = { venture, portfolio };
