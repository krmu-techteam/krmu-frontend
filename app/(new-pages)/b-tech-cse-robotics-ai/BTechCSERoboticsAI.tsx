import { Poppins } from "next/font/google";
import HeroSection from "./comps/HeroSection";
import ConnectingEligibility from "./comps/ConnectingEligibility";
import BtechCSERoboticsVideo from "./comps/BtechCSERoboticsVideo";
import JensenSection from "./comps/JensenSection";
import ProgrammeKeyFeature from "./comps/ProgrammeKeyFeature";
import AdmissionProcess from "./comps/AdmissionProcess";
import CurriculumSyllabus from "./comps/CurriculumSyllabus";
import LabFacilties from "./comps/LabFacilties";
import AIOffers from "./comps/AIOffers";
import BeyondTheClassroom from "./comps/BeyondTheClassroom";
import CareerProspects from "./comps/CareerProspects";
import FinancialAssistance from "./comps/FinancialAssistance";
import Scholarship2026 from "./comps/Scholarship2026";
import FAQ from "./comps/FAQ";
import ExploreOtherProgramme from "./comps/ExploreOtherProgramme";
import LookingToSecure from "./comps/LookingToSecure";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BTechCSERoboticsAI = () => {
  return (
    <div className={poppins.className}>
      <HeroSection />
      <ConnectingEligibility />
      <BtechCSERoboticsVideo />
      <JensenSection />
      <ProgrammeKeyFeature />
      <AdmissionProcess />
      <CurriculumSyllabus />
      <LabFacilties />
      <AIOffers />
      <div className="bg-[linear-gradient(180deg,#FFFFFF_1.44%,#F2E7CD_47.6%,#FFFFFF_100%)]">
        {/* <BeyondTheClassroom /> */}
        <CareerProspects />
        <FinancialAssistance />
        <Scholarship2026 />
      </div>
      <FAQ />
      <ExploreOtherProgramme />
      <LookingToSecure />
    </div>
  );
};

export default BTechCSERoboticsAI;
