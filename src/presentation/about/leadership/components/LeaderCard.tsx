"use client";

import Image from "next/image";
import type { Leadership } from "@/lib/api/leadership";
import { STRAPI_URL } from "@/app/constant";

type LeaderCardProps = {
  leader: Leadership;
  isActive?: boolean;
  onClick?: () => void;
  isCompact?: boolean;
};

export const LeaderCard = ({
  leader,
  isActive,
  onClick,
  isCompact = false,
}: LeaderCardProps) => {
  const imageUrl = leader.leadership_img?.url
    ? leader.leadership_img.url.startsWith("http")
      ? leader.leadership_img.url
      : `${STRAPI_URL}${leader.leadership_img.url}`
    : "/images/placeholder.png";

  if (isCompact) {
    return (
      <div
        onClick={onClick}
        className="w-[183px] min-h-[199px] flex flex-col items-center group cursor-pointer transition-all duration-300 mx-auto"
      >
        {/* Outer Dashed Circle Ring (183x183px with exact 8,8 dashes) */}
        <div className="w-[183px] h-[183px] rounded-full relative flex items-center justify-center shrink-0">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 183 183"
            fill="none"
          >
            <circle
              cx="91.5"
              cy="91.5"
              r="90.5"
              stroke={isActive ? "#E5D0A1" : "#426179"}
              strokeWidth="1.5"
              strokeDasharray="8 8"
              className="transition-colors duration-300 group-hover:stroke-[#E5D0A1]"
            />
          </svg>

          {/* Inner Profile Image Circle (171x171px) */}
          <div className="w-[171px] h-[171px] rounded-full overflow-hidden absolute top-[6px] left-[6px] bg-[#426179] border border-white/10">
            <Image
              src={imageUrl}
              fill
              alt={leader.name}
              unoptimized
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Leader Name */}
        <h5
          className={`font-poppins text-[13px] text-center mt-2 leading-tight px-1 transition-colors ${
            isActive
              ? "font-bold text-brand-gold"
              : "font-normal text-white group-hover:text-brand-gold"
          }`}
        >
          {leader.name}
        </h5>

        {/* Leader Designation */}
        <p
          className={`font-poppins text-[11px] text-center mt-0.5 leading-snug px-1 line-clamp-1 transition-colors ${
            isActive
              ? "font-bold text-brand-gold/90"
              : "font-normal text-[#D1D1D1]"
          }`}
        >
          {leader.desg}
        </p>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="w-[232px] min-h-[285px] flex flex-col items-center group cursor-pointer transition-all duration-300 mx-auto"
    >
      {/* Outer Dashed Circle Ring (232x232px with exact 8,8 dashes) */}
      <div className="w-[232px] h-[232px] rounded-full relative flex items-center justify-center shrink-0">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 232 232"
          fill="none"
        >
          <circle
            cx="116"
            cy="116"
            r="115"
            stroke={isActive ? "#E5D0A1" : "#426179"}
            strokeWidth="1.5"
            strokeDasharray="8 8"
            className="transition-colors duration-300 group-hover:stroke-[#E5D0A1]"
          />
        </svg>

        {/* Inner Profile Image Circle (217x217px) */}
        <div className="w-[217px] h-[217px] rounded-full overflow-hidden absolute top-[7.5px] left-[7.5px] bg-[#162a39] border border-white/10">
          <Image
            src={imageUrl}
            fill
            alt={leader.name}
            unoptimized
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Leader Name */}
      <h5
        className={`font-poppins text-[15px] sm:text-base text-center mt-3 leading-tight px-1 transition-colors ${
          isActive
            ? "font-bold text-brand-gold"
            : "font-normal text-white group-hover:text-brand-gold"
        }`}
      >
        {leader.name}
      </h5>

      {/* Leader Designation */}
      <p
        className={`font-poppins text-xs md:text-sm text-center mt-1 leading-snug px-1 transition-colors ${
          isActive ? "font-bold text-brand-gold/90" : "font-normal text-white/70"
        }`}
      >
        {leader.desg}
      </p>
    </div>
  );
};
