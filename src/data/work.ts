import type { WorkItem } from '../components/site';

// A single, deep, representative case study. It is illustrative work — not a
// real named client engagement — and is framed as such on the page itself.
export const work: WorkItem[] = [
  {
    slug: 'northbound-capital',
    company: 'Northbound Capital',
    thesis:
      'A portfolio-led rebuild, on-page SEO, and a content engine for an early-stage climate fund — shown end to end.',
    sector: 'Seed / Series A · Climate',
    year: '2026',
    summary:
      'Northbound had a sharp climate thesis and a strong early portfolio, but a website that read like a directory and a track record that lived in the partners\' heads. We rebuilt the site around the companies, made it findable, and stood up a content engine so the partners\' thinking compounds — all three services, working together.',
    metrics: [
      { label: 'Inbound founder intros', value: '+41%' },
      { label: 'Organic search traffic', value: '3.4×' },
      { label: 'Kickoff to launch', value: '6 wks' },
    ],
  },
];
