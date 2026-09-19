import {
  createBreadcrumbProgSchema,
  createWebPageSchema,
} from "@/lib/api/common";
import MeetCDCTeam from "../common/MeetCDCTeam";
import QuickEnquiry from "../common/QuickEnquiry";
import CorporateAdvisoryBoard from "../common/student/CorporateAdvisoryBoard";
import DriveCalendar from "../common/student/DriveCalendar";
import Registration from "../common/student/Registration";
import SelectionProcess from "../common/student/SelectionProcess";
import {
  cdcTeamMembers,
  createPersonGraphSchema,
  interviewSuccessStories,
} from "../constant";
import Trainers from "../trainers/common/Trainers";
import CDCTeam from "./common/CDCTeam";
import PolicyConduct from "./common/PolicyConduct";
import StudentHeroSection from "./common/StudentHeroSection";
import Script from "next/script";
import { studentStories } from "../common/StudentSuccessStories";
import { trainers } from "../trainers/constant";
import { advisoryBoardData } from "@/lib/constants/advisory-board-data";
import Divider from "../common/Divider";

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

const breadcrumbSchema = createBreadcrumbProgSchema([
  { name: "Home", url: "https://www.krmangalam.edu.in/" },
  {
    name: "Placement",
    url: "https://www.krmangalam.edu.in/placement/students",
  },
  {
    name: "K.R. Mangalam University Placements for Students",
    url: "https://www.krmangalam.edu.in/placement/students",
  },
]);

const webPageSchema = createWebPageSchema({
  name: "K.R. Mangalam University Placements for Students",
  url: "https://www.krmangalam.edu.in/placement/students",
  description:
    "Explore K.R. Mangalam University placement opportunities, student placements, career support, recruiters, and industry opportunities for students.",
  aboutName: "K.R. Mangalam University Placements for Students",
  aboutUrl: "https://www.krmangalam.edu.in/placement/students",
});

const personSchema = createPersonGraphSchema(
  cdcTeamMembers.map((member) => ({
    name: member.name,
    jobTitle: member.designation,
    email: member.email,
    image: member.image,
    worksFor: {
      name: "K.R. Mangalam University",
      url: "https://www.krmangalam.edu.in/",
    },
  })),
  trainers.map((trainer) => ({
    name: trainer.name,
    jobTitle: trainer.designation,
    image: `https://www.krmangalam.edu.in${trainer.image}`,

    worksFor: {
      name: "K.R. Mangalam University",
      url: "https://www.krmangalam.edu.in/",
      type: "CollegeOrUniversity",
    },
  })),

  advisoryBoardData.map((member) => ({
    name: member.name,
    jobTitle: member.title,
    image: `https://www.krmangalam.edu.in${member.image}`,

    // worksFor: {
    //   name: member,
    //   type: "Organization",
    // },
  })),
);

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
      <Script
        id="personSchema-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: personSchema }}
      />
      <main className="bg-[#fbf8f3] font-poppins">
        <StudentHeroSection />
        <div className="max-w-7xl">
          <Divider borderColor="#ccc" />
        </div>
        <Registration />
        <div className="max-w-7xl mx-auto">
          <Divider borderColor="#ccc" />
        </div>
        <DriveCalendar />
        <div className="max-w-7xl">
          <Divider borderColor="#ccc" />
        </div>
        <SelectionProcess />
        <div className="max-w-7xl">
          <Divider borderColor="#ccc" />
        </div>
        <PolicyConduct />
        <div className="max-w-7xl">
          <Divider borderColor="#ccc" />
        </div>
        {/* <CDCTeam /> */}
        <MeetCDCTeam teamMembers={cdcTeamMembers} />
        <div className="max-w-7xl">
          <Divider borderColor="#ccc" />
        </div>
        <Trainers />
        <div className="max-w-7xl">
          <Divider borderColor="#ccc" />
        </div>
        <CorporateAdvisoryBoard />
        <div className="max-w-7xl">
          <Divider borderColor="#ccc" />
        </div>
        <QuickEnquiry />
      </main>
    </>
  );
};

export default page;
