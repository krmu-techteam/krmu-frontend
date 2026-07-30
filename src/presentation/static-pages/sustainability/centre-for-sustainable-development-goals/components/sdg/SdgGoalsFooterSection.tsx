"use client";

import React from "react";
import Image from "next/image";

interface GoalTile {
  id: number;
  src: string;
  alt: string;
  link?: string;
}

const goalTiles: GoalTile[] = [
  {
    id: 1,
    src: "/images/sustainability/goals/g1.jpg",
    alt: "No Poverty",
    link: "https://www.krmangalam.edu.in/sdg-1-no-poverty/",
  },
  {
    id: 2,
    src: "/images/sustainability/goals/g2.jpg",
    alt: "Zero Hunger",
    link: "https://www.krmangalam.edu.in/sdg-2-zero-hunger/",
  },
  {
    id: 3,
    src: "/images/sustainability/goals/g3.jpg",
    alt: "Good Health and Well-Being",
    link: "https://www.krmangalam.edu.in/sdg-3-good-health-and-well-being/",
  },
  {
    id: 4,
    src: "/images/sustainability/goals/g4.jpg",
    alt: "Quality Education",
    link: "https://www.krmangalam.edu.in/sdg-4-quality-education/",
  },
  {
    id: 5,
    src: "/images/sustainability/goals/g5.jpg",
    alt: "Gender Equality",
    link: "https://www.krmangalam.edu.in/sdg-5-gender-equality/",
  },
  {
    id: 6,
    src: "/images/sustainability/goals/g6.jpg",
    alt: "Clean Water and Sanitation",
    link: "https://www.krmangalam.edu.in/sdg-6-clean-water-and-sanitation/",
  },
  {
    id: 7,
    src: "/images/sustainability/goals/g7.jpg",
    alt: "Affordable and Clean Energy",
    link: "https://www.krmangalam.edu.in/sdg-7-affordable-and-clean-energy/",
  },
  {
    id: 8,
    src: "/images/sustainability/goals/g8.jpg",
    alt: "Decent Work and Economic Growth",
    link: "https://www.krmangalam.edu.in/sdg-8-decent-work-and-economic-growth/",
  },
  {
    id: 9,
    src: "/images/sustainability/goals/g9.jpg",
    alt: "Industry, Innovation and Infrastructure",
    link: "https://www.krmangalam.edu.in/sdg-9-industry-innovation-and-infrastructure/",
  },
  {
    id: 10,
    src: "/images/sustainability/goals/g10.jpg",
    alt: "Reduced Inequalities",
    link: "https://www.krmangalam.edu.in/sdg-10-reduced-inequalities/",
  },
  {
    id: 11,
    src: "/images/sustainability/goals/g11.jpg",
    alt: "Sustainable Cities and Communities",
    link: "https://www.krmangalam.edu.in/sdg-11-sustainable-cities-and-communities/",
  },
  {
    id: 12,
    src: "/images/sustainability/goals/g12.jpg",
    alt: "Responsible Consumption and Production",
    link: "https://www.krmangalam.edu.in/sdg-12-responsible-consumption-and-production/",
  },
  {
    id: 13,
    src: "/images/sustainability/goals/g13.jpg",
    alt: "Climate Action",
    link: "https://www.krmangalam.edu.in/sdg-13-climate-action/",
  },
  {
    id: 14,
    src: "/images/sustainability/goals/g14.jpg",
    alt: "Life Below Water",
    link: "https://www.krmangalam.edu.in/sdg-14-life-below-water/",
  },
  {
    id: 15,
    src: "/images/sustainability/goals/g15.jpg",
    alt: "Life On Land",
    link: "https://www.krmangalam.edu.in/sdg-15-life-on-land/",
  },
  {
    id: 16,
    src: "/images/sustainability/goals/g16.jpg",
    alt: "Peace, Justice and Strong Institutions",
    link: "https://www.krmangalam.edu.in/sdg-16-peace-justice-and-strong-institutions/",
  },
  {
    id: 17,
    src: "/images/sustainability/goals/g17.jpg",
    alt: "Partnerships for the Goals",
    link: "https://www.krmangalam.edu.in/sdg-17-partnerships-for-the-goals/",
  },
  {
    id: 18,
    src: "/images/sustainability/goals/g18.png",
    alt: "SDG Wheel Logo",
  },
];

const SdgGoalsFooterSection: React.FC = () => {
  return (
    <div className="w-full mt-16 md:mt-16 space-y-12 md:space-y-16">
      {/* 1. Header Title & 18 Goal Grid */}
      <div className="w-full flex flex-col items-center">
        {/* Title Logo */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <Image
            src="/images/sustainability/goals/title.png"
            alt="Sustainable Development Goals"
            width={600}
            height={90}
            className="h-auto w-[300px] sm:w-[450px] md:w-[560px] object-contain"
          />
        </div>

        {/* 6x3 Grid of 18 Goal Tiles */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {goalTiles.map((tile) => {
            const TileContent = (
              <div className="relative aspect-square w-full  group hover:scale-[1.01] hover:opacity-95 transition-all duration-200">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>
            );

            return tile.link ? (
              <a
                key={tile.id}
                href={tile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full cursor-pointer"
              >
                {TileContent}
              </a>
            ) : (
              <div key={tile.id} className="block w-full">
                {TileContent}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. KRMU Sustainability Group Photo Card */}
      <div className="w-full flex justify-center">
        <div className="w-full rounded-[14px] sm:rounded-[10px] overflow-hidden">
          <Image
            src="/images/sustainability/goals/group.jpg"
            alt="KRMU Sustainability Team Group Photo"
            width={1280}
            height={600}
            className="w-full h-auto object-contain object-center rounded-[10px]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SdgGoalsFooterSection;
