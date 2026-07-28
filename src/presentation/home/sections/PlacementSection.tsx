"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Carousel } from "@/components/common/Carousel";
import Button from "@/components/common/Button";
import SectionDivider from "@/components/common/SectionDivider";
import { SectionTitle } from "@/components/common/SectionTitle";
import ShowMoreButton from "@/components/common/ShowMoreButton";
import {
  PLACEMENT_CARD_CONFIGS,
  PLACEMENT_STATS,
  RECRUITER_LOGOS,
  SUCCESS_STORIES,
} from "@/features/home";
import { PlacementStatCard, RecruiterLogoCard } from "../components/placement";

export function PlacementsSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="relative w-full py-8 md:py-12 xl:py-20 font-poppins">
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:gap-10 md:px-0">
          {/* Left: Success Card Carousel with Background Shade (45% Width) */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start order-2 lg:order-1 relative">
            <div className="relative w-full max-w-[540px] lg:max-w-[600px] xl:max-w-[650px]">
              {/* Background Shade Image */}
              <div className="absolute -inset-8 sm:-inset-12 lg:-inset-16 z-0 pointer-events-none flex items-center justify-center">
                <Image
                  src="/images/home/placements/shade.png"
                  alt="Background Shade"
                  fill
                  className="w-full h-full object-contain opacity-95 scale-110 sm:scale-125"
                  priority
                />
              </div>

              {/* Card Container */}
              <div className="relative z-10 w-full">
                <Carousel
                  className="w-full"
                  showArrows={true}
                  prevArrowClassName="!left-6 md:!left-12 !w-9 !h-9"
                  nextArrowClassName="!right-6 md:!right-12 !w-9 !h-9"
                  autoplayDelay={5000}
                  showDots={false}
                >
                  {/* Testing with placement card images (Holding store data for now) */}
                  {[
                    { image: "/images/home/placements/daksh.png" },
                    { image: "/images/home/placements/daksh.png" },
                    { image: "/images/home/placements/daksh.png" },
                    { image: "/images/home/placements/daksh.png" },
                    { image: "/images/home/placements/daksh.png" },
                    { image: "/images/home/placements/daksh.png" },
                    { image: "/images/home/placements/daksh.png" },
                    { image: "/images/home/placements/daksh.png" },
                    { image: "/images/home/placements/daksh.png" },
                    { image: "/images/home/placements/daksh.png" },
                  ].map((story, i) => (
                    <div key={i} className="relative group">
                      <div className="relative w-full aspect-square">
                        <Image
                          src={story.image}
                          alt={`Student success story testing ${i + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 45vw"
                          className="object-contain scale-120"
                          priority={i === 0}
                        />
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>

          {/* Right: Content & Stats (55% Width) */}
          <div className="w-full lg:w-[55%] text-left order-1 lg:order-2">
            <SectionTitle
              title="Explore the"
              highlight="Top Global recruiters"
              subtitle="who choose KRMU talent"
              variant="highlight"
            />
            <p className="max-w-2xl text-white/70 text-base md:text-[16px] leading-relaxed mb-6 font-light font-poppins">
              KRMU offers top placements with{" "}
              <span className="font-semibold text-white">
                packages of up to ₹3 Crore
              </span>
              , featuring recruiters like Google, Amazon, Microsoft, and Adobe,
              along with career-focused training.
            </p>

            {/* Stats Grid - Discrete Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-4 mb-10 lg:max-w-[860px]">
              {PLACEMENT_STATS.map((stat, index) => (
                <PlacementStatCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  style={PLACEMENT_CARD_CONFIGS[index]?.style}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
              <Button href="/placement-highlights" variant="outline">
                Placement Records
              </Button>
              <Button href="/placement/our-recruiter" variant="outline">
                Our Recruiters
              </Button>
              <Button
                href="https://admissions.krmangalam.edu.in/?utm_source=website&utm_medium=Homepage&utm_campaign=placement-section&_gl=1*118e21a*_ga*MTk4NDQwNDY4LjE3Nzc4NzU5MzU.*_ga_VJJK572TGN*czE3Nzc4NzU5MzUkbzEkZzEkdDE3Nzc4NzU5MzUkbjEkbjQkbjEkbjEkbjE"
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
          <h3 className="text-xl md:text-2xl lg:text-[28px] font-serif font-semibold text-center text-white mb-8 tracking-wide">
            Our Top Recruiters are Waiting for You
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {RECRUITER_LOGOS.slice(
              0,
              showMore ? RECRUITER_LOGOS.length : 10,
            ).map((company, i) => (
              <RecruiterLogoCard
                key={i}
                logo={company.logo}
                name={company.name}
              />
            ))}
          </div>

          <ShowMoreButton
            expanded={showMore}
            onClick={() => setShowMore(!showMore)}
            iconClassName="text-white"
            className="mt-12 mx-auto"
          />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}
