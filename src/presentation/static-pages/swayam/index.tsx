import React from "react";
import {
  HeroSection,
  WhyChooseSection,
  CreditTransferSection,
  NodalOfficerSection,
  SwayamFooterSection,
} from "./sections";

const SwayamStaticPage = () => {
  return (
    <main className="min-h-screen bg-slate-900">
      <HeroSection />
      <WhyChooseSection />
      <CreditTransferSection />
      <NodalOfficerSection />
      <SwayamFooterSection />
    </main>
  );
};

export default SwayamStaticPage;
