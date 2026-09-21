import {
  createBreadcrumbProgSchema,
  createWebPageSchema,
} from "@/lib/api/common";
import QuickEnquiry from "../common/QuickEnquiry";
import AveragePackageGrowth from "./common/AveragePackageGrowth";
import Definitions from "./common/Definitions";
import HeroSection from "./common/HeroSection";
import HiringTrendsAndReports from "./common/HiringTrendsAndReports";
import SchoolWiseCohort from "./common/SchoolWiseCohort";
import SystemWideTrend from "./common/SystemWideTrend";
import Script from "next/script";
import Divider from "../common/Divider";
import PlacementRecords from "./common/PlacementRecords";

export async function generateMetadata() {
  return {
    title: "K.R. Mangalam University Placement Records & Statistics",
    description:
      "Explore KRMU placement records, salary packages, top recruiters, and placement statistics showcasing career opportunities for K.R. Mangalam University students.",
    keywords:
      "KRMU Placement Statistics, KRMU Placement Highlights, Top Recruiters at KRMU, Highest & Average Salary Packages, School-Wise Placement Records, KRMU Student Placement Success Stories",
    alternates: {
      canonical: "https://krmangalam.edu.in/placements/records",
    },
    robots: { 
      index: true,
      follow: true,
    },
    // Open Graph
    openGraph: {
      title: "K.R. Mangalam University Placement Records & Statistics",

      description:
        "KRMU Placement Statistics, KRMU Placement Highlights, Top Recruiters at KRMU, Highest & Average Salary Packages, School-Wise Placement Records, KRMU Student Placement Success Stories",

      url: "https://krmangalam.edu.in/placements/records",

      siteName: "K.R. Mangalam University",

      type: "website",

      locale: "en_IN",

      images: [
        {
          url: "https://www.krmangalam.edu.in/images/krmu-naac-logo.webp",
          width: 1200,
          height: 630,
          alt: "K.R. Mangalam University Placements",
        },
      ],
    },

    // Twitter / X
    twitter: {
      card: "summary_large_image",

      title: "Placements Records - K.R. Mangalam University",

      description:
        "Explore KRMU placement records, salary packages, top recruiters, and placement statistics showcasing career opportunities for K.R. Mangalam University students.",

      images: ["https://www.krmangalam.edu.in/images/krmu-naac-logo.webp"],
    },
  };
}

const breadcrumbSchema = createBreadcrumbProgSchema([
  { name: "Home", url: "https://www.krmangalam.edu.in/" },
  { name: "Placement", url: "https://www.krmangalam.edu.in/placement" },
  {
    name: "K.R. Mangalam University Placement Records & Statistics",
    url: "https://www.krmangalam.edu.in/placements/records",
  },
]);

const webPageSchema = createWebPageSchema({
  name: "K.R. Mangalam University Placement Records & Statistics",
  url: "https://www.krmangalam.edu.in/placements/records",
  description:
    "Explore KRMU placement records, salary packages, top recruiters, and placement statistics showcasing career opportunities for K.R. Mangalam University students.",
  aboutName: "K.R. Mangalam University Placement Records & Statistics",
  aboutUrl: "https://www.krmangalam.edu.in/placements/records",
});

const page = () => {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbSchema }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: webPageSchema }}
      />
      <main className="bg-[#fbf8f3] font-poppins">
        <HeroSection />
        <SystemWideTrend />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div>
        <AveragePackageGrowth />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div>
        <SchoolWiseCohort />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div> 
        <HiringTrendsAndReports />
        <div className="max-w-7xl mx-auto">
          <Divider /> 
        </div>
        <Definitions />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div>
        <PlacementRecords />
        <QuickEnquiry />
      </main>
    </>
  );
};

export default page;
