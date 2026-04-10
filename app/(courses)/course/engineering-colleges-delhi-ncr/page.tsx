import AdmissionProcess from "./components/AdmissionProcess";
import CourseDetails from "./components/CourseDetails";
import CourseFAQ from "./components/CourseFAQ";
import CourseProminentRecruiter from "./components/CourseProminentRecruiter";
import CourseStructure from "./components/CourseStructure";
import FacilitiesSection from "./components/FacilitiesSection";
import FinancialSupport from "./components/FinancialSupport";
import HeroSection from "./components/HeroSection";
import HowWeCompare from "./components/HowWeCompare";
import InternationalExposure from "./components/InternationalExposure";
import KRMUFEEStructure from "./components/KRMUFEEStructure";
import LocationSection from "./components/LocationSection";
import PlacementOverview from "./components/PlacementOverview";
import PlacementStrategy from "./components/PlacementStrategy";
import PreFooterCTA from "./components/PreFooterCTA";
import QuickComparison from "./components/QuickComparison";
import Scholarship from "./components/Scholarship";
import StillinDoubt from "./components/StillinDoubt";
import WhyStudy from "./components/WhyStudy";
import { worldFaciltiesCourseData } from "./content";

export async function generateMetadata() {
  return {
    title: "Best Engineering Colleges in Delhi NCR | B.Tech Admissions 2026",
    description:
      "KRMU is among the top engineering colleges in Delhi NCR, offering industry-led B.Tech programs in AI/ML, Data & Cyber Security near the tech hubs of Gurugram & Noida.",
  };
}

const page = () => {
  const worldFacilities = worldFaciltiesCourseData;

  return (
    <>
      <HeroSection />
      <CourseProminentRecruiter />
      <PlacementOverview />
      <HowWeCompare />
      <PlacementStrategy />
      <StillinDoubt />
      {/* <CourseStructure /> */}
      <QuickComparison />
      <WhyStudy />
      <AdmissionProcess />
      <InternationalExposure />
      <FinancialSupport />
      <Scholarship />
      <KRMUFEEStructure />
      <FacilitiesSection data={worldFacilities} />
      {/* <CourseDetails /> */}
      <CourseFAQ />
      <PreFooterCTA />
      <LocationSection />
    </>
  );
};

export default page;
