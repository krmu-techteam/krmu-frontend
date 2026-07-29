import SectionDivider from "@/components/common/SectionDivider";
import {
  MentorshipAchievementCard,
  MentorshipProgrammeInfo,
  MentorshipFeatures,
} from "@/presentation/school/components";

const OpenSourceMentorshipSection = () => {
  return (
    <section className="relative py-10 sm:py-12 xl:py-20 text-white font-poppins">
      <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 lg:px-12 relative">
        {/* Outer card */}
        <div className="relative rounded-sm">
          {/* Gradient Border Mask */}
          <div
            className="absolute inset-0 rounded-sm pointer-events-none"
            style={{
              padding: "3px",
              background: "linear-gradient(to bottom, #002f8e, #cb000d)",
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          ></div>

          <div className="rounded-sm overflow-hidden relative z-10">
            <div className="p-4 sm:p-6 md:p-8 xl:p-12">
              {/* ── Top Row: Achievement card (left) + Title & Description (right) ── */}
              <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 items-stretch lg:items-center">
                <div className="w-full lg:w-1/2 xl:w-[48%] 2xl:w-[45%]">
                  <MentorshipAchievementCard />
                </div>
                <div className="w-full lg:w-1/2 xl:w-[52%] 2xl:w-[55%]">
                  <MentorshipProgrammeInfo />
                </div>
              </div>

              {/* ── What You Get ── */}
              <MentorshipFeatures />
            </div>
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default OpenSourceMentorshipSection;
