"use client";

import React from "react";
import SdgPageLayout from "@/presentation/static-pages/sustainability/centre-for-sustainable-development-goals/components/sdg/SdgPageLayout";
import { PolicyHeroSection } from "@/presentation/static-pages/sustainability/shared-policies";
import { SdgEventsSection } from "@/presentation/static-pages/sustainability/shared-sdg";
import { fdpsConductedInAy202425Data } from "./data";

export const FdpsConductedInAy202425View: React.FC = () => {
    return (
        <SdgPageLayout>
            <PolicyHeroSection
                title={fdpsConductedInAy202425Data.title}
                heroImage={fdpsConductedInAy202425Data.heroImage}
                backLink={fdpsConductedInAy202425Data.backLink}
            />
            <div className="pt-4 pb-12">
                <SdgEventsSection
                    year={fdpsConductedInAy202425Data.year}
                    events={fdpsConductedInAy202425Data.events}
                />
            </div>
        </SdgPageLayout>
    );
};

export default FdpsConductedInAy202425View;
