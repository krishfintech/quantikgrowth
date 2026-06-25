import type { WorkItem } from '../components/site';

export const work: WorkItem[] = [
  {
    slug: 'atlas-ventures',
    company: 'Atlas Ventures',
    thesis: "A portfolio-led rebuild that made an early-stage thesis legible to founders.",
    sector: 'Seed / Series A',
    year: '2026',
    summary:
      "Atlas had a sharp point of view and a strong portfolio, but a website that read like a directory. We rebuilt the site around the companies — turning a logo wall into a set of stories a founder could understand in ten seconds.",
    metrics: [
      { label: 'Inbound founder intros', value: '+38%' },
      { label: 'Time on portfolio', value: '2.4×' },
      { label: 'Kickoff to launch', value: '6 wks' },
    ],
  },
  {
    slug: 'meridian-capital',
    company: 'Meridian Capital',
    thesis: 'Investment case studies that turned a quiet track record into a clear story.',
    sector: 'Growth equity',
    year: '2026',
    summary:
      "Meridian's best work was invisible — buried in decks and memory. We built an editorial case-study system: thesis, partnership, outcome. Proof of judgment an LP could read, not just a name on a grid.",
    metrics: [
      { label: 'Case studies published', value: '9' },
      { label: 'LP deck requests', value: '+27%' },
      { label: 'Avg. read depth', value: '74%' },
    ],
  },
  {
    slug: 'northwind',
    company: 'Northwind',
    thesis: 'A publishing engine that gave the partners a home for their thinking.',
    sector: 'Multi-stage',
    year: '2026',
    summary:
      "Northwind's partners were writing — on Substack, on LinkedIn, in scattered places that built someone else's audience. We gave them a fast, owned publishing engine so their thinking compounds into authority on their own domain.",
    metrics: [
      { label: 'Essays in first quarter', value: '14' },
      { label: 'Organic search traffic', value: '3.1×' },
      { label: 'Newsletter signups', value: '+1,900' },
    ],
  },
];
