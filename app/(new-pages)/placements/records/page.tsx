import QuickEnquiry from "../common/QuickEnquiry";
import AveragePackageGrowth from "./common/AveragePackageGrowth";
import Definitions from "./common/Definitions";
import HeroSection from "./common/HeroSection";
import HiringTrendsAndReports from "./common/HiringTrendsAndReports";
import PlacementRecords from "./common/PlacementRecords";
import SchoolWiseCohort from "./common/SchoolWiseCohort";
import SystemWideTrend from "./common/SystemWideTrend";

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

const page = () => {
  return (
    <main className="bg-[#fbf8f3] font-poppins">
      <HeroSection />
      <SystemWideTrend />
      <AveragePackageGrowth />
      <SchoolWiseCohort />
      <HiringTrendsAndReports />
      <Definitions />
      <PlacementRecords />
      <QuickEnquiry />
    </main>
  );
};

export default page;
