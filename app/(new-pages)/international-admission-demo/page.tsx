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
import { beginHubData, lifeInternationalAdmissionData } from "./constant";
import FAQSection from "./components/FAQSection";
import SingleImage from "./components/SingleImage";
import CTASection from "./components/CTASection";
import HeroSection from "./components/HeroSection";
import Stats from "./components/Stats";
import BeginYour from "./components/BeginYour";

const page = () => {
  const lifeData = lifeInternationalAdmissionData;
  const beginData = beginHubData;
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
      <BeginYour data={beginData} formId={`05a47f33fc1a48e7f6b357b1aaa542c7`} />
      {/* <CTASection /> */}
      
    </>
  );
};

export default page;
