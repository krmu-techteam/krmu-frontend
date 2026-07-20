"use client";

import { useState } from "react";
import { Carousel } from "@/components/common/Carousel";
import type { Leadership } from "@/lib/api/leadership";
import { LeaderDetails } from "../components/LeaderDetails";
import { LeaderCard } from "../components/LeaderCard";

type Props = {
  data: Leadership[];
};

export const Leaderships = ({ data }: Props) => {
  if (!data || data.length === 0) return null;

  const [selectedLeader, setSelectedLeader] = useState<Leadership>(data[0]);

  return (
    <section className="pt-[120px] pb-20">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        {/* ================= TOP SECTION ================= */}
        <LeaderDetails key={selectedLeader.id} leader={selectedLeader} />

        {/* ================= BOTTOM CAROUSEL ================= */}
        <div className="mt-16 relative px-4">
          <Carousel
            options={{ align: "start", loop: false }}
            autoplay={false}
            showDots={false}
            className="w-full"
            containerClassName="-ml-2"
            slideClassName="basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6 px-2"
            prevArrowClassName="!-left-4 md:!-left-8 !rounded-[4px] !bg-[#0060aa] !text-white hover:!bg-[#0060aa]/80 disabled:!opacity-30 !border-none"
            nextArrowClassName="!-right-4 md:!-right-8 !rounded-[4px] !bg-[#0060aa] !text-white hover:!bg-[#0060aa]/80 disabled:!opacity-30 !border-none"
          >
            {data.map((leader) => (
              <LeaderCard
                key={leader.id}
                leader={leader}
                isActive={selectedLeader.id === leader.id}
                onClick={() => setSelectedLeader(leader)}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
