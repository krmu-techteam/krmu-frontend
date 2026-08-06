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
  const isLoading = !logos || logos.length === 0;

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
        <CarouselContent className="-ml-4 py-6">
          {isLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <CarouselItem
                key={`logo-skeleton-${i}`}
                className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/3 pl-4"
              >
                <div className="relative bg-white border border-gray-200 shadow-sm rounded-xl p-3 sm:p-3 h-[90px] sm:h-[110px] flex items-center justify-center">
                  <div className="w-full h-full rounded-lg bg-gray-200 animate-pulse" />
                </div>
              </CarouselItem>
            ))}

          {!isLoading &&
            logos.map((logo) => {
              return (
                <CarouselItem
                  key={logo?.id}
                  className="basis-1/2 md:basis-1/4 lg:basis-1/4 xl:basis-1/3 pl-4"
                >
                  <div className="group relative bg-white border border-gray-200 shadow-sm rounded-xl p-3 sm:p-3 h-[90px] sm:h-[110px] flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:border-[#001732]/20 hover:-translate-y-1.5 cursor-pointer">
                    <Image
                      src={`${STRAPI_URL}${logo.url}`}
                      width={250}
                      height={120}
                      alt={logo.alternativeText || "Global Logos"}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="bg-[#001732] text-white rounded-[50%] left-0" />
        <CarouselNext className="bg-[#001732] text-white rounded-[50%] right-0" />
      </Carousel>
    </>
  );
};

export default HomeGlobalCarousel;