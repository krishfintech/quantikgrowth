import type { WorkItem } from '../components/site';
import type { Audience } from '../audience';

// Deep, representative case studies — one per audience track. Illustrative work,
// not real named client engagements, and framed as such on the page.
export const work: WorkItem[] = [
  {
    slug: 'northbound-capital',
    company: 'Northbound Capital',
    thesis:
      'A portfolio-led rebuild, on-page SEO, and a content engine for an early-stage climate fund — shown end to end.',
    sector: 'Seed / Series A · Climate',
    year: '2026',
    audience: 'venture',
    summary:
      "Northbound had a sharp climate thesis and a strong early portfolio, but a website that read like a directory and a track record that lived in the partners' heads. We rebuilt the site around the companies, made it findable, and stood up a content engine so the partners' thinking compounds — all three services, working together.",
    metrics: [
      { label: 'Inbound founder intros', value: '+41%' },
      { label: 'Organic search traffic', value: '3.4×' },
      { label: 'Kickoff to launch', value: '6 wks' },
    ],
  },
  {
    slug: 'meridian-pms',
    company: 'Meridian PMS',
    thesis:
      'A credibility-first rebuild, on-page SEO, and a content engine for a SEBI-registered PMS — shown end to end.',
    sector: 'PMS · Mid & Small Cap',
    year: '2026',
    audience: 'portfolio',
    summary:
      'Meridian had an enviable track record and a website that gave none of it away — a brochure from 2016, invisible in search, with every enquiry coming through referrals. We rebuilt the site around the performance and the strategy, made it findable to searching HNIs, and stood up a content engine so the fund managers’ thinking reaches investors directly.',
    metrics: [
      { label: 'Qualified HNI enquiries', value: '+34%' },
      { label: 'Organic search traffic', value: '3.2×' },
      { label: 'Kickoff to launch', value: '6 wks' },
    ],
  },
];

export const workByAudience = (audience: Audience): WorkItem[] => work.filter((w) => w.audience === audience);
