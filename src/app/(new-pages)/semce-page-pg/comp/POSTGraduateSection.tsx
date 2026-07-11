"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import POSTGraduationSlide from "./POSTGraduationSlide";

const POSTGraduateSection = () => {
  const items = [
    {
      id: 1,
      title: "Long form feature stories, investigations and explainers",
      imgURL: "/orange-card.webp",
    },
    {
      id: 2,
      title: "Short films, OTT pilots and documentary projects",
      imgURL: "/orange-card.webp",
    },
    {
      id: 3,
      title: "Multimedia news packages for web, TV and mobile",
      imgURL: "/orange-card.webp",
    },
    {
      id: 4,
      title: "Audio series, podcasts and radio shows",
      imgURL: "/orange-card.webp",
    },
    {
      id: 5,
      title: "Data driven stories, charts and visual explainers",
      imgURL: "/orange-card.webp",
    },
    {
      id: 6,
      title: "Integrated campaigns and brand communication decks",
      imgURL: "/orange-card.webp",
    },
    {
      id: 7,
      title: "Community and creator economy projects with growth metrics",
      imgURL: "/orange-card.webp",
    },
    {
      id: 8,
      title:
        "A dissertation or capstone project that connects research with real media practice",
      imgURL: "/orange-card.webp",
    },
  ];
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
    >
      <CarouselContent className="-ml-1">
        {items.map((item) => (
          <CarouselItem key={item.id} className="md:basis-1/2  lg:basis-1/3">
            <POSTGraduationSlide title={item.title} imgURL={item.imgURL} />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
};

export default POSTGraduateSection;
