import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  highlightimg: StrapiMedia;
};

const ProgrammeHighlightCard = ({ title, desc, highlightimg }: Props) => {
  return (
    <>
      <div className="proghighcard duration-200 flex flex-row gap-4 items-center cursor-pointer rounded-[4px] border border-gray-300 overflow-hidden bg-white hover:shadow-md transition-shadow">
        {/* <div className="w-[120px] sm:w-[160px] min-h-[120px] sm:min-h-[160px] relative flex-shrink-0 bg-gray-50"> */}
        <div className="w-1/5 h-[120px] relative flex-shrink-0 bg-gray-50">
          {highlightimg?.url && (
            <Image
              fill
              src={`${STRAPI_URL}${highlightimg?.url}`}
              alt={highlightimg?.alternativeText || "ba-hons-psychology-krmu"}
              className="w-full object-cover"
            />
          )}
        </div>
        <div className="w-4/5 flex-grow flex flex-col justify-start">
          <h5 className="text-base sm:text-lg text-[#0a41a1]/90 hover:text-[#0a41a1] font-semibold leading-tight mb-1 sm:mb-2">
            {title}
          </h5>
          <p className="text-[12px] sm:text-[14px] text-[#5c5c5e] leading-snug">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ProgrammeHighlightCard;
