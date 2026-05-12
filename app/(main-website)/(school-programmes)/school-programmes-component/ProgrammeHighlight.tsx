"use client";
import { useCallback, useEffect, useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { HiglightCard } from "@/lib/types/school-programme";
import ProgrammeHighlightCard from "../school-prog-global-comps/ProgrammeHighlightCard";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const displayCount = isExpanded ? highlights?.length : 6;
  const visibleHighlights = highlights?.slice(0, displayCount);

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

  if (slug === "bba-hr") {
    return (
      <section className="prog-global-padding bg-white py-8 md:py-16 shadow">
        <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#051630] leading-[1.1] mb-6">
              {heading} {highlightHeading}
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium">
              {desc}
            </p>
          </div>

          <div className="relative group/slider px-4 md:px-14">
            {/* Slider Controls */}
            <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 md:block">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#051630] hover:bg-[#051630] hover:text-white transition-all duration-300 border border-gray-100 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>

            <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 md:block">
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-[#051630] hover:bg-[#051630] hover:text-white transition-all duration-300 border border-gray-100 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Embla Viewport - Added padding and negative margin to prevent shadow clipping */}
            <div className="overflow-hidden cursor-grab active:cursor-grabbing pt-5 pb-10 -my-10" ref={emblaRef}>
              <div className="flex -ml-4">
                {highlights?.map((highlight) => (
                  <div key={highlight.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] pl-4 min-w-0">
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
  }

  return (
    <section className="prog-global-padding bg-[#f9f9f9] py-8 md:py-16">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="common-prog-container">
          <h2 className="text-[28px] md:text-[45px] font-bold text-gray-900 leading-tight tracking-tight">
            {heading} {highlightHeading}
          </h2>
          <p className="text-gray-600 text-base md:text-xl font-medium">{desc}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 md:mt-10 px-4 md:px-0">
          {visibleHighlights &&
            visibleHighlights.map((highlight) => (
              <ProgrammeHighlightCard
                key={highlight.id}
                title={highlight?.title}
                desc={highlight?.subtitle}
                highlightimg={highlight?.highlightimage}
              />
            ))}
        </div>

        {highlights && highlights.length > 6 && (
          <div className="flex justify-center mt-8 px-4 md:px-0">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="md:px-6 w-full md:w-auto py-2.5 border-2 border-[#0a41a1] text-[#0a41a1] font-semibold rounded-[4px] hover:bg-[#0a41a1] hover:text-white transition-all duration-300 cursor-pointer group"
            >
              <span className="flex items-center justify-center gap-2">
                {isExpanded ? "Show Less" : "Read More"}
                {isExpanded ? (
                  <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
                ) : (
                  <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-0.5" />
                )}
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProgrammeHighlight;
