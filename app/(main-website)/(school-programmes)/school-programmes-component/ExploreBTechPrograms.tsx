import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getSchoolProgrammeInfoByDegree } from "@/lib/api/school-programmes";
import { getProgramMetadata } from "@/services/programs.service";
import HoverCard from "./HoverCard";

// Map schoolCategorySlug to school-specific student cutout images
const SCHOOL_STUDENT_CUTOUTS = {
  "soet": {
    src: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/BBA_d4936f5bd4.png",
    alt: "SOET Engineering Student",
    className: "lg:translate-x-[-40%] lg:translate-y-[0%] xl:translate-x-[-40%] xl:translate-y-[0%] 2xl:translate-x-[-45%] 2xl:translate-y-0",
  },

};

export default async function ExplorePrograms({ 
  currentSlug
}: { 
  currentSlug: string;
}) {
  const { schoolCategoryName, schoolCategorySlug, degreeName } = await getProgramMetadata(currentSlug);

  if (!schoolCategoryName || !degreeName) return null;

  let categoryPrograms = [];
  try {
    categoryPrograms = await getSchoolProgrammeInfoByDegree(
      degreeName,
      schoolCategoryName
    );
  } catch (error) {
    console.error(`Failed to fetch ${schoolCategoryName} programs:`, error);
    return null;
  }

  // Slice to 4 programs for a perfect 2x2 grid layout
  const otherPrograms = categoryPrograms
    .filter((p) => p.programmeslug !== currentSlug)
    .slice(0, 4);

  if (otherPrograms.length === 0) return null;

  // Retrieve school-specific cutout, falling back to engineering
  const slugKey = (schoolCategorySlug || "").toLowerCase().trim();
  const cutout = SCHOOL_STUDENT_CUTOUTS[slugKey as keyof typeof SCHOOL_STUDENT_CUTOUTS] || 
    SCHOOL_STUDENT_CUTOUTS["soet"];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Building Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url('https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bg_university_de1b82693c.png')` }}
      ></div>
  
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 2xl:px-0 relative z-10">
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-16 items-stretch">
          
          {/* Absolute Left Column: Student Banner (Locked inside the 1440px container on desktop, zero gap top & bottom!) */}
          <div className="hidden lg:flex absolute lg:-left-10 2xl:left-0 top-0 bottom-0 w-[40%] xl:w-[35%] justify-center items-end pointer-events-none">
        
            
        {/* Student Cutout Image */}
        <Image
          src={cutout.src}
          alt={cutout.alt}
          width={650}
          height={850}
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-auto h-full object-cover object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] select-none origin-bottom ${cutout.className}`}
          priority
          unoptimized
        />
          </div>

          {/* Spacer Column in Grid: Reserves space for the absolute student banner on desktop */}
          <div className="hidden lg:block lg:w-[40%] xl:w-[35%] pointer-events-none"></div>

          {/* Right Column: Content & Grid */}
          <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col justify-center py-8 md:py-6 lg:py-24 xl:py-28">
            
            <div className="text-left lg:mb-4 2xl:mb-6">
              <h2 className="text-2xl text-center md:text-left md:text-[32px] xl:text-[40px] font-semibold text-white mb-2 tracking-tight [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
                Explore Other Programmes
              </h2>
              <p className="text-[#d1cce5] text-center md:text-left [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] max-w-3xl text-[15px] md:text-[15px]  xl:text-[17px] 2xl:text-[18px] leading-relaxed mb-4 sm:mb-4 lg:mb-0">
                Discover other programmes that open doors to exciting career Portunities and future growth. Choose from a wide range of industry-oriented courses designed to help you build a successful future with confidence.
              </p>
            </div>

            {/* 2x2 Grid of dark glossy cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-2">
              {otherPrograms.map((prog, index) => (
                <HoverCard
                  href={`/programs/${prog.programmeslug}`}
                  key={index}
                  className="w-full"
                >
                  {/* Container for content and arrow */}
                  <div className="relative w-full h-full flex flex-col justify-center min-h-[86px]">
                    {/* Top Right Arrow Icon */}
                    <div className="absolute top-0 right-0 text-gray-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-out">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>

                    <div className="pr-4 xl:pr-6 2xl:pr-8 flex flex-col justify-center h-full">
                      <span className="text-white text-[15px] md:text-[12.5px] xl:text-[16px] 2xl:text-[17px] font-normal leading-snug tracking-wide group-hover:text-white/95 transition-colors duration-500 ease-out [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]" dangerouslySetInnerHTML={{
                        __html: prog.title
                      }}>
                      </span>
                      {prog.highlightitle && (
                        <span className="text-[#a59ebf] text-[13px] sm:text-[14px] leading-snug mt-1.5 group-hover:text-white/80 transition-colors duration-500 ease-out [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]" dangerouslySetInnerHTML={{
                          __html: prog.highlightitle
                        }}>
                        </span>
                      )}
                    </div>
                  </div>
                </HoverCard>
              ))}
            </div>

            {/* Explore More link on the bottom right */}
            <div className="w-full flex justify-end mt-4">
              <Link 
                href={`/programmes?school=${schoolCategorySlug || ""}`}
                className="inline-flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 group font-semibold text-[13px] sm:text-[14px] tracking-widest uppercase cursor-pointer"
              >
                <span className="relative py-1">
                  Explore More
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                </span>
                <span className="relative flex items-center justify-center w-8 h-8 rounded-full border border-white/20 group-hover:border-white group-hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-8 absolute" />
                  <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 -translate-x-8 group-hover:translate-x-0 absolute" />
                </span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

