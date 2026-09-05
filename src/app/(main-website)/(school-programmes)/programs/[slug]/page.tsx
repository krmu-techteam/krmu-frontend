import { getProgramsService, IProgramsService } from "@/features/programs";
import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import { notFound } from "next/navigation";

import PHDProgrammes from "../PHDProgramme";
import {
    createBreadcrumbProgSchema,
    createCourseSchema,
    createProgFaqSchema,
} from "@/lib/api/common";
import { Metadata } from "next";
import Script from "next/script";
import { BALLBtestimonialsData } from "../progdata/sols";
import ProgTestimonials from "../prog-comp/ProgTestimonials";
import { BAArchtestimonialsData } from "../progdata/soad";
import { BCAAIDStestimonialsData } from "../progdata/soet";
import {
    BBADigitalMarketingtestimonialsData,
    MBAtestimonialsData,
} from "../progdata/somc";
import SpecialisationsSection from "../prog-comp/SpecialisationsSection";
import { BSCHonsForensicSciencetestimonialsData } from "../progdata/sbas";
import { BSCHonsPhyscologytestimonialsData } from "../progdata/sola";

// ====== BSC-FINANCE-2026 LANDING PAGE IMPORTS ======
import BscFinance2026Page from "@/app/(landing-page)/admission/bsc-finance-2026/page";
import "@/app/(landing-page)/admission/bsc-finance-2026/bsc-finance-2026.css";
import { ActionCards } from "@/components/school-programmes/programs/action-cards/ActionCards";
import { heroConfigs } from "@/components/school-programmes/programs/data/programs";
import JournalismAndMassCommunication from "@/app/(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/page";
import {
    AdmissionProcessSection,
    BeyondClassroomSection,
    BreakDownSection,
    CareerProspectsSection,
    CurriculumSection,
    DreamCareerSection,
    EligibilitySection,
    ExploreProgramsSection,
    FinancialAssistanceSection,
    FrequentlyAskedQuestionsSection,
    HeroSection,
    LabsFacilitieSection,
    NewProgrammeScopeSection,
    OurLocationSection,
    ProgrammeOverviewSection,
    ProgrammeScopeSection,
    ResearchAndInnovationSection,
    ScholarshipBannerSection,
    WhyKRMUSection,
} from "@/presentation/programs/sections";
import {
    ProgrammeHighlightSection,
    SpecialisationSection,
} from "@/presentation/programs";
import ProgramSubNav from "@/presentation/programs/components/ProgramSubNav";
import CinematicRecruiterStrip from "@/presentation/programs/components/CinematicRecruiterStrip";
import { programmeScopeData } from "@/presentation/programs/constants/programme-scope.constants";

