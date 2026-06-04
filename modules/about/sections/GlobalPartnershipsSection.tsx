import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import Image from "next/image";
import { IndustryCollabCarousel } from "../components";
import { StrapiMedia } from "@/lib/types/common";
import SectionDivider from "@/components/common/SectionDivider";

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
const GlobalPartnershipsSection = ({ aboutData }: GlobalPartnershipsSectionProps) => {
    return (
        <section className="py-8 sm:py-10 lg:py-12 xl:py-20 px-6 sm:px-8 lg:px-12 xl:px-16 bg-transparent relative">
        <div className="max-w-[1530px] mx-auto w-full bg-gradient-to-r from-[#061623] via-[#061623] to-[#061623]/20 rounded-[4px] flex flex-col lg:flex-row items-stretch overflow-hidden">
          <div className="w-full lg:w-[60%] text-white p-8 lg:p-14 flex flex-col justify-center">
            <h3 className="text-3xl md:text-[42px] font-serif font-semibold w-full leading-[1.2] mb-6">
              {aboutData?.internationcollaboration?.title}
            </h3>
            <div className="text-[14px] sm:text-[15px] leading-relaxed text-white/90 mb-0 font-poppins pr-0 md:pr-10">
              <BlocksRenderer
                content={aboutData?.internationcollaboration?.description || []}
              />
            </div>
            {(aboutData?.internationcollaboration?.intcollabbtn?.buttonlink ||
              aboutData?.internationcollaboration?.intcollabbtn
                ?.buttonclass) && (
              <div className="mb-10">
                <Link
                  href={
                    aboutData?.internationcollaboration?.intcollabbtn
                      ?.buttonlink || "#"
                  }
                  className="relative overflow-hidden group inline-flex items-center justify-center px-8 py-3 bg-transparent border border-white/40 text-white text-[15px] transition-colors  duration-300 rounded-[3px] tracking-wider"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
                  <span className="relative z-10 font-poppins font-medium">
                    {aboutData?.internationcollaboration?.intcollabbtn
                      ?.buttontext || "KNOW MORE"}
                  </span>
                </Link>
              </div>
            )}
            <div className="w-full max-w-[850px]">
              <IndustryCollabCarousel
                indusLogos={
                  aboutData?.internationcollaboration?.internationcollablogos || []
                }
              />
            </div>
          </div>
          <div className="w-full lg:w-[40%] relative flex items-end justify-end mt-8 lg:mt-0 pt-8 lg:pt-0">
            <Image
              src="/modules/about/international-collaborations/international-collaborations.png"
              width={600}
              height={700}
              className="object-contain object-bottom max-h-full w-auto max-w-[120%]"
              alt="about collab"
            />
          </div>
        </div>
        <SectionDivider />
      </section>
    );
};

export default GlobalPartnershipsSection;