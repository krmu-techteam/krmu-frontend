import React from "react";
import { LucideIcon } from "lucide-react";

interface EligibilityCardProps {
  icon: LucideIcon;
  subtitle?: string;
  title: string;
  bgColor: string;
  isRequirements?: boolean;
  expanded?: boolean;
  onToggleExpand?: () => void;
  displayTitle?: string;
  isLong?: boolean;
}

export const EligibilityCard = ({
  icon: Icon,
  subtitle,
  title,
  bgColor,
  isRequirements = false,
  expanded = false,
  onToggleExpand,
  displayTitle,
  isLong = false,
}: EligibilityCardProps) => {
  return (
    <div
      className="group relative overflow-hidden font-poppins rounded-[4px] py-6 px-4  hover:-translate-y-1 transition-all duration-500 ease-out cursor-default text-start flex items-start gap-5 w-full"
      style={{ backgroundColor: bgColor }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none"></div>
      <Icon size={32} color="#E7C268" className="flex-shrink-0 relative z-10" />
      <div className="flex flex-col relative z-10 w-full">
        <p className="text-xs md:text-sm font-normal text-white uppercase leading-none tracking-wider">
          {subtitle}
        </p>
        <div className="flex flex-col mt-2">
          {!isRequirements ? (
            <p className="text-md md:text-lg font-semibold text-white leading-tight">
              {title}
            </p>
          ) : (
            <>
              <p className="text-md md:text-lg font-medium text-white leading-normal">
                {displayTitle}
                {isLong && !expanded && " "}
              </p>
              {isLong && onToggleExpand && (
                <button
                  onClick={onToggleExpand}
                  className="text-[14px] text-[#E7C268] font-normal mt-1.5 text-left hover:underline cursor-pointer tracking-wide w-fit"
                >
                  {expanded ? "Read Less" : "Read More"}
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default EligibilityCard;
