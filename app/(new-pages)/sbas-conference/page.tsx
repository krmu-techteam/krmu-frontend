import AboutKRMU from "./comps/AboutKRMU";
import AboutTheConference from "./comps/AboutTheConference";
import CallForPapers from "./comps/CallForPapers";
import ConferenceCommittees from "./comps/ConferenceCommittees";
import ConferenceFooter from "./comps/ConferenceFooter";
import ConferenceMenu from "./comps/ConferenceMenu";
import ConferenceSteeringCommittee from "./comps/ConferenceSteeringCommittee";
import ConferenceSteeringCommittee2 from "./comps/ConferenceSteeringCommittee2";
import ConferenceTracks from "./comps/ConferenceTracks";
import HeroSection from "./comps/HeroSection";
import OrganizingCommitttee from "./comps/OrganizingCommitttee";
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
      <ConferenceSteeringCommittee />
      <ConferenceSteeringCommittee2 />
      <OrganizingCommitttee />
      <ConferenceCommittees />
      <ConferenceFooter />
    </main>
  ); 
};

export default page;
