import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { BcaVsBtechComparison, LabFacilitiesCarousel } from "../components";
import { LabFacilitiesSectionProps } from "@/features/programs";
import { DEFAULT_LAB_IMAGES } from "@/features/programs";
import { parseCommaSeparatedUrls } from "@/features/programs";
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
    DEFAULT_LAB_IMAGES,
  );

  return (
    <>
      <section className="relative z-4 pt-8 md:pt-12 xl:pt-20 pb-3 md:pb-6 xl:pb-12">
        <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
          <div className="w-full labFac_container text-center">
            <div className="common-prog-container !max-w-4xl mx-auto">
              <h3 className="heading-primary mb-3 md:mb-4">
                {heading} {highlight}
              </h3>
              <div className="text-white font-poppins text-sm md:text-[17px] text-center leading-relaxed tracking-normal">
                <BlocksRenderer content={labcontent} />
              </div>
            </div>

            <div>
              <LabFacilitiesCarousel
                labcards={labcards}
                images={labStagingImages}
              />
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
