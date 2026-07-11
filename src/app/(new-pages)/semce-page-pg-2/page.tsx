import YearTimeline from "../semce-page-pg/comp/YearTimeline";
import BiggestBrand from "./comp/BiggestBrand";
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
      <YearTimeline />
      <ProgrammeSection />
      <WhatWillYouStudy />
      <LearnByDoingSection />
      <CareerTabsSection />
      <FacultySection />
      <BiggestBrand />
      <EligibilityAdmissionFees />
      <PostgraduateCreateSection />
      <FaqSection />
    </>
  );
};

export default page;
