"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getSchoolProgrammeInfoByDegree,
  getSchoolProgrammePhdDataDegree,
} from "@/lib/api/school-programmes";
import { ProgrammeCardData } from "@/lib/types/school-programme";
import { CircleArrowRight, X } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type Props = {
  degName: string;
  catName: string;
};

const ProgrammeInfoDemo = ({ catName }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [programs, setPrograms] = useState<Record<string, ProgrammeCardData[]>>(
    {},
  );
  const [activeDegree, setActiveDegree] = useState("Undergraduate Programmes");
  const [activeProgramId, setActiveProgramId] = useState<number | null>(null);
  const [hoverProgramId, setHoverProgramId] = useState<number | null>(null);

  const degreeTabs = [
    { label: "UG", value: "Undergraduate Programmes", tabValue: "ug" },
    { label: "PG", value: "Postgraduate Programmes", tabValue: "pg" },
    { label: "Ph.D.", value: "Doctoral Programmes", tabValue: "phd" },
    { label: "Diploma", value: "Diploma Programmes", tabValue: "diploma" },
  ];

  // Fetch programmes
  const fetchProg = useCallback(
    async (deg: string) => {
      try {
        let data: ProgrammeCardData[] = [];

        if (deg === "Doctoral Programmes") {
          // ✅ Fetch Ph.D. data (returns PhdProgrammeCardData[])
          const phdData = await getSchoolProgrammePhdDataDegree(
            "Doctoral Programme",
            catName,
          );

          // ✅ Map Ph.D. data to ProgrammeCardData structure
          data =
            phdData?.map((item) => ({
              id: item.id,
              documentId: item.documentId,
              title: item.heading,
              programmeslug: item?.phdslug, // use category slug or add your own if exists
              highlightitle: "",
              criteria: item.criteria,
            })) || [];
        } else {
          // ✅ Fetch UG/PG/Diploma data
          const programmeData = await getSchoolProgrammeInfoByDegree(
            deg,
            catName,
          );
          data = programmeData || [];
        }

        // ✅ Update state
        setPrograms((prev) => ({ ...prev, [deg]: data }));
        if (data.length > 0) {
          setActiveProgramId(data[0].id);
        }
      } catch (err) {
        console.error("Failed to fetch programmes:", err);
      }
    },
    [catName],
  );

  // On mount / degree change
  useEffect(() => {
    if (!programs[activeDegree]) {
      fetchProg(activeDegree);
    } else if (programs[activeDegree].length > 0 && !activeProgramId) {
      setActiveProgramId(programs[activeDegree][0].id);
    }
  }, [fetchProg, activeDegree, programs, activeProgramId]);

  const handleDegreeChange = (deg: string) => {
    setActiveDegree(deg);
    const loaded = programs[deg];
    if (loaded && loaded.length > 0) {
      setActiveProgramId(loaded[0].id);
      setHoverProgramId(null);
    } else {
      setActiveProgramId(null);
      setHoverProgramId(null);
    }
  };

  const handleProgramClick = (progId: number) => {
    setActiveProgramId(progId);
    setHoverProgramId(progId);
  };

  const handleMouseEnter = (progId: number) => {
    setHoverProgramId(progId);
  };

  // Current selected or hovered program
  const currentProgram =
    programs[activeDegree]?.find(
      (p) => p.id === (hoverProgramId ?? activeProgramId),
    ) || null;

  const criteria = currentProgram?.criteria;


  return (
    <>
      <div className="">
        {/* LEFT SIDE */}
        {/* <div className="w-full xl:w-1/2 bg-[url(/schools/prog-bg.webp)] bg-center bg-cover bg-no-repeat p-2.5 sm:p-5 z-10 rounded-3xl"> */}
        <div className="w-full xl:p-5 z-10 rounded-3xl">
          <Tabs
            defaultValue="ug"
            value={degreeTabs.find((d) => d.value === activeDegree)?.tabValue}
          >
            {/* TAB HEADERS */}
            <TabsList className="w-full flex-wrap gap-2.5 sm:gap-0 justify-center h-full p-2.5 mb-5 sticky top-[76px] bg-white rounded-none">
              
              {degreeTabs.map((deg) => (
                <TabsTrigger
                  key={deg.tabValue}
                  value={deg.tabValue}
                  onClick={() => handleDegreeChange(deg.value)}
                  className="flex-none mx-2.5  py-2 px-10 rounded-xl cursor-pointer bg-[#f0f0f0] data-[state=active]:text-white  data-[state=active]:bg-[#0161b0]  text-black"
                >
                  {deg.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* TAB CONTENTS */}
            {degreeTabs.map((deg) => (
              <TabsContent
                key={deg.tabValue}
                value={deg.tabValue}
                className="grid md:grid-cols-2 2xl:grid-cols-3 items-center gap-5"
              >
                {programs[deg.value]?.length ? (
                  programs[deg.value].map((prog) => {
                    const isActive =
                      hoverProgramId !== null
                        ? hoverProgramId === prog.id
                        : activeProgramId === prog.id;

                    return (
                      <div
                        key={prog.id}
                        onClick={() => handleProgramClick(prog.id)}
                        onMouseEnter={() => handleMouseEnter(prog.id)}
                        onFocus={() => handleMouseEnter(prog.id)}
                        className={`rounded-xl w-full bg-[#f0f7fc] h-full  font-semibold cursor-pointer p-5 transition-colors flex flex-col gap-2 justify-between hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] ${
                          isActive ? "" : " hover:text-black"
                        }`}
                      >
                        <Link
                          href={`/programs/${prog.programmeslug || "#"}`}
                          className="block w-full text-[#002f56]"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {prog.title} {prog.highlightitle}
                        </Link>
                        {criteria && (
                          <div className="flex flex-col sm:flex-row gap-2.5">
                            <div className="bg-white w-full sm:w-1/2 lg:w-1/3 flex flex-col gap-0.5 p-2.5 text-sm">
                              <span className="font-normal">Duration:</span>
                              <span>{prog.criteria.Duration}</span>
                            </div>
                            <div className="bg-white w-full sm:w-1/2 xl:w-1/3 flex flex-col p-2.5 gap-0.5 text-sm">
                              <span className="font-normal">
                                Programme Fee:
                              </span>
                              <span>
                                Rs. {prog.criteria.programme_fee_per_year} /
                                Year
                              </span>
                            </div>
                            <div className="lg:w-1/3"></div>
                          </div>
                        )}

                        <div className="flex flex-wrap md:flex-nowrap gap-2.5 items-center">
                          <button
                            className="bg-white border rounded-sm p-2.5 2xl:px-5 2xl:py-2.5 text-xs"
                            onClick={() => setShow(true)}
                          >
                            Fee Structure
                          </button>
                          <Link
                            href={prog.criteria.eligibility_utm_links}
                            target="_blank"
                            className="bg-white text-red-600 rounded-sm border p-2.5 2xl:px-5 2xl:py-2.5 text-xs"
                          >
                            Apply Now
                          </Link>
                          <Link
                            href={`/programs/${prog.programmeslug || "#"}`}
                            target="_blank"
                            className="text-black rounded-sm p-2.5 2xl:px-5 2xl:py-2.5 text-sm flex items-center gap-2"
                          >
                            <CircleArrowRight /> View Programme
                          </Link>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-black p-5">No programmes available.</p>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* RIGHT SIDE */}
      </div>
      <div
        className={`fixed  top-0 left-0 w-full h-full bg-black/50 z-50 ${show ? "block" : "hidden"}`}
      >
        <div
          className="w-full rounded-md sm:m-0 p-2.5 md:p-10 h-fit bg-white max-w-2xl md:max-w-4xl absolute top-1/2 left-1/2 -translate-1/2"
          style={{
            boxShadow:
              "0px -0.6088px 2.21381px 0px rgba(0, 0, 0, 0.02), 0px -1.46302px 5.32008px 0px rgba(0, 0, 0, 0.03), 0px -2.75474px 10.01724px 0px rgba(0, 0, 0, 0.04), 0px -4.91399px 17.86905px 0px rgba(0, 0, 0, 0.04), 0px -9.19107px 33.42209px 0px rgba(0, 0, 0, 0.05), 0px -22px 80px 0px rgba(0, 0, 0, 0.07)",
          }}
        >
          <span
            className="absolute right-5 top-5 cursor-pointer inline-block z-50"
            onClick={() => setShow((prev) => !prev)}
          >
            <X />
          </span>
          {criteria ? (
            <>
              <div className="text-xl font-semibold text-[#051630] mb-5">
                <p>Fee Structure</p>
              </div>
              <div className="grid grid-cols-2 sm:flex flex-col md:flex-row gap-4 border-b border-gray-300 pb-2.5 sm:pb-5">
                <div className="lg:border-r border-black pr-4">
                  <p className="mb-5 font-normal text-sm sm:text-base uppercase leading-[1]">
                    Semester I
                  </p>
                  <p className="text-sm sm:text-base  leading-[1] font-bold">
                    {criteria.semester_i === "TBD" ? "" : "Rs."}{" "}
                    {criteria.semester_i || "N/A"}{" "}
                    {criteria.semester_i === "TBD" ? "" : "/-"}
                  </p>
                </div>
                <div className="lg:border-r border-black pr-4">
                  <p className="mb-5 font-normal text-sm sm:text-base uppercase leading-[1]">
                    Semester II
                  </p>
                  <p className="text-sm sm:text-base  leading-[1] font-bold">
                    {criteria.semester_ii === "TBD" ? "" : "Rs."}{" "}
                    {criteria.semester_ii || "N/A"}{" "}
                    {criteria.semester_ii === "TBD" ? "" : "/-"}
                  </p>
                </div>
                <div>
                  <p className="mb-5 font-normal text-sm sm:text-base  leading-[1]">
                    Programme Fee Per Year
                  </p>
                  <p className="text-sm sm:text-base uppercase leading-[1] font-bold">
                    {criteria.programme_fee_per_year === "TBD" ? "" : "Rs."}{" "}
                    {criteria.programme_fee_per_year || "N/A"}{" "}
                    {criteria.programme_fee_per_year === "TBD" ? "" : "/-"}
                  </p>
                </div>
              </div>

              <div className="my-5 border-b border-gray-300">
                <p className="font-semibold text-sm sm:text-base">Duration:</p>
                <p className="mb-2.5 sm:mb-5 font-bold text-sm sm:text-base">
                  {criteria.Duration || "N/A"}
                </p>
              </div>

              <div>
                <p className="font-bold text-sm sm:text-base mb-2.5">Eligibility:</p>
                <p className="text-xs sm:text-sm mb-5">
                  {criteria.eligibility_criteria || "Not available"}
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Link
                  href={`/programs/${currentProgram?.programmeslug || "#"}`}
                  className="bg-[#0161b0] text-white text-center inline-block px-4 py-2.5 leading-none rounded-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Know More
                </Link>
                <Link
                  href={criteria.eligibility_utm_links || "#"}
                  className="bg-red-500 text-white text-center inline-block px-4 py-2.5 leading-none rounded-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </Link>
              </div>
            </>
          ) : (
            <div className="text-gray-600 mt-20 text-lg">
              <p>{activeDegree} is not available in this school</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProgrammeInfoDemo;
