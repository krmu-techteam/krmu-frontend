const AveragePackageGrowth = () => {
  return (
    <section className="px-5">
      <div className="max-w-6xl mx-auto w-full flex items-end gap-3 sm:gap-5 font-poppins border-y border-[#ccc] py-8 sm:py-10 md:py-12 mb-8 sm:mb-10">
        {/* 2023-24 */}
        <div className="w-full min-w-0">
          <h4 className="text-3xl sm:text-[38px] md:text-[42px] font-newsreader leading-tight">
            5.2L
          </h4>

          <div className="bg-[#0C2441] h-[70px] sm:h-[90px] md:h-[107px]" />

          <span className="text-[#43474F] text-xs sm:text-base md:text-xl inline-block mt-2 whitespace-nowrap">
            2023-24
          </span>
        </div>

        {/* 2024-25 */}
        <div className="w-full min-w-0">
          <h4 className="text-3xl sm:text-[38px] md:text-[42px] font-newsreader leading-tight">
            6L
          </h4>

          <div className="bg-[#0C2441] h-[90px] sm:h-[115px] md:h-[135px]" />

          <span className="text-[#43474F] text-xs sm:text-base md:text-xl inline-block mt-2 whitespace-nowrap">
            2024-25
          </span>
        </div>

        {/* 2025-26 */}
        <div className="w-full min-w-0">
          <h4 className="text-3xl sm:text-[38px] md:text-[42px] font-newsreader leading-tight">
            6.4L
          </h4>

          <div className="bg-[#0C2441] h-[110px] sm:h-[140px] md:h-[165px]" />

          <span className="text-[#43474F] text-xs sm:text-base md:text-xl inline-block mt-2 whitespace-nowrap">
            2025-26
          </span>
        </div>
      </div>
    </section>
  );
};

export default AveragePackageGrowth;