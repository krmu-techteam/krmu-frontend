"use client";
import React, { useCallback, useEffect, useState } from "react";
import { CareerProspectsSectionProps } from "@/features/programs";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import Button from "@/components/common/Button";

const CareerProspectsSection = ({
  heading,
  highlight,
  desc,
  btn,
  careerimg,
  careercards,
  slug,
}: CareerProspectsSectionProps) => {
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
          className="object-cover"
          alt="University Background"
          priority
        />
        {/* Light Overlay to enhance readability */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="md:max-w-[855px] w-full text-center mb-4">
          <h3 className="text-[28px] font-serif md:text-[36px] lg:text-[38px] xl:text-[42px] font-bold text-[#0B1C30] mb-3 md:mb-2">
            {heading} {highlight}
          </h3>
          <p className="text-[#061623] text-justify md:text-center font-poppins text-shadow-xs md:text-shadow-none text-md xl:text-[18px] mx-auto max-w-full leading-relaxed md:leading-[1.36]">
            {desc}
          </p>
        </div>

        {/* Action Button */}
        {slug !== "bhmct-hotel-management" &&
          (btn?.buttonclass || btn?.buttonlink) && (
            <div className="mb-10">
              <Button
                variant="primary"
                href={btn?.buttonlink || "#"}
                className={`font-semibold tracking-wider font-poppins ${btn?.buttonclass || ""}`}
              >
                {btn?.buttontext}
              </Button>
            </div>
          )}

        <div className="relative w-full mx-auto">
          {/* Carousel Wrapper (Text Only) */}
          <div className="w-full relative max-w-lg mx-auto">
            <button
              onClick={scrollPrev}
              className="absolute -left-2 sm:-left-3 md:-left-12 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-[2px] md:rounded-[4px] bg-white hover:bg-white/80 text-[#051630] transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute -right-2 sm:-right-3 md:-right-12 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-[2px] md:rounded-[4px] bg-white hover:bg-white/80 text-[#051630] transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {careercards?.map((card, index) => (
                  <div key={card?.id} className="flex-[0_0_100%] min-w-0">
                    <div className="bg-gradient-to-b from-white via-white/85 to-transparent rounded-[2px] md:rounded-2xl pt-2.5 sm:pt-4 md:pt-6 px-3 sm:px-4 md:px-6 pb-0 flex flex-col items-center lg:max-w-[457px] xl:max-w-[457px] 2xl:max-w-[457px] min-h-[380px] sm:min-h-[390px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[418px] 2xl:min-h-[418px] w-full mx-auto relative transition-all duration-1000 mb-6 sm:mb-10 md:mb-20 xl:mb-12 2xl:mb-24 shadow-xl hover:shadow-2xl overflow-hidden">
                      <div className="text-center z-20 relative px-1 sm:px-4 md:px-6">
                        <h4
                          className={`font-serif font-bold text-[22px] sm:text-xl md:text-2xl mb-1 sm:mb-1 text-[#061623] transition-all duration-1000 delay-100 ${selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                        >
                          {card?.title}
                        </h4>
                        <p
                          className={`text-[#061623]/90 text-[13.5px] sm:text-[15px] md:text-[17px] max-w-sm mx-auto leading-snug sm:leading-relaxed md:leading-[1.36] font-normal transition-all font-poppins duration-1000 delay-300 ${selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
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
            className="-mb-10 object-contain md:translate-y-[20%] lg:translate-y-[42%] xl:translate-y-[33%] 2xl:translate-y-[30%] transform scale-[1.25] lg:scale-[1.2] xl:scale-[1] translate-x-[4px] translate-y-[135px] sm:translate-y-[140px] md:translate-y-[120px]"
            alt="Career Prospects Students"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerProspectsSection;
