"use client";

import React from "react";
import { AnimatedHeading} from "@/components/common/AnimatedHeading";

const HeroSection = () => {
  return (
    <section className="relative pt-[140px] pb-12 md:pt-[220px] md:pb-16 lg:pt-[280px] lg:pb-20 xl:pt-[430px] xl:pb-16 px-6 md:px-8 lg:px-11 xl:px-16 overflow-hidden bg-[#13222E]">
      {/* Background Image - STATIC, positioned below header to prevent cropping */}
      <div 
        className="absolute inset-x-0 bottom-0 top-[80px] lg:top-[90px] bg-[url(/admission/kree-bg.webp)] bg-no-repeat bg-top bg-cover pointer-events-none select-none"
        style={{
          filter: "brightness(1.02) contrast(1.01) saturate(1.04)"
        }}
      />

      {/* Single Clean Overlay - Positioned below header */}
      <div className="absolute inset-x-0 bottom-0 top-[80px] lg:top-[90px] bg-gradient-to-tr from-[#13222E]/85 via-[#13222E]/20 to-transparent pointer-events-none" />

      <div className="max-w-[1530px] mx-auto w-full relative z-10">
        <AnimatedHeading 
          lines={["K.R.", "Mangalam", "Entrance Exam"]}
          lineColor="white"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] xl:text-[54px] font-bold tracking-tight font-poppins"
        />
      </div>
    </section>
  );
};

export default HeroSection;
