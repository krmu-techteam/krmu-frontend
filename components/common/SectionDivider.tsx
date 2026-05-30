'use client';

import React from 'react';

interface SectionDividerProps {
  className?: string; 
  maxWidth?: string;
}

export default function SectionDivider({ className = '', maxWidth = '1400px' }: SectionDividerProps) {
  return (
    <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px z-10 ${className}`} style={{ maxWidth }}>
      <div className="w-full h-full bg-[linear-gradient(90deg,#1a1a1a_0%,#ffffff_50%,#1a1a1a_100%)] opacity-20 dark:opacity-30"></div>
    </div>
  );
}