// ====== NEW MBA DESIGN IMPORTS ======
import {
    MbaHeroSection,
    MbaLogoSection,
    MbaFacultyAndIndustrySection,
    MbaCareerOutcomeSection,
    MbaExistsSection,
    MbaTwoYearArcSection,
    MbaCareerGoalSection,
    MbaLeaveWithSection,
    MbaExperimentalInfraSection,
    MbaExpectationsSection,
    MbaCareerProspectsSection,
    MbaFeeFinanceSection,
    MbaHowToApplySection,
    MbaLocationSection,
    MbaCommonQuestionSection,
    MbaThreeIndustryTracksSection,
    getContent,
    getIBMContent,
    getDigitalContent,
    getFacultyAndIndustryContent,
    getIBMFacultyAndIndustryContent,
    getDigitalFacultyAndIndustryContent,
    getCareerGoalContent,
    getIBMGoalContent,
    getDigitalGoalContent,
    getExperimentalInfraContent,
    getIBMEExperimentalInfraContent,
    getDigitalExperimentalInfraContent,
    getCommonQuestionContent,
    getIBMCommonQuestionContent,
} from "@/presentation/programs/new/mba";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const programsService = getProgramsService();
    const seoData = await programsService.getSchoolProgrammeSEO(slug);
    const seoPhdData = await programsService.getPHDProgramme(slug);

    const seo = seoData?.[0]?.SEO ?? seoPhdData?.seo ?? null;

    if (!seo) {
        return {
            title: "K.R. Mangalam University",
            description: "",
            robots: {
                index: true,
                follow: true,
            },
        };
    }

    return {
        title: seo.metaTitle || "K.R. Mangalam University",
        description:
            seo.metaDescription || "Explore top programs and courses at KRMU.",
        keywords: seo.metaKeyword || "",
        alternates: {
            canonical: seo.canonical || "",
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

const page = async ({ params }: Props) => {
    const { slug } = await params;

    // ====== BSC-HONS-FINANCE: Show admission landing page content instead ======
    if (slug === "bsc-hons-finance") {
        return <BscFinance2026Page />;
    }
    if (slug === "mjmc-masters-journalism-mass-communication") {
        return <JournalismAndMassCommunication />;
    }

    const testimonialsMap: Record<string, any> = {
        "ba-llb-hons": BALLBtestimonialsData,
        "barch-architecture": BAArchtestimonialsData,
        "bca-ai-data-science": BCAAIDStestimonialsData,
        "bba-digital-marketing": BBADigitalMarketingtestimonialsData,
        "bsc-forensic-science": BSCHonsForensicSciencetestimonialsData,
        mba: MBAtestimonialsData,
        "ba-hons-psychology": BSCHonsPhyscologytestimonialsData,
    };

    const allowedFormSlugs = ["b-tech-cse"];
    const testimonialsData = testimonialsMap[slug];

    const programsService: IProgramsService = getProgramsService();
    const singleSchoolProgramme =
        await programsService.getSchoolProgramme(slug);
    const singlePHDProgramme = await programsService.getPHDProgramme(slug);
    const getDownProsSettings = await getDownloadProspectusSetting();
    const enable_disable_download_pros =
        getDownProsSettings?.download_prospectus_enable_disable;
    const seoData = await programsService.getSchoolProgrammeSEO(slug);
    const seo = seoData?.[0]?.SEO;
    const tags = seo?.tags;
    const tagsArray = tags
        ? tags.split(",").map((tag: string) => tag.trim())
        : [];

    if (!singleSchoolProgramme && !singlePHDProgramme) {
        return notFound();
    }

    const title = singleSchoolProgramme?.title;
    const highlightTitle = singleSchoolProgramme?.highlightitle;

    const heroSection = singleSchoolProgramme?.herosection;
    const eligibilitySection = singleSchoolProgramme?.programmeeligibility;
    const programmeScopeSection = singleSchoolProgramme?.programmescope;
    const programmeHighlightSection = singleSchoolProgramme?.programmehighlight;
    const specialisationSection = singleSchoolProgramme?.specialisation;
    const admissionProcessSection = singleSchoolProgramme?.admissionprocess;
    const curriculumSection = singleSchoolProgramme?.curriculum;
    const labfacilitiesSection = singleSchoolProgramme?.labsfacilities;
    const beyondclassSection = singleSchoolProgramme?.beyondclassroom;
    const careerProspectsSection = singleSchoolProgramme?.career;
    const dreamcareerSection = singleSchoolProgramme?.dreamcareer;
    const financialAssistanceSection =
        singleSchoolProgramme?.financialassistance;
    const tocSection = singleSchoolProgramme?.toc;
    const ourLocationSection = singleSchoolProgramme?.ourlocation;

    if (singlePHDProgramme?.degree === "Doctoral Programme") {
        return <PHDProgrammes phdData={singlePHDProgramme} slug={slug} />;
    }

    type FAQProg = {
        ques: string;
        ans: string;
    };

    const faqToC = singleSchoolProgramme?.toc?.tocfaq || [];

    const schemaSlug = singleSchoolProgramme?.programmeslug || "";
    const courseWorkload = schemaSlug.includes("part-time")
        ? "Part Time"
        : "Full Time";
    let schemaTitle =
        singleSchoolProgramme?.title +
        (singleSchoolProgramme?.highlightitle
            ? " " + singleSchoolProgramme?.highlightitle
            : "");

    schemaTitle = schemaTitle.trim();
    const allFaqs: FAQProg[] = faqToC.flatMap((section) =>
        section.faq.map((item) => ({
            id: item.id,
            ques: item.ques,
            ans: item.ans,
            tocpoint: section.tocpoint,
        }))
    );

    const singleProgFAQLD = createProgFaqSchema(allFaqs);

    const breadcrumbSchema = createBreadcrumbProgSchema([
        { name: "Programs", url: "https://www.krmangalam.edu.in/programs" },
        {
            name: schemaTitle,
            url: `https://www.krmangalam.edu.in/programs/${schemaSlug}`,
        },
    ]);
    const durationObj = eligibilitySection?.elgibility.find(
        (item) => item.subtitle === "Duration"
    );
    let durationISO = "";

    if (durationObj?.title) {
        const match = durationObj.title.match(/\d+/);
        if (match) {
            durationISO = `P${match[0]}Y`;
        }
    }

    const courseSchema = createCourseSchema({
        name: schemaTitle,
        description: seo?.metaDescription || "",
        provider: {
            name: "K.R. Mangalam University",
            url: `https://www.krmangalam.edu.in/programs/${schemaSlug}`,
        },
        offers: [{ category: "Paid" }],
        hasCourseInstance: [
            {
                courseMode: "Onsite",
                location: "K.R. Mangalam University",
                courseSchedule: {
                    duration: durationISO,
                    repeatFrequency: "Weekly",
                    repeatCount: 48,
                    startDate: "2013",
                },
            },
            {
                courseMode: "Onsite",
                courseWorkload: courseWorkload,
            },
        ],
    });

    const isMbaSlug =
        slug === "mba-fintech" ||
        slug === "mba" ||
        slug === "mba-digital-marketing";

    const hasCustomProgrammeScope = slug in programmeScopeData;

    return (
        <>
            <Script
                id="program-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: singleProgFAQLD }}
            />
            <Script
                id="program-breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
            />
            <Script
                id="program-course-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: courseSchema }}
            />
            <div
                className={`p-0 m-0 ${tagsArray.map((tag: string) => `tag-${tag}`).join(" ")}`}
            />
            <main className="school-prog-font temp-class">
                {heroSection &&
                    (isMbaSlug ? (
                        <MbaHeroSection
                            formId={heroSection?.formId}
                            heroSection={heroSection}
                            dataContent={
                                slug === "mba-fintech"
                                    ? getContent()
                                    : slug === "mba"
                                      ? getIBMContent()
                                      : slug === "mba-digital-marketing"
                                        ? getDigitalContent()
                                        : null
                            }
                        />
                    ) : (
                        <HeroSection
                            title={title || ""}
                            highlightitle={highlightTitle || ""}
                            heroSection={heroSection}
                            formId={heroSection?.formId}
                            slug={slug}
                            dreamcareerSection={dreamcareerSection}
                            logos={dreamcareerSection?.careerlogos}
                        />
                    ))}

                <ProgramSubNav />

                {slug in heroConfigs && dreamcareerSection && (
                    <CinematicRecruiterStrip
                        dreamcareerSection={dreamcareerSection}
                        logos={dreamcareerSection?.careerlogos}
                    />
                )}

                {eligibilitySection &&
                    (isMbaSlug ? (
                        <MbaLogoSection />
                    ) : (
                        <EligibilitySection
                            elgibilities={eligibilitySection?.elgibility}
                            mobherobtn={eligibilitySection?.mobherobtn}
                            allowedFormSlugs={allowedFormSlugs}
                            slug={slug}
                            formId={heroSection?.formId}
                            heroSection={heroSection}
                            enableDownloadPros={enable_disable_download_pros}
                            prospectusBtn={programmeScopeSection?.scopebtn}
                        />
                    ))}

                {!isMbaSlug && !(slug in heroConfigs) && dreamcareerSection && (
                    <DreamCareerSection
                        heading={dreamcareerSection.heading}
                        description={dreamcareerSection.description}
                        logos={dreamcareerSection?.careerlogos}
                    />
                )}

                {programmeScopeSection &&
                    (isMbaSlug ? (
                        <MbaFacultyAndIndustrySection
                            slug={slug}
                            dataContent={
                                slug === "mba-fintech"
                                    ? getFacultyAndIndustryContent()
                                    : slug === "mba"
                                      ? getIBMFacultyAndIndustryContent()
                                      : slug === "mba-digital-marketing"
                                        ? getDigitalFacultyAndIndustryContent()
                                        : null
                            }
                        />
                    ) : hasCustomProgrammeScope ? (
                        <>
                            {slug === "b-tech-cse" && (
                                <ProgrammeOverviewSection />
                            )}
                            <NewProgrammeScopeSection
                                scopeData={programmeScopeSection}
                                heroSection={heroSection}
                                allowedFormSlugs={allowedFormSlugs}
                                slug={slug}
                            />
                        </>
                    ) : (
                        <ProgrammeScopeSection
                            scopeData={programmeScopeSection}
                            heroSection={heroSection}
                            allowedFormSlugs={allowedFormSlugs}
                            slug={slug}
                        />
                    ))}

                {programmeHighlightSection &&
                    (isMbaSlug ? (
                        <MbaCareerOutcomeSection slug={slug} />
                    ) : (
                        <ProgrammeHighlightSection
                            heading={programmeHighlightSection?.heading}
                            highlightHeading={
                                programmeHighlightSection?.highlightheading
                            }
                            desc={programmeHighlightSection?.subheading}
                            highlights={
                                programmeHighlightSection?.programmehighlightcards
                            }
                            slug={slug}
                        />
                    ))}

                {slug === "b-tech-cse" && <WhyKRMUSection />}

                {/* Specialisations for non-MBA */}
                {!isMbaSlug && specialisationSection && (
                    <SpecialisationSection
                        heading={specialisationSection?.heading}
                        highlightheading={
                            specialisationSection?.highlightheading
                        }
                        specialisations={
                            specialisationSection?.specialisationcards
                        }
                    />
                )}

                {admissionProcessSection &&
                    (isMbaSlug ? (
                        <MbaExistsSection />
                    ) : (
                        <AdmissionProcessSection
                            heading={admissionProcessSection?.heading}
                            highlight={
                                admissionProcessSection?.highlightheading
                            }
                            desc={admissionProcessSection?.description}
                            deskimg={
                                admissionProcessSection?.desktopadmissionprocessimg
                            }
                            admissionCards={
                                admissionProcessSection?.admissionprocesscard
                            }
                            admisbtn={admissionProcessSection?.admissionbtn}
                            slug={slug}
                            formId={heroSection?.formId}
                        />
                    ))}

                {curriculumSection &&
                    (isMbaSlug ? (
                        <MbaTwoYearArcSection />
                    ) : (
                        <CurriculumSection
                            heading={curriculumSection?.heading}
                            highlight={curriculumSection?.highlightheading}
                            desc={curriculumSection?.description}
                            programStruct={curriculumSection?.years}
                            currbtn={curriculumSection?.currbtn}
                            currFormId={curriculumSection?.currFormId}
                            currFormContainerId={
                                curriculumSection?.currContainerId
                            }
                            isYear={curriculumSection?.only_years}
                            slug={slug}
                        />
                    ))}

                {labfacilitiesSection &&
                    (isMbaSlug ? (
                        <MbaCareerGoalSection
                            slug={slug}
                            dataContent={
                                slug === "mba-fintech"
                                    ? getCareerGoalContent()
                                    : slug === "mba"
                                      ? getIBMGoalContent()
                                      : slug === "mba-digital-marketing"
                                        ? getDigitalGoalContent()
                                        : null
                            }
                        />
                    ) : (
                        <LabsFacilitieSection
                            heading={labfacilitiesSection?.heading}
                            highlight={labfacilitiesSection?.highlightheading}
                            btn={labfacilitiesSection?.labbtn}
                            labimg={labfacilitiesSection?.labsimage}
                            labcontent={labfacilitiesSection?.labscontent}
                            labcards={labfacilitiesSection?.labcards}
                            slug={slug}
                        />
                    ))}

                {slug === "b-tech-cse" && <ResearchAndInnovationSection />}

                {beyondclassSection &&
                    (isMbaSlug ? (
                        <MbaLeaveWithSection />
                    ) : (
                        <BeyondClassroomSection
                            heading={beyondclassSection?.heading}
                            highlight={beyondclassSection?.highlightheading}
                            desc={beyondclassSection?.description}
                            beyondclassimages={
                                beyondclassSection?.beyondclassroomimages
                            }
                        />
                    ))}

                {careerProspectsSection &&
                    (isMbaSlug ? (
                        <MbaExperimentalInfraSection
                            dataContent={
                                slug === "mba-fintech"
                                    ? getExperimentalInfraContent()
                                    : slug === "mba"
                                      ? getIBMEExperimentalInfraContent()
                                      : slug === "mba-digital-marketing"
                                        ? getDigitalExperimentalInfraContent()
                                        : null
                            }
                        />
                    ) : (
                        <CareerProspectsSection
                            heading={careerProspectsSection?.heading}
                            highlight={careerProspectsSection?.highlightheading}
                            desc={careerProspectsSection?.description}
                            btn={careerProspectsSection?.careerbtn}
                            careerimg={careerProspectsSection?.careerimg}
                            careercards={careerProspectsSection?.careercards}
                            slug={slug}
                        />
                    ))}

                {slug === "b-tech-cse" && <BreakDownSection />}

                {financialAssistanceSection &&
                    (isMbaSlug ? (
                        <MbaExpectationsSection />
                    ) : (
                        <FinancialAssistanceSection
                            heading={financialAssistanceSection?.heading}
                            highlightheading={
                                financialAssistanceSection?.highlightheading
                            }
                            description={
                                financialAssistanceSection?.description
                            }
                            point1={financialAssistanceSection?.point1}
                            point2={financialAssistanceSection?.point2}
                            point3={financialAssistanceSection?.point3}
                            point4={financialAssistanceSection?.point4}
                            point5={financialAssistanceSection?.point5}
                            point6={financialAssistanceSection?.point6}
                            point7={financialAssistanceSection?.point7}
                            logos={financialAssistanceSection?.financelogos}
                        />
                    ))}

                {isMbaSlug ? (
                    <MbaCareerProspectsSection slug={slug} />
                ) : (
                    <ScholarshipBannerSection />
                )}

                {tocSection &&
                    (isMbaSlug ? (
                        <MbaFeeFinanceSection slug={slug} />
                    ) : (
                        <FrequentlyAskedQuestionsSection
                            heading={tocSection?.heading}
                            highlight={tocSection?.highlightheading}
                            desc={tocSection?.description}
                            tocfaqs={tocSection?.tocfaq}
                            tocimg={tocSection?.tocimg}
                            tocbtn={tocSection?.tocbtn}
                        />
                    ))}

                {isMbaSlug ? (
                    <MbaHowToApplySection
                        formId={heroSection?.formId}
                        heroSection={heroSection}
                    />
                ) : (
                    <ExploreProgramsSection currentSlug={slug} />
                )}

                {ourLocationSection &&
                    (isMbaSlug ? (
                        <MbaLocationSection slug={slug} />
                    ) : (
                        <OurLocationSection
                            badgetext={ourLocationSection?.badgetext}
                            heading={ourLocationSection?.badgetext}
                            img1={ourLocationSection?.img1}
                            img2={ourLocationSection?.img2}
                        />
                    ))}

                {/* <ConnectWithUs /> */}
                {singleSchoolProgramme?.school_category &&
                    (isMbaSlug ? (
                        <>
                            <MbaCommonQuestionSection
                                dataContent={
                                    slug === "mba-fintech"
                                        ? getCommonQuestionContent()
                                        : slug === "mba"
                                          ? getIBMCommonQuestionContent()
                                          : slug === "mba-digital-marketing"
                                            ? getCommonQuestionContent()
                                            : null
                                }
                            />
                            <MbaThreeIndustryTracksSection />
                        </>
                    ) : (
                        <ActionCards
                            schoolCat={singleSchoolProgramme.school_category}
                        />
                    ))}
            </main>
        </>
    );
};

export default page;
