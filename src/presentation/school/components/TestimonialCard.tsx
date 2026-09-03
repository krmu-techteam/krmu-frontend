import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

type Props = {
    name: string;
    edu: string;
    desc: string;
    img: StrapiMedia;
};

export default function TestimonialCard({ name, edu, desc, img }: Props) {
    return (
        <div className=" border-3 border-[#003560] rounded-[15px] p-4 md:p-6 sm:p-8 h-full flex flex-col xl:flex-row gap-6">
            <div className="shrink-0">
                <div className="relative w-24 h-24 sm:w-26 sm:h-26 rounded-[8px] overflow-hidden">
                    {img && (
                        <Image
                            src={`${STRAPI_URL}${img?.url}`}
                            fill
                            className="object-contain"
                            alt={name}
                        />
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div>
                    <h3 className="text-white text-lg sm:text-[16px] font-bold">
                        {name}
                    </h3>
                    <p className="text-white/90 text-sm sm:text-[16px]">
                        {edu}
                    </p>
                </div>
                <p className="text-white/90 text-justify text-sm sm:text-[16px] mt-2 leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    );
}
