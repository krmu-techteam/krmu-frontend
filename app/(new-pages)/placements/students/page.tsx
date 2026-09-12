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
