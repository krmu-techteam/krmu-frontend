import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getSchoolProgrammeInfoByDegree } from "@/lib/api/school-programmes";
import { getProgramMetadata } from "@/services/programs.service";
import { ExploreProgramsSectionProps } from "@/features/programs";
import { HoverCard } from "../components";

// Map schoolCategorySlug to school-specific student cutout images
const SCHOOL_STUDENT_CUTOUTS = {
  soet: {
    src: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/BBA_d4936f5bd4.png",
    alt: "SOET Engineering Student",
    className:
      "lg:translate-x-[-40%] lg:translate-y-[0%] xl:translate-x-[-40%] xl:translate-y-[0%] 2xl:translate-x-[-45%] 2xl:translate-y-0",
  },
};

export default async function ExploreProgramsSection({
  currentSlug,
}: ExploreProgramsSectionProps) {
  const { schoolCategoryName, schoolCategorySlug, degreeName } =
    await getProgramMetadata(currentSlug);

  if (!schoolCategoryName || !degreeName) return null;

  let categoryPrograms = [];
  try {
    categoryPrograms = await getSchoolProgrammeInfoByDegree(
      degreeName,
      schoolCategoryName,
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
  const cutout =
    SCHOOL_STUDENT_CUTOUTS[slugKey as keyof typeof SCHOOL_STUDENT_CUTOUTS] ||
    SCHOOL_STUDENT_CUTOUTS["soet"];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Building Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bg_university_de1b82693c.png')`,
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 2xl:px-0 relative z-10">
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-16 items-stretch">
          {/* Absolute Left Column: Student Banner */}
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

          {/* Spacer Column in Grid */}
          <div className="hidden lg:block lg:w-[40%] xl:w-[35%] pointer-events-none" />

          {/* Right Column: Content & Grid */}
          <div className="w-full lg:w-[60%] xl:w-[65%] flex flex-col justify-center py-10 lg:py-24 xl:py-28">
            <div className="text-left lg:mb-4 2xl:mb-6">
              <h2 className="heading-primary !text-[28px] md:text-[42px] text-center md:text-left mb-5 md:[text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]">
                Explore Other Programmes
              </h2>
              <p className="text-white text-justify font-poppins font-normal leading-relaxed md:text-left md:[text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] max-w-3xl text-[16px] md:text-[15px] xl:text-[17px] 2xl:text-[18px] mb-4 sm:mb-4 lg:mb-0">
                Discover other programmes that open doors to exciting career
                opportunities and future growth. Choose from a wide range of
                industry-oriented courses designed to help you build a successful
                future with confidence.
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
                    <div className="absolute top-0 right-0 text-white group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-500 ease-out">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>

                    <div className="pr-4 xl:pr-6 2xl:pr-8 flex flex-col justify-center h-full">
                      <span
                        className="text-white text-[18px] xl:text-[16px] 2xl:text-[17px] font-normal leading-snug font-poppins tracking-wide group-hover:text-white/95 transition-colors duration-500 ease-out [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]"
                        dangerouslySetInnerHTML={{
                          __html: prog.title,
                        }}
                      />
                      {prog.highlightitle && (
                        <span
                          className="text-white/80 font-poppins font-normal text-[13px] sm:text-[14px] leading-snug mt-1.5 group-hover:text-white/80 transition-colors duration-500 ease-out [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)]"
                          dangerouslySetInnerHTML={{
                            __html: prog.highlightitle,
                          }}
                        />
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
                className="inline-flex items-center gap-2 text-white hover:text-white transition-all duration-300 group font-poppins font-normal text-[14px] uppercase cursor-pointer"
              >
                <span className="relative py-1">
                  Explore More
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
                </span>
                <ArrowRight className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
