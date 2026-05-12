"use client";
import React, { useCallback, useEffect, useState } from "react";
import { STRAPI_URL } from "@/app/constant";
import { ButtonType, StrapiMedia } from "@/lib/types/common";
import { CareerCard } from "@/lib/types/school-programme";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
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
      <section className="relative  py-8 md:pt-16 md:pb-[150px] overflow-hidden min-h-[850px] flex flex-col items-center">
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
          <div className="max-w-4xl w-full text-center mb-6 md:mb-8">
            <h3 className="text-4xl md:text-[52px] font-bold text-[#0B1C30] mb-4 leading-[1.1] tracking-tight">
              {heading} {highlight}
            </h3>
            <p className="leading-relaxed text-[#45464D] text-lg md:text-xl mx-auto max-w-5xl">
              {desc}
            </p>
          </div>

          {/* Action Button */}
          {(btn?.buttonclass || btn?.buttonlink) && (
            <div className="mb-8 md:mb-10">
              <Link
                href={btn?.buttonlink || "#"}
                className={`text-white bg-[#cb000d] hover:bg-[#c42518] px-10 py-3 flex items-center justify-center gap-3 rounded-lg font-semibold tracking-wide shadow-lg hover:shadow-2xl transition-all duration-300 group ${btn?.buttonclass}`}
              >
                <span>{btn?.buttontext}</span>
              </Link>
            </div>
          )}

          {/* Slider Section */}
          <div className="relative w-full max-w-lg  mx-auto">
             <button
              onClick={scrollPrev}
              className="absolute left-[-12px] md:left-[-60px] top-[250px] -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#051630] text-[#051630] hover:bg-white hover:border-white transition-all group cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            
            <button
              onClick={scrollNext}
             className="absolute right-[-12px] md:right-[-60px] top-[250px] -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#051630] text-[#051630] hover:bg-white hover:border-white transition-all group cursor-pointer"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
          <div className="relative w-full  mx-auto">
            

            {/* Carousel Wrapper (Text Only) */}
            <div className="w-full">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="flex ">
                  {careercards?.map((card, index) => (
                    <div key={card?.id} className="flex-[0_0_100%] min-w-0">
                        <div className="bg-white/80 rounded-2xl pt-8 md:pt-12 pb-0 flex flex-col items-center max-w-[457px] min-h-[418px] w-full mx-auto relative transition-all duration-300 border border-white/20 mb-0 md:mb-32">
                          <div className="text-center z-20 relative px-6">
                            <h4 className="font-bold text-xl mb-4 text-[#051630]">
                              {card?.title}
                            </h4>
                            <p className="leading-relaxed text-gray-600 text-base max-w-sm mx-auto">
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
                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/group_people_751a407e4e.png"
                fill
                className="-mb-10 object-contain md:translate-y-[28%] transform scale-[1.35] md:scale-[1.1] -translate-x-[14px] translate-y-[120px]"
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
