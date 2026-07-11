"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import Link from "next/link";
type criteriaProps = {
  Duration: string;
  eligibility_criteria: string;
  eligibility_utm_links: string;
  id: number;
  programme_fee_per_year: string;
  semester_i: string;
  semester_ii: string;
};

type progProps = {
  criteria: criteriaProps | boolean;
  documentId: string;
  highlightitle: string | null;
  id: number;
  // order_num: number;
  programmeslug: string;
  title: string;
};

interface WithProgramCardProps {
  prog: progProps;
  deg: any;
  programs: any;
  isActive: boolean;
  handleProgramClick: (id: number) => void;
  handleMouseEnter: (id: number) => void;
  index: number;
  totalCards: number;
  progNewLine: string[]
}

const withProgramCard = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  return function EnhancedProgramCard(props: P & WithProgramCardProps) {
    const {
      prog,
      deg,
      programs,
      isActive,
      index,
      totalCards,
      progNewLine,
      handleProgramClick,
      handleMouseEnter,
    } = props;

    const cardsPerRow = 4;

    const rowIndex = Math.floor(index / cardsPerRow);
    const positionInRow = index % cardsPerRow;

    const remainingCards = totalCards - rowIndex * cardsPerRow;

    let glowClass = "";

    const isLastRow = rowIndex === Math.floor((totalCards - 1) / cardsPerRow);

    if (remainingCards === 3 && isLastRow) {
      // 3 CARDS => left center right
      if (positionInRow === 0) {
        glowClass = "absolute left-[-237px] -bottom-[183px]";
      } else if (positionInRow === 1) {
        glowClass = "absolute left-[48%] -translate-x-1/2 -bottom-[240px]";
      } else {
        glowClass = "absolute right-[-133px] -bottom-[201px]";
      }
    } else if (remainingCards === 2 && isLastRow) {
      // 2 CARDS => left right
      if (positionInRow === 0) {
        glowClass = "absolute left-[-237px] -bottom-[183px]";
      } else {
        glowClass = "absolute right-[-133px] -bottom-[171px]";
      }
    } else {
      // NORMAL 4 CARDS => left center center right
      if (positionInRow === 0) {
        glowClass = "absolute left-[-237px] -bottom-[183px]";
      } else if (positionInRow === 3) {
        glowClass = "absolute right-[-133px] -bottom-[201px]";
      } else {
        glowClass = "absolute left-[48%] -translate-x-1/2 -bottom-[240px]";
      }
    }
    return (
      <div
        onClick={() => handleProgramClick(prog.id)}
        onMouseEnter={() => handleMouseEnter(prog.id)}
        onFocus={() => handleMouseEnter(prog.id)}
        className={`
          ${
            programs[deg.value]?.length > 3 ? "" : "xl:max-w-[392px] min-h-[258px]"
          }
          w-full
          rounded-xl
          bg-[#001732]
          group
          h-full
          font-semibold
          p-5
          2xl:p-6
          flex
          flex-col
          gap-2
          justify-between
          shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1)]
          transition duration-300 ease-in-out hover:-translate-y-1
          overflow-hidden
          relative
          ${isActive ? "" : "hover:text-black"}
          `}
      >
        {/* hover:bg-[#0a41a1]
        hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] */}
        <div
          className={`absolute ${glowClass} h-[320px] w-[320px] rounded-full bg-gradient-to-br from-[#001732] via-[#59122E] to-[#63174C] blur-[30px] opacity-80`}
        ></div>
        <WrappedComponent {...props} />
        <Link
          href={`/programs/${prog.programmeslug || "#"}`}
          className="absolute right-5 top-8"
        >
          <ArrowUpRight size={20} color="#fff" />
        </Link>
      </div>
    );
  };
};

export default withProgramCard;
