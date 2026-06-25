import { useReducedMotion, type Variants } from 'motion/react';

export const FADE_UP_DISTANCE = 14;
export const FADE_UP_DURATION = 0.6;

/** Single reusable fade-up entrance: opacity 0→1, y 14→0. Pair with whileInView + viewportOnce. */
export const useFadeUpVariants = (): Variants => {
  const reduceMotion = useReducedMotion();

  return {
    hidden: { opacity: 0, y: reduceMotion ? 0 : FADE_UP_DISTANCE },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: FADE_UP_DURATION, ease: 'easeOut' },
    },
  };
};

/** Wraps a group of fade-up children so they reveal in sequence instead of at once. */
export const useStaggerVariants = (staggerChildren = 0.12, delayChildren = 0): Variants => {
  const reduceMotion = useReducedMotion();

  return {
    hidden: {},
    visible: {
      transition: reduceMotion ? { staggerChildren: 0, delayChildren: 0 } : { staggerChildren, delayChildren },
    },
  };
};

/** Standard whileInView viewport config: animate once, slightly before fully in view. */
export const viewportOnce = { once: true, margin: '-80px' } as const;

/** Hover-nudge variants for arrow glyphs/icons inside an interactive ancestor using whileHover="hover". */
export const arrowHoverVariants = (distance = 3): Variants => ({
  rest: { x: 0 },
  hover: { x: distance },
});
