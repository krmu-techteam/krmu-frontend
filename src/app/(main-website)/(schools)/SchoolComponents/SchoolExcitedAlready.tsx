import { STRAPI_URL } from "@/app/constant";
import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import PopupForm from "@/lib/constants/PopupForm";
import { ButtonType } from "@/lib/types/common";
import Link from "next/link";
import CommonLeadPopup from "../../components/CommonLeadPopup";
type Props = {
  heading: string;
  desc: string;
  excbtns: ButtonType[];
  excbg: string;
};
const SchoolExcitedAlready = async ({
  heading,
  desc,
  excbtns,
  excbg,
}: Props) => {
  const getDownProsSettings = await getDownloadProspectusSetting();

  const enable_disable_download_pros =
    getDownProsSettings?.download_prospectus_enable_disable;

  return (
    <section
      className="bg-cover bg-center py-14 px-4"
      style={{
        background: `url(${STRAPI_URL}${excbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1664px] mx-auto w-full xl:flex">
        <div className="w-full xl:w-2/3  text-center">
          <h4 className="text-3xl sm:text-6xl lg:text-8xl font-medium mb-5 lg:mb-0 text-white">
            {heading}
          </h4>
          <p className="text-sm sm:text-2xl lg:text-[32px] font-normal mb-5 text-white">
            {desc}
          </p>
          {excbtns &&
            excbtns.map((btn) => {
              if (enable_disable_download_pros === true) {
                return (
                  <CommonLeadPopup
                    key={btn?.id}
                    buttonText={btn?.buttontext || "Download Prospectus"}
                    buttonClassName={`py-3.5 px-8 bg-[#cb000d] font-bold text-sm sm:text-base rounded-sm inline-block cursor-pointer text-white`}
                    redirectUrl={btn?.buttonlink || "#"}
                    form_name="Download Prospectus"
                  />
                  // <PopupForm
                  //   key={btn?.id}
                  //   formId={btn?.popupFormId}
                  //   containerId={btn?.containerPopupFormId}
                  //   buttonClass="py-3.5 px-8 bg-[#cb000d] font-bold text-sm sm:text-base rounded-sm inline-block cursor-pointer text-white"
                  //   buttonText={btn?.buttontext}
                  // />
                );
              } else {
                return (
                  <Link
                    key={btn?.id}
                    href={btn?.buttonlink || "#"}
                    className="py-3.5 px-8 bg-[#cb000d] font-bold text-sm sm:text-base rounded-sm inline-block cursor-pointer text-white"
                    target="_blank" rel="noopener noreferrer"
                  >
                    {btn.buttontext}
                  </Link>
                );
              }
            })}

          {/* {excbtns &&
            excbtns.map((btn) => {
              if (btn?.buttonclass === "progPopup") {
                return (
                  <Popup
                    key={btn?.id}
                    buttonText={btn.buttontext || "Apply Now"}
                    buttonClass={`py-3.5 px-8 bg-[#cb000d] font-bold text-sm sm:text-base rounded-sm inline-block cursor-pointer ${btn.buttonclass}`}
                    buttonIcon=""
                  >
                    <p>This is the content inside the popup.</p>
                  </Popup>
                );
              } else {
                return (
                  <Link
                    key={btn?.id}
                    href={btn?.buttonlink || "#"}
                    className={`py-3.5 px-8 bg-[#cb000d] font-bold text-sm sm:text-base rounded-sm inline-block cursor-pointer ${btn.buttonclass}`}
                  >
                    {btn.buttontext}
                  </Link>
                );
              }
            })} */}
        </div>
        <div className="w-full xl:w-1/3"></div>
      </div>
    </section>
  );
};

export default SchoolExcitedAlready;
