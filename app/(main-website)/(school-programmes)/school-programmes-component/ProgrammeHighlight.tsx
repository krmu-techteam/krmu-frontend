"use client";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HiglightCard } from "@/lib/types/school-programme";
import ProgrammeHighlightModernCard from "../school-prog-global-comps/ProgrammeHighlightModernCard";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  heading: string;
  highlightHeading: string;
  desc: string;
  highlights: HiglightCard[];
  slug?: string;
};

const ProgrammeHighlight = ({
  heading,
  highlightHeading,
  desc,
  highlights,
  slug,
}: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 1 },
      },
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[#f9f9f9] py-8 md:p-6 lg:p-10 xl:py-12 2xl:py-16">
      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-0 lg:px-0 2xl:px-0">
        <div className="text-center mb-2 md:mb-6">
          <h2 className="text-2xl text-center md:text-center md:text-[40px] font-semibold md:font-bold text-[#051630] leading-[1.1] mb-2 md:mb-3">
            {heading} {highlightHeading}
          </h2>
          <p className="text-[#424242] text-md md:text-xl max-w-3xl mx-auto font-normal">
            {desc}
          </p>
        </div>

        <div className="relative group/slider">
          {/* Slider Controls */}
          <div className="absolute top-1/2 -left-3 md:-left-4 lg:-left-0 -translate-y-1/2 z-10">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#051630] hover:bg-[#051630] hover:text-white transition-all duration-300 border border-gray-100 cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-3 md:-right-4 -translate-y-1/2 z-10">
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#051630] hover:bg-[#051630] hover:text-white transition-all duration-300 border border-gray-100 cursor-pointer hover:scale-110 active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Embla Viewport - Added padding and negative margin to prevent shadow clipping */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing pt-2 md:pt-0" ref={emblaRef}>
            <div className="flex xl:ml-0 2xl:-ml-4 ">
              {highlights?.map((highlight) => (
                <div key={highlight.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] xl:flex-[0_0_25%] lg:pl-0 xl:pl-4 2xl:pl-4 min-w-0">
                  <ProgrammeHighlightModernCard
                    title={highlight?.title}
                    desc={highlight?.subtitle}
                    highlightimg={highlight?.highlightimage}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Dots or Navigation could go here if needed */}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeHighlight;
