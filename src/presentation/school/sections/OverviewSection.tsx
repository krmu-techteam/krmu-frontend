
import Image from "next/image";
import { OVERVIEW_SECTION_IMAGES } from "@/features/school";
import { OverviewSectionProps } from "@/features/school";
import { StatCard } from "@/presentation/school/components";
import SectionDivider from "@/components/common/SectionDivider";

const OverviewSection = ({
  heading,
  subheading,
  desc,
  counters,
  slug,
}: OverviewSectionProps) => {
  return (
    <section className="relative py-8 md:py-12 xl:py-20 px-6 md:px-8 lg:px-11 2xl:px-16">
          <div className="grid max-w-[1530px] mx-auto grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {(() => {
              const displayCounters = [...(counters || [])];
              if (displayCounters.length === 3) {
                displayCounters.push({
                  id: 999999,
                  countertext: "18K+",
                  countercontent: "Alumni Worldwide",
                });
              }
              return displayCounters.map((counter, index) => (
                <StatCard
                  key={counter.id}
                  title={counter?.countertext}
                  desc={counter?.countercontent}
                  index={index}
                />
              ));
            })()}
          </div>
      <div className="max-w-[1530px] mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-12 mt-12">
        <div className="w-full lg:w-5/12 relative h-[400px] sm:h-[500px] lg:h-[450px] shrink-0">
          <Image
            src={OVERVIEW_SECTION_IMAGES[slug] || "/info.webp"}
            fill
            alt={heading || "Overview"}
            className="object-cover object-top lg:object-cover rounded-sm shadow-2xl"
            unoptimized
          />
        </div>
        <div className="w-full lg:w-7/12 flex flex-col justify-center text-white">
          <p className="text-sm md:text-base font-medium text-[#cda55d] mb-2 sm:mb-3 font-poppins">
            {subheading}
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-[42px] font-serif font-bold leading-[1.2] mb-4 sm:mb-6 tracking-tight">
            {heading}
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
            className="text-white/70 text-base md:text-[16px] leading-relaxed font-light font-poppins [&>p]:mb-4 last:[&>p]:mb-0"
          />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default OverviewSection;
