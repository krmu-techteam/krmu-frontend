import { getSchoolProgrammeData } from "@/lib/api/school-programmes";
import { getDownloadProspectusSetting } from "@/lib/api/global-setting";

import BeyondClassroom from "../../school-programmes-component/BeyondClassroom";
import CareerProspects from "../../school-programmes-component/CareerProspects";
import { ConnectWithUs } from "../../school-programmes-component/ConnectWithUs";
import Curriculum from "../../school-programmes-component/Curriculum";
import DreamCareer from "../../school-programmes-component/DreamCareer";
import Eligibility from "../../school-programmes-component/Eligibility";
import FinancialAssistance from "../../school-programmes-component/FinancialAssistance";
import ProgramHero from "@/components/school-programmes/programs/hero-sections";
import LabsFacilities from "../../school-programmes-component/LabsFacilities";
import OurLocation from "../../school-programmes-component/OurLocation";
import ProgrammeHighlight from "../../school-programmes-component/ProgrammeHighlight";
import ProgrammeScope from "../../school-programmes-component/ProgrammeScope";
import Specialisation from "../../school-programmes-component/Specialisation";
import TableOfContent from "../../school-programmes-component/TableOfContent";
import ExplorePrograms from "../../school-programmes-component/ExploreBTechPrograms";
import { notFound } from "next/navigation";
import ScholarshipBanner from "../../school-programmes-component/ScholarshipBanner";
import AdmissionProcessComp from "../../school-programmes-component/AdmissionProcessComp";
import { getPHDProgramme } from "@/lib/api/phd-programmes";
import PHDProgrammes from "../PHDProgramme";
import {
  createBreadcrumbProgSchema,
  createCourseSchema,
  createFaqSchema,
  createProgFaqSchema,
  getSchoolProgrammeSEO,
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
import Link from "next/link";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";

// ====== BSC-FINANCE-2026 LANDING PAGE IMPORTS ======
import BscFinance2026Page from "@/app/(landing-page)/admission/bsc-finance-2026/page";
import "@/app/(landing-page)/admission/bsc-finance-2026/bsc-finance-2026.css";
import { ActionCards } from "@/components/school-programmes/programs/action-cards/ActionCards";
import { heroConfigs } from "@/components/school-programmes/programs/data/programs";
import JournalismAndMassCommunication from "@/app/(landing-page)/admission/new-Journalism-and-Mass-Communication-2026/page";
import ResearchAndInnovation from "../../school-programmes-component/ResearchAndInnovation";
import { WhyKrmuCse } from "../../school-programmes-component/WhyKrmuCse";
import NewProgrammeScope from "../../school-programmes-component/NewProgrammeScope";
import NewHeroSection from "@/components/school-programmes/programs/new-design-sections/components/heroSection";
import LogoSection from "@/components/school-programmes/programs/new-design-sections/components/logoSection";
import CareerOutcome from "@/components/school-programmes/programs/new-design-sections/components/careerOutcome";
import MbaExists from "@/components/school-programmes/programs/new-design-sections/components/mbaExists";
import TwoYearArc from "@/components/school-programmes/programs/new-design-sections/components/twoYearArc";
import CareerGoal from "@/components/school-programmes/programs/new-design-sections/components/careerGoal";
import LeaveWith from "@/components/school-programmes/programs/new-design-sections/components/leaveWith";
import FacultyAndIndustry from "@/components/school-programmes/programs/new-design-sections/components/facultyAndIndustry";
import ExperimentalInfra from "@/components/school-programmes/programs/new-design-sections/components/experimentalInfra";
import Expectations from "@/components/school-programmes/programs/new-design-sections/components/expectations";
import CareerProspectsNew from "@/components/school-programmes/programs/new-design-sections/components/careerProspects";
import FeeFinance from "@/components/school-programmes/programs/new-design-sections/components/feeFinance";
import HowToApply from "@/components/school-programmes/programs/new-design-sections/components/howToApply";
import LocationNew from "@/components/school-programmes/programs/new-design-sections/components/location";
import ThreeIndustryTracks from "@/components/school-programmes/programs/new-design-sections/components/threeIndustryTracks";
import CommonQuestion from "@/components/school-programmes/programs/new-design-sections/components/commonQuestion";
import OldCareerProspects from "@/components/school-programmes/programs/new-design-sections/components/oldCareerProspect";
import {
  getCareerGoalContent,
  getCommonQuestionContent,
  getContent,
  getDigitalContent,
  getDigitalExperimentalInfraContent,
  getDigitalFacultyAndIndustryContent,
  getDigitalGoalContent,
  getExperimentalInfraContent,
  getFacultyAndIndustryContent,
  getIBMCommonQuestionContent,
  getIBMContent,
  getIBMEExperimentalInfraContent,
  getIBMFacultyAndIndustryContent,
  getIBMGoalContent,
} from "@/components/school-programmes/programs/new-design-sections/lib/getContent";
import { ProgrammeOverview } from "../../school-programmes-component/ProgrammeOverview";
import { BreakDown } from "../../school-programmes-component/BreakDown";
import BTechCSERoboticsAI from "@/app/(new-pages)/b-tech-cse-robotics-ai/BTechCSERoboticsAI";

// import ProgTestimonials, {
//   TestimonialsSection,
// } from "../prog-comp/ProgTestimonials";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ✅ no await

  const seoData = await getSchoolProgrammeSEO(slug);
  const seoPhdData = await getPHDProgramme(slug);

  // let seo = seoData?.[0]?.SEO || seoPhdData[0]?.seo; // ✅ safe access
  const seo = seoData?.[0]?.SEO ?? seoPhdData?.[0]?.seo ?? null;

  // const phdSeo = seoPhdData[0]?.seo;

  // ✅ Fallback if SEO is missing
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

  // ✅ SEO exists
  return {
    title: seo.metaTitle || "K.R. Mangalam University",
    description:
      seo.metaDescription || "Explore top programs and courses at KRMU.",
    keywords: seo.metaKeyword || "",
    alternates: {
      canonical: seo.canonical || "",
    },
    robots: {
      index: true, // false → index
      follow: true,
    },
  };
}

