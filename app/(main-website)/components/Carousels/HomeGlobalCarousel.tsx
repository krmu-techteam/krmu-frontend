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

interface GlobalLogosProps {
  logos: StrapiMedia[];
}

const HomeGlobalCarousel = ({ logos }: GlobalLogosProps) => {
  return (
    <>
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
        className="px-10"
      >
        <CarouselContent>
          {logos &&
            logos.map((logo) => {
              return (
                <CarouselItem
                  key={logo?.id}
                  className="basis-1/2 md:basis-1/3"
                >
                  
                  <Image
                    src={`${STRAPI_URL}${logo.url}`}
                    width={150}
                    height={150}
                    alt={logo.alternativeText || "Global Logos"}
                    className="w-[200px] h-[150px] object-contain"
                  />
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="bg-[#707070] text-white rounded-none left-0" />
        <CarouselNext className="bg-[#707070] text-white rounded-none right-0" />
      </Carousel>
    </>
  );
};

export default HomeGlobalCarousel;
