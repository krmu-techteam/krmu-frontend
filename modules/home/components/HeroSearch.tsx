"use client";

import React, { useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import Link from 'next/link';

interface HeroSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeroSearch = ({ isOpen, onClose }: HeroSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      inputRef.current?.focus();
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const popularSearches = [
    { name: "B.Tech Computer Science", href: "/programmes" },
    { name: "MBA Admission 2026", href: "/admissions" },
    { name: "Fee Structure", href: "/admissions" },
    { name: "Scholarships", href: "/admissions" },
    { name: "Placement Report", href: "/placements" },
  ];

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center bg-[#04101A]/20 backdrop-blur-xl transition-all duration-300 overflow-hidden pt-[15vh] md:pt-[20vh]">
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white/50 hover:text-white transition-all p-3 rounded-full hover:bg-white/5 border border-white/5 hover:border-white/10 cursor-pointer z-20"
      >
        <X size={20} />
      </button>

      <div className="w-full max-w-2xl px-6 flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-8 duration-300 ease-out relative z-10">
        <div className="flex flex-col gap-2">
          <div className="relative group">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search programs, admissions, campus..."
              className="w-full bg-white/[0.03] border border-white/15 text-white rounded-sm py-5 pl-14 pr-6 text-lg md:text-xl focus:outline-none focus:border-secondary/60 focus:bg-white/[0.05] focus:ring-4 focus:ring-secondary/10 transition-all duration-300 placeholder-white/30 font-light tracking-wide shadow-2xl"
            />
            <Search 
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-secondary transition-colors duration-300" 
              size={22} 
            />
          </div>
          <div className="flex justify-between items-center px-1">
            <span className="text-[11px] text-white/30 uppercase tracking-widest">Type your search query</span>
            <span className="text-[11px] text-white/30 uppercase tracking-widest hidden sm:inline">ESC to close</span>
          </div>
        </div>

        <div className="text-white/80">
          <p className="text-[12px] font-medium uppercase tracking-widest text-white/40 mb-4">Popular Searches</p>
          <div className="flex flex-wrap gap-2.5">
            {popularSearches.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="bg-white/[0.02] hover:bg-secondary/10 border border-white/10 hover:border-secondary/40 text-[13px] font-normal px-4.5 py-2.5 rounded-sm transition-all duration-300 text-white/80 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
