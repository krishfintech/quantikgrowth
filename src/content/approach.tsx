import type { Audience } from '../audience';

export interface ApproachContent {
  meta: { title: string; description: string; og: string; keywords: string };
  hero: { lead: string; em: string; copy: string };
  website: { title: string; paras: string[]; points: string[] };
  seo: { title: string; intro: string; why: { k: string; body: string }[]; outro: string };
  content: { title: string; intro: string; steps: { n: string; t: string; b: string }[] };
  together: { title: string; intro: string; nodes: { t: string; s: string }[] };
  faqHeading: string;
  faq: { q: string; a: string }[];
}

const venture: ApproachContent = {
  meta: {
    title: 'Website design, SEO & content for VC firms',
    description:
      'How we build for venture firms: a portfolio-led site, on-page SEO that brings inbound, and a content engine that turns voicenotes into articles and social.',
    og: '/og/approach.png',
    keywords: 'venture firm website, on-page SEO for VC, content engine, voicenote to article, VC inbound marketing',
  },
  hero: {
    lead: 'Three things, each done',
    em: 'as if it were the whole job.',
    copy: "We don't sell a menu. We do website design, on-page SEO, and a content engine — and the reason they're worth doing together is that each one makes the other two work harder.",
  },
  website: {
    title: "The site is the firm's first impression. Make it argue the case.",
    paras: [
      'A strong founder reads your site before they reply to your email. An LP reads it before a first meeting. In both cases the question is the same — does this firm understand my world, and is its judgment any good? Most venture sites answer neither. They show a wall of logos, a page of bios, and a contact form, and leave the visitor to infer the rest.',
      'We rebuild the site around the work. The portfolio becomes a set of short stories rather than a grid. Your best decisions become investment case studies — the thesis, the partnership, the outcome — so the site proves judgment instead of just listing names. It loads in under a second and reads well on a phone, because that is where it will actually be opened.',
    ],
    points: [
      'Portfolio companies told as stories, with the thesis behind each cheque',
      'Editorial investment case studies that show how you think',
      'Thesis and sector pages a founder can map themselves onto',
      'Sub-second loads, accessible, and built to read on mobile',
    ],
  },
  seo: {
    title: 'Being good is not the same as being found.',
    intro:
      "On-page SEO is the part of the work most firms underrate, so it's the part we argue hardest for. It isn't keyword stuffing or a monthly report of vanity metrics. It's making sure that when the right person searches, your pages are what they find — and that those pages read like the clearest thinking on the subject. There are three reasons it matters to a venture firm.",
    why: [
      { k: 'Inbound', body: 'A founder who finds you by searching arrives already convinced. They have read your thesis, seen the companies you backed, and decided you understand their world — before the first email.' },
      { k: 'Discoverability', body: 'LPs and founders search in plain language: "who funds climate hardware," "seed investors for fintech in India." If those pages aren\'t yours, they\'re a competitor\'s — or a directory that sells your name as a lead.' },
      { k: 'Authority', body: 'Ranking for the topics you have a view on does more than bring traffic. It positions the firm as the clearest thinker on the subject. The search result becomes part of the pitch.' },
    ],
    outro:
      "In practice it's unglamorous and concrete: page titles and descriptions written for humans and crawlers both, a clean semantic structure, fast loads, descriptive links, structured data, and — above all — pages that exist for the questions your audience actually asks. We do this from the first line of the build, not as a bolt-on afterward, because retrofitting SEO onto a finished site is how it ends up half-done.",
  },
  content: {
    title: 'Your partners already have the insight. We remove the writing.',
    intro:
      "The reason most firms don't publish isn't that they have nothing to say — it's that turning a sharp thought into a finished article is a job nobody has time for. So the thinking stays in partners' heads, or it goes to LinkedIn once a quarter and stops. The content engine fixes the bottleneck by removing the part that costs partners time: the writing.",
    steps: [
      { n: '1', t: 'A partner records, in two minutes', b: 'After a board meeting, on a walk, between flights — a partner records a voicenote or a short video about what they just learned. No outline, no writing. Just the thinking, out loud.' },
      { n: '2', t: 'We shape it into an article', b: "We transcribe it and turn it into a clean, well-argued article in your firm's voice — structure, headings, the right examples — not a transcript with the ums removed." },
      { n: '3', t: 'You approve; we publish', b: 'You see a draft and give one round of notes. We publish it on your site, structured for search from the first line — title, headings, internal links, schema.' },
      { n: '4', t: 'We repurpose it everywhere', b: 'The same idea becomes a LinkedIn post, an X thread, and a short clip if there was video — sized and written for each platform, not copy-pasted across them.' },
      { n: '5', t: 'It compounds, weekly', b: 'Repeat at a steady cadence and the firm builds a body of work: a back catalogue that ranks, an audience that grows, and partners who are known for their thinking.' },
    ],
  },
  together: {
    title: "SEO and content don't add up. They compound.",
    intro:
      "This is why we do all three rather than one. A beautiful site with nothing to read doesn't rank. SEO with no content has nothing to point at. Content with no SEO builds someone else's audience. Put them together and they feed each other.",
    nodes: [
      { t: 'Content gives SEO something worth ranking', s: 'Every article is a page that can rank for a real question.' },
      { t: 'SEO gives content an audience', s: 'Search delivers the exact founders and LPs the article was written for.' },
      { t: 'Together they produce inbound', s: 'People arrive informed, convinced, and ready to talk — on your terms.' },
    ],
  },
  faqHeading: 'What VC partners ask before they start.',
  faq: [
    { q: 'What does on-page SEO do for a venture firm?', a: 'On-page SEO makes a venture firm findable when founders and LPs search. It does three things: it brings inbound from people who arrive already convinced, it makes you discoverable for your own thesis terms instead of directories, and it positions your pages as the clearest thinking on a topic.' },
    { q: 'How do you turn voicenotes into content?', a: "A partner records a two-minute voicenote or short video after a meeting. We transcribe it, shape it into a finished article in your firm's voice, and you approve a draft. Then we publish it, structured for search, and repurpose it into LinkedIn posts, an X thread, and short clips." },
    { q: 'How long does a website build take?', a: 'A full build typically runs about six weeks from kickoff to launch: audit and positioning, design, then an SEO-structured build. You see a real first design before committing, and the content engine begins publishing on a weekly cadence once the site is live.' },
    { q: 'Do you write the content, or do we?', a: "We do the writing. Your partners supply the thinking in the most natural form — a voicenote or a short video — and we turn it into finished articles and social posts. You approve drafts. The goal is authority that compounds without adding to a partner's week." },
    { q: "What does it cost, and what's the risk?", a: "We build a real first design of your new site before you commit. If you love it, we continue, with three revisions included. If you don't, you owe nothing. Pricing depends on scope across the three services, and we quote it after a short call." },
    { q: 'Do you only work with venture firms?', a: 'Venture and private equity firms are our focus. We also take a small number of PMS — portfolio management service — engagements as pilots. The work is the same: a portfolio-led site, on-page SEO, and a content engine that turns expertise into authority.' },
  ],
};

