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
      <BeyondTheClassroom />
    </div>
  );
};

export default BTechCSERoboticsAI;
