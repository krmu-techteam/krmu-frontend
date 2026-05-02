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
      <div className="proghighcard duration-200 flex flex-col sm:flex-row cursor-pointer rounded-[4px] border border-gray-300 overflow-hidden bg-white hover:shadow-md transition-shadow">
        <div className="w-full sm:w-[220px] min-h-[160px] sm:min-h-[160px] relative flex-shrink-0">
          {highlightimg?.url && (
            <Image
              fill
              src={`${STRAPI_URL}${highlightimg?.url}`}
              alt={highlightimg?.alternativeText || "ba-hons-psychology-krmu"}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="w-full p-4 sm:py-3 sm:px-6 flex flex-col justify-center">
          <h5 className="text-lg text-[#0a41a1]/90 hover:text-[#0a41a1] font-semibold leading-tight mb-2">
            {title}
          </h5>
          <p className="text-[14px] text-[#5c5c5e] leading-snug">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ProgrammeHighlightCard;
