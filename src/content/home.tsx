import type { Audience } from '../audience';

export interface HomeService {
  index: string;
  kicker: string;
  titleLead: string;
  titleEm: string;
  body: string;
  points: string[];
  pilot?: string;
  visual: 'website' | 'seo' | 'content';
}

export interface WebsiteVisualData {
  label: string;
  count: string;
  rows: { name: string; line: string; tag: string }[];
  cta: string;
}
export interface SeoVisualData {
  stat: string;
  statSub: string;
  chipsLabel: string;
  chips: string[];
}
export interface ContentVisualData {
  sourceTitle: string;
  sourceSub: string;
  outputs: { k: string; v: string }[];
}

export interface HomeContent {
  metaTitle: string;
  metaDescription: string;
  ogImage: string;
  keywords: string;
  hero: { eyebrow: string; lead: string; em: string; sub: string };
  servicesHead: { title: string; label: string };
  services: HomeService[];
  processHead: { title: string; label: string };
  process: { n: string; title: string; body: string }[];
  workHead: { title: string; label: string };
  writingHead: { title: string; label: string };
  results: { eyebrow: string; quote: string; note: string; metrics: { value: string; label: string }[] };
  offer: { headline: string; body: string };
  footerTagline: string;
  visualData: {
    website: WebsiteVisualData;
    seo: SeoVisualData;
    content: ContentVisualData;
  };
}

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
      body: "The insight is already there — in a partner's head, on a call, in a two-minute voicenote or a short video. We shape it into a polished article on your site, then repurpose it into LinkedIn posts, X threads, and short clips. The partner spends minutes; the firm publishes everywhere.",
      points: [
        'Record a voicenote or short video — no writing required',
        "We shape it into an article in your firm's voice",
        'Repurposed across LinkedIn, X, and short-form video',
        'A steady cadence that compounds into search traffic and authority',
      ],
      pilot: 'Video production — available as a pilot',
      visual: 'content',
    },
  ],
  processHead: { title: 'How it works', label: 'From first call to a running engine' },
  process: [
    { n: '01', title: 'Audit & positioning', body: 'We study your portfolio, your thesis, and how you currently show up when someone searches for a firm like yours.' },
    { n: '02', title: 'Design first', body: "You see a real design of your new site before you commit. Love it and we continue, three revisions included. If you don't, you owe nothing." },
    { n: '03', title: 'Build & publish', body: 'A fast, editorial site goes live — portfolio, case studies, and thesis pages structured from the start to be found.' },
    { n: '04', title: 'The engine runs', body: 'Each week your partners send a voicenote or video. We turn it into an article and a week of social. Authority compounds.' },
  ],
  workHead: { title: 'Selected work', label: 'Representative builds' },
  writingHead: { title: 'Writing', label: 'On how venture firms present themselves' },
  results: {
    eyebrow: 'What a build like this is worth',
    quote: "A venture firm's website is the one partner that keeps working while everyone else is in meetings.",
    note: 'Representative outcomes from the kind of work we do — directional, not a single named client.',
    metrics: [
      { value: '+38%', label: 'inbound founder intros' },
      { value: '3.1×', label: 'organic search traffic' },
      { value: '1 + 4', label: 'article & social posts a week, from one voicenote' },
      { value: '6 wks', label: 'kickoff to launch' },
    ],
  },
  offer: {
    headline: 'You see the design before you pay.',
    body: "We build a real first design of your new site. If you love it, we continue — three revisions included. If you don't, you owe nothing.",
  },
  footerTagline: 'Digital infrastructure for venture & private equity firms — with select PMS pilots. Based in Mumbai.',
  visualData: {
    website: {
      label: 'Portfolio',
      count: '12 companies',
      rows: [
        { name: 'Voltreon', line: 'Grid-scale storage for a renewable baseload.', tag: 'Led · Series A' },
        { name: 'Cropline', line: 'Yield data that underwrites the next harvest.', tag: 'Seed' },
        { name: 'Hearth', line: 'Heat pumps financed like a utility, not a purchase.', tag: 'Led · Seed' },
      ],
      cta: 'Read the thesis',
    },
    seo: {
      stat: '3.1×',
      statSub: 'visits, six months in',
      chipsLabel: 'Ranks page one for',
      chips: ['climate seed investors', 'who funds heat pumps', 'energy transition VC', 'best deep-tech funds'],
    },
    content: {
      sourceTitle: 'One voicenote from a partner',
      sourceSub: '2 min, recorded between meetings',
      outputs: [
        { k: 'Article', v: 'On your site' },
        { k: 'LinkedIn', v: '2 posts' },
        { k: 'X', v: '1 thread' },
        { k: 'Clip', v: '1 short video' },
      ],
    },
  },
};

