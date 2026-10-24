"use client";

import React from "react";
import SdgPageLayout from "@/presentation/static-pages/sustainability/centre-for-sustainable-development-goals/components/sdg/SdgPageLayout";
import { PolicyHeroSection } from "@/presentation/static-pages/sustainability/shared-policies";
import { SdgEventsSection } from "@/presentation/static-pages/sustainability/shared-sdg";
import { conferencesOrganizedIn202425Data } from "./data";

export const ConferencesOrganizedIn202425View: React.FC = () => {
    return (
        <SdgPageLayout>
            <PolicyHeroSection
                title={conferencesOrganizedIn202425Data.title}
                heroImage={conferencesOrganizedIn202425Data.heroImage}
                backLink={conferencesOrganizedIn202425Data.backLink}
            />
            <div className="pt-4 pb-12">
                <SdgEventsSection
                    year={conferencesOrganizedIn202425Data.year}
                    events={conferencesOrganizedIn202425Data.events}
                />
            </div>
        </SdgPageLayout>
    );
};

export default ConferencesOrganizedIn202425View;
