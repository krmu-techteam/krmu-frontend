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
        className="hero-cinematic-overlay pt-[280px] sm:pt-[320px] md:pt-[360px] lg:pt-32 xl:pt-40 pb-0 lg:pb-24 overflow-x-hidden 2xl:px-0 overflow-hidden 
        [background-position:var(--bg-pos-mobile)] sm:[background-position:var(--bg-pos-tablet)] lg:[background-position:var(--bg-pos-desktop)] 
        [background-size:var(--bg-size-mobile)] sm:[background-size:var(--bg-size-tablet)] lg:[background-size:var(--bg-size-desktop)] 
        bg-no-repeat relative before:content-[''] before:absolute before:top-0 before:left-0 
        before:h-full before:w-full before:z-0"
        style={{ 
          backgroundImage: `url(${bgUrl})`,
          '--bg-pos-desktop': config?.bgPosition || 'center center',
          '--bg-pos-tablet': config?.tabletBgPosition || '60% center',
          '--bg-pos-mobile': config?.mobileBgPosition || 'center -120px',
          '--bg-size-desktop': config?.bgSize || 'cover',
          '--bg-size-tablet': config?.tabletBgSize || 'cover',
          '--bg-size-mobile': config?.mobileBgSize || '240%',
          '--overlay-start-desktop': config?.overlayOpacity ? `rgba(0,0,0,${config.overlayOpacity})` : 'rgba(0,0,0,0.85)',
          '--overlay-start-mobile': 'rgba(0,0,0,0.5)',
        } as React.CSSProperties}
      >
        <div className="max-w-[1800px] mx-auto w-full flex flex-col lg:flex-row lg:items-center justify-center gap-8 lg:px-10 xl:px-0 xl:gap-16 z-10 2xl:px-0">
          <div className="w-full lg:w-[60%] xl:w-1/2 relative z-10">
            <div className="xl:max-w-[700px] w-full">
              <div className="flex flex-col lg:block bg-gradient-to-t from-black/95 via-black/40 to-transparent lg:bg-none px-6 pt-14 pb-6 sm:px-6 sm:pt-20 sm:pb-8 md:px-8 lg:p-0">
                <div className="mb-0 lg:mb-10">
                  <h1 
                    className="text-white text-[24px] lg:text-xl xl:text-3xl 2xl:text-[52px] font-semibold md:font-bold mb-0 lg:mb-3 leading-[1.1] antialiased [text-shadow:0px_4px_8px_rgba(0,0,0,0.5)]"
                    dangerouslySetInnerHTML={{ __html: heading }}
                  />
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
              <NoPaperForm formId="b8a1d46829929a0a7c19f4fc185e7d45" height="500px" />
            </div>
          </div>
        </div>
      </section>

      {/* Info Counters Section */}
      <div className="max-w-[1800px] mx-auto w-full flex flex-col lg:flex-row gap-4 relative z-10 lg:-mt-[65px] mt-6 px-4 lg:px-10 xl:px-0 pb-8 lg:pb-0">
        {/* Duration */}
        <div
          className="w-full md:w-1/2 lg:w-[20%] flex items-center justify-center text-2xl font-semibold h-[130px] bg-white rounded-[30px]"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px rgba(0,0,0,.02),0px 4.72157px 5.32008px rgba(0,0,0,.03),0px 8.8903px 10.01724px rgba(0,0,0,.04),0px 15.85878px 17.86905px rgba(0,0,0,.04),0px 29.6621px 33.42209px rgba(0,0,0,.05),0px 71px 80px rgba(0,0,0,.07)",
          }}
        >
          {duration?.countertext} {duration?.countercontent}
        </div>

        {/* Fee per Year */}
        <div
          className="w-full md:w-1/2 lg:w-[20%] flex flex-col lg:flex-row items-center justify-center text-2xl font-semibold h-[130px] p-5 bg-white rounded-[30px]"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px rgba(0,0,0,.02),0px 4.72157px 5.32008px rgba(0,0,0,.03),0px 8.8903px 10.01724px rgba(0,0,0,.04),0px 15.85878px 17.86905px rgba(0,0,0,.04),0px 29.6621px 33.42209px rgba(0,0,0,.05),0px 71px 80px rgba(0,0,0,.07)",
          }}
        >
          <div className="w-full lg:w-1/2">{feePerYear?.countertext}</div>
          <div className="w-full lg:w-1/2">{feePerYear?.countercontent}</div>
        </div>

        {/* Eligibility Criteria with Read More */}
        <div
          className="w-full lg:w-[50%] flex flex-col lg:flex-row gap-5 items-center justify-center h-auto p-5 bg-white rounded-[30px]"
          style={{
            boxShadow:
              "0px 1.96475px 2.21381px rgba(0,0,0,.02),0px 4.72157px 5.32008px rgba(0,0,0,.03),0px 8.8903px 10.01724px rgba(0,0,0,.04),0px 15.85878px 17.86905px rgba(0,0,0,.04),0px 29.6621px 33.42209px rgba(0,0,0,.05),0px 71px 80px rgba(0,0,0,.07)",
          }}
        >
          <div className="text-2xl font-semibold w-full lg:w-[32%]">
            {eligibleCriteria?.countertext}
          </div>
          <div className="w-full lg:w-[68%] text-base h-auto">
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

      {/* Mobile Form - Visible only on mobile */}
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
            <NoPaperForm formId="b8a1d46829929a0a7c19f4fc185e7d45" height="500px" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PHDprogramHero;
