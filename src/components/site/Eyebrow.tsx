import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export const Eyebrow = ({ children, className = '' }: EyebrowProps) => (
  <div
    className={`flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.18em] text-brand ${className}`}
  >
    <span className="h-px w-[34px] bg-brand/60" />
    {children}
  </div>
);
