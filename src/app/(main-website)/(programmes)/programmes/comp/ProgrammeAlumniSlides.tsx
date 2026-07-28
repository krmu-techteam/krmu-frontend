"use client";

import AlumniSlide from "./AlumniSlide";
import { Carousel } from "@/components/common/Carousel";
import { ProgrammeAlumniData } from "@/lib/types/programme";

type Props = {
  alumniData: ProgrammeAlumniData[];
};

const ProgrammeAlumniSlides = ({ alumniData }: Props) => {
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
        prevArrowClassName="!absolute !top-1/2 !-left-2 md:!-left-12 !border-none !-translate-y-1/2 !w-9 !h-9 !rounded-[4px] !bg-[#0055A4] hover:!bg-[#0055A4]/80 hover:!text-white !text-white !transition-colors cursor-pointer"
        nextArrowClassName="!absolute !top-1/2 -right-2 md:!-right-12 !border-none !-translate-y-1/2 !w-9 !h-9 !rounded-[4px] !bg-[#0055A4] hover:!bg-[#0055A4]/80 hover:!text-white !text-white !transition-colors cursor-pointer"
      >
        {alumniData.map((item, index) => (
          <div
            key={index}
            className="w-full bg-[#061623] hover:bg-[#061623]/70 rounded-[4px] border border-white/20 hover:border-[#00AEEF]/30 p-6 md:p-8 transition-all duration-500 group relative overflow-hidden h-full flex flex-col"
          >
            <AlumniSlide item={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProgrammeAlumniSlides;
