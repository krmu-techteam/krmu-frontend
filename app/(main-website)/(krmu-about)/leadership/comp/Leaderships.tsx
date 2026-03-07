"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Leadership } from "@/lib/api/leadership";
import { STRAPI_URL } from "@/app/constant";

type Props = {
  data: Leadership[];
};

export const Leaderships = ({ data }: Props) => {
  if (!data || data.length === 0) return null;

  const [selectedLeader, setSelectedLeader] = useState<Leadership>(data[0]);
  const [expanded, setExpanded] = useState(false);

  // reset read-more when leader changes
  const handleSelectLeader = (leader: Leadership) => {
    setSelectedLeader(leader);
    setExpanded(false);
  };

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

            {selectedLeader?.content && (
              <div className="relative mt-5">
                {/* CONTENT */}
                <div
                  className={`prose max-w-none transition-all duration-300 overflow-hidden ${
                    expanded ? "max-h-[2000px]" : "max-h-[150px]"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: selectedLeader.content,
                  }}
                />

                {/* FADE OVERLAY (only when collapsed) */}
                {!expanded && (
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                )}

                {/* READ MORE / LESS */}
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
          <div className="md:w-2/5 flex justify-center min-h-[368px] h-full relative">
            <Image
              src={`${STRAPI_URL}${selectedLeader.leadership_img?.url}`}
              fill
              alt={selectedLeader.name}
              className="object-contain hidden sm:block z-10"
            />
          </div>
        </div>

        {/* ================= BOTTOM CAROUSEL ================= */}
        <div className="mt-24">
          <Carousel opts={{ align: "start" }} className="w-full">
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
                      className={`bg-white border-b-2 transition-all duration-300 overflow-hidden ${
                        isActive
                          ? "border-[#0060aa]"
                          : "border-gray-200"
                      }`}
                    >
                      <div className="min-h-[295px] h-full relative overflow-hidden">
                        <Image
                          src={`${STRAPI_URL}${leader.leadership_img?.url}`}
                          fill
                          alt={leader.name}
                          unoptimized
                          className={`z-10 transition-all duration-300 hover:scale-105`}
                        />
                      </div>

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
