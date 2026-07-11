import CareerTabsSection from "./comp/CareerTabsSection";
import EligibilityAdmissionFees from "./comp/EligibilityAdmissionFees";
import FacultySection from "./comp/FacultySection";
import FaqSection from "./comp/FaqSection";
import HeroSection from "./comp/HeroSection";
import LearnByDoingSection from "./comp/LearnByDoingSection";
import PostgraduateCreateSection from "./comp/PostgraduateCreateSection";
import ProgrammeSection from "./comp/ProgrammeSection";
import WhatWillYouStudy from "./comp/WhatWillYouStudy";

const page = () => {
  return (
    <>
      <HeroSection />
      <ProgrammeSection />
      <WhatWillYouStudy />
      <LearnByDoingSection />
      <CareerTabsSection />
      <FacultySection />
      <PostgraduateCreateSection />
      <EligibilityAdmissionFees />
      <FaqSection />
    </>
  );
};

export default page;
