import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GraduationCap } from "lucide-react";
import { getSchoolProgrammeInfoByDegree } from "@/lib/api/school-programmes";
import { getProgramMetadata } from "@/services/programs.service";

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

  const otherPrograms = categoryPrograms
    .filter((p) => p.programmeslug !== currentSlug)
    .slice(0, 6);

  if (otherPrograms.length === 0) return null;

  return (
    <section className="relative w-full bg-[#051730] pt-12 md:pt-12 pb-12 md:pb-16 overflow-hidden border-t border-gray-800">
      {/* Background Building Image (Subtle Overlay) */}
      <div className="absolute inset-0 opacity-30 bg-[url('/heroimage1.webp')] bg-cover bg-center mix-blend-lighten pointer-events-none"></div>

      {/* Red Side Accent Block */}
      <div className="absolute top-0 left-0 w-[80%] sm:w-[60%] md:w-[40%] lg:w-[28%] h-full bg-[#dc2626]"></div>

      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-stretch h-full">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-[30%] flex justify-center lg:justify-end items-end relative mt-8 lg:mt-0 lg:-mb-16">
            <Image
              src="/schools/advantages-girl.webp"
              alt="Student"
              width={600}
              height={800}
              className="relative w-auto h-[350px] md:h-[450px] lg:h-[600px] object-contain object-bottom drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] z-10 -scale-x-100"
              priority
            />
          </div>

          {/* Right Column: Content & Grid */}
          <div className="w-full lg:w-[70%] flex flex-col justify-center py-4 lg:py-8">
            
            <div className="text-left mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 flex flex-wrap items-center gap-3">
                Explore Other
                <span className="bg-[#dd3030]/80 px-4 py-1.5 text-white inline-block rounded-sm shadow-md">
                  Programs
                </span>
              </h2>
              <p className="text-gray-300 mt-4 max-w-2xl text-base md:text-lg leading-relaxed">
                Experience the pinnacle of higher education with {schoolCategoryName}, providing diverse learning options, career-oriented services, and a curriculum aligned with industry standards.
              </p>
            </div>

            {/* 2x3 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full mb-10">
              {otherPrograms.map((prog, index) => (
                <Link
                  href={`/programs/${prog.programmeslug}`}
                  key={index}
                  className="flex flex-col p-5 lg:p-6 bg-white rounded-md shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 group min-h-[150px] transform hover:-translate-y-1"
                >
                  {/* Top Centered Icon */}
                  <div className="flex justify-center mb-5 mt-1">
                    <div className="text-gray-600 group-hover:text-[#dd3030] transition-colors duration-300">
                      <GraduationCap className="w-10 h-10 stroke-[1.5]" />
                    </div>
                  </div>
                  
                  {/* Bottom Text with Left Border */}
                  <div className="mt-auto border-l-[3px] border-gray-600 group-hover:border-[#dd3030] pl-3.5 min-h-[40px] flex items-center transition-colors duration-300">
                    <span className="text-[14px] md:text-[15px] font-semibold text-gray-700 group-hover:text-[#dd3030] transition-colors leading-snug line-clamp-3">
                      {prog.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="w-full flex justify-start">
              <Link 
                href={`/programmes?school=${schoolCategorySlug || ""}`}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-[#051730] font-bold text-[15px] rounded-sm shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
              >
                Explore All Programs
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
