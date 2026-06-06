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
        className="w-full px-12 md:px-16"
        opts={{ align: "start", loop: true }}
        setApi={onInit}
        // plugins={[
        //   Autoplay({
        //     delay: 1500,
        //   }),
        // ]}
      >
        <CarouselContent className="">
          {alumniData.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-4 lg:basis-1/2"
            >
              <div className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-[#00AEEF]/30 p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-xl transition-all duration-500 group relative overflow-hidden h-full">
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00AEEF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <AlumniSlide item={item} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2 md:left-0 bg-white/10 hover:bg-[#00AEEF] hover:text-white border-white/20 transition-colors" />
        <CarouselNext className="-right-2 md:right-0 bg-white/10 hover:bg-[#00AEEF] hover:text-white border-white/20 transition-colors" />
      </Carousel>

      {/* --- Pagination Dots --- */}
      <div className="flex justify-center gap-3 mt-12 mb-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              selectedIndex === index
                ? "bg-[#00AEEF] w-[40px] shadow-[0_0_10px_rgba(0,174,239,0.5)]"
                : "bg-white/20 w-2 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgrammeAlumniSlides;
