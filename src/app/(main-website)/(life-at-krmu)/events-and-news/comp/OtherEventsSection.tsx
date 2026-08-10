"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel } from "@/components/common/Carousel";

export interface OtherEventItem {
  id: number | string;
  title: string;
  slug: string;
  date: string;
  imageUrl?: string;
}

interface OtherEventsSectionProps {
  events: OtherEventItem[];
}

export function OtherEventsSection({ events }: OtherEventsSectionProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [emblaApi, setEmblaApi] = useState<any>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = React.useCallback((api: any) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (!events || events.length === 0) return null;

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 max-w-[1530px] mx-auto w-full font-poppins">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-[47px] font-serif font-normal text-white tracking-normal">
          Other Events
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous Events"
            className="text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer p-1"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Next Events"
            className="text-white/70 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer p-1"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      </div>

      {/* Events Carousel */}
      <Carousel
        options={{ loop: false, align: "start" }}
        showArrows={false}
        showDots={false}
        autoplay={false}
        setApi={setEmblaApi}
        containerClassName="-ml-2"
        slideClassName="pl-3 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/5"
      >
        {events.map((event) => {
          const formattedDate = event.date
            ? new Date(event.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            : "";

          return (
            <div key={event.id} className="h-full py-1">
              <Link
                href={`/events-and-news/${event.slug}`}
                className="block h-[330px] w-full max-w-[325px] group border border-[#294861] rounded-[10px] flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full rounded-[10px] border border-[#294861] overflow-hidden mb-3.5 bg-white/5">
                    {event.imageUrl ? (
                      <Image
                        src={event.imageUrl}
                        alt={event.title || "Event Image"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-800" />
                    )}
                  </div>

                  <div className="p-2.5">
                    {formattedDate && (
                      <p className="text-[#E7C268] text-xs md:text-sm font-medium mb-2">
                        Published On: {formattedDate}
                      </p>
                    )}

                    <h3
                      className="text-white font-poppins text-sm md:text-[21px] font-normal leading-snug line-clamp-3 group-hover:text-[#E7C268] transition-colors"
                      dangerouslySetInnerHTML={{ __html: event.title || "" }}
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
