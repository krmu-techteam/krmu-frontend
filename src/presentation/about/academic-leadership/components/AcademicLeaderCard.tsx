"use client";

import Image from "next/image";
import type { AcademicLeadership } from "@/features/about/academic-leadership";
import { STRAPI_URL } from "@/app/constant";

type AcademicLeaderCardProps = {
  leader: AcademicLeadership;
  isActive: boolean;
  onClick: () => void;
};

export const AcademicLeaderCard: React.FC<AcademicLeaderCardProps> = ({
  leader,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group h-full bg-[#061623] rounded-[4px] overflow-hidden border-2 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg cursor-pointer ${
        isActive
          ? "border-[#00a2ff] bg-[#061623]"
          : "border-white/5 hover:border-white/20 hover:bg-[#061623]"
      }`}
    >
      {/* Image container */}
      <div className="relative w-full h-[260px] bg-slate-900/50 overflow-hidden">
        {leader.image ? (
          <Image
            src={`${STRAPI_URL}${leader.image}`}
            fill
            alt={leader.name}
            unoptimized
            className={`object-cover object-top transition-all duration-700 ${
              isActive
                ? "grayscale-0 scale-100 opacity-100"
                : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
            }`}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500">
            No Image
          </div>
        )}
      </div>

      {/* Text Info */}
      <div className="p-4 text-center">
        <h5 className="font-bold text-white text-sm md:text-base line-clamp-1 group-hover:text-[#00a2ff] transition-colors">
          {leader.name}
        </h5>
        <p className="text-xs text-white/80 mt-1 font-medium line-clamp-2 h-12 flex items-center justify-center leading-normal">
          {leader.designation}
        </p>
      </div>
    </div>
  );
};
