"use client";

import React, { useRef } from "react";
import { CircleArrowRight } from "lucide-react";
import { TrainingPlacementSectionProps } from "@/features/placement/career-development-centre/types";
import SectionDivider from "@/components/common/SectionDivider";
import { TopServiceCard, MethodologyCard, SkillCard } from "../components";
import { useGSAPScrollReveal } from "@/hooks/useGSAPScrollReveal";

const CareerServicesSection = ({
  introText,
  topCards,
  trainingMethodology,
  skillBuilding,
}: TrainingPlacementSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply the reusable GSAP scroll reveal hook to the container ref
  useGSAPScrollReveal(containerRef);

  return (
    <section ref={containerRef} className="relative py-8 sm:py-10 lg:py-12 xl:py-16 px-6 sm:px-10 lg:px-12 xl:px-16 overflow-hidden bg-transparent">
      
      <div className="max-w-[1530px] mx-auto w-full relative z-10">
        
        {/* Intro Section */}
        <div className="mb-10 lg:mb-14 gsap-reveal-up opacity-0">
          <p className="text-white/90 text-center md:text-justify lg:text-center text-[15px] sm:text-[16px] leading-[1.8] font-poppins max-w-[1000px] mx-auto font-light">
            {introText}
          </p>
        </div>

        {/* Top Cards: Training & Placement */}
        <div className="gsap-stagger-up-container grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto mb-16 lg:mb-20">
          {topCards.map((card, index) => (
            <TopServiceCard
              key={index}
              heading={card.heading}
              items={card.items}
            />
          ))}
        </div>

        {/* Section 2: Training Methodology & Modules */}
        <div className="my-12 lg:my-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left side: title & points */}
            <div className="lg:col-span-4">
              <h3 className="gsap-reveal-left heading-primary mb-6 text-left opacity-0">
                {trainingMethodology.title}
              </h3>
              <div className="gsap-stagger-left-container space-y-4">
                {trainingMethodology.points.map((point, index) => (
                  <div key={index} className="gsap-stagger-item group flex items-start gap-4 opacity-0">
                    <div className="flex items-center justify-center text-white/90 mt-1 shrink-0">
                      <CircleArrowRight size={22} />
                    </div>
                    <p className="text-white/90 text-[15px] sm:text-[16px] text-left font-poppins leading-[1.6]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: cards grid */}
            <div className="lg:col-span-8">
              <div className="gsap-stagger-up-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainingMethodology.cards.map((card, index) => (
                  <MethodologyCard
                    key={index}
                    heading={card.heading}
                    items={card.items}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Section 3: Skill Building */}
        <div className="my-12 lg:my-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left side: title & points */}
            <div className="lg:col-span-4">
              <h3 className="gsap-reveal-left heading-primary mb-6 text-left opacity-0">
                {skillBuilding.title}
              </h3>
              <div className="gsap-stagger-left-container space-y-4">
                {skillBuilding.points.map((point, index) => (
                  <div key={index} className="gsap-stagger-item group flex items-start gap-4 opacity-0">
                    <div className="flex items-center justify-center text-white/90 mt-1 shrink-0">
                      <CircleArrowRight size={22} />
                    </div>
                    <p className="text-white/90 text-[15px] sm:text-[16px] text-left font-poppins leading-[1.6]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: cards grid */}
            <div className="lg:col-span-8">
              <div className="gsap-stagger-up-container grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillBuilding.cards.map((card, index) => (
                  <SkillCard
                    key={index}
                    heading={card.heading}
                    description={card.description}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
      <SectionDivider />
    </section>
  );
};

export default CareerServicesSection;
