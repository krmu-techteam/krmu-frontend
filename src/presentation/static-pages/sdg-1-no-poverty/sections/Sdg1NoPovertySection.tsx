"use client";

import React from "react";
import SectionDivider from "@/components/common/SectionDivider";
import {
  SdgHeroSection,
  SdgContentSection,
  SdgEventsSection,
} from "../components";
import SdgGoalsFooterSection from "@/presentation/static-pages/sustainability/centre-for-sustainable-development-goals/components/sdg/SdgGoalsFooterSection";

export const Sdg1NoPovertySection: React.FC = () => {
  return (
    <main className="min-h-screen text-white">
      {/* 1. Hero Banner */}
      <SdgHeroSection
        title="No Poverty"
        subtitle="Fight poverty with K.R. Mangalam University."
        heroImage="/images/sustainability/no-poverty.jpg"
        backLink="/centre-for-sustainable-development-goals-2"
      />

      {/* 2. Main Content & Right SDG Tile Card */}
      <SdgContentSection />

      {/* Section Divider Line */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 my-4">
        <SectionDivider />
      </div>

      {/* 3. Events & Activities Section */}
      <SdgEventsSection />

      {/* Section Divider Line */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 my-4">
        <SectionDivider />
      </div>

      {/* 4. Bottom 18 SDG Goals Footer Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 pb-16">
        <SdgGoalsFooterSection />
      </div>
    </main>
  );
};
