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
      className="md:sticky md:top-[140px] md:max-h-[calc(100vh-8rem)] overflow-x-auto md:overflow-y-auto no-scrollbar cursor-grab active:cursor-grabbing w-full md:w-[320px] shrink-0"
    >
      <div className="flex flex-row md:flex-col py-2 md:py-4 min-w-max md:min-w-0 bg-[#061623] rounded-sm">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div key={`skeleton-${i}`} className="px-5 md:px-6 py-4 md:py-4 w-[150px] md:w-full">
              <Skeleton className="h-4 w-3/4 bg-white/5 rounded-sm" />
            </div>
          ))
        ) : (
          schoolsList.map((school) => (
            <button
              key={school.id}
              onClick={() => onSchoolChange(school.slug)}
              className={`text-left px-5 md:px-6 py-3 md:py-3 text-[14px] md:text-[15px] transition-all duration-300 cursor-pointer whitespace-nowrap md:whitespace-normal leading-snug ${
                activeSchoolSlug === school.slug
                  ? 'text-[#00AEEF] font-medium'
                  : 'text-white/60 hover:text-white/90'
              }`}
            >
              {school.name}
            </button>
          ))
        )}
      </div>
    </div>
  );
}
