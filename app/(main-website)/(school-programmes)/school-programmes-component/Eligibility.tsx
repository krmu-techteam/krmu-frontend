"use client";

import { loadNpfScript } from "@/lib/constants/loadNpfScript";
import { ButtonType } from "@/lib/types/common";
import { EligibilityItem, HeroSection } from "@/lib/types/school-programme";
import {
  ArrowRight,
  Calendar,
  Clock,
  Download,
  IndianRupee,
  LaptopMinimalCheck,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NpfPopup from "../../components/NpfPopup";
import CommonLeadPopup from "../../components/CommonLeadPopup";
import NoPaperForm from "@/lib/constants/NoPaperForm";
import YoutubePopup from "./YoutubePopup";
import Image from "next/image";
import { STRAPI_URL } from "@/app/constant";

type Props = {
  elgibilities: EligibilityItem[];
  mobherobtn: ButtonType;
  formId?: string; // dynamic form id
  allowedFormSlugs: string[];
  slug: string;
  heroSection?: HeroSection;
  enableDownloadPros?: boolean;
  prospectusBtn?: ButtonType;
};

const Eligibility = ({
  elgibilities,
  mobherobtn,
  formId,
  allowedFormSlugs,
  heroSection,
  slug,
  enableDownloadPros,
  prospectusBtn,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  // const btnRef = useRef<HTMLButtonElement>(null);

  // limit characters for h2
  const maxChars = 50;
  const longTitle = elgibilities[2]?.title || "";
  const isLong = longTitle.length > maxChars;
  const displayTitle = expanded ? longTitle : longTitle.slice(0, maxChars);

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const visibleForm = Array.from(document.querySelectorAll(".heroBannerForm__form")).find(
      (el) => el.getBoundingClientRect().height > 0
    );
    if (visibleForm) {
      visibleForm.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isFormAvailable = allowedFormSlugs.includes(slug);
  const iframe = heroSection?.videofield;
  const videoSrc = iframe?.match(/src="([^"]+)"/)?.[1];

  // useEffect(() => {
  //   if (!formId || !btnRef.current) return;

  //   loadNpfScript()
  //     .then(() => {
  //       // @ts-expect-error - test
  //       new NpfWidgetsInit({
  //         widgetId: formId,
  //         baseurl: "widgets.nopaperforms.com",
  //         formTitle: "Apply Now",
  //         titleColor: "#FF0033",
  //         backgroundColor: "#ddd",
  //         iframeHeight: "500px",
  //         buttonTextColor: "#FFF",
  //         target: btnRef.current,
  //       });
  //     })
  //     .catch((err) => {
  //       console.error("Failed to load NPF script:", err);
  //     });
  // }, [formId, mobherobtn?.buttontext]);

  return (
    <>
      <section
        className={`bg-[#eff4ff] py-8 md:p-6 lg:py-10 xl:py-12 px-4 lg:px-10 2xl:px-0 relative z-10 border-gray-100`}
      >
        <div className={`max-w-[1440px] w-full mx-auto`}>
          {/* {slug === "bba-hr" && heroSection?.imgvideo === "Video" ? ( */}
         
          {heroSection?.imgvideo === "Video" ? (
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 2xl:gap-8 rounded-md p-0 sm:px-0 lg:px-0 xl:px-0 2xl:px-0 items-stretch">
              {/* Left Column: Media (Video only for this layout) */}
              <div className="w-full lg:w-1/2 h-[220px] sm:h-[300px] lg:h-auto lg:min-h-[380px] relative  overflow-hidden group shadow-xs">
                <div className="w-full h-full relative">
                  <YoutubePopup
                    videoUrl={heroSection?.videofield || "https://www.youtube.com/watch?v=tIfNUgSn2dw"}
                    thumbnail={heroSection?.herobtn?.buttonlink || "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Thumbnail_51b749248c.png"}
                    ytClassName="w-full h-full absolute inset-0 object-cover"
                    playIcon={true}
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="w-full bg-white rounded-md p-5 lg:p-5 xl:p-6 2xl:p-8 lg:w-1/2 flex flex-col justify-between shadow-xs">
                <div>
                  <div className="grid grid-cols-2 mb-4 divide-x divide-gray-200">
                    <div className="flex flex-col items-start text-left pr-4">
                      <span className="font-poppins text-[12px] md:text-[14px] font-normal leading-tight md:leading-[24px] text-gray-600 uppercase tracking-normal mb-1">
                        {elgibilities[0]?.subtitle || "Duration"}
                      </span>
                      <span className="text-xl md:text-3xl font-semibold text-gray-900 leading-tight">
                        {elgibilities[0]?.title}
                      </span>
                    </div>
                    <div className="flex flex-col items-start text-left pl-4 md:pl-8">
                      <span className="font-poppins text-[12px] md:text-[14px] font-normal leading-tight md:leading-[24px] text-gray-600 uppercase tracking-normal mb-1">
                        {elgibilities[1]?.subtitle || "Program Fee / Year"}
                      </span>
                      <span className="text-xl md:text-3xl font-semibold text-gray-900 leading-tight">
                        {elgibilities[1]?.title}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-3 mb-3 text-left">
                    <span className="font-poppins text-[14px] font-normal leading-[24px] text-gray-600 uppercase tracking-normal">
                      {elgibilities[2]?.subtitle || "Eligibility"}
                    </span>
                    <div className="text-sm md:text-[16px] leading-relaxed text-gray-700 font-medium">
                      {elgibilities[2]?.title}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mt-auto">
                  {enableDownloadPros ? (
                    <CommonLeadPopup
                      buttonText={
                        <span className="flex items-center gap-3 justify-center">
                          <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                          {prospectusBtn?.buttontext || "Download Prospectus"}
                        </span>
                      }
                      buttonClassName="w-full sm:w-auto flex items-center justify-center gap-3 py-2 px-6 lg:px-2 xl:px-4 2xl:px-8 xl:py-2.5 2xl:py-2.5 border-[1.5px] border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all text-sm md:text-lg tracking-wide cursor-pointer whitespace-nowrap group"
                      redirectUrl={prospectusBtn?.buttonlink || "#"}
                      form_name="Download Prospectus"
                    />
                  ) : (
                    <Link
                      href={prospectusBtn?.buttonlink || "#"}
                      className="w-full sm:w-auto flex items-center justify-center gap-3 py-2 px-6 lg:px-2 xl:px-4 2xl:px-8 xl:py-2.5 2xl:py-2.5 border-[1.5px] border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-50 transition-all text-sm md:text-lg tracking-wide cursor-pointer whitespace-nowrap group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                      {prospectusBtn?.buttontext || "Download Prospectus"}
                    </Link>
                  )}
                   {formId ? (
                    <a
                      href="#apply-form-mobile"
                      onClick={handleApplyClick}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 py-2 px-6 lg:px-9 xl:px-12 2xl:px-16 xl:py-2.5 2xl:py-2.5 bg-[#cb000d] text-white border border-[#cb000d] font-medium rounded-md shadow-lg hover:bg-[#b0000a] transition-all text-sm md:text-lg tracking-wide cursor-pointer whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  ) : (
                    <Link
                      href="#apply-form-mobile"
                      onClick={handleApplyClick}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 md:px-12 xl:px-12 2xl:px-16 xl:py-2.5 2xl:py-3 bg-[#cb000d] border border-[#cb000d] text-white font-medium rounded-md shadow-lg hover:bg-[#b0000a] transition-all text-sm md:text-lg tracking-wide cursor-pointer whitespace-nowrap"
                    >
                      Apply Now
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 xl:gap-8 w-full">
              <div className="bg-white border border-gray-300 rounded-md p-6 flex items-start gap-5">
                <Calendar size={32} color="#0a41a1" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-md font-medium text-gray-500 capitalize leading-tight tracking-wide">
                    {elgibilities[0]?.subtitle}
                  </p>
                  <p className="text-md md:text-lg font-semibold text-black leading-tight mt-1">
                    {elgibilities[0]?.title}
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-300 rounded-md p-6 flex items-start gap-5">
                <IndianRupee
                  size={32}
                  color="#0a41a1"
                  className="flex-shrink-0"
                />
                <div className="flex flex-col">
                  <p className="text-md font-medium text-gray-500 leading-tight tracking-wide">
                    {elgibilities[1]?.subtitle}
                  </p>
                  <p className="text-md md:text-lg font-semibold text-black leading-tight mt-1">
                    {elgibilities[1]?.title}
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-300 rounded-md px-6 py-4 flex items-start gap-5">
                <LaptopMinimalCheck
                  size={32}
                  color="#0a41a1"
                  className="flex-shrink-0"
                />
                <div className="flex flex-col">
                  <p className="text-md font-medium text-gray-500 leading-tight tracking-wide">
                    {elgibilities[2]?.subtitle}
                  </p>
                  <div className="flex flex-col mt-1">
                    <p className="text-md md:text-lg font-semibold text-black leading-tight">
                      {displayTitle}
                      {isLong && !expanded && " "}
                    </p>
                    {isLong && (
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-xs text-[#0060aa] font-bold mt-1 text-left"
                      >
                        {expanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* {slug === "b-tech-cse" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
              <div className="bg-white border border-gray-300 rounded-md p-6 flex items-start gap-5">
                <Calendar size={32} color="#00a1e4" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-md font-medium text-gray-500 capitalize leading-tight tracking-wide">{elgibilities[0]?.subtitle}</p>
                  <p className="text-md md:text-lg font-semibold text-black leading-tight mt-1">
                    {elgibilities[0]?.title}
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-300 rounded-md p-6 flex items-start gap-5">
                <IndianRupee size={32} color="#00a1e4" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-md font-medium text-gray-500 leading-tight tracking-wide">{elgibilities[1]?.subtitle}</p>
                  <p className="text-md md:text-lg font-semibold text-black leading-tight mt-1">  
                    {elgibilities[1]?.title}
                  </p>
                </div>
              </div>
              <div className="bg-white border border-gray-300 rounded-md px-6 py-4 flex items-start gap-5">
                <LaptopMinimalCheck size={32} color="#00a1e4" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-md font-medium text-gray-500 leading-tight tracking-wide">{elgibilities[2]?.subtitle}</p>
                  <div className="flex flex-col mt-1">
                    <p className="text-md md:text-lg font-semibold text-black leading-tight">
                      {displayTitle}
                      {isLong && !expanded && " "}
                    </p>
                    {isLong && (
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-xs text-[#0060aa] font-bold mt-1 text-left"
                      >
                        {expanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
              <div className="bg-white border border-gray-200 rounded-md p-6 shadow-lg flex items-center gap-5">
                <Calendar size={32} color="#00a1e4" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-[13px] font-bold text-gray-500 uppercase leading-tight tracking-wide">{elgibilities[0]?.subtitle}</p>
                  <p className="text-[20px] font-extrabold text-black leading-tight mt-1">
                    {elgibilities[0]?.title}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-md p-6 shadow-lg flex items-center gap-5" id="mob-npf-form">
                <IndianRupee size={32} color="#00a1e4" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-[14px] font-bold text-gray-500 uppercase leading-tight tracking-wide">{elgibilities[1]?.subtitle}</p>
                  <p className="text-[20px] font-extrabold text-black leading-tight mt-1">
                    {elgibilities[1]?.title}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-md p-6 shadow-lg flex items-center gap-5">
                <LaptopMinimalCheck size={32} color="#00a1e4" className="flex-shrink-0" />
                <div className="flex flex-col">
                  <p className="text-[13px] font-bold text-gray-500 uppercase leading-tight tracking-wide">{elgibilities[2]?.subtitle}</p>
                  <div className="flex flex-col mt-1">
                    <p className="text-[18px] md:text-[20px] font-extrabold text-black leading-tight">
                      {displayTitle}
                      {isLong && !expanded && " "}
                    </p>
                    {isLong && (
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-xs text-[#0060aa] font-bold mt-1 text-left"
                      >
                        {expanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )} */}

          {/* {isFormAvailable && (
          <div className="border mt-5 sm:hidden mob_prog_form">
            <div className="flex justify-center items-center bg-[#0060aa] py-2 px-3 text-[22px] font-bold">
                <h3 className="text-white">ADMISSIONS OPEN 2026-27</h3>
              </div>
            <NoPaperForm formId={formId} height="500px" />
          </div>
        )} */}
          {/* <YoutubePopup
            videoUrl="https://www.youtube.com/watch?v=tIfNUgSn2dw"
            thumbnail="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Thumbnail_51b749248c.png"
            ytClassName="max-w-sm w-full h-[200px] mt-5 sm:hidden"
          /> */}

          {isFormAvailable && slug !== "b-tech-cse" && (
            <div className="">
              {formId ? (
                <NpfPopup
                  formId={formId}
                  btnClass={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white gap-2 rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
                  btnText={`${mobherobtn?.buttontext || ""}`}
                  showIcon={true}
                />
              ) : (
                <Link
                  href={"#"}
                  className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
                >
                  {mobherobtn?.buttontext} <ArrowRight />
                </Link>
              )}
            </div>
          )}

          {[
            "bba-hr-marketing-finance-international-business-travel-and-tourism-semester-abroad-programme-with-university-of-east-anglia-uea-norwich-uk",
            "bba-hons-hons-with-research-hr-marketing-finance-international-business-travel-and-tourism-semester-abroad-programme-with-university-of-east-anglia-uea-norwich-uk",
          ].includes(slug) && (
            <p className="my-5 italic">
              *In addition to the regular programme fee at KRMU, students will
              be required to pay an additional tuition fee of GBP 6500 for the
              semester at UEA.
            </p>
          )}

          {/* 
        {(mobherobtn?.buttonclass || mobherobtn?.buttonlink) && (
          <Link
            href={mobherobtn?.buttonlink}
            className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <span>{mobherobtn?.buttontext}</span> <ArrowRight />
          </Link>
        )} */}
          {/* {mobherobtn && (
          <>
            {mobherobtn.buttonclass === "progPopup" ? (
              <Popup
                buttonText={mobherobtn.buttontext || "Apply Now"}
                buttonClass={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
                buttonIcon={<ArrowRight />}
              >
                <p>This is the content inside the popup.</p>
              </Popup>
            ) : mobherobtn.buttonlink ? (
              <Link
                href={mobherobtn.buttonlink}
                className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${
                  mobherobtn.buttonclass || ""
                }`}
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <span>{mobherobtn.buttontext}</span> <ArrowRight />
              </Link>
            ) : null}
          </>
        )} */}

          {/* {formId ? (
          <NpfPopup
            formId={formId}
            btnClass={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
            btnText={`${mobherobtn?.buttontext || ""}`}
          />
        ) : (
          <Link
            href={"#"}
            className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
          >
            {mobherobtn?.buttontext} <ArrowRight />
          </Link>
        )} */}

          {/* {formId ? (
          <button
            ref={btnRef}
            className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
          >
            {mobherobtn?.buttontext} <ArrowRight />
          </button>
        ) : (
          <Link
            href={"#"}
            className={`bg-[#0a41a1] py-2.5 px-[30px] cursor-pointer flex items-center justify-around sm:hidden text-white rounded-[10px] w-fit mt-5 ${mobherobtn?.buttonclass}`}
          >
            {mobherobtn?.buttontext} <ArrowRight />
          </Link>
        )} */}
        </div>
      </section>
    </>
  );
};

export default Eligibility;
