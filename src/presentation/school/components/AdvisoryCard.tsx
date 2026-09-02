import { STRAPI_URL } from "@/app/constant";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

type Props = {
    name: string;
    imgUrl: string;
    qual: string;
    desg: string;
    slug: string;
};

export const AdvisoryCard = ({ name, imgUrl, qual, desg }: Props) => {
    return (
        <div className="overflow-hidden bg-[#061623] transition-all duration-300 ease-in-out group flex flex-col font-poppins w-full h-full rounded-[4px]">
            {/* IMAGE SECTION */}
            <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden flex items-end justify-center">
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <Image
                        src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/KRMU_Logo_white_3_33a6547c3f.png"
                        width={290}
                        height={299}
                        alt="KRMU Logo"
                        className="object-contain"
                    />
                </div>

                <Image
                    src={`${STRAPI_URL}${imgUrl}`}
                    width={272}
                    height={295}
                    alt={name}
                    className="h-full w-full relative z-10 object-contain object-bottom group-hover:scale-[1.03] duration-500 ease"
                />
            </div>
            {/* DETAILS */}
            <div className="p-4 sm:p-5 bg-[#061623] flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="text-[15px] sm:text-base font-bold text-white leading-snug">
                        {name}
                    </h3>

                    <p
                        className="text-[12px] uppercase text-white/90 py-1 tracking-wide"
                        dangerouslySetInnerHTML={{
                            __html: desg,
                        }}
                    />
                </div>

                <p
                    className="text-[13px] font-medium text-white/80 tracking-wide mt-1"
                    dangerouslySetInnerHTML={{
                        __html: qual,
                    }}
                />
            </div>
        </div>
    );
};
