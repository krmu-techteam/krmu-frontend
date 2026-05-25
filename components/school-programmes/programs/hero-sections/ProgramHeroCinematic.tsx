
import { HeroSection } from "@/lib/types/school-programme";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import NoPaperForm from "@/lib/constants/NoPaperForm";
import { StrapiMedia } from "@/lib/types/common";
import ConnectingDreamSlider from "@/app/(main-website)/(school-programmes)/school-programmes-component/ConnectingDreamSlider";
import { heroConfigs } from "../data/programs";

type Props = {
  title: string;
  highlightitle: string;
  heroSection: HeroSection;
  formId?: string;
  slug: string;
  dreamcareerSection?: {
    highestpackagenum: string;
    highestpackagetitle: string;
    campusrecruitersnum: string;
    campusrecruitertitle: string;
    placementassistnum: string;
    placementassisttitle: string;
    heading: string;
  };
  logos?: StrapiMedia[];
};

const ProgramHeroCinematic = ({
  title,
  highlightitle,
  heroSection,
  formId,
  slug,
  dreamcareerSection,
  logos,
}: Props) => {
  const config = heroConfigs[slug] || heroConfigs["bba-hr"];
 
  return (
    <>
      <section 
        className="hero-cinematic-overlay pt-[280px] sm:pt-[320px] md:pt-[360px] lg:pt-32 xl:pt-40 pb-0 lg:pb-12 overflow-x-hidden 2xl:px-0 overflow-hidden 
        [background-position:var(--bg-pos-mobile)] sm:[background-position:var(--bg-pos-tablet)] lg:[background-position:var(--bg-pos-desktop)] 
        [background-size:var(--bg-size-mobile)] sm:[background-size:var(--bg-size-tablet)] lg:[background-size:var(--bg-size-desktop)] 
        bg-no-repeat relative before:content-[''] before:absolute before:top-0 before:left-0 
        before:h-full before:w-full lg:before:w-[var(--overlay-width)] before:z-0"
        style={{ 
          backgroundImage: `url(${config.bgUrl})`,
          '--bg-pos-desktop': config.bgPosition || 'center center',
          '--bg-pos-tablet': config.tabletBgPosition || '60% center',
          '--bg-pos-mobile': config.mobileBgPosition || 'center -120px',
          '--bg-size-desktop': config.bgSize || 'cover',
          '--bg-size-tablet': config.tabletBgSize || 'cover',
          '--bg-size-mobile': config.mobileBgSize || '240%',
          '--overlay-start-desktop': `rgba(0,0,0,${config.overlayOpacity || '0.85'})`,
          '--overlay-start-mobile': 'rgba(0,0,0,0.5)',
          '--overlay-width': config.overlayWidth || '45%'
        } as React.CSSProperties}
      >
        <div className="max-w-[1800px] mx-auto w-full flex flex-col lg:flex-row lg:items-center justify-center gap-8 lg:px-10 xl:px-0 xl:gap-16 z-10 2xl:px-0">
          <div className="w-full lg:w-[60%] xl:w-1/2 relative z-10">
            <div className="xl:max-w-[700px] w-full">
              <div className="flex flex-col lg:block bg-gradient-to-t from-black/90 via-black/50 to-transparent lg:bg-none px-6 sm:px-4 md:px-6 lg:p-0">
                <div className="mb-0 lg:mb-10">
                  <h3 className={`text-white/90 lg:block hidden ${config.subtitleMaxWidth || "xl:max-w-[65%] 2xl:max-w-[70%]"} [text-shadow:0px_4px_4px_rgba(0,0,0,0.6)] ${config.subtitleSize || "text-md lg:text-[14px] xl:text-lg"} font-normal uppercase tracking-[0.05em] drop-shadow-md`}>
                    {heroSection?.subtitle}
                  </h3>
                  <h1 className={`text-white ${config.titleSize} ${config.titleMaxWidth || ""} font-semibold md:font-bold mb-0 lg:mb-3 leading-[1.1] antialiased [text-shadow:0px_2px_4px_rgba(0,0,0,0.8),0px_4px_10px_rgba(0,0,0,0.8),0px_10px_20px_rgba(0,0,0,0.9)]`}>
                    {title}{" "}
                    <span 
                      className={`${config.highlightClass || "text-white/90"} [&_.highlight]:text-[#f5a623] font-semibold antialiased [text-shadow:0px_2px_4px_rgba(0,0,0,0.8),0px_4px_10px_rgba(0,0,0,0.8),0px_10px_20px_rgba(0,0,0,0.9)]`}
                      dangerouslySetInnerHTML={{ __html: highlightitle }}
                    />
                  </h1>
                  <p className={`text-white/95 text-[15px] xl:text-lg [text-shadow:0px_4px_4px_rgba(0,0,0,0.6)] ${config.descSize} mb-4 leading-relaxed font-normal hidden lg:block lg:max-w-xs xl:max-w-md ${config.contentMaxWidth || "2xl:max-w-lg"}`}>
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

              {/* Stats Bar - Integrated on Desktop, Dedicated Section on Mobile */}
              <div className="w-full bg-[#001631] lg:bg-transparent py-8 md:py-6 lg:py-0 mt-0 lg:mt-10 relative z-10">
                <div className="grid grid-cols-3 gap-2 lg:flex lg:flex-nowrap items-center lg:gap-x-10">
                  <div className="flex flex-col lg:pr-8 xl:pr-10 lg:border-r border-white/20 text-center lg:text-left">
                    <span className="text-white font-semibold text-xl md:text-2xl xl:text-3xl leading-none tracking-tight whitespace-nowrap">
                      {dreamcareerSection?.highestpackagenum || "56.6 LPA"}
                    </span>
                    <span className="text-white/90 text-[11px] md:text-sm xl:text-base mt-1 font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                      {dreamcareerSection?.highestpackagetitle || "Highest Package"}
                    </span>
                  </div>
                  <div className="flex flex-col lg:px-8 xl:pr-10 lg:pl-0 lg:border-r border-white/20 text-center lg:text-left">
                    <span className="text-white font-semibold text-xl md:text-2xl xl:text-3xl leading-none tracking-tight whitespace-nowrap">800+</span>
                    <span className="text-white/90 text-[11px] md:text-sm xl:text-base mt-1 font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                      {dreamcareerSection?.campusrecruitertitle || "Campus Recruiters"}
                    </span>
                  </div>
                  <div className="flex flex-col text-center lg:text-left relative">
                    <span className="text-white font-semibold text-xl md:text-2xl xl:text-3xl leading-none tracking-tight whitespace-nowrap">
                      {dreamcareerSection?.placementassistnum || "100%"}
                    </span>
                    <span className="text-white/90 text-[11px] md:text-sm xl:text-base mt-1 font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                      {dreamcareerSection?.placementassisttitle || "Placement Assistance"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex w-full lg:w-[40%] xl:w-2/5 xl:pl-20 justify-center lg:justify-end">
            <div className="heroBannerForm__form w-full max-w-md mx-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
              <div className="heroBannerForm-header">
                <h3 className="mb-0">
                  <strong>
                    Apply Today for{" "}
                    <span className="uppercase">K.R. Mangalam University</span>
                  </strong>
                </h3>
              </div>
              <NoPaperForm formId={formId} height="500px" />
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Strip outside section for clean white background */}
      <div className="w-full bg-white pt-16 py-8 pb-8 md:py-6 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-10 2xl:px-0 relative">
          {/* Centered Heading Badge */}
          <div className="absolute -top-[48px] md:-top-[62px] left-1/2 -translate-x-1/2 bg-gray-50 md:bg-white px-6 py-2 rounded-t-sm flex items-center justify-center ">
            <h5 className="text-[#333] text-[14px] sm:text-[18px] font-semibold whitespace-nowrap">
              {dreamcareerSection?.heading}
            </h5>
          </div>
          
          {/* Logo Container */}
          <div className="min-h-[60px] pt-4">
            <ConnectingDreamSlider logos={logos} />
          </div>
        </div>
      </div>

      {/* Mobile Form - Visible only on mobile for BBA-HR */}
      <div className="lg:hidden w-full bg-white pb-0 px-0">
        <div className="heroBannerForm__form w-full max-w-md sm:max-w-full mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-none lg:rounded-md overflow-hidden">
          <div className="heroBannerForm-header">
            <h3 className="mb-0 text-center">
              <strong>
                Apply Today for{" "}
                <span className="uppercase">K.R. Mangalam University</span>
              </strong>
            </h3>
          </div>
          <div className="p-1">
            <NoPaperForm formId={formId} height="500px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramHeroCinematic;
