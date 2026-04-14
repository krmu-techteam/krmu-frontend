import Script from "next/script";
import AdmissionProcess from "./components/AdmissionProcess";
// import CourseDetails from "./components/CourseDetails";
import CourseFAQ from "./components/CourseFAQ";
import CourseProminentRecruiter from "./components/CourseProminentRecruiter";
// import CourseStructure from "./components/CourseStructure";
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
// import QuickComparison from "./components/QuickComparison";
import Scholarship from "./components/Scholarship";
import StillinDoubt from "./components/StillinDoubt";
import WhyStudy from "./components/WhyStudy";
import { faqData, worldFaciltiesCourseData } from "./content";
import {
  createBreadcrumbProgSchema,
  createCourseSchema,
} from "@/lib/api/common";
import { generateCourseFaqSchema } from "../best-colleges-for-btech-cse/page";

export async function generateMetadata() {
  return {
    title:
      "B.Tech. CSE Admission at KRMU | Direct admission in B.Tech. colleges​",
    description:
      "Searching for how to get admission in B.Tech.? Your scrolling stops here! Enrol for KRMU’s B.Tech. computer science and engineering admission to kickstart your engineering journey today!",
    alternates: {
      canonical: "https://www.krmangalam.edu.in/course/btech-cse-admission",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const page = () => {
  const worldFacilities = worldFaciltiesCourseData;
  // FAQ Schema - automatically generated from the data
  const faqSchema = generateCourseFaqSchema(faqData);

  // Course Schema
  const durationISO = "P4Y";
  const courseWorkload = "Full Time";
  const courseSchema = createCourseSchema({
    name: "B.Tech. CSE Admission at KRMU | Direct admission in B.Tech. colleges​",
    description:
      "Searching for how to get admission in B.Tech.? Your scrolling stops here! Enrol for KRMU’s B.Tech. computer science and engineering admission to kickstart your engineering journey today!",
    provider: {
      name: "K.R. Mangalam University",
      url: "https://www.krmangalam.edu.in/course/btech-cse-admission",
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

  // Breadcrumb Schema
  const breadcrumbSchema = createBreadcrumbProgSchema([
    { name: "Home", url: "https://www.krmangalam.edu.in/" },
    { name: "Course", url: "https://www.krmangalam.edu.in/course" },
    {
      name: "B.Tech. CSE Admission at KRMU | Direct admission in B.Tech. colleges​",
      url: "https://www.krmangalam.edu.in/course/btech-cse-admission",
    },
  ]);

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="course-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: courseSchema }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
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
