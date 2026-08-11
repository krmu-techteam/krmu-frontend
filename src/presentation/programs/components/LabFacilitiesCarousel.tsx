"use client";

import Image from "next/image";
import { LabCard } from "@/lib/types/school-programme";
import { Carousel } from "@/components/common/Carousel";

type Props = {
  labcards: LabCard[];
  images: string[];
};

const LabFacilitiesCarousel = ({ labcards, images }: Props) => {
  return (
    <div>
      <Carousel
        options={{
          align: "start",
          loop: true,
        }}
        autoplay={true}
        autoplayDelay={3000}
        showArrows={false}
        showDots={true}
        containerClassName="-ml-4 sm:-ml-4 lg:-ml-6 xl:-ml-6 2xl:-ml-6 px-0 my-5 flex items-stretch"
        slideClassName="pl-4 sm:pl-4 lg:pl-6 xl:pl-8 2xl:pl-8 basis-full sm:basis-1/3 xl:basis-1/3 2xl:basis-1/4 flex"
        activeDotClassName="bg-[#0055A4] w-6 h-2"
        dotClassName="bg-gray-400 w-2 h-2"
      >
        {labcards &&
          labcards.map((item, i) => {
            const labImage = images[i % images.length];
            return (
              <div
                key={i}
                className="relative group rounded-sm overflow-hidden bg-gradient-to-b from-[#0055A4]/15 via-[#0055A4]/05 to-[#000000]/40 hover:from-[#0055A4]/25 hover:via-[#0055A4]/10 hover:to-[#000000]/60 transition-all duration-500 ease-out flex flex-col w-full h-full cursor-default hover:-translate-y-1.5 hover:shadow-[0_15px_35px_-10px_rgba(0,85,164,0.15)]"
              >
                {/* Top Glowing Bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-[#0055A4] to-transparent group-hover:w-full transition-all duration-500 ease-out z-10" />

                {/* Image/Icon Container with Spotlight Glow */}
                <div className="relative h-[130px] w-full overflow-hidden flex items-center justify-center">
                  {/* Radial Spotlight Glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#0055A4]/15 blur-xl opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-125 transition-all duration-700 pointer-events-none" />

                  <Image
                    fill
                    src={labImage}
                    alt={item.title}
                    className="object-contain font-poppins px-10 pt-8 pb-2 transition-transform duration-500 ease-out group-hover:-translate-y-1"
                    unoptimized
                  />
                </div>

                {/* Content */}
                <div className="px-5 py-4 flex-1 flex flex-col items-center text-center">
                  <h5 className="font-semibold font-poppins text-[16px] md:text-[19px] mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h5>
                  <p className="text-sm text-white/90 font-poppins text-[14px] md:text-[15px] leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                    {item?.description}
                  </p>
                </div>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default LabFacilitiesCarousel;
