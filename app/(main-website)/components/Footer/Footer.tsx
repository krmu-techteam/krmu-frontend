import { STRAPI_URL } from "@/app/constant";
import NpfChatbot from "@/app/NpfChatbot";
import { getFooter } from "@/lib/api/footer";
import { getPageAssets } from "@/lib/api/global-setting";
import Image from "next/image";
import Link from "next/link";
import FloatingButtons from "@/app/(main-website)/components/Footer/FloatingButtons";
import NpfAgent from "@/app/NpfAgent";

const Footer = async () => {
  const footerData = await getFooter();
  const footerAssets = await getPageAssets();

  const { js_in_footer } = footerAssets || {};

  const footerComp1 = footerData?.footer_comp_1;
  const footerComp2 = footerData?.footer_comp_2;
  const footerComp3 = footerData?.footer_comp_3;
  const footerComp4 = footerData?.footer_comp_4;

  return (
    <>
      {/* <NpfPopup
        formId="d63cf9c4d3104c39f3ac28164701a69c"
        btnClass={`bg-[#f00] text-white border border-none py-[6px] px-[15px] fixed top-[40%] right-[-42px] rotate-90 rounded-sm h-[27px] z-10 npfWidget-d63cf9c4d3104c39f3ac28164701a69c`}
        btnText="Enquire Now"
        showIcon={false}
      /> */}

      <FloatingButtons />
      {/* <div className="fixed bottom-0 left-0 w-full text-center z-50 flex sm:hidden items-center justify-center">
        <Link
          href="https://admissions.krmangalam.edu.in/?utm_source=Website&utm_medium=ApplyNow-S"
          target="_blank"
          className="bg-[#0a41a1] w-1/2 rounded-xl border border-white  text-white py-2.5 inline-block cursor-pointer"
        >
          Apply Now
        </Link>
        <NpfPopup
          formId="d63cf9c4d3104c39f3ac28164701a69c"
          btnClass={`bg-[#0a41a1] w-1/2 rounded-xl border border-white  text-white py-2.5 inline-block cursor-pointer npfWidget-d63cf9c4d3104c39f3ac28164701a69c`}
          btnText="Enquire Now"
        />
      </div> */}

      {/* <Link href="https://krmangalam.edu.in/univiser" className="bg-red-600 text-white inline-flex transition-all
 duration-[250ms] gap-2.5 translate-x-[274px] hover:translate-x-0 cursor-pointer justify-center items-center h-12 fixed top-[40%] right-0 p-4 text-base font-semibold">
  <Image src="/wp-content/images/message-regular-full.svg" width={20} height={20} alt="" /> Connect With Campus Pioneer</Link> */}

      <section className="px-5 py-12 xl:p-[50px] bg-[#051630]">
        <div className="grid grid-cols-1 md:grid-cols-2  xl:flex gap-5">
          <div className="w-full  xl:w-1/4 xl:mx-7">
            {footerComp1 && (
              <div>
                <h6 className="text-2xl font-bold pb-5 border-b border-white w-1/2 text-white mt-2.5 mb-[15px]">
                  {footerComp1?.heading?.heading}
                </h6>
                <Image
                  src={`${STRAPI_URL}${footerComp1?.footer_logo?.url}`}
                  alt={footerComp1?.footer_logo?.alternativeText || ""}
                  width={180}
                  height={180}
                />
                <p className="text-white my-4 font-light">
                  {footerComp1?.footer_desc}
                </p>
                {footerComp1?.footer_btn?.btn_link && (
                  <Link
                    href={footerComp1?.footer_btn?.btn_link || "#"}
                    className={`text-white bg-[#cb000d] py-[5px] px-5 hover:bg-[#034272] rounded font-semibold ${
                      footerComp1?.footer_btn?.btn_class || ""
                    }`}
                  >
                    {footerComp1?.footer_btn?.btn_text || ""}
                  </Link>
                )}
              </div>
            )}
          </div>
          <div className="w-full  xl:w-1/4 break-all">
            <div className="xl:mx-7 break-all">
              {footerComp2 && (
                <>
                  <h6 className="text-2xl font-bold pb-5 border-b border-white w-1/2 text-white mt-5 md:mt-2.5 mb-[15px]">
                    {footerComp2?.heading?.heading}
                  </h6>
                  <ul className="text-white mb-5">
                    {footerComp2?.footer_menu?.map((comp2) => {
                      return (
                        <li
                          key={comp2?.id}
                          className="border-b border-[rgba(254,254,254,.27)] pb-1.5"
                        >
                          <Link
                            href={comp2?.url || "#"}
                            className="leading-[27.2px] text-base flex items-baseline justify-between"
                          >
                            {comp2?.title}
                            <Image
                              src="/white-arrow.svg"
                              width={19}
                              height={27}
                              alt="White arrow"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
          <div className="w-full  xl:w-1/4">
            <div className="xl:mx-7">
              {footerComp3 && (
                <>
                  <h6 className="text-2xl font-bold pb-5 border-b border-white w-1/2 text-white mt-2.5 mb-[15px]">
                    {footerComp3?.heading?.heading}
                  </h6>
                  <ul className="text-white mb-5">
                    {footerComp3?.footer_menu?.map((comp3) => {
                      return (
                        <li
                          key={comp3?.id}
                          className="border-b border-[rgba(254,254,254,.27)] pb-1.5"
                        >
                          <Link
                            href={comp3?.url || "#"}
                            className="leading-[27.2px] text-base flex items-baseline justify-between"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {comp3?.title}
                            <Image
                              src="/white-arrow.svg"
                              width={19}
                              height={27}
                              alt="White arrow"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
            </div>
          </div>
          <div className="w-full  xl:w-1/4">
            <div className="xl:mx-7 break-all">
              {footerComp4 && (
                <>
                  <h6 className="text-2xl font-bold pb-5 w-1/2 border-b border-white  text-white mt-2.5 mb-[15px]">
                    {footerComp4?.heading?.heading}
                  </h6>
                  <ul className="text-white">
                    {footerComp4?.footer_list_icon?.map((comp4) => {
                      return (
                        <li key={comp4?.id} className="flex gap-3 mb-2.5">
                          <Image
                            src={`${STRAPI_URL}${comp4?.icon?.url}`}
                            alt="Location"
                            width={20}
                            height={20}
                          />{" "}
                          <span className="text-white">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: comp4?.footer_info,
                              }}
                            />
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  <h6 className="text-2xl font-bold pb-5 border-b border-white w-1/2 text-white mt-2.5 mb-[15px]">
                    {footerComp4?.heading_2?.heading}
                  </h6>
                  <div className="flex">
                    {footerComp4?.footer_social_icons?.map((comp4) => {
                      return (
                        <Link
                          key={comp4?.id}
                          href={comp4?.footer_url || "#"}
                          className="w-[34px] h-[34px] p-2 bg-white flex items-center justify-center rounded-full m-1.5"
                        >
                          <Image
                            src={`${STRAPI_URL}${comp4?.footer_icon?.url}`}
                            width={40}
                            height={40}
                            alt={comp4?.footer_icon?.alternativeText || ""}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </>
              )}
              <div className="mt-5">
                <Image
                  src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/footer_logos_d944bc560c.svg"
                  width={250}
                  height={200}
                  alt="Footer Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {js_in_footer && (
        <script dangerouslySetInnerHTML={{ __html: js_in_footer }} />
      )}

      {/* Hide Nia Chatbot */}
      {/* <NpfChatbot /> */}
      <NpfAgent />
      {/* <div className="fixed bottom-10 right-24">
        <a
          href="https://wa.me/8800697018?text=Hi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/whatsapp_icon_e712c9e9c0.svg"
            width={45}
            height={45}
            alt="Whatsapp Icon"
          />
        </a>
      </div> */}

      {/* <Script
        src="https://cdn.npfs.co/js/widget/npfwpopup.js"
        strategy="afterInteractive"
      /> */}

      {/* Then run your inline script */}
      {/* <Script id="npf-form" strategy="afterInteractive">
        {`
          function initNpfWidget() {
            if (typeof NpfWidgetsInit !== "undefined") {
              new NpfWidgetsInit({
                widgetId: "d63cf9c4d3104c39f3ac28164701a69c",
                baseurl: "widgets.nopaperforms.com",
                formTitle: "Feedback Form",
                titleColor: "#FF0033",
                backgroundColor: "#ddd",
                iframeHeight: "500px",
                buttonbgColor: "#ff0000",
                buttonTextColor: "#FFF",
              });
            } else {
              console.log("NPF not ready, retrying...");
              setTimeout(initNpfWidget, 300);
            }
          }

          initNpfWidget();
        `}
      </Script> */}

      {/* <div className="fixed bottom-0 left-0 w-full text-center z-50 flex sm:hidden items-center justify-center bg-[#0a41a1]">
        <Link
            href="https://admissions.krmangalam.edu.in"
            className="bg-[#0a41a1] w-1/2 rounded-xl border border-white  text-white py-2.5 inline-block cursor-pointer"
            target="_blank"
          >
            Apply Now
          </Link>
        <NpfButton formId="d63cf9c4d3104c39f3ac28164701a69c" text="Enquire Now" />
      </div> */}
    </>
  );
};

export default Footer;
