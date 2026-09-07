import CorporateAdvisoryBoard from "../common/student/CorporateAdvisoryBoard";
import DriveCalendar from "../common/student/DriveCalendar";
import HeroSection from "../common/student/HeroSection";
import MeetCDCTeam from "../common/student/MeetCDCTeam";
import PolicyConduct from "../common/student/PolicyConduct";
import QuickEnquiry from "../common/student/QuickEnquiry";
import Registration from "../common/student/Registration";
import SelectionProcess from "../common/student/SelectionProcess";
import Trainers from "../common/student/Trainers";

const page = () => {
  return (
    <main className="bg-[#fbf8f3]">
      <HeroSection />
      <Registration />
      <DriveCalendar />
      <SelectionProcess />
      <PolicyConduct />
      <MeetCDCTeam />
      <Trainers />
      <CorporateAdvisoryBoard />
      <QuickEnquiry />
    </main>
  );
};

export default page;
 