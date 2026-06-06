'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRightCircle } from 'lucide-react';

export interface ProgrammeCardData {
  id: number | string;
  title: string;
  slug: string;
  isZenith: boolean;
  duration: string;
  fees: string;
  eligibilityUtmLink: string;
  showApplyNow: boolean;
  isNewLines: boolean;
}

interface ProgrammeCardProps {
  program: ProgrammeCardData;
  viewMode?: 'grid' | 'list';
  onFeeClick: () => void;
}

export default function ProgrammeCard({ program, viewMode = 'list', onFeeClick }: ProgrammeCardProps) {
  const isGrid = viewMode === 'grid';

  return (
    <div className={`group bg-transparent border border-white/10 rounded-sm relative transition duration-300 hover:border-white/20 hover:bg-white/[0.02] flex
      ${isGrid ? 'flex-col p-5 md:p-6 h-full' : 'flex-col md:flex-row justify-between md:items-center p-5 md:p-6'}
    `}>
      
      {/* Left Content Area */}
      <div className={`flex flex-col pr-0 ${isGrid ? 'mb-6 flex-1' : 'md:pr-8 flex-1'}`}>
        <Link href={program.isZenith ? program.slug : `/programs/${program.slug}`} target="_blank">
          <h3 
            className={`text-white font-normal leading-snug group-hover:text-[#00AEEF] transition-colors
              ${isGrid ? 'text-lg' : 'text-lg md:text-[20px]'}
            `}
            dangerouslySetInnerHTML={{ __html: program.title }} 
          />
        </Link>
        
        <div className="flex flex-col space-y-1.5 mt-4">
          <div className="text-[14px] text-white/60">
            Duration: <span className="text-white/80">{program.duration}</span>
          </div>
          <div className="text-[14px] text-white/60">
            Fees: <span className="text-white/80">Rs. {program.fees}{program.slug === "bhmct-hotel-management" ? " (2025-26)" : ""}</span>
          </div>
        </div>
      </div>

      {/* Right Buttons Area */}
      <div className={`shrink-0 flex ${isGrid ? 'flex-row gap-3 mt-auto w-full' : 'mt-6 md:mt-0 flex-row md:flex-col gap-3 w-full md:w-40'}`}>
        <button 
          onClick={onFeeClick}
          className={`flex items-center justify-center px-3 md:px-4 py-2 border border-white/20 rounded text-[12px] md:text-[14px] text-white tracking-wide hover:bg-white/5 transition-colors cursor-pointer ${isGrid ? 'flex-1' : 'flex-1 md:flex-none md:justify-between'}`}
        >
          <span>EXPLORE</span>
          {!isGrid && <ArrowRightCircle size={16} strokeWidth={2} className="ml-2" />}
        </button>

        {program.showApplyNow && program.eligibilityUtmLink && (
          <Link 
            href={program.eligibilityUtmLink} 
            target="_blank"
            className={`flex items-center justify-center px-3 md:px-4 py-2 border border-[#cb000d] rounded text-[12px] md:text-[14px] bg-[#cb000d]/10 font-medium text-[#eb1321] group-hover:bg-[#cb000d] group-hover:text-white transition-colors ${isGrid ? 'flex-1' : 'flex-1 md:flex-none md:justify-between'}`}
          >
            <span>APPLY NOW</span>
            {!isGrid && <ArrowUpRight size={16} className="ml-2" />}
          </Link>
        )}
      </div>
      
      {/* Lateral Entry Banner */}
      {program.isNewLines && !isGrid && (
        <div className="absolute bottom-0 left-0 w-full text-[#00AEEF] text-[10px] md:text-xs items-center px-4 py-1.5 text-center">
          3-Year Lateral Entry option also available for eligible students
        </div>
      )}
    </div>
  );
}
