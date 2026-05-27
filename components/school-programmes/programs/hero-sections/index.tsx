import { HeroSection } from "@/lib/types/school-programme";
import { StrapiMedia } from "@/lib/types/common";
import ProgramHeroCinematic from "./ProgramHeroCinematic";
import ProgramHeroDefault from "./ProgramHeroDefault";

type Props = {
  title: string;
  highlightitle: string;
  heroSection: HeroSection;
  formId?: string;
  slug: string;
  dreamcareerSection?: {
    highestpackagenum: string;
    highestpackagetitle: string;
    campusrecruitersnum: string;
    campusrecruitertitle: string;
    placementassistnum: string;
    placementassisttitle: string;
    heading: string;
  };
  logos?: StrapiMedia[];
};

const ProgramHero = (props: Props) => {
  const { slug } = props;

  switch (slug) {
    case "bba-hr":
    case "b-tech-cse":
    case "btech-cse-ai-ml":
    case "btech-cse-cyber-security":
    case "btech-cse-in-data-science":
    case "btech-full-stack-development":
    case "btech-cse-ui-ux":
    case "bca-ai-data-science":
    case "bca-hons-hons-with-research-cyber-security":
    case "bca-cyber-security":
    case "bca-ai-research":
    case "bsc-hons-computer-science":
    case "bsc-hons-cyber-security":
    case "b-tech-cse-robotics-ai":
    case "btech-cse-cloud-computing":
    case "b-tech-computer-science-and-engineering-semiconductor-design":
    case "master-computer-application-mca":
    case "mca-ai-ml":
    case "mtech-computer-science":
    case "phd-computer-science-engineering":
    case "phd-mechanical-engineering":
    case "bba-hons-hr-research":
    case "bba-hons-hons-with-research-hr-marketing-finance-international-business-travel-and-tourism-semester-abroad-programme-with-university-of-east-anglia-uea-norwich-uk":
    case "bba-marketing":
    case "bba-hons-with-research-marketing":
    case "bba-hr-marketing-finance-international-business-travel-and-tourism-semester-abroad-programme-with-university-of-east-anglia-uea-norwich-uk":
    case "bba-finance":
    case "bba-hons-finance-research":
    case "bba-hons-hons-with-research-digital-marketing":
    case "bba-digital-marketing":
    case "bba-international-business":
    case "bba-hons-international-business-research":
    case "bba-travel-tourism-management":
    case "bba-hons-travel-tourism-research":
    case "bba-business-intelligence-and-analytics":
    case "bba-entrepreneurship":
    case "bba-hons-entrepreneurship-research":
    case "bba-international-accounting-and-finance":
    case "bba-hons-international-accounting-and-finance-research":
    case "bba-logistics-supply-chain-management":
    case "bba-hons-logistics-supply-chain-management-research":
    case "bcom-hons-2":
    case "bcom-hons-research":
    case "bcom-international-accounting-finance-acca-2":
    case "bcom-hons-international-accounting-finance-acca-research":
    case "integrated-bba-mba":
    case "bcom":
    case "mba-fintech":
    case "mba":
    case "mba-digital-marketing":
    case "phd-management":
    case "phd-commerce":
    case "bba-llb-hons":
    case "ba-llb-hons": 
    case "llb-hons":
    case "llm-masters-law":
    case "phd-law":
    case "bpharma":
      return <ProgramHeroCinematic {...props} />;
    default:
      return <ProgramHeroDefault {...props} />;
  }
};

export default ProgramHero;
