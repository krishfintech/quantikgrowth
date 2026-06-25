import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export const Eyebrow = ({ children, className = '' }: EyebrowProps) => (
  <div className={`flex items-center gap-3 text-[14px] font-medium text-brand ${className}`}>
    <span className="h-px w-[34px] bg-brand" />
    {children}
  </div>
);
