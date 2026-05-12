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
      handleProgramClick,
      handleMouseEnter,
    } = props;

    return (
      <div
        onClick={() => handleProgramClick(prog.id)}
        onMouseEnter={() => handleMouseEnter(prog.id)}
        onFocus={() => handleMouseEnter(prog.id)}
        className={`
          ${
            programs[deg.value]?.length > 3 ? "" : "max-w-[528px] min-h-[258px]"
          }
          w-full
          rounded-xl
          bg-[#051730]
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
          relative
          ${isActive ? "" : "hover:text-black"}
          `}
      >
        {/* hover:bg-[#0a41a1]
        hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] */}
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
