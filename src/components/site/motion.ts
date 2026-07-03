import { useReducedMotion, type Variants } from 'motion/react';

/* One motion language for the whole site.
   EASE is the signature deceleration — long, calm settle (matches --ease-gentle
   in index.css). EASE_CURTAIN is reserved for the audience-switch sweep. */
export const EASE = [0.16, 1, 0.3, 1] as const;
export const EASE_CURTAIN = [0.76, 0, 0.24, 1] as const;

export const FADE_UP_DISTANCE = 12;
export const FADE_UP_DURATION = 0.75;

/** Single reusable fade-up entrance: opacity 0→1, y 12→0. Pair with whileInView + viewportOnce. */
export const useFadeUpVariants = (): Variants => {
  const reduceMotion = useReducedMotion();

  return {
    hidden: { opacity: 0, y: reduceMotion ? 0 : FADE_UP_DISTANCE },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: FADE_UP_DURATION, ease: EASE },
    },
  };
};

/** Wraps a group of fade-up children so they reveal in sequence instead of at once. */
export const useStaggerVariants = (staggerChildren = 0.1, delayChildren = 0): Variants => {
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
