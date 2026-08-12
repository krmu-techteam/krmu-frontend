"use client";

import React, { useState, useEffect } from "react";
import { Search, ArrowDownToLine } from "lucide-react";
import Button from "@/components/common/Button";

import dynamic from "next/dynamic";
import {
  HeroNav,
  HeroVideo,
  HeroContent,
  HeroVirtualTour,
} from "../components/hero";
import { HeroSectionComponent } from "@/features/home";

const HeroSearch = dynamic(
  () => import("../components/hero/HeroSearch").then((mod) => mod.HeroSearch),
  { ssr: false },
);

export const HeroSection = ({ title, subtitle }: HeroSectionComponent) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsSearchOpen(false);
    };
    if (isSearchOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isSearchOpen]);

  return (
    <div className="w-full pt-[100px] md:pt-[120px] lg:pt-[135px] transition-colors font-poppins overflow-x-hidden">
      {/* Video Section with Rounded Corners */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[78vh] min-h-[400px] px-3 md:px-4 lg:px-7 pt-6 md:pt-4">
        <div className="relative w-full h-full rounded-[4px] overflow-hidden group/hero bg-[#0B1221]">
          <HeroVideo />
          <HeroContent title={title} subtitle={subtitle} />
          <HeroVirtualTour />
        </div>
      </section>

      <div className="w-full bg-linear-to-t from-[#0B1221] via-[#0B1221] to-transparent pt-3 pb-6 md:pb-2 px-0 lg:px-6 xl:px-16 flex flex-col lg:flex-row justify-between items-center gap-3 sm:gap-4 lg:gap-4 xl:gap-6 relative z-20 lg:mt-0 transition-all font-poppins text-white shadow-2xl">
        <div className="relative w-full lg:w-auto h-10 md:h-14 flex items-center">
          {/* Left/Right fade on mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0B1221] to-transparent z-10 pointer-events-none lg:hidden" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0B1221] to-transparent z-10 pointer-events-none lg:hidden" />

          <div className="flex items-center justify-start md:justify-center lg:justify-start gap-4 md:gap-6 lg:gap-8 w-full h-full lg:w-auto overflow-x-auto scrollbar-hide px-6 lg:px-0">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden lg:flex w-10 h-10 border border-white/20 rounded-[4px] items-center justify-center hover:bg-white/10 transition-all shadow-sm text-white cursor-pointer shrink-0"
            >
              <Search size={20} strokeWidth={2.5} />
            </button>

            <HeroNav />
          </div>
        </div>

        <span className="w-full lg:w-auto flex justify-center px-6 lg:px-0 shrink-0">
          <Button
            href="#"
            variant="outline"
            icon={ArrowDownToLine}
            iconPosition="left"
            className="!text-white !px-4 !h-10 !border-white/30 hover:!bg-white/10 hover:!text-white rounded-[4px] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[13px] xl:text-[15px] font-medium !capitalize tracking-wider whitespace-nowrap w-fit justify-center"
            iconClassName="group-hover:translate-y-0.5 transition-transform !text-white"
          >
            University Student Handbook
          </Button>
        </span>
      </div>

      <HeroSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

export default HeroSection;
