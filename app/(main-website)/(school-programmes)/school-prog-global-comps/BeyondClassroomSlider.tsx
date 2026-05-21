"use client";
import React, { useCallback, useEffect, useState } from "react";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <section className="pt-8 overflow-hidden">
      <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12 xl:px-10 2xl:px-16">
        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {[...slideimages, ...slideimages, ...slideimages].map((rec, i) => (
              <div
                key={`${rec.id || i}-${i}`}
                className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33%] 2xl:flex-[0_0_25%]"
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

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slideimages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === (selectedIndex % slideimages.length)
                  ? "w-8 bg-[#0a41a1] shadow-md"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeyondClassroomSlider;
