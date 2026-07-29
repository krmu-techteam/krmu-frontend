import { ArrowDownToLine, ChevronsRight } from "lucide-react";
import Link from "next/link";
import { curriculumData } from "../content";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";

const CurriculumSyllabus = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5">
        <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#001732] leading-tight mb-2.5 text-center sm:text-left">
          Curriculum & Syllabus
        </h3>
        <Link href="#" className="flex items-end gap-2 w-fit">
          <ArrowDownToLine className="shrink-0" />
          <span className="underline font-bold inline-block leading-none">
            Download Programme Handbook
          </span>
        </Link>

        <div className="mt-8 relative">
          {curriculumData.map((item, index) => {
            return (
              <div
                key={index}
                className="mb-8 lg:sticky"
                style={{
                  // top: `${96 + index * 24}px`, // staggered offset = "peeking" stack effect
                  top: "96px", // staggered offset = "peeking" stack effect
                  zIndex: index + 1, // later cards render on top
                }}
              >
                <div
                  className={`pb-8 pl-4 pt-4 pr-4 md:pr-10 min-h-[280px] sm:min-h-[320px] md:min-h-[354px] flex flex-col md:flex-row gap-5 bg-white bg-no-repeat bg-cover bg-center border-[3px] border-[#b9c6d5] rounded-[14px] relative overflow-hidden curr-card-container curr-card-container-${index + 1}`}
                  // style={{
                  //   backgroundImage: item.bgImage,
                  //   backgroundSize: "cover",
                  //   backgroundPosition: "right",
                  //   backgroundRepeat: "no-repeat",
                  // }}
                >
                  <div className="shrink-0">
                    <div className="text-[#0B376E] bg-[#f3f3f1] leading-tight text-center flex justify-center items-center rounded-[10px] font-bold text-lg md:text-[22px] w-16 h-16 md:w-20 md:h-20">
                      {item.year}
                    </div>
                  </div>

                  <div className="pt-1 md:pt-2 md:pr-[18%] lg:pr-[20%]">
                    <div className="flex-1 flex flex-col sm:flex-row gap-6 sm:gap-5 ">
                      {item.semesters.map((sem, i) => {
                        return (
                          <div key={i} className="w-full sm:w-1/2">
                            <h4 className="text-lg md:text-[22px] font-bold text-[#001732] leading-snug">
                              {sem.title}
                            </h4>
                            <ul className="mt-1 text-sm leading-relaxed space-y-1">
                              {sem.subjects.map((sub, j) => {
                                return (
                                  <li
                                    key={j}
                                    className="flex items-start gap-1"
                                  >
                                    <ChevronsRight
                                      size={20}
                                      className="shrink-0 mt-0.5"
                                    />
                                    <span
                                      dangerouslySetInnerHTML={{
                                        __html: sub.toString(),
                                      }}
                                    />
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-5">
                      {item.OeVac &&
                        item.OeVac.map((vacItem, i) => (
                          <CommonLeadPopup
                            key={i}
                            buttonText={
                              vacItem.text ||
                              "Open Elective & Value Added Course"
                            }
                            buttonClassName="text-base text-[#F85F00] leading-tight font-semibold"
                            redirectUrl={vacItem.link}
                            form_name={
                              vacItem.text ||
                              "Open Elective & Value Added Course"
                            }
                          />
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSyllabus;
