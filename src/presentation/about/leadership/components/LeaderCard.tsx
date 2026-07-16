"use client";

import Image from "next/image";
import type { Leadership } from "@/lib/api/leadership";
import { STRAPI_URL } from "@/app/constant";

type LeaderCardProps = {
  leader: Leadership;
  isActive: boolean;
  onClick: () => void;
};

export const LeaderCard = ({ leader, isActive, onClick }: LeaderCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-[#061623] border-b-2 transition-all duration-300 overflow-hidden cursor-pointer ${
        isActive ? "border-[#0060aa]" : "border-[#1e3a52]"
      }`}
    >
      {/* Image area */}
      <div className="min-h-[270px] h-full relative overflow-hidden bg-[#0a1929]">
        {leader.leadership_img?.url && (
          <Image
            src={`${STRAPI_URL}${leader.leadership_img.url}`}
            fill
            alt={leader.name}
            unoptimized
            className="z-10 object-cover object-top"
          />
        )}
      </div>

      {/* Text area — dark bg, inside card */}
      <div className="text-center py-3 px-[5px] bg-[#061623] border-t border-[#1e3a52]">
        <h5 className="font-semibold text-[#edf3f7]">{leader.name}</h5>
        <p className="text-sm font-poppins text-[#0060aa] mt-[3px]">
          {leader.desg}
        </p>
      </div>
    </div>
  );
};
