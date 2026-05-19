"use client";

import React, { useRef } from "react";
import Link from "next/link";

interface HoverCardProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function HoverCard({ href, className, style, children }: HoverCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <Link
      ref={cardRef}
      href={href}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-lg p-[1px] overflow-hidden bg-[#051730] transition-all duration-500 ease-out cursor-pointer ${className || ""}`}
      style={style}
    >
      {/* 1. Outer Border Glow (Tracks mouse precisely on the border) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
        style={{
          background: "radial-gradient(130px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 255, 255, 0.28), transparent 80%)",
        }}
      />

      {/* 2. Inner Card Content Container */}
      <div className="relative w-full h-full rounded-[7px] bg-[#051730]/95 backdrop-blur-md p-3 md:p-4 min-h-[118px] flex flex-col justify-between overflow-hidden z-20">
        
        {/* 3. Dynamic Cursor-Tracking Inner Ambient Spotlight */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
          style={{
            background: "radial-gradient(160px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01) 50%, transparent 100%)"
          }}
        />
        
        {/* 4. Real card children content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between">
          {children}
        </div>
      </div>
    </Link>
  );
}
