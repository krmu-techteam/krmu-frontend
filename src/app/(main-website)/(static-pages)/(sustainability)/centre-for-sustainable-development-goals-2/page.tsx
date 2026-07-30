import { Metadata } from "next";
import { HeroSection, SDGSection } from "@/presentation/static-pages/sustainability";

export const metadata: Metadata = {
  title: "Centre for Sustainable Development Goals | KRMU",
  description:
    "The Centre for Sustainable Development Goals at K.R. Mangalam University promotes UN SDGs through education, research, innovation, and sustainable campus initiatives.",
};

const CentreForSustainableDevelopmentGoals = () => {
  return (
    <>
      <HeroSection />
      <SDGSection />
    </>
  );
};

export default CentreForSustainableDevelopmentGoals;
