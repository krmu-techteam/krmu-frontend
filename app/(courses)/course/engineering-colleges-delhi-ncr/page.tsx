import Script from "next/script";
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
import QuickComparison from "./components/QuickComparison";
import Scholarship from "./components/Scholarship";
import StillinDoubt from "./components/StillinDoubt";
import WhyStudy from "./components/WhyStudy";
import { worldFaciltiesCourseData } from "./content";
import {
  createBreadcrumbProgSchema,
  createCourseSchema,
} from "@/lib/api/common";
import { generateCourseFaqSchema } from "../best-colleges-for-btech-cse/page";
import { faqData } from "../best-colleges-for-btech-cse/content";

export async function generateMetadata() {
  return {
    title: "Best Engineering Colleges in Delhi NCR | B.Tech Admissions 2026",
    description:
      "KRMU is among the top engineering colleges in Delhi NCR, offering industry-led B.Tech programs in AI/ML, Data & Cyber Security in the Delhi NCR region.",
    alternates: {
      canonical:
        "https://www.krmangalam.edu.in/course/engineering-colleges-delhi-ncr",
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
    name: "Best Engineering Colleges in Delhi NCR | B.Tech Admissions 2026",
    description:
      "KRMU is among the top engineering colleges in Delhi NCR, offering industry-led B.Tech programs in AI/ML, Data & Cyber Security in the Delhi NCR region.",
    provider: {
      name: "K.R. Mangalam University",
      url: "https://www.krmangalam.edu.in/course/engineering-colleges-delhi-ncr",
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
      name: "Best Engineering Colleges in Delhi NCR | B.Tech Admissions 2026",
      url: "https://www.krmangalam.edu.in/course/engineering-colleges-delhi-ncr",
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
