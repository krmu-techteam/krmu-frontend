import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import Image from "next/image";
import { Download } from "lucide-react";
import { STRAPI_URL } from "@/app/constant";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";
import Button from "@/components/common/Button";
import SectionDivider from "@/components/common/SectionDivider";
import { ProgrammeScopeSectionProps } from "@/features/programs";

const ProgrammeScopeSection = async ({
  scopeData,
  heroSection,
}: ProgrammeScopeSectionProps) => {
  const getDownProsSettings = await getDownloadProspectusSetting();

  // const isFormAvailable = allowedFormSlugs.includes(slug);
  const isFormAvailable = false;

  const enable_disable_download_pros =
    getDownProsSettings?.download_prospectus_enable_disable;

  return (
    <section className="relative z-10 py-10 md:py-12 xl:py-20">
      <div className="max-w-[1530px] w-full mx-auto flex flex-col sm:flex-row items-center gap-6 xl:gap-10 px-4 md:px-8 xl:px-16">
        {/* Left column: Image */}
        <div className="w-full sm:w-1/2">
          {heroSection?.imgvideo === "Video" && isFormAvailable ? (
            <div className="relative aspect-[16/10] sm:aspect-[4/4] lg:aspect-[4/3] xl:aspect-[5/3] w-full rounded-[4px] ld:rounded-md overflow-hidden">
              <div
                className="w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: heroSection?.videofield || "",
                }}
              />
            </div>
          ) : (
            scopeData?.scopeimg?.url && (
              <div className="w-full h-auto rounded-[4px] ld:rounded-md overflow-hidden">
                <Image
                  src={`${STRAPI_URL}${scopeData?.scopeimg?.url}`}
                  width={scopeData?.scopeimg?.width || 800}
                  height={scopeData?.scopeimg?.height || 500}
                  className="w-full h-auto object-contain rounded-[4px] ld:rounded-md"
                  alt="scope image"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 720px"
                />
              </div>
            )
          )}
        </div>

        {/* Right column: Content */}
        <div className="w-full sm:w-1/2 sm:text-left text-justify text-white">
          <h3 className="heading-primary text-center md:text-left mb-5 xl:mb-3 2xl:mb-5">
            {scopeData?.scopeheading}
          </h3>
          <p className="text-md sm:text-[14px] md:text-[14px] lg:text-[15px] xl:text-[17px] 2xl:text-[18px] text-justify md:text-center sm:text-left leading-relaxed font-poppins sm:leading-[1.7] opacity-90 mb-0 sm:mb-4 xl:mb-5 2xl:mb-8 max-w-3xl mx-auto sm:mx-0">
            {scopeData?.scopecontent}
          </p>

          {scopeData?.scopebtn?.buttontext && (
            <div className="flex items-center justify-center sm:justify-start mt-5 md:mt-0 w-fit mx-auto">
              {enable_disable_download_pros ? (
                <CommonLeadPopup
                  buttonText={
                    <span className="flex items-center gap-2 justify-center relative z-10">
                      <Download
                        size={18}
                        className="group-hover:-translate-y-1 transition-transform"
                      />
                      {scopeData.scopebtn.buttontext || "Download Prospectus"}
                    </span>
                  }
                  buttonClassName="w-full sm:w-auto flex items-center justify-center gap-2 h-[45px] rounded-[3px] font-normal transition-all duration-300 ease-in-out uppercase text-[14px] md:text-[15px] leading-none tracking-wide px-6 border border-white/20 text-white hover:bg-transparent hover:text-white hover:border-white/90 whitespace-nowrap"
                  redirectUrl={scopeData?.scopebtn?.buttonlink || "#"}
                  form_name="Download Prospectus"
                />
              ) : (
                <Button
                  href={scopeData?.scopebtn?.buttonlink || "#"}
                  variant="outline"
                  icon={Download}
                  target="_blank"
                >
                  {scopeData?.scopebtn?.buttontext || "Download Prospectus"}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default ProgrammeScopeSection;
