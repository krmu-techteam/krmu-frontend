"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

const slider1 = [
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_of_Essex_6bfc2f4d98.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/George_Mason_University_e7a9ce2682.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_of_Plymouth_90b2da2395.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Nanyang_Technological_University_104c060c61.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Cardiff_Metropolitan_University_aab5cf2912.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_of_Florida_bce802b829.webp",
];

const slider2 = [
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_of_Leeds_9f54c6e152.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_of_Manchester_d756fd784b.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Trinity_College_Dublin_2ba13b7fba.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_of_Houston_e46a812572.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_of_Sussex_a5e11d0306.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_of_Kent_d3b6cc5da4.webp",
];

const slider3 = [
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Cardiff_University_5c73023aca.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Maynooth_University_10cc5cc23b.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_College_Dublin_b410122d0e.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Dublin_City_University_1a457d0b47.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Robert_Gordon_University_baa8f757b8.webp",
  "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/University_of_Strathclyde_b057dc5338.webp",
];

export const InternationExposureLogoSlider = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full pb-5 md:pb-10"
      >
        <CarouselContent>
          {slider1.map((url, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <div
                className="
    w-full 
    px-3 py-lg
    bg-white
    border-[1.5px] border-[#f1f5f9]
    rounded-[16px]
    my-[15px]
    h-[100px]
    flex flex-col items-center justify-center text-center
    shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]
    relative overflow-hidden
    transition-all duration-500
    ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
    hover:border-[#1461ac]
    hover:shadow-[0_20px_25px_-5px_rgba(20,97,172,0.1),0_10px_10px_-5px_rgba(20,97,172,0.04)]
    group
  "
              >
                <Image
                  src={url}
                  alt="George Mason University"
                  width={150}
                  height={56}
                  className="max-h-full object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full pb-5 md:pb-10"
      >
        <CarouselContent>
          {slider2.map((url, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <div
                className="
    w-full 
    px-3 py-lg
    bg-white
    border-[1.5px] border-[#f1f5f9]
    rounded-[16px]
    my-[15px]
    h-[100px]
    flex flex-col items-center justify-center text-center
    shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]
    relative overflow-hidden
    transition-all duration-500
    ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
    hover:border-[#1461ac]
    hover:shadow-[0_20px_25px_-5px_rgba(20,97,172,0.1),0_10px_10px_-5px_rgba(20,97,172,0.04)]
    group
  "
              >
                <Image
                  src={url}
                  alt="George Mason University"
                  width={150}
                  height={56}
                  className="max-h-full object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {slider3.map((url, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <div
                className="
    w-full 
    px-3 py-lg
    bg-white
    border-[1.5px] border-[#f1f5f9]
    rounded-[16px]
    my-[15px]
    h-[100px]
    flex flex-col items-center justify-center text-center
    shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]
    relative overflow-hidden
    transition-all duration-500
    ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
    hover:border-[#1461ac]
    hover:shadow-[0_20px_25px_-5px_rgba(20,97,172,0.1),0_10px_10px_-5px_rgba(20,97,172,0.04)]
    group
  "
              >
                <Image
                  src={url}
                  alt="George Mason University"
                  width={150}
                  height={56}
                  className="max-h-full object-contain"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
