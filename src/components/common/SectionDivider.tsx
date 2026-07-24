"use client";

import React from "react";

interface SectionDividerProps {
  className?: string;
  maxWidth?: string;
}

export default function SectionDivider({
  className = "",
  maxWidth = "1400px",
}: SectionDividerProps) {
  return (
    <div
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] z-10 ${className}`}
      style={{ maxWidth }}
    >
      <div className="w-full h-full bg-[linear-gradient(90deg,#1A1A1A_0%,#FFFFFF_48.08%,#1A1A1A_100%)] opacity-80"></div>
    </div>
  );
}
