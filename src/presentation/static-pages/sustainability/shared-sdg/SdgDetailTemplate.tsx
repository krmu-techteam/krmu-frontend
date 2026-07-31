"use client";

import React from "react";
import SectionDivider from "@/components/common/SectionDivider";
import SdgPageLayout from "@/presentation/static-pages/sustainability/centre-for-sustainable-development-goals/components/sdg/SdgPageLayout";
import { SdgHeroSection } from "./SdgHeroSection";
import { SdgContentSection } from "./SdgContentSection";
import { SdgEventsSection } from "./SdgEventsSection";
import { SdgDetailPageData } from "./types";

export interface SdgDetailTemplateProps {
  data: SdgDetailPageData;
}

export const SdgDetailTemplate: React.FC<SdgDetailTemplateProps> = ({
  data,
}) => {
  return (
    <SdgPageLayout>
      {/* 1. Hero Banner */}
      <SdgHeroSection
        title={data.title}
        subtitle={data.subtitle}
        heroImage={data.heroImage}
        backLink={data.backLink}
      />

      {/* 2. Main Content & Right SDG Tile Card */}
      <SdgContentSection
        goalNumber={data.goalNumber}
        title={data.title}
        paragraphs={data.paragraphs}
        leftButtonText={data.leftButtonText}
        leftButtonUrl={data.leftButtonUrl}
        leftButtons={data.leftButtons}
        goalTileImage={data.goalTileImage}
        sdgReportText={data.sdgReportText}
        sdgReportUrl={data.sdgReportUrl}
        accentColor={data.accentColor}
      />

      {/* 3. Section Divider & Events Section */}
      {data.events && data.events.length > 0 && (
        <>
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 my-8 h-[1px]">
            <SectionDivider />
          </div>
          <SdgEventsSection
            title={data.eventsTitle}
            events={data.events}
          />
        </>
      )}
    </SdgPageLayout>
  );
};
