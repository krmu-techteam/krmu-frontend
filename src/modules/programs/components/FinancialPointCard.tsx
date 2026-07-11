import React from "react";
import { FinancialPointCardProps } from "../types";

 

const FinancialPointCard = ({ point, className = "" }: FinancialPointCardProps) => {
  return (
    <div
      className={`p-4 font-normal text-base text-white font-poppins text-center rounded-sm flex items-center justify-center transition-all duration-300 border border-gray-300 ${className}`}
    >
      {point}
    </div>
  );
};

export default FinancialPointCard;
