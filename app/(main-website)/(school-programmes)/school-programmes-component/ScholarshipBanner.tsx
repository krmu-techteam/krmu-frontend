import Link from "next/link";

const ScholarshipBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#051630] to-[#0161b0] py-8 md:p-6 xl:py-12 2xl:py-16 px-4 xl:px-10 2xl:px-0">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Scholarship 2026
          </h3>
          <p className="text-sm md:text-base text-gray-200/90 sm:max-w-lg lg:max-w-3xl font-normal sm:leading-normal lg:leading-relaxed">
            We offer up to 100% scholarships for academic toppers, sports achievers, and students across multiple categories, ensuring that ambition, hard work, and potential always find their way forward.
          </p>
        </div>
        <div className="shrink-0 w-full md:w-auto text-left md:text-right">
          <Link
            href="/admission/scholarship"
            target="_blank"
            className="inline-block md:px-10 md:py-2.5 lg:px-10 lg:py-3.5 bg-white text-[#051630] font-bold text-sm md:text-base rounded-sm hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md text-center w-full md:w-auto"
          >
            Explore
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipBanner;
