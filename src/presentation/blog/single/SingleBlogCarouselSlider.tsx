"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

type Props = {
  children: React.ReactNode;
};

const BlogCarouselSlider = ({ children }: Props) => {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true }),
  );

  return (
    <div className="relative w-full mt-12 mb-6">
      <Carousel
        plugins={[autoplay.current]}
        opts={{ align: "start", loop: true }}
        className="w-full h-auto"
      >
        {/* Header containing Title and Next/Prev controls inline */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] font-semibold text-white font-poppins m-0">
            Recent Blogs
          </h2>
          <div className="flex items-center gap-2">
            <CarouselPrevious className="static translate-y-0 left-auto right-auto top-auto bottom-auto bg-[#14212c] text-white hover:bg-white/10 hover:text-white border border-white/10 w-9 h-9 rounded-full flex items-center justify-center pointer-events-auto" />
            <CarouselNext className="static translate-y-0 left-auto right-auto top-auto bottom-auto bg-[#14212c] text-white hover:bg-white/10 hover:text-white border border-white/10 w-9 h-9 rounded-full flex items-center justify-center pointer-events-auto" />
          </div>
        </div>

        {/* Carousel Content showing 4 items on desktop */}
        <CarouselContent className="-ml-4">
          {React.Children.map(children, (child, i) => (
            <CarouselItem
              key={i}
              className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              {child}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BlogCarouselSlider;
