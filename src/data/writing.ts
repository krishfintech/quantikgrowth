import type { ArticleItem } from '../components/site';
import type { Audience } from '../audience';

export const writing: ArticleItem[] = [
  {
    slug: 'think-like-a-publisher',
    title: 'Why a venture firm should think like a publisher, not a marketer',
    date: 'Jun 2026',
    readingMinutes: 6,
    audiences: ['venture', 'portfolio'],
    excerpt:
      'Marketing rents attention. Publishing compounds it. For a firm whose entire product is judgment, the difference decides whether founders arrive already convinced.',
  },
  {
    slug: 'logo-wall-is-dead',
    title: 'The logo wall is dead. Long live the investment case study.',
    date: 'Jun 2026',
    readingMinutes: 5,
    audiences: ['venture'],
    excerpt:
      'A grid of portfolio logos proves you wrote a cheque. An investment case study proves you had a reason — and that the reason turned out to be right.',
  },
  {
    slug: 'what-founders-read',
    title: 'What founders actually read before they take your call',
    date: 'May 2026',
    readingMinutes: 4,
    audiences: ['venture'],
    excerpt:
      "By the time a strong founder replies to your email, they've already decided what they think of you. Here is what they looked at to decide it.",
  },
  {
    slug: 'what-hni-investors-read',
    title: 'What an HNI reads before they trust a PMS firm',
    date: 'Jun 2026',
    readingMinutes: 5,
    audiences: ['portfolio'],
    excerpt:
      'Performance gets you considered. The website decides whether a wealthy investor believes you can be trusted with the next decade of their capital.',
  },
  {
    slug: 'seo-for-pms-firms',
    title: 'On-page SEO for PMS firms: getting found when wealth is searching',
    date: 'May 2026',
    readingMinutes: 5,
    audiences: ['portfolio'],
    excerpt:
      'When an HNI searches for a way to grow long-term wealth, a directory ranks for your category — not you. On-page SEO fixes who gets found.',
  },
];

export const writingByAudience = (audience: Audience): ArticleItem[] =>
  writing.filter((a) => a.audiences.includes(audience));
