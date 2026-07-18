"use client";

import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

interface KRMBRANCHPROP {
  krmBranchImages: StrapiMedia[];
}

const InstitutionGrid: React.FC<KRMBRANCHPROP> = ({ krmBranchImages }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6 justify-center">
      {krmBranchImages?.map((branch) => (
        <div
          key={branch?.id}
          className="group relative overflow-hidden rounded-[12px] cursor-pointer w-full lg:w-[230px] h-[250px] mx-auto bg-[#061623]"
        >
          <Image
            src={`${STRAPI_URL}${branch?.url}`}
            alt={branch?.alternativeText || "Institution Campus"}
            fill
            sizes="(max-width: 1024px) 100vw, 230px"
            className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          <div className="absolute bottom-0 left-0 w-full p-4 z-20">
            <h3 className="text-white text-[15px] font-medium leading-tight font-poppins">
              {branch?.alternativeText}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstitutionGrid;
