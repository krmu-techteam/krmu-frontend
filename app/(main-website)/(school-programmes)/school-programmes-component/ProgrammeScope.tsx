import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import { HeroSection, ProgrammeScopeType } from "@/lib/types/school-programme";

import Link from "next/link";
import CommonLeadPopup from "../../components/CommonLeadPopup";
import Image from "next/image";
import { Download } from "lucide-react";
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
    <section className="bg-[#051730] py-8 md:p-6 lg:py-10 xl:py-12 2xl:py-16">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center gap-4 xl:gap-12 2xl:gap-16 px-4 md:px-0 lg:px-10 2xl:px-0">
        {/* Left column: Image */}
        <div className="w-full sm:w-1/2">
          {heroSection?.imgvideo === "Video" && isFormAvailable ? (
            <div className="relative aspect-[16/10] sm:aspect-[4/4] lg:aspect-[4/3] xl:aspect-[5/3] w-full rounded-md overflow-hidden">
              <div
                className="w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: heroSection?.videofield || "",
                }}
              />
            </div>
          ) : (
            scopeData?.scopeimg?.url && (
              <div className="w-full h-auto rounded-md overflow-hidden">
                <Image
                  src={`${STRAPI_URL}${scopeData?.scopeimg?.url}`}
                  width={scopeData?.scopeimg?.width || 800}
                  height={scopeData?.scopeimg?.height || 500}
                  className="w-full h-auto object-contain rounded-md"
                  alt="scope image"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 720px"
                />
              </div>
            )
          )}
        </div>

        {/* Right column: Content */}
        <div className="w-full sm:w-1/2 sm:text-left text-justify text-white">
          <h3 className="text-xl text-center sm:text-left sm:text-2xl md:text-[28px] lg:text-[32px] xl:text-[40px] 2xl:text-[50px] font-bold leading-tight mb-2 xl:mb-3 2xl:mb-5">
            {scopeData?.scopeheading}
          </h3>
          <p className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[17px] 2xl:text-xl text-center sm:text-left leading-relaxed sm:leading-[1.7] opacity-90 mb-4 xl:mb-5 2xl:mb-8 max-w-3xl mx-auto sm:mx-0">
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
              <div className="flex items-center justify-center sm:justify-start">
                <CommonLeadPopup
                  buttonText={
                    <span className="flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      {scopeData.scopebtn.buttontext || "Download Prospectus"}
                    </span>
                  }
                  buttonClassName="inline-block px-6 py-2 md:py-2 xl:py-2.5 text-md md:text-[18px] font-medium border-2 border-white rounded-md hover:bg-white hover:text-[#0a41a1] transition-all duration-300"
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
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  {scopeData?.scopebtn?.buttontext || "Download Prospectus"}
                </span>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammeScope;
