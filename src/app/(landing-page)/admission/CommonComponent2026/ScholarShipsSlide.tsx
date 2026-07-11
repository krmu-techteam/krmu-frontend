"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { ScholarImpactSlide } from "../law-2026/contentype";

type Props = {
  slides: ScholarImpactSlide[];
};

const ScholarShipsSlide = ({ slides }: Props) => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 3000 }));

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="w-full overflow-hidden">
      <Carousel
        setApi={setApi}
        plugins={[autoplay.current]}
        opts={{ align: "center", loop: true }}
      >
        <CarouselContent className="px-6 sm:px-12 lg:px-24 gap-6 mt-20">
          {slides.map((slide, index) => {
            const isActive = index === current;

            return (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-[40%]"
              >
                <div
                  className={`transition-all duration-500 ${
                    isActive ? "scale-100" : "scale-90"
                  }`}
                >
                  <Image
                    src={slide.image}
                    width={600}
                    height={500}
                    alt={slide.alt || ""}
                    className={`w-full rounded-2xl object-cover transition-all ${
                      isActive
                        ? "h-[280px] sm:h-[330px]"
                        : "h-[220px] sm:h-[260px]"
                    }`}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <div className="pt-10">
          <CarouselPrevious className="bottom-0 top-full left-[25%] sm:left-0 md:top-[10%] md:left-[85%] xl:left-[90%] scholarPagePrevArrow border-white" />
          <CarouselNext className="bottom-0 top-[10%] md:top-[10%] right-[25%] sm:right-0 scholarPageNextArrow border-white" />
        </div>
      </Carousel>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-6 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScholarShipsSlide;
