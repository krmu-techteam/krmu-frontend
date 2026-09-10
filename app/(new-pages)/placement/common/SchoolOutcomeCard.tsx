interface SchoolOutcomeCardProps {
  code: string;
  schoolName: string;
  placementRate: string;
  medianCtc: string;
}

const SchoolOutcomeCard = ({
  code,
  schoolName,
  placementRate,
  medianCtc,
}: SchoolOutcomeCardProps) => {
  return (
    <div className="w-full border border-[#ccc] bg-white p-4 sm:p-5 font-poppins">
      {/* Header */}
      <div className="min-h-[90px] sm:min-h-[96px]">
        <h5 className="mb-2 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#7A1F2B]">
          {code}
        </h5>

        <h3 className="font-newsreader text-xl sm:text-2xl xl:text-[30px] font-medium leading-tight">
          {schoolName}
        </h3>
      </div>

      <hr className="mb-5 mt-0 xl:mt-7  border-[#ccc]" />

      {/* Stats */}
      <div className="flex items-end justify-between gap-4">
        {/* Placement */}
        <div className="flex min-w-0 flex-col">
          <span className="font-newsreader text-3xl sm:text-[36px] md:text-[40px] font-medium leading-tight text-[#00225C]">
            {placementRate}
          </span>

          <span className="mt-1 text-[9px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em]">
            Placement rate
          </span>
        </div>

        {/* Median CTC */}
        <div className="flex shrink-0 flex-col text-right sm:text-center">
          <span className="font-newsreader text-2xl sm:text-3xl font-medium leading-tight text-[#00225C]">
            {medianCtc}
          </span>

          <span className="mt-1 text-[9px] sm:text-xs uppercase tracking-[0.12em] sm:tracking-[0.2em]">
            Median CTC
          </span>
        </div>
      </div>
    </div>
  );
};

export default SchoolOutcomeCard;