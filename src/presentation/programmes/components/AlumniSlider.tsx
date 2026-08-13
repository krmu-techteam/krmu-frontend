"use client";

import { Carousel } from "@/components/common/Carousel";
import { ProgrammeAlumniData } from "@/lib/types/programme";
import { AlumniSliderCard } from "./AlumniSliderCard";

type Props = {
  alumniData?: ProgrammeAlumniData[];
};

export const AlumniSlider = ({ alumniData = [] }: Props) => {
  return (
    <div className="w-full relative">
      <Carousel
        options={{ align: "start", loop: true }}
        autoplay={true}
        autoplayDelay={4000}
        showDots={false}
        showArrows={true}
        containerClassName="-ml-4 items-stretch"
        slideClassName="pl-4 basis-full lg:basis-1/2 flex"
        dotClassName="bg-white/20 w-2 hover:bg-white/40"
        prevArrowClassName="!absolute !top-1/2 !-left-3 md:!-left-4 !border-none !-translate-y-1/2 !w-9 !h-9 !rounded-[3px] !bg-[#CB000D] hover:!bg-[#CB000D]/80 hover:!text-white !text-white !transition-colors cursor-pointer"
        nextArrowClassName="!absolute !top-1/2 !-right-3 md:!-right-4 !border-none !-translate-y-1/2 !w-9 !h-9 !rounded-[3px] !bg-[#CB000D] hover:!bg-[#CB000D]/80 hover:!text-white !text-white !transition-colors cursor-pointer"
      >
        {alumniData.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#061623] hover:bg-[#061623]/70 rounded-[4px] border border-white/20 hover:border-[#00AEEF]/30 p-6 md:p-8 transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
          >
            <AlumniSliderCard item={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
