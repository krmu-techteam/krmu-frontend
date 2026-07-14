import React from "react";
import { HERO_CONFIGS } from "@/features/programs";
import { HeroSectionProps } from "@/features/programs";
import CinematicHeroContent from "./CinematicHeroContent";
import CinematicStatsBar from "./CinematicStatsBar";
import CinematicRecruiterStrip from "./CinematicRecruiterStrip";
import CinematicForm from "./CinematicForm";

const ProgramHeroCinematic = ({
  title,
  highlightitle,
  heroSection,
  formId,
  slug,
  dreamcareerSection,
  logos,
}: HeroSectionProps) => {
  const config = HERO_CONFIGS[slug] || HERO_CONFIGS["bba-hr"];

  return (
    <div className="relative w-full">
      <section
        className="hero-cinematic-overlay pt-[280px] sm:pt-[320px] md:pt-[360px] lg:pt-32 xl:pt-40 pb-0 lg:pb-12 overflow-x-hidden 2xl:px-0 overflow-hidden 
        [background-position:var(--bg-pos-mobile)] sm:[background-position:var(--bg-pos-tablet)] lg:[background-position:var(--bg-pos-desktop)] 
        [background-size:var(--bg-size-mobile)] sm:[background-size:var(--bg-size-tablet)] lg:[background-size:var(--bg-size-desktop)] 
        bg-no-repeat relative before:content-[''] before:absolute before:top-0 before:left-0 
        before:h-full before:w-full before:z-0"
        style={
          {
            backgroundImage: `url(${config.bgUrl})`,
            "--bg-pos-desktop": config.bgPosition || "center center",
            "--bg-pos-tablet": config.tabletBgPosition || "60% center",
            "--bg-pos-mobile": config.mobileBgPosition || "center -120px",
            "--bg-size-desktop": config.bgSize || "cover",
            "--bg-size-tablet": config.tabletBgSize || "cover",
            "--bg-size-mobile": config.mobileBgSize || "240%",
            "--overlay-start-desktop": `rgba(0,0,0,${config.overlayOpacity || "0.85"})`,
            "--overlay-start-mobile": "rgba(0,0,0,0.5)",
            "--overlay-width": config.overlayWidth || "45%",
          } as React.CSSProperties
        }
      >
        <div className="max-w-[1800px] mx-auto w-full flex flex-col lg:flex-row lg:items-center justify-center gap-8 lg:px-10 xl:px-1 xl:gap-16 z-10 2xl:px-0">
          <div className="w-full lg:w-[60%] xl:w-1/2 relative z-10">
            <div className="xl:max-w-[700px] w-full">
              <CinematicHeroContent
                title={title}
                highlightitle={highlightitle}
                heroSection={heroSection}
                formId={formId}
                slug={slug}
                config={config}
              />

              {/* Stats Bar Component */}
              <CinematicStatsBar dreamcareerSection={dreamcareerSection} />
            </div>
          </div>

          {/* Desktop Form Component */}
          <CinematicForm formId={formId} />
        </div>
      </section>

      {/* Recruiter Strip Component */}
      <CinematicRecruiterStrip
        dreamcareerSection={dreamcareerSection}
        logos={logos}
      />

      {/* Mobile Form Component */}
      <CinematicForm formId={formId} isMobile={true} />
      {/* <SectionDivider /> */}
    </div>
  );
};

export default ProgramHeroCinematic;
