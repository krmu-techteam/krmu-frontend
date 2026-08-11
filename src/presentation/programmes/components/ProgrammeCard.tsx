"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRightCircle,
  IndianRupee,
  Calendar,
} from "lucide-react";

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
  viewMode?: "grid" | "list";
  index?: number;
  totalCards?: number;
  cardsPerRow?: number;
  onFeeClick: () => void;
}

export default function ProgrammeCard({
  program,
  viewMode = "list",
  index = 0,
  totalCards = 1,
  cardsPerRow = 3,
  onFeeClick,
}: ProgrammeCardProps) {
  const isGrid = viewMode === "grid";

  const rowIndex = Math.floor(index / cardsPerRow);
  const positionInRow = index % cardsPerRow;

  const isLastRow = rowIndex === Math.floor((totalCards - 1) / cardsPerRow);
  const cardsInThisRow = isLastRow
    ? totalCards % cardsPerRow === 0
      ? cardsPerRow
      : totalCards % cardsPerRow
    : cardsPerRow;

  let glowClass = "absolute right-[-133px] -bottom-[201px]"; // default for list mode

  if (isGrid) {
    if (cardsInThisRow === 1) {
      // Single card in row (mobile / single) -> Center
      glowClass = "absolute left-[50%] -translate-x-1/2 -bottom-[240px]";
    } else if (positionInRow === 0) {
      // First card in row -> Left
      glowClass = "absolute left-[-237px] -bottom-[183px]";
    } else if (positionInRow === cardsInThisRow - 1) {
      // Last card in row -> Right
      glowClass = "absolute right-[-133px] -bottom-[201px]";
    } else {
      // Middle cards in row -> Center
      glowClass = "absolute left-[48%] -translate-x-1/2 -bottom-[240px]";
    }
  }

  if (!isGrid) {
    return (
      <div
        className={`group cursor-pointer bg-[#000000]/30 rounded-[4px] relative transition duration-300 hover:border-white/20  flex flex-col md:flex-row justify-between md:items-center p-5 md:p-6`}
      >
        {/* Left Content Area */}
        <div className={`flex flex-col pr-0 md:pr-8 flex-1`}>
          <Link
            href={program.isZenith ? program.slug : `/programs/${program.slug}`}
            target="_blank"
          >
            <h3
              className={`text-white font-normal leading-snug transition-colors text-lg md:text-[20px]`}
              dangerouslySetInnerHTML={{ __html: program.title }}
            />
          </Link>

          <div className="flex flex-col space-y-1.5 mt-4">
            <div className="text-[14px] text-white/60">
              Duration:{" "}
              <span className="text-white/80">{program.duration}</span>
            </div>
            <div className="text-[14px] text-white/60">
              Fees:{" "}
              <span className="text-white/80">
                Rs. {program.fees}
                {program.slug === "bhmct-hotel-management" ? " (2025-26)" : ""}
              </span>
            </div>
          </div>
        </div>

        {/* Right Buttons Area */}
        <div
          className={`shrink-0 flex mt-6 md:mt-0 flex-row md:flex-col gap-3 w-full md:w-40`}
        >
          <button
            onClick={onFeeClick}
            className={`flex items-center justify-center px-3 md:px-4 py-2 border border-white/20 rounded text-[12px] md:text-[14px] text-white tracking-wide hover:bg-white/5 transition-colors cursor-pointer flex-1 md:flex-none md:justify-between`}
          >
            <span>EXPLORE</span>
            <ArrowRightCircle size={16} strokeWidth={2} className="ml-2" />
          </button>

          {program.showApplyNow && program.eligibilityUtmLink && (
            <Link
              href={program.eligibilityUtmLink}
              target="_blank"
              className={`flex items-center justify-center px-3 md:px-4 py-2 border border-[#cb000d] rounded text-[12px] md:text-[14px] bg-[#cb000d]/10 font-medium text-[#eb1321] group-hover:bg-[#cb000d] group-hover:text-white transition-colors flex-1 md:flex-none md:justify-between`}
            >
              <span>APPLY NOW</span>
              <ArrowUpRight size={16} className="ml-2" />
            </Link>
          )}
        </div>

        {/* Lateral Entry Banner */}
        {program.isNewLines && (
          <div className="absolute bottom-0 left-0 w-full text-[#fff] text-[10px] md:text-xs items-center px-4 py-1.5 text-center">
            3-Year Lateral Entry option also available for eligible students
          </div>
        )}
      </div>
    );
  }

  // Grid View Design
  return (
    <div
      className={`group cursor-pointer bg-[#061623] rounded-sm border border-white/5 relative transition-all duration-500 ease-in-out hover:border-white/20 hover:bg-[#061623]/30 hover:shadow-lg flex overflow-hidden flex-col p-5 md:p-6 h-full`}
    >
      {/* Background Glow */}
      <div
        className={`${glowClass} max-md:left-1/2 max-md:-translate-x-1/2 max-md:right-auto h-[320px] w-[320px] rounded-full bg-gradient-to-br from-[#061623] via-[#3c0f21] to-[#3c0f21] blur-[30px] opacity-65 pointer-events-none z-0`}
      />

      {/* Left Content Area */}
      <div className={`relative z-10 flex flex-col pr-5 mb-6 flex-1`}>
        <Link
          href={program.isZenith ? program.slug : `/programs/${program.slug}`}
          target="_blank"
          className="block text-white text-base md:text-[18px] leading-snug group-hover:text-white transition-colors z-20"
        >
          <h3 dangerouslySetInnerHTML={{ __html: program.title }} />
        </Link>
        <Link
          href={program.isZenith ? program.slug : `/programs/${program.slug}`}
          className="absolute right-0 top-0.5 z-20"
        >
          <ArrowUpRight
            size={20}
            className="text-white transform group-hover:translate-x-[1px] group-hover:-translate-y-[1px] transition-transform duration-300"
          />
        </Link>

        <div className="flex flex-col sm:flex-row border-y border-[rgba(255,255,255,0.2)] sm:gap-5 z-20 mt-5">
          <div className="w-fit flex py-2.5 gap-2 text-sm cursor-text text-white items-center">
            <span>
              <Calendar size={20} />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-xs">Duration:</span>
              <span className="text-xs">{program.duration}</span>
            </div>
          </div>
          <div className="w-fit flex py-2.5 gap-2 text-sm cursor-text text-white items-center">
            <span>
              <IndianRupee size={20} />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="font-semibold text-xs">Programme Fee:</span>
              <span className="text-xs">
                Rs. {program.fees} / Year
                {program.slug === "bhmct-hotel-management" ? " (2025-26)" : ""}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Buttons Area */}
      <div
        className={`relative z-10 shrink-0 flex flex-row gap-3 mt-auto w-full`}
      >
        <button
          onClick={onFeeClick}
          className={`flex items-center justify-center px-3 md:px-4 py-2 border border-white/20 rounded text-[12px] md:text-[14px] text-white tracking-wide hover:bg-white/5 transition-colors cursor-pointer flex-1`}
        >
          <span>EXPLORE</span>
        </button>

        {program.showApplyNow && program.eligibilityUtmLink && (
          <Link
            href={program.eligibilityUtmLink}
            target="_blank"
            className={`flex items-center justify-center px-3 md:px-4 py-2 border border-[#cb000d] rounded text-[12px] md:text-[14px] bg-[#cb000d] font-medium text-white transition-colors flex-1`}
          >
            <span>APPLY NOW</span>
          </Link>
        )}
      </div>

      {/* Lateral Entry Banner */}
      {program.isNewLines && (
        <div className="relative z-10 w-full text-white text-[11px] md:text-xs text-center mt-3 font-normal leading-tight">
          3-Year Lateral Entry option also available for eligible students
        </div>
      )}
    </div>
  );
}
