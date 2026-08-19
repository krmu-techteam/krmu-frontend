import React from "react";
import { FinancialPointCardProps } from "@/features/programs";

 

const FinancialPointCard = ({ point, className = "" }: FinancialPointCardProps) => {
  return (
    <div
      className={`p-3 xl:p-4 font-normal text-[14px] xl:text-base text-white font-poppins text-center rounded-sm flex items-center justify-center transition-all duration-300 border border-gray-300 ${className}`}
    >
      {point}
    </div>
  );
};

export default FinancialPointCard;
