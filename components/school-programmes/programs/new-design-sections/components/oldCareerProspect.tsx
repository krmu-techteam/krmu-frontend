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
import { Fraunces, Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

type Props = {
  heading: string;
  highlight: string;
  desc: string;
  btn: ButtonType;
  careerimg: StrapiMedia;
  careercards: CareerCard[];
  slug?: string;
};

const OldCareerProspects = ({
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
    <section className="relative w-full bg-[#F7F0E0] py-16 md:py-20 overflow-hidden min-h-[600px] md:min-h-[850px] xl:min-h-[850px] flex flex-col items-center text-[#012D52]">
      <div className="absolute inset-0 bg-[url('https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/university_bg_374a0a0fef.png')] bg-cover bg-center bg-no-repeat object-cover blur-[4px] opacity-40" />
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 w-full flex flex-col items-center">
        {/* Header Section */}
        <div className="max-w-4xl w-full text-center mb-8">
          <h3
            className={`${fraunces.className} text-3xl sm:text-4xl md:text-[38px] font-semibold text-[#002C51] mb-4 leading-tight`}
          >
            {heading} {highlight}
          </h3>
          <p
            className={`${inter.className} text-black/85 text-sm sm:text-base leading-relaxed mx-auto max-w-[700px]`}
          >
            {desc}
          </p>
        </div>

        {/* Action Button */}
        {slug !== "bhmct-hotel-management" &&
          (btn?.buttonclass || btn?.buttonlink) && (
            <div className="mb-6">
              <Link
                href={btn?.buttonlink || "#"}
                className={`${inter.className} text-white bg-[#DE0000] hover:bg-[#b30000] px-8 py-3.5 flex items-center justify-center gap-3 rounded-[5px] font-semibold transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <span>{btn?.buttontext}</span>
              </Link>
            </div>
          )}

        <div className="relative w-full mx-auto">
          {/* Carousel Wrapper (Text Only) */}
          <div className="w-full relative max-w-lg mx-auto mt-4">
            <button
              onClick={scrollPrev}
              className="absolute -left-3 md:-left-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#FDF7EB] text-[#002C51] hover:bg-[#002C51] hover:text-white border border-[#BCB093]/40 shadow-md hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={scrollNext}
              className="absolute -right-3 md:-right-20 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#FDF7EB] text-[#002C51] hover:bg-[#002C51] hover:text-white border border-[#BCB093]/40 shadow-md hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {careercards?.map((card, index) => (
                  <div key={card?.id} className="flex-[0_0_100%] min-w-0">
                    <div className="bg-[#FDF7EB] border border-[#BCB093] rounded-[10px] pt-4 md:pt-6 pb-0 flex flex-col items-center lg:max-w-[490px] xl:max-w-[457px] 2xl:max-w-[457px] min-h-[410px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[418px] 2xl:min-h-[418px] w-full mx-auto relative transition-all duration-1000 border border-white/40 mb-10 md:mb-20 xl:mb-12 2xl:mb-24 shadow-xl hover:shadow-2xl overflow-hidden">
                      <div className="text-center z-20 relative px-2 w-full">
                        <h4
                          className={`${fraunces.className} text-[#002C51] font-semibold text-xl md:text-2xl mb-3 tracking-tight transition-all duration-1000 delay-100 ${selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                        >
                          {card?.title}
                        </h4>
                        <p
                          className={`${inter.className} text-black/80 text-sm sm:text-base leading-relaxed transition-all duration-1000 delay-300 ${selectedIndex === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
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
            className=" bottom-0 object-contain translate-y-[35%] md:translate-y-[45%] lg:translate-y-[45%] xl:translate-y-[40%] 2xl:translate-y-[37%] transform scale-[1.25] lg:scale-[1.2] xl:scale-[1] translate-x-[4px]  "
            alt="Career Prospects Students"
          />
        </div>
      </div>
    </section>
  );
};

export default OldCareerProspects;
