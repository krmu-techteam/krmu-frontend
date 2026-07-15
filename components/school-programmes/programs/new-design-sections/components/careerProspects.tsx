"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getCareerProspectsContent } from "../lib/getContent";
import { Fraunces, Inter, Poppins } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const inter = Poppins({
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
  slug?: string;
};

const CareerProspects = ({ slug }: Props) => {
  const data = getCareerProspectsContent();
  const content = data.careerProspects;

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
    <section className="relative w-full  bg-[radial-gradient(40%_80%_at_20%_45%,#024178_0%,#012D52_50%,#012D52_100%)] text-white  overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Subheading / Badge */}
            <span
              className={`${inter.className} text-[#BFA477] text-xs sm:text-[11px] leading-[16px] font-medium tracking-[1.54px] uppercase block mb-3`}
            >
              {content.badge}
            </span>

            {/* Title */}
            <h2
              className={`${fraunces.className} text-white text-3xl sm:text-4xl md:text-5xl lg:text-[38px] font-semibold  mb-6`}
            >
              {content.title}
            </h2>

            {/* Description */}
            <p
              className={`${inter.className} text-white text-sm sm:text-base md:text-[14px] tracking-[0.2px]  mb-16 max-w-[598px]`}
            >
              {content.description}
            </p>

            {/* Carousel Slider */}
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 5000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full mb-8"
            >
              <CarouselContent className="-ml-4">
                {content.slides.map((slide, slideIdx) => (
                  <CarouselItem key={slide.id} className="basis-full pl-4">
                    <div className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-8 min-h-[160px] sm:min-h-[120px]">
                      {slide.items.map((item, itemIdx) => {
                        const isLastItem = itemIdx === slide.items.length - 1;
                        return (
                          <React.Fragment key={itemIdx}>
                            {/* Item Block */}
                            <div className="flex-1 flex flex-col">
                              <h3
                                className={`${fraunces.className} text-white text-xl sm:text-2xl md:text-[21px] mb-3`}
                              >
                                {item.title}
                              </h3>
                              <p
                                className={`${inter.className} text-white text-[13px] sm:text-[14px] `}
                              >
                                {item.desc}
                              </p>
                            </div>

                            {/* Blue Vertical Line Separator (Only between items, on desktop/tablet size) */}
                            {!isLastItem && (
                              <div className="hidden sm:block w-[1.5px] bg-[#FFFFFF] self-stretch opacity-20 mx-1" />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Slider Dots */}
            {count > 1 && (
              <div className="flex items-center mx-auto gap-2 mt-4 sm:mt-6">
                {Array.from({ length: count }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => api?.scrollTo(idx)}
                    className={`h-2.5 rounded-[50px] transition-all duration-300 cursor-pointer ${
                      current === idx
                        ? "w-20 bg-[#BCB093]"
                        : "w-5 bg-[#608ABA] hover:bg-[#346299]"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-[1/1] lg:aspect-[1/1] overflow-hidden">
              <Image
                src={
                  slug === "mba-fintech"
                    ? content.image
                    : slug === "mba-digital-marketing"
                      ? "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/1112_0ac0a22e79.png"
                      : slug === "mba"
                        ? "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Rectangle_1602_1bf41df812.jpg"
                        : ""
                }
                alt={
                  slug === "mba-fintech"
                    ? "MBA Fintech students exploring career prospects in finance and technology"
                    : slug === "mba-digital-marketing"
                      ? "KRMU MBA in Digital Marketing graduates group photo, career prospects"
                      : slug === "mba"
                        ? "KRMU MBA graduates group photo, career prospects"
                        : ""
                }
                width={1930}
                height={1930}
                className="object-cover w-full h-full"
                // sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerProspects;
