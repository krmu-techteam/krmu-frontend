import { GraduationCap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ScholarshipBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#051630] to-[#0161b0] py-8 md:p-6 lg:p-10 xl:py-12 2xl:py-16 px-4 xl:px-10 2xl:px-0">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex-1">
          <h3 className="text-2xl text-center sm:text-left md:text-3xl font-semibold text-white sm:mb-2 mb-4 flex items-center justify-center sm:justify-start gap-3">
            <GraduationCap className="w-8 h-8 md:w-9 md:h-9 text-white shrink-0" strokeWidth={1.75} />
            Scholarship 2026
          </h3>
          <p className="text-md md:text-base text-gray-200/90 sm:max-w-lg lg:max-w-3xl font-normal text-center sm:text-left sm:leading-normal lg:leading-relaxed">
            We offer up to 100% scholarships for academic toppers, sports achievers, and students across multiple categories, ensuring that ambition, hard work, and potential always find their way forward.
          </p>
        </div>
        <div className="shrink-0 w-full md:w-auto text-center md:text-right">
          <Link
            href="/admission/scholarship"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 md:px-10 md:py-3 lg:px-12 lg:py-4 bg-white text-[#051630] font-bold text-sm md:text-md rounded-sm border border-white hover:text-white hover:border-white transition-all duration-300 shadow-md text-center w-auto uppercase relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Explore
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#051630] to-[#082146] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
            <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none z-10"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipBanner;
