"use client";

import React from "react";
import { getThreeIndustryTracksContent } from "../lib/getContent";
import { Fraunces, Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

export const ThreeIndustryTracksSection = () => {
  const data = getThreeIndustryTracksContent();
  const content = data.threeIndustryTracks;

  return (
    <section className="w-full bg-[#012D52] bg-[radial-gradient(50%_90%_at_50%_50%,#024178_10%,#012D52_50%,#012D52_100%)] text-white text-center relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-14 flex flex-col items-center">
        {/* Title */}
        <h2
          className={`${fraunces.className} text-white text-3xl sm:text-4xl md:text-5xl lg:text-[38px] leading-tight mb-4 max-w-2xl`}
        >
          {content.titleLineOne}
          <br />
          {content.titleLineTwo}
        </h2>

        {/* Description */}
        <p
          className={`${poppins.className} text-white text-sm sm:text-base md:text-[12px] mb-4 max-w-[620px]`}
        >
          {content.description}
        </p>

        {/* Side-by-side CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <Link
            href={content.primaryCta.link}
            className={`${poppins.className} bg-[#DE0000] hover:bg-[#b30000] text-white font-bold text-sm sm:text-[16px] px-4 py-2 rounded-[5px] transition-all duration-300 w-fit sm:w-auto text-center cursor-pointer`}
          >
            {content.primaryCta.text}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThreeIndustryTracksSection;
