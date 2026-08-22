"use client";

import React from "react";
import { PolicyHeroSection } from "./PolicyHeroSection";
import { PolicyListSection } from "./PolicyListSection";
import { PolicyPageData } from "./types";

interface PolicyDetailTemplateProps {
    data: PolicyPageData;
}

export const PolicyDetailTemplate: React.FC<PolicyDetailTemplateProps> = ({
    data,
}) => {
    return (
        <main className="min-h-screen text-white pb-16 sm:pb-20">
            <PolicyHeroSection
                title={data.title}
                heroImage={data.heroImage}
                backLink={data.backLink}
            />
            <PolicyListSection policies={data.policies} />
        </main>
    );
};

export default PolicyDetailTemplate;
