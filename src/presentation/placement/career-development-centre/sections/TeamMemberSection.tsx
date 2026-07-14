"use client";

import React, { useRef } from "react";
import { CdcTeamItem } from "@/lib/api/cdcteam";
import { TeamMemberCard } from "../components";
import { useGSAPScrollReveal } from "@/hooks/useGSAPScrollReveal";

type Props = {
  cdcTeamData: CdcTeamItem[];
};

const TeamMemberSection = ({ cdcTeamData }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Apply the reusable GSAP scroll reveal hook
  useGSAPScrollReveal(containerRef);

  return (
    <section ref={containerRef} className="  overflow-hidden bg-transparent pb-12 sm:pb-16 md:pb-20 px-6 sm:px-10 lg:px-12 xl:px-16">
      <div className="max-w-[1530px] mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <h3 className="gsap-reveal-up heading-primary mb-6 lg:mb-10 text-center opacity-0">
          CDC Team
        </h3>

        {/* Staggered Grid of Team Member Cards */}
        <div className="gsap-stagger-up-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cdcTeamData &&
            cdcTeamData.map((item, i) => (
              <TeamMemberCard key={i} data={item} />
            ))}
        </div>

      </div> 
    </section>
  );
};

export default TeamMemberSection;
