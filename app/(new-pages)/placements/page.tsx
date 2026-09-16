import HeroSection from "./common/HeroSection";
import InterviewReady from "./common/InterviewReady";
import InterviewSuccessStories from "./common/InterviewSuccessStories";
import MeetCDCTeam from "./common/MeetCDCTeam";
import OurTopRecruiter from "./common/OurTopRecruiter";
import OutcomesBySchool from "./common/OutcomesBySchool";
import PlacementHighlights from "./common/PlacementHighlights";
import PlacementResources from "./common/PlacementResources";
import QuickEnquiry from "./common/QuickEnquiry";
import { StudentSuccessStories } from "./common/StudentSuccessStories";
import { cdcTeamMembers } from "./constant";

export async function generateMetadata() {
  return {
    title: "Placements Overview - K.R. Mangalam University",
    description:
      "Discover KRMU's placement success with 800+ recruiters, ₹56.6 LPA highest salary, and comprehensive training for students in diverse disciplines.",
    keywords:
      "K.R. Mangalam University placements, KRMU placements, university placements in Gurgaon, placement assistance, highest package at KRMU, campus placements, KRMU recruiters",
    alternates: {
      canonical: "https://www.krmangalam.edu.in/placement",
    },
    robots: {
      index: true,
      follow: true,
    },
    // Open Graph
    openGraph: {
      title: "Placements Overview - K.R. Mangalam University",

      description:
        "Discover KRMU's placement success with 800+ recruiters, ₹56.6 LPA highest salary, and comprehensive training for students in diverse disciplines.",

      url: "https://www.krmangalam.edu.in/placement",

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

      title: "Placements Overview - K.R. Mangalam University",

      description:
        "Discover KRMU's placement success with 800+ recruiters, ₹56.6 LPA highest salary, and comprehensive training for students in diverse disciplines.",

      images: ["https://www.krmangalam.edu.in/images/krmu-naac-logo.webp"],
    },
  };
}

const page = () => {
  return ( 
    <main className="bg-[#fbf8f3]">
      <HeroSection />
      <PlacementHighlights />
      <OutcomesBySchool />
      <StudentSuccessStories />
      <OurTopRecruiter />
      <InterviewReady />
      <InterviewSuccessStories />
      <PlacementResources />
      <MeetCDCTeam teamMembers={cdcTeamMembers} />
      <QuickEnquiry />
    </main>
  );
};

export default page;
