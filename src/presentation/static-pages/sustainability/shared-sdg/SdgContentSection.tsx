"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import Button from "@/components/common/Button";

import { SdgActionButton } from "./types";

export interface SdgContentSectionProps {
  goalNumber: number | string;
  title: string;
  paragraphs: string[];
  leftButtonText?: string;
  leftButtonUrl?: string;
  leftButtons?: SdgActionButton[];
  goalTileImage: string;
  sdgReportText?: string;
  sdgReportUrl?: string;
  accentColor?: string;
}

export const SdgContentSection: React.FC<SdgContentSectionProps> = ({
  goalNumber,
  title,
  paragraphs,
  leftButtonText = "Policies Report",
  leftButtonUrl,
  leftButtons,
  goalTileImage,
  sdgReportText = "SDG Report 2023-24",
  sdgReportUrl,
  accentColor = "#E5243B",
}) => {
  return (
    <section className="w-full text-white pt-4 pb-12 sm:pb-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto space-y-3.5">
        {/* Title */}
        <h2 className="text-xl sm:text-2xl md:text-[22px] font-semibold text-white tracking-tight">
          SDG-{goalNumber}: {title}
        </h2>

        {/* Content & SDG Tile Card Container */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-start justify-between">
          {/* Left Column: Text Content & Policy Link */}
          <div className="flex-1 space-y-5">
            <div className="space-y-4 text-gray-300 text-sm sm:text-[16px] leading-relaxed font-poppins font-normal text-justify">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Action Buttons */}
            {leftButtons && leftButtons.length > 0 ? (
              <div className="pt-2 flex flex-wrap gap-3">
                {leftButtons.map((btn, i) => (
                  <Button
                    key={i}
                    href={btn.url}
                    target="_blank"
                    variant="outline"
                    icon={Download}
                    iconPosition="left"
                    className="!w-auto !inline-flex border border-white/30 hover:border-white bg-[#0c1e2c]/50 hover:bg-white/10 text-white font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 h-auto !capitalize transition-colors"
                  >
                    {btn.text}
                  </Button>
                ))}
              </div>
            ) : leftButtonUrl ? (
              <div className="pt-2">
                <Button
                  href={leftButtonUrl}
                  target="_blank"
                  variant="outline"
                  icon={Download}
                  iconPosition="left"
                  className="!w-auto !inline-flex border border-white/30 hover:border-white bg-[#0c1e2c]/50 hover:bg-white/10 text-white font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 h-auto !capitalize transition-colors"
                >
                  {leftButtonText}
                </Button>
              </div>
            ) : null}
          </div>

          {/* Right Column: SDG Goal Card & Report Link */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0">
            <div
              className="w-[306px] h-[369px] bg-[#081b29]/30 rounded-[4px] overflow-hidden transition-all duration-300 p-1 border flex flex-col justify-between shrink-0"
              style={{ borderColor: accentColor }}
            >
              {/* Tile Image: 296px x 296px */}
              <div
                className="relative w-full h-[296px] shrink-0"
                style={{ backgroundColor: accentColor }}
              >
                <Image
                  src={goalTileImage}
                  alt={`SDG ${goalNumber} ${title} Tile`}
                  fill
                  className="object-cover"
                  sizes="296px"
                  priority
                />
              </div>

              {/* Bottom Report Link Bar */}
              {sdgReportUrl && (
                <div className="w-full pt-1 grow flex">
                  <Button
                    href={sdgReportUrl}
                    target="_blank"
                    variant="outline"
                    icon={Download}
                    iconPosition="left"
                    className="!w-full sm:!w-full h-full !border-none bg-[#0a1824]/30 hover:bg-white/10 text-white font-medium text-sm sm:text-[15px] rounded-none py-2.5 !capitalize border-t border-white/20 flex items-center justify-center"
                  >
                    {sdgReportText}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
