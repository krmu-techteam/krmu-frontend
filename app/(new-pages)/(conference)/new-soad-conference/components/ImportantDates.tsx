import { importantDates } from "../constant";

const ImportantDates = () => {
  return (
    <section className="w-full bg-[#111d33] py-16 md:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-9">
          <span className="mb-3 block font-serif text-[12px] font-bold uppercase tracking-[0.16em] text-[#d6ad54]">
            Timeline
          </span>

          <h2 className="text-3xl font-bold leading-none text-white md:text-4xl">
            Important Dates
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {importantDates.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline line + dot */}
              <div className="mb-4 flex items-center">
                <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#d6ad54]" />

                <span className="h-[1px] w-full bg-[#6c6048]" />
              </div>

              {/* Date */}
              <h3 className="font-serif text-[18px] font-bold leading-none text-[#d6ad54]">
                {item.date}
              </h3>

              {/* Description */}
              <p className="mt-3 font-serif text-[15px] leading-[1.4] text-[#e5e0d8]">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <p className="mt-9 text-[18px] font-medium text-[#ff2b2b]">
          Coming soon...
        </p>
      </div>
    </section>
  );
};

export default ImportantDates;
