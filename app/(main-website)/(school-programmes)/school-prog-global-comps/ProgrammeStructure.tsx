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
import Link from "next/link";
import CommonLeadPopup from "../../components/CommonLeadPopup";

type Props = {
  programStruct: Year[];
  currbtn: ButtonType;
  currFormId: string;
  currFormContainerId: string;
  isYear: boolean;
};
const getDownProsSettings = await getDownloadProspectusSetting();

const enable_disable_handbook =
  getDownProsSettings?.programme_handbook_enable_disable;
const enable_disable_open_elective =
  getDownProsSettings?.open_elective_enable_disable;
const enable_disable_minor = getDownProsSettings?.minor_enable_disable;

const ProgrammeStructure = ({
  programStruct,
  currbtn,
  currFormId,
  currFormContainerId,
  isYear,
}: Props) => {
  return (
    <div className="w-full">
      <Tabs
        defaultValue={
          programStruct[0]?.year.toLowerCase().replace(" ", "") || ""
        }
        className="flex-row items-center"
      >
        {/* Years */}
        <TabsList className="flex-col w-1/4 h-full bg-transparent">
          {/* {(currbtn?.buttonclass || currbtn?.buttonlink) && (
            <Link
              href={currbtn?.buttonlink}
              className={`p-2 sm:py-[15px] sm:px-[25px] inline-block font-normal rounded-[15px] text-xs sm:text-2xl w-full text-white bg-[#db2a1a] text-center mb-6 ${currbtn?.buttonclass}`}
            >
              {currbtn?.buttontext}
            </Link>
          )} */}

          {currbtn?.buttonlink && (
            <CommonLeadPopup
              buttonText={currbtn?.buttontext}
              buttonClassName={`p-2 sm:py-[15px] sm:px-[25px] inline-block font-normal rounded-[15px] text-xs sm:text-2xl w-full text-white bg-[#db2a1a] text-center mb-6`}
              redirectUrl={currbtn?.buttonlink || "#"}
              form_name="Programme Handbook"
            />
          )}
          {/* {enable_disable_handbook === true ? (
            <CommonLeadPopup
              buttonText={currbtn?.buttontext}
              buttonClassName={`p-2 sm:py-[15px] sm:px-[25px] inline-block font-normal rounded-[15px] text-xs sm:text-2xl w-full text-white bg-[#db2a1a] text-center mb-6`}
              redirectUrl={currbtn?.buttonlink || "#"}
              form_name="Programme Handbook"
            />
          ) : (
            <Link
              href={currbtn?.buttonlink || "#"}
              className={`p-2 sm:py-[15px] sm:px-[25px] inline-block font-normal rounded-[15px] text-xs sm:text-2xl w-full text-white bg-[#db2a1a] text-center mb-6`}
              target="_blank" rel="noopener noreferrer"
            >
              {currbtn?.buttontext}
            </Link>
          )} */}

          {/* {enable_disable_handbook === true ? (
            <PopupForm
              formId={currFormId}
              containerId={currFormContainerId}
              buttonClass="p-2 sm:py-[15px] sm:px-[25px] inline-block font-normal rounded-[15px] text-xs sm:text-2xl w-full text-white bg-[#db2a1a] text-center mb-6"
              buttonText={currbtn?.buttontext}
            />
          ) : (
            <Link
              href={currbtn?.buttonlink || "#"}
              className={`p-2 sm:py-[15px] sm:px-[25px] inline-block font-normal rounded-[15px] text-xs sm:text-2xl w-full text-white bg-[#db2a1a] text-center mb-6 ${
                currbtn?.buttonclass || ""
              }`}
              target="_blank" rel="noopener noreferrer"
            >
              {currbtn?.buttontext}
            </Link>
          )} */}

          {/* {currbtn && (
            <>
              {currbtn.buttonclass === "progPopup" ? (
                <Popup
                  buttonText={currbtn.buttontext || "Click Here"}
                  buttonClass={`p-2 sm:py-[15px] sm:px-[25px] inline-block font-normal rounded-[15px] text-xs sm:text-2xl w-full text-white bg-[#db2a1a]  text-center mb-6 ${currbtn?.buttonclass}`}
                  buttonIcon={null} // add an icon like <ArrowRight /> if needed
                  formBodyTextColor="#000"
                >
                  <p>
                    This is the content inside the popup for{" "}
                    {currbtn.buttontext}.
                  </p>
                </Popup>
              ) : currbtn.buttonlink ? (
                <Link
                  href={currbtn.buttonlink}
                  className={`p-2 sm:py-[15px] sm:px-[25px] inline-block font-normal rounded-[15px] text-xs sm:text-2xl w-full text-white bg-[#db2a1a] text-center mb-6 ${
                    currbtn.buttonclass || ""
                  }`}
                  target="_blank" rel="noopener noreferrer"
                >
                  {currbtn.buttontext}
                </Link>
              ) : null}
            </>
          )} */}

          {programStruct.map((year) => {
            const value = year.year.toLowerCase().replace(" ", "");
            return (
              <TabsTrigger
                key={year.id}
                value={value}
                className="relative text-xs md:text-xl cursor-pointer data-[state=active]:shadow-none data-[state=active]:text-[#0a41a1]
                  data-[state=active]:after:content-['']
                  data-[state=active]:after:absolute
                  data-[state=active]:after:top-1/2
                  data-[state=active]:after:translate-y-[-50%]
                  data-[state=active]:after:left-full
                  data-[state=active]:after:ml-[5px]
                  data-[state=active]:md:after:w-[100px]
                  data-[state=active]:after:w-[20px]
                  data-[state=active]:after:h-[2px]
                  data-[state=active]:after:bg-[#0a41a1]"
              >
                {year.year}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {/* Year Content */}
        <div className="w-3/4">
          {programStruct.map((year) => {
            const yearValue = year.year.toLowerCase().replace(" ", "");
            return (
              <TabsContent
                key={year.id}
                value={yearValue}
                className="min-h-[520px] h-full py-10"
              >
                {year.semester.length > 0 ? (
                  <Tabs
                    defaultValue={
                      year.semester[0]?.semestername
                        .toLowerCase()
                        .replace(" ", "") || ""
                    }
                  >
                    {/* Semester Tabs */}
                    <div
                      className={`flex mobsemtab sm:ml-0 justify-center items-center ${
                        isYear ? "hidden" : ""
                      }`}
                    >
                      <TabsList className="bg-[#0a41a1] p-2.5 h-16 mobsemtablist">
                        {year.semester.map((sem) => {
                          const semValue = sem?.semestername
                            ?.toLowerCase()
                            ?.replace(" ", "");
                          return (
                            <TabsTrigger
                              key={sem.id}
                              value={semValue}
                              className="text-white data-[state=active]:text-black cursor-pointer py-2.5 px-6 text-lg"
                            >
                              {sem.semestername}
                            </TabsTrigger>
                          );
                        })}
                      </TabsList>
                    </div>

                    {/* Semester Content */}
                    <div className="p-6 mt-12">
                      {year?.semester?.map((sem) => {
                        const semValue = sem.semestername
                          ?.toLowerCase()
                          ?.replace(" ", "");
                        return (
                          <TabsContent key={sem.id} value={semValue}>
                            <div className="grid md:grid-cols-2 gap-x-10">
                              {sem.subjects.map((sub) => (
                                <div
                                  key={sub.id}
                                  className="mb-[15px] pb-[15px] border-b border-[#ebebeb]"
                                >
                                  {sub.course_name &&
                                  sub.course_name.length > 0 &&
                                  sub.course_name[0]?.sub_name ? (
                                    // ✅ Show Accordion if course_name exists
                                    <Accordion
                                      type="single"
                                      collapsible
                                      className="w-full subjAccordion"
                                    >
                                      {sub.course_name.map((course, index) => (
                                        <AccordionItem
                                          key={course.id || index}
                                          value={`item-${sub.id}-${index}`}
                                        >
                                          <AccordionTrigger className="text-sm md:text-lg font-medium subAccPaneltitle hover:no-underline">
                                            <h5 className="text-xs md:text-xl font-medium cursor-pointer">
                                              {sub.subjectname}
                                            </h5>
                                          </AccordionTrigger>
                                          <AccordionContent className="whitespace-pre-line text-sm text-gray-700 subAccPanelContent">
                                            <span
                                              dangerouslySetInnerHTML={{
                                                __html: course.sub_name,
                                              }}
                                            />
                                          </AccordionContent>
                                        </AccordionItem>
                                      ))}
                                    </Accordion>
                                  ) : (
                                    // ❌ Fallback if no course found
                                    <h5 className="text-xs md:text-xl font-medium cursor-pointer">
                                      {sub.subjectname}
                                    </h5>
                                  )}

                                  {/* <div className="group">
                                    <h5 className="text-xs md:text-xl font-medium cursor-pointer">
                                      {sub.subjectname}
                                    </h5>
                                    <ul className="text-sm pl-2 hidden group-hover:block">
                                      {sub?.course_name &&
                                        sub.course_name.map((course) => (
                                          
                                          <li key={course?.id}>
                                            {course?.sub_name}
                                          </li>
                                        ))}
                                    </ul>
                                  </div> */}

                                  {/* <h5 className="text-xs md:text-xl font-medium">
                                    {sub.subjectname}
                                    <ul className="text-xs pl-2">
                                      {sub?.course_name &&
                                        sub?.course_name?.map((course) => {
                                          return (
                                            <li key={course?.id}>
                                              {course?.sub_name}
                                            </li>
                                          );
                                        })}
                                    </ul>
                                  </h5> */}
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center justify-end mt-4">
                              {sem.pdfbtns?.map((btn) => {
                                const text =
                                  btn?.buttontext?.toLowerCase() || "";

                                // Keyword groups
                                const openElectiveKeywords = [
                                  "open elective",
                                  "open electives",
                                  "value added",
                                  "value added courses",
                                ];
                                const minorKeywords = ["minor", "minors"];

                                // Check if text includes any keyword from each group
                                const hasOpenElectiveKeyword =
                                  openElectiveKeywords.some((word) =>
                                    text.includes(word),
                                  );
                                const hasMinorKeyword = minorKeywords.some(
                                  (word) => text.includes(word),
                                );

                                // Decide if popup should show
                                const shouldShowPopup =
                                  (hasOpenElectiveKeyword &&
                                    enable_disable_open_elective) ||
                                  (hasMinorKeyword && enable_disable_minor);

                                // Render conditionally
                                if (shouldShowPopup) {
                                  return (
                                    <CommonLeadPopup
                                      key={btn?.id}
                                      buttonText={btn?.buttontext}
                                      buttonClassName={`text-xs sm:text-xl p-5 font-semibold text-center border border-[#d5d5d5] text-[#dc2e25] bg-[#f0f0f0] rounded-[20px] inline-block`}
                                      redirectUrl={btn?.buttonlink || "#"}
                                      form_name={btn?.buttontext || ""}
                                    />
                                  );
                                }
                                // if (shouldShowPopup) {
                                //   return (
                                //     <PopupForm
                                //       key={btn?.id}
                                //       formId={btn?.popupFormId}
                                //       containerId={btn?.containerPopupFormId}
                                //       buttonClass="text-xs sm:text-xl p-5 font-semibold text-center border border-[#d5d5d5] text-[#dc2e25] bg-[#f0f0f0] rounded-[20px] inline-block"
                                //       buttonText={btn?.buttontext}
                                //     />
                                //   );
                                // }

                                return (
                                  <CommonLeadPopup
                                    key={btn?.id}
                                    buttonText={btn?.buttontext}
                                    buttonClassName={`text-xs sm:text-xl p-5 font-semibold text-center border border-[#d5d5d5] text-[#dc2e25] bg-[#f0f0f0] rounded-[20px] inline-block ${
                                      btn?.buttonclass || ""
                                    }`}
                                    redirectUrl={btn?.buttonlink || "#"}
                                    form_name={btn?.buttontext}
                                  />
                                  // <Link
                                  //   key={btn?.id}
                                  //   href={btn?.buttonlink || "#"}
                                  //   className={`text-xs sm:text-xl p-5 font-semibold text-center border border-[#d5d5d5] text-[#dc2e25] bg-[#f0f0f0] rounded-[20px] inline-block ${
                                  //     btn?.buttonclass || ""
                                  //   }`}
                                  // >
                                  //   {btn?.buttontext}
                                  // </Link>
                                );
                              })}

                              {/* {sem.pdfbtns?.map((btn) => (
                                <PopupForm
                                  key={btn?.id}
                                  formId={btn?.popupFormId}
                                  containerId={btn?.containerPopupFormId}
                                  buttonClass="text-xs sm:text-xl p-5 font-semibold text-center border border-[#d5d5d5] text-[#dc2e25] bg-[#f0f0f0] rounded-[20px] inline-block"
                                  buttonText={btn?.buttontext}
                                />
                                // <Link
                                //   key={btn.id}
                                //   href={btn.buttonlink || "#"}
                                //   className={`text-xs sm:text-xl p-5 font-semibold text-center border border-[#d5d5d5] text-[#dc2e25] bg-[#f0f0f0] rounded-[20px] inline-block ${
                                //     btn.buttonclass || ""
                                //   }`}
                                // >
                                //   {btn.buttontext}
                                // </Link>
                              ))} */}
                            </div>
                          </TabsContent>
                        );
                      })}
                    </div>
                  </Tabs>
                ) : (
                  <div className="text-center text-gray-400">
                    No semesters available
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
