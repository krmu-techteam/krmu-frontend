import { STRAPI_URL } from "@/app/constant";
import { HeroSection } from "@/lib/types/school-programme";

import Image from "next/image";
import NpfPopup from "../../components/NpfPopup";
import IndusLearning from "../programs/prog-comp/IndusLearning";
import NoPaperForm from "@/lib/constants/NoPaperForm";
import YoutubePopup from "./YoutubePopup";
import HeroTitle from "./HeroTitle";
import { StrapiMedia } from "@/lib/types/common";
import ConnectingDreamSlider from "./ConnectingDreamSlider";

type Props = {
  title: string;
  highlightitle: string;
  heroSection: HeroSection;
  formId?: string; // dynamic form id
  slug: string;
  // allowedFormSlugs: string[];
  dreamcareerSection?: {
    highestpackagenum: string;
    highestpackagetitle: string;
    campusrecruitersnum: string;
    campusrecruitertitle: string;
    placementassistnum: string;
    placementassisttitle: string;
    heading: string;
  };
  logos: StrapiMedia[] | undefined;
};

const HeroBanner = ({
  title,
  highlightitle,
  heroSection,
  formId,
  slug,
  // allowedFormSlugs,
  dreamcareerSection,
  logos,
}: Props) => {
  // const isFormAvailable = allowedFormSlugs.includes(slug);
  // const isFormAvailable = true;
  const iframe = heroSection?.videofield;
  const videoSrc = iframe?.match(/src="([^"]+)"/)?.[1];
  // const btnRef = useRef<HTMLButtonElement>(null);

  // useEffect(() => {
  //   if (!formId || !btnRef.current) return;

  // loadNpfScript()
  //   .then(() => {
  //     // @ts-expect-error - test
  //     new NpfWidgetsInit({
  //       widgetId: formId,
  //       baseurl: "widgets.nopaperforms.com",
  //       formTitle: heroSection?.herobtn?.buttontext || "Apply Now",
  //       titleColor: "#FF0033",
  //       backgroundColor: "#ddd",
  //       iframeHeight: "500px",
  //       buttonTextColor: "#FFF",
  //       target: btnRef.current,
  //     });
  //   })
  //     .catch((err) => {
  //       console.error("Failed to load NPF script:", err);
  //     });
  // }, [formId, heroSection?.herobtn?.buttontext]);

  const currentSlug = slug;
  if (slug === "bba-hr") {
    return (
      <>
        <section className="pt-[280px] sm:pt-24 md:pt-40 pb-0 md:pb-12 overflow-x-hidden 2xl:px-0 bg-[url(https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/bba_hr_6bd1b64d96.png)] overflow-hidden bg-size-[240%] sm:bg-cover bg-[center_-120px] sm:bg-[85%_center] bg-no-repeat relative md:before:content-[''] 
        md:before:absolute before:top-0 before:left-0 before:bg-gradient-to-r before:from-black/85 before:to-black/0 before:h-full before:w-[45%] ">
          <div className="max-w-[1800px] mx-auto w-full flex flex-col lg:flex-row lg:items-center justify-center gap-8 xl:gap-16 z-10 2xl:px-0">
            <div className="w-full lg:w-1/2 xl:w-1/2 relative z-10">
              <div className="xl:max-w-[700px] w-full">
                <div className="flex flex-col sm:block bg-gradient-to-t from-black/90 via-black/50 to-transparent sm:bg-none px-6 sm:p-0">
                  <div className="mb-0 md:mb-10">
                <h3 className="text-white/90 text-sm sm:text-base font-normal mb-1 uppercase tracking-[0.05em] drop-shadow-md">
                  {heroSection?.subtitle}
                </h3>
                <h1 className="text-white text-[28px] xl:text-4xl 2xl:text-5xl font-bold mb-0 sm:mb-6 leading-[1.1] drop-shadow-2xl">
                  {title} <span className="text-white/90">{highlightitle}</span>
                </h1>
                <p className="text-white/95 text-md sm:text-lg xl:text-base 2xl:text-lg mb-8 leading-relaxed font-normal hidden sm:block lg:max-w-xs xl:max-w-md 2xl:max-w-lg">
                  {heroSection?.description}
                </p>
                {(currentSlug === "btech-cse-cloud-computing" ||
                  currentSlug ===
                    "b-tech-computer-science-and-engineering-semiconductor-design" ||
                  currentSlug === "ma-clinical-psychology" ||
                  currentSlug === "master-of-design-m-des-interior-design" ||
                  currentSlug === "ma-political-science" ||
                  currentSlug === "Bachelor-of-Emergency-Medical-Technologist" ||
                  currentSlug === "bsc-clinical-psychology") && (
                  <p className="text-right text-white font-bold text-xs mt-2">
                    **Subject to Approval
                  </p>
                )}
                {currentSlug !== "bhmct-hotel-management" && (
                  <div className="mt-3 mb-8 xl:mt-8 flex justify-start sm:justify-start">
                    {formId && (
                      <NpfPopup
                        formId={formId}
                        btnClass={`progherobtn py-2 px-8 text-lg ${heroSection.herobtn.buttonclass || ""} rounded-sm shadow-xl transition-all hover:scale-105`}
                        btnText={`${heroSection.herobtn.buttontext || "Apply Now"}`}
                        showIcon={false}
                      />
                    )}
                  </div>
                )}
                  </div>
                </div>

                {/* Stats Bar - Integrated on Desktop, Dedicated Section on Mobile */}
                <div className="w-full bg-[#001631] sm:bg-transparent py-8 sm:py-0 mt-0 sm:mt-10 relative z-10">
                  <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-nowrap items-center sm:gap-x-10">
                    <div className="flex flex-col sm:pr-8 lg:pr-10 sm:border-r border-white/20 text-center sm:text-left">
                      <span className="text-white font-semibold text-lg sm:text-2xl xl:text-3xl leading-none tracking-tight whitespace-nowrap">
                        {dreamcareerSection?.highestpackagenum || "56.6 LPA"}
                      </span>
                      <span className="text-white/90 text-[11px] sm:text-sm xl:text-base mt-1 font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                        {dreamcareerSection?.highestpackagetitle || "Highest Package"}
                      </span>
                    </div>
                    <div className="flex flex-col sm:px-8 lg:pr-10 lg:pl-0 sm:border-r border-white/20 text-center sm:text-left">
                      <span className="text-white font-semibold text-lg sm:text-2xl xl:text-3xl leading-none tracking-tight whitespace-nowrap">800+</span>
                      <span className="text-white/90 text-[11px] sm:text-sm xl:text-base mt-1 font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                        {dreamcareerSection?.campusrecruitertitle || "Campus Recruiters"}
                      </span>
                    </div>
                    <div className="flex flex-col sm:pl-8 lg:pl-0 text-center sm:text-left relative">
                      <span className="text-white font-semibold text-lg sm:text-2xl xl:text-3xl leading-none tracking-tight whitespace-nowrap">
                        {dreamcareerSection?.placementassistnum || "100%"}
                      </span>
                      <span className="text-white/90 text-[11px] sm:text-sm xl:text-base mt-1 font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                        {dreamcareerSection?.placementassisttitle || "Placement Assistance"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex w-full lg:w-1/2 xl:w-2/5 xl:pl-20 justify-center lg:justify-end">
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
        <div className="w-full bg-white pt-16 py-8 md:py-6 border-t border-gray-100">
          <div className="max-w-[1440px] mx-auto px-4 xl:px-8 2xl:px-0 relative">
            {/* Centered Heading Badge */}
            <div className="absolute -top-[48px] md:-top-[62px] left-1/2 -translate-x-1/2 bg-gray-50 md:bg-white px-6 py-2 rounded-t-sm z-20 flex items-center justify-center ">
              <h5 className="text-[#333] text-[14px] sm:text-lg font-bold whitespace-nowrap">
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
        <div className="lg:hidden w-full bg-white pb-4 px-4">
          <div className="heroBannerForm__form w-full max-w-md mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-md overflow-hidden">
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
  }

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
          {/* <div
          className={`w-full ${isFormAvailable ? "lg:w-6/12" : "lg:w-1/2"} ${slug === "b-tech-cse" ? "max-w-[900px]" : ""}`}
        > */}
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
            <HeroTitle title={title} highlightTitle={highlightitle} />
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

            {/* {heroSection?.imgvideo === "Video" && isFormAvailable && slug === 'b-tech-cse' && (
            <div className="max-w-2xs mt-10 w-full hidden sm:block">
              <iframe
                className="aspect-video rounded-3xl w-full"
                src={videoSrc}
              ></iframe>
            </div>
          )} */}
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
          {/* {isFormAvailable ? (
            slug === "b-tech-cse" ? (
              <div className="heroBannerForm__form max-w-md mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
                <div className="heroBannerForm-header">
                  <h3 className="mb-0">
                    <strong>
                      Apply Today for{" "}
                      <span className="uppercase">
                        K.R. Mangalam University
                      </span>
                    </strong>
                  </h3>
                </div>
                <NoPaperForm formId={formId} height="500px" />
              </div>
            ) : (
              <div className="heroBannerForm__form max-w-md mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
                <div className="heroBannerForm-header">
                  <h3 className="mb-0">
                    <strong>
                      Apply Today for{" "}
                      <span className="uppercase">
                        K.R. Mangalam University
                      </span>
                    </strong>
                  </h3>
                </div>
                <NoPaperForm formId={formId} height="500px" />
              </div>

            )
          ) : heroSection?.imgvideo === "Video" ? (
            <div
              className="videoField w-full h-[200px] lg:h-[400px]"
              dangerouslySetInnerHTML={{
                __html: heroSection?.videofield || "",
              }}
            />
          ) : (
            heroSection?.heroimg && (
              <Image
                src={`${STRAPI_URL}${heroSection?.heroimg?.url}`}
                fill
                alt={heroSection?.heroimg?.alternativeText || "Hero Image"}
                priority={true}
                className="object-contain z-10"
              />
            )
          )} */}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

// import { STRAPI_URL } from "@/app/constant";
// import { HeroSection } from "@/lib/types/school-programme";
// import { MoveRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// type Props = {
//   title: string;
//   highlightitle: string;
//   heroSection: HeroSection;
//   formId: string;
// };

// const HeroBanner = ({ title, highlightitle, heroSection, formId }: Props) => {
//   console.log("formId", formId);
//   return (
//     <section className="pt-24 sm:pt-40 sm:pb-[50px] px-2.5 sm:px-4">
//       <div className="school-programme-max-width md:flex items-center justify-between">
//         <div className="w-full md:w-7/12">
//           <h4 className="text-xs sm:text-2xl font-medium leading-[1.2] mb-2">
//             {heroSection?.subtitle}
//           </h4>
//           <h1 className="text-4xl sm:text-[50px] font-semibold text-[#0060aa] leading-[1.2] mb-2">
//             {title} <span className="text-[#e61f21]">{highlightitle}</span>
//           </h1>
//           <p className="text-xs sm:text-[15px] font-medium mt-6 mb-4">
//             {heroSection?.description}
//           </p>

//           <Link
//             href={heroSection.herobtn.buttonlink}
//             className={`hero-common-btn-b mt-12 ${
//               heroSection.herobtn.buttonclass || ""
//             }`}
//           >
//             Apply Now <MoveRight />
//           </Link>

//           {/* {heroSection?.herobtn && (
//             <>
//               {heroSection.herobtn.buttonclass === "progPopup" ? (
//                 <Popup
//                   buttonText={heroSection.herobtn.buttontext || "Apply Now"}
//                 >
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: heroSection?.formField || "",
//                     }}
//                   />
//                 </Popup>
//               ) : heroSection.herobtn.buttonlink ? (
//                 <Link
//                   href={heroSection.herobtn.buttonlink}
//                   className={`hero-common-btn-b mt-12 ${
//                     heroSection.herobtn.buttonclass || ""
//                   }`}
//                 >
//                   {heroSection.herobtn.buttontext} <MoveRight />
//                 </Link>
//               ) : null}
//             </>
//           )} */}
//         </div>
//         <div className="hidden  w-full md:w-5/12 md:flex items-center">
//           {heroSection?.imgvideo === "Video" ? (
//             <div
//               dangerouslySetInnerHTML={{
//                 __html: heroSection?.videofield || "",
//               }}
//             />
//           ) : (
//             heroSection?.heroimg && (
//               <Image
//                 src={`${STRAPI_URL}${heroSection?.heroimg?.url}`}
//                 width={600}
//                 height={500}
//                 alt={heroSection?.heroimg?.alternativeText || "Hero Image"}
//               />
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroBanner;
