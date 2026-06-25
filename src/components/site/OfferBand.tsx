import React from 'react';
import { motion } from 'motion/react';
import { Button } from './Button';
import { useFadeUpVariants, viewportOnce } from './motion';

interface OfferBandProps {
  headline: string;
  body: string;
  ctaLabel: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  className?: string;
}

export const OfferBand = ({ headline, body, ctaLabel, ctaHref, onCtaClick, className = '' }: OfferBandProps) => {
  const fadeUp = useFadeUpVariants();

  return (
    <motion.div
      className={`bg-brand text-white rounded-[18px] px-8 md:px-14 py-[74px] text-center ${className}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <h2 className="font-display font-normal text-[clamp(1.9rem,3.4vw,2.7rem)] tracking-[-0.01em] leading-[1.1] max-w-[20ch] mx-auto">
        {headline}
      </h2>
      <p className="mt-[22px] text-[1.08rem] text-brand-muted max-w-[46ch] mx-auto">{body}</p>
      <div className="mt-[38px] inline-block">
        <Button variant="primary" href={ctaHref} onClick={onCtaClick} arrow className="bg-white! text-brand-deep! hover:bg-brand-tint!">
          {ctaLabel}
        </Button>
      </div>
    </motion.div>
  );
};
