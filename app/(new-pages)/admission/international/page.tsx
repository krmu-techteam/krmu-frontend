import RankingRecognition from "./components/RankingRecognition";
import SuccessNetwork from "./components/SuccessNetwork";
import WhyStudy from "./components/WhyStudy";
import WhyChoose from "./components/WhyChoose";
import PatentCampusResearch from "./components/PatentCampusResearch";
import GlobalLearning from "./components/GlobalLearning";
import StudyInGurgaon from "./components/StudyInGurgaon";
import BenefitOfStudy from "./components/BenefitOfStudy";
import SchoolProgrammesDiscipline from "./components/SchoolProgrammesDiscipline";
import ProgrammeTabs from "./components/ProgrammeTabs";
import ScholarshipSection from "./components/ScholarshipSection";
import WordClassFacility from "./components/WordClassFacility";
import { beginHubData, WorldClassData } from "./constant";
import FAQSection from "./components/FAQSection";
import SingleImage from "./components/SingleImage";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import BeginYour from "./components/BeginYour";
import WorldClass from "./components/WorldClass";

const page = () => {
  const beginData = beginHubData;
  const worldFacilityData = WorldClassData;
  return (
    <>
      <div className="overflow-hidden">
        <HeroSection formId="6798d0b6e4d6bb9947d6aacc2d86256c" />
      </div>
      <Stats />
      <RankingRecognition />
      <SuccessNetwork />
      <WhyStudy />
      <div className="overflow-hidden">
        <WhyChoose />
      </div>
      <PatentCampusResearch />
      <GlobalLearning />
      <StudyInGurgaon />
      <BenefitOfStudy />
      <SchoolProgrammesDiscipline />
      <ProgrammeTabs />
      <ScholarshipSection />
      <WorldClass data={worldFacilityData} />
      <WordClassFacility />
      <FAQSection />
      <SingleImage />
      <BeginYour data={beginData} formId={`6798d0b6e4d6bb9947d6aacc2d86256c`} />
      {/* <CTASection /> */}
    </>
  );
};

export default page;
