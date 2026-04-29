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
  // allowedFormSlugs: string[];
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
  // allowedFormSlugs,
  dreamcareerSection,
}: Props) => {
  // const isFormAvailable = allowedFormSlugs.includes(slug);
  // const isFormAvailable = true;
  // const iframe = heroSection?.videofield;
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
      className={`pt-24 sm:pt-40 pb-12 px-5 sm:px-4 bg-[linear-gradient(105.22deg,_#FFFFFF_4.74%,_#DAE3F6_80.51%)]`}
    >
      <div
        className={`w-full mx-auto md:flex items-start gap-10 max-w-[1440px] justify-between`}
      >
        <div className={`flex items-center justify-center w-full  xl:w-8/12`}>
          {/* <div
          className={`w-full ${isFormAvailable ? "lg:w-6/12" : "lg:w-1/2"} ${slug === "b-tech-cse" ? "max-w-[900px]" : ""}`}
        > */}
          <div className="xl:max-w-[750px] mr-auto">
            <p
              className={`font-medium leading-[1.2] mb-2text-[#484848] text-md sm:text-xl`}
            >
              {heroSection?.subtitle}
            </p>
            <h1
              className={` text-[#0A41A1] text-3xl sm:text-4xl xl:text-[58px] font-bold leading-[1.1]   mb-2`}
            >
              {title} <span className="text-[#e61f21]">{highlightitle}</span>
            </h1>
            <p className={`text-base sm:text-lg text-[#575757] font-medium`}>
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
            <div className="hidden xl:block xl:mt-5">
              {formId && (
                <NpfPopup
                  formId={formId}
                  btnClass={`hero-common-btn-b  ${
                    heroSection.herobtn.buttonclass || ""
                  } rounded-md`}
                  btnText={`${heroSection.herobtn.buttontext || "Apply Now"}`}
                  showIcon={true}
                />
              )}
            </div>

            {slug === "bba-digital-marketing" && <IndusLearning />}

            {/* <div className="max-w-sm w-full h-[200px] mt-5 bg-red-500 rounded-2xl"></div> */}
            {/* Custom thumbnail */}

            <div className="hidden xl:flex flex-col lg:flex-row items-center gap-10 mt-10">
              <div className="md:min-w-[420px] w-full">
                {heroSection?.imgvideo === "Video" ? (
                  <YoutubePopup
                    videoUrl="https://www.youtube.com/watch?v=tIfNUgSn2dw"
                    thumbnail="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Thumbnail_51b749248c.png"
                    ytClassName="w-[420px] h-[280px] rounded-md overflow-hidden shadow-2xl flex-shrink-0"
                    playIcon={false}
                  />
                ) : (
                  <div className="w-full h-[280px] relative flex justify-start">
                    {heroSection?.heroimg && (
                      <Image
                        src={`${STRAPI_URL}${heroSection.heroimg.url}`}
                        fill
                        alt={
                          heroSection.heroimg.alternativeText || "Hero Image"
                        }
                        priority
                        className="object-fill w-full z-10"
                      />
                    )}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch lg:ml-10 flex-shrink-0 w-full md:w-auto">
                <div className="bg-transparent border-[1.2px] border-[#0060aa] rounded-md shadow-md w-full md:w-[190px] md:h-[100px] flex flex-col items-center justify-center p-3 transition-transform hover:scale-105 duration-300">
                  <p className="text-3xl font-semibold text-[#0060aa]">
                    {dreamcareerSection?.highestpackagenum || "56.6 LPA"}
                  </p>
                  <p className="text-md font-semibold text-[#424242] capitalize mt-1 text-center">
                    {dreamcareerSection?.highestpackagetitle ||
                      "Highest Package"}
                  </p>
                </div>

                <div className="bg-transparent border-[1.2px] border-[#0060aa] rounded-md shadow-md w-full md:w-[190px] md:h-[100px] flex flex-col items-center justify-center p-3 transition-transform hover:scale-105 duration-300">
                  <p className="text-3xl font-semibold text-[#0060aa]">800+</p>
                  <p className="text-md font-semibold text-[#424242] capitalize mt-1 text-center">
                    {dreamcareerSection?.campusrecruitertitle ||
                      "Campus Recruiters"}
                  </p>
                </div>
                <div className="sm:col-span-2 flex justify-center">
                  <div className="bg-transparent border-[1.2px] border-[#0060aa] rounded-md shadow-md w-full md:w-[190px] md:h-[100px] flex flex-col items-center justify-center p-3 text-center transition-transform hover:scale-105 duration-300">
                    <p className="text-3xl font-semibold text-[#0060aa]">
                      {dreamcareerSection?.placementassistnum || "100%"}
                    </p>
                    <p className="text-md font-semibold text-[#424242] capitalize mt-1">
                      {dreamcareerSection?.placementassisttitle ||
                        "Placement Assist"}
                    </p>
                  </div>
                </div>
              </div>
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
          className={`hidden xl:flex w-full md:w-1/2 xl:w-4/12 h-full relative`}
        >
          <div className="heroBannerForm__form max-w-md mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md">
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
