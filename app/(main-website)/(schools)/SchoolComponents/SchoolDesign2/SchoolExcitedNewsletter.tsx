import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";
import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import { ButtonType } from "@/lib/types/common";
import { Button } from "@/lib/types/home";
import Link from "next/link";
import Popup from "@/app/(main-website)/components/Popup";

type Props = {
  excitedHeading: string;
  excitedDesc: string;
  excbtns: ButtonType[];
  newsLetterHeading: string;
  newsLetterDesc: string;
  newsLetterBtns: Button[];
};

const SchoolExcitedNewsletter = async ({
  excitedHeading,
  excitedDesc,
  excbtns,
  newsLetterHeading,
  newsLetterDesc,
  newsLetterBtns,
}: Props) => {
  const getDownProsSettings = await getDownloadProspectusSetting();

  const enable_disable_download_pros =
    getDownProsSettings?.download_prospectus_enable_disable;

  return (
    <section className="py-14 lg:py-20 mt-20 bg-[#051630]">
      <div className="max-w-[1664px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left text-white">
          <h4 className="text-3xl md:text-4xl xl:text-5xl font-semibold mb-5">
            {excitedHeading}
          </h4>

          <h5 className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8">
            {excitedDesc}
          </h5>

          <div className="flex justify-center lg:justify-start">
            {excbtns &&
              excbtns.map((btn) => {
                if (enable_disable_download_pros === true) {
                  
                  return (
                    <CommonLeadPopup
                      key={btn?.id}
                      buttonText={btn?.buttontext || "Download Prospectus"}
                      buttonClassName="border border-white py-2.5 px-8 bg-white transition duration-300 font-semibold text-sm sm:text-base rounded-md inline-block cursor-pointer text-black hover:text-white hover:border hover:border-white hover:bg-transparent shadow-md"
                      redirectUrl={btn?.buttonlink || "#"}
                      form_name="Download Prospectus"
                    />
                  );
                } else {
                  return (
                    <Link
                      key={btn?.id}
                      href={btn?.buttonlink || "#"}
                      className="border border-white py-2.5 px-8 bg-white transition duration-300 font-semibold text-sm sm:text-base rounded-md inline-block text-black hover:text-white hover:border hover:border-white hover:bg-transparent shadow-md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {btn.buttontext}
                    </Link>
                  );
                }
              })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center lg:text-left text-white border-t lg:border-t-0 lg:border-l border-white/20 pt-10 lg:pt-0 lg:pl-14">
          <h4 className="text-3xl md:text-4xl xl:text-5xl font-semibold mb-5">
            {newsLetterHeading}
          </h4>

          <h5 className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8">
            {newsLetterDesc}
          </h5>

          <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
            {newsLetterBtns &&
              newsLetterBtns.map((btn) => {
                if (btn?.buttonclass === "propPopup") {
                  return (
                    <Popup
                      key={btn?.id}
                      buttonText={btn.buttontext || "Apply Now"}
                      buttonClass={`border border-white py-2.5 px-6 bg-white transition duration-300 font-semibold rounded-md inline-block text-sm md:text-base shadow-md text-black hover:text-white hover:border hover:border-white hover:bg-transparent`}
                      buttonIcon=""
                    >
                      <p>This is the content inside the popup.</p>
                    </Popup>
                  );
                } else {
                  return (
                    <Link
                      key={btn?.id}
                      href={btn?.buttonlink || ""}
                      className={`border border-white py-2.5 px-6 bg-white transition duration-300 font-semibold rounded-md inline-block text-sm md:text-base shadow-md text-black hover:text-white hover:border hover:border-white hover:bg-transparent`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {btn?.buttontext}
                    </Link>
                  );
                }
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolExcitedNewsletter;
