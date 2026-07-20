"use client";

import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import { StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "@/app/constant";

interface IndustryCollabCarouselProps {
  indusLogos: StrapiMedia[];
}

const IndustryCollabCarousel = ({ indusLogos }: IndustryCollabCarouselProps) => {
  return (
    <div>
      <Carousel
        autoScroll={true}
        autoScrollSpeed={1}
        autoplay={false}
        showArrows={false}
        showDots={false}
        stopOnInteraction={false}
        containerClassName="-ml-4 md:-ml-4"
        slideClassName="basis-1/2 sm:basis-1/3 md:basis-1/3 xl:basis-1/5 pl-4 md:pl-4"
      >
        {indusLogos &&
          [...indusLogos, ...indusLogos, ...indusLogos].map((logo, index) => (
            <div
              key={`${logo?.id}-${index}`}
              className="bg-white rounded-[3px] px-1 flex items-center justify-center h-[90px] w-full sm:h-[100px] shadow-sm"
            >
              <Image
                src={`${STRAPI_URL}${logo?.url}`}
                width={180}
                height={80}
                className="object-contain max-h-full max-w-full"
                alt={logo?.alternativeText || "Industry Colloboration Logo"}
                unoptimized
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default IndustryCollabCarousel;
