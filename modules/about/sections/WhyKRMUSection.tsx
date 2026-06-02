import SectionDivider from "@/components/common/SectionDivider";
import { HighlightsGrid } from "../components";

const WhyKRMUSection = () => {
  return (
    <section className="relative py-[50px] sm:py-[70px] lg:py-[90px] px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-[1530px] mx-auto">
        
        {/* Heading */}
        <div className="text-center text-white mb-12">
          <h2 className="font-serif text-[36px] sm:text-[42px] font-bold leading-[1.2] mb-4">
            Why KRMU
          </h2>

          <p className="text-white/80 font-poppins text-md leading-[1.8] max-w-[900px] mx-auto">
            Discover the exceptional academic environment, vibrant campus life, industry collaborations, and career-focused education at K.R. Mangalam University.
          </p>
        </div>

        {/* Grid */}
        <HighlightsGrid />
      </div>
      <SectionDivider />
    </section>
  );
};

export default WhyKRMUSection;