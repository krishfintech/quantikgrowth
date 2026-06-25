import React from 'react';
import { motion } from 'motion/react';
import {
  ArticleRow,
  Button,
  Eyebrow,
  Nav,
  OfferBand,
  ServiceTrio,
  SiteFooter,
  WorkLedger,
  useFadeUpVariants,
  useStaggerVariants,
  viewportOnce,
  type NavLink,
  type ServiceItem,
} from './components/site';
import { work } from './data/work';
import { writing } from './data/writing';

// TODO: replace with the real Loom share link for the 4-minute walkthrough.
const LOOM_WALKTHROUGH_URL = '#';

const NAV_LINKS: NavLink[] = [
  { label: 'Work', href: '/work' },
  { label: 'Writing', href: '/writing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const SERVICE_ITEMS: ServiceItem[] = [
  {
    numeral: 'i.',
    title: 'Portfolio, presented properly',
    body: "A site built around the companies you've backed — where a logo wall becomes a set of stories, and a founder or LP understands your taste in the first ten seconds.",
  },
  {
    numeral: 'ii.',
    title: 'Investment case studies',
    body: 'We turn your best decisions into editorial case studies: the thesis, the partnership, the outcome. Proof of judgment — not just a name on a grid.',
  },
  {
    numeral: 'iii.',
    title: 'A publishing engine',
    body: "A built-in writing system so your partners' thinking compounds into authority over time.",
    pilotLabel: 'Video assets — available as a pilot',
  },
];

const Hero = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08, 0.1);

  return (
    <section className="pt-[104px] pb-[92px]">
      <motion.div
        className="max-w-[1120px] mx-auto px-8"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp}>
          <Eyebrow className="mb-[26px]">Digital infrastructure for venture firms</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display font-normal text-[clamp(2.9rem,6.2vw,5rem)] leading-[1.04] tracking-[-0.018em] max-w-[16ch]"
        >
          A venture firm, presented <em className="italic text-brand">as well as it invests.</em>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-[clamp(1.05rem,1.6vw,1.28rem)] text-ink-soft max-w-[54ch] mt-[30px] leading-[1.55]"
        >
          QuantikGrowth designs clean, fast websites for VC and PE firms — built around the companies
          you've backed, the case studies that prove your judgment, and a publishing engine that turns
          your thinking into authority.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 sm:gap-6 mt-[42px]">
          <Button variant="primary" href="/work" arrow>
            See the work
          </Button>
          <Button variant="ghost" href={LOOM_WALKTHROUGH_URL}>
            Watch the 4-minute walkthrough
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

const SectionHead = ({ title, label }: { title: string; label: string }) => {
  const fadeUp = useFadeUpVariants();

  return (
    <motion.div
      className="flex flex-wrap items-baseline justify-between gap-6 mb-[54px]"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <h2 className="font-display font-normal text-[clamp(1.7rem,3vw,2.35rem)] tracking-[-0.01em]">{title}</h2>
      <span className="text-[14px] text-ink-soft">{label}</span>
    </motion.div>
  );
};

const HomePage = () => (
  <div className="bg-paper">
    <Nav links={NAV_LINKS} ctaLabel="Start a project" ctaHref="/contact" />

    <main>
      <Hero />

      <section id="services" className="border-t border-line py-[88px] scroll-mt-[90px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead title="What we build" label="Three things, done properly" />
          <ServiceTrio items={SERVICE_ITEMS} />
          <p className="text-[13px] text-ink-soft mt-10">
            Built for venture firms. We take a select number of private equity and PMS engagements as pilots.
          </p>
        </div>
      </section>

      <section id="work" className="border-t border-line py-[88px] scroll-mt-[90px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead title="Selected work" label="Representative builds" />
          <WorkLedger items={work.slice(0, 3)} />
        </div>
      </section>

      <section id="writing" className="border-t border-line py-[88px] scroll-mt-[90px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <SectionHead title="Writing" label="On how venture firms present themselves" />
          <ArticleRow articles={writing.slice(0, 3)} />
        </div>
      </section>

      <section className="border-t border-line py-[88px]">
        <div className="max-w-[1120px] mx-auto px-8">
          <OfferBand
            headline="You see the design before you pay."
            body="We build a real first design of your new site. If you love it, we continue — three revisions included. If you don't, you owe nothing."
            ctaLabel="Start a project"
            ctaHref="/contact"
          />
        </div>
      </section>
    </main>

    <SiteFooter
      id="contact"
      className="scroll-mt-[90px]"
      tagline="Digital infrastructure for venture & private equity firms — with select PMS pilots. Based in Mumbai."
      columns={[
        {
          heading: 'Explore',
          links: [
            { label: 'Work', href: '/work' },
            { label: 'Writing', href: '/writing' },
            { label: 'About', href: '/about' },
          ],
        },
        {
          heading: 'Get in touch',
          links: [
            { label: 'krish@quantikgrowth.in', href: 'mailto:krish@quantikgrowth.in' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/quantikgrowth' },
            { label: 'Start a project', href: '/contact' },
          ],
        },
      ]}
      legalLeft="© 2026 QuantikGrowth"
      legalRight="Mumbai, India"
    />
  </div>
);

export default HomePage;
