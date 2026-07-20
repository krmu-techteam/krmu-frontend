import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";
import { IndustryCollabCarousel } from "../components";
import { StrapiMedia } from "@/lib/types/common";
import SectionDivider from "@/components/common/SectionDivider";
import Button from "@/components/common/Button";

interface GlobalPartnershipsSectionProps {
  aboutData?: {
    internationcollaboration?: {
      title?: string | null;
      description?: BlocksContent | null;
      intcollabbtn?: {
        buttonlink?: string | null;
        buttontext?: string | null;
        buttonclass?: string | null;
      } | null;
      internationcollablogos?: StrapiMedia[] | null;
    } | null;
    [key: string]: unknown;
  };
}
const GlobalPartnershipsSection = ({
  aboutData,
}: GlobalPartnershipsSectionProps) => {
  return (
    <section className="py-8 md:py-12 xl:py-20 bg-transparent relative">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16">
        <div className="w-full bg-[#061623]/30 rounded-[4px] flex flex-col-reverse lg:flex-row items-stretch overflow-hidden">
          <div className="w-full lg:w-[60%] text-white px-6 py-8 lg:p-10 xl:p-14 flex flex-col justify-center">
            <h3 className="heading-primary mb-6 text-center md:text-left">
              {aboutData?.internationcollaboration?.title}
            </h3>
            <div className="text-[14px] text-justify sm:text-[15px] leading-relaxed text-white/90 mb-0 font-poppins pr-0 lg:pr-10">
              <BlocksRenderer
                content={aboutData?.internationcollaboration?.description || []}
              />
            </div>
            {(aboutData?.internationcollaboration?.intcollabbtn?.buttonlink ||
              aboutData?.internationcollaboration?.intcollabbtn
                ?.buttonclass) && (
              <div className="mb-10 flex justify-center lg:justify-start">
                <Button
                  href={
                    aboutData?.internationcollaboration?.intcollabbtn
                      ?.buttonlink || "#"
                  }
                  target="_blank"
                  className="bg-transparent text-white border-white/40 font-poppins font-medium"
                >
                  {aboutData?.internationcollaboration?.intcollabbtn
                    ?.buttontext || "KNOW MORE"}
                </Button>
              </div>
            )}
            <div className="w-full max-w-[850px]">
              <IndustryCollabCarousel
                indusLogos={
                  aboutData?.internationcollaboration?.internationcollablogos ||
                  []
                }
              />
            </div>
          </div>
          <div className="w-full lg:w-[40%] relative flex items-center lg:items-end justify-center lg:justify-end mt-0 lg:mt-0 pt-0 lg:pt-0 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)] lg:[mask-image:none] px-2">
            <Image
              src="/modules/about/international-collaborations/international-collaborations.png"
              width={600}
              height={700}
              className="object-contain object-bottom max-h-full w-auto max-w-[120%]"
              alt="about collab"
            />
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default GlobalPartnershipsSection;
