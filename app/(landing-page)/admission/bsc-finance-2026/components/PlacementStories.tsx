"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { PlacementSectionData } from "../contentype";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {
  data: PlacementSectionData;
};

const PlacementStories = ({ data }: Props) => {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  return (
    <section className="py-20 bg-white" id="placements" aria-labelledby="placement-heading">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Featured Story Left Column */}
          <div className="lg:col-span-4 translate-y-0 lg:-translate-y-12">
            <div className="placement-featured">
              <span className="featured-badge">Top Achiever</span>
              <div className="placement-featured-media">
                <Image 
                  src={data.featuredStory.image} 
                  alt={data.featuredStory.name} 
                  width={360} 
                  height={450} 
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="featured-name">{data.featuredStory.name}</div>
              <div className="featured-company">{data.featuredStory.company}</div>
              <div className="featured-package">{data.featuredStory.package}</div>
              <p className="featured-note">{data.featuredStory.note}</p>
            </div>
          </div>

          {/* Content and Stats Right Column */}
          <div className="lg:col-span-8">
            <div className="mb-10">
              <span className="section-tag">{data.eyebrow}</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight" id="placement-heading">
                <div dangerouslySetInnerHTML={{ __html: data.heading }} />
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {data.stats.map((stat, i) => (
                <div key={i} className="stat-card group hover:border-[#e31e24] transition-colors">
                  <div className="num group-hover:text-[#e31e24] transition-colors">{stat.value}</div>
                  <div className="lbl">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Slider Section */}
            <div className="relative pt-8 border-t border-gray-100">
              <Carousel 
                opts={{ align: "start", loop: true }}
                plugins={[autoplay.current]}
                className="w-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">More Success Stories</h3>
                  <div className="flex gap-2">
                    <CarouselPrevious className="static translate-y-0 h-10 w-10 border-gray-200" />
                    <CarouselNext className="static translate-y-0 h-10 w-10 border-gray-200" />
                  </div>
                </div>
                
                <CarouselContent className="-ml-4 py-10">
                  {data.moreStories.map((story) => (
                    <CarouselItem key={story.id} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                      <div className="placement-card h-full overflow-hidden !p-0">
                        <div className="w-full aspect-[4/3] relative">
                          <Image 
                            src={story.image} 
                            alt={story.name} 
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                        <div className="p-4">
                          <div className="p-name">{story.name}</div>
                          <div className="p-company">{story.company}</div>
                          <div className="p-pkg">{story.package}</div>
                          <div className="p-pkg-label">{story.packageLabel}</div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PlacementStories;
