"use client";
import React, { useCallback, useEffect, useState } from "react";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { CareerCard } from "@/lib/types/school-programme";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  btn: ButtonType;
  careerimg: StrapiMedia;
  careercards: CareerCard[];
  slug?: string;
};

const CareerProspects = ({
  heading,
  highlight,
  desc,
  btn,
  careerimg,
  careercards,
  slug,
}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 60 }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
    Fade(),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-6 lg:pt-12 2xl:pt-16 2xl:pb-[80px] xl:pb-[150px] overflow-hidden min-h-[600px] md:min-h-[750px] xl:min-h-[850px] flex flex-col items-center">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/university_bg_374a0a0fef.png"
          fill
          className="object-cover blur-[4px] opacity-40"
          alt="University Background"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="max-w-4xl w-full text-center mb-4">
          <h3 className="text-2xl md:text-[36px] xl:text-[42px] font-semibold md:font-bold text-[#0B1C30] mb-3 md:mb-2 leading-[1.1] tracking-tight">
            {heading} {highlight}
          </h3>
          <p className="text-[#45464D] text-shadow-xs md:text-shadow-none text-md xl:text-lg mx-auto max-w-full leading-relaxed md:leading-[1.36]">
            {desc}
          </p>
        </div>

        {/* Action Button */}
        {slug !== "bhmct-hotel-management" &&
          (btn?.buttonclass || btn?.buttonlink) && (
            <div className="mb-6">
              <Link
                href={btn?.buttonlink || "#"}
                className={`text-white bg-[#cb000d] hover:bg-[#c42518] px-6 py-3 md:px-10 md:py-3 flex items-center justify-center gap-3 rounded-sm md:rounded-lg font-semibold tracking-wide shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden ${btn?.buttonclass || ""}`}
              >
                <span>{btn?.buttontext}</span>
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
              </Link>
            </div>
          )}

        <div className="relative w-full mx-auto">
          {/* Carousel Wrapper (Text Only) */}
          <div className="w-full relative max-w-lg mx-auto">
            <button
              onClick={scrollPrev}
              className="absolute -left-3 md:-left-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-lg text-[#051630] hover:bg-[#051630] hover:text-white transition-all duration-300 border border-white/40 cursor-pointer hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute -right-3 md:-right-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-lg text-[#051630] hover:bg-[#051630] hover:text-white transition-all duration-300 border border-white/40 cursor-pointer hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {careercards?.map((card, index) => (
                  <div key={card?.id} className="flex-[0_0_100%] min-w-0">
                    <div className="bg-white/90 backdrop-blur-md rounded-sm md:rounded-2xl pt-4 md:pt-6 pb-0 flex flex-col items-center lg:max-w-[490px] xl:max-w-[457px] 2xl:max-w-[457px] min-h-[410px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[418px] 2xl:min-h-[418px] w-full mx-auto relative transition-all duration-1000 border border-white/40 mb-10 md:mb-20 xl:mb-12 2xl:mb-24 shadow-xl hover:shadow-2xl overflow-hidden">
                      <div className="text-center z-20 relative px-2 w-full">
                        <h4
                          className={`font-semibold md:font-bold text-xl md:text-2xl mb-1 text-[#051630] tracking-tight transition-all duration-1000 delay-100 ${selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                        >
                          {card?.title}
                        </h4>
                        <p
                          className={`text-gray-700 text-md md:text-lg max-w-full mx-6 leading-relaxed md:leading-[1.36] font-normal transition-all duration-1000 delay-300 ${selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                        >
                          {card?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Static Career Image (Stays centered while text slides) */}
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/group_img_32f982771f.png"
            fill
            className="-mb-10 object-contain translate-y-[35%] md:translate-y-[20%] lg:translate-y-[42%] xl:translate-y-[32%] 2xl:translate-y-[35%] transform scale-[1.25] lg:scale-[1.2] xl:scale-[1] translate-x-[4px]  "
            alt="Career Prospects Students"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerProspects;
