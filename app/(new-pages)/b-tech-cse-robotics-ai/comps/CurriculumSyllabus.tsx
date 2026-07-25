import { ArrowDownToLine, ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { curriculumData } from "../content";

const CurriculumSyllabus = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-5xl font-bold text-[#001732] leading-tight mb-2.5">
          Curriculum & Syllabus
        </h3>
        <Link href="#" className="flex items-end">
          <ArrowDownToLine />{" "}
          <span className="underline font-bold inline-block leading-none">
            Download Programme Handbook
          </span>
        </Link>
        <div className="mt-8 space-y-5">
          {curriculumData.map((item, index) => {
            return (
              <div
                key={index}
                className="pb-10 pl-3.5 pt-3.5 pr-10 min-h-[354px] h-full flex bg-no-repeat bg-cover bg-center gap-5 border-3 border-[#b9c6d5] rounded-[14px] relative overflow-hidden"
                style={{
                  backgroundImage: item.bgImage,
                  backgroundSize: "cover",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* {item.image && (
                  <Image
                    src={item.image}
                    width={372}
                    height={295}
                    alt=""
                    className="absolute top-0 right-0 h-full object-cover"
                  />
                )} */}
                <div className="w-[7%]">
                  <div className="text-[#0B376E] bg-white leading-tight text-center flex justify-center items-center rounded-[10px] font-bold text-[22px]  w-20 h-20">
                    {item.year}
                  </div>
                </div>
                <div className="w-[73%] flex pt-2">
                  {item.semesters.map((sem, i) => {
                    return (
                      <div key={i} className="w-1/2">
                        <h4 className="text-[22px] font-bold text-[#001732] leading-snug">
                          {sem.title}
                        </h4>
                        <ul className="mt-1 text-sm leading-7">
                          {sem.subjects.map((sub, i) => {
                            return (
                              <li key={i} className="flex items-center">
                                <ChevronsRight size={20} />{" "}
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
                <div className="w-[20%]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSyllabus;
