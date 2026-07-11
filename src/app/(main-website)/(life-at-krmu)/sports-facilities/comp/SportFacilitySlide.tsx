"use client";

import { STRAPI_URL } from "@/app/constant";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SportFacilityImageItem } from "@/lib/api/sport-facility";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";

type Props = {
  data: SportFacilityImageItem[];
};

const SportFacilitySlide = ({ data }: Props) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="flex gap-5"
    >
      <CarouselContent className="-ml-4">
        {data.map((imgItem, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
            <div className="relative aspect-[16/11] rounded-[2px] overflow-hidden group bg-gray-100">
              {/* Image with zoom effect */}
              <Image
                src={`${STRAPI_URL}${imgItem?.img?.url}`}
                width={524}
                height={350}
                alt={imgItem?.caption || ""}
                unoptimized={true}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#051630]/90 via-[#051630]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-white text-lg font-medium leading-tight drop-shadow-sm">
                  {imgItem?.caption}
                </h4>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-0" />
      <CarouselNext className="right-0" />
    </Carousel>
  );
};

export default SportFacilitySlide;
