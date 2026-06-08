"use client";

import React, { useState, useEffect } from "react";
import { Search, Download } from "lucide-react";
import { HeroNav, HeroSearch, HeroVideo, HeroContent, HeroVirtualTour } from "@/modules/home";
import Button from "@/components/common/Button";

export const HeroSection = () => {
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
    <div className="w-full pt-[100px] md:pt-[120px] lg:pt-[122px] transition-colors font-poppins overflow-x-hidden">
      {/* Video Section with Rounded Corners */}
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[78vh] min-h-[400px] px-3 md:px-4 lg:px-4 pt-6 md:pt-4">
        <div className="relative w-full h-full rounded-md md:rounded-md overflow-hidden shadow-2xl bg-brand-navy group/hero">
          <HeroVideo />
          <HeroContent />
          <HeroVirtualTour />
        </div>
      </section>

      <div className="w-full bg-linear-to-t from-brand-dark via-brand-dark to-transparent py-0 px-0 md:px-8 lg:px-16 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6 relative z-20 mt-2 transition-all font-poppins text-white shadow-2xl">
       <div className="relative w-full lg:w-auto h-8 md:h-16">
  {/* Left/Right fade on mobile */}
  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none lg:hidden" />
  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none lg:hidden" />

  <div className="flex items-center gap-5 md:gap-6 lg:gap-14 w-full h-full lg:w-auto overflow-x-auto scrollbar-hide px-6 lg:px-0">
    <button
      onClick={() => setIsSearchOpen(true)}
      className="hidden lg:flex w-10 h-10 border border-white/20 rounded-sm items-center justify-center hover:bg-white/10 transition-all shadow-sm text-white cursor-pointer shrink-0"
    >
      <Search size={20} strokeWidth={2.5} />
    </button>

    <HeroNav />
  </div>
</div>

       
          <span className="px-6 md:px-0">
            <Button
          href="#"
          variant="outline"
          icon={Download}
          iconPosition="left"
          className="!text-white !border-white/30 hover:!bg-transparent hover:!text-white rounded-sm text-[12px] md:text-[13px] lg:text-[15px] font-medium uppercase tracking-wider shadow-md whitespace-nowrap w-full lg:w-auto justify-center"
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
