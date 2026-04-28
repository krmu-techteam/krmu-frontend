"use client";

import { useState } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import AlumniSlide from "./AlumniSlide";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProgrammeAlumniData } from "@/lib/types/programme";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  alumniData: ProgrammeAlumniData[];
};

const ProgrammeAlumniSlides = ({ alumniData }: Props) => {
  const [api, setApi] = useState<EmblaCarouselType | undefined>(undefined);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const totalSlides = alumniData.length; // <-- DYNAMIC SLIDES

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
    <div className="w-full rounded-2xl">
      <Carousel
        className="w-full"
        opts={{ align: "start", loop: true }}
        setApi={onInit}
        // plugins={[
        //   Autoplay({
        //     delay: 1500,
        //   }),
        // ]}
      >
        <CarouselContent className="-ml-1">
          {alumniData.map((item, index) => (
            <CarouselItem
              key={index}
              className="lg:basis-1/2 odd:bg-white even:bg-amber-100 mx-2 p-5"
            >
              {/* FIX: pass correct prop */}
              <AlumniSlide item={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>

      {/* --- Pagination Dots --- */}
      <div className="flex justify-center gap-2 mt-10 mb-5">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              selectedIndex === index
                ? "bg-[#1461ac] w-[30px]"
                : "bg-gray-400 w-2 hover:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgrammeAlumniSlides;
