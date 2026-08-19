import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import { CinematicHeroSectionProps } from "@/features/programs";

const CinematicHeroContent = ({
  title,
  highlightitle,
  heroSection,
  formId,
  slug,
  config,
}: CinematicHeroSectionProps) => {
  return (
    <div className="flex flex-col lg:block bg-gradient-to-t from-black/90 via-black/45 to-transparent lg:bg-none px-4 pt-16 pb-0 sm:px-6 sm:pt-20 sm:pb-8 md:px-8 lg:p-0 antialiased [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] [-moz-osx-font-smoothing:grayscale]">
      <div className="mb-0 lg:mb-10">
        <h3
          className={`text-white/90 lg:block font-poppins hidden ${config.subtitleMaxWidth || "xl:max-w-[65%] 2xl:max-w-[70%]"} ${config.subtitleSize || "text-md lg:text-[14px] xl:text-lg"} font-normal uppercase tracking-[0.08em] antialiased`}
        >
          {heroSection?.subtitle}
        </h3>
        <h1
          className={`text-white ${config.titleSize} ${config.titleMaxWidth || ""} font-bold font-serif md:font-bold mb-0 lg:mb-3  leading-[1.42] lg:leading-[1.1] antialiased`}
        >
          {title}{" "}
          <span
            className={`${config.highlightClass || "text-white/90"} [&_.highlight]:text-[#f5a623] lg:leading-[1.1] font-bold antialiased`}
            dangerouslySetInnerHTML={{ __html: highlightitle }}
          />
        </h1>
        <p
          className={`text-white/90 font-poppins text-[16px] xl:text-lg  ${config.descSize} mb-4 leading-relaxed font-normal hidden lg:block lg:max-w-lg lg:text-shadow-xs xl:text-shadow-none xl:max-w-md ${config.contentMaxWidth || "2xl:max-w-lg"} antialiased tracking-[-0.005em]`}
        >
          {heroSection?.description}
        </p>

        {slug !== "bhmct-hotel-management" && (
          <div className="mt-4 lg:mt-3 mb-8 md:mb-0 xl:mt-4 flex justify-start lg:justify-start">
            {formId && (
              <NpfPopup
                formId={formId}
                btnClass={`progherobtn px-6 py-2 lg:py-2 lg:px-8 md:py-[6px] md:px-6 font-poppins text-sm md:text-[14px] lg:text-[16px] ${heroSection.herobtn.buttonclass || ""} rounded-[4px] transition-all`}
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
