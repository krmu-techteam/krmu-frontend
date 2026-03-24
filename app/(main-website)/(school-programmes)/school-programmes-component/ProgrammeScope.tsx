import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import { HeroSection, ProgrammeScopeType } from "@/lib/types/school-programme";

import Link from "next/link";
import CommonLeadPopup from "../../components/CommonLeadPopup";
import Image from "next/image";
import { STRAPI_URL } from "@/app/constant";

type Props = {
  scopeData: ProgrammeScopeType;
  heroSection?: HeroSection;
  allowedFormSlugs: string[];
  slug: string;
};

const ProgrammeScope = async ({
  scopeData,
  heroSection,
  allowedFormSlugs,
  slug,
}: Props) => {
  const getDownProsSettings = await getDownloadProspectusSetting();

  const isFormAvailable = allowedFormSlugs.includes(slug);

  

  const enable_disable_download_pros =
    getDownProsSettings?.download_prospectus_enable_disable;

  return (
    <section className={`sm:bg-[#0a41a1] ${isFormAvailable ? 'pt-10 sm:py-10 px-4' : ''}`}>
      <div
        className={`xl:flex items-center xl:items-stretch  ${isFormAvailable ? "max-w-[1800px] mx-auto lg:gap-10" : "w-full"}`}
      >
        <div
          className={`w-full xl:w-1/2 ${isFormAvailable ? "" : "pt-10 pb-[30px] px-[30px] sm:p-[60px]"}  h-full sm:text-white text-center sm:text-left`}
        >
          <h3 className="leading-[1.2] sm:leading-[1.5] mb-6 text-4xl sm:text-[42px] text-[#e61f21] sm:text-white font-bold">
            {scopeData?.scopeheading}
          </h3>
          <p className="text-base md:text-xl 2xl:text-2xl leading-[2]">
            {scopeData?.scopecontent}
          </p>
          {/* {(scopeData?.scopebtn?.buttonclass ||
            scopeData?.scopebtn?.buttonlink) && (
            <Link
              href={scopeData?.scopebtn?.buttonlink}
              className={`bg-[#0a41a1] text-white text-base sm:bg-white p-[15px] flex items-center justify-center max-w-[220px] w-full mx-auto sm:mx-0 sm:text-[#0a41a1] rounded-md font-semibold mt-6 ${scopeData?.scopebtn?.buttonclass}`}
            >
              {scopeData?.scopebtn?.buttontext}
            </Link>
          )} */}

          {/* <button className="bg-[#0a41a1] cursor-pointer text-white text-base sm:bg-white p-[15px] flex items-center justify-center max-w-[220px] w-full mx-auto sm:mx-0 sm:text-[#0a41a1] rounded-md font-semibold mt-6">  
              Programme Scope
            </button> */}
          {scopeData?.scopebtn?.buttontext &&
            (enable_disable_download_pros ? (
              <CommonLeadPopup
                buttonText={scopeData.scopebtn.buttontext || "Download"}
                buttonClassName={`bg-[#0a41a1] cursor-pointer text-white text-base sm:bg-white p-[15px] flex items-center justify-center max-w-[220px] w-full mx-auto sm:mx-0 sm:text-[#0a41a1] rounded-md font-semibold mt-6 ${
                  scopeData?.scopebtn?.buttonclass || ""
                }`}
                redirectUrl={scopeData?.scopebtn?.buttonlink || "#"}
                form_name="Download Prospectus"
              />
            ) : (
              <Link
                href={scopeData?.scopebtn?.buttonlink || "#"}
                className={`bg-[#0a41a1] cursor-pointer text-white text-base sm:bg-white p-[15px] flex items-center justify-center max-w-[220px] w-full mx-auto sm:mx-0 sm:text-[#0a41a1] rounded-md font-semibold mt-6 ${
                  scopeData?.scopebtn?.buttonclass || ""
                }`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {scopeData?.scopebtn?.buttontext || "Download"}
              </Link>
            ))}
        </div>
        <div
          className={`w-full xl:w-1/2 ${isFormAvailable ? "prog_scope flex items-center mt-10 sm:mt-0" : "min-h-[280px] sm:min-h-[400px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[831px]"} relative`}
        >
         
          {heroSection?.imgvideo === "Video" && isFormAvailable ? (
            <div
              dangerouslySetInnerHTML={{
                __html: heroSection?.videofield || "",
              }}
            />
          ) : (
            scopeData?.scopeimg?.url && (
              <Image
                fill
                src={`${STRAPI_URL}${scopeData?.scopeimg?.url}`}
                className="object-cover z-10"
                alt="scope image"
              />
            )
          )}
          {/* {scopeData?.scopeimg?.url && (
            <Image
              fill
              src={`${STRAPI_URL}${scopeData?.scopeimg?.url}`}
              className="object-cover z-10"
              alt="scope image"
            />
          )} */}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeScope;
