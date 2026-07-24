import { GraduationCap, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ScholarshipBanner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#051630] to-[#0161b0] py-8 md:p-6 lg:p-10 xl:py-12 2xl:py-16 px-4 xl:px-10 2xl:px-0">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row justify-between items-center gap-6">
        <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-5">
          {/* Left Icon: Beautiful Rounded Circle */}
          <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/15 shadow-inner">
            <GraduationCap
              className="w-8 h-8 md:w-10 md:h-10 text-white"
              strokeWidth={1.5}
            />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              Scholarship 2026-27
            </h3>
            <p className="text-sm md:text-[15px] lg:text-base text-gray-200/90 max-w-3xl font-normal leading-relaxed">
              We offer up to 100% scholarships for academic toppers, sports
              achievers, and students across multiple categories, ensuring that
              ambition, hard work, and potential always find their way forward.
            </p>
          </div>
        </div>

        {/* Right Action Button */}
        <div className="shrink-0 w-full lg:w-auto text-center lg:text-right">
          <Link
            href="/admission/scholarship"
            target="_blank"
            className="inline-flex items-center justify-center gap-3 px-8 py-3 bg-white text-[#051630] font-bold text-sm md:text-md rounded-md border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-md text-center w-auto uppercase group"
          >
            Explore
            {/* Arrow Icon: Beautiful Rounded Circle Container */}
            <div className="w-6 h-6 rounded-full bg-[#051630]/10 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#051630] group-hover:text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipBanner;
