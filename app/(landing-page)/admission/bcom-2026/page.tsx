import { Metadata } from "next";
import ApplySection from "../CommonComponent2026/ApplyNow";
import BusinessHub from "../CommonComponent2026/BusinessHub";
import ComeToLife from "../CommonComponent2026/ComeToLife";
import Counter from "../CommonComponent2026/Counter";
import FAQ from "../CommonComponent2026/FAQ";
import HeroSection from "../CommonComponent2026/HeroSection";
import CommonFooter2 from "../commonComponent/footer/CommonFooter2";
import IndustryExperts from "../CommonComponent2026/IndustryExperts";
import LifeAsPhDScholar from "../CommonComponent2026/LifeAsPhDScholar";
import Opportunity from "../CommonComponent2026/Opportunity";
import ProminentRecruiter from "../CommonComponent2026/ProminentRecruiter";
// import ScholarResearchImpact from "../CommonComponent2026/ScholarResearchImpact";
import Specialisation from "../CommonComponent2026/Specialisation";
import Testimonials from "../CommonComponent2026/Testimonials";
import WhyKRMangalam from "../CommonComponent2026/WhyKRMangalam";

import FeeStructureTable from "./components/FeeStructure";
import {
  applySectionData,
  businessHubData,
  comeToLifeData,
  Counters,
  faqSectionData,
  Hero,
  heroMarqueeData,
  industryExperts,
  lifeAsPhDScholarData,
  opportunityData,
  prominentRecruiters,
  programmeContent,
  // scholarResearchImpactData,
  specialisationData,
  testimonialsData,
  eligibilityTerms,
  whyKRM,
} from "./content";

import { SeoData } from "./seo";
import { bcom2026Id } from "../constant/lpnpf";
import PlacementRate from "../CommonComponent2026/PlacementRate";
import FAQSection2 from "../CommonComponent2026/FAQSection2";
import ProgrammeSection from "../CommonComponent2026/ProgrammeSection";
import EligibilityTerms from "../commonComponent/EligibilityTerms";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: SeoData.title,
    description: SeoData.description,

    openGraph: {
      title: SeoData.title,
      description: SeoData.description,
      images: [
        {
          url: SeoData.shareImage,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: SeoData.title,
      description: SeoData.description,
      images: [SeoData.shareImage],
    },
  };
}

const page = () => {
  const bcomIdForm = bcom2026Id;
  const heroContent = Hero;
  const counters = Counters;
  const recruiters = prominentRecruiters;
  const whykrm = whyKRM;
  const industryexpert = industryExperts;
  const specialise = specialisationData;
  const opport = opportunityData;
  const testiomonial = testimonialsData;
  // const scholarData = scholarResearchImpactData;
  const worldLifeData = comeToLifeData;
  const lifeData = lifeAsPhDScholarData;
  const faqData = faqSectionData;
  const businessData = businessHubData;
  const applyData = applySectionData;
  const heroMarqData = heroMarqueeData;

  return (
    <>
      <HeroSection
        content={heroContent?.title}
        formId={bcomIdForm}
        desc={heroContent?.desc}
        marqueeData={heroMarqData}
        heroBg={heroContent?.heroBg}
        middleImg={heroContent?.middleImg}
        mobileImg={heroContent?.mobileImg}
        lpclName={heroContent?.lpclName}
      />
      <Counter counters={counters} />
      <ProminentRecruiter recruiters={recruiters} />
      <PlacementRate />
      {/* <WhyKRMangalam
        heading={whykrm?.heading}
        subheading={whykrm?.subheading}
        desc={whykrm?.content}
        imgUrl={whykrm?.imgUrl}
        whykrmCards={whykrm?.whyKrmCards}
      /> */}
      {/* <IndustryExperts data={industryexpert} /> */}
      {/* <Specialisation data={specialise} /> */}
      <ProgrammeSection {...programmeContent} />
      <Opportunity data={opport} />
      {/* <FeeStructureTable /> */}
      {/* <Testimonials data={testiomonial} /> */}
      {/* <ScholarResearchImpact data={scholarData} /> */}
      <ComeToLife data={worldLifeData} />
      <LifeAsPhDScholar data={lifeData} />
      {/* <FAQ data={faqData} /> */}
      <FAQSection2 data={faqData} />
      <BusinessHub data={businessData} formId={bcomIdForm} />
      {/* <ApplySection data={applyData} /> */}
      <EligibilityTerms items={eligibilityTerms} />
      <CommonFooter2 />
    </>
  );
};

export default page;
