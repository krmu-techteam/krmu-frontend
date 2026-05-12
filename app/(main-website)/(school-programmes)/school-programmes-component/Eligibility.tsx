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
};

const Eligibility = ({
  elgibilities,
  mobherobtn,
  formId,
  allowedFormSlugs,
  heroSection,
  slug,
}: Props) => {
  const [expanded, setExpanded] = useState(false);
  // const btnRef = useRef<HTMLButtonElement>(null);

  // limit characters for h2
  const maxChars = 50;
  const longTitle = elgibilities[2]?.title || "";
  const isLong = longTitle.length > maxChars;
  const displayTitle = expanded ? longTitle : longTitle.slice(0, maxChars);

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
        className={`bg-[#eff4ff] py-8 px-4 xl:px-8 relative z-10 border-gray-100`}
      >
        <div className={`max-w-[1440px] w-full mx-auto`}>
          {slug === "bba-hr" && heroSection?.imgvideo === "Video" ? (
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 rounded-3xl p-0 sm:p-4 lg:p-8 items-stretch">
              {/* Left Column: Media (Video only for this layout) */}
              <div className="w-full lg:w-1/2 h-[280px] sm:h-[350px] lg:h-auto lg:min-h-[450px] relative rounded-sm sm:rounded-3xl overflow-hidden group shadow-lg">
                <div className="w-full h-full relative">
                  <YoutubePopup
                    videoUrl={heroSection?.videofield || "https://www.youtube.com/watch?v=tIfNUgSn2dw"}
                    thumbnail={heroSection?.heroimg?.url ? `${STRAPI_URL}${heroSection.heroimg.url}` : "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Thumbnail_51b749248c.png"}
                    ytClassName="w-full h-full absolute inset-0 object-cover"
                    playIcon={true}
                  />
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="w-full bg-white rounded-sm md:rounded-3xl p-4 md:p-8 lg:p-10 lg:w-1/2 flex flex-col justify-between shadow-xl">
                <div>
                  <div className="grid grid-cols-2 mb-8 divide-x divide-gray-200">
                    <div className="flex flex-col items-center text-center px-2">
                      <span className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                        {elgibilities[0]?.subtitle || "Duration"}
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                        {elgibilities[0]?.title}
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-center px-2">
                      <span className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                        {elgibilities[1]?.subtitle || "Program Fee / Year"}
                      </span>
                      <span className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                        {elgibilities[1]?.title}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 md:pt-8 mb-4 md:mb-8 text-center sm:text-left">
                    <span className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3 block">
                      {elgibilities[2]?.subtitle || "Eligibility"}
                    </span>
                    <div className="text-sm md:text-[15px] leading-relaxed text-gray-700 font-medium space-y-2">
                      {elgibilities[2]?.title}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-3 md:gap-4 mt-4">
                  <button className="w-full sm:w-auto lg:w-full xl:w-auto flex items-center justify-center gap-2 px-4 md:px-8 py-2.5 sm:py-3.5 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-xs md:text-sm uppercase tracking-wide cursor-pointer whitespace-nowrap">
                    <Download size={18} />
                    Download Prospectus
                  </button>
                  {formId ? (
                    <a
                      href="#apply-form-mobile"
                      className="w-full sm:w-auto lg:w-full xl:w-auto flex items-center justify-center gap-2 px-4 md:px-10 py-2.5 sm:py-3.5 bg-[#cb000d] text-white font-semibold rounded-lg shadow-lg hover:bg-[#e6002e] transition-all text-xs md:text-sm uppercase tracking-wide hover:scale-105 cursor-pointer whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  ) : (
                    <Link
                      href="#"
                      className="w-full sm:w-auto lg:w-full xl:w-auto flex items-center justify-center gap-2 px-4 md:px-10 py-3.5 bg-[#cb000d] text-white font-semibold rounded-lg shadow-lg hover:bg-[#e6002e] transition-all text-xs md:text-sm uppercase tracking-wide hover:scale-105 cursor-pointer whitespace-nowrap"
                    >
                      Apply Now
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
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
