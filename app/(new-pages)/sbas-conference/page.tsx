import AboutKRMU from "./comps/AboutKRMU";
import AboutTheConference from "./comps/AboutTheConference";
import CallForPapers from "./comps/CallForPapers";
import ConferenceMenu from "./comps/ConferenceMenu";
import ConferenceTracks from "./comps/ConferenceTracks";
import HeroSection from "./comps/HeroSection";
import RegistrationFee from "./comps/RegistrationFee";
import Timeline from "./comps/Timeline";

const page = () => {
  return (
    <main className="font-inter bg-[#f6f4ef] sbas-conf-p">
      <HeroSection />
      <ConferenceMenu />
      <AboutTheConference />
      <AboutKRMU />
      <ConferenceTracks />
      <Timeline />
      <CallForPapers />
      <RegistrationFee />
    </main>
  );
};

export default page;
