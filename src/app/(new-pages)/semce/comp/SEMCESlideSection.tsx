"use client";

import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";

import SEMCESlide from "../extraComp/SEMCESlide";

const slides = [
  {
    image: "/wp-content/semce/semce-slides/item-1.webp",
    title: "Journalism & Storytelling",
    desc: "Write stories, report news, anchor broadcasts, build narrative skills",
  },
  {
    image: "/wp-content/semce/semce-slides/item-2.webp",
    title: "Digital Media & Creator Skills",
    desc: "Create content for YouTube, Instagram, digital platforms, OTT-style storytelling",
  },
  {
    image: "/wp-content/semce/semce-slides/item-3.webp",
    title: "Brand & Campaign Skills",
    desc: "Design marketing campaigns, understand brand messaging, learn social media strategy",
  },
  {
    image: "/wp-content/semce/semce-slides/item-4.webp",
    title: "Production Skills",
    desc: "Learn camera, lighting, audio, studio operations, editing, and post-production",
  },
  {
    image: "/wp-content/semce/semce-slides/item-5.webp",
    title: "AI + New Media Skills",
    desc: "Use AI tools for scriptwriting, video creation, research, and productivity",
  },
];

const SEMCESlideSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-12">
      <div className="max-w-[1140px] mx-auto px-4">

        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <SEMCESlide {...slide} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-6 relative -top-16">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-8 md:w-24  bg-white"
                  : "w-8 md:w-24 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEMCESlideSection;
