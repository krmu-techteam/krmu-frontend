import {
  HeroSection,
  DisclosuresSection,
} from "@/presentation/static-pages/mandatory-disclosures";

export const metadata = {
  title: "NIRF Report | K.R. Mangalam University",
  description: "Official public disclosure documents, university statutes, ordinances, AISHE, and NIRF reports of K.R. Mangalam University.",
};

export default function MandatoryDisclosuresPage() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden pb-12">
      {/* Top Ambient Glow Effect */}
      <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[90%] h-[500px] bg-gradient-to-b from-[#0060aa]/20 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Hero Section */}
      <HeroSection />

      {/* Disclosures Content */}
      <DisclosuresSection />
    </div>
  );
}
