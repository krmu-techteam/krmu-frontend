"use client";

import { STRAPI_URL } from "@/app/constant";
import { StrapiMedia } from "@/lib/types/common";
import Image from "next/image";

interface KRMBRANCHPROP {
  krmBranchImages: StrapiMedia[];
}

const InstitutionGrid: React.FC<KRMBRANCHPROP> = ({
  krmBranchImages,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
      
      {krmBranchImages?.map((branch) => (
        <div
          key={branch?.id}
          className="group relative overflow-hidden rounded-[20px] cursor-pointer"
        >
          
          {/* Image */}
          <Image
            src={`${STRAPI_URL}${branch?.url}`}
            alt={
              branch?.alternativeText ||
              "Institution Campus"
            }
            width={branch?.width || 800}
            height={branch?.height || 600}
            className="w-full h-auto transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

         

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 w-full p-5 z-10">
            {/* Title */}
            <h3 className="text-white text-[18px] sm:text-[20px] font-medium leading-tight">
              {branch?.alternativeText}
            </h3>
          </div>      
        </div>
      ))}
    </div>
  );
};

export default InstitutionGrid;