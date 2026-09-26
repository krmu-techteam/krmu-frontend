import CallForCollaboration from "./components/CallForCollaboration";
import CampusVenueGallery from "./components/CampusVenueGallery";
import ConferenceCommittee from "./components/ConferenceCommittee";
import ConferenceMenus from "./components/ConferenceMenus";
import ContactUs from "./components/ContactUs";
import DesignBeyondVision from "./components/DesignBeyondVision";
import HeroSection from "./components/HeroSection";
import ImportantDates from "./components/ImportantDates";
import OurNetwork from "./components/OurNetwork";
import PastAdvisoryBoard from "./components/PastAdvisoryBoard";
import Registration from "./components/Registration";
import SubmissionGuidelines from "./components/SubmissionGuidelines";
import ThematicTracks from "./components/thematicTracks";

const page = () => {
  return (
    <>
      <HeroSection />
      <ConferenceMenus />
      <DesignBeyondVision />
      <OurNetwork />
      <CampusVenueGallery />
      <ThematicTracks />
      <ImportantDates />
      <SubmissionGuidelines />
      <Registration />
      <ConferenceCommittee />
      <PastAdvisoryBoard />
      <CallForCollaboration />
      <ContactUs />
    </>
  );
};

export default page;
