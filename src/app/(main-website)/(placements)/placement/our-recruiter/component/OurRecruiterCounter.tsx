

const OurRecruiterCounter = () => {
  return (
    <>
      <section className="py-6 md:py-8 bg-blue-50 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="w-full h-full p-4 text-center bg-white border border-gray-200 flex flex-col justify-center items-center rounded-sm min-h-[100px] md:min-h-[140px]">
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[#0161b0] font-bold leading-tight">800+</span>
            <span className="text-sm sm:text-base md:text-lg text-[#051630] font-medium">Recruiters</span>
          </div>
          <div className="w-full h-full p-4 text-center bg-white border border-gray-200 flex flex-col justify-center items-center rounded-sm min-h-[100px] md:min-h-[140px]">
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[#0161b0] font-bold leading-tight">100%</span>
            <span className="text-sm sm:text-base md:text-lg text-[#051630] font-medium text-balance">Placements Assistance</span>
          </div>
          <div className="w-full h-full p-4 text-center bg-white border border-gray-200 flex flex-col justify-center items-center rounded-sm min-h-[100px] md:min-h-[140px]">
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[#0161b0] font-bold leading-tight whitespace-nowrap">
              ₹56.6 <span className="text-xl sm:text-2xl lg:text-3xl font-bold">LPA</span>
            </span>
            <span className="text-sm sm:text-base md:text-lg text-[#051630] font-medium">Highest Package</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurRecruiterCounter;
