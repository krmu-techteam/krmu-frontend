import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import { CinematicHeroSectionProps } from "@/features/programs/types";

const CinematicHeroContent = ({
  title,
  highlightitle,
  heroSection,
  formId,
  slug,
  config,
}: CinematicHeroSectionProps) => {
  return (
    <div className="flex flex-col lg:block bg-gradient-to-t from-black/95 via-black/40 to-transparent lg:bg-none px-6 pt-14 pb-6 sm:px-6 sm:pt-20 sm:pb-8 md:px-8 lg:p-0">
      <div className="mb-0 lg:mb-10">
        <h3
          className={`text-white/90 lg:block hidden ${config.subtitleMaxWidth || "xl:max-w-[65%] 2xl:max-w-[70%]"} [text-shadow:0px_4px_4px_rgba(0,0,0,0.6)] ${config.subtitleSize || "text-md lg:text-[14px] xl:text-lg"} font-normal uppercase tracking-[0.05em] drop-shadow-md`}
        >
          {heroSection?.subtitle}
        </h3>
        <h1
          className={`text-white ${config.titleSize} ${config.titleMaxWidth || ""} font-semibold md:font-bold mb-0 lg:mb-3 leading-[1.1] antialiased [text-shadow:0px_4px_8px_rgba(0,0,0,0.5)]`}
        >
          {title}{" "}
          <span
            className={`${config.highlightClass || "text-white/90"} [&_.highlight]:text-[#f5a623] font-semibold antialiased [text-shadow:0px_4px_8px_rgba(0,0,0,0.5)]`}
            dangerouslySetInnerHTML={{ __html: highlightitle }}
          />
        </h1>
        <p
          className={`text-white/95 text-[15px] xl:text-lg [text-shadow:0px_4px_4px_rgba(0,0,0,0.6)] ${config.descSize} mb-4 leading-relaxed font-normal hidden lg:block lg:max-w-xs xl:max-w-md ${config.contentMaxWidth || "2xl:max-w-lg"}`}
        >
          {heroSection?.description}
        </p>

        {slug !== "bhmct-hotel-management" && (
          <div className="mt-4 lg:mt-3 mb-8 xl:mt-4 flex justify-start lg:justify-start">
            {formId && (
              <NpfPopup
                formId={formId}
                btnClass={`progherobtn px-6 py-2 lg:py-2 lg:px-8 md:py-[8px] md:px-6 text-sm md:text-[14px] lg:text-lg ${heroSection.herobtn.buttonclass || ""} rounded-md shadow-xl transition-all`}
                btnText={`${heroSection.herobtn.buttontext || "Apply Now"}`}
                showIcon={false}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CinematicHeroContent;
