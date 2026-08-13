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
    <div className="border border-[#1c539b] rounded-[4px] lg:rounded-[27px] p-4 md:p-6 sm:p-8 h-full flex flex-col xl:flex-row gap-6">
      <div className="shrink-0">
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-[4px] ld:rounded-lg overflow-hidden border border-[#1a3353]">
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
          <h5 className="text-white text-lg sm:text-[16px] font-bold">
            {name}
          </h5>
          <p className="text-white/90 text-sm sm:text-[16px]">{edu}</p>
        </div>
        <p className="text-gray-300 text-justify text-sm sm:text-[16px] mt-2 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
