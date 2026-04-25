import { STRAPI_URL } from "@/app/constant";
import { HeroSection } from "@/lib/types/school-programme";

import Image from "next/image";
import NpfPopup from "../../components/NpfPopup";
import IndusLearning from "../programs/prog-comp/IndusLearning";
import NoPaperForm from "@/lib/constants/NoPaperForm";
import YoutubePopup from "./YoutubePopup";

type Props = {
  title: string;
  highlightitle: string;
  heroSection: HeroSection;
  formId?: string; // dynamic form id
  slug: string;
  allowedFormSlugs: string[];
  dreamcareerSection?: {
    highestpackagenum: string;
    highestpackagetitle: string;
    campusrecruitersnum: string;
    campusrecruitertitle: string;
    placementassistnum: string;
    placementassisttitle: string;
  };
};

const HeroBanner = ({
  title,
  highlightitle,
  heroSection,
  formId,
  slug,
  allowedFormSlugs,
  dreamcareerSection,
}: Props) => {
  const isFormAvailable = allowedFormSlugs.includes(slug);
  // const videoSrc = iframe?.match(/src="([^"]+)"/)?.[1];
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

  return (
    <section
      className={`pt-24 sm:pt-40 sm:pb-12 px-5 sm:px-4 ${slug === "b-tech-cse" ? "bg-[linear-gradient(105.22deg,_#FFFFFF_4.74%,_#DAE3F6_80.51%)]" : ""}`}
    >
      <div
        className={`w-full mx-auto md:flex items-center ${slug === "b-tech-cse" ? "gap-10 max-w-[1440px]" : "school-programme-max-width"} justify-between gap-5`}
      >
        <div
          className={`w-full flex items-center justify-center ${isFormAvailable ? "lg:w-8/12 max-w-5xl" : "lg:w-1/2"}`}
        >
          {/* <div
          className={`w-full ${isFormAvailable ? "lg:w-6/12" : "lg:w-1/2"} ${slug === "b-tech-cse" ? "max-w-[900px]" : ""}`}
        > */}
          <div className="max-w-[750px] mr-auto">
            <p
              className={` font-medium leading-[1.2] mb-2 ${slug === "b-tech-cse" ? "text-[#484848] text-md sm:text-xl" : "text-xs sm:text-2xl"}`}
            >
              {heroSection?.subtitle}
            </p>
            <h1
              className={` ${slug === "b-tech-cse" ? "text-[#0A41A1] text-3xl sm:text-4xl xl:text-[58px] font-bold leading-[1.1]" : "text-[#0060aa] text-4xl sm:text-[52px] font-semibold leading-tight"}   mb-2`}
            >
              {title} <span className="text-[#e61f21]">{highlightitle}</span>
            </h1>
            <p
              className={`${slug === "b-tech-cse" ? "text-base sm:text-lg text-[#575757]" : "text-base sm:text-md mt-6 mb-4"}  font-medium`}
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
              <p className="text-right font-bold">**Subject to Approval</p>
            )}

            {formId && (
              <NpfPopup
                formId={formId}
                btnClass={`hero-common-btn-b ${slug === "b-tech-cse" ? "mt-5" : "mt-12"} ${
                  heroSection.herobtn.buttonclass || ""
                } rounded-md`}
                btnText={`${heroSection.herobtn.buttontext || "Apply Now"}`}
                showIcon={true}
              />
            )}

            {slug === "bba-digital-marketing" && <IndusLearning />}

            {/* <div className="max-w-sm w-full h-[200px] mt-5 bg-red-500 rounded-2xl"></div> */}
            {/* Custom thumbnail */}
            {slug === "b-tech-cse" && (
              <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
                <YoutubePopup
                  videoUrl="https://www.youtube.com/watch?v=tIfNUgSn2dw"
                  thumbnail="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Thumbnail_51b749248c.png"
                  ytClassName="w-[420px] h-[280px] hidden sm:block rounded-md overflow-hidden shadow-2xl flex-shrink-0"
                  playIcon={false}
                />
                
                <div className="flex flex-row gap-4 items-center flex-wrap sm:flex-nowrap lg:ml-10 flex-shrink-0">
                  <div className="flex flex-col gap-4">
                    <div className="bg-white border-[1.2px] border-[#e61f21] rounded-md shadow-md w-full sm:w-[190px] sm:h-[100px] flex flex-col items-center justify-center p-3">
                       <p className="text-3xl font-semibold text-[#e61f21]">
                          {dreamcareerSection?.highestpackagenum || "56.6 LPA"}
                       </p>
                       <p className="text-md font-semibold text-[#555] capitalize mt-1 text-center">
                          {dreamcareerSection?.highestpackagetitle || "Highest Package"}
                       </p>
                    </div>
                    <div className="bg-white border-[1.2px] border-[#0060aa] rounded-md shadow-md w-full sm:w-[190px] sm:h-[100px] flex flex-col items-center justify-center p-3">
                       <p className="text-3xl font-semibold text-[#0060aa]">
                          {/* {dreamcareerSection?.campusrecruitersnum} */}
                          800+
                       </p>
                       <p className="text-md font-semibold text-[#555] capitalize mt-1 text-center">
                          {dreamcareerSection?.campusrecruitertitle || "Campus Recruiters"}
                       </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-white border-[1.2px] border-[#16a34a] rounded-md shadow-md w-full sm:w-[190px] sm:h-[100px] flex flex-col items-center justify-center p-3 text-center">
                       <p className="text-3xl font-semibold text-[#16a34a]">
                          {dreamcareerSection?.placementassistnum || "100%"}
                       </p>
                       <p className="text-md font-semibold text-[#555] capitalize mt-1">
                          {dreamcareerSection?.placementassisttitle || "Placement Assist"}
                       </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* {heroSection?.imgvideo === "Video" && isFormAvailable && slug === 'b-tech-cse' && (
            <div className="max-w-2xs mt-10 w-full hidden sm:block">
              <iframe
                className="aspect-video rounded-3xl w-full"
                src={videoSrc}
              ></iframe>
            </div>
          )} */}

            {/* {formId ? (
            <button
              ref={btnRef}
              className={`hero-common-btn-b mt-12 ${
                heroSection.herobtn.buttonclass || ""
              }`}
            >
              {heroSection.herobtn.buttontext || "Apply Now"} <MoveRight />
            </button>
          ) : (
            ""
          )} */}
          </div>
        </div>

        <div
          className={`hidden w-full ${isFormAvailable ? "lg:w-4/12" : "lg:w-1/2"}  lg:flex  ${slug === "b-tech-cse" ? "" : "min-h-[556px]"} h-full relative`}
        >
          {isFormAvailable ? (
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
              <div className="border overflow-hidden w-full ">
                <div className="flex justify-center items-center bg-[#0060aa] py-2 px-3 text-[22px] font-bold">
                  <h3 className="text-white">ADMISSIONS OPEN 2026-27</h3>
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
          )}
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
