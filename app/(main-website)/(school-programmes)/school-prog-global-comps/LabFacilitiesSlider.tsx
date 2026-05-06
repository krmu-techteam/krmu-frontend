"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { LabCard } from "@/lib/types/school-programme";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

import Image from "next/image";

type Props = {
  labcards: LabCard[];
  images: string[];
};

const LabFacilitiesSlider = ({ labcards, images }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
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
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        setApi={setApi}
      >
        <CarouselContent className="px-0 my-5 flex items-stretch">
          {labcards &&
            labcards.map((item, i) => {
               const labImage = images[i % images.length];
               return (
              <CarouselItem key={i} className="basis-full sm:basis-1/2 md:basis-1/3 flex">
                <div
                  className={`group bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col w-full mx-2`}
                >
                  <div className="relative h-[120px] w-full overflow-hidden flex items-center justify-center">
                    <Image
                      fill
                      src={labImage}
                      alt={item.title}
                      className="object-contain px-10 pt-10 pb-0 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="px-5 py-4 flex-1 flex flex-col items-center text-center">
                    <h5 className="font-bold mb-3 text-xl text-black leading-tight">
                      {item.title}
                    </h5>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            )})}
        </CarouselContent>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => api?.scrollTo(i)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                current === i ? "bg-[#0a41a1] w-6" : "bg-gray-400 w-2"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default LabFacilitiesSlider;
