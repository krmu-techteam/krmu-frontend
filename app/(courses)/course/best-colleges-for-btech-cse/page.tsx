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
import Script from "next/script";
import { worldFaciltiesCourseData } from "./content";
import { faqData } from "./content";
import {
  createCourseSchema,
  // createProgFaqSchema,
  createBreadcrumbProgSchema,
} from "@/lib/api/common";

export async function generateMetadata() {
  return {
    title:
      "Best Colleges for B.Tech CSE in India | Top Private University – KRMU",
    description:
      "Looking for the best colleges for B.Tech CSE in India? Discover KRMU, one of the best private college for B.Tech. CSE in India with industry-focused curriculum & placement assistance.",
    alternates: {
      canonical:
        "https://www.krmangalam.edu.in/course/best-colleges-for-btech-cse",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

type FAQItem = {
  ques: string;
  ans: string;
};

export const generateCourseFaqSchema = (faqData: FAQItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.ques,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.ans,
      },
    })),
  };
};
const page = () => {
  const worldFacilities = worldFaciltiesCourseData;

  // FAQ Schema - automatically generated from the data
  const faqSchema = generateCourseFaqSchema(faqData);

  // Course Schema
  const durationISO = "P4Y";
  const courseWorkload = "Full Time";
  const courseSchema = createCourseSchema({
    name: "Best Colleges for B.Tech CSE in India | Top Private University – KRMU",
    description:
      "Looking for the best colleges for B.Tech CSE in India? Discover KRMU, one of the best private college for B.Tech. CSE in India with industry-focused curriculum & placement assistance.",
    provider: {
      name: "K.R. Mangalam University",
      url: "https://www.krmangalam.edu.in/course/best-colleges-for-btech-cse",
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
      name: "Best Colleges for B.Tech CSE in India | Top Private University – KRMU",
      url: "https://www.krmangalam.edu.in/course/best-colleges-for-btech-cse",
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
