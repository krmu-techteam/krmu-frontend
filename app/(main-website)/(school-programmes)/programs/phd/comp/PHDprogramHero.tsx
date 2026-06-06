"use client";
import { useState } from "react";
import { STRAPI_URL } from "@/app/constant";
import NoPaperForm from "@/lib/constants/NoPaperForm";
import { CounterBlock } from "@/lib/types/phd-programmes";
import { heroConfigs } from "@/components/school-programmes/programs/data/programs";

type Props = {
  heading: string;
  duration: CounterBlock;
  feePerYear: CounterBlock;
  eligibleCriteria: CounterBlock;
  bgimg: string;
  slug?: string;
};

const PHDprogramHero = ({
  heading,
  duration,
  feePerYear,
  eligibleCriteria,
  bgimg,
  slug,
}: Props) => {
  const [readMore, setReadMore] = useState(false);

  // Limit eligible criteria text to ~120 characters before "Read more"
  const shortText = eligibleCriteria?.countercontent?.slice(0, 120) || "";
  const isLong =
    eligibleCriteria?.countercontent &&
    eligibleCriteria.countercontent.length > 120;

  const config = slug ? heroConfigs[slug] : null;
  const bgUrl = config?.bgUrl || `${STRAPI_URL}${bgimg}`;

  return (
    <>
      <section
        className="hero-cinematic-overlay pt-[280px] sm:pt-[320px] md:pt-[380px] lg:pt-[350px] xl:pt-[200px] min-[1440px]:pt-40 pb-0 min-[1440px]:pb-24 overflow-x-hidden 2xl:px-0 overflow-hidden
        [background-position:var(--bg-pos-mobile)] sm:[background-position:var(--bg-pos-tablet)] xl:[background-position:var(--bg-pos-desktop)] 
        [background-size:var(--bg-size-mobile)] sm:[background-size:var(--bg-size-tablet)] lg:[background-size:var(--bg-size-desktop)] 
        bg-no-repeat relative before:content-[''] before:absolute before:top-0 before:left-0 
        before:h-full before:w-full before:z-0"
        style={
          {
            backgroundImage: `url(${bgUrl})`,
            "--bg-pos-desktop": config?.bgPosition || "center center",
            "--bg-pos-tablet": config?.tabletBgPosition || "60% center",
            "--bg-pos-mobile": config?.mobileBgPosition || "center -120px",
            "--bg-size-desktop": config?.bgSize || "cover",
            "--bg-size-tablet": config?.tabletBgSize || "cover",
            "--bg-size-mobile": config?.mobileBgSize || "240%",
            "--overlay-start-desktop": config?.overlayOpacity
              ? `rgba(0,0,0,${config.overlayOpacity})`
              : "rgba(0,0,0,0.85)",
            "--overlay-start-mobile": "rgba(0,0,0,0.5)",
          } as React.CSSProperties
        }
      >
        <div className="max-w-[1800px] mx-auto w-full flex flex-col min-[1440px]:flex-row min-[1440px]:items-center justify-center gap-8 min-[1440px]:gap-16 min-[1440px]:px-10 min-[1800px]:px-0 z-10">
          <div className="w-full min-[1440px]:w-3/5 min-[1600px]:w-1/2 relative z-10">
            <div className="w-full min-[1440px]:max-w-[760px]">
              <div className="flex flex-col bg-gradient-to-t from-black/95 via-black/55 to-transparent min-[1440px]:block min-[1440px]:bg-none px-5 pt-16 pb-7 sm:px-8 sm:pt-20 sm:pb-9 md:px-10 lg:px-12 min-[1440px]:p-0">
                <div className="mb-0 min-[1440px]:mb-10">
                  <h1
                    className="max-w-4xl text-white text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] min-[1440px]:text-[48px] min-[1600px]:text-[52px] font-semibold md:font-bold mb-0 min-[1440px]:mb-3 leading-[1.12] antialiased [text-shadow:0px_4px_8px_rgba(0,0,0,0.5)]"
                    dangerouslySetInnerHTML={{ __html: heading }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden min-[1440px]:flex w-full min-[1440px]:w-2/5 min-[1600px]:pl-20 justify-end">
            <div className="heroBannerForm__form w-full max-w-md mx-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
              <div className="heroBannerForm-header">
                <h3 className="mb-0">
                  <strong>
                    Apply Today for{" "}
                    <span className="uppercase">K.R. Mangalam University</span>
                  </strong>
                </h3>
              </div>
              <NoPaperForm
                formId="b8a1d46829929a0a7c19f4fc185e7d45"
                height="500px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Counters Section */}
      <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 min-[1440px]:grid-cols-[1fr_1.15fr_2.5fr] gap-4 relative z-10 min-[1440px]:-mt-[65px] mt-6 px-4 sm:px-6 lg:px-10 min-[1800px]:px-0 pb-8 min-[1440px]:pb-0">
        {/* Duration */}
        <div
          className="w-full flex items-center justify-center text-center text-xl lg:text-2xl font-semibold min-h-[110px] min-[1440px]:min-h-[130px] p-5 bg-white rounded-[22px] min-[1440px]:rounded-[30px]"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px rgba(0,0,0,.02),0px 4.72157px 5.32008px rgba(0,0,0,.03),0px 8.8903px 10.01724px rgba(0,0,0,.04),0px 15.85878px 17.86905px rgba(0,0,0,.04),0px 29.6621px 33.42209px rgba(0,0,0,.05),0px 71px 80px rgba(0,0,0,.07)",
          }}
        >
          {duration?.countertext} {duration?.countercontent}
        </div>

        {/* Fee per Year */}
        <div
          className="w-full flex flex-col min-[1440px]:flex-row items-center justify-center text-center min-[1440px]:text-left text-xl lg:text-2xl font-semibold min-h-[110px] min-[1440px]:min-h-[130px] p-5 bg-white rounded-[22px] min-[1440px]:rounded-[30px]"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px rgba(0,0,0,.02),0px 4.72157px 5.32008px rgba(0,0,0,.03),0px 8.8903px 10.01724px rgba(0,0,0,.04),0px 15.85878px 17.86905px rgba(0,0,0,.04),0px 29.6621px 33.42209px rgba(0,0,0,.05),0px 71px 80px rgba(0,0,0,.07)",
          }}
        >
          <div className="w-full min-[1440px]:w-1/2">
            {feePerYear?.countertext}
          </div>
          <div className="w-full min-[1440px]:w-1/2">
            {feePerYear?.countercontent}
          </div>
        </div>

        {/* Eligibility Criteria with Read More */}
        <div
          className="w-full md:col-span-2 min-[1440px]:col-span-1 flex flex-col min-[1440px]:flex-row gap-3 min-[1440px]:gap-5 items-start min-[1440px]:items-center justify-center h-auto min-h-[130px] p-5 sm:p-6 bg-white rounded-[22px] min-[1440px]:rounded-[30px]"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px rgba(0,0,0,.02),0px 4.72157px 5.32008px rgba(0,0,0,.03),0px 8.8903px 10.01724px rgba(0,0,0,.04),0px 15.85878px 17.86905px rgba(0,0,0,.04),0px 29.6621px 33.42209px rgba(0,0,0,.05),0px 71px 80px rgba(0,0,0,.07)",
          }}
        >
          <div className="text-xl lg:text-2xl font-semibold w-full min-[1440px]:w-[32%]">
            {eligibleCriteria?.countertext}
          </div>
          <div className="w-full min-[1440px]:w-[68%] text-sm sm:text-base leading-relaxed h-auto">
            <p>
              {readMore
                ? eligibleCriteria?.countercontent
                : shortText + (isLong ? "..." : "")}
            </p>
            {isLong && (
              <button
                onClick={() => setReadMore(!readMore)}
                className="text-red-600 no-underline text-sm mt-1 cursor-pointer "
              >
                {readMore ? "Read less" : "Read more"}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Stacked Form - Visible below the desktop-row breakpoint */}
      <div className="min-[1440px]:hidden w-full bg-white pb-0 px-0">
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
            <NoPaperForm
              formId="b8a1d46829929a0a7c19f4fc185e7d45"
              height="500px"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PHDprogramHero;
