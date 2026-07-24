import { Poppins } from "next/font/google";
import HeroSection from "./comps/HeroSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BTechCSERoboticsAI = () => {
  return (
    <div className={poppins.className}>
      <HeroSection />
    </div>
  );
};

export default BTechCSERoboticsAI;