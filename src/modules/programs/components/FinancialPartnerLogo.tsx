import React from "react";
import Image from "next/image";
import { STRAPI_URL } from "@/app/constant";
import { FinancialPartnerLogoProps } from "../types";

 

const FinancialPartnerLogo = ({ logo }: FinancialPartnerLogoProps) => {
  return (
    <div className="flex items-center justify-center border border-gray-200 p-4 rounded-sm bg-white hover:border-[#0a41a1] transition-all duration-300 group h-24">
      <Image
        src={`${STRAPI_URL}${logo?.url}`}
        width={126}
        height={41}
        alt={logo?.alternativeText || "Financial Assistance Logo"}
        className="transition-all duration-300 pointer-events-none object-contain group-hover:scale-105"
      />
    </div>
  );
};

export default FinancialPartnerLogo;
