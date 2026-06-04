import SectionDivider from "@/components/common/SectionDivider";
import { HighlightsGrid } from "../components";

const WhyKRMUSection = () => {
  return (
    <section className="relative py-8 sm:py-10 lg:py-12 xl:py-20 px-6 sm:px-8 lg:px-12 xl:px-16">
      
      <div className="max-w-[1530px] mx-auto">
        
        {/* Heading */}
        <div className="text-center text-white mb-8">
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