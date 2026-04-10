import StickyMobileBar from "../commonComponent/StickyMobileBar";
import AdmissionsSection from "./components/AdmissionsSection";
import AlignedWithSection from "./components/AlignedWithSection";
import ApprenticeshipSection from "./components/ApprenticeshipSection";
import CampusFacultyImages from "./components/CampusFacultyImages";
import CurriculumSection from "./components/CurriculumSection";
import FaqSection from "./components/FaqSection";
import FeesSection from "./components/FeesSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import OrganisationsSection from "./components/OrganisationsSection";
import PathwaySection from "./components/PathwaySection";
import PlacementStories from "./components/PlacementStories";
import RecruitersMarquee from "./components/RecruitersMarquee";
import SemesterSection from "./components/SemesterSection";
import SixStepsSection from "./components/SixStepsSection";
import StudentsImage from "./components/StudentsImage";
import TracksSection from "./components/TracksSection";
import WhySection from "./components/WhySection";
import {
  Hero,
  alignedWithSection,
  apprenticeshipSection,
  curriculumSection,
  faqSection,
  heroMarqueeData,
  heroStatCards,
  organisationsSection,
  pathwaySection,
  placementData,
  prominentRecruiters,
  semesterSection,
  sixStepsSection,
  tracksSection,
  whySection,
} from "./content";

const BscFinance2026Page = () => {
  return (
    <main>
      <HeroSection
        hero={Hero}
        statCards={heroStatCards}
        marqueeData={heroMarqueeData}
      />
      <RecruitersMarquee recruiters={prominentRecruiters} />
      <PlacementStories data={placementData} />
      <WhySection data={whySection} />
      <ApprenticeshipSection data={apprenticeshipSection} />
      <TracksSection data={tracksSection} />
      <StudentsImage />
      <AlignedWithSection data={alignedWithSection} />
      <OrganisationsSection data={organisationsSection} />
      <CurriculumSection data={curriculumSection} />
      <PathwaySection data={pathwaySection} />
      <SemesterSection data={semesterSection} />
      <CampusFacultyImages />
      <AdmissionsSection />
      <SixStepsSection data={sixStepsSection} />
      <FeesSection />
      <FaqSection data={faqSection} />
      <FooterSection />
      <StickyMobileBar
        phoneNumber="+91 9311411717"
        formId="047a23de933bd996c4c01578fad16790"
      />
    </main>
  );
};

export default BscFinance2026Page;
