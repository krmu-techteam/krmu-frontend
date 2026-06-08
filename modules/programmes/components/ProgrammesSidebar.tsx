'use client';

import React, { useRef, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export interface SidebarSchool {
  id: string | number;
  name: string;
  slug: string;
}

interface ProgramsSidebarProps {
  activeSchoolSlug: string;
  onSchoolChange: (slug: string) => void;
  schoolsList: SidebarSchool[];
  isLoading?: boolean;
}

export default function ProgrammesSidebar({ activeSchoolSlug, onSchoolChange, schoolsList, isLoading = false }: ProgramsSidebarProps) {
  // Simple draggable scroll implementation for horizontal scroll on mobile
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div 
      ref={scrollRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className="overflow-x-auto lg:overflow-y-auto no-scrollbar cursor-grab active:cursor-grabbing w-full lg:w-[320px] shrink-0"
    >
      <div className="flex flex-row lg:flex-col py-1 min-w-max lg:min-w-0 bg-transparent lg:bg-[#061623] rounded-none lg:rounded-sm">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div key={`skeleton-${i}`} className="px-5 lg:px-6 py-4 lg:py-4 w-[150px] lg:w-full">
              <Skeleton className="h-4 w-3/4 bg-white/5 rounded-sm" />
            </div>
          ))
        ) : (
          schoolsList.map((school, index) => (
            <React.Fragment key={school.id}>
              <button
                onClick={() => onSchoolChange(school.slug)}
                className={`text-left px-4 lg:pl-3 lg:pr-5 py-3 lg:py-2 text-[14px] lg:text-[15px] transition-all duration-300 cursor-pointer whitespace-nowrap lg:whitespace-normal leading-snug ${
                  activeSchoolSlug === school.slug
                    ? 'text-[#00AEEF] font-medium'
                    : 'text-white/60 hover:text-white/90'
                }`}
              >
                {school.name}
              </button>
              {index !== schoolsList.length - 1 && (
                <div className="relative w-[1px] self-stretch lg:hidden shrink-0 my-1">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                  <div className="absolute inset-y-[10%] left-1/2 -translate-x-1/2 w-[24px] bg-[#00AEEF]/10 blur-[10px]" />
                  <div className="absolute inset-y-[25%] left-1/2 -translate-x-1/2 w-[8px] bg-white/20 blur-[4px]" />
                </div>
              )}
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
}