const page = async ({ params }: Props) => {
  const { slug } = await params; // ✅ await params

  // ====== BSC-HONS-FINANCE: Show admission landing page content instead ======
  // Original programs/bsc-hons-finance content is commented out for this slug.
  // The admission/bsc-finance-2026 landing page is rendered here instead.
  if (slug === "bsc-hons-finance") {
    return <BscFinance2026Page />;
  }
  if (slug === "mjmc-masters-journalism-mass-communication") {
    return <JournalismAndMassCommunication />;
  }

  // if (slug === "b-tech-cse-robotics-ai") {
  //   return <BTechCSERoboticsAI />;
  // }

  // ====== END BSC-HONS-FINANCE OVERRIDE ======

  const testimonialsMap: Record<string, any> = {
    "ba-llb-hons": BALLBtestimonialsData,
    "barch-architecture": BAArchtestimonialsData,
    // "bca-ai-data-science": BCAAIDStestimonialsData,
    "bba-digital-marketing": BBADigitalMarketingtestimonialsData,
    "bsc-forensic-science": BSCHonsForensicSciencetestimonialsData,
    // "mba": MBAtestimonialsData,
    "ba-hons-psychology": BSCHonsPhyscologytestimonialsData,
    // "bba-llb-hons": BBALLBtestimonialsData,
    // "llm": LLMtestimonialsData,
  };

  const allowedFormSlugs = ["b-tech-cse"];

  const testimonialsData = testimonialsMap[slug];

  const allSchoolProgrammeData = await getSchoolProgrammeData(slug);
  const allSinglePHDProgramme = await getPHDProgramme(slug);
  const getDownProsSettings = await getDownloadProspectusSetting();
  const enable_disable_download_pros =
    getDownProsSettings?.download_prospectus_enable_disable;
  const seoData = await getSchoolProgrammeSEO(slug);
  const seo = seoData?.[0]?.SEO;
  const tags = seo?.tags;
  const tagsArray = tags
    ? tags.split(",").map((tag: string) => tag.trim())
    : [];

  const singleSchoolProgramme = allSchoolProgrammeData.find(
    (programme) => programme.programmeslug === slug,
  );
  const singlePHDProgramme = allSinglePHDProgramme?.find(
    (phdprogram) => phdprogram?.phdslug === slug,
  );

  // If not found, redirect to 404 page
  // if (!singleSchoolProgramme) return notFound();

  // Return 404 if either is missing
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
  const financialAssistanceSection = singleSchoolProgramme?.financialassistance;
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

  let schemaSlug = singleSchoolProgramme?.programmeslug || "";
  let courseWorkload = schemaSlug.includes("part-time")
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
      tocpoint: section.tocpoint, // optional, keep category info
    })),
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
    (item) => item.subtitle === "Duration",
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

  const isNewSectionSlug =
    slug === "bsc-hons-agriculture" ||
    slug === "b-tech-cse" ||
    slug === "bachelor-of-education-b-ed" ||
    slug === "bhmct-hotel-management" ||
    slug === "bjmc-hons-research" ||
    slug === "bjmc" ||
    slug === "bachelor-of-design-b-des-fashion-design" ||
    slug === "barch-architecture" ||
    slug === "bfa-fine-arts";

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
        className={`p-0 m-0 ${tagsArray.map((tag) => `tag-${tag}`).join(" ")}`}
      />
      <main className="school-prog-font">
        {/* {tags && <TagDiv tags={tags} extraClass="hidden test-class" />} */}
        {heroSection &&
          (isMbaSlug ? (
            <NewHeroSection
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
            <ProgramHero
              title={title || ""}
              highlightitle={highlightTitle || ""}
              heroSection={heroSection}
              formId={heroSection?.formId}
              slug={slug}
              // allowedFormSlugs={allowedFormSlugs}
              dreamcareerSection={dreamcareerSection}
              logos={dreamcareerSection?.careerlogos}
            />
          ))}
        {eligibilitySection &&
          (isMbaSlug ? (
            <LogoSection />
          ) : (
            <Eligibility
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
        {!(slug in heroConfigs) && dreamcareerSection && (
          <DreamCareer
            heading={dreamcareerSection.heading}
            description={dreamcareerSection.description}
            logos={dreamcareerSection?.careerlogos}
          />
        )}
        {programmeScopeSection &&
          (isMbaSlug ? (
            <FacultyAndIndustry
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
          ) : isNewSectionSlug ? (
            <>
              <ProgrammeOverview slug={slug} />
              <NewProgrammeScope
                scopeData={programmeScopeSection}
                heroSection={heroSection}
                allowedFormSlugs={allowedFormSlugs}
                slug={slug}
              />
            </>
          ) : (
            <ProgrammeScope
              scopeData={programmeScopeSection}
              heroSection={heroSection}
              allowedFormSlugs={allowedFormSlugs}
              slug={slug}
            />
          ))}
        {programmeHighlightSection &&
          (isMbaSlug ? (
            <CareerOutcome slug={slug} />
          ) : (
            <ProgrammeHighlight
              heading={programmeHighlightSection?.heading}
              highlightHeading={programmeHighlightSection?.highlightheading}
              desc={programmeHighlightSection?.subheading}
              highlights={programmeHighlightSection?.programmehighlightcards}
              slug={slug}
            />
          ))}
        {/* {slug === "mba" && <SpecialisationsSection />} */}
        {isNewSectionSlug ? (
          <WhyKrmuCse slug={slug} />
        ) : (
          <>
            {specialisationSection && (
              <Specialisation
                heading={specialisationSection?.heading}
                highlightheading={specialisationSection?.highlightheading}
                specialisations={specialisationSection?.specialisationcards}
              />
            )}
          </>
        )}

        {admissionProcessSection &&
          (isMbaSlug ? (
            <MbaExists />
          ) : (
            <AdmissionProcessComp
              heading={admissionProcessSection?.heading}
              highlight={admissionProcessSection?.highlightheading}
              desc={admissionProcessSection?.description}
              deskimg={admissionProcessSection?.desktopadmissionprocessimg}
              admissionCards={admissionProcessSection?.admissionprocesscard}
              admisbtn={admissionProcessSection?.admissionbtn}
              slug={slug}
              // formId={admissionProcessSection?.admissionFormId}
            />
          ))}
        {curriculumSection &&
          (isMbaSlug ? (
            <TwoYearArc />
          ) : (
            <Curriculum
              heading={curriculumSection?.heading}
              highlight={curriculumSection?.highlightheading}
              desc={curriculumSection?.description}
              programStruct={curriculumSection?.years}
              currbtn={curriculumSection?.currbtn}
              currFormId={curriculumSection?.currFormId}
              currFormContainerId={curriculumSection?.currContainerId}
              isYear={curriculumSection?.only_years}
              slug={slug}
            />
          ))}
        {labfacilitiesSection &&
          (isMbaSlug ? (
            <CareerGoal
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
            <LabsFacilities
              heading={labfacilitiesSection?.heading}
              highlight={labfacilitiesSection?.highlightheading}
              btn={labfacilitiesSection?.labbtn}
              labimg={labfacilitiesSection?.labsimage}
              labcontent={labfacilitiesSection?.labscontent}
              labcards={labfacilitiesSection?.labcards}
              slug={slug}
            />
          ))}
        {beyondclassSection &&
          (isMbaSlug ? (
            <LeaveWith />
          ) : slug === "b-tech-cse" ? (
            <>
              <ResearchAndInnovation slug={slug} />
              <BeyondClassroom
                heading={beyondclassSection?.heading}
                highlight={beyondclassSection?.highlightheading}
                desc={beyondclassSection?.description}
                beyondclassimages={beyondclassSection?.beyondclassroomimages}
              />
            </>
          ) : (
            <BeyondClassroom
              heading={beyondclassSection?.heading}
              highlight={beyondclassSection?.highlightheading}
              desc={beyondclassSection?.description}
              beyondclassimages={beyondclassSection?.beyondclassroomimages}
            />
          ))}
        {careerProspectsSection &&
          (isMbaSlug ? (
            <ExperimentalInfra
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
            <CareerProspects
              heading={careerProspectsSection?.heading}
              highlight={careerProspectsSection?.highlightheading}
              desc={careerProspectsSection?.description}
              btn={careerProspectsSection?.careerbtn}
              careerimg={careerProspectsSection?.careerimg}
              careercards={careerProspectsSection?.careercards}
              slug={slug}
              // careerFormId={careerProspectsSection?.careerFormId}
            />
          ))}
        {isNewSectionSlug && <BreakDown slug={slug} />}
        {financialAssistanceSection &&
          (isMbaSlug ? (
            <>
              <Expectations />
            </>
          ) : (
            <FinancialAssistance
              heading={financialAssistanceSection?.heading}
              highlightheading={financialAssistanceSection?.highlightheading}
              description={financialAssistanceSection?.description}
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
        {isMbaSlug ? <CareerProspectsNew slug={slug} /> : <ScholarshipBanner />}
        {testimonialsData && <ProgTestimonials data={testimonialsData} />}
        {tocSection &&
          (isMbaSlug ? (
            <FeeFinance slug={slug} />
          ) : (
            <TableOfContent
              heading={tocSection?.heading}
              highlight={tocSection?.highlightheading}
              desc={tocSection?.description}
              tocfaqs={tocSection?.tocfaq}
              tocimg={tocSection?.tocimg}
              tocbtn={tocSection?.tocbtn}
            />
          ))}
        {isMbaSlug ? (
          <HowToApply formId={heroSection?.formId} heroSection={heroSection} />
        ) : (
          <ExplorePrograms currentSlug={slug} />
        )}
        {ourLocationSection &&
          (isMbaSlug ? (
            <LocationNew slug={slug} />
          ) : (
            <OurLocation
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
              <CommonQuestion
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
              <ThreeIndustryTracks />
            </>
          ) : (
            <ActionCards schoolCat={singleSchoolProgramme.school_category} />
          ))}
      </main>
    </>
  );
};

export default page;
