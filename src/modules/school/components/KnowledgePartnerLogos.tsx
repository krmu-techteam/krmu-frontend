"use client";
import Image from "next/image";
import { StrapiMedia } from "@/lib/types/common";
import { STRAPI_URL } from "@/app/constant";

type Props = {
  logos: StrapiMedia[];
};

const KnowledgePartnerLogos = ({ logos }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 xl:gap-6">
      {logos &&
        logos.map((logo) => {
          return (
            <div
              key={logo?.id}
              className="bg-white rounded-sm p-2 flex justify-center items-center shadow-sm h-[100px] sm:h-[120px] transition-transform hover:-translate-y-1 duration-300"
            >
              <Image
                src={`${STRAPI_URL}${logo?.url}`}
                width={logo?.width || 215}
                height={logo.height || 115}
                alt={logo.alternativeText || "Knowledge Partner Logo"}
                className="h-[80px] sm:h-[100px] w-auto max-w-full object-contain"
                unoptimized
              />
            </div>
          );
        })}
    </div>
  );
};

export default KnowledgePartnerLogos;