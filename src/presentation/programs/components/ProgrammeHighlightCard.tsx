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
        <div className="group rounded-md shadow-sm hover:shadow-xl transition-all duration-500 h-[340px] flex flex-col mx-2 relative overflow-hidden">
            {/* Image Container */}
            <div className="relative h-full w-full overflow-hidden rounded-[4px] z-0">
                {highlightimg?.url ? (
                    <Image
                        fill
                        src={`${STRAPI_URL}${highlightimg?.url}`}
                        alt={highlightimg?.alternativeText || title}
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                        No Image
                    </div>
                )}

                {/* Single Overlay & Content Container with exactly ONE <h3> for SEO */}
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 sm:p-5 lg:p-6 text-center transition-all duration-500 bg-gradient-to-t from-black/75 via-black/35 to-transparent lg:from-black/70 lg:via-transparent lg:to-transparent lg:group-hover:bg-[#061623]/55 lg:group-hover:backdrop-blur-[2px] lg:group-hover:pb-12">
                    <h3 className="text-white font-poppins text-base md:text-[17px] lg:text-lg font-semibold lg:font-medium leading-tight mb-1.5 lg:mb-0 lg:group-hover:mb-3 drop-shadow transition-all duration-500">
                        {title}
                    </h3>
                    {desc && (
                        <p className="text-white/95 font-poppins text-xs sm:text-sm leading-relaxed text-pretty drop-shadow line-clamp-3 lg:line-clamp-none lg:max-h-0 lg:opacity-0 lg:overflow-hidden lg:group-hover:max-h-40 lg:group-hover:opacity-100 transition-all duration-500">
                            {desc}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProgrammeHighlightCard;
