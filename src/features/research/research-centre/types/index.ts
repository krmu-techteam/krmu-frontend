
// HERO SECTION
export interface HeroSectionProps {
    title: string;
}

// RESEARCH CENTRE TABLE PROPS
export interface ResearchCentreProps {
    title: string,
    reportUrl?: string,
    viewUrl?: string,
    viewText?: string,
}

export interface ResearchCentersSectionProps {
    researchCenters: ResearchCentreProps[];
}

// RESEARCH CENTRE DATA
export interface ResearchCentreData {
    heroSection: HeroSectionProps;
    researchCentersSection: ResearchCentersSectionProps;
}

// RESEARCH CENTRE RESPONSE
export interface ResearchCentreResponse {
    data: ResearchCentreData;
}
