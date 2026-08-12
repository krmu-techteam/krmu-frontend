import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Carousel } from "@/components/common/Carousel";
import { ButtonType } from "@/lib/types/common";
import { SectionTitle } from "@/components/common/SectionTitle";
import SectionDivider from "@/components/common/SectionDivider";
import { EventAndNewsCard } from "../components/news-and-event";
import { getHomeService, NewsEventDomain } from "@/features/home";

export async function NewsEventsSection({
  title = "News & Events",
  newsandeventbtn = {
    buttonlink: "/happenings/news-and-events",
    buttontext: "Explore All",
  },
}: {
  title?: string;
  newsandeventbtn?: Partial<ButtonType>;
}) {
  const homeService = getHomeService();
  const newsandeventsdata = await homeService.getNewsEvents(1, 10);
  return (
    <section className="relative w-full overflow-hidden pt-10 pb-10 md:py-12 xl:pt-12 xl:pb-20 font-poppins">
      <div className="w-full max-w-[1530px] mx-auto relative z-10">
        <div className="flex items-center justify-between gap-4 mb-6">
          <SectionTitle
            title={title}
            className="mb-0 text-[22px] sm:text-3xl md:text-4xl xl:text-[42px]"
          />
          {(newsandeventbtn?.buttonlink || newsandeventbtn?.buttontext) && (
            <Link
              href={newsandeventbtn?.buttonlink || "#"}
              className="flex cursor-pointer items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium group shrink-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white flex items-center justify-center transition-all overflow-hidden relative">
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white transition-all duration-500 ease-in-out transform group-hover:translate-x-5 group-hover:opacity-0" />
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white transition-all duration-500 ease-in-out absolute -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
              </div>
              <span className="font-normal tracking-wide text-[13px] md:text-[16px]">
                {newsandeventbtn?.buttontext || "Explore All"}
              </span>
            </Link>
          )}
        </div>

        <Carousel
          options={{ loop: true, align: "start" }}
          showArrows={false}
          autoplayDelay={5000}
          containerClassName="-ml-1 sm:-ml-3"
          slideClassName="px-2 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
          activeDotClassName="bg-[#CB000D] w-2"
        >
          {newsandeventsdata?.data?.map((event: NewsEventDomain, i: number) => (
            <div key={i} className="group cursor-pointer py-2">
              <EventAndNewsCard data={event} />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
