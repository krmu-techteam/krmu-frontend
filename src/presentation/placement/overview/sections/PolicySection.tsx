import Image from "next/image";
import SectionDivider from "@/components/common/SectionDivider";

const PolicySection = () => {
  return (
    <section className="relative z-5 pt-12 md:pt-16">
      {/* Top Banner Image */}
      <div className="relative w-full px-4 sm:px-6 md:px-8 xl:px-16 h-[380px] sm:h-[520px] md:h-[694px] rounded-[10px] overflow-hidden">
        <Image
          src="/images/placement/girl2.png"
          alt="Placement Policy Student"
          fill
          sizes="100vw"
          className="object-cover object-[center_20%] filter grayscale brightness-95 contrast-105 rounded-[10px]"
          priority
        />
      </div>

      {/* Overlapping Main Gradient Card (Figma specs: width 1184px, height 860px, radius 10px, opacity 0.9, linear-gradient) */}
      <div
        style={{
          background:
            "linear-gradient(180deg, #132737 58.65%, rgba(44, 104, 152, 0) 100%)",
          opacity: 0.9,
        }}
        className="relative z-10 max-w-[1184px] w-full mx-auto -mt-36 sm:-mt-52 md:-mt-[230px] rounded-[10px] p-6 sm:p-8 md:p-12 text-white flex flex-col justify-between min-h-[860px]"
      >
        <div>
          {/* Section Header */}
          <h2 className="heading-primary !font-semibold text-white mb-4 sm:mb-6">
            Placement Policy
          </h2>
          <p className="font-poppins text-white text-xs sm:text-sm md:text-[16px] leading-relaxed font-light mb-8 sm:mb-10 max-w-5xl">
            Career Development Center at KRMU often executes essential placement
            activities to generate ample placement opportunities for the
            students. Apart from inviting corporate recruiters to the campus,
            the Center dedicatedly hosts several counselling and training
            programmes to embed academic excellence in the graduates. These
            programmes equip students with the essential skills required to land
            lucrative careers. Prominent companies and HR agencies visit the
            KRMU campus every year to offer jobs with attractive packages to
            young talents.
          </p>

          {/* Policy Grid Items */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <div className="border border-[#0161B0] rounded-[4px] p-4 sm:p-5 text-xs sm:text-sm font-poppins font-light leading-relaxed text-white">
                Recruitment through the Career Development Center will be
                procured for students of KRMU only.
              </div>
              <div className="border border-[#0161B0] rounded-[4px] p-4 sm:p-5 text-xs sm:text-sm font-poppins font-light leading-relaxed text-white">
                The placement process would commence in September every year.
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              <div className="border border-[#0161B0] rounded-[4px] p-4 sm:p-5 text-xs sm:text-sm font-poppins font-light leading-relaxed text-white/90">
                Students interested in campus placement should register with the
                Center as soon as they reach the final year of their programme.
              </div>
              <div className="border border-[#0161B0] rounded-[4px] p-4 sm:p-5 text-xs sm:text-sm font-poppins font-light leading-relaxed text-white">
                Orientation and Policy talk for the registered students would be
                organised at the beginning of every academic session to provide
                an insight into the guidelines and policies of the CDC and
                introduce the placement team.
              </div>
            </div>

            {/* Row 3 (Wide Box: The placement process would involve) */}
            <div className="border border-[#0161B0] rounded-[4px] p-5 sm:p-6 text-white">
              <h3 className="font-poppins font-semibold text-sm sm:text-base text-white mb-4">
                The placement process would involve
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 font-poppins text-xs sm:text-sm text-white font-light leading-relaxed">
                <ul className="space-y-3 list-disc pl-5">
                  <li>Personal interaction with the placement team.</li>
                  <li>Apprising students about the standard resume format.</li>
                </ul>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    Training students to face the recruitment process by holding
                    group discussions and conducting mock interviews.
                  </li>
                  <li>Visit of employers for recruitment.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
