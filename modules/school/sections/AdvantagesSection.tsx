import { STRAPI_URL } from "@/app/constant";
import SectionDivider from "@/components/common/SectionDivider";
import { CardWithImage, StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  heading: string;
  desc: string;
  subtitle: string;
  advimg: StrapiMedia;
  advcards: CardWithImage[];
  school_advantage: string;
};

const AdvantagesSection = ({
  heading,
  subtitle,
  advimg,
  advcards,
  school_advantage,
}: Props) => {
  return (
    <section className="py-12 xl:py-20 bg-transparent relative z-10 font-poppins text-white px-6 md:px-8 lg:px-11 2xl:px-16">
      <div className="max-w-[1530px] mx-auto w-full">
        <div className="flex flex-col xl:flex-row gap-14 xl:gap-20 items-start">
          
          {/* Left Column: Content + Grid */}
          <div className="w-full xl:w-[65%] flex flex-col order-2 xl:order-1">
            {/* Heading */}
            <h2 className="text-3xl md:text-[45px] leading-tight mb-6 font-serif">
              {heading} {subtitle}
            </h2>
            
            {/* Description */}
            {school_advantage && (
              <div
                dangerouslySetInnerHTML={{
                  __html: school_advantage,
                }}
                className="text-base md:text-[17px] leading-relaxed text-white/80 mb-14 max-w-[95%]"
              />
            )}

            {/* 2x2 Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-12">
              {advcards &&
                advcards.map((advcard) => (
                  <div key={advcard?.id} className="flex items-start gap-5">
                    <div className="shrink-0 pt-1 w-12 h-12 flex items-center justify-center">
                      {advcard?.cardimg?.url && (
                        <Image
                          src={`${STRAPI_URL}${advcard.cardimg.url}`}
                          width={48}
                          height={48}
                          alt={advcard?.title || "Icon"}
                          className="w-full h-full object-contain filter brightness-0 invert opacity-90"
                        />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <h6 className="text-[17px] font-semibold text-white/95 mb-2 leading-snug">
                        {advcard?.title}
                      </h6>
                      <p className="text-[14.5px] text-white/60 leading-relaxed">
                        {advcard?.cardcontent}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Right Column: Image */}
          {advimg?.url && (
            <div className="w-full xl:w-[35%] shrink-0 flex justify-center xl:justify-end order-1 xl:order-2">
              <div className="relative w-full rounded-sm overflow-hidden flex items-center justify-center bg-[#0B1521]">
                <Image
                  src={`${STRAPI_URL}${advimg.url}`}
                  width={advimg.width || 800}
                  height={advimg.height || 1000}
                  className="w-full h-auto max-h-[600px] object-contain px-6 pt-6"
                  alt="School Advantage"
                  unoptimized
                />
              </div>
            </div>
          )}
          
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default AdvantagesSection;
