import CorporateAdvisoryBoard from "../common/student/CorporateAdvisoryBoard";
import DriveCalendar from "../common/student/DriveCalendar";
import DirectorMessage from "./comps/DirectorMessage";
import HowToRecruit from "./comps/HowToRecruit";
import PastRecruiters from "./comps/PastRecruiters";
import RecruitersHero from "./comps/RecruitersHero";
import SchoolsAndGraduatingTalent from "./comps/SchoolsAndGraduatingTalent";

const page = () => {
  return (
    <main className="bg-[#fbf8f3] font-poppins">
      <RecruitersHero />
      <SchoolsAndGraduatingTalent />
      <DriveCalendar />
      <HowToRecruit />
      <PastRecruiters />
      <DirectorMessage />
      <CorporateAdvisoryBoard />
    </main>
  );
};

export default page;