const portfolio: HomeContent = {
  metaTitle: 'Websites & SEO for PMS & investment firms',
  metaDescription:
    'We design fast, credible websites for SEBI-registered PMS and AIF firms, make them findable when HNIs search, and turn fund managers’ voicenotes into articles and social.',
  ogImage: '/og/portfolio-home.png',
  keywords:
    'PMS website design India, portfolio management website, SEBI registered PMS marketing, on-page SEO for wealth managers, content engine for fund managers',
  hero: {
    eyebrow: 'Digital infrastructure for PMS & investment firms',
    lead: 'A PMS firm, presented',
    em: 'as well as it performs.',
    sub: "We do three things for SEBI-registered PMS and AIF firms: design a clean, fast website around your track record, make it findable when HNIs and their advisors search, and run a content engine that turns your fund managers' voicenotes into articles and social — everywhere.",
  },
  servicesHead: { title: 'What we build', label: 'Three things, done properly' },
  services: [
    {
      index: '01',
      kicker: 'Website design',
      titleLead: 'A site built around your track record and your',
      titleEm: 'edge',
      body: 'An HNI investor experiences your brand before they ever pick up the phone. If your site reads like 2014, the fund feels like history. We rebuild it around your performance, your strategy, and your SEBI registration — institutional clarity in the first five seconds.',
      points: [
        'Performance, strategy and AUM, communicated with institutional clarity',
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
      body: "The insight is already there — in a fund manager's head, on a call, in a two-minute voicenote or a short video. We shape it into a polished article on your site, then repurpose it into LinkedIn posts, X threads, and short clips. The manager spends minutes; the firm publishes everywhere.",
      points: [
        'Record a voicenote or short video — no writing required',
        "We shape it into a compliance-aware article in your firm's voice",
        'Repurposed across LinkedIn, X, and short-form video',
        'A steady cadence that compounds into search traffic and trust',
      ],
      pilot: 'Video production — available as a pilot',
      visual: 'content',
    },
  ],
  processHead: { title: 'How it works', label: 'From first call to a running engine' },
  process: [
    { n: '01', title: 'Audit & positioning', body: 'We study your track record, your strategy, and how you currently show up when an HNI or advisor searches for a firm like yours.' },
    { n: '02', title: 'Design first', body: "You see a real design of your new site before you commit. Love it and we continue, three revisions included. If you don't, you owe nothing." },
    { n: '03', title: 'Build & publish', body: 'A fast, compliance-aware site goes live — strategy, performance, and approach pages structured from the start to be found.' },
    { n: '04', title: 'The engine runs', body: 'Each week your fund managers send a voicenote or video. We turn it into an article and a week of social. Authority compounds.' },
  ],
  workHead: { title: 'Selected work', label: 'Representative builds' },
  writingHead: { title: 'Writing', label: 'On how PMS firms grow AUM online' },
  results: {
    eyebrow: 'What a build like this is worth',
    quote: "A PMS firm's website is the relationship manager that works while the team is in the markets.",
    note: 'Representative outcomes from the kind of work we do — directional, not a single named client.',
    metrics: [
      { value: '+34%', label: 'qualified HNI enquiries' },
      { value: '3.2×', label: 'organic search traffic' },
      { value: '1 + 4', label: 'article & social posts a week, from one voicenote' },
      { value: '6 wks', label: 'kickoff to launch' },
    ],
  },
  offer: {
    headline: 'You see the design before you pay.',
    body: "We build a real first design of your new site. If you love it, we continue — three revisions included. If you don't, you owe nothing.",
  },
  footerTagline: 'Digital infrastructure for SEBI-registered PMS & investment firms, and venture capital. Based in Mumbai.',
  visualData: {
    website: {
      label: 'Strategies',
      count: '₹360cr+ AUM',
      rows: [
        { name: 'Growth Engine', line: 'Concentrated alpha across structural growth.', tag: '1Yr · 42%' },
        { name: 'Alpha Leaders', line: 'Risk-conscious, fundamentals-first selection.', tag: '5Yr · +15.6%' },
        { name: 'Value Catalyst', line: 'Mispriced quality with a clear re-rating path.', tag: 'Since 2018' },
      ],
      cta: 'See the strategy',
    },
    seo: {
      stat: '3.2×',
      statSub: 'visits, six months in',
      chipsLabel: 'Ranks page one for',
      chips: ['best pms for long-term wealth', 'portfolio management for hni', 'sebi registered pms india', 'pms vs mutual funds'],
    },
    content: {
      sourceTitle: 'One voicenote from a fund manager',
      sourceSub: '2 min, recorded between market hours',
      outputs: [
        { k: 'Article', v: 'On your site' },
        { k: 'LinkedIn', v: '2 posts' },
        { k: 'X', v: '1 thread' },
        { k: 'Clip', v: '1 short video' },
      ],
    },
  },
};

export const homeContent: Record<Audience, HomeContent> = { venture, portfolio };
