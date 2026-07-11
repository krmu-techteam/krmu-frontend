"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

type SlideItem = {
  image: string;
  alt: string;
};

const slides: SlideItem[] = [
  {
    image: "/landingpage/common/life/1.webp",
    alt: "Campus Life 1",
  },
  {
    image: "/landingpage/common/life/2.webp",
    alt: "Campus Life 1",
  },
  {
    image: "/landingpage/common/life/3.webp",
    alt: "Campus Life 1",
  },
  {
    image: "/landingpage/common/life/4.webp",
    alt: "Campus Life 1",
  },
  {
    image: "/landingpage/common/life/5.webp",
    alt: "Campus Life 1",
  },
  {
    image: "/landingpage/common/life/6.webp",
    alt: "Campus Life 1",
  },
  {
    image: "/landingpage/common/life/7.webp",
    alt: "Campus Life 1",
  },
  {
    image: "/landingpage/common/life/8.webp",
    alt: "Campus Life 1",
  },
  {
    image: "/landingpage/common/life/9.webp",
    alt: "Campus Life 1",
  },
  {
    image: "/landingpage/common/life/10.webp",
    alt: "Campus Life 1",
  },
];

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
      <Carousel
        setApi={setApi}
        plugins={[autoplay.current]}
        opts={{ align: "center", loop: true }}
        className="w-full"
      >
        <CarouselContent className="px-0 sm:px-8 lg:px-16 gap-6">
          {slides.map((slide, index) => {
            const isActive = index === current;

            return (
              <CarouselItem
                key={index}
                className="basis-full sm:basis-1/2 lg:basis-[38%]"
              >
                <div
                  className={`transition-all duration-500 ${
                    isActive ? "scale-100" : "scale-95"
                  }`}
                >
                  <Image
                    src={slide.image}
                    width={600}
                    height={500}
                    alt={slide.alt}
                    className={`w-full rounded-2xl object-cover transition-all duration-500 ${
                      isActive
                        ? "h-[300px] sm:h-[340px]"
                        : "h-[340px] sm:h-[410px]"
                    }`}
                  />
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CometoLifeSlide;
