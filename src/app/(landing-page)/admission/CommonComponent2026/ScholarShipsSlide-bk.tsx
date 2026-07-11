"use client";

import { useEffect, useState } from "react";
import ScholarshipCard from "./Cards/ScholarshipCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const ScholarShipsSlide = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="mb-10 sm:my-12">
          {Array.from({ length: 5 }).map((_, index) => {
            const isActive = index === current;

            return (
              <CarouselItem
                key={index}
                className={`md:basis-1/2 lg:basis-1/3 transition-all duration-300 ${
                  isActive
                    ? "scale-100"
                    : "scale-95"
                }`}
              >
                <ScholarshipCard />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* arrows */}
        <div className="pt-10">
          <CarouselPrevious className="bottom-0 top-full left-[25%] sm:left-0 md:top-0 md:left-[85%] xl:left-[90%] scholarPagePrevArrow border-white" />
          <CarouselNext className="bottom-0 top-full md:top-0 right-[25%] sm:right-0 scholarPageNextArrow border-white" />
        </div>

        {/* dots pagination */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: count }).map((_, index) => {
            const isActive = index === current;

            return (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-8 bg-white"
                    : "w-2 bg-[#68839d]"
                }`}
              />
            );
          })}
        </div>
      </Carousel>
    </div>
  );
};

export default ScholarShipsSlide;
