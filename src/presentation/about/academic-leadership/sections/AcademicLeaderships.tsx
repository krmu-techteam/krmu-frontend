"use client";

import { useState, useEffect } from "react";
import { Carousel } from "@/components/common/Carousel";
import type { AcademicLeadership } from "@/features/about/academic-leadership";
import type { CarouselApi } from "@/components/ui/carousel";
import { AcademicLeaderCard, AcademicLeaderDetails } from "../components";

type Props = {
  data: AcademicLeadership[];
};

export const AcademicLeaderships: React.FC<Props> = ({ data }: Props) => {
  const [selectedLeader, setSelectedLeader] = useState<
    AcademicLeadership | undefined
  >(data?.[0]);
  const [api, setApi] = useState<CarouselApi>();

  // Sync carousel with selected leader
  useEffect(() => {
    if (!api || !selectedLeader || !data) return;

    const index = data.findIndex((leader) => leader.id === selectedLeader.id);
    if (index !== -1) {
      api.scrollTo(index);
    }
  }, [selectedLeader, api, data]);

  // Auto-select leader when carousel changes (mobile autoplay)
  useEffect(() => {
    if (!api || !data || !selectedLeader) return;

    const onSelect = () => {
      const index = api.selectedScrollSnap();
      if (data[index] && data[index].id !== selectedLeader.id) {
        setSelectedLeader(data[index]);
      }
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, data, selectedLeader]);

  if (!data || data.length === 0 || !selectedLeader) return null;

  return (
    <section className="pt-[150px] pb-20">
      <div className="max-w-[1530px] mx-auto w-full px-4">
        {/* ================= TOP SECTION ================= */}
        <AcademicLeaderDetails
          key={selectedLeader.id}
          leader={selectedLeader}
        />

        {/* ================= BOTTOM CAROUSEL ================= */}
        <div className="mt-12 relative">
          <Carousel
            options={{ align: "start", loop: true }}
            autoplay={false}
            showDots={false}
            className="w-full"
            containerClassName="-mr-1"
            slideClassName="basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6 px-0 cursor-pointer"
            prevArrowClassName="!-left-4 md:!-left-6 !border-none !rounded-[4px] !w-10 !h-10 !bg-[#0C365A] !text-white hover:!bg-[#0C365A] disabled:!opacity-20"
            nextArrowClassName="!-right-4 md:!-right-6 !border-none !rounded-[4px] !w-10 !h-10 !bg-[#0C365A] !text-white hover:!bg-[#0C365A] disabled:!opacity-20"
            setApi={setApi}
          >
            {data.map((leader) => (
              <AcademicLeaderCard
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
