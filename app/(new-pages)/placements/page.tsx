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

const page = () => {
  return (
    <main className="bg-[#fbf8f3]">
      <HeroSection />
      <PlacementHighlights />
      <OutcomesBySchool />
      <InterviewReady />
      <StudentSuccessStories />
      <OurTopRecruiter />
      <InterviewSuccessStories />
      <PlacementResources />
      <MeetCDCTeam /> 
      <QuickEnquiry />
    </main>
  );
};

export default page;
