"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface NetZeroSectionProps {
  className?: string;
  onExploreClick?: () => void;
}

const NetZeroSection: React.FC<NetZeroSectionProps> = ({
  className = "",
  onExploreClick,
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full bg-[#061623] rounded-[14px] border border-[#102436] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
        {/* Left Column: Text & CTA (Wider width: col-span-7) */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Carbon &amp; Net-Zero Section
          </h2>

          <p className="text-white text-sm sm:text-[16px] font-normal leading-relaxed mb-6 lg:mb-8 max-w-2xl">
            We are committed to reducing our carbon footprint through energy
            efficiency, sustainable practices, and continuous efforts toward
            achieving net-zero emissions.
          </p>

          {/* Explore Link */}
          <a
            href="https://www.krmangalam.edu.in/qs-carbon-net-zero"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onExploreClick}
            className="flex items-center gap-3 text-white group cursor-pointer w-fit transition-colors hover:text-white/80"
          >
            <div className="w-[18px] h-[18px] rounded-full border border-white flex items-center justify-center group-hover:border-white/80 transition-colors shrink-0">
              <ArrowRight className="w-3 h-3 text-white group-hover:text-white/80 transition-colors" />
            </div>
            <span className="text-sm sm:text-[16px] font-normal tracking-wide">
              Explore
            </span>
          </a>
        </div>

        {/* Right Column: Image (col-span-5) */}
        <div className="lg:col-span-5 relative w-full h-[240px] rounded-[10px]   sm:h-[280px] lg:h-full min-h-[260px] lg:min-h-[300px] overflow-hidden">
          <Image
            src="/images/sustainability/net-zero.jpg"
            alt="Carbon & Net-Zero Section"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default NetZeroSection;
