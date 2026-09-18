import React from "react";
import { PhDProgramme } from "@/lib/types/phd-programmes";
import {
    PHDHeroSection,
    PHDSubNav,
    PHDOverview,
    PHDScholar,
    PHDCareer,
    PHDOutcome,
    PHDAdmission,
    PHDTestimonialsAcc,
    PHDConnectingDream,
    PHDHighlight,
    PHDProgrammeHighlight,
    PHDPursue,
} from "./components";

type Props = {
    phdData: PhDProgramme;
    slug?: string;
};

const PHDProgrammes = ({ phdData, slug }: Props) => {
    if (!phdData) return null;

    return (
        <div className="w-full bg-white">
            {/* NEW PHD HERO SECTION MATCHING FIGMA SPECS */}
            {phdData?.heading && (
                <PHDHeroSection
                    heading={phdData.heading}
                    schoolCategory={phdData.school_category}
                    duration={phdData.duration}
                    feePerYear={phdData.fee_per_year}
                    eligibleCriteria={phdData.eligibility_criteria}
                    logoSlide={phdData.phdlogoslide}
                    slug={slug}
                />
            )}

            {/* 61px SUB NAVIGATION STRIP (#D6D1C7) */}
            <PHDSubNav />

            {/* OVERVIEW SECTION (#overview) */}
            {phdData?.phdoverview && (
                <PHDOverview overviewData={phdData.phdoverview} />
            )}

            {/* SCHOLAR CATEGORIES SECTION (#scholar-categories) */}
            {phdData?.scholarsponsoredparttime && (
                <PHDScholar
                    scholarShipsData={phdData.scholarsponsoredparttime}
                />
            )}

            {/* CONNECTING TALENT */}
            {phdData?.connectingtalent && (
                <PHDConnectingDream
                    connectingTalent={phdData.connectingtalent}
                />
            )}

            {/* CAREER SECTION (#career) */}
            {phdData?.careeroptions && (
                <PHDCareer careerOptions={phdData.careeroptions} />
            )}

            {/* PROGRAM OUTCOME SECTION (#program-outcome) */}
            {phdData?.phdoutcome && (
                <PHDOutcome phdoutcomecontent={phdData.phdoutcome} />
            )}

            {/* PROGRAMME HIGHLIGHT */}
            {phdData?.programmehighlight && (
                <PHDProgrammeHighlight
                    highlightContent={phdData.programmehighlight}
                />
            )}

            {/* ADMISSION PROCESS SECTION (#admission-process) */}
            {phdData?.phdadmissionselect &&
                (phdData.phdadmissionselect.title1 ||
                    phdData.phdadmissionselect.title2 ||
                    phdData.phdadmissionselect.desc1 ||
                    phdData.phdadmissionselect.desc2) && (
                    <PHDAdmission
                        title1={phdData.phdadmissionselect.title1}
                        title2={phdData.phdadmissionselect.title2}
                        desc1={phdData.phdadmissionselect.desc1}
                        desc2={phdData.phdadmissionselect.desc2}
                    />
                )}

            {/* PURSUE SECTION */}
            {phdData?.pursue && <PHDPursue pursueContent={phdData.pursue} />}

            {/* FAQS SECTION (#faqs) */}
            {(phdData?.phdfaqtitle ||
                (phdData?.phdprogrammefaq &&
                    phdData.phdprogrammefaq.length > 0)) && (
                <PHDTestimonialsAcc
                    faqTitle={
                        phdData.phdfaqtitle || "Frequently Asked Questions"
                    }
                    faqs={phdData.phdprogrammefaq}
                />
            )}

            {/* COMMENCE JOURNEY */}
            {phdData?.commence_journey && (
                <PHDHighlight
                    heading={phdData.commence_journey.heading}
                    highlightheading={
                        phdData.commence_journey.highlight_heading
                    }
                    btn={phdData.commence_journey.commence_btn}
                    imgUrl={phdData.commence_journey.bgimg?.url}
                />
            )}
        </div>
    );
};

export default PHDProgrammes;
