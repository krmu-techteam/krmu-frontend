import { Poppins } from "next/font/google";
import HeroSection from "./comps/HeroSection";
import ConnectingEligibility from "./comps/ConnectingEligibility";
import BtechCSERoboticsVideo from "./comps/BtechCSERoboticsVideo";
import JensenSection from "./comps/JensenSection";
import ProgrammeKeyFeature from "./comps/ProgrammeKeyFeature";

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
    </div>
  );
};

export default BTechCSERoboticsAI;
