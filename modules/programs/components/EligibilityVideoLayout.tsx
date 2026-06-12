import React from "react";
import YoutubePopup from "@/app/(main-website)/(school-programmes)/school-programmes-component/YoutubePopup";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";
import { Download, ArrowUpRight } from "lucide-react";
import Button from "@/components/common/Button";
import { ButtonType } from "@/lib/types/common";
import { EligibilityItem, HeroSection } from "@/lib/types/school-programme";

interface EligibilityVideoLayoutProps {
  elgibilities: EligibilityItem[];
  heroSection?: HeroSection;
  enableDownloadPros?: boolean;
  prospectusBtn?: ButtonType;
  formId?: string;
  handleApplyClick: (e: React.MouseEvent) => void;
}

export const EligibilityVideoLayout = ({
  elgibilities,
  heroSection,
  enableDownloadPros,
  prospectusBtn,
  formId,
  handleApplyClick,
}: EligibilityVideoLayoutProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 xl:gap-10 rounded-md p-0 sm:px-0 lg:px-0 xl:px-0 2xl:px-0 items-stretch">
      {/* Left Column: Media (Video only for this layout) */}
      <div className="w-full lg:w-1/2 h-[220px] sm:h-[300px] lg:h-auto lg:min-h-[380px] relative  overflow-hidden group shadow-xs">
        <div className="w-full h-full relative">
          <YoutubePopup
            videoUrl={
              heroSection?.videofield ||
              "https://www.youtube.com/watch?v=tIfNUgSn2dw"
            }
            thumbnail={
              heroSection?.herobtn?.buttonlink ||
              "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Thumbnail_51b749248c.png"
            }
            ytClassName="w-full h-full absolute inset-0 object-cover"
            playIcon={true}
          />
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="w-full bg-[#061623] rounded-md p-5 lg:p-5 xl:p-6 2xl:p-8 lg:w-1/2 flex flex-col justify-between shadow-xs">
        <div>
          <div className="grid grid-cols-2 mb-4 divide-x divide-gray-200">
            <div className="flex flex-col items-start text-left pr-4">
              <span className="font-poppins text-[12px] md:text-[14px] leading-tight md:leading-[24px] text-white font-normal uppercase tracking-normal mb-1">
                {elgibilities[0]?.subtitle || "Duration"}
              </span>
              <span className="text-xl md:text-3xl font-semibold text-white leading-tight">
                {elgibilities[0]?.title}
              </span>
            </div>
            <div className="flex flex-col items-start text-left pl-4 md:pl-8">
              <span className="font-poppins text-[12px] md:text-[14px] font-normal leading-tight md:leading-[24px] text-white uppercase tracking-normal mb-1">
                {elgibilities[1]?.subtitle || "Program Fee / Year"}
              </span>
              <span className="text-xl md:text-3xl font-semibold text-white leading-tight">
                {elgibilities[1]?.title}
              </span>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-3 mb-3 text-left">
            <span className="font-poppins text-[14px] font-normal leading-[24px] text-white uppercase tracking-normal">
              {elgibilities[2]?.subtitle || "Eligibility"}
            </span>
            <div className="text-[15px] font-poppins leading-relaxed text-white font-normal mt-2">
              {elgibilities[2]?.title}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mt-auto w-full sm:w-auto">
          {enableDownloadPros ? (
            <CommonLeadPopup
              buttonText={
                <span className="flex items-center gap-2 justify-center relative z-10">
                  <Download
                    size={18}
                    className="group-hover:-translate-y-1 transition-transform"
                  />
                  {prospectusBtn?.buttontext || "Download Prospectus"}
                </span>
              }
              buttonClassName="w-full sm:w-auto flex items-center justify-center gap-2 h-[45px] rounded-[3px] font-normal transition-all duration-300 ease-in-out uppercase text-[14px] md:text-[15px] leading-none tracking-wide px-6 border border-white/20 text-white hover:bg-transparent hover:text-white hover:border-white/90 whitespace-nowrap"
              redirectUrl={prospectusBtn?.buttonlink || "#"}
              form_name="Download Prospectus"
            />
          ) : (
            <Button
              href={prospectusBtn?.buttonlink || "#"}
              variant="outline"
              icon={Download}
              target="_blank"
            >
              {prospectusBtn?.buttontext || "Download Prospectus"}
            </Button>
          )}
          {formId ? (
            <Button
              href="#apply-form-mobile"
              onClick={handleApplyClick}
              variant="primary"
              icon={ArrowUpRight}
              iconPosition="right"
            >
              Apply Now
            </Button>
          ) : (
            <Button
              href="#apply-form-mobile"
              onClick={handleApplyClick}
              variant="primary"
            >
              Apply Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EligibilityVideoLayout;
