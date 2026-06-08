'use client';

import React, { useRef, useState } from 'react';
import { Search, LayoutGrid, List } from 'lucide-react';
import { SidebarDegree } from './ProgrammesList';

interface ProgrammesFilterHeaderProps {
  activeDegreeSlug: string;
  onDegreeChange: (slug: string) => void;
  degreesList: SidebarDegree[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  programCount: number;
  viewMode: 'list' | 'grid';
  onViewModeChange: (mode: 'list' | 'grid') => void;
}

export default function ProgrammesFilterHeader({
  activeDegreeSlug,
  onDegreeChange,
  degreesList,
  searchQuery,
  onSearchChange,
  programCount,
  viewMode,
  onViewModeChange
}: ProgrammesFilterHeaderProps) {

  
  // Simple draggable scroll for tabs
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
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
    <div className="lg:sticky lg:top-[130px] z-[20] bg-[#061623] py-3 px-4 md:px-8 lg:px-3 mb-2 rounded-none lg:rounded-sm -mx-4 md:-mx-8 lg:mx-0">
      {/* Filters & Search Row */}
      <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Tabs */}
        <div 
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex overflow-x-auto no-scrollbar items-center justify-start w-full lg:flex-1 cursor-grab active:cursor-grabbing gap-6 md:gap-8"
        >
          {/* Commented out dynamic mapping as requested
          {degreesList.map((degree) => (
            <button
              key={degree.id}
              onClick={() => onDegreeChange(degree.slug)}
              className={`whitespace-nowrap pb-2 text-[14px] md:text-[15px] font-normal transition-all relative cursor-pointer ${
                activeDegreeSlug === degree.slug 
                  ? 'text-white' 
                  : 'text-white/60 hover:text-white/90'
              }`}
            >
              {degree.name}
              {activeDegreeSlug === degree.slug && (
                <div className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-white" />
              )}
            </button>
          ))}
          */}

          {/* Hardcoded tabs to match design */}
          {[
            { name: "All", slug: "all" },
            { name: "Undergraduate", slug: "undergraduate-programmes" },
            { name: "Postgraduate", slug: "postgraduate-programmes" },
            { name: "Doctoral", slug: "doctoral-programmes" },
            { name: "Diploma", slug: "diploma-programmes" }
          ].map((degree) => (
            <button
              key={degree.slug}
              onClick={() => onDegreeChange(degree.slug)}
              className={`whitespace-nowrap px-2 py-1 text-center text-[14px] md:text-[15px] transition-all relative cursor-pointer ${
                activeDegreeSlug === degree.slug 
                  ? 'text-white font-medium' 
                  : 'text-white/60 font-normal hover:text-white/90'
              }`}
            >
              {degree.name}
              {activeDegreeSlug === degree.slug && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white" />
              )}
            </button>
          ))}
        </div>

        {/* Search Component */}
        <div className="relative w-full lg:w-72 shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
          <input
            type="text"
            placeholder="Search by Program Name..."
            value={searchQuery}
            onChange={(e) => {
              onSearchChange(e.target.value);
              if (e.target.value.length > 0 && activeDegreeSlug !== 'all') {
                onDegreeChange('all');
              }
            }}
            className="w-full bg-transparent border border-white/10 rounded py-2 pl-10 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-white/30 transition-all text-[14px] font-light"
          />
        </div>
      </div>
    </div>
     {/* Program Count & Toggles */}
      <div className="flex items-center justify-between px-[2px] lg:mb-2">
        <span className="text-white/80 text-[14px] font-normal">
          {programCount} Programs Found
        </span>
        
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-sm border border-white/10">
          <button 
            onClick={() => onViewModeChange('list')}
            className={`p-1.5 rounded transition-all ${viewMode === 'list' ? 'bg-[#0161B0] text-white' : 'text-white/40 hover:text-white hover:bg-white/5 cursor-pointer'}`}
            title="List View"
          >
            <List size={16} />
          </button>
          <button 
            onClick={() => onViewModeChange('grid')}
            className={`p-1.5 rounded transition-all ${viewMode === 'grid' ? 'bg-[#0161B0] text-white' : 'text-white/40 hover:text-white hover:bg-white/5 cursor-pointer'}`}
            title="Grid View"
          >
            <LayoutGrid size={16} />
          </button>
        </div>
      </div>
      </>
  );
}
