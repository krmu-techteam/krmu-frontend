"use client";

import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

interface AccreditationCarouselProps {
  logosData: StrapiMedia[];
}

const AccreditationCarousel: React.FC<
  AccreditationCarouselProps
> = ({ logosData }) => {
  return (
    <div className="relative px-4 md:px-12 lg:px-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {logosData?.map((logo) => (
            <CarouselItem
              key={logo?.id}
              className="pl-4 md:pl-6 basis-auto"
            >
              <div className="h-full">
                <div className="flex items-center justify-center h-[110px] sm:h-[120px] px-6 sm:px-12 bg-white border border-slate-200 rounded-[3px] shadow-sm hover:shadow-md hover:border-[#00A0E3]/30 transition-all duration-300 overflow-hidden group">
                  
                  <Image
                    src={`${STRAPI_URL}${logo?.url}`}
                    alt={
                      logo?.alternativeText ||
                      "Accreditation Logo"
                    }
                    width={300}
                    height={300}
                    quality={100}
                    unoptimized={true}
                    className="object-contain w-auto h-[80px] sm:h-[95px] md:h-[105px] group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="hidden md:flex -left-4 md:-left-12 lg:-left-16 bg-white text-black border border-slate-200 rounded-full shadow-lg hover:bg-slate-100 transition-colors w-10 h-10" />

        <CarouselNext className="hidden md:flex -right-4 md:-right-12 lg:-right-16 bg-white text-black border border-slate-200 rounded-full shadow-lg hover:bg-slate-100 transition-colors w-10 h-10" />
      </Carousel>
    </div>
  );
};

export default AccreditationCarousel;