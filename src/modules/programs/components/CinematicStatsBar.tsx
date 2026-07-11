 
import { DreamCareerSection } from "../types";
 
const CinematicStatsBar = ({ dreamcareerSection }: DreamCareerSection) => {
  return (
    <div className="w-full bg-[#001631] lg:bg-transparent py-8 md:py-6 lg:py-0 mt-0 lg:mt-10 relative z-10">
      <div className="grid grid-cols-3 gap-2 lg:flex lg:flex-nowrap items-center lg:gap-x-10">
        <div className="flex flex-col lg:pr-8 xl:pr-10 lg:border-r border-white/20 text-center lg:text-left">
          <span className="text-white font-semibold text-xl md:text-2xl xl:text-3xl leading-none tracking-tight whitespace-nowrap">
            {dreamcareerSection?.highestpackagenum || "56.6 LPA"}
          </span>
          <span className="text-white/90 text-[11px] md:text-sm xl:text-base mt-1 font-normal whitespace-nowrap overflow-hidden text-ellipsis">
            {dreamcareerSection?.highestpackagetitle || "Highest Package"}
          </span>
        </div>
        <div className="flex flex-col lg:px-8 xl:pr-10 lg:pl-0 lg:border-r border-white/20 text-center lg:text-left">
          <span className="text-white font-semibold text-xl md:text-2xl xl:text-3xl leading-none tracking-tight whitespace-nowrap">
            800+
          </span>
          <span className="text-white/90 text-[11px] md:text-sm xl:text-base mt-1 font-normal whitespace-nowrap overflow-hidden text-ellipsis">
            {dreamcareerSection?.campusrecruitertitle || "Campus Recruiters"}
          </span>
        </div>
        <div className="flex flex-col text-center lg:text-left relative">
          <span className="text-white font-semibold text-xl md:text-2xl xl:text-3xl leading-none tracking-tight whitespace-nowrap">
            {dreamcareerSection?.placementassistnum || "100%"}
          </span>
          <span className="text-white/90 text-[11px] md:text-sm xl:text-base mt-1 font-normal whitespace-nowrap overflow-hidden text-ellipsis">
            {dreamcareerSection?.placementassisttitle || "Placement Assistance"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CinematicStatsBar;
