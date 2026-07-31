"use client";

import React from "react";
import SectionDivider from "@/components/common/SectionDivider";
import SdgGoalsFooterSection from "./SdgGoalsFooterSection";

interface SdgPageLayoutProps {
  children: React.ReactNode;
}

export const SdgPageLayout: React.FC<SdgPageLayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen text-white">
      {/* SDG Page Specific Content */}
      {children}

      {/* Section Divider Line */}
      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 my-8 h-[1px]">
        <SectionDivider />
      </div>

      {/* Shared Bottom 18 SDG Goals Footer Grid & Team Photo */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 pb-16">
        <SdgGoalsFooterSection />
      </div>
    </main>
  );
};

export default SdgPageLayout;
