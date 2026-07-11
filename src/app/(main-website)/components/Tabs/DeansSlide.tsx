"use client";

import React, { useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const deans = [
  { name: "Dr. Tanaya Verma", role: "Dean- SOAD", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Tanaya_Verma_SOAD_0c930f1c6b.jpg" },
  { name: "Dr. Tania Gupta", role: "Professor & Dean- SOED", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Prof_Tania_Gupta_SOED_3cafa605a2.jpg" },
  { name: "Dr. Joginder Singh Yadav", role: "Professor & Dean- SOAS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Prof_Dr_J_S_Yadav_SOAS_06631d634a.png" },
  { name: "Dr. Pankaj Agarwal", role: "Professor & Dean, SOET", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Pankaj_Agarwal_DEAN_SOET_2e63c16f24.png" },
  { name: "Dr. Hema Chaudhary", role: "Professor & Dean, SMAS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Hema_Chaudhary_f8b6ce6363.jpg" },
  { name: "Dr. Meena Bhandari", role: "Associate Professor & Dean, SBAS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Meena_Bhandari_SBAS_81ba776ac8.jpg" },
  { name: "Dr. Amit Chawla", role: "Professor & Dean, SEMCE", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Amit_Chawla_SEMCE_54fb0f6497.png" },
  { name: "Prof (Dr.) Kaveri Sharma", role: "Professor & Dean, SOLS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/16_5ba7e2ac00.jpg" },
  { name: "Mamta Shankar", role: "School Coordinator, SPRS", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Mamta_Shankar_P_T_SPRS_7350075f69.jpg" },
  { name: "Prof. Shravan Kumar", role: "Professor and Dean, SOLA", img: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dr_Shravan_Kumar_095984b81a.png" },
];

const ITEMS_PER_LOAD = 5;

const DeansSlide = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative px-4 md:px-0">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4 md:-ml-6">
          {deans.map((dean, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/5"
            >
              <div
                className="group relative flex flex-col h-full"
              >
                {/* Person Image */}
                <div className="w-full h-[220px] sm:h-[260px]">
                  <div className="w-full h-full relative overflow-hidden rounded-[3px] bg-white">
                  <Image
                    src={dean.img}
                    alt={dean.name}
                    fill
                    className="object-contain object-bottom pt-4"
                  />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow text-left py-4">
                  <h5 className="text-[18px] sm:text-[20px] font-serif font-semibold text-white leading-tight">
                    {dean.name}
                  </h5>
                  <p className="text-[13px] font-poppins sm:text-[14px] text-[#5AB9E5] font-normal leading-snug mt-2">
                    {dean.role}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current ? "bg-[#00A0E3] w-6" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DeansSlide;
