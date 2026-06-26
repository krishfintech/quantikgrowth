import React, { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'motion/react';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

/** Counts up to `end` when scrolled into view. Under reduced motion it shows the
 *  final value immediately. */
export const CountUp = ({ end, duration = 1.6, prefix = '', suffix = '', decimals = 0, className = '' }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? end : 0);

  useEffect(() => {
    if (reduceMotion) {
      setValue(end);
      return;
    }
    if (!inView) return;

    let raf = 0;
    let start: number | null = null;
    const step = (t: number) => {
      if (start === null) start = t;
      const progress = Math.min((t - start) / (duration * 1000), 1);
      // easeOutCubic for a settled finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduceMotion, end, duration]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};
