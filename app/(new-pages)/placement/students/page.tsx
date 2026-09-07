import CorporateAdvisoryBoard from "../common/CorporateAdvisoryBoard";
import DriveCalendar from "../common/DriveCalendar";
import HeroSection from "../common/HeroSection";
import MeetCDCTeam from "../common/MeetCDCTeam";
import PolicyConduct from "../common/PolicyConduct";
import QuickEnquiry from "../common/QuickEnquiry";
import Registration from "../common/Registration";
import SelectionProcess from "../common/SelectionProcess";
import Trainers from "../common/Trainers";

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
 