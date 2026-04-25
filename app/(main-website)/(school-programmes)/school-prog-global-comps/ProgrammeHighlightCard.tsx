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
      <div className="proghighcard duration-200 flex flex-col sm:flex-row cursor-pointer rounded-md border border-gray-300 overflow-hidden bg-white hover:shadow-md transition-shadow">
        <div className="w-full sm:w-1/5 min-h-[160px] sm:min-h-[144px] h-full relative">
          {highlightimg?.url && (
            <Image
              fill
              src={`${STRAPI_URL}${highlightimg?.url}`}
              alt={highlightimg?.alternativeText || "ba-hons-psychology-krmu"}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="w-full sm:w-4/5 p-4 sm:py-2.5 sm:pr-2.5 sm:pl-5 flex flex-col justify-center">
          <h5 className="text-xl text-[#0a41a1]/90 hover:text-[#0a41a1] font-medium leading-[1.2] mb-2.5">
            {title}
          </h5>
          <p className="text-[15px] text-[#5c5c5e] leading-relaxed">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ProgrammeHighlightCard;
