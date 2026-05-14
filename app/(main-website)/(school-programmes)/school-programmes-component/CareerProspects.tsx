"use client";
import React, { useCallback, useEffect, useState } from "react";
import { STRAPI_URL } from "@/app/constant";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { CareerCard } from "@/lib/types/school-programme";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

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
  if (slug === "bba-hr") {
    return (
      <section className="relative py-6 md:pt-16 md:pb-[80px] xl:pb-[150px] overflow-hidden min-h-[600px] md:min-h-[750px] xl:min-h-[850px] flex flex-col items-center">
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
            <h3 className="text-3xl md:text-[36px] xl:text-[42px] font-bold text-[#0B1C30] mb-3 md:mb-2 leading-[1.1] tracking-tight">
              {heading} {highlight}
            </h3>
            <p className="text-[#45464D] text-shadow-xs md:text-shadow-none text-md xl:text-lg mx-auto max-w-full leading-relaxed md:leading-[1.36]">
              {desc}
            </p>
          </div>

          {/* Action Button */}
          {(btn?.buttonclass || btn?.buttonlink) && (
            <div className="mb-6">
              <Link
                href={btn?.buttonlink || "#"}
                className={`text-white bg-[#cb000d] hover:bg-[#c42518] px-6 py-3 md:px-10 md:py-3 flex items-center justify-center gap-3 rounded-sm md:rounded-lg font-semibold tracking-wide shadow-lg hover:shadow-2xl transition-all duration-300 group ${btn?.buttonclass}`}
              >
                <span>{btn?.buttontext}</span>
              </Link>
            </div>
          )}


          <div className="relative w-full  mx-auto">
            
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
                <div className="flex ">
                  {careercards?.map((card, index) => (
                    <div key={card?.id} className="flex-[0_0_100%] min-w-0">
                        <div className="bg-white/90 backdrop-blur-md rounded-sm md:rounded-2xl pt-4 md:pt-6 pb-0 flex flex-col items-center lg:max-w-[457px] xl:max-w-[457px] 2xl:max-w-[457px] min-h-[320px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[418px] 2xl:min-h-[418px] w-full mx-auto relative transition-all duration-1000 border border-white/40 mb-20 xl:mb-12 2xl:mb-24 shadow-xl hover:shadow-2xl overflow-hidden">
                          <div className="text-center z-20 relative px-6">
                            <h4 className={`font-bold text-xl md:text-2xl mb-1 text-[#051630] tracking-tight transition-all duration-1000 delay-100 ${selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                              {card?.title}
                            </h4>
                            <p className={`text-gray-700 text-md md:text-lg max-w-sm mx-auto leading-relaxed md:leading-[1.36] font-normal transition-all duration-1000 delay-300 ${selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
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
                className="-mb-10 object-contain md:translate-y-[20%] lg:translate-y-[42%] xl:translate-y-[32%] 2xl:translate-y-[30%] transform scale-[1.35] md:scale-[1] -translate-x-[17px] translate-y-[100px] md:translate-y-[120px]"
                alt="Career Prospects Students"
              />
            </div>
          </div>
        </section>
    );
  }

  // Default design for other slugs
  return (
    <section className="prog-global-padding py-12 md:py-20 px-4 md:px-0">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          <div className="w-full xl:w-1/2 flex flex-col">
            <h3 className="text-4xl md:text-[42px] font-bold text-[#051630] mb-4 text-center sm:text-left leading-[1.1] tracking-tight">
              {heading} {highlight}
            </h3>

            <p className="mb-4 md:mb-8 leading-relaxed text-gray-600 text-lg text-center sm:text-left max-w-2xl">
              {desc}
            </p>

            <div className="flex-1 space-y-3 md:space-y-6">
              {careercards?.map((card) => (
                <div key={card?.id} className="flex gap-5 md:gap-7 group">
                  <div className="flex-shrink-0 pt-1">
                    <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg text-white bg-gradient-to-br from-[#0a41a1] to-[#0060aa] text-xl font-bold">
                      {card?.num}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl md:text-[22px] mb-2 text-[#051630]">
                      {card?.title}
                    </h4>
                    <p className="leading-relaxed text-gray-600 text-base md:text-lg text-left">
                      {card?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full xl:w-1/2 mb-5 sm:mb-0 flex">
            {careerimg?.url && (
              <div className="relative w-full min-h-[300px]">
                <Image
                  src={`${STRAPI_URL}${careerimg?.url}`}
                  fill
                  className="object-contain"
                  alt={careerimg?.alternativeText || "Career Prospectus"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {slug !== "bhmct-hotel-management" && (btn?.buttonclass || btn?.buttonlink) && (
        <div className="max-w-[1440px] mx-auto w-full flex justify-center mt-0 md:mt-8 lg:mt-12">
          <Link
            href={btn?.buttonlink || "#"}
            className={`text-white bg-[#cb000d] hover:bg-[#c42518] px-8 py-2.5 flex items-center justify-center gap-3 max-w-xs w-full rounded-md font-semibold tracking-[0.025em] cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 group ${btn?.buttonclass}`}
          >
            <span>{btn?.buttontext}</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      )}
    </section>
  );
};

export default CareerProspects;
