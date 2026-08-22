"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export interface PolicyHeroSectionProps {
  title: string;
  heroImage: string;
  backLink?: string;
}

export const PolicyHeroSection: React.FC<PolicyHeroSectionProps> = ({
  title,
  heroImage,
  backLink = "/centre-for-sustainable-development-goals-2",
}) => {
  return (
    <div className="w-full pt-[80px] sm:pt-[90px] md:pt-[100px]">
      {/* 1. Hero Banner Image */}
      <div className="w-full relative overflow-hidden flex items-center justify-center">
        <Image
          src={heroImage}
          alt={title}
          width={1920}
          height={500}
          className="w-full h-[180px] sm:h-[250px] md:h-auto object-cover md:object-contain object-center max-h-[500px]"
          priority
        />
      </div>

      {/* 2. Header Content with Back Button */}
      <div className="max-w-[1440px] mx-auto py-4 sm:py-6 px-4 md:px-10">
        <div className="relative flex flex-col items-center justify-center">
          {/* Back Button on Left (Aligned with Title Row) */}
          {backLink && (
            <div className="absolute left-0 top-0 sm:top-1 flex items-center">
              <Link
                href={backLink}
                className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-[4px] border border-[#80C6FF] bg-transparent text-white hover:bg-white/10 transition-all duration-200 shrink-0"
                title="Back"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#80C6FF]" />
              </Link>
            </div>
          )}

          {/* Centered Title */}
          <div className="text-center px-12 sm:px-16">
            <h1 className="text-2xl sm:text-4xl md:text-[55px] font-serif text-white font-semibold tracking-tight leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyHeroSection;
