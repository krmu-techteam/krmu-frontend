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
      <div className="proghighcard flex justify-center cursor-pointer rounded-[30px]">
        <div className="w-1/5 min-h-[144px] h-full relative overflow-hidden">
          {highlightimg?.url && (
            <Image
              fill
              src={`${STRAPI_URL}${highlightimg?.url}`}
              alt={highlightimg?.alternativeText || "ba-hons-psychology-krmu"}
              className="w-full h-full object-cover rounded-l-[20px]"
            />
          )}
        </div>
        <div className="w-4/5 py-2.5 pr-2.5 pl-5">
          <h5 className="text-xl text-[#0a41a1] hover:text-[#db2a1a] font-medium leading-[1.2] mb-2.5">
            {title}
          </h5>
          <p className="text-[15px] text-[#5c5c5e]">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ProgrammeHighlightCard;
