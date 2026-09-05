import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { LabFacilitiesCarousel } from "../components";
import { LabFacilitiesSectionProps } from "@/features/programs";
import { DEFAULT_LAB_IMAGES } from "@/features/programs";
import { parseCommaSeparatedUrls } from "@/features/programs";

const LabsFacilitieSection = ({
    heading,
    highlight,
    btn,
    labcontent,
    labcards,
}: LabFacilitiesSectionProps) => {
    const labStagingImages = parseCommaSeparatedUrls(
        btn?.containerPopupFormId,
        DEFAULT_LAB_IMAGES
    );

    return (
        <>
            <section
                id="labs-facilities"
                className="relative z-4 pt-10 md:pt-10 lg:pt-16 xl:pt-20 pb-10 md:pb-6 xl:pb-12 scroll-mt-28"
            >
                <div className="max-w-[1530px] mx-auto w-full px-4 md:px-8 xl:px-16">
                    <div className="w-full labFac_container text-center">
                        <div className="common-prog-container !max-w-4xl mx-auto">
                            <h3 className="heading-primary mb-6 md:mb-4">
                                {heading} {highlight}
                            </h3>
                            <div className="text-white font-poppins text-justify text-[16px] md:text-[17px] lg:text-center leading-relaxed tracking-normal">
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
            </section>
        </>
    );
};

export default LabsFacilitieSection;
