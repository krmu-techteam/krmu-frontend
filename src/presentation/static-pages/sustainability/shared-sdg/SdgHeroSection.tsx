"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export interface SdgHeroSectionProps {
  title: string;
  subtitle: string;
  heroImage: string;
  backLink?: string;
}

export const SdgHeroSection: React.FC<SdgHeroSectionProps> = ({
  title,
  subtitle,
  heroImage,
  backLink = "/centre-for-sustainable-development-goals-2",
}) => {
  return (
    <div className="w-full">
      {/* 1. Clear Top Hero Banner */}
      <div className="w-full relative h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px] max-h-[550px] overflow-hidden">
        <Image
          src={heroImage}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* 2. Header Content Section below image */}
      <div className="max-w-[1440px] mx-auto pt-8 pb-4 sm:pt-10 px-4 sm:pb-6 md:px-10">
        <div className="relative flex items-center justify-center">
          {/* Back Button on Left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <Link
              href={backLink}
              className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-[4px] border border-[#80C6FF] bg-transparent text-white transition-all duration-200"
              title="Back"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#80C6FF]" />
            </Link>
          </div>

          {/* Centered Title & Subtitle */}
          <div className="text-center px-12">
            <h1 className="text-3xl sm:text-4xl md:text-[55px] font-serif text-white font-semibold tracking-tight">
              {title}
            </h1>
            <p className="text-sm sm:text-[22px] text-white/90 font-poppins mt-2.5 font-light">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
