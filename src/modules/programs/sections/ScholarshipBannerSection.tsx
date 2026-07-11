import { GraduationCap, ArrowUpRight } from "lucide-react";
import Button from "@/components/common/Button";

const ScholarshipBannerSection = () => {
  return (
    <section className="w-full bg-[#1e2f42]/95 border-t border-b border-white/[0.08] py-12 md:py-16 px-4 md:px-8 xl:px-16 2xl:px-0 relative z-10 overflow-hidden backdrop-blur-2xl">
      
      {/* Soft Blue Center Glow Behind the Glass Band */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-80" 
        style={{ 
          background: "radial-gradient(circle, rgba(0,85,164,0.25) 0%, rgba(0,85,164,0.08) 50%, transparent 75%)" 
        }}
      />

      <div className="max-w-[1440px] mx-auto w-full relative z-10">
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          
          {/* Left Content Area */}
          <div className="flex-1 flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-6">
            {/* Left Icon: Beautiful Rounded Circle */}
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#0055A4] flex items-center justify-center shrink-0 border border-white/10 shadow-[0_4px_12px_rgba(0,85,164,0.3)]">
              <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />
            </div>

            {/* Title and Description */}
            <div className="flex-1">
              <h3 className="heading-primary mb-2">
                Scholarship <span className="text-[#0055A4]">2026</span>
              </h3>
              <p className="text-sm md:text-base text-white/80 max-w-4xl font-poppins font-normal leading-relaxed">
                We offer up to 100% scholarships for academic toppers, sports achievers, and students across multiple categories, ensuring that ambition, hard work, and potential always find their way forward.
              </p>
            </div>
          </div>

          {/* Right Action Button - One UI Style Pill */}
          <div className="shrink-0 w-full sm:w-auto lg:w-auto mt-2 lg:mt-0 text-center">
            <Button
              href="/admission/scholarship"
              target="_blank"
              variant="primary"
              icon={ArrowUpRight}
              iconPosition="right"
              className="!bg-[#0055A4] hover:!bg-[#0055A4]/90 !shadow-[0_4px_16px_rgba(0,85,164,0.35)] transition-all duration-300 w-full sm:w-auto text-center font-medium font-poppins"
            >
              Explore
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ScholarshipBannerSection;




