import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
  title: string;
  desc?: string;
  highlightimg: StrapiMedia;
};

const ProgrammeHighlightCard = ({ title, desc, highlightimg }: Props) => {
  return (
    <div className="group rounded-md shadow-sm hover:shadow-xl transition-all duration-500 h-[340px] flex flex-col mx-2  relative overflow-hidden">
      {/* Image Container */}
      <div className="relative h-full w-full overflow-hidden rounded-md z-0">
        {highlightimg?.url ? (
          <Image
            fill
            src={`${STRAPI_URL}${highlightimg?.url}`}
            alt={highlightimg?.alternativeText || title}
            className="object-s group-hover:scale-110 transition-transform duration-700"
            unoptimized
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}

        {/* Default Bottom Gradient & Title (Hidden on hover) */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#000000]/80 to-transparent p-4 transition-opacity duration-300 group-hover:opacity-0">
          <h5 className="text-white font-poppins text-md md:text-[17px] font-medium text-center leading-tight">
            {title}
          </h5>
        </div>

        {/* Black Light Overlay on Hover */}
        <div className="absolute inset-0 bg-[#061623]/70 opacity-0 group-hover:opacity-100 transition-all duration-700 z-10 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px]">
          <h5 className="text-white font-poppins text-lg font-medium mb-3 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-100 text-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {title}
          </h5>
          <p className="text-white/90 font-poppins text-sm leading-relaxed text-pretty transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-200 text-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeHighlightCard;
