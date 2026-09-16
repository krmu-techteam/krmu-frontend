import Image from "next/image";
import { SchoolWiseSummaryItem } from "../records/constant";

interface CommonSchoolCardProps {
  school: SchoolWiseSummaryItem;
}

// Below this count, logos are shown once (no scroll/duplication).
// Tweak based on how many logos comfortably fit in the card width.
const MIN_LOGOS_FOR_MARQUEE = 3;

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

  const shouldScroll = recordlogos.length > MIN_LOGOS_FOR_MARQUEE;
  const displayLogos = shouldScroll
    ? [...recordlogos, ...recordlogos]
    : recordlogos;

  return (
    <div className="w-full h-full border border-[#ccc] bg-white p-4 sm:p-5 md:p-6 flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="min-h-[78px] sm:min-h-[88px] md:min-h-[96px]">
          <h5 className="mb-[18px] text-[9px] sm:text-[10px] md:text-xs tracking-[1px] uppercase text-[#7A1F2B]">
            {code}
          </h5>

          <h3 className="font-newsreader text-xl sm:text-2xl md:text-2xl font-medium leading-tight text-[#00225C]">
            {schoolName}
          </h3>
        </div>

        {/* Placement Stats */}
        <div className="py-6 sm:py-7 md:py-8 border-t border-[#ccc] mt-6 sm:mt-7 md:mt-8 flex">
          <div className="flex flex-col w-1/3 min-w-0">
            <span className="text-3xl sm:text-[34px] font-newsreader font-medium leading-none">
              {eligible}
            </span>
            <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#888f9c] font-light tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase">
              Eligible
            </span>
          </div>

          <div className="flex flex-col w-1/3 min-w-0">
            <span className="text-3xl sm:text-[34px] font-newsreader font-medium leading-none">
              {placed}
            </span>
            <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#888f9c] font-light tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase">
              Placed
            </span>
          </div>

          <div className="flex flex-col w-1/3 min-w-0">
            <span className="text-3xl sm:text-[34px] font-newsreader font-medium leading-none text-[#7A1F2B]">
              {placementRate}
            </span>
            <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#888f9c] font-light tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase">
              Rate
            </span>
          </div>
        </div>

        {/* CTC Stats */}
        <div className="py-6 sm:py-7 md:py-8 border-t border-[#ccc] flex gap-2.5">
          <div className="flex flex-col w-1/3 min-w-0">
            <span className="text-base sm:text-lg md:text-xl font-medium leading-none truncate">
              {maxCtc}
            </span>
            <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#888f9c] font-light tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase">
              Max CTC
            </span>
          </div>

          <div className="flex flex-col w-1/3 min-w-0">
            <span className="text-base sm:text-lg md:text-xl font-medium leading-none truncate">
              {avgCtc}
            </span>
            <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#888f9c] font-light tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase">
              Avg CTC
            </span>
          </div>

          <div className="flex flex-col w-1/3 min-w-0">
            <span className="text-base sm:text-lg md:text-xl font-medium leading-none text-[#7A1F2B] truncate">
              {medianCtc}
            </span>
            <span className="mt-1 text-[9px] sm:text-[10px] md:text-xs text-[#888f9c] font-light tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase">
              Median CTC
            </span>
          </div>
        </div>
      </div>
      <div>
        {/* Recruiter Logos */}
        <div className="overflow-hidden pt-1">
          <div
            className={`flex items-center gap-6 sm:gap-8 ${
              shouldScroll ? "w-max animate-logo-scroll" : "flex-wrap"
            }`}
          >
            {displayLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="w-32 h-16 flex items-center justify-center shrink-0"
              >
                <Image
                  src={logo.url}
                  width={200}
                  height={100}
                  alt={logo.alt}
                  className="max-h-12 max-w-full w-auto h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonSchoolCard;
