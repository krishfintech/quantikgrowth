import React from 'react';
import { motion } from 'motion/react';
import { Button } from './Button';
import { Eyebrow } from './Eyebrow';
import { useFadeUpVariants, useStaggerVariants, viewportOnce } from './motion';

/**
 * The Offer section — institutional register, no hype. The Full Engagement is
 * presented first so the Editorial tier reads as the step down. Copy is shared
 * across both audience tracks (it already speaks to portfolio managers inline).
 * Prose is capped to a comfortable measure per the wider desktop layout.
 */

interface Tier {
  name: string;
  price: string;
  descriptor: string;
  points: string[];
  result: string;
  featured?: boolean;
}

const TIERS: Tier[] = [
  {
    name: 'The Full Engagement',
    price: '₹2.5 lakh to build · ₹75,000 monthly',
    descriptor: 'For firms that intend to be unmissable.',
    points: [
      'A custom institutional website, designed and built to match the calibre of your work',
      'Your discoverability foundation — on-page SEO, and optimisation for AI answer engines (AEO/GEO), so both the right people and the tools they now ask will find you',
      'The complete content engine — your thinking and existing material, turned into articles, a newsletter, and posts across every platform your investors use',
      'Positioning and profile refinement for your partners',
      'For portfolio managers: an AI investor-relations concierge, included — answering diligence questions in your firm’s voice, within compliance, around the clock',
    ],
    result: 'Everywhere your investors look, the firm is present, articulate, and evidently serious.',
    featured: true,
  },
  {
    name: 'The Editorial Engagement',
    price: '₹1.5 lakh to build · ₹30,000 monthly',
    descriptor: 'For firms building authority through the written word.',
    points: [
      'The same custom institutional website and discoverability foundation (SEO + AEO/GEO)',
      'The written content engine — your thinking, turned into articles, a newsletter, and written social content',
    ],
    result: 'A firm that is found, read, and remembered.',
  },
];

const TierCard = ({ tier }: { tier: Tier; key?: React.Key }) => {
  const fadeUp = useFadeUpVariants();
  return (
    <motion.div
      variants={fadeUp}
      className={`flex h-full flex-col rounded-[18px] p-7 sm:p-9 ${
        tier.featured
          ? 'border border-brand/40 bg-brand-tint shadow-float'
          : 'border border-line bg-paper-soft'
      }`}
    >
      <h3 className="font-display text-[clamp(1.5rem,2.4vw,1.9rem)] leading-[1.12] tracking-[-0.01em] text-ink">
        {tier.name}
      </h3>
      <div className="mt-3 font-display text-[1.15rem] italic text-brand-deep">{tier.price}</div>
      <p className="mt-2 text-[15px] text-ink-soft">{tier.descriptor}</p>

      <ul className="mt-7 space-y-3.5">
        {tier.points.map((p) => (
          <li key={p} className="flex gap-3.5">
            <span className="mt-[10px] h-px w-4 shrink-0 bg-brand" />
            <span className="max-w-[54ch] text-[15px] leading-[1.55] text-ink">{p}</span>
          </li>
        ))}
      </ul>

      <p className="mt-auto pt-7 text-[15px] leading-[1.55] text-ink-soft">
        <span className="font-medium text-ink">The result: </span>
        {tier.result}
      </p>
    </motion.div>
  );
};

const Note = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const fadeUp = useFadeUpVariants();
  return (
    <motion.div variants={fadeUp} className="rounded-[16px] border border-line bg-paper-soft p-7">
      <h3 className="font-display text-[1.25rem] leading-[1.2] tracking-[-0.01em] text-ink">{title}</h3>
      <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.6] text-ink-soft">{children}</p>
    </motion.div>
  );
};

export const Offer = () => {
  const fadeUp = useFadeUpVariants();
  const stagger = useStaggerVariants(0.08);

  return (
    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={viewportOnce}>
      <motion.div variants={fadeUp}>
        <Eyebrow className="mb-5">The engagement</Eyebrow>
        <h2 className="font-display font-normal text-[clamp(1.9rem,3.4vw,2.7rem)] leading-[1.1] tracking-[-0.01em] max-w-[20ch]">
          Presence, built to an <em className="italic text-brand">institutional standard</em>
        </h2>
        <p className="mt-6 max-w-[64ch] text-[1.12rem] leading-[1.65] text-ink-soft">
          You send us your thinking. We build everything that makes a firm discovered, understood, and
          trusted — long before the first conversation. The work asks almost nothing of you.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:items-stretch">
        {TIERS.map((t) => (
          <TierCard key={t.name} tier={t} />
        ))}
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <motion.div
          variants={fadeUp}
          className="rounded-[16px] border border-line bg-paper-soft p-7 md:col-span-2"
        >
          <h3 className="font-display text-[1.35rem] leading-[1.2] tracking-[-0.01em] text-ink">
            You see it before you commit.
          </h3>
          <p className="mt-3 max-w-[64ch] text-[15.5px] leading-[1.6] text-ink-soft">
            We begin by designing your site — the real work, not a mock-up. You see it first. If it isn’t
            right, we revise, up to three times, until it is. You commit only when you would be proud to put
            it in front of an LP or an HNI.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-[16px] border border-brand/40 bg-brand text-white p-7 md:col-span-2"
        >
          <h3 className="font-display text-[1.35rem] leading-[1.2] tracking-[-0.01em]">Founding clients</h3>
          <p className="mt-3 max-w-[66ch] text-[15.5px] leading-[1.6] text-brand-muted">
            We are selecting a small number of founding clients — the firms whose engagements become our
            first published case studies. Founding clients are invited at half the build investment, in
            exchange for allowing us to document the work. It is offered once, at this level, and only a few
            places remain.
          </p>
        </motion.div>

        <Note title="Held to a standard, not a promise.">
          We don’t promise rankings or inflows — anyone who does is selling you something. We promise the
          work will meet an institutional standard, and we revise until it does.
        </Note>
        <Note title="A limited practice.">
          We are founder-led by design, and take on only a few firms each quarter, so each receives senior
          attention throughout.
        </Note>
      </div>

      <motion.div variants={fadeUp} className="mt-12 border-t border-line pt-10">
        <p className="font-display text-[clamp(1.4rem,2.6vw,1.95rem)] leading-[1.25] tracking-[-0.01em] max-w-[26ch] text-ink">
          If your presence isn’t yet carrying the weight of your work, begin with a conversation.
        </p>
        <div className="mt-7">
          <Button variant="primary" href="/contact" arrow>
            Begin with a conversation
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};
