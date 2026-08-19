"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import { ProgrammeStructureProps } from "@/features/programs";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";
import { Download, CircleArrowRight } from "lucide-react";

const ProgrammeStructure = ({
  programStruct,
  currbtn,
  heading,
  highlight,
  slug,
}: ProgrammeStructureProps) => {
  const [activeYear, setActiveYear] = useState(
    programStruct[0]?.year.toLowerCase().replace(/\s+/g, "") || "",
  );

  const [activeSemester, setActiveSemester] = useState(
    programStruct[0]?.semester[0]?.semestername
      ?.toLowerCase()
      ?.replace(/\s+/g, "") || "",
  );

  const [settings, setSettings] = useState<any>(null);

  // Fetch settings on mount
  useEffect(() => {
    const fetchSettings = async () => {
      const data = await getDownloadProspectusSetting();
      setSettings(data);
    };
    fetchSettings();
  }, []);

  return (
    <div className="w-full antialiased">
      <div className="container mx-auto relative">
        {/* Section Header */}
        <div className="relative mb-12">
          {(heading || highlight) && (
            <div
              className="w-full py-4 xl:py-4 2xl:py-6 mb-6"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0, 23, 50, 0) 0%, #001732 49.04%, rgba(0, 23, 50, 0) 95.67%)",
              }}
            >
              <h2 className="text-[28px] font-serif md:text-3xl lg:text-[40px] font-bold text-white leading-tight tracking-tight text-center drop-shadow-sm">
                {heading} {highlight}
              </h2>
            </div>
          )}
        </div>

        <div className="relative w-full">
          {/* Main Content Area */}
          <div
            className={` ${slug === "bachelor-of-physiotherapy-bpt" || slug === "barch-architecture" || slug === "ba-llb-hons" || slug === "bba-llb-hons" || slug === "integrated-bba-mba" || slug === "dual-degree-bsc-mscforensic-science" ? "md:max-w-[70%] lg:max-w-lg xl:max-w-2xl" : "xl:max-w-lg 2xl:max-w-xl"} flex flex-col min-h-[720px] mb-0 md:mb-12 relative z-10`}
          >
            {/* Left Navigation & Content Area */}
            {currbtn?.buttonlink && (
              <div className="mb-5 sm:mb-3 font-poppins w-full xl:w-auto flex justify-start">
                <CommonLeadPopup
                  buttonText={
                    <span className="flex items-center gap-3 underline underline-offset-8">
                      <Download className="w-5 h-5" />
                      <span className="uppercase tracking-widest font-semibold text-sm md:text-lg underline">
                        {currbtn?.buttontext}
                      </span>
                    </span>
                  }
                  buttonClassName="text-white flex items-center justify-center min-w-[200px]"
                  redirectUrl={currbtn?.buttonlink || "#"}
                  form_name="Programme Handbook"
                  shadowGradient={false}
                />
              </div>
            )}
            <div className="flex-grow flex flex-col">
              {/* Year Tabs */}
              <div className="flex w-full font-poppins overflow-x-auto no-scrollbar rounded-[4px] md:rounded-md">
                {programStruct.map((year) => {
                  const yearValue = year.year.toLowerCase().replace(/\s+/g, "");
                  const isYearActive = activeYear === yearValue;

                  return (
                    <button
                      key={year.id}
                      onClick={() => {
                        setActiveYear(yearValue);
                        // Reset semester to first of this year
                        if (year.semester.length > 0) {
                          setActiveSemester(
                            year.semester[0].semestername
                              .toLowerCase()
                              .replace(/\s+/g, ""),
                          );
                        }
                      }}
                      className={`flex-1 px-4 py-4 text-sm lg:text-[16px] 2xl:text-lg font-semibold uppercase tracking-widest transition-all duration-300 whitespace-nowrap
                      ${
                        isYearActive
                          ? "bg-[#061623] text-white"
                          : "text-[#061623] bg-[#EAEAEA] hover:bg-[#DEDEDE]"
                      } cursor-pointer`}
                    >
                      {year.year}
                    </button>
                  );
                })}
              </div>

              {/* Semester Tabs */}
              <div className="flex w-full font-poppins border-white bg-transparent overflow-x-auto no-scrollbar">
                {programStruct
                  .find(
                    (y) =>
                      y.year.toLowerCase().replace(/\s+/g, "") === activeYear,
                  )
                  ?.semester.map((sem) => {
                    const semValue = (sem.semestername || "")
                      .toLowerCase()
                      .replace(/\s+/g, "");
                    const isSemActive = activeSemester === semValue;

                    return (
                      <button
                        key={sem.id}
                        onClick={() => setActiveSemester(semValue)}
                        className={`flex-1 px-6 py-4 text-xl font-normal text-shadow-[0.5px_0.5px_1px_black] transition-all cursor-pointer duration-300 relative whitespace-nowrap
                      ${isSemActive ? "text-white" : "text-white hover:text-white"}
                    `}
                      >
                        {sem.semestername}
                        <div
                          className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-300
                        ${isSemActive ? "bg-[#061623]" : "bg-white"}
                      `}
                        />
                      </button>
                    );
                  })}
              </div>

              {/* Subjects List */}
              <div className="flex-grow py-6 h-[auto] bg-transparent no-scrollbar">
                {programStruct.map((year) => {
                  const yearValue = year.year.toLowerCase().replace(/\s+/g, "");
                  if (activeYear !== yearValue) return null;

                  return (
                    <div
                      key={year.id}
                      className="animate-in fade-in duration-500"
                    >
                      {year.semester.map((sem) => {
                        const semValue = (sem.semestername || "")
                          .toLowerCase()
                          .replace(/\s+/g, "");
                        if (activeSemester !== semValue) return null;

                        return (
                          <div key={sem.id} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-1 gap-1">
                              {sem.subjects
                                .filter(
                                  (sub) =>
                                    sub.subjectname?.trim() ||
                                    sub.course_name?.[0]?.sub_name?.trim(),
                                )
                                .map((sub) => (
                                  <div key={sub.id} className="group">
                                    {sub.course_name &&
                                    sub.course_name.length > 0 &&
                                    sub.course_name[0]?.sub_name ? (
                                      <Accordion
                                        type="single"
                                        collapsible
                                        className="w-full"
                                      >
                                        <AccordionItem
                                          value="content"
                                          className="border-none"
                                        >
                                          <AccordionTrigger className="accordianSVG py-2 hover:no-underline group">
                                            <div className="flex items-center gap-4 text-left">
                                              <CircleArrowRight
                                                size={22}
                                                className="text-white flex-shrink-0 group-hover:scale-110 transition-transform"
                                              />

                                              <span className="text-lg font-medium text-white transition-colors">
                                                {sub.subjectname}
                                              </span>
                                            </div>
                                          </AccordionTrigger>
                                          <AccordionContent className="pl-10 pt-2 text-white/70 text-shadow-xs leading-relaxed italic border-l-2 border-[#051730]/10 ml-3">
                                            <div
                                              dangerouslySetInnerHTML={{
                                                __html:
                                                  sub.course_name[0].sub_name,
                                              }}
                                            />
                                          </AccordionContent>
                                        </AccordionItem>
                                      </Accordion>
                                    ) : (
                                      <div className="flex items-start font-poppins gap-4 py-2">
                                        <CircleArrowRight
                                          size={22}
                                          className="text-white flex-shrink-0"
                                        />
                                        <span className="text-md md:text-[18px] font-normal text-white">
                                          {sub.subjectname}
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons Container */}
              <div className="py-8 font-poppins bg-transparent min-h-[100px] flex flex-row items-center md:justify-start justify-center gap-4 md:gap-4 overflow-x-auto no-scrollbar w-full">
                {programStruct
                  .find(
                    (y) =>
                      y.year.toLowerCase().replace(/\s+/g, "") === activeYear,
                  )
                  ?.semester.find(
                    (s) =>
                      (s.semestername || "")
                        .toLowerCase()
                        .replace(/\s+/g, "") === activeSemester,
                  )
                  ?.pdfbtns?.map((btn) => {
                    const text = btn?.buttontext?.toLowerCase() || "";
                    const isDark =
                      text.includes("minor") || text.includes("handbook");

                    return (
                      <CommonLeadPopup
                        key={btn?.id}
                        buttonText={
                          <div className="flex items-center gap-2 md:gap-3">
                            <Download className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="font-semibold tracking-tight text-[14px] md:text-lg whitespace-nowrap">
                              {btn?.buttontext}
                            </span>
                          </div>
                        }
                        buttonClassName={`px-3 h-12 md:h-14 md:px-6 rounded-[2px] lg:rounded-[4px] transition-all duration-300 flex items-center justify-center w-auto
                        ${
                          isDark
                            ? "bg-[#000000] text-white hover:bg-[#0a264a]"
                            : "bg-white text-black hover:bg-gray-100"
                        }`}
                        redirectUrl={btn?.buttonlink || "#"}
                        form_name={btn?.buttontext || "Action"}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeStructure;
