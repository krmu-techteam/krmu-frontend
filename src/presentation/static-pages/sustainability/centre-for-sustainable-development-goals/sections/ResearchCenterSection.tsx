"use client";

import React from "react";
import SectionDivider from "@/components/common/SectionDivider";
import {
  ResearchAbout,
  ResearchVcMessage,
  StandingCommittee,
  StudentMembersGrid,
  SdgResearchDomains,
  NetZeroSection,
  SustainabilityImpactSection,
} from "../components";

const ResearchCenterSection: React.FC = () => {
  return (
    <div className="relative w-full text-white font-poppins space-y-12 pb-3">
      {/* 1. Header Title & About Section */}
      <ResearchAbout />

      {/* 2. VC Message & Vision/Mission/Objectives Section */}
      <ResearchVcMessage />

      {/* 3. Sustainable Standing Committee Section */}
      <StandingCommittee />

      {/* 4. Student Members Section */}
      <StudentMembersGrid />

      {/* 5. SDG-Aligned Research Domains Section */}
      <SdgResearchDomains />

      {/* 6. Carbon & Net-Zero Section */}
      <NetZeroSection />

      {/* 7. Sustainability Impact & Governance Sections */}
      <SustainabilityImpactSection />

      {/* Bottom Section Divider */}
      <SectionDivider />
    </div>
  );
};

export default ResearchCenterSection;
