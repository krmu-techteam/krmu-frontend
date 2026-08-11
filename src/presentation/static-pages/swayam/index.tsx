import React from "react";
import {
  HeroSection,
  WhyChooseSection,
  CreditTransferSection,
  NodalOfficerSection,
  SwayamFooterSection,
} from "./sections";

const SwayamStaticPage: React.FC = () => {
  return (
    <main className="w-full min-h-screen">
      <HeroSection />
      <WhyChooseSection />
      <CreditTransferSection />
      <NodalOfficerSection />
      <SwayamFooterSection />
    </main>
  );
};

export default SwayamStaticPage;
export * from "./sections";
