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
    <div className="w-full">
      <Tabs value={activeYear} onValueChange={setActiveYear} className="w-full">
        {/* Header Section: Centered Heading & Handbook Button */}
        <div className="flex flex-col items-center gap-4 mb-8">
          {(heading || highlight) && (
            <div className="text-center max-w-4xl">
              <h2 className="text-[32px] md:text-[42px] font-bold text-black leading-tight">
                {heading} {highlight}
              </h2>
            </div>
          )}
          
          {currbtn?.buttonlink && (
            <div className="flex-shrink-0">
              <CommonLeadPopup
                buttonText={
                  <span className="flex items-center justify-center gap-2">
                    <FileText className="w-5 h-5" />
                    {currbtn?.buttontext}
                  </span>
                }
                buttonClassName="px-8 py-3 text-base font-semibold text-[#0a41a1] bg-[#0a41a1]/3 hover:bg-transparent rounded-md transition-all duration-300 active:scale-[0.98] flex items-center justify-center border-2 border-[#0a41a1]"
                redirectUrl={currbtn?.buttonlink || "#"}
                form_name="Programme Handbook"
              />
            </div>
          )}
        </div>

        {/* Unified Navigation Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4 mb-4 sticky top-0 z-10 transition-all duration-300 rounded-sm">
          {/* Year Navigation */}
          <div className="flex flex-col items-center gap-2">
            <TabsList className="bg-gray-100/80 p-1 h-auto rounded-sm border border-gray-200/50 shadow-inner">
              {programStruct.map((year) => {
                const value = year.year.toLowerCase().replace(" ", "");
                return (
                  <TabsTrigger
                    key={year.id}
                    value={value}
                    className="px-6 py-2 text-sm md:text-base font-medium transition-all duration-300 rounded-sm
                      data-[state=active]:bg-white data-[state=active]:text-[#0a41a1] data-[state=active]:shadow-md
                      hover:text-[#0a41a1] text-gray-500 cursor-pointer"
                  >
                    {year.year}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {/* Divider */}
          {!isYear && (currentYearDataForNav?.semester.length ?? 0) > 0 && (
            <div className="hidden md:block h-12 w-[1px] bg-gray-200 mx-4 opacity-50" />
          )}

          {/* Semester Navigation (Synced with activeYear) */}
          {!isYear && (currentYearDataForNav?.semester.length ?? 0) > 0 && (
            <div className="flex flex-col items-center gap-2">
              <Tabs 
                value={activeSemester} 
                onValueChange={setActiveSemester}
              >
                <TabsList className="bg-blue-50/50 p-1 h-auto rounded-sm border border-blue-100/50 shadow-inner">
                  {currentYearDataForNav?.semester.map((sem) => {
                      const semValue = sem?.semestername?.toLowerCase()?.replace(" ", "");
                      return (
                        <TabsTrigger
                          key={sem.id}
                          value={semValue}
                          className="px-8 py-2 text-sm md:text-base font-medium transition-all duration-300 rounded-sm
                            data-[state=active]:bg-[#0a41a1] data-[state=active]:text-white data-[state=active]:shadow-lg
                            hover:text-[#0a41a1] text-gray-500 cursor-pointer"
                        >
                          {sem.semestername}
                        </TabsTrigger>
                      );
                    })}
                </TabsList>
              </Tabs>
            </div>
          )}
        </div>

        {/* Dynamic Content Area */}
        <div className="min-h-[400px]">
          {programStruct.map((year) => {
            const yearValue = year.year.toLowerCase().replace(" ", "");
            return (
              <TabsContent
                key={year.id}
                value={yearValue}
                className="mt-0 focus-visible:outline-none"
              >
                {year.semester.length > 0 ? (
                  <Tabs value={activeSemester} onValueChange={setActiveSemester} className="space-y-8">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                      {year?.semester?.map((sem) => {
                        const semValue = sem.semestername?.toLowerCase()?.replace(" ", "");
                        return (
                          <TabsContent key={sem.id} value={semValue} className="mt-0 focus-visible:outline-none outline-none">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {sem.subjects.map((sub) => (
                                <div
                                  key={sub.id}
                                  className="group flex flex-col bg-white border border-gray-200 rounded-sm p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-2"
                                >
                                  <div className="flex flex-row gap-4 h-full">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center text-[#0a41a1] group-hover:bg-[#0a41a1] group-hover:text-white transition-all duration-500 shadow-sm border border-blue-100/50">
                                      <BookOpen className="w-6 h-6" />
                                    </div>
                                    <div className="flex-grow">
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
                                                <h5 className="text-[17px] md:text-[19px] font-semibold text-gray-800 group-hover:text-[#0a41a1] transition-colors leading-tight">
                                                  {sub.subjectname}
                                                </h5>
                                              </AccordionTrigger>
                                              <AccordionContent className="mt-4 pt-5 border-t border-gray-100 whitespace-pre-line text-sm md:text-md text-gray-800 leading-relaxed bg-gray-100 p-5 rounded-md italic">
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
                                        <h5 className="text-md md:text-lg font-semibold text-gray-800 group-hover:text-[#0a41a1] transition-colors leading-tight">
                                          {sub.subjectname}
                                        </h5>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Semester Action Buttons */}
                            <div className="flex flex-wrap items-center justify-center gap-4 mt-6 pt-6">
                              {sem.pdfbtns?.map((btn) => {
                                const text = btn?.buttontext?.toLowerCase() || "";
                                const openElectiveKeywords = ["open elective", "open electives", "value added", "value added courses"];
                                const minorKeywords = ["minor", "minors"];
                                
                                const isHandbook = text.includes("handbook");
                                const hasOpenElectiveKeyword = openElectiveKeywords.some((word) => text.includes(word));
                                const hasMinorKeyword = minorKeywords.some((word) => text.includes(word));

                                const shouldShowPopup = (isHandbook && enable_disable_handbook) || (hasOpenElectiveKeyword && enable_disable_open_elective) || (hasMinorKeyword && enable_disable_minor);

                                const btnClass = `flex items-center gap-2 text-md font-semibold capitalize px-6 py-3 
                                  rounded-sm shadow-sm transition-all duration-300 border
                                  ${isHandbook 
                                    ? "bg-[#0a41a1]/3 text-[#0a41a1] border-2 border-[#0a41a1] hover:bg-transparent hover:-translate-y-1" 
                                    : "bg-[#0a41a1]/3 text-[#0a41a1] border-2 border-[#0a41a1] hover:bg-transparent  hover:-translate-y-1"} `;

                                const btnContent = (
                                  <span className="flex items-center gap-2">
                                    {isHandbook ? <FileText className="w-5 h-5" /> : <Download className="w-5 h-5" />}
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
                          </TabsContent>
                        );
                      })}
                    </div>
                  </Tabs>
                ) : (
                  <div className="flex flex-col items-center justify-center py-24 text-gray-400 bg-gray-50/50 rounded-3xl border-2 border-dashed border-gray-200">
                    <BookOpen className="w-16 h-16 mb-6 opacity-20" />
                    <p className="text-xl font-medium tracking-tight">No semesters available for this selection</p>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </div>
  );
};

export default ProgrammeStructure;
