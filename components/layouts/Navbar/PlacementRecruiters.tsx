"use client";

import React from "react";
import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";

const RECRUITERS = [
  "tata-power.png",
  "meta.png",
  "microsoft.png",
  "jp-morgan.png",
  "linkedin.png",
  "google.png",
  "infosys.png",
  "publicis-media.png",
  "apple.png",
  "cisco.png",
  "ey.png",
  "amazon.png"
];

export default function PlacementRecruiters() {
  return (
    <div className="w-full pt-10">
      <Carousel
        options={{ loop: true, align: "start" }}
        autoplay={false}
        autoScroll={true}
        autoScrollSpeed={1}
        showArrows={false}
        showDots={false}
        containerClassName="-ml-4"
        slideClassName="pl-4 basis-1/3 md:basis-1/5 lg:basis-1/6"
      >
        {[...RECRUITERS, ...RECRUITERS].map((logo, index) => (
          <div key={index} className="h-20 relative overflow-hidden border border-[#434343] rounded-[4px] bg-gradient-to-b from-white/[0.03] to-transparent flex items-center justify-center p-3 hover:border-white/20 transition-all duration-300 group">
            <Image
              src={`/modules/home/placements/recruiters/${logo}`}
              alt={logo.split(".")[0]}
              width={110}
              height={70}
              priority={true}
              className="object-contain w-full h-full opacity-85 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-all duration-500"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
