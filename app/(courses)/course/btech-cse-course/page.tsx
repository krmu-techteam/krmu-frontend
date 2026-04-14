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
    title: "B.Tech. CSE Course Details: Subjects & Structure",
    description:
      "Learn everything about the KRMU’s B.Tech. CSE course, including course details, structure, and B.Tech. CSE course subjects. A complete guide for aspiring engineers!",
    alternates: {
      canonical: "https://www.krmangalam.edu.in/course/btech-cse-course",
    },
    robots: {
      index: true,
      follow: true,
    },
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
      <CourseStructure />
      {/* <QuickComparison /> */}
      {/* <WhyStudy /> */}
      <CourseDetails />
      <AdmissionProcess />
      <InternationalExposure />
      <FinancialSupport />
      <Scholarship />
      <KRMUFEEStructure />
      <FacilitiesSection data={worldFacilities} />

      <CourseFAQ />
      <PreFooterCTA />
      <LocationSection />
    </>
  );
};

export default page;
