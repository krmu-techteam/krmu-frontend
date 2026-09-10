import Image from "next/image";
import { SchoolWiseSummaryItem } from "../records/constant";

interface CommonSchoolCardProps {
  school: SchoolWiseSummaryItem;
}

const CommonSchoolCard = ({ school }: CommonSchoolCardProps) => {
  const {
    code,
    schoolName,
    eligible,
    placed,
    placementRate,
    maxCtc,
    avgCtc,
    medianCtc,
    recordlogos,
  } = school;

  return (
    <div className="w-full h-full border border-[#ccc] bg-white p-4 sm:p-5 md:p-6 font-poppins">
      {/* Header */}
      <div className="min-h-[78px] sm:min-h-[88px] md:min-h-[96px]">
        <h5 className="mb-2 text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase text-[#7A1F2B]">
          {code}
        </h5>

        <h3 className="font-newsreader text-xl sm:text-2xl md:text-[26px] lg:text-[30px] font-medium leading-tight">
          {schoolName}
        </h3>
      </div>

      {/* Placement Stats */}
      <div className="py-6 sm:py-7 md:py-8 border-t border-[#ccc] mt-6 sm:mt-7 md:mt-8 flex">
        <div className="flex flex-col w-1/3 min-w-0">
          <span className="text-3xl sm:text-4xl font-newsreader leading-none">
            {eligible}
          </span>

          <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#12233F] tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase">
            Eligible
          </span>
        </div>

        <div className="flex flex-col w-1/3 min-w-0">
          <span className="text-3xl sm:text-4xl font-newsreader leading-none">
            {placed}
          </span>

          <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#12233F] tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase">
            Placed
          </span>
        </div>

        <div className="flex flex-col w-1/3 min-w-0">
          <span className="text-3xl sm:text-4xl font-newsreader leading-none text-[#7A1F2B]">
            {placementRate}
          </span>

          <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#12233F] tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase">
            Rate
          </span>
        </div>
      </div>

      {/* CTC Stats */}
      <div className="py-6 sm:py-7 md:py-8 border-t border-[#ccc] flex gap-2.5">
        <div className="flex flex-col w-1/3 min-w-0">
          <span className="text-base sm:text-lg md:text-xl font-semibold font-newsreader leading-none truncate">
            {maxCtc}
          </span>

          <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#12233F] tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase">
            Max CTC
          </span>
        </div>

        <div className="flex flex-col w-1/3 min-w-0">
          <span className="text-base sm:text-lg md:text-xl font-semibold font-newsreader leading-none truncate">
            {avgCtc}
          </span>

          <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#12233F] tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase">
            Avg CTC
          </span>
        </div>

        <div className="flex flex-col w-1/3 min-w-0">
          <span className="text-base sm:text-lg md:text-xl font-semibold font-newsreader leading-none text-[#7A1F2B] truncate">
            {medianCtc}
          </span>

          <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#12233F] tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase">
            Median CTC
          </span>
        </div>
      </div>

      {/* Recruiter Logos */}
      <div className="overflow-hidden pt-1">
        <div className="flex w-max animate-logo-scroll items-center gap-6 sm:gap-8">
          {[...recordlogos, ...recordlogos].map((logo, index) => (
            <Image
              key={`${logo.alt}-${index}`}
              src={logo.url}
              width={logo.width}
              height={logo.height}
              alt={logo.alt}
              className="shrink-0 max-w-[90px] sm:max-w-[104px] h-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommonSchoolCard;