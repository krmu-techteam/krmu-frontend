import QuickEnquiry from "../common/QuickEnquiry";
import AveragePackageGrowth from "./common/AveragePackageGrowth";
import Definitions from "./common/Definitions";
import HeroSection from "./common/HeroSection";
import HiringTrendsAndReports from "./common/HiringTrendsAndReports";
import PlacementRecords from "./common/PlacementRecords";
import SchoolWiseCohort from "./common/SchoolWiseCohort";
import SystemWideTrend from "./common/SystemWideTrend";

const page = () => {
  return (
    <main className="bg-[#fbf8f3] font-poppins">
      <HeroSection />
      <SystemWideTrend />
      <AveragePackageGrowth />
      <SchoolWiseCohort />
      <HiringTrendsAndReports />
      <Definitions />
      <PlacementRecords /> 
      <QuickEnquiry />
    </main>
  );
};

export default page;
