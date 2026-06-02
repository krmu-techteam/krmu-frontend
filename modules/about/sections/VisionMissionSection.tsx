"use client";

import SectionDivider from "@/components/common/SectionDivider";
import { MissionGrid } from "../components";

const VisionMissionSection = () => {
  return (
    <section className="relative overflow-hidden py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto border-2 border-[#315F84] rounded-[8px] p-6 sm:p-10 lg:p-14">
        <h2 className="font-serif text-white text-[34px] sm:text-[42px] font-semibold leading-[1.2] mb-8">
          Our Vision & Mission
        </h2>
          <p className="text-white/90 font-poppins  text-[15px] sm:text-[16px] leading-[1.6] mb-8">
            K.R. Mangalam University aspires to become an internationally recognized institution of higher learning through excellence in inter-disciplinary education, research, and innovation, preparing socially responsible life-long learners contributing to nation building.
          </p>
          <MissionGrid />
      </div>
      <SectionDivider />
    </section>
  );
};

export default VisionMissionSection;