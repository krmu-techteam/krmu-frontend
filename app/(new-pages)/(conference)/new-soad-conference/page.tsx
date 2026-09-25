import CampusVenueGallery from "./components/CampusVenueGallery";
import ConferenceMenus from "./components/ConferenceMenus";
import DesignBeyondVision from "./components/DesignBeyondVision";
import HeroSection from "./components/HeroSection";
import ImportantDates from "./components/ImportantDates";
import OurNetwork from "./components/OurNetwork";
import ThematicTracks from "./components/thematicTracks";

const page = () => {
  return (
    <>
      <HeroSection />
      {/* <ConferenceMenus /> */}
      <DesignBeyondVision />
      <OurNetwork />
      <CampusVenueGallery />
      <ThematicTracks />
      <ImportantDates />
    </>
  );
};

export default page;
