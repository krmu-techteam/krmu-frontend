"use client";

import { useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Adm2Alumni } from "@/lib/types/admission2";
import Autoplay from "embla-carousel-autoplay";
import Admission2Slide from "./Admission2Slide";

type Props = {
  alumniData: Adm2Alumni[];
};

const Admission2AlumniSlides = ({ alumniData }: Props) => {
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const totalSlides = alumniData.length;

  const onInit = (emblaApi: EmblaCarouselType | undefined) => {
    if (!emblaApi) {
      setApi(undefined);
      setSelectedIndex(0);
      return;
    }

    setApi(emblaApi);
    setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  };

  return (
    <div className="w-full relative">
      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
        setApi={onInit}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="-ml-6">
          {alumniData.map((item, index) => (
            <CarouselItem key={index} className="pl-6 lg:basis-1/2">
              <div className="h-full bg-white border border-gray-100 p-5 md:p-6 shadow-sm rounded-none">
                <Admission2Slide item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 -left-3 md:-left-5 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 border border-gray-100 bg-white shadow-md text-gray-400 hover:text-[#0a41a1] transition-all duration-300 rounded-full" />
        <CarouselNext className="absolute top-1/2 -right-3 md:-right-5 -translate-y-1/2 h-8 w-8 md:h-10 md:w-10 border border-gray-100 bg-white shadow-md text-gray-400 hover:text-[#0a41a1] transition-all duration-300 rounded-full" />
      </Carousel>

      {/* --- Pagination Dots --- */}
      <div className="flex justify-center gap-1.5 mt-10">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              selectedIndex === index
                ? "bg-[#0a41a1] w-8"
                : "bg-gray-300 w-2 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Admission2AlumniSlides;
