"use client";

import EventsAndExperienceCard from "./EventsAndExperienceCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EventsAndExperienceCard as EvenyType } from "@/lib/types/schools";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  eventsexp: EvenyType[];
};

const SchoolEventsAndExperiencesCard = ({ eventsexp }: Props) => {
  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {eventsexp &&
            eventsexp?.map((item) => {
              return (
                <CarouselItem
                  key={item?.id}
                  className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 py-5"
                >
                  <EventsAndExperienceCard title={item?.title} content={item?.content} slug={item?.slug} featured_img_url={item?.newsmedia[0]?.url} />
                </CarouselItem>
              );
            })}

          {/* <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 py-5">
            <EventsAndExperienceCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 py-5">
            <EventsAndExperienceCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 py-5">
            <EventsAndExperienceCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 py-5">
            <EventsAndExperienceCard />
          </CarouselItem> */}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default SchoolEventsAndExperiencesCard;
