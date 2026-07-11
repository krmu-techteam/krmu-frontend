 
import Link from "next/link";
import { ExcitedNewsletterSectionProps, NewsletterDownloader } from "@/modules/school";
import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";
import { Download } from "lucide-react";
import SectionDivider from "@/components/common/SectionDivider";


const ExcitedNewsletterSection = async ({
  excitedHeading,
  excitedDesc,
  excbtns,
  newsLetterHeading,
  newsLetterDesc,
  newsLetterBtns,
}: ExcitedNewsletterSectionProps) => {
  const getDownProsSettings = await getDownloadProspectusSetting();

  const enable_disable_download_pros =
    getDownProsSettings?.download_prospectus_enable_disable;

  return (
    <section className="py-12 xl:py-20 bg-transparent relative z-10 font-poppins px-6 md:px-8 lg:px-11 2xl:px-16">
      <div className="max-w-[1530px] mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* LEFT SIDE CARD */}
        <div className="bg-[#0B1521] rounded-md border border-white/5 p-8 xl:p-12 text-left text-white flex flex-col justify-center">
          <h4 className="text-3xl xl:text-[40px] leading-tight mb-3 font-serif">
            {excitedHeading}
          </h4>

          <h5 className="text-md xl:text-lg text-white/80 mb-10 font-light">
            {excitedDesc}
          </h5>

          <div className="flex justify-start">
            {excbtns &&
              excbtns.map((btn) => {
                if (enable_disable_download_pros === true) {
                  return (
                    <CommonLeadPopup
                      key={btn?.id}
                      buttonText={
                        <div className="flex items-center gap-3">
                          <Download size={18} className="shrink-0" />
                          <span className="uppercase tracking-wide text-sm font-medium">{btn?.buttontext || "DOWNLOAD PROSPECTUS"}</span>
                        </div>
                      }
                      buttonClassName="border border-white/30 w-full sm:w-fit py-3.5 px-7 transition duration-300 rounded-sm inline-block cursor-pointer text-white hover:bg-white/5"
                      redirectUrl={btn?.buttonlink || "#"}
                      form_name="Download Prospectus"
                    />
                  );
                } else {
                  return (
                    <Link
                      key={btn?.id}
                      href={btn?.buttonlink || "#"}
                      className="border border-white/30 w-full sm:w-fit py-3.5 px-7 transition duration-300 rounded-sm flex items-center justify-center sm:justify-start gap-3 text-white hover:bg-white/5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={18} className="shrink-0" />
                      <span className="uppercase tracking-wide text-sm font-medium">{btn.buttontext || "DOWNLOAD PROSPECTUS"}</span>
                    </Link>
                  );
                }
              })}
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-[#0B1521] rounded-md border border-white/5 p-8 xl:p-12 text-left text-white flex flex-col justify-center">
          <h4 className="text-3xl xl:text-[40px] leading-tight mb-3 font-serif">
            {newsLetterHeading}
          </h4>

          <h5 className="text-md xl:text-lg text-white/80 mb-10 font-light">
            {newsLetterDesc}
          </h5>

          <div className="mt-2 w-full">
            <NewsletterDownloader newsLetterBtns={newsLetterBtns || []} />
          </div>
        </div>
      </div>
      <SectionDivider />
    </section>
  );
};

export default ExcitedNewsletterSection;
