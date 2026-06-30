import type { ArticleItem } from '../components/site';
import type { Audience } from '../audience';

// Order matters: the first article in each audience's filtered list becomes the
// "Featured" card on the Writing index. The mega essay is tagged for both tracks
// and placed first, so it leads (and is featured) on both the venture and the
// portfolio pages. The remaining four fall into the per-track "More writing" list.
export const writing: ArticleItem[] = [
  {
    slug: 'revolutionizing-investment-firm-presence',
    title: 'Revolutionizing how PMS and VC firms present themselves online',
    date: 'Jun 2026',
    readingMinutes: 12,
    tag: 'Featured',
    audiences: ['venture', 'portfolio'],
    excerpt:
      'The investment industry has a presentation problem. Funds, PE shops and PMS boutiques present themselves at a fraction of the sophistication of their actual work — and it is quietly costing them growth. Here is the new standard.',
  },
  {
    slug: 'pms-growth-ceiling',
    title: 'The growth ceiling most PMS firms never see',
    date: 'Jun 2026',
    readingMinutes: 5,
    tag: 'Growth',
    audiences: ['portfolio'],
    excerpt:
      'Most boutique PMS firms hit an invisible ceiling on AUM growth. It isn’t performance — it’s presence. Here’s why the ceiling forms, and the three moves that lift it.',
  },
  {
    slug: 'pms-invisible-to-inevitable',
    title: 'From invisible to inevitable',
    date: 'Jun 2026',
    readingMinutes: 5,
    tag: 'Trust',
    audiences: ['portfolio'],
    excerpt:
      'Some boutique PMS firms attract HNIs effortlessly; others chase every rupee. The difference is rarely performance — it’s a system that makes a firm easy to discover, trust, and remember.',
  },
  {
    slug: 'vc-first-five-seconds',
    title: 'The first five seconds',
    date: 'Jun 2026',
    readingMinutes: 5,
    tag: 'Strategy',
    audiences: ['venture'],
    excerpt:
      'A founder decides whether to take your fund seriously in about five seconds — and almost none of it is about your returns. Here’s what wins those seconds.',
  },
  {
    slug: 'vc-portfolio-best-salesperson',
    title: 'Your portfolio is your best salesperson',
    date: 'Jun 2026',
    readingMinutes: 5,
    tag: 'Portfolio',
    audiences: ['venture'],
    excerpt:
      'Most funds display their portfolio as a wall of logos. The best funds turn the same portfolio into their most persuasive sales asset — proof of judgment, not a grid of names.',
  },
];

export const writingByAudience = (audience: Audience): ArticleItem[] =>
  writing.filter((a) => a.audiences.includes(audience));
