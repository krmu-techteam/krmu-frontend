"use client";

import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
import { ButtonType } from "@/lib/types/common";
import { Year } from "@/lib/types/school-programme";
import CommonLeadPopup from "../../components/CommonLeadPopup";
import { BookOpen, FileText, Download, ChevronRight } from "lucide-react";
import { IoBookOutline } from "react-icons/io5";
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
    programStruct[0]?.year.toLowerCase().replace(" ", "") || "",
  );

  const [activeSemester, setActiveSemester] = useState(
    programStruct[0]?.semester[0]?.semestername
      ?.toLowerCase()
      ?.replace(" ", "") || "",
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

  const enable_disable_handbook = settings?.programme_handbook_enable_disable;
  const enable_disable_open_elective = settings?.open_elective_enable_disable;
  const enable_disable_minor = settings?.minor_enable_disable;

  return (
    <div className="w-full pb-0 md:pb-16 antialiased">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-10">
        {(heading || highlight) && (
          <div className="max-w-4xl px-4 md:px-0">
            <h2 className="text-[26px] md:text-[38px] font-bold text-gray-900 leading-tight tracking-tight">
              {heading} {highlight}
            </h2>
          </div>
        )}

        {currbtn?.buttonlink && (
          <div className="flex-shrink-0 w-full md:w-auto px-4 md:px-0">
            <CommonLeadPopup
              buttonText={
                <span className="flex items-center justify-center gap-2">
                  <FileText className="w-4 h-4" />
                  {currbtn?.buttontext}
                </span>
              }
              buttonClassName="w-full md:w-auto px-8 py-3 text-md font-semibold tracking-wide text-[#0a41a1] bg-white hover:bg-blue-900/20 hover:text-[#0a41a1] rounded-sm transition-all duration-300 flex items-center justify-center border border-[#0a41a1]/20 cursor-pointer hover:border-[#0a41a1]"
              redirectUrl={currbtn?.buttonlink || "#"}
              form_name="Programme Handbook"
            />
          </div>
        )}
      </div>

      <div className=" backdrop-blur-xl rounded-sm overflow-hidden border border-white/20">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] gap-4">
          {/* Left Side: Illustration - More Compact */}
          <div className="hidden lg:block lg:col-span-3 relative group overflow-hidden bg-transparent border-r border-white/10">
            <Image
              src="/curriculum-s.jpeg"
              fill
              className="object-cover object-center rounded-sm transition-transform duration-1000 group-hover:scale-105"
              alt="Curriculum"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a41a1]/60 via-[#0a41a1]/10 to-transparent transition-opacity" />
          </div>

          {/* Right Side: Navigation + Content - Minimal & Compact */}
          <div className="lg:col-span-9 flex flex-col bg-transparent overflow-hidden">
            {/* Hierarchy Navigation Tree - Compact Version */}
            <div className="w-full bg-white/10 border-b border-white/10 px-4">
              <div className="flex flex-wrap lg:flex-nowrap justify-between items-start gap-y-8 gap-x-2 md:gap-4 w-full">
                {programStruct.map((year) => {
                  const yearValue = year.year.toLowerCase().replace(" ", "");
                  const isYearActive = activeYear === yearValue;

                  return (
                    <div
                      key={year.id}
                      className="flex-1 flex flex-col items-center relative"
                    >
                      {/* Year Node - HEADING ONLY (Non-clickable) */}
                      <div
                        className={`w-full text-gray-400 px-2 pt-2 pb-0 rounded-sm transition-all duration-500 font-semibold text-[13px] md:text-[15px] capitalize tracking-wide text-center cursor-default antialiased`}
                      >
                        {year.year}
                      </div>

                      {/* Compact Branching Lines */}
                      {!isYear && year.semester.length > 0 && (
                        <div className="flex flex-col items-center w-full">
                          <div
                            className={`w-[1px] h-3 ${isYearActive ? "bg-[#0a41a1]" : "bg-gray-300"}`}
                          />

                          <div className="relative flex items-center w-full max-w-[120px]">
                            <div
                              className={`w-full h-[1px] ${isYearActive ? "bg-[#0a41a1]" : "bg-gray-300"} rounded-full`}
                            />
                            <div
                              className={`absolute left-0 top-0 w-[1px] h-3 ${isYearActive ? "bg-[#0a41a1]" : "bg-gray-300"} rounded-full`}
                            />
                            <div
                              className={`absolute right-0 top-0 w-[1px] h-3 ${isYearActive ? "bg-[#0a41a1]" : "bg-gray-300"} rounded-full`}
                            />

                            {/* Terminal Dots */}
                            <div
                              className={`absolute left-0 top-3 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${isYearActive ? "bg-[#0a41a1]" : "bg-gray-300"}`}
                            />
                            <div
                              className={`absolute right-0 top-3 translate-x-1/2 w-1.5 h-1.5 rounded-full ${isYearActive ? "bg-[#0a41a1]" : "bg-gray-300"}`}
                            />
                          </div>

                          {/* Minimal Semester Nodes - ONLY CLICKABLE PART */}
                          <div className="flex justify-between w-full mt-5 gap-2">
                            {year.semester.map((sem) => {
                              const semValue = sem.semestername
                                .toLowerCase()
                                .replace(" ", "");
                              const isSemActive =
                                activeSemester === semValue && isYearActive;

                              return (
                                <button
                                  key={sem.id}
                                  onClick={() => {
                                    setActiveYear(yearValue);
                                    setActiveSemester(semValue);
                                  }}
                                  className={`flex flex-row gap-1 items-center justify-center flex-1 transition-all duration-300 py-[6px] rounded-sm border whitespace-nowrap
                                    ${
                                      isSemActive
                                        ? "bg-gradient-to-r from-[#0a41a1] to-[#0e4eb8] border-[#0a41a1] text-white shadow-md z-20"
                                        : "bg-transparent border-transparent text-gray-700 hover:text-gray-600 hover:bg-gray-100"
                                    } cursor-pointer`}
                                >
                                  <span className="text-[13px] sm:text-[15px] font-medium capitalize tracking-tight sm:tracking-wide antialiased whitespace-nowrap">
                                    {sem.semestername}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Subjects List - Minimalistic Layout */}
            <div className="flex-grow p-4 overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-100 bg-white/5">
              {programStruct.map((year) => {
                const yearValue = year.year.toLowerCase().replace(" ", "");
                return activeYear === yearValue ? (
                  <div
                    key={year.id}
                    className="animate-in fade-in duration-500"
                  >
                    {year.semester.length > 0 ? (
                      <div className="flex flex-col gap-4">
                        {year.semester.map((sem) => {
                          const semValue = sem.semestername
                            ?.toLowerCase()
                            ?.replace(" ", "");
                          return activeSemester === semValue ? (
                            <div
                              key={sem.id}
                              className="animate-in fade-in duration-300"
                            >
                              {/* Mobile-only Semester Heading */}
                              <div className="md:hidden mb-4">
                                <h4 className="text-[20px] font-bold text-[#0a41a1] capitalize flex items-center gap-2">
                                  <span className="w-1.5 h-6 bg-[#0a41a1] rounded-full"></span>
                                  {sem.semestername}
                                </h4>
                              </div>

                              {/* Subject Grid - Compact Cards */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {sem.subjects
                                  .filter((sub) => {
                                    const hasTitle = sub.subjectname?.trim();
                                    const hasDetails =
                                      sub.course_name?.[0]?.sub_name?.trim();
                                    return hasTitle || hasDetails;
                                  })
                                  .map((sub) => (
                                    <div
                                      key={sub.id}
                                      className="flex items-start bg-white/40 backdrop-blur-sm rounded-sm p-3 md:px-4 md:py-3 border border-white/20 transition-all duration-300 antialiased shadow-sm"
                                    >
                                      <div className="flex items-center w-full gap-3">
                                        <div className="flex-grow min-w-0">
                                          {!(
                                            sub.course_name &&
                                            sub.course_name.length > 0 &&
                                            sub.course_name[0]?.sub_name
                                          ) ? (
                                            <>
                                              <div className="flex items-center w-full gap-3">
                                                <div className="w-9 h-9 rounded-full bg-[#0a41a1] flex items-center justify-center flex-shrink-0 border border-[#0a41a1]/10 mt-0.5">
                                                  <IoBookOutline className="w-5 h-5 text-white" />
                                                </div>
                                                <h5 className="text-[15px] font-semibold text-gray-800 leading-tight">
                                                  {sub.subjectname}
                                                </h5>
                                              </div>
                                            </>
                                          ) : (
                                            sub.course_name &&
                                            sub.course_name.length > 0 &&
                                            sub.course_name[0]?.sub_name && (
                                              <Accordion
                                                type="single"
                                                collapsible
                                                className="w-full"
                                              >
                                                <AccordionItem
                                                  value="content"
                                                  className="border-none"
                                                >
                                                  <AccordionTrigger className="py-1 cursor-pointer items-center text-[10px] font-semibold text-gray-400 uppercase tracking-wider hover:text-[#0a41a1] hover:no-underline">
                                                    <div className="flex items-center w-full gap-3">
                                                      <div className="w-9 h-9 rounded-full bg-[#0a41a1] flex items-center justify-center flex-shrink-0 border border-[#0a41a1]/10 mt-0.5">
                                                        <IoBookOutline className="w-5 h-5 text-white" />
                                                      </div>
                                                      <h5 className="text-[15px] font-semibold text-gray-800 leading-tight">
                                                        {sub.subjectname}
                                                      </h5>
                                                    </div>
                                                  </AccordionTrigger>
                                                  <AccordionContent className="mt-2 pt-2 border-t border-gray-100 text-[12px] text-gray-500 leading-relaxed italic">
                                                    <div
                                                      dangerouslySetInnerHTML={{
                                                        __html:
                                                          sub.course_name[0]
                                                            .sub_name,
                                                      }}
                                                    />
                                                  </AccordionContent>
                                                </AccordionItem>
                                              </Accordion>
                                            )
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>

                              {/* Compact Action Banner */}
                              <div className="mt-8 flex flex-col gap-4">
                                {sem.pdfbtns?.map((btn) => {
                                  const text =
                                    btn?.buttontext?.toLowerCase() || "";
                                  const isHandbook = text.includes("handbook");
                                  const isOpenElective =
                                    text.includes("elective") ||
                                    text.includes("added");

                                  if (isOpenElective) {
                                    return (
                                      <CommonLeadPopup
                                        key={btn?.id}
                                        buttonText={
                                          <div className="flex items-center gap-6 px-6 py-2 bg-[#0a41a1] rounded-sm text-white group shadow-lg transition-all duration-300 hover:scale-[1.005]">
                                            <div className="flex items-center gap-4">
                                              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                                                <Download className="w-5 h-5" />
                                              </div>
                                              <div className="text-left">
                                                <h4 className="text-[14px] md:text-[16px] font-semibold capitalize tracking-wide leading-none whitespace-nowrap">
                                                  {btn?.buttontext}
                                                </h4>
                                              </div>
                                            </div>
                                          </div>
                                        }
                                        buttonClassName="w-fit block"
                                        redirectUrl={btn?.buttonlink || "#"}
                                        form_name={btn?.buttontext || "Action"}
                                      />
                                    );
                                  }

                                  return (
                                    <div
                                      key={btn?.id}
                                      className="flex justify-start mt-2"
                                    >
                                      <CommonLeadPopup
                                        buttonText={
                                          <span className="flex items-center gap-2 whitespace-nowrap">
                                            {isHandbook ? (
                                              <FileText className="w-4 h-4" />
                                            ) : (
                                              <Download className="w-4 h-4" />
                                            )}
                                            {btn?.buttontext}
                                          </span>
                                        }
                                        buttonClassName="w-fit px-8 py-3 bg-white border-2 border-[#0a41a1] text-[#0a41a1] font-bold uppercase tracking-widest text-[13px] rounded-xl hover:bg-[#0a41a1] hover:text-white transition-all duration-300"
                                        redirectUrl={btn?.buttonlink || "#"}
                                        form_name={btn?.buttontext || "Action"}
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ) : null;
                        })}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-20 text-gray-300">
                        <BookOpen className="w-10 h-10 mb-2 opacity-10" />
                        <p className="text-[11px] font-bold uppercase tracking-widest opacity-40">
                          No data available
                        </p>
                      </div>
                    )}
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeStructure;

// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { getDownloadProspectusSetting } from "@/lib/api/global-setting";
// import { ButtonType } from "@/lib/types/common";
// import { Year } from "@/lib/types/school-programme";
// import CommonLeadPopup from "../../components/CommonLeadPopup";
// import { BookOpen, FileText, Download } from "lucide-react";
// import Image from "next/image";

// type Props = {
//   programStruct: Year[];
//   currbtn: ButtonType;
//   currFormId: string;
//   currFormContainerId: string;
//   isYear: boolean;
//   heading?: string;
//   highlight?: string;
// };

// const ProgrammeStructure = ({
//   programStruct,
//   currbtn,
//   currFormId,
//   currFormContainerId,
//   isYear,
//   heading,
//   highlight,
// }: Props) => {
//   const [activeYear, setActiveYear] = useState(
//     programStruct[0]?.year.toLowerCase().replace(" ", "") || ""
//   );

//   const [activeSemester, setActiveSemester] = useState(
//     programStruct[0]?.semester[0]?.semestername?.toLowerCase()?.replace(" ", "") || ""
//   );

//   const [settings, setSettings] = useState<any>(null);

//   // Fetch settings on mount
//   useEffect(() => {
//     const fetchSettings = async () => {
//       const data = await getDownloadProspectusSetting();
//       setSettings(data);
//     };
//     fetchSettings();
//   }, []);

//   // Sync semester when year changes
//   useEffect(() => {
//     const currentYearData = programStruct.find(
//       (y) => y.year.toLowerCase().replace(" ", "") === activeYear
//     );
//     if (currentYearData && currentYearData.semester.length > 0) {
//       setActiveSemester(
//         currentYearData.semester[0].semestername.toLowerCase().replace(" ", "")
//       );
//     }
//   }, [activeYear, programStruct]);

//   const currentYearDataForNav = programStruct.find(
//     (y) => y.year.toLowerCase().replace(" ", "") === activeYear
//   );

//   const enable_disable_handbook = settings?.programme_handbook_enable_disable;
//   const enable_disable_open_elective = settings?.open_elective_enable_disable;
//   const enable_disable_minor = settings?.minor_enable_disable;

//   return (
//     <div className="w-full pb-0 md:pb-16">
//       {/* Section Header: Full Width & Centered */}
//       <div className="flex flex-col items-center text-center gap-4 mb-12">
//         {(heading || highlight) && (
//           <div className="max-w-4xl">
//             <h2 className="text-[28px] md:text-[45px] font-bold text-gray-900 leading-tight tracking-tight">
//               {heading} {highlight}
//             </h2>
//           </div>
//         )}

//         {currbtn?.buttonlink && (
//           <div className="flex-shrink-0 w-full md:w-auto px-4 md:px-0 mt-2">
//             <CommonLeadPopup
//               buttonText={
//                 <span className="flex items-center justify-center gap-2">
//                   <FileText className="w-5 h-5" />
//                   {currbtn?.buttontext}
//                 </span>
//               }
//               buttonClassName="w-full md:w-auto px-6 py-2 md:px-8 md:py-3 text-base font-semibold text-[#0a41a1] bg-transparent hover:text-[#0a41a1] hover:bg-blue-50 rounded-sm transition-all duration-300 shadow-md flex items-center justify-center border-2 border-[#0a41a1]"
//               redirectUrl={currbtn?.buttonlink || "#"}
//               form_name="Programme Handbook"
//             />
//           </div>
//         )}
//       </div>

//       <div className="bg-white rounded-xl overflow-hidden shadow-xl shadow-gray-200/20">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 min-h-[620px]">
//           {/* Left Side: Visual Illustration */}
//           <div className="hidden lg:block lg:col-span-4 relative group overflow-hidden border-r border-gray-100 bg-[#fdfdfd]">
//             <Image
//               src="/curriculum-s.jpeg"
//               fill
//               className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
//               alt="Institutional Curriculum"
//               priority
//             />
//             <div className="absolute inset-0 bg-gray-900/10" />
//           </div>

//           {/* Right Side: Content Area */}
//           <div className="lg:col-span-8 bg-white flex flex-col overflow-hidden">
//             <Tabs value={activeYear} onValueChange={setActiveYear} className="w-full flex-grow flex flex-col">
//               {/* Unified Navigation Bar */}
//               <div className="z-10 flex flex-wrap items-center justify-start gap-8 py-3 px-4 bg-white border-b border-gray-100  transition-all duration-300">
//                 {/* Year Navigation */}
//                 <div className="flex flex-col items-start gap-2 w-full md:w-auto">
//                   <TabsList className="bg-gray-100/50 flex-wrap justify-start p-1 h-auto rounded-sm border border-gray-200/60 w-full md:w-auto">
//                     {programStruct.map((year) => {
//                       const value = year.year.toLowerCase().replace(" ", "");
//                       return (
//                         <TabsTrigger
//                           key={year.id}
//                           value={value}
//                           className="px-4 py-2 text-xs md:text-sm font-semibold transition-all duration-300 rounded-sm
//                             data-[state=active]:bg-white data-[state=active]:text-[#0a41a1] data-[state=active]:shadow-sm
//                             hover:text-[#0a41a1] text-gray-400 cursor-pointer uppercase tracking-wider"
//                         >
//                           {year.year}
//                         </TabsTrigger>
//                       );
//                     })}
//                   </TabsList>
//                 </div>

//                 {/* Divider */}
//                 {!isYear && (currentYearDataForNav?.semester.length ?? 0) > 0 && (
//                   <div className="hidden md:block h-8 w-[1px] bg-gray-300 mx-2 opacity-50" />
//                 )}

//                 {/* Semester Navigation */}
//                 {!isYear && (currentYearDataForNav?.semester.length ?? 0) > 0 && (

//                     <Tabs
//                       value={activeSemester}
//                       onValueChange={setActiveSemester}
//                       className="w-full md:w-auto"
//                     >
//                       <TabsList className="bg-blue-50/50 flex-wrap justify-start p-1 h-auto rounded-sm border border-blue-100/50 w-full md:w-auto gap-2">
//                         {currentYearDataForNav?.semester.map((sem) => {
//                           const semValue = sem?.semestername?.toLowerCase()?.replace(" ", "");
//                           return (
//                             <TabsTrigger
//                               key={sem.id}
//                               value={semValue}
//                               className="px-5 py-2 text-xs md:text-sm font-semibold transition-all duration-300 rounded-sm
//                                 data-[state=active]:bg-[#0a41a1] data-[state=active]:text-white data-[state=active]:shadow-md
//                                 hover:text-[#0a41a1] text-blue-400 cursor-pointer uppercase tracking-wider"
//                             >
//                               {sem.semestername}
//                             </TabsTrigger>
//                           );
//                         })}
//                       </TabsList>
//                     </Tabs>

//                 )}
//               </div>

//               {/* Dynamic Content Area */}
//               <div className="flex-grow overflow-y-auto max-h-[650px] scrollbar-thin scrollbar-thumb-gray-200">
//                 {programStruct.map((year) => {
//                   const yearValue = year.year.toLowerCase().replace(" ", "");
//                   return (
//                     <TabsContent
//                       key={year.id}
//                       value={yearValue}
//                       className="mt-0 focus-visible:outline-none"
//                     >
//                       {year.semester.length > 0 ? (
//                         <div className="space-y-4 pr-0 md:pr-4 mt-4">
//                           {year?.semester?.map((sem) => {
//                             const semValue = sem.semestername?.toLowerCase()?.replace(" ", "");
//                             return (
//                               <div key={sem.id} className={activeSemester === semValue ? "block" : "hidden"}>
//                                 <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 px-4 md:px-0">
//                                   {sem.subjects.map((sub) => (
//                                     <div
//                                       key={sub.id}
//                                       className="group flex flex-col bg-white rounded-md p-3 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
//                                     >
//                                       <div className="flex flex-row gap-4 h-full items-start">
//                                         <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0a41a1] flex items-center justify-center text-white transition-all duration-300 border border-[#0a41a1]/10">
//                                           <BookOpen className="w-5 h-5" />
//                                         </div>
//                                         <div className="flex-grow min-w-0">
//                                           {sub.course_name &&
//                                           sub.course_name.length > 0 &&
//                                           sub.course_name[0]?.sub_name ? (
//                                             <Accordion
//                                               type="single"
//                                               collapsible
//                                               className="w-full"
//                                             >
//                                               {sub.course_name.map((course, index) => (
//                                                 <AccordionItem
//                                                   key={course.id || index}
//                                                   value={`item-${sub.id}-${index}`}
//                                                   className="border-none"
//                                                 >
//                                                   <AccordionTrigger className="py-0 text-left hover:no-underline flex justify-between gap-2 group-data-[state=open]:pb-3">
//                                                     <h5 className="text-[16px] font-semibold text-[#0a41a1] transition-colors leading-snug">
//                                                       {sub.subjectname}
//                                                     </h5>
//                                                   </AccordionTrigger>
//                                                   <AccordionContent className="mt-4 pt-4 border-t border-gray-100 whitespace-pre-line text-xs md:text-sm text-gray-600 leading-relaxed bg-slate-50 p-4 rounded-lg italic font-medium">
//                                                     <div
//                                                       dangerouslySetInnerHTML={{
//                                                         __html: course.sub_name,
//                                                       }}
//                                                     />
//                                                   </AccordionContent>
//                                                 </AccordionItem>
//                                               ))}
//                                             </Accordion>
//                                           ) : (
//                                             <h5 className="text-[16px] font-semibold text-[#0a41a1] transition-colors leading-snug">
//                                               {sub.subjectname}
//                                             </h5>
//                                           )}
//                                         </div>
//                                       </div>
//                                     </div>
//                                   ))}
//                                 </div>

//                                 {/* Semester Action Buttons */}
//                                 <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-4 md:pt-8 border-t border-gray-100">
//                                   {sem.pdfbtns?.map((btn) => {
//                                     const text = btn?.buttontext?.toLowerCase() || "";
//                                     const openElectiveKeywords = ["open elective", "open electives", "value added", "value added courses"];
//                                     const minorKeywords = ["minor", "minors"];

//                                     const isHandbook = text.includes("handbook");
//                                     const hasOpenElectiveKeyword = openElectiveKeywords.some((word) => text.includes(word));
//                                     const hasMinorKeyword = minorKeywords.some((word) => text.includes(word));

//                                     const shouldShowPopup = (isHandbook && enable_disable_handbook) || (hasOpenElectiveKeyword && enable_disable_open_elective) || (hasMinorKeyword && enable_disable_minor);

//                                     const btnClass = `flex items-center gap-2 text-sm md:text-md font-semibold uppercase tracking-wide px-3 py-2 md:px-6 md:py-3
//                                       rounded-sm shadow-sm transition-all duration-300 border-2
//                                       ${isHandbook
//                                         ? "bg-[#0a41a1] text-white border-[#0a41a1] hover:bg-white hover:text-[#0a41a1]"
//                                         : "bg-transparent text-[#0a41a1] border-[#0a41a1] hover:bg-blue-50 hover:text-[#0a41a1]"} `;

//                                     const btnContent = (
//                                       <span className="flex items-center gap-2">
//                                         {isHandbook ? <FileText className="w-4 h-4" /> : <Download className="w-4 h-4" />}
//                                         {btn?.buttontext}
//                                       </span>
//                                     );

//                                     if (shouldShowPopup) {
//                                       return (
//                                         <CommonLeadPopup
//                                           key={btn?.id}
//                                           buttonText={btnContent}
//                                           buttonClassName={btnClass}
//                                           redirectUrl={btn?.buttonlink || "#"}
//                                           form_name={btn?.buttontext || "Action"}
//                                         />
//                                       );
//                                     }

//                                     return (
//                                       <a
//                                         key={btn?.id}
//                                         href={btn?.buttonlink || "#"}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className={btnClass}
//                                       >
//                                         {btnContent}
//                                       </a>
//                                     );
//                                   })}
//                                 </div>
//                               </div>
//                             );
//                           })}
//                         </div>
//                       ) : (
//                         <div className="flex flex-col items-center justify-center py-20 text-gray-400 bg-gray-50 rounded-xl border border-dashed border-gray-200">
//                           <BookOpen className="w-12 h-12 mb-4 opacity-20" />
//                           <p className="text-lg font-bold tracking-tight">No semesters available</p>
//                         </div>
//                       )}
//                     </TabsContent>
//                   );
//                 })}
//               </div>
//             </Tabs>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgrammeStructure;
