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
import { beyondSlides } from "../content";

const CometoLifeSlide = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  const autoplay = useRef(
    Autoplay({
      delay: 3000,
    }),
  );

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="w-full overflow-hidden">
    <div className="relative">
      <Carousel
        setApi={setApi}
        plugins={[autoplay.current]}
        opts={{ align: "center", loop: true }}
        className="w-full relative"
      >
        <CarouselContent className="items-center">
          {beyondSlides.map((slide, index) => {
            const isActive = index === current;

            return (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div
                  className={`transition-all duration-500 ${
                    isActive ? "scale-100" : "scale-96"
                  }`}
                >
                  <Image
                    src={slide.img_url}
                    width={800}
                    height={500}
                    alt={slide.alt}
                    className={`w-full rounded-2xl object-cover object-top transition-all duration-500 ${
                      isActive ? "scale-100" : "scale-80"
                    }`}
                  />
                </div>
              </CarouselItem>
            );
          })}
        
        </CarouselContent>
          <div className="w-full absolute top-1/2 -translate-y-1/2 left-0 h-20">

          <CarouselPrevious className="left-0 xl:left-20 bg-white text-black border-none cursor-pointer" />
          <CarouselNext className="right-0 xl:right-20 bg-white text-black border-none cursor-pointer" />
          </div>
      </Carousel>
      </div>
    </div>
  );
};

export default CometoLifeSlide;
