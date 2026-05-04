"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { STRAPI_URL } from "@/app/constant";
import type { AcademicLeadership } from "@/lib/api/academic-leadership";
import type { CarouselApi } from "@/components/ui/carousel";

type Props = {
  data: AcademicLeadership[];
};

export const AcademicLeaderships = ({ data }: Props) => {
  if (!data || data.length === 0) return null;

  const [selectedLeader, setSelectedLeader] = useState<AcademicLeadership>(
    data[0],
  );
  const [expanded, setExpanded] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

  // Reset read-more on leader change
  const handleSelectLeader = (leader: AcademicLeadership) => {
    setSelectedLeader(leader);
    setExpanded(false);
  };

  // Sync carousel with selected leader
  useEffect(() => {
    if (!api) return;

    const index = data.findIndex((leader) => leader.id === selectedLeader.id);
    if (index !== -1) {
      api.scrollTo(index);
    }
  }, [selectedLeader, api, data]);

  // Auto-select leader when carousel changes (mobile autoplay)
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const index = api.selectedScrollSnap();
      if (data[index] && data[index].id !== selectedLeader.id) {
        setSelectedLeader(data[index]);
        setExpanded(false);
      }
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, data, selectedLeader.id]);

  return (
    <section className="pt-[120px] pb-20 bg-white">
      <div className="max-w-[1664px] mx-auto w-full px-4">
        {/* ================= TOP SECTION ================= */}
        <div
          key={selectedLeader.id}
          className="flex flex-col md:flex-row items-start md:items-center gap-10"
        >
          {/* LEFT CONTENT */}
          <div className="md:w-3/5">
            <h3 className="text-4xl text-[#0060aa] font-bold">
              {selectedLeader.name}
            </h3>

            <h4 className="text-lg text-[#0060aa] mt-3 font-semibold">
              {selectedLeader.desg}
            </h4>

            {selectedLeader.content && (
              <div className="relative mt-5">
                <div
                  className={`prose max-w-none transition-all duration-300 overflow-hidden ${
                    expanded ? "max-h-[2000px]" : "max-h-[150px]"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: selectedLeader.content,
                  }}
                />

                {!expanded && (
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}

                <button
                  onClick={() => setExpanded((prev) => !prev)}
                  className="mt-4 text-[#0060aa] font-semibold hover:underline"
                >
                  {expanded ? "Read less" : "Read more"}
                </button>
              </div>
            )}
          </div>

          {/* RIGHT IMAGE */}
          <div className=" hidden sm:block md:w-2/5 flex justify-center">
            {selectedLeader.academic_leadership_img?.url && (
              <Image
                src={`${STRAPI_URL}${selectedLeader.academic_leadership_img.url}`}
                width={330}
                height={430}
                alt={selectedLeader.name}
                className="object-contain"
              />
            )}
          </div>
        </div>

        {/* ================= BOTTOM CAROUSEL ================= */}
        <div className="mt-24">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {data.map((leader) => {
                const isActive = selectedLeader.id === leader.id;

                return (
                  <CarouselItem
                    key={leader.id}
                    className="sm:basis-1/2 md:basis-1/4 lg:basis-1/6 px-2 cursor-pointer"
                    onClick={() => handleSelectLeader(leader)}
                  >
                    <div
                      className={`bg-white border-b-2 transition-all duration-300 ${
                        isActive
                          ? "border-[#0060aa]"
                          : "border-gray-200 opacity-80"
                      }`}
                    >
                      {leader.academic_leadership_img?.url && (
                        <Image
                          src={`${STRAPI_URL}${leader.academic_leadership_img.url}`}
                          width={260}
                          height={300}
                          alt={leader.name}
                          unoptimized
                          className={`w-full h-[295px] object-contain transition-all duration-300 ${
                            isActive ? "grayscale-0" : "grayscale"
                          }`}
                        />
                      )}

                      <div className="text-[#555] text-center py-3">
                        <h5 className="font-bold">{leader.name}</h5>
                        <p className="pt-[5px] text-sm">{leader.desg}</p>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
