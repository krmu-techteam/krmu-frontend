import { STRAPI_URL } from "@/app/constant";
import { HeroSection } from "@/lib/types/school-programme";

import Image from "next/image";
import NpfPopup from "../../components/NpfPopup";
import IndusLearning from "../programs/prog-comp/IndusLearning";
import NoPaperForm from "@/lib/constants/NoPaperForm";

type Props = {
  title: string;
  highlightitle: string;
  heroSection: HeroSection;
  formId?: string; // dynamic form id
  slug: string;
  allowedFormSlugs: string[];
};

const HeroBanner = ({
  title,
  highlightitle,
  heroSection,
  formId,
  slug,
  allowedFormSlugs,
}: Props) => {
  const isFormAvailable = allowedFormSlugs.includes(slug);

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
    <section className="pt-24 sm:pt-40 sm:pb-[50px] px-2.5 sm:px-4">
      <div className="school-programme-max-width md:flex items-center justify-between gap-10">
        <div className={`w-full ${isFormAvailable ? "lg:w-8/12" : "lg:w-1/2"}`}>
          <p className="text-xs sm:text-2xl font-medium leading-[1.2] mb-2">
            {heroSection?.subtitle}
          </p>
          <h1 className="text-4xl sm:text-[50px] font-semibold text-[#0060aa] leading-[1.2] mb-2">
            {title} <span className="text-[#e61f21]">{highlightitle}</span>
          </h1>
          <p className="text-xs sm:text-[15px] font-medium mt-6 mb-4">
            {heroSection?.description}
          </p>
          {(slug === "btech-cse-cloud-computing" ||
            slug ===
              "b-tech-computer-science-and-engineering-semiconductor-design" ||
            slug === "ma-clinical-psychology" ||
            slug === "master-of-design-m-des-interior-design" ||
            slug === "ma-political-science" ||
            slug === "bsc-clinical-psychology") && (
            <p className="text-right font-bold">**Subject to Approval</p>
          )}

          {formId && (
            <NpfPopup
              formId={formId}
              btnClass={`hero-common-btn-b mt-12 ${
                heroSection.herobtn.buttonclass || ""
              }`}
              btnText={`${heroSection.herobtn.buttontext || "Apply Now"}`}
              showIcon={true}
            />
          )}

          {slug === "bba-digital-marketing" && <IndusLearning />}

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

        <div
          className={`hidden w-full ${isFormAvailable ? "lg:w-4/12" : "lg:w-1/2"}  lg:flex items-center videoField min-h-[556px] h-full relative`}
        >
          {isFormAvailable ? (
            <div className="border">
              <NoPaperForm formId={formId} height="550px" />
            </div>
          ) : heroSection?.imgvideo === "Video" ? (
            <div
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
