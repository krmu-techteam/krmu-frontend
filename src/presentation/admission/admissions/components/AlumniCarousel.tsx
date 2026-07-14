"use client";

import { Adm2Alumni } from "@/lib/types/admission2";
import AlumniCard from "./AlumniCard";
import { Carousel } from "@/components/common/Carousel";

type Props = {
  alumniData: Adm2Alumni[];
};

const Admission2AlumniSlides = ({ alumniData }: Props) => {
  return (
    <div className="w-full relative">
      <Carousel
        options={{ align: "start", loop: true }}
        autoplay={true}
        autoplayDelay={4000}
        showDots={true}
        showArrows={true}
        containerClassName="-ml-6 items-stretch"
        slideClassName="pl-6 basis-full lg:basis-1/2 flex"
        activeDotClassName="bg-[#CB000D] w-8"
        dotClassName="bg-gray-300 w-2 hover:bg-gray-400"
        prevArrowClassName="!absolute !top-1/2 !-left-3 md:!-left-5 !-translate-y-1/2 !w-8 !h-8 md:!w-10 md:!h-10 !border !border-[#CB000D] !bg-[#CB000D] !shadow-md !text-white hover:!text-white hover:!bg-[#CB000D]/80 !transition-all !duration-300 !rounded-[4px] cursor-pointer"
        nextArrowClassName="!absolute !top-1/2 !-right-3 md:!-right-5 !-translate-y-1/2 !w-8 !h-8 md:!w-10 md:!h-10 !border !border-[#CB000D] !bg-[#CB000D] !shadow-md !text-white hover:!text-white hover:!bg-[#CB000D]/80 !transition-all !duration-300 !rounded-[4px] cursor-pointer"
      >
        {alumniData.map((item, index) => (
          <div
            key={index}
            className="w-full flex h-full border border-gray-600 p-5 md:p-6 shadow-sm rounded-sm"
          >
            <div className="w-full flex flex-col">
              <AlumniCard item={item as any} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Admission2AlumniSlides;
