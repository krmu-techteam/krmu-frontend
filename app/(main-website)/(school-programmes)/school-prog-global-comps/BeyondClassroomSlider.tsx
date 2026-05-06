"use client";
import React, { useCallback } from "react";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  slideimages: StrapiMedia[];
};

const BeyondClassroomSlider = ({ slideimages }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      duration: 60,
      skipSnaps: false,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="pt-8 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {[...slideimages, ...slideimages, ...slideimages].map((rec, i) => (
              <div
                key={`${rec.id || i}-${i}`}
                className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl h-full">
                  <Image
                    src={rec.url}
                    alt={rec.alternativeText || ``}
                    width={500}
                    height={366}
                    className="w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-5">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-[#0a41a1] hover:bg-[#0a41a1] hover:text-white transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-active:-translate-x-1" />
          </button>
          <button
            onClick={scrollNext}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 text-[#0a41a1] hover:bg-[#0a41a1] hover:text-white transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-active:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeyondClassroomSlider;
