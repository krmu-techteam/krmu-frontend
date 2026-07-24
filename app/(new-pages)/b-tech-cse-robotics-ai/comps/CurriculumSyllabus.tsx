import { ArrowDownToLine, ChevronsRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
          <div className="bg-[linear-gradient(90deg,#E8E7E2_0%,#BCD1DA_58.17%,#C9CEDD_99.04%)] pb-10 pl-3.5 pt-3.5 pr-10 flex gap-5 border-3 border-[#b9c6d5] rounded-[10px] relative overflow-hidden">
            <Image
              src="/demo/year1-bg.png"
              width={372}
              height={295}
              alt=""
              className="absolute top-0 right-0 h-full object-cover"
            />
            <div className="w-[7%]">
              <div className="text-[#0B376E] bg-white leading-tight text-center flex justify-center items-center rounded-[10px] font-bold text-[22px]  w-20 h-20">
                1st Year
              </div>
            </div>
            <div className="w-[65%] flex pt-2">
              <div className="w-1/2">
                <h4 className="text-[22px] font-bold text-[#001732] leading-snug">
                  Semester 1
                </h4>
                <ul className="mt-1 text-sm leading-7">
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Probability, Statistics & Linear Algebra</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Programming for Problem Solving Using Python</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>
                      Foundations of Robotics, IoT & Intelligent Systems
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Basics of Electronics & Digital Logic Design</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>CS Fundamentals & Career Pathways</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>
                      <strong>Maker Lab:</strong> Tinkering with Technology
                    </span>
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <h4 className="text-[22px] font-bold text-[#001732] leading-snug">
                  Semester 2
                </h4>
                <ul className="mt-1 text-sm leading-7">
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Discrete Mathematics</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Foundational C++ for Robotics</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Robotics Kinematics, Coordinates & Jacobian</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} /> <span>Engineering Physics</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>AI Fluency & Digital Intelligence</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Design Thinking & Prototyping</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Environmental Studies</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} /> <span>Summer Internship-I</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[28%]"></div>
          </div>
          <div className="bg-[url(/demo/year-2.svg)] bg-cover bg-no-repeat bg-center pb-10 pl-3.5 pt-3.5 pr-10 flex gap-5 border-3 border-[#b9c6d5] rounded-[10px] relative overflow-hidden">
            <Image
              src="/demo/year2-bg.png"
              width={372}
              height={295}
              alt=""
              className="absolute top-0 right-0 h-full object-cover"
            />
            <div className="w-[7%]">
              <div className="text-[#0B376E] bg-white leading-tight text-center flex justify-center items-center rounded-[10px] font-bold text-[22px]  w-20 h-20">
                2nd Year
              </div>
            </div>
            <div className="w-[65%] flex pt-2">
              <div className="w-1/2">
                <h4 className="text-[22px] font-bold text-[#001732] leading-snug">
                  Semester 3
                </h4>
                <ul className="mt-1 text-sm leading-7">
                  <li className="flex items-center">
                    <ChevronsRight size={20} /> <span>Data Structures</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Database Management Systems</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Computer Organization & System Architecture</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Control Systems for Robotics</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Robot Modelling, Simulation & ROS 2</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Foundations of Everyday Communication</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Competitive Coding I</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Summer Internship-I (Assessment)</span>
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <h4 className="text-[22px] font-bold text-[#001732] leading-snug">
                  Semester 4
                </h4>
                <ul className="mt-1 text-sm leading-7">
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Design & Analysis of Algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} /> <span>Operating Systems</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Object-Oriented Programming with Java</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Value Added Course II</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Embedded AI & Robotic Systems</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Professional & Workplace Communication</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Competitive Coding II</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} /> <span>Minor Project I</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Summer Internship-II</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[28%]"></div>
          </div>
          <div className="bg-[url(/demo/year-3.svg)] bg-cover bg-no-repeat bg-center pb-10 pl-3.5 pt-3.5 pr-10 flex gap-5 border-3 border-[#b9c6d5] rounded-[10px] relative overflow-hidden">
            <Image
              src="/demo/year3-bg.png"
              width={372}
              height={295}
              alt=""
              className="absolute top-0 right-0 h-full object-cover"
            />
            <div className="w-[7%]">
              <div className="text-[#0B376E] bg-white leading-tight text-center flex justify-center items-center rounded-[10px] font-bold text-[22px]  w-20 h-20">
                3rd Year
              </div>
            </div>
            <div className="w-[73%] flex pt-2">
              <div className="w-2/5">
                <h4 className="text-[22px] font-bold text-[#001732] leading-snug">
                  Semester 5
                </h4>
                <ul className="mt-1 text-sm leading-7">
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Software Engineering & System Design</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} /> <span>Computer Networks</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>AI & ML for Robotics</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Computer Vision & Robot Perception</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Advanced Communication and Interview Mastery</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Competitive Coding III</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Summer Internship-II (Assessment)</span>
                  </li>
                </ul>
              </div>
              <div className="w-3/5">
                <h4 className="text-[22px] font-bold text-[#001732] leading-snug">
                  Semester 6
                </h4>
                <ul className="mt-1 text-sm leading-7">
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Robot Dynamics, Trajectories & Advanced Control</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>
                      Professional Problem Solving & Career Readiness-I
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Motion Planning, SLAM & Autonomous Navigation</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>
                      Deep Reinforcement Learning & Intelligent Robot Behavior
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Arithmetic & Reasoning</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Value Added Course III</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Competitive Coding II</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} /> <span>Minor Project II</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Summer Internship-III</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[20%]"></div>
          </div>
          <div className="bg-[linear-gradient(90deg,#E8E7E2_0%,#BCD1DA_58.17%,#C9CEDD_99.04%)] pb-10 pl-3.5 pt-3.5 pr-10 flex gap-5 border-3 border-[#b9c6d5] rounded-[10px] relative overflow-hidden">
            <Image
              src="/demo/year4-bg.png"
              width={372}
              height={295}
              alt=""
              className="absolute top-0 right-0 h-full object-cover"
            />
            <div className="w-[7%]">
              <div className="text-[#0B376E] bg-white leading-tight text-center flex justify-center items-center rounded-[10px] font-bold text-[22px]  w-20 h-20">
                4th Year
              </div>
            </div>
            <div className="w-[73%] flex pt-2 min-h-[332px] h-full">
              <div className="w-1/2">
                <h4 className="text-[22px] font-bold text-[#001732] leading-snug">
                  Semester 7
                </h4>
                <ul className="mt-1 text-sm leading-7">
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>
                      Professional Problem Solving & Career Readiness-II
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Autonomous Systems, HRI & Robotics Capstone</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} /> <span>Capstone Project I</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Summer Internship-III (Assessment)</span>
                  </li>
                </ul>
              </div>
              <div className="w-1/2">
                <h4 className="text-[22px] font-bold text-[#001732] leading-snug">
                  Semester 8
                </h4>
                <ul className="mt-1 text-sm leading-7">
                  <li className="flex items-center">
                    <ChevronsRight size={20} />{" "}
                    <span>Capstone Project II / Internship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSyllabus;
