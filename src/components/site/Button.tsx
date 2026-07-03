import React from 'react';
import { motion } from 'motion/react';
import { arrowHoverVariants, EASE } from './motion';

export type ButtonVariant = 'primary' | 'ghost';

interface ButtonProps {
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  arrow?: boolean;
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'rounded-full bg-brand px-[26px] py-[14px] text-white hover:bg-brand-deep active:bg-brand-deep',
  // A quiet text action: no phantom pill padding, so its left edge aligns
  // optically with the copy above it. Hairline underline breathes on hover.
  ghost: 'py-[14px] text-ink text-link hover:text-brand',
};

const BASE_CLASSES =
  'inline-flex items-center gap-[9px] text-[16px] font-medium transition-colors duration-300 ease-gentle';

export const Button = ({
  variant = 'primary',
  href,
  onClick,
  arrow = false,
  type = 'button',
  className = '',
  children,
}: ButtonProps) => {
  const classes = `${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`;

  const arrowEl = arrow && (
    <motion.span variants={arrowHoverVariants(3)} transition={{ duration: 0.35, ease: EASE }}>
      →
    </motion.span>
  );

  if (href) {
    return (
      <motion.a href={href} onClick={onClick} className={classes} initial="rest" whileHover="hover" animate="rest">
        {children}
        {arrowEl}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} initial="rest" whileHover="hover" animate="rest">
      {children}
      {arrowEl}
    </motion.button>
  );
};
