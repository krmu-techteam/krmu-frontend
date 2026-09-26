import { importantDates } from "../constant";

const ImportantDates = () => {
  return (
    <section className="w-full bg-[#111d33] py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-6">
        {/* Heading */}
        <div className="mb-8 sm:mb-9 md:mb-10">
          <span className="mb-2 block font-serif text-[10px] font-bold uppercase tracking-[0.16em] text-[#d6ad54] sm:mb-3 sm:text-[11px] md:text-[12px]">
            Timeline
          </span>

          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Important Dates
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 gap-7 sm:gap-8 md:grid-cols-2 md:gap-x-7 md:gap-y-9 lg:grid-cols-4 lg:gap-8">
          {importantDates.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline line + dot */}
              <div className="mb-4 flex w-full items-center">
                <span className="h-[8px] w-[8px] shrink-0 rounded-full bg-[#d6ad54] sm:h-[9px] sm:w-[9px]" />

                <span className="h-px w-full bg-[#6c6048]" />
              </div>

              {/* Date */}
              <h3 className="font-serif text-[17px] font-bold leading-tight text-[#d6ad54] sm:text-[18px]">
                {item.date}
              </h3>

              {/* Description */}
              <p className="mt-2.5 max-w-[280px] font-serif text-[14px] leading-[1.5] text-[#e5e0d8] sm:mt-3 sm:text-[15px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <p className="mt-8 text-base font-medium text-[#ff2b2b] sm:mt-9 sm:text-[18px]">
          Coming soon...
        </p>
      </div>
    </section>
  );
};

export default ImportantDates;