"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type SlideType = {
  imgUrl: string;
};

type Props = {
  title: string;
  description: string;
  slides: SlideType[];
};

const HostelFacilityCardSlide: React.FC<Props> = ({
  title,
  description,
  slides,
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <div className="w-full flex flex-col">
      {/* Top Carousel Image Container (Figma Spec: rounded-[10px]) */}
      <div className="relative w-full rounded-[10px] overflow-hidden  aspect-[16/9] lg:h-[440px]">
        <Carousel
          setApi={setApi}
          opts={{
            loop: false,
          }}
          className="w-full h-full"
        >
          <CarouselContent className="h-full -ml-0">
            {slides.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-0 relative w-full h-[280px] sm:h-[380px] lg:h-[440px]"
              >
                <Image
                  src={item.imgUrl}
                  alt={title}
                  fill
                  priority={index === 0}
                  className="object-fill object-center"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Floating Bottom Card Container (Figma Specs: rounded-[10px], bg-white, title: #C29004) */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-10 w-[92%] sm:w-[88%] lg:w-[85%] mx-auto z-10 bg-white rounded-[10px] p-6 sm:p-4 lg:p-5">
        {/* Title & Navigation Controls Header */}
        <div className="flex items-center justify-between gap-4 mb-3 sm:mb-2">
          <h4 className="font-serif text-2xl sm:text-3xl lg:text-[42px] font-semibold text-[#C29004] tracking-tight">
            {title}
          </h4>

          {/* Circular Navigation Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
              aria-label="Previous Slide"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all bg-transparent ${
                canScrollPrev
                  ? "border-2 border-[#001732] text-[#001732] hover:opacity-70 cursor-pointer"
                  : "border-2 border-gray-300 text-gray-300 cursor-not-allowed opacity-50"
              }`}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
              aria-label="Next Slide"
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all bg-transparent ${
                canScrollNext
                  ? "border-2 border-[#001732] text-[#001732] hover:opacity-70 cursor-pointer"
                  : "border-2 border-gray-300 text-gray-300 cursor-not-allowed opacity-50"
              }`}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Paragraph Description */}
        <p className="font-poppins text-gray-600 text-sm sm:text-base lg:text-[19px] leading-relaxed font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HostelFacilityCardSlide;
