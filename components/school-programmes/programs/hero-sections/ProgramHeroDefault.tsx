import { STRAPI_URL } from "@/app/constant";
import { HeroSection } from "@/lib/types/school-programme";
import Image from "next/image";
import NpfPopup from "@/app/(main-website)/components/NpfPopup";
import NoPaperForm from "@/lib/constants/NoPaperForm";
import YoutubePopup from "@/app/(main-website)/(school-programmes)/school-programmes-component/YoutubePopup";
import HeroTitle from "@/app/(main-website)/(school-programmes)/school-programmes-component/HeroTitle";
import IndusLearning from "@/app/(main-website)/(school-programmes)/programs/prog-comp/IndusLearning";
import { StrapiMedia } from "@/lib/types/common";

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

const ProgramHeroDefault = ({
  title,
  highlightitle,
  heroSection,
  formId,
  slug,
  dreamcareerSection,
}: Props) => {
  const iframe = heroSection?.videofield;
  const videoSrc = iframe?.match(/src="([^"]+)"/)?.[1];
   
 
  return (
    <section
      className={`pt-24 sm:pt-40 pb-8 md:pb-12 overflow-x-hidden bg-[linear-gradient(105.22deg,_#FFFFFF_4.74%,_#DAE3F6_80.51%)]`}
    >
      <div
        className={`w-full mx-auto md:flex items-start gap-8 lg:gap-12 max-w-[1440px] justify-between px-4 sm:px-0 xl:px-0`}
      >
        <div
          className={`flex items-start justify-center w-full md:w-7/12 xl:w-8/12`}
        >
          <div className="w-full xl:max-w-[800px] mr-auto flex flex-col">
            {/* Mobile Media (Top) */}
            <div className="w-full lg:hidden mb-4 md:mb-8">
              {heroSection?.imgvideo === "Video" ? (
                heroSection?.videofield?.includes("iframe") ? (
                  <div className="w-full rounded-md overflow-hidden shadow-sm">
                    <iframe
                      className="aspect-video rounded-md w-full"
                      src={videoSrc}
                    ></iframe>
                  </div>
                ) : (
                  <YoutubePopup
                    videoUrl={
                      heroSection?.videofield ||
                      "https://www.youtube.com/watch?v=tIfNUgSn2dw&t=59s"
                    }
                    thumbnail={
                      heroSection?.herobtn?.buttonlink ||
                      "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Thumbnail_51b749248c.png"
                    }
                    ytClassName="w-full aspect-video rounded-sm overflow-hidden shadow-sm flex-shrink-0"
                    playIcon={false}
                  />
                )
              ) : (
                <div className="w-full">
                  {heroSection?.heroimg && (
                    <Image
                      src={`${STRAPI_URL}${heroSection.heroimg.url}`}
                      width={800}
                      height={450}
                      alt={heroSection.heroimg.alternativeText || "Hero Image"}
                      className="object-cover rounded-sm w-full h-auto"
                    />
                  )}
                </div>
              )}
            </div>

            <p
              className={`md:block hidden font-medium leading-[1.2] mb-2 text-[#484848] text-md sm:text-xl`}
            >
              {heroSection?.subtitle}
            </p>
            <HeroTitle title={title} highlightitle={highlightitle} />
            <p
              className={`md:block hidden text-base sm:text-lg text-[#575757] font-medium`}
            >
              {heroSection?.description}
            </p>

            {(slug === "btech-cse-cloud-computing" ||
              slug ===
                "b-tech-computer-science-and-engineering-semiconductor-design" ||
              slug === "ma-clinical-psychology" ||
              slug === "master-of-design-m-des-interior-design" ||
              slug === "ma-political-science" ||
              slug === "Bachelor-of-Emergency-Medical-Technologist" ||
              slug === "bsc-clinical-psychology") && (
              <p className="text-right font-bold text-xs mt-2">
                **Subject to Approval
              </p>
            )}

            {slug !== "bhmct-hotel-management" && (
              <div className="hidden xl:block xl:mt-5">
                {formId && (
                  <NpfPopup
                    formId={formId}
                    btnClass={`hero-common-btn-b  ${heroSection.herobtn.buttonclass || ""} rounded-md`}
                    btnText={`${heroSection.herobtn.buttontext || "Apply Now"}`}
                    showIcon={true}
                  />
                )}
              </div>
            )}

            {slug === "bba-digital-marketing" && <IndusLearning />}

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mt-6 md:mt-10">
              {/* Desktop Media (Row) */}
              <div className="hidden lg:block w-full lg:w-auto">
                {heroSection?.imgvideo === "Video" ? (
                  heroSection?.videofield?.includes("iframe") ? (
                    <div className="max-w-[420px] w-full rounded-md overflow-hidden shadow-2xl">
                      <iframe
                        className="aspect-video rounded-md w-full"
                        src={videoSrc}
                      ></iframe>
                    </div>
                  ) : (
                    <YoutubePopup
                      videoUrl={
                        heroSection?.videofield ||
                        "https://www.youtube.com/watch?v=tIfNUgSn2dw&t=59s"
                      }
                      thumbnail={
                        heroSection?.herobtn?.buttonlink ||
                        "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Thumbnail_51b749248c.png"
                      }
                      ytClassName="w-full max-w-[420px] aspect-video rounded-md overflow-hidden shadow-sm flex-shrink-0"
                      playIcon={false}
                    />
                  )
                ) : (
                  <div className="w-full">
                    {heroSection?.heroimg && (
                      <Image
                        src={`${STRAPI_URL}${heroSection.heroimg.url}`}
                        width={364}
                        height={226}
                        alt={
                          heroSection.heroimg.alternativeText || "Hero Image"
                        }
                        className="object-cover rounded-md"
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Mobile Stats Bar - Horizontal (Mobile/Tablet Only) */}
              {slug !== "bhmct-hotel-management" && (
                <div className="flex lg:hidden w-full bg-white border-[1.2px] border-[#0060aa] rounded-md shadow-md flex-row items-stretch divide-x divide-gray-100 overflow-hidden">
                  <div className="flex-1 flex flex-col items-center justify-center py-3 px-1 min-h-[85px] sm:min-h-[100px]">
                    <p className="text-lg sm:text-2xl font-bold text-[#0060aa]">
                      {dreamcareerSection?.highestpackagenum || "56.6 LPA"}
                    </p>
                    <p className="text-[9px] sm:text-xs font-semibold text-[#424242] capitalize text-center mt-0.5 leading-tight">
                      {dreamcareerSection?.highestpackagetitle ||
                        "Highest Package"}
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center py-3 px-1 min-h-[85px] sm:min-h-[100px]">
                    <p className="text-lg sm:text-2xl font-bold text-[#0060aa]">
                      800+
                    </p>
                    <p className="text-[9px] sm:text-xs font-semibold text-[#424242] capitalize text-center mt-0.5 leading-tight">
                      {dreamcareerSection?.campusrecruitertitle ||
                        "Campus Recruiters"}
                    </p>
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-center py-3 px-1 min-h-[85px] sm:min-h-[100px]">
                    <p className="text-lg sm:text-2xl font-bold text-[#0060aa]">
                      {dreamcareerSection?.placementassistnum || "100%"}
                    </p>
                    <p className="text-[9px] sm:text-xs font-semibold text-[#424242] capitalize text-center mt-0.5 leading-tight">
                      {dreamcareerSection?.placementassisttitle ||
                        "Placement Assist"}
                    </p>
                  </div>
                </div>
              )}

              {/* Desktop Stats Cards - Grid (Desktop Only) */}
              {slug !== "bhmct-hotel-management" && (
                <div className="hidden lg:grid grid-cols-2 gap-4 items-stretch flex-shrink-0 w-auto">
                  <div className="bg-white border-[1.2px] border-[#0060aa] rounded-md shadow-md w-[190px] h-[100px] flex flex-col items-center justify-center p-3 transition-transform hover:scale-105 duration-300">
                    <p className="text-3xl font-semibold text-[#0060aa]">
                      {dreamcareerSection?.highestpackagenum || "56.6 LPA"}
                    </p>
                    <p className="text-md font-semibold text-[#424242] capitalize mt-1 text-center leading-tight">
                      {dreamcareerSection?.highestpackagetitle ||
                        "Highest Package"}
                    </p>
                  </div>

                  <div className="bg-white border-[1.2px] border-[#0060aa] rounded-md shadow-md w-[190px] h-[100px] flex flex-col items-center justify-center p-3 transition-transform hover:scale-105 duration-300">
                    <p className="text-3xl font-semibold text-[#0060aa]">
                      800+
                    </p>
                    <p className="text-md font-semibold text-[#424242] capitalize mt-1 text-center leading-tight">
                      {dreamcareerSection?.campusrecruitertitle ||
                        "Campus Recruiters"}
                    </p>
                  </div>

                  <div className="col-span-2 flex justify-center">
                    <div className="bg-white border-[1.2px] border-[#0060aa] rounded-md shadow-md w-[190px] h-[100px] flex flex-col items-center justify-center p-3 text-center transition-transform hover:scale-105 duration-300">
                      <p className="text-3xl font-semibold text-[#0060aa]">
                        {dreamcareerSection?.placementassistnum || "100%"}
                      </p>
                      <p className="text-md font-semibold text-[#424242] capitalize mt-1 leading-tight">
                        {dreamcareerSection?.placementassisttitle ||
                          "Placement Assist"}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={`flex w-full md:w-5/12 xl:w-4/12 h-full relative mt-6 md:mt-0`}
        >
          {slug === "bhmct-hotel-management" ? (
            <div className="w-full h-full min-h-[300px] md:min-h-[450px] relative rounded-md overflow-hidden">
              <Image
                src="/hotel-management.png"
                fill
                alt="Hotel Management"
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="heroBannerForm__form w-full max-w-md mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
              <div className="heroBannerForm-header">
                <h3 className="mb-0">
                  <strong>
                    Apply Today for{" "}
                    <span className="uppercase">K.R. Mangalam University</span>
                  </strong>
                </h3>
              </div>
              <NoPaperForm formId={formId} height="600px" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProgramHeroDefault;
