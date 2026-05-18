import React from "react";
import { PhoneCall } from "lucide-react";

const MediaCTASection = () => {
  return (
    <section className="w-full bg-[#f3f0f4] py-10 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden rounded-2xl md:rounded-[32px] bg-[#001B44] px-5 sm:px-8 md:px-12 py-10 sm:py-16 md:py-24">
          <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-700/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-400/20 blur-3xl rounded-full"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="max-w-5xl text-white font-serif font-bold text-3xl sm:text-4xl md:text-[50px] leading-tight md:leading-snug">
              Ready to shape the future of media?
            </h2>
            <p className="mt-5 md:mt-8 max-w-4xl text-[#CBD5E1] text-base md:text-[20px] leading-relaxed">
              Applications for the upcoming academic session are now open.
              Secure your place in the next cohort of media leaders.
            </p>
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center gap-4 md:gap-5 w-full sm:w-auto">
              <button className="w-full sm:w-auto min-w-[260px] cursor-pointer bg-[#E21F21] hover:bg-[#d73528] transition-all duration-300 text-white text-lg md:text-xl font-medium px-6 md:px-10 py-4 md:py-5 rounded-[4px]">
                Apply Now
              </button>

              <button className="w-full sm:w-auto min-w-[260px] cursor-pointer flex items-center justify-center gap-3 md:gap-4 border border-white/20 bg-white/10 hover:bg-white/15 transition-all duration-300 text-white text-lg md:text-xl font-medium px-6 md:px-10 py-4 md:py-5 rounded-md backdrop-blur-sm">
                <PhoneCall className="w-5 h-5 md:w-6 md:h-6" />
                +91 9311411717
              </button>
            </div>
            <div className="flex gap-6 md:gap-10 mt-8 md:mt-10">
              <p className="text-white text-sm md:text-[16px] leading-relaxed">UGC Recognised</p>
              <p className="text-white text-sm md:text-[16px] leading-relaxed">NAAC A Accredited</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCTASection;