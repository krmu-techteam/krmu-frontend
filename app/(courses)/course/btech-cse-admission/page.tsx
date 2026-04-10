import AdmissionProcess from "./components/AdmissionProcess";
import CourseDetails from "./components/CourseDetails";
import CourseFAQ from "./components/CourseFAQ";
import CourseProminentRecruiter from "./components/CourseProminentRecruiter";
import CourseStructure from "./components/CourseStructure";
import DirectAdmissionSection from "./components/DirectAdmissionSection";
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
    title:
      "B.Tech. CSE Admission at KRMU | Direct admission in B.Tech. colleges​",
    description:
      "Searching for how to get admission in B.Tech.? Your scrolling stops here! Enrol for KRMU’s B.Tech. computer science and engineering admission to kickstart your engineering journey today!",
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
      {/* <QuickComparison /> */}
      <DirectAdmissionSection />
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
