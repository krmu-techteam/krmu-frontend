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
    <section className="relative py-10 md:py-12 xl:py-20">
      <div className="grid max-w-[1440px] mx-auto grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 px-4 md:px-8 xl:px-12">
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
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-12 w-full flex flex-col lg:flex-row items-center gap-8 xl:gap-12 mt-12">
        <div className="w-full lg:w-4/12 shrink-0">
          <Image
            src={OVERVIEW_SECTION_IMAGES[slug] || "/info.webp"}
            width={600}
            height={600}
            alt={heading || "Overview"}
            className="w-full h-auto object-cover rounded-[2px] sm:rounded-[4px]"
            unoptimized
          />
        </div>
        <div className="w-full lg:w-8/12 flex flex-col justify-center text-white">
          <p className="text-[14px] xl:text-base font-medium text-[#cda55d] mb-2 xl:mb-3 font-poppins">
            {subheading}
          </p>
          <h3 className="heading-primary mb-4 xl:mb-6">{heading}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
            className="text-white/90 text-justify sm:text-left text-[15px] xl:text-[16px] leading-relaxed font-light font-poppins [&>p]:mb-4 last:[&>p]:mb-0"
          />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default OverviewSection;
