"use client";

import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import { SUCCESS_STORIES } from "@/features/home";

export default function ProgramHighlightSlider() {
  return (
    <div className="relative w-full max-w-[540px] mx-auto flex items-center justify-center">
      {/* Background Shade Image */}
      <div className="absolute -inset-8 sm:-inset-12 z-0 pointer-events-none flex items-center justify-center">
        <Image
          src="/images/home/placements/shade.png"
          alt=""
          fill
          className="w-full h-full object-contain opacity-95 scale-120"
          priority
        />
      </div>

      {/* Card Carousel */}
      <div className="relative z-10 w-full">
        <Carousel
          className="w-full"
          showArrows={true}
          prevArrowClassName="!left-0 sm:!left-6 !w-10 !h-10"
          nextArrowClassName="!right-0 sm:!right-6 !w-10 !h-10"
          autoplayDelay={5000}
          showDots={false}
        >
          {SUCCESS_STORIES.map((story, i) => (
            <div key={i} className="relative group">
              <div className="relative w-full aspect-square max-h-[460px]">
                <Image
                  src={story.image}
                  alt={`Student success story ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-contain scale-125"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
