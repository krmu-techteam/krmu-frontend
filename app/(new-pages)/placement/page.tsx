import {
  createBreadcrumbProgSchema,
  createWebPageSchema,
} from "@/lib/api/common";
import HeroSection from "./common/HeroSection";
import InterviewReady from "./common/InterviewReady";
import InterviewSuccessStories from "./common/InterviewSuccessStories";
import MeetCDCTeam from "./common/MeetCDCTeam";
import OurTopRecruiter from "./common/OurTopRecruiter";
import OutcomesBySchool from "./common/OutcomesBySchool";
import PlacementHighlights from "./common/PlacementHighlights";
import PlacementResources from "./common/PlacementResources";
import QuickEnquiry from "./common/QuickEnquiry";
import {
  studentStories,
  StudentSuccessStories,
} from "./common/StudentSuccessStories";
import {
  cdcTeamMembers,
  createPersonGraphSchema,
  interviewSuccessStories,
} from "./constant";
import Script from "next/script";
import Divider from "./common/Divider";

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
// Breadcrumb Schema
const breadcrumbSchema = createBreadcrumbProgSchema([
  { name: "Home", url: "https://www.krmangalam.edu.in/" },
  { name: "Placement", url: "https://www.krmangalam.edu.in/placement" },
  {
    name: "Placements Overview - K.R. Mangalam University",
    url: "https://www.krmangalam.edu.in/placement",
  },
]);

const webPageSchema = createWebPageSchema({
  name: "Placements Overview - K.R. Mangalam University",
  url: "https://www.krmangalam.edu.in/placement",
  description:
    "Discover KRMU's placement success with 800+ recruiters, ₹56.6 LPA highest salary, and comprehensive training for students in diverse disciplines.",
  aboutName: "Placements Overview - K.R. Mangalam University",
  aboutUrl: "https://www.krmangalam.edu.in/placement",
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

  studentStories.map((student) => ({
    name: student.name,
    description: `${student.batch} graduate of K.R. Mangalam University.`,
    image: `https://www.krmangalam.edu.in${student.image}`,
    alumniOf: {
      name: "K.R. Mangalam University",
      url: "https://www.krmangalam.edu.in/",
    },
  })),

  interviewSuccessStories.map((story) => ({
    name: story.name,
    description: `${story.course} graduate of K.R. Mangalam University, placed at Ferrari with a package of ₹${story.package}.`,
    image: story.image,

    alumniOf: {
      name: "K.R. Mangalam University",
      url: "https://www.krmangalam.edu.in/",
      type: "CollegeOrUniversity",
    },

    worksFor: {
      name: "Ferrari",
      type: "Organization",
    },
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
      <main className="bg-[#fbf8f3]">
        <HeroSection />
        <PlacementHighlights />
        <OutcomesBySchool />
        <StudentSuccessStories />
        <OurTopRecruiter />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div> 
        <InterviewReady />
        <div className="max-w-7xl mx-auto">
          <Divider /> 
        </div>
        <InterviewSuccessStories />
        <PlacementResources />
        <MeetCDCTeam teamMembers={cdcTeamMembers} />
        <QuickEnquiry />
      </main>
    </>
  );
};

export default page;
