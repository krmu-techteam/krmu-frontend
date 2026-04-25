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

  // const isFormAvailable = allowedFormSlugs.includes(slug);
  const isFormAvailable = false;

  const enable_disable_download_pros =
    getDownProsSettings?.download_prospectus_enable_disable;

  return (
    <section className="bg-[#0a41a1] py-10 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-20">
        
        {/* Left column: Image */}
        <div className="w-full md:w-1/2 px-4 md:px-0">
           <div className="relative aspect-[16/10] sm:aspect-video md:aspect-[4/3] w-full rounded-md overflow-hidden ">
              {heroSection?.imgvideo === "Video" && isFormAvailable ? (
                <div
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{
                    __html: heroSection?.videofield || "",
                  }}
                />
              ) : (
                scopeData?.scopeimg?.url && (
                  <Image
                    fill
                    src={`https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/program_scope_img_71b0352a8c.png`}
                    className="object-cover"
                    alt="programme scope"
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

        {/* Right column: Content */}
        <div className="w-full md:w-1/2 text-white px-4 md:px-0">
          <h3 className="text-[32px] md:text-[50px] font-semibold leading-tight mb-6">
            {scopeData?.scopeheading}
          </h3>
          <p className="text-base text-justify md:text-left md:text-xl lg:text-[22px] leading-relaxed mb-10 font-light opacity-95">
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
              <div className="flex items-center justify-center md:justify-start">
                <CommonLeadPopup
                buttonText={scopeData.scopebtn.buttontext || "Download Prospectus"}
                buttonClassName="inline-block px-6 py-2.5 text-[18px] font-medium border-2 border-white rounded-md hover:bg-white hover:text-[#0a41a1] transition-all duration-300"
                redirectUrl={scopeData?.scopebtn?.buttonlink || "#"}
                form_name="Download Prospectus"
              />
              </div>
            ) : (
              <Link
                href={scopeData?.scopebtn?.buttonlink || "#"}
                className="inline-block px-6 py-2.5 text-[18px]  font-medium border-2 border-white rounded-md hover:bg-white hover:text-[#0a41a1] transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {scopeData?.scopebtn?.buttontext || "Download Prospectus"}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeScope;
