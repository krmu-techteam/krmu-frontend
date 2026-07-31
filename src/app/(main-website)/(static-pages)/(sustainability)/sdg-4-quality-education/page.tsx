import { Metadata } from "next";
import { Sdg4QualityEducationSection } from "@/presentation/static-pages/sustainability/sdg-4-quality-education";

export const metadata: Metadata = {
  title: "SDG-4: Quality Education | K.R. Mangalam University",
  description:
    "K.R. Mangalam University is dedicated to SDG Goal 4: Quality Education by offering inclusive, equitable education, smart learning platforms, KEIC incubation, and lifelong learning.",
};

const SDG4QualityEducationPage = () => {
  return <Sdg4QualityEducationSection />;
};

export default SDG4QualityEducationPage;
