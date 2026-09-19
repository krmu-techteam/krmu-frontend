import { researchAreas } from "../constant";

const ConferenceTracks = () => {
  return (
    <section className="bg-[#19241F] py-14 sm:py-16 md:py-20 xl:py-24 px-5 sm:px-6 md:px-10 xl:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <p className="font-bold text-xs sm:text-sm tracking-[1.5px] text-[#C3A342]">
            CONFERENCE TRACKS
          </p>

          <h3 className="text-white text-2xl sm:text-3xl font-bold font-lora leading-tight">
            Ten tracks, one shared goal
          </h3>
        </div>

        {/* Tracks */}
        <div className="space-y-0 pb-4 sm:pb-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="py-5 sm:py-6 flex items-start gap-4 sm:gap-5 md:gap-6 not-last:border-b border-[#404c45]"
            >
              {/* Number */}
              <div className="w-9 sm:w-10 md:w-[4.86%] shrink-0">
                <h5 className="text-[#c3a342] text-2xl sm:text-[28px] md:text-[32px] leading-none font-lora font-bold">
                  {index + 1}
                </h5>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-2">
                <h4 className="text-white text-base sm:text-lg leading-snug">
                  {area.title}
                </h4>

                <p className="text-[#BFC7BF] text-xs sm:text-sm leading-5 sm:leading-6">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Special Sessions */}
        <div className="pt-10 sm:pt-12 md:pt-14 text-center">
          <p className="text-xs sm:text-sm font-bold tracking-[1.5px] text-[#C3A342] mb-5">
            SPECIAL SESSIONS
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <p className="text-xs sm:text-sm border border-[#404c45] py-2.5 px-3 sm:px-4 rounded-full text-white">
              Young Scientist Forum
            </p>

            <p className="text-xs sm:text-sm border border-[#404c45] py-2.5 px-3 sm:px-4 rounded-full text-white">
              Women in Science and Engineering
            </p>

            <p className="text-xs sm:text-sm border border-[#404c45] py-2.5 px-3 sm:px-4 rounded-full text-white">
              Startup & Innovation Showcase
            </p>

            <p className="text-xs sm:text-sm border border-[#404c45] py-2.5 px-3 sm:px-4 rounded-full text-white">
              Research Scholars' Poster Competition
            </p>

            <p className="text-xs sm:text-sm border border-[#404c45] py-2.5 px-3 sm:px-4 rounded-full text-white">
              Best Oral Presentation Awards
            </p>

            <p className="text-xs sm:text-sm border border-[#404c45] py-2.5 px-3 sm:px-4 rounded-full text-white">
              Best Poster Awards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceTracks;