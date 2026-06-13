"use client";
import {
  ArrowRight,
  Phone,
  Download,
  GraduationCap,
  Headphones,
  BookOpen,
} from "lucide-react";
import { SchoolCategoryType } from "@/lib/types/school-programme";
import Button from "@/components/common/Button";

type Props = {
  schoolCat: SchoolCategoryType;
};

export const ActionCards = ({ schoolCat }: Props) => {

  const brochureLinks: Record<string, string> = {
    soet: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOET_Print2_2174445457.pdf",
    somc: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOMC_a992b7ec7f.pdf",
    sols: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOLS_Print_399f0d11d3.pdf",
    smas: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SMAS_Print_ec7f43f883.pdf",
    sprs: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SPRS_Print_3_17f374576b.pdf",
    sola: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOLA_Print2_d64c6893cd.pdf",
    soad: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOAD_Print_bede034fe7.pdf",
    sbas: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SBAS_Print_e7613fb246.pdf",
    semce: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SJMC_Print2_dadeaa8143.pdf",
    soed: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOED_Print2_ea2b3a76ee.pdf",
    soas: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/SOAS_Print_d94bbd699d.pdf",
  };

  const brochureLink = brochureLinks[schoolCat?.slug] || "#";

  return (
    <section className="relative py-12 md:py-16 lg:py-20 px-4 lg:px-16 2xl:px-0 overflow-hidden">
      <div className="relative z-10 xl:max-w-[1440px] 2xl:max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 1. APPLY NOW - Spans 2 Columns on Desktop */}
          <div className="lg:col-span-2 bg-[#071321] backdrop-blur-md border border-white/[0.08] hover:border-[#CB000D]/40 rounded-sm p-8 md:p-10 flex flex-row items-center justify-between gap-8 shadow-lg transition-all duration-500 hover:shadow-2xl relative overflow-hidden group">
            {/* Spotlight Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_center,rgba(203,0,13,0.12),transparent_70%)]" />

            <div className="flex-1 flex flex-col items-start text-left h-full">
              <h3 className="text-2xl font-semibold font-poppins text-white mb-3 tracking-tight">
                Apply Now
              </h3>
              <p className="text-sm md:text-base text-white/70 font-poppins leading-relaxed mb-8 max-w-lg">
                Login to your application page to start your application and reserve your place in the class of 2026.
              </p>
              <Button
                href="#apply-form"
                variant="primary"
                icon={ArrowRight}
                iconPosition="right"
                className="!bg-[#CB000D] hover:!bg-[#CB000D]/90 text-white !text-sm !h-auto !py-3 !px-8 shadow-[0_4px_16px_rgba(203,0,13,0.3)] transition-all duration-300 w-full sm:w-auto font-poppins active:scale-[0.97] hover:scale-[1.02] mt-auto self-start"
              >
                Apply Now
              </Button>
            </div>

            {/* Decorative Icon Graphic */}
            <div className="hidden sm:flex shrink-0 items-center justify-center w-32 h-32 rounded-sm bg-[#CB000D]/5 border border-[#CB000D]/15 text-[#CB000D] group-hover:scale-105 group-hover:bg-[#CB000D]/10 transition-all duration-500 relative overflow-hidden">
              <GraduationCap className="w-16 h-16 text-[#CB000D]/85" strokeWidth={1} />
              <div className="absolute -right-2 -bottom-2 w-12 h-12 rounded-full bg-[#CB000D]/10 blur-xl"></div>
            </div>
          </div>

          {/* 2. CONNECT - Spans 1 Column on Desktop */}
          <div className="lg:col-span-1 bg-[#071321] backdrop-blur-md border border-white/[0.08] hover:border-blue-400/40 rounded-sm p-8 flex flex-col items-start text-left shadow-lg transition-all duration-500 hover:shadow-2xl relative overflow-hidden group">
            {/* Spotlight Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_center,rgba(96,165,250,0.1),transparent_70%)]" />

            <div className="mb-6 p-4 rounded-sm border bg-blue-500/10 border-blue-500/20 text-blue-400 group-hover:scale-105 transition-all duration-500 self-start shrink-0">
              <Headphones className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
            </div>
            
            <h3 className="text-2xl font-semibold font-poppins text-white mb-2 tracking-tight">
              Connect
            </h3>
            <p className="text-sm text-white/70 font-poppins leading-relaxed mb-8 flex-grow">
              If you would like to speak to an admission counselor please connect with us.
            </p>
            <Button
              href="tel:9311411717"
              variant="primary"
              icon={Phone}
              iconPosition="right"
              className="!bg-white hover:!bg-white/95 !text-[#021429] font-semibold !text-sm !h-auto !py-3 !px-8 shadow-[0_4px_16px_rgba(255,255,255,0.15)] transition-all duration-300 w-full font-poppins active:scale-[0.97] hover:scale-[1.02] mt-auto self-start"
            >
              Talk Now
            </Button>
          </div>

          {/* 3. BROCHURE - Spans 3 Columns (Full Width) on Desktop */}
          <div className="lg:col-span-3 bg-[#071321] backdrop-blur-md border border-white/[0.08] hover:border-[#0055A4]/40 rounded-sm p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-10 shadow-lg transition-all duration-500 hover:shadow-2xl relative overflow-hidden group">
            {/* Spotlight Glow */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(500px_circle_at_center,rgba(0,85,164,0.12),transparent_70%)]" />

            <div className="flex items-start gap-5 md:gap-6 flex-1 w-full">
              {/* Icon */}
              <div className="p-4 rounded-sm border bg-[#0055A4]/10 border-[#0055A4]/20 text-[#0055A4] group-hover:scale-105 transition-all duration-500 shrink-0">
                <BookOpen className="w-8 h-8 text-[#0055A4]" strokeWidth={1.5} />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-2xl font-semibold font-poppins text-white mb-2 tracking-tight">
                  Brochure
                </h3>
                <p className="text-sm md:text-base text-white/70 font-poppins leading-relaxed max-w-3xl">
                  Download our latest prospectus for a detailed look at our program offerings.
                </p>
              </div>
            </div>

            {/* Button */}
            <div className="shrink-0 w-full md:w-auto flex justify-start md:justify-end mt-2 md:mt-0">
              <Button
                href={brochureLink}
                variant="primary"
                icon={Download}
                iconPosition="right"
                className="!bg-[#0055A4] hover:!bg-[#0055A4]/90 text-white shadow-[0_4px_16px_rgba(0,85,164,0.3)]  !text-sm !h-auto !py-3 !px-8 transition-all duration-300 w-full md:w-auto font-poppins active:scale-[0.97] hover:scale-[1.02]"
              >
                Download Now
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
