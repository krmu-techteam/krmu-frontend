"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import Button from "@/components/common/Button";

export const SdgContentSection: React.FC = () => {
  return (
    <section className="w-full text-white pt-4 pb-12 sm:pb-16 px-4 sm:px-6 md:px-10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-0 items-start">
        {/* Left Column: Text Content & Policy Link (7-8 Columns on LG) */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-5">
          <h2 className="text-xl sm:text-2xl md:text-[22px] font-semibold text-white tracking-tight">
            SDG-1: No Poverty
          </h2>

          <div className="space-y-5 text-gray-300 text-sm sm:text-[16px] leading-relaxed font-poppins font-normal text-justify">
            <p>
              With a strong commitment to SDG Goal 1: No Poverty, K.R. Mangalam
              University (KRMU) works to establish an inclusive academic
              environment that empowers students from all socioeconomic
              backgrounds. Financial limitations never prevent access to
              high-quality education, in keeping with the University’s mission
              to promote employability and entrepreneurship through a futuristic
              curriculum, instill lifelong learning, and integrate global needs
              through collaboration.
            </p>

            <p>
              KRMU actively promotes the enrollment of students from households
              in the bottom 20% of income brackets in order to foster
              socioeconomic diversity. The University’s financial aid programs
              and inclusive admissions policy are intended to help
              underprivileged and marginalized communities access education,
              fostering equality and social mobility. Meritorious students are
              identified and given support through a thorough scholarship
              framework that takes into account their academic achievement,
              leadership abilities, and cultural, artistic, and athletic
              talents.
            </p>

            <p>
              KRMU takes a comprehensive approach to student welfare in addition
              to offering scholarships. Students from low-income families can
              concentrate on their education without experiencing undue hardship
              thanks to programs like on-campus food banks, subsidized meal
              plans, affordable housing, and discounted transportation. A
              proactive Student Affairs Office and legal aid clinics also offer
              advocacy, support, and guidance to students’ socioeconomic and
              legal issues. The University hosts financial literacy seminars,
              mentorship programs, and counseling sessions to help students
              build their resilience, confidence, and well-being in line with
              its mission to foster lifelong learning through stimulating
              research and creative thinking. Students can further balance their
              education with financial obligations by taking advantage of
              flexible learning pathways, such as work-study and part-time
              options. By these persistent efforts, K.R. Mangalam University
              maintains its dedication to ending poverty via education,
              guaranteeing that all students, regardless of financial situation,
              have access to equal opportunities, dignity, and a path to
              success.
            </p>
          </div>

          {/* Action Button: Policies on No Poverty using Common Button */}
          <div className="pt-3">
            <Button
              href="https://www.krmangalam.edu.in/policies-on-no-poverty/"
              target="_blank"
              variant="outline"
              icon={Download}
              iconPosition="left"
              className="!w-auto !inline-flex border border-white/30 hover:border-[#E5243B] bg-[#0c1e2c]/50 hover:bg-[#E5243B]/20 text-white font-medium text-sm sm:text-base rounded-[4px] px-6 py-3 h-auto !capitalize"
            >
              Policies on No Poverty
            </Button>
          </div>
        </div>

        {/* Right Column: SDG Goal Card & Report Link (4 Columns on LG) */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="w-full max-w-[340px] sm:max-w-[380px] bg-[#081b29] border border-[#E5243B] rounded-[4px] overflow-hidden transition-all duration-300 p-1">
            {/* Tile Image */}
            <div className="relative aspect-square w-full bg-[#E5243B]">
              <Image
                src="/images/sustainability/goals/g1.jpg"
                alt="SDG 1 No Poverty Tile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 380px"
                priority
              />
            </div>

            {/* Bottom Report Link Bar using Common Button */}
            <div className="pt-1">
              <Button
                href="https://www.krmangalam.edu.in/pdfs/sdg/sdg-annual-reports/2023-2024/SDG-1-2023-24.pdf"
                target="_blank"
                variant="outline"
                icon={Download}
                iconPosition="left"
                className="w-full !border-none bg-[#0a1824] hover:bg-[#E5243B]/30 text-white font-medium text-sm sm:text-[16px] border-t border-red-500/40 rounded-none h-auto py-3.5 !capitalize"
              >
                SDG Report 2023-24
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
