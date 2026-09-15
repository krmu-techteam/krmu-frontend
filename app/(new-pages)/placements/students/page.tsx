import MeetCDCTeam from "../common/MeetCDCTeam";
import QuickEnquiry from "../common/QuickEnquiry";
import CorporateAdvisoryBoard from "../common/student/CorporateAdvisoryBoard";
import DriveCalendar from "../common/student/DriveCalendar";
import Registration from "../common/student/Registration";
import SelectionProcess from "../common/student/SelectionProcess";
import { cdcTeamMembers } from "../constant";
import Trainers from "../trainers/common/Trainers";
import CDCTeam from "./common/CDCTeam";
import PolicyConduct from "./common/PolicyConduct";
import StudentHeroSection from "./common/StudentHeroSection";

export async function generateMetadata() {
  return {
    title: "K.R. Mangalam University Placements for Students",
    description:
      "Explore K.R. Mangalam University placement opportunities, student placements, career support, recruiters, and industry opportunities for students.",
    keywords:
      "KRMU student placements, KRMU placement for students, K.R. Mangalam University student placements, KRMU campus placements",
    alternates: {
      canonical: "https://www.krmangalam.edu.in/placements/students",
    },
    robots: {
      index: true,
      follow: true,
    },
    // Open Graph
    openGraph: {
      title: "K.R. Mangalam University Placements for Students",

      description:
        "Explore K.R. Mangalam University placement opportunities, student placements, career support, recruiters, and industry opportunities for students.",

      url: "https://www.krmangalam.edu.in/placements/students",

      siteName: "K.R. Mangalam University",

      type: "website",

      locale: "en_IN",

      images: [
        {
          url: "https://www.krmangalam.edu.in/images/krmu-naac-logo.webp",
          width: 1200,
          height: 630,
          alt: "K.R. Mangalam University Students",
        },
      ],
    },

    // Twitter / X
    twitter: {
      card: "summary_large_image",

      title: "K.R. Mangalam University Placements for Students",

      description:
        "Explore K.R. Mangalam University placement opportunities, student placements, career support, recruiters, and industry opportunities for students.",

      images: ["https://www.krmangalam.edu.in/images/krmu-naac-logo.webp"],
    },
  };
}

const page = () => {
  return (
    <main className="bg-[#fbf8f3] font-poppins">
      <StudentHeroSection />
      <Registration />
      <DriveCalendar />
      <SelectionProcess />
      <PolicyConduct />
      {/* <CDCTeam /> */}
      <MeetCDCTeam teamMembers={cdcTeamMembers} />
      <Trainers />
      <CorporateAdvisoryBoard />
      <QuickEnquiry />
    </main>
  );
};

export default page;
