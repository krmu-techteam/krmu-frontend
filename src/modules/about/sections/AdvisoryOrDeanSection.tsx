 
import SectionDivider from "@/components/common/SectionDivider";
import { AdvisoryCarousel, DeansCarousel } from "../components";

const AdvisoryOrDeanSection = async () => {
  return (
    <>
      <section className="relative py-8 sm:py-10 lg:py-12 xl:py-16 px-2 sm:px-10 lg:px-12 xl:px-16  overflow-hidden">
        <div className="max-w-[1530px] mx-auto w-full ">
          
          {/* Advisory Board Section */}
          <div className="mb-16">
            <h2 className="heading-primary mb-6 md:mb-8 text-center md:text-left">
              Advisory Board
            </h2>
            <AdvisoryCarousel />
          </div>

          {/* Deans Section */}
          <div>
            <h2 className="heading-primary mb-6 md:mb-8 text-center md:text-left">
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
