"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import Button from "@/components/common/Button";
import SectionDivider from "@/components/common/SectionDivider";
import {
  PLACEMENT_CARD_CONFIGS,
  PLACEMENT_STATS,
  RECRUITER_LOGOS,
  SUCCESS_STORIES,
} from "../constants";

export default function PlacementsSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="relative w-full overflow-hidden py-6 md:py-10 lg:py-16 xl:py-20 font-poppins">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-10 px-4 md:px-0">
          {/* Left: Success Card Carousel (30% Width) */}
          <div className="w-full lg:w-[30%] flex flex-col items-center lg:items-start order-2 lg:order-1">
            <div className="w-full max-w-[360px] lg:max-w-none">
              <Carousel
                className="w-full"
                showArrows={false}
                autoplayDelay={5000}
                showDots={true}
              >
                {SUCCESS_STORIES.map((story, i) => (
                  <div key={i} className="relative group">
                    <div className="relative w-full aspect-square bg-brand-navy rounded-sm overflow-hidden">
                      <Image
                        src={story.image}
                        alt={`${story.name} Achievement`}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        priority
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          {/* Right: Content & Stats (70% Width) */}
          <div className="w-full lg:w-[70%] text-left order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl xl:text-[42px] font-serif font-bold text-white mb-6 leading-[1.2] tracking-tight">
              Explore the{" "}
              <span className="text-brand-gold">Top Global recruiters</span>{" "}
              <br className="hidden md:block" />
              who choose KRMU talent
            </h2>

            <p className="max-w-2xl text-white/70 text-base md:text-[16px] leading-relaxed mb-6 font-light font-poppins">
              KRMU offers top placements with{" "}
              <span className="font-semibold text-white">
                packages of up to ₹3 Crore
              </span>
              , featuring recruiters like Google, Amazon, Microsoft, and Adobe,
              along with career-focused training.
            </p>

            {/* Stats Grid - Discrete Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-5 mb-10 lg:max-w-[860px]">
              {PLACEMENT_STATS.map((stat, i) => {
                const config = PLACEMENT_CARD_CONFIGS[i];
                return (
                  <div
                    key={i}
                    style={config.style}
                    className="w-full h-[95px] p-4 md:p-5 rounded-[4px] shadow-xl hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/10 hover:-translate-y-[3px] transition-all duration-500 ease-out group flex flex-col justify-center"
                  >
                    <p className="text-brand-gold font-normal text-2xl md:text-[26px] mb-[6px] leading-none transition-colors duration-500 ease-out">
                      {stat.value}
                    </p>
                    <p className="text-white/80 text-[14px] md:text-sm font-light leading-tight">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
              <Button href="#" variant="outline">
                Placement Records
              </Button>
              <Button href="#" variant="outline">
                Our Recruiters
              </Button>
              <Button
                href="#"
                variant="primary"
                icon={ArrowUpRight}
                iconPosition="right"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom: Recruiters Grid */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {RECRUITER_LOGOS.slice(
              0,
              showMore ? RECRUITER_LOGOS.length : 10,
            ).map((company, i) => (
              <div
                key={i}
                className="bg-transparent flex items-center justify-center rounded-[4px] border border-brand-gray h-[100px] hover:border-white/30 hover:bg-white/5 transition-all duration-500 group overflow-hidden"
              >
                <div className="relative w-full h-20 group-hover:scale-110 transition-transform duration-500">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-contain px-4 py-3"
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-12 mx-auto flex items-center gap-3 text-white font-normal capitalize text-md tracking-wide hover:text-white/80 transition-colors group cursor-pointer"
          >
            {showMore ? (
              <>
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white group-hover:border-white/80 transition-colors">
                  <ChevronUp size={16} />
                </span>
                Show Less
              </>
            ) : (
              <>
                <span className="w-6 h-6 flex items-center justify-center rounded-full border border-white group-hover:border-white/80 transition-colors">
                  <ChevronDown size={16} />
                </span>
                Show More
              </>
            )}
          </button>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}
