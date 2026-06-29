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
import { lifeInternationalAdmissionData } from "./constant";
import FAQSection from "./components/FAQSection";
import SingleImage from "./components/SingleImage";
import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";

const page = () => {
  const lifeData = lifeInternationalAdmissionData;
  return (
    <>
      <HeroSection />
      <Stats />
      <RankingRecognition />
      {/* <SuccessNetwork /> */}

      <WhyStudy />
      <WhyChoose />
      <PatentCampusResearch />
      <GlobalLearning />
      <StudyInGurgaon />
      <BenefitOfStudy />
      <SchoolProgrammesDiscipline />
      <ProgrammeTabs />
      <ScholarshipSection />
      <WordClassFacility />
      <FAQSection />
      <SingleImage />
      {/* <CTASection /> */}
      
    </>
  );
};

export default page;
