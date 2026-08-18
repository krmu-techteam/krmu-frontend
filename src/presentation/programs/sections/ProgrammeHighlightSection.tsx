"use client";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ProgrammeHighlightCard } from "../components";
import { ProgrammeHighlightSectionProps } from "@/features/programs";
import SectionDivider from "@/components/common/SectionDivider";

const ProgrammeHighlight = ({
  heading,
  highlightHeading,
  desc,
  highlights,
}: ProgrammeHighlightSectionProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
      slidesToScroll: 1,
      breakpoints: {
        "(min-width: 768px)": { slidesToScroll: 1 },
      },
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })],
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
    <section className="relative z-10 py-10 md:py-12 xl:py-20">
      <div className="max-w-[1530px] w-full mx-auto px-4 md:px-8 xl:px-16">
        <div className="text-center mb-5 md:mb-6">
          <h2 className="heading-primary mb-4 md:mb-3">
            {heading} {highlightHeading}
          </h2>
          <p className="text-white/90 font-poppins text-md md:text-md max-w-3xl mx-auto font-normal">
            {desc}
          </p>
        </div>

        <div className="relative group/slider">
          {/* Slider Controls */}
          <div className="absolute top-1/2 -left-3 md:-left-4 lg:left-[-45px] -translate-y-1/2 z-10">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-[3px] bg-[#CB000D] flex items-center justify-center text-white hover:bg-[#CB000D]/90 hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-3 md:-right-[45px] -translate-y-1/2 z-10">
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-[3px] bg-[#CB000D] flex items-center justify-center text-white hover:bg-[#CB000D]/90 hover:text-white transition-all duration-300 cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          {/* Embla Viewport - Added padding and negative margin to prevent shadow clipping */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing pt-2 md:pt-0"
            ref={emblaRef}
          >
            <div className="flex xl:ml-0 2xl:-ml-4 ">
              {highlights?.map((highlight) => (
                <div
                  key={highlight.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33%] xl:flex-[0_0_25%] lg:pl-0 xl:pl-2 2xl:pl-4 min-w-0"
                >
                  <ProgrammeHighlightCard
                    title={highlight?.title}
                    desc={highlight?.subtitle}
                    highlightimg={highlight?.highlightimage}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Mobile Dots or Navigation could go here if needed */}{" "}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default ProgrammeHighlight;
