 
import SectionDivider from "@/components/common/SectionDivider";
import { AdvisoryCarousel, DeansCarousel } from "../components";

const AdvisoryOrDeanSection = async () => {
  return (
    <>
      <section className="relative py-[50px] sm:py-[70px] lg:py-[90px] overflow-hidden">
        <div className="max-w-[1530px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          
          {/* Advisory Board Section */}
          <div className="mb-16">
            <h2 className="text-white text-4xl sm:text-[42px] font-serif font-bold mb-8">
              Advisory Board
            </h2>
            <AdvisoryCarousel />
          </div>

          {/* Deans Section */}
          <div>
            <h2 className="text-white text-4xl sm:text-[42px] font-serif font-bold mb-8">
              Deans of KRMU Schools
            </h2>
            <DeansCarousel />
          </div>

        </div>
        <SectionDivider />
      </section>
    </>
  );
};

export default AdvisoryOrDeanSection;
