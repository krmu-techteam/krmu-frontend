
 
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { BcaVsBtechComparison, LabFacilitiesCarousel } from "../components";
import { LabFacilitiesSectionProps } from "../types";
import { DEFAULT_LAB_IMAGES } from "../constants";
import { parseCommaSeparatedUrls } from "../utils";
import SectionDivider from "@/components/common/SectionDivider";

const LabsFacilitieSection = ({
  heading,
  highlight,
  btn,
  labcontent,
  labcards,
  slug,
}: LabFacilitiesSectionProps) => {

  const labStagingImages = parseCommaSeparatedUrls(
    btn?.containerPopupFormId,
    DEFAULT_LAB_IMAGES
  );

  return (
    <>
      <section className="relative z-4 py-8 md:py-6 lg:pt-10 lg:pb-0 xl:pt-12 xl:pb-4 2xl:pt-16 2xl:pb-8 px-4 md:px-6 lg:px-10 2xl:px-0">
        <div className="max-w-[1440px] mx-auto w-full">
          <div className="w-full labFac_container text-center">
            <div className="common-prog-container !max-w-4xl mx-auto">
              <h3 className="heading-primary mb-3 md:mb-4">
                {heading} {highlight}
              </h3>
              <div
                className="text-white font-poppins text-sm md:text-[17px] text-center leading-relaxed tracking-normal">
                <BlocksRenderer content={labcontent} />
              </div>
            </div>

            <div>
               <LabFacilitiesCarousel labcards={labcards} images={labStagingImages} />
            </div>
          </div>
        </div>
        <div className="max-w-[1320px] mx-auto w-full mt-0 md:mt-10">
          {slug === "bca-ai-data-science" && <BcaVsBtechComparison />}
        </div>
        <SectionDivider />
      </section>
    </>
  );
};

export default LabsFacilitieSection;
