import AdmissionProcess from "./components/AdmissionProcess";
// import CourseDetails from "./components/CourseDetails";
import CourseFAQ from "./components/CourseFAQ";
import CourseProminentRecruiter from "./components/CourseProminentRecruiter";
// import CourseStructure from "./components/CourseStructure";
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
import FeeVsRoi from "./components/FeeVsRoi";
import Scholarship from "./components/Scholarship";
import StillinDoubt from "./components/StillinDoubt";
import WhyStudy from "./components/WhyStudy";
import { faqData, worldFaciltiesCourseData } from "./content";
import Script from "next/script";
import {
  createBreadcrumbProgSchema,
  createCourseSchema,
} from "@/lib/api/common";
import { generateCourseFaqSchema } from "../best-colleges-for-btech-cse/page";

export async function generateMetadata() {
  return {
    title: "B.Tech. CSE Fee Structure 2026 | B.Tech. CSE Course Fees Per Year",
    description:
      "Get complete details on B.Tech. CSE fee structure, B.Tech. CSE course fees, and B.Tech. computer science fees per year at KRMU for 2026 admission.",
    alternates: {
      canonical: "https://www.krmangalam.edu.in/course/btech-cse-fees",
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
    name: "B.Tech. CSE Fee Structure 2026 | B.Tech. CSE Course Fees Per Year",
    description:
      "Get complete details on B.Tech. CSE fee structure, B.Tech. CSE course fees, and B.Tech. computer science fees per year at KRMU for 2026 admission.",
    provider: {
      name: "K.R. Mangalam University",
      url: "https://www.krmangalam.edu.in/course/btech-cse-fees",
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
      name: "B.Tech. CSE Fee Structure 2026 | B.Tech. CSE Course Fees Per Year",
      url: "https://www.krmangalam.edu.in/course/btech-cse-fees",
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
      <WhyStudy />
      <AdmissionProcess />
      <InternationalExposure />
      <FinancialSupport />
      <Scholarship />
      <KRMUFEEStructure />
      <FeeVsRoi />
      <FacilitiesSection data={worldFacilities} />
      {/* <CourseDetails /> */}
      <CourseFAQ />
      <PreFooterCTA />
      <LocationSection />
    </>
  );
};

export default page;
