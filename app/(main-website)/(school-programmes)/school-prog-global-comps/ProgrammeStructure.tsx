"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import { ButtonType } from "@/lib/types/common";
import { Year } from "@/lib/types/school-programme";
import CommonLeadPopup from "../../components/CommonLeadPopup";
import { BookOpen, FileText, Download } from "lucide-react";
import Image from "next/image";

type Props = {
  programStruct: Year[];
  currbtn: ButtonType;
  currFormId: string;
  currFormContainerId: string;
  isYear: boolean;
  heading?: string;
  highlight?: string;
};

const ProgrammeStructure = ({
  programStruct,
  currbtn,
  currFormId,
  currFormContainerId,
  isYear,
  heading,
  highlight,
}: Props) => {
  const [activeYear, setActiveYear] = useState(
    programStruct[0]?.year.toLowerCase().replace(" ", "") || ""
  );

  const [activeSemester, setActiveSemester] = useState(
    programStruct[0]?.semester[0]?.semestername?.toLowerCase()?.replace(" ", "") || ""
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

  // Sync semester when year changes
  useEffect(() => {
    const currentYearData = programStruct.find(
      (y) => y.year.toLowerCase().replace(" ", "") === activeYear
    );
    if (currentYearData && currentYearData.semester.length > 0) {
      setActiveSemester(
        currentYearData.semester[0].semestername.toLowerCase().replace(" ", "")
      );
    }
  }, [activeYear, programStruct]);

  const currentYearDataForNav = programStruct.find(
    (y) => y.year.toLowerCase().replace(" ", "") === activeYear
  );

  const enable_disable_handbook = settings?.programme_handbook_enable_disable;
  const enable_disable_open_elective = settings?.open_elective_enable_disable;
  const enable_disable_minor = settings?.minor_enable_disable;

  return (
    <div className="w-full pb-16">
      {/* Section Header: Full Width & Centered */}
      <div className="flex flex-col items-center text-center px-4 md:px-0 gap-4 mb-12">
        {(heading || highlight) && (
          <div className="max-w-4xl px-4 md:px-0">
            <h2 className="text-[28px] md:text-[45px] font-bold text-gray-900 leading-tight uppercase tracking-tight">
              {heading} {highlight}
            </h2>
          </div>
        )}
        
        {currbtn?.buttonlink && (
          <div className="flex-shrink-0 w-full md:w-auto px-4 md:px-0 mt-2">
            <CommonLeadPopup
              buttonText={
                <span className="flex items-center justify-center gap-2">
                  <FileText className="w-5 h-5" />
                  {currbtn?.buttontext}
                </span>
              }
              buttonClassName="w-full md:w-auto px-6 py-2 md:px-8 md:py-3 text-base font-semibold text-[#0a41a1] bg-transparent hover:text-[#0a41a1] hover:bg-blue-50 rounded-sm transition-all duration-300 shadow-md flex items-center justify-center border-2 border-[#0a41a1]"
              redirectUrl={currbtn?.buttonlink || "#"}
              form_name="Programme Handbook"
            />
          </div>
        )}
      </div>

      <div className="bg-white rounded-sm overflow-hidden border-y md:border border-gray-200 shadow-xl shadow-gray-200/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[620px]">
          {/* Left Side: Visual Illustration */}
          <div className="hidden lg:block lg:col-span-4 relative group overflow-hidden border-r border-gray-100">
            <Image
              src="/curriculum-layout-bg.png"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              alt="Institutional Curriculum"
              priority
            />
            <div className="absolute inset-0 bg-gray-900/10" />
            <div className="absolute bottom-10 left-10 right-10 text-white z-10">
              <h3 className="text-2xl font-bold mb-2 tracking-tight">Academic Excellence</h3>
              <p className="text-sm opacity-80 leading-relaxed font-light">
                Explore our world-class curriculum designed to foster innovation, 
                critical thinking, and professional mastery in your chosen field.
              </p>
            </div>
          </div>

          {/* Right Side: Content Area */}
          <div className="lg:col-span-8 bg-white flex flex-col overflow-hidden">
            <Tabs value={activeYear} onValueChange={setActiveYear} className="w-full flex-grow flex flex-col">
              {/* Unified Navigation Bar */}
              <div className="z-10 flex flex-wrap items-center justify-start gap-8 py-3 px-4 bg-white border-b border-gray-100 shadow-sm transition-all duration-300">
                {/* Year Navigation */}
                <div className="flex flex-col items-start gap-2 w-full md:w-auto">
                  <TabsList className="bg-gray-100/50 flex-wrap justify-start p-1 h-auto rounded-sm border border-gray-200/60 w-full md:w-auto">
                    {programStruct.map((year) => {
                      const value = year.year.toLowerCase().replace(" ", "");
                      return (
                        <TabsTrigger
                          key={year.id}
                          value={value}
                          className="px-4 py-2 text-xs md:text-sm font-semibold transition-all duration-300 rounded-sm
                            data-[state=active]:bg-white data-[state=active]:text-[#0a41a1] data-[state=active]:shadow-sm
                            hover:text-[#0a41a1] text-gray-400 cursor-pointer uppercase tracking-wider"
                        >
                          {year.year}
                        </TabsTrigger>
                      );
                    })}
                  </TabsList>
                </div>

                {/* Divider */}
                {!isYear && (currentYearDataForNav?.semester.length ?? 0) > 0 && (
                  <div className="hidden md:block h-8 w-[1px] bg-gray-300 mx-2 opacity-50" />
                )}

                {/* Semester Navigation */}
                {!isYear && (currentYearDataForNav?.semester.length ?? 0) > 0 && (
                  
                    <Tabs 
                      value={activeSemester} 
                      onValueChange={setActiveSemester}
                      className="w-full md:w-auto"
                    >
                      <TabsList className="bg-blue-50/50 flex-wrap justify-start p-1 h-auto rounded-sm border border-blue-100/50 w-full md:w-auto gap-2">
                        {currentYearDataForNav?.semester.map((sem) => {
                          const semValue = sem?.semestername?.toLowerCase()?.replace(" ", "");
                          return (
                            <TabsTrigger
                              key={sem.id}
                              value={semValue}
                              className="px-5 py-2 text-xs md:text-sm font-semibold transition-all duration-300 rounded-sm
                                data-[state=active]:bg-[#0a41a1] data-[state=active]:text-white data-[state=active]:shadow-md
                                hover:text-[#0a41a1] text-blue-400 cursor-pointer uppercase tracking-wider"
                            >
                              {sem.semestername}
                            </TabsTrigger>
                          );
                        })}
                      </TabsList>
                    </Tabs>
              
                )}
              </div>

              {/* Dynamic Content Area */}
              <div className="flex-grow overflow-y-auto max-h-[650px] scrollbar-thin scrollbar-thumb-gray-200">
                {programStruct.map((year) => {
                  const yearValue = year.year.toLowerCase().replace(" ", "");
                  return (
                    <TabsContent
                      key={year.id}
                      value={yearValue}
                      className="mt-0 focus-visible:outline-none"
                    >
                      {year.semester.length > 0 ? (
                        <div className="space-y-4 pr-4 mt-4">
                          {year?.semester?.map((sem) => {
                            const semValue = sem.semestername?.toLowerCase()?.replace(" ", "");
                            return (
                              <div key={sem.id} className={activeSemester === semValue ? "block" : "hidden"}>
                                <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 px-4 md:px-0">
                                  {sem.subjects.map((sub) => (
                                    <div
                                      key={sub.id}
                                      className="group flex flex-col bg-white border border-gray-100 rounded-md p-3 transition-all duration-500 hover:shadow-md hover:border-[#0a41a1]/10 hover:-translate-y-1"
                                    >
                                      <div className="flex flex-row gap-4 h-full items-start">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-[#0a41a1] group-hover:bg-[#0a41a1] group-hover:text-white transition-all duration-500 border border-blue-100/50">
                                          <BookOpen className="w-5 h-5" />
                                        </div>
                                        <div className="flex-grow min-w-0">
                                          {sub.course_name &&
                                          sub.course_name.length > 0 &&
                                          sub.course_name[0]?.sub_name ? (
                                            <Accordion
                                              type="single"
                                              collapsible
                                              className="w-full"
                                            >
                                              {sub.course_name.map((course, index) => (
                                                <AccordionItem
                                                  key={course.id || index}
                                                  value={`item-${sub.id}-${index}`}
                                                  className="border-none"
                                                >
                                                  <AccordionTrigger className="py-0 text-left hover:no-underline flex justify-between gap-2 group-data-[state=open]:pb-3">
                                                    <h5 className="text-[16px] font-semibold text-gray-800 group-hover:text-[#0a41a1] transition-colors leading-snug">
                                                      {sub.subjectname}
                                                    </h5>
                                                  </AccordionTrigger>
                                                  <AccordionContent className="mt-4 pt-4 border-t border-gray-100 whitespace-pre-line text-xs md:text-sm text-gray-600 leading-relaxed bg-slate-50 p-4 rounded-lg italic font-medium">
                                                    <div
                                                      dangerouslySetInnerHTML={{
                                                        __html: course.sub_name,
                                                      }}
                                                    />
                                                  </AccordionContent>
                                                </AccordionItem>
                                              ))}
                                            </Accordion>
                                          ) : (
                                            <h5 className="text-[16px] font-semibold text-gray-800 group-hover:text-[#0a41a1] transition-colors leading-snug">
                                              {sub.subjectname}
                                            </h5>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>

                                {/* Semester Action Buttons */}
                                <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-8 border-t border-gray-100">
                                  {sem.pdfbtns?.map((btn) => {
                                    const text = btn?.buttontext?.toLowerCase() || "";
                                    const openElectiveKeywords = ["open elective", "open electives", "value added", "value added courses"];
                                    const minorKeywords = ["minor", "minors"];
                                    
                                    const isHandbook = text.includes("handbook");
                                    const hasOpenElectiveKeyword = openElectiveKeywords.some((word) => text.includes(word));
                                    const hasMinorKeyword = minorKeywords.some((word) => text.includes(word));

                                    const shouldShowPopup = (isHandbook && enable_disable_handbook) || (hasOpenElectiveKeyword && enable_disable_open_elective) || (hasMinorKeyword && enable_disable_minor);

                                    const btnClass = `flex items-center gap-2 text-md font-semibold uppercase tracking-wide px-6 py-3 
                                      rounded-sm shadow-sm transition-all duration-300 border-2
                                      ${isHandbook 
                                        ? "bg-[#0a41a1] text-white border-[#0a41a1] hover:bg-white hover:text-[#0a41a1]" 
                                        : "bg-transparent text-[#0a41a1] border-[#0a41a1] hover:bg-blue-50 hover:text-[#0a41a1]"} `;

                                    const btnContent = (
                                      <span className="flex items-center gap-2">
                                        {isHandbook ? <FileText className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                                        {btn?.buttontext}
                                      </span>
                                    );

                                    if (shouldShowPopup) {
                                      return (
                                        <CommonLeadPopup
                                          key={btn?.id}
                                          buttonText={btnContent}
                                          buttonClassName={btnClass}
                                          redirectUrl={btn?.buttonlink || "#"}
                                          form_name={btn?.buttontext || "Action"}
                                        />
                                      );
                                    }

                                    return (
                                      <a
                                        key={btn?.id}
                                        href={btn?.buttonlink || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={btnClass}
                                      >
                                        {btnContent}
                                      </a>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                          <BookOpen className="w-12 h-12 mb-4 opacity-20" />
                          <p className="text-lg font-bold tracking-tight">No semesters available</p>
                        </div>
                      )}
                    </TabsContent>
                  );
                })}
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeStructure;