const portfolio: ApproachContent = {
  meta: {
    title: 'Website design, SEO & content for PMS firms',
    description:
      'How we build for PMS firms: a credibility-first site, on-page SEO that brings qualified HNI enquiry, and a content engine that turns voicenotes into articles and social.',
    og: '/og/portfolio-approach.png',
    keywords: 'PMS website, on-page SEO for PMS, content engine for fund managers, SEBI registered PMS marketing, HNI inbound',
  },
  hero: {
    lead: 'Three things, each done',
    em: 'as if it were the whole job.',
    copy: "We don't sell a menu. We do website design, on-page SEO, and a content engine for SEBI-registered PMS firms — and the reason they're worth doing together is that each one makes the other two work harder.",
  },
  website: {
    title: 'The site decides whether a wealthy investor trusts you.',
    paras: [
      'An HNI investor researches a firm before the first call. An advisor vets it before a recommendation. In both cases the question is the same — is this firm institutional, disciplined, and safe to trust with a decade of capital? Strong returns get you onto the shortlist; a brochure site from 2016 quietly answers "no" before a single number is read.',
      'We rebuild the site around the track record and the discipline behind it. Performance, strategy, and SEBI registration communicate with institutional clarity, within the compliance guardrails. It loads in under a second and reads well on a phone, because that is where it will actually be opened.',
    ],
    points: [
      'Performance and strategy communicated with institutional clarity',
      'Compliance-aware copy that stays within SEBI guardrails',
      'A credibility layer that signals scale before AUM reaches it',
      'Sub-second loads, accessible, and built to read on mobile',
    ],
  },
  seo: {
    title: 'Being good is not the same as being found.',
    intro:
      "On-page SEO is the part of the work most PMS firms underrate, so it's the part we argue hardest for. It isn't keyword stuffing or vanity metrics. It's making sure that when an HNI or an advisor searches, your pages are what they find — not an aggregator selling your name as a lead. There are three reasons it matters.",
    why: [
      { k: 'Inbound', body: 'An investor who finds you by searching arrives already qualified. They have read your strategy, seen your track record, and decided you understand how to grow wealth — before the first call.' },
      { k: 'Discoverability', body: 'HNIs and advisors search in plain language: "best PMS for long-term wealth," "portfolio management for HNIs in India." If those pages aren\'t yours, they\'re a directory\'s — and the lead is sold elsewhere.' },
      { k: 'Authority', body: 'Ranking for the strategy you actually run does more than bring traffic. It positions the firm as the clearest thinker on the approach. The search result becomes part of the pitch.' },
    ],
    outro:
      "In practice it's unglamorous and concrete: page titles and descriptions written for humans and crawlers both, a clean semantic structure, fast loads, descriptive links, structured data, and — above all — pages that exist for the questions HNIs actually ask. We do this from the first line of the build, not as a bolt-on, because retrofitting SEO onto a finished site is how it ends up half-done.",
  },
  content: {
    title: 'Your fund managers already have the insight. We remove the writing.',
    intro:
      "The reason most PMS firms don't publish isn't that they have nothing to say — it's that turning a sharp market view into a finished, compliance-aware article is a job nobody has time for. So the thinking stays in the managers' heads, or it goes out as a quarterly note and stops. The content engine fixes the bottleneck by removing the part that costs managers time: the writing.",
    steps: [
      { n: '1', t: 'A manager records, in two minutes', b: 'After a review, between market hours, on the way home — a fund manager records a voicenote or a short video about what they are seeing. No outline, no writing. Just the thinking, out loud.' },
      { n: '2', t: 'We shape it into an article', b: "We transcribe it and turn it into a clean, compliance-aware article in your firm's voice — structure, headings, the right framing — not a transcript with the ums removed." },
      { n: '3', t: 'You approve; we publish', b: 'You see a draft and give one round of notes, including any compliance edits. We publish it on your site, structured for search from the first line — title, headings, internal links, schema.' },
      { n: '4', t: 'We repurpose it everywhere', b: 'The same idea becomes a LinkedIn post, an X thread, and a short clip if there was video — sized and written for each platform, not copy-pasted across them.' },
      { n: '5', t: 'It compounds, weekly', b: 'Repeat at a steady cadence and the firm builds a body of work: a back catalogue that ranks, an audience of investors that grows, and managers who are known for their thinking.' },
    ],
  },
  together: {
    title: "SEO and content don't add up. They compound.",
    intro:
      "This is why we do all three rather than one. A credible site with nothing to read doesn't rank. SEO with no content has nothing to point at. Content with no SEO builds someone else's audience. Put them together and they feed each other.",
    nodes: [
      { t: 'Content gives SEO something worth ranking', s: 'Every article is a page that can rank for a real wealth question.' },
      { t: 'SEO gives content an audience', s: 'Search delivers the exact HNIs and advisors the article was written for.' },
      { t: 'Together they produce qualified enquiry', s: 'Investors arrive informed, convinced, and ready to talk — on your terms.' },
    ],
  },
  faqHeading: 'What fund managers ask before they start.',
  faq: [
    { q: 'What does on-page SEO do for a PMS firm?', a: 'On-page SEO makes a PMS firm findable when HNIs and advisors search. It does three things: it brings inbound from investors who arrive already qualified, it makes you discoverable for wealth terms instead of directories, and it positions your pages as the clearest thinking on your strategy.' },
    { q: 'How do you keep the content compliant?', a: 'Every article goes through your approval before it is published, and we write within SEBI guardrails from the first draft — no performance promises, no guarantees. You give one round of notes, including any compliance edits, and nothing goes live without your sign-off.' },
    { q: 'How do you turn voicenotes into content?', a: "A fund manager records a two-minute voicenote or short video. We transcribe it, shape it into a finished, compliance-aware article in your firm's voice, and you approve a draft. Then we publish it, structured for search, and repurpose it into LinkedIn posts, an X thread, and short clips." },
    { q: 'How long does a website build take?', a: 'A full build typically runs about six weeks from kickoff to launch: audit and positioning, design, then an SEO-structured build. You see a real first design before committing, and the content engine begins publishing on a weekly cadence once the site is live.' },
    { q: "What does it cost, and what's the risk?", a: "We build a real first design of your new site before you commit. If you love it, we continue, with three revisions included. If you don't, you owe nothing. Pricing depends on scope across the three services, and we quote it after a short call." },
    { q: 'Do you only work with PMS firms?', a: 'SEBI-registered PMS and AIF firms are a core focus, alongside venture capital firms. The work is the same in both: a credibility-first site, on-page SEO, and a content engine that turns expertise into authority.' },
  ],
};

export const approachContent: Record<Audience, ApproachContent> = { venture, portfolio };
