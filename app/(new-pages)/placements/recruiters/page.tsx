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
import Divider from "../common/Divider";

const breadcrumbSchema = createBreadcrumbProgSchema([
  { name: "Home", url: "https://www.krmangalam.edu.in/" },
  {
    name: "Placement",
    url: "https://www.krmangalam.edu.in/placements/recruiters",
  },
  {
    name: "Top Recruiters at K.R. Mangalam University | Placement",
    url: "https://www.krmangalam.edu.in/placements/recruiters",
  },
]);

const webPageSchema = createWebPageSchema({
  name: "Top Recruiters at K.R. Mangalam University | Placement",
  url: "https://www.krmangalam.edu.in/placements/recruiters",
  description:
    "Explore top recruiters at K.R. Mangalam University and discover placement opportunities with leading companies across diverse industries and career sectors.",
  aboutName: "Top Recruiters at K.R. Mangalam University | Placement",
  aboutUrl: "https://www.krmangalam.edu.in/placements/recruiters",
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
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div>
        <DriveCalendar />
        <HowToRecruit />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div>
        <PastRecruiters />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div>
        <DirectorMessage />
        <div className="max-w-7xl mx-auto">
          <Divider />
        </div>
        <CorporateAdvisoryBoard />
      </main>
      {/* <SchoolsAndGraduatingTalent /> */}
    </>
  );
};

export default page;
