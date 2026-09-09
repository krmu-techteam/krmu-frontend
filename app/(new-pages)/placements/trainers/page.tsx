import BootcampStats from "./common/BootcampStats";
import CareerAccelerationCTA from "./common/CareerAccelerationCTA";
import PlacementHighlights from "./common/PlacementHighlights";
import SkilledPartners from "./common/SkilledPartners";
import Trainers from "./common/Trainers";
import TrainersHeroSection from "./common/TrainersHeroSection";
import TrainingJourney from "./common/TrainingJourney";
import TrainingMatrix from "./common/TrainingMatrix";
import TrainingModules from "./common/TrainingModules";

const page = () => {
  return (
    <main className="bg-[#fbf8f3] font-poppins">
      <TrainersHeroSection />
      <PlacementHighlights />
      <TrainingJourney />
      <TrainingModules />
      <TrainingMatrix />
      <BootcampStats />
      <Trainers />
      <SkilledPartners />
      <CareerAccelerationCTA />
    </main>
  );
};

export default page;
