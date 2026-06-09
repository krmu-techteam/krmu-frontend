import SectionDivider from "@/components/common/SectionDivider";
import { MentorshipAchievementCard, MentorshipProgrammeInfo, MentorshipFeatures } from "@/modules/school";

const OpenSourceMentorshipSection = () => {
  return (
    <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white">
      {/* Outer card */}
      <div className="max-w-[1530px] mx-auto w-full relative rounded-sm">
        {/* Gradient Border Mask */}
        <div 
          className="absolute inset-0 rounded-sm pointer-events-none"
          style={{
            padding: "3px",
            background: "linear-gradient(to bottom, #002f8e, #cb000d)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude"
          }}
        ></div>
        
        <div className="rounded-sm overflow-hidden relative z-10">
          <div className="p-2.5 sm:p-5 md:p-8 lg:p-12">
            {/* ── Top Row: Achievement card (left) + Title & Description (right) ── */}
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="w-full max-w-md lg:max-w-full lg:w-3/5 xl:w-1/2 2xl:w-2/5">
                <MentorshipAchievementCard />
              </div>
              <div className="w-full lg:w-2/5 xl:w-1/2 2xl:w-3/5">
                <MentorshipProgrammeInfo />
              </div>
            </div>
           
            {/* ── What You Get ── */}
            <MentorshipFeatures />
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default OpenSourceMentorshipSection;
