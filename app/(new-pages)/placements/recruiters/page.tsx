import {
  createBreadcrumbProgSchema,
  createWebPageSchema,
} from "@/lib/api/common";
import CorporateAdvisoryBoard from "../common/student/CorporateAdvisoryBoard";
import DriveCalendar from "../common/student/DriveCalendar";
import DirectorMessage from "./comps/DirectorMessage";
import HowToRecruit from "./comps/HowToRecruit";
import PastRecruiters from "./comps/PastRecruiters";
import RecruitersHero from "./comps/RecruitersHero";
import SchoolsAndGraduatingTalent from "./comps/SchoolsAndGraduatingTalent";
import TalentByDomain from "./comps/TalentByDomain";
import Script from "next/script";

const breadcrumbSchema = createBreadcrumbProgSchema([
  { name: "Home", url: "https://www.krmangalam.edu.in/" },
  {
    name: "Placement",
    url: "https://www.krmangalam.edu.in/placement/recruiters",
  },
  {
    name: "Top Recruiters at K.R. Mangalam University | Placement",
    url: "https://www.krmangalam.edu.in/placement/recruiters",
  },
]);

const webPageSchema = createWebPageSchema({
  name: "Top Recruiters at K.R. Mangalam University | Placement",
  url: "https://www.krmangalam.edu.in/placement/recruiters",
  description:
    "Explore top recruiters at K.R. Mangalam University and discover placement opportunities with leading companies across diverse industries and career sectors.",
  aboutName: "Top Recruiters at K.R. Mangalam University | Placement",
  aboutUrl: "https://www.krmangalam.edu.in/placement/recruiters",
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
        <RecruitersHero />
        <TalentByDomain />
        {/* <SchoolsAndGraduatingTalent /> */}
        <DriveCalendar />
        <HowToRecruit />
        <PastRecruiters />
        <DirectorMessage />
        <CorporateAdvisoryBoard />
      </main>
    </>
  );
};

export default page;
