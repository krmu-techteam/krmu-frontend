import Link from "next/link";
import SectionDivider from "@/components/common/SectionDivider";
import { StatCard } from "@/components/common/StatCard";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import {
  ABOUT_STAT_BG_COLORS,
  ADecadeLeftCol,
  ADecadeRightCol,
} from "@/features/home";
import { getAboutStats } from "../utils";

export function AboutSection({
  topContent,
  bottomContent,
}: {
  topContent: ADecadeLeftCol;
  bottomContent: ADecadeRightCol;
}) {
  const aboutStats = getAboutStats(bottomContent);
  return (
    <section className="relative w-full overflow-hidden py-8 md:py-12 xl:py-20 font-poppins text-center transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,162,255,0.08)_0%,transparent_70%)] rounded-full blur-[100px] z-0 pointer-events-none"></div>
      <div className="relative z-10">
        <div className="max-w-5xl mx-auto relative mb-6 md:mb-8 xl:mb-12">
          <span className="inline-block bg-[#041726] text-brand-gold px-3 py-1 text-md xl:text-[20px] font-medium capitalize tracking-normal mb-6 rounded-[4px] border border-white/5 font-poppins">
            {topContent?.adecadesubtitle}
          </span>

          <SectionTitle title={topContent?.adecadetitle} />

          <p className="max-w-5xl mx-auto text-white/70 text-base md:text-[16px] leading-relaxed mb-6 font-light font-poppins">
            {topContent?.adecadedescription
              ?.split("NAAC 'A' accredited")
              .map((part, idx, arr) => (
                <span key={idx}>
                  {part}
                  {idx < arr.length - 1 && (
                    <span className="text-white font-medium ">
                      NAAC &apos;A&apos; accredited
                    </span>
                  )}
                </span>
              ))}
          </p>

          <Link
            href={topContent?.button1link}
            className="inline-flex gap-1 items-center text-[16px] font-light tracking-wide text-white hover:text-white/70  transition-colors duration-300"
          >
            <span>
              <ArrowRight size={18} />
            </span>
            <span>Know More</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-4">
          {aboutStats.map((stat, idx) => (
            <StatCard
              key={idx}
              bgColor={ABOUT_STAT_BG_COLORS[idx % ABOUT_STAT_BG_COLORS.length]}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>
      </div>

      <SectionDivider />
    </section>
  );
}
