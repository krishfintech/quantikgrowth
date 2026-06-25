import React from 'react';
import { motion } from 'motion/react';
import { arrowHoverVariants } from './motion';

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
  primary: 'bg-brand text-white hover:bg-brand-deep',
  ghost: 'text-ink border-b border-transparent hover:text-brand hover:border-brand',
};

const BASE_CLASSES =
  'inline-flex items-center gap-[9px] rounded-full px-[26px] py-[14px] text-[16px] font-medium transition-colors duration-200';

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
    <motion.span variants={arrowHoverVariants(3)} transition={{ duration: 0.2, ease: 'easeOut' }}>
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
