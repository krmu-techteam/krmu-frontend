"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import type { Leadership } from "@/lib/api/leadership";
import { LeaderCard } from "../components/LeaderCard";
import { Carousel } from "@/components/common/Carousel";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { STRAPI_URL } from "@/app/constant";

type Props = {
  data: Leadership[];
};

export const Leaderships = ({ data }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [modalEmblaApi, setModalEmblaApi] = useState<any>(null);
  const [selectedLeader, setSelectedLeader] = useState<Leadership | null>(null);

  // Navigation button states for modal carousel
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = useCallback((api: any) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!modalEmblaApi) return;
    onSelect(modalEmblaApi);
    modalEmblaApi.on("select", onSelect);
    modalEmblaApi.on("reInit", onSelect);
  }, [modalEmblaApi, onSelect]);

  useEffect(() => {
    if (selectedLeader) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedLeader]);

  if (!data || data.length === 0) return null;

  return (
    <div className="w-full font-poppins text-white min-h-screen">
      {/* ================= HERO BANNER SECTION ================= */}
      <div className="relative w-full overflow-hidden pt-4 sm:pt-6 md:pt-10 lg:pt-28">
        <Image
          src="/images/leadership/leadership-hero.jpg"
          alt="Leadership Hero"
          width={1920}
          height={600}
          priority
          className="w-full h-auto object-contain object-center"
        />
      </div>

      {/* ================= MAIN CONTENT SECTION ================= */}
      <section className="py-12 md:py-16 xl:py-20 px-4 sm:px-6 md:px-8 xl:px-16 max-w-[1530px] mx-auto">
        {/* Section Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-center text-white mb-12 md:mb-16 tracking-wide">
          Leadership
        </h1>

        {/* Grid of Leader Cards (5 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-12 gap-x-6 justify-items-center max-w-[1400px] mx-auto">
          {data.map((leader) => (
            <LeaderCard
              key={leader.id}
              leader={leader}
              isActive={selectedLeader?.id === leader.id}
              onClick={() => setSelectedLeader(leader)}
            />
          ))}
        </div>
      </section>

      {/* ================= FULL POPUP MODAL DIALOG ================= */}
      {selectedLeader && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#061623]/30 backdrop-blur-xs transition-all duration-300 animate-in fade-in overflow-y-auto"
          onClick={() => setSelectedLeader(null)}
        >
          {/* Modal Container: width 1026px */}
          <div
            className="bg-[#061623] text-white rounded-[6px] relative max-w-[1026px] w-full max-h-[92vh] overflow-y-auto z-50 my-auto font-['Poppins'] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-white [&::-webkit-scrollbar-thumb]:bg-gray-400 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Half: White Details Box */}
            <div className="bg-white text-gray-900 p-6 sm:p-8 lg:p-10 relative">
              {/* Close Button (Clean X Icon) */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-black transition-colors p-1 cursor-pointer z-30"
                aria-label="Close modal"
              >
                <X size={22} />
              </button>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                {/* Left: 226x226px 2px dashed border (#CCCCCC) with exact 8,8 dashes */}
                <div className="w-[226px] h-[226px] rounded-full relative flex items-center justify-center shrink-0">
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 226 226"
                    fill="none"
                  >
                    <circle
                      cx="113"
                      cy="113"
                      r="112"
                      stroke="#CCCCCC"
                      strokeWidth="2"
                      strokeDasharray="8 8"
                    />
                  </svg>
                  <div className="w-[210px] h-[210px] rounded-full overflow-hidden absolute top-[8px] left-[8px] bg-gray-100">
                    <Image
                      src={
                        selectedLeader.leadership_img?.url
                          ? selectedLeader.leadership_img.url.startsWith("http")
                            ? selectedLeader.leadership_img.url
                            : `${STRAPI_URL}${selectedLeader.leadership_img.url}`
                          : "/images/placeholder.png"
                      }
                      alt={selectedLeader.name}
                      fill
                      unoptimized
                      className="object-cover object-top"
                    />
                  </div>
                </div>

                {/* Right: Info & Content */}
                <div className="flex-1 text-left pr-0 md:pr-4 font-poppins w-full">
                  {/* Name: 20px Bold */}
                  <h2 className="font-poppins font-bold text-[20px] text-gray-900 leading-tight">
                    {selectedLeader.name}
                  </h2>
                  {/* Designation: 12px Regular */}
                  {/* <h3 className="font-poppins font-normal text-[12px] text-gray-600 leading-tight mt-1 mb-2">
                    {selectedLeader.desg}
                  </h3> */}

                  {selectedLeader.content && (
                    <div
                      className="w-full text-gray-700 font-poppins text-xs sm:text-[12px] space-y-2 max-w-none pt-1.5 mt-1 [&_*]:!font-poppins [&_*]:text-gray-700 [&_p]:!mb-2 [&_p]:!mt-0 [&_p]:!leading-relaxed [&_p]:w-full"
                      dangerouslySetInnerHTML={{
                        __html: selectedLeader.content.replace(
                          /(font-family|margin|margin-bottom|padding|padding-bottom)\s*:\s*[^;"]+;?/gi,
                          "",
                        ),
                      }}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Half: Dark Blue Carousel Slider */}
            <div className="bg-[#051320] p-4 sm:p-6 md:p-8 relative border-t border-[#132d44]">
              <Carousel
                options={{ align: "start", loop: false }}
                autoplay={false}
                showDots={false}
                showArrows={false}
                setApi={setModalEmblaApi}
                className="w-full"
                containerClassName=""
                slideClassName="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 px-1 py-4"
              >
                {data.map((leader) => (
                  <LeaderCard
                    key={leader.id}
                    leader={leader}
                    isCompact={true}
                    isActive={selectedLeader.id === leader.id}
                    onClick={() => setSelectedLeader(leader)}
                  />
                ))}
              </Carousel>

              {/* Bottom Navigation Controls */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <button
                  onClick={() => modalEmblaApi?.scrollPrev()}
                  disabled={!canScrollPrev}
                  className="flex items-center justify-center text-white cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous leader"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => modalEmblaApi?.scrollNext()}
                  disabled={!canScrollNext}
                  className="flex items-center justify-center text-white cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Next leader"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
