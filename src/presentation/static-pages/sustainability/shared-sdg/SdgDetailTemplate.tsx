"use client";

import React from "react";
import SectionDivider from "@/components/common/SectionDivider";
import SdgPageLayout from "@/presentation/static-pages/sustainability/centre-for-sustainable-development-goals/components/sdg/SdgPageLayout";
import { SdgHeroSection } from "./SdgHeroSection";
import { SdgContentSection } from "./SdgContentSection";
import { SdgEventsSection } from "./SdgEventsSection";
import { SdgAuditsSection } from "./SdgAuditsSection";
import { SdgAwardsSection } from "./SdgAwardsSection";
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

      {/* 3. Primary Events Section */}
      {data.events && data.events.length > 0 && (
        <>
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 my-8 h-[1px]">
            <SectionDivider />
          </div>
          <SdgEventsSection title={data.eventsTitle} events={data.events} />
        </>
      )}

      {/* 3b. Additional Custom Event / Category Groups */}
      {data.eventGroups &&
        data.eventGroups.filter(Boolean).map((group, idx) => (
          <React.Fragment key={idx}>
            <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 my-8 h-[1px]">
              <SectionDivider />
            </div>
            {group?.events && group.events.length > 0 && (
              <SdgEventsSection title={group.title} events={group.events} />
            )}
            {group?.audits && group.audits.length > 0 && (
              <SdgAuditsSection
                audits={{
                  title:
                    group.events && group.events.length > 0 ? "" : group.title,
                  gridAudits: group.audits,
                }}
                accentColor={data.accentColor}
              />
            )}
          </React.Fragment>
        ))}

      {/* 4. Audits Section */}
      {data.audits && (
        <>
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 my-8 h-[1px]">
            <SectionDivider />
          </div>
          <SdgAuditsSection
            audits={data.audits}
            accentColor={data.accentColor}
          />
        </>
      )}

      {/* 5. Awards Section */}
      {data.awards && data.awards.length > 0 && (
        <>
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 my-8 h-[1px]">
            <SectionDivider />
          </div>
          <SdgAwardsSection
            awards={data.awards}
            accentColor={data.accentColor}
          />
        </>
      )}
    </SdgPageLayout>
  );
};
