"use client";

import React from "react";
import Image from "next/image";
import { SdgAwardItem } from "./types";

export interface SdgAwardsSectionProps {
  awards: SdgAwardItem[];
  accentColor?: string;
}

export const SdgAwardsSection: React.FC<SdgAwardsSectionProps> = ({
  awards,
}) => {
  if (!awards || awards.length === 0) return null;

  return (
    <section className="w-full text-white py-10">
      <div className="max-w-[1440px] mx-auto space-y-2 px-4 sm:px-6 md:px-10">
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-serif font-semibold text-white">
            Awards & Recognitions
          </h2>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {awards.map((award, idx) => (
            <div key={idx} className="group relative">
              <div className="relative w-full aspect-[4/3] overflow-hidden ">
                <Image
                  src={award.image}
                  alt={award.title || "Award Recognition"}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
