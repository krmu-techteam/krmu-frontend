"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getSchoolProgrammeInfoByDegree,
  getSchoolProgrammePhdDataDegree,
} from "@/lib/api/school-programmes";
import { ProgrammeCardData } from "@/lib/types/school-programme";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type Props = {
  degName: string;
  catName: string;
};

const ProgrammeInfo = ({ catName }: Props) => {
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
    <div className="flex">
      {/* LEFT SIDE */}
      {/* <div className="w-full xl:w-1/2 bg-[url(/schools/prog-bg.webp)] bg-center bg-cover bg-no-repeat p-2.5 sm:p-5 z-10 rounded-3xl"> */}
      <div className="w-full xl:w-1/2 bg-[#051630] bg-center bg-cover bg-no-repeat p-2.5 sm:p-5 z-10 rounded-3xl">
        <Tabs
          defaultValue="ug"
          value={degreeTabs.find((d) => d.value === activeDegree)?.tabValue}
        >
          {/* TAB HEADERS */}
          <TabsList
            className="w-full flex-wrap justify-center rounded-full h-full p-2.5 sm:p-0 sm:h-[50px] my-4"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.12) 100%)",
              backdropFilter: "blur(13.4px)",
            }}
          >
            {degreeTabs.map((deg) => (
              <TabsTrigger
                key={deg.tabValue}
                value={deg.tabValue}
                onClick={() => handleDegreeChange(deg.value)}
                className="flex-none px-4 sm:px-8 py-2.5 sm:py-5 rounded-full cursor-pointer text-white data-[state=active]:bg-[#051630] data-[state=active]:font-bold"
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
              className="flex flex-wrap items-center"
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
                      className={`lg:w-1/2 rounded-4xl h-full font-semibold w-full cursor-pointer p-5 sm:p-[30px] transition-colors ${
                        isActive
                          ? "activehighlightprog"
                          : "text-white hover:bg-white hover:text-black"
                      }`}
                    >
                      <Link
                        href={`/programs/${prog.programmeslug || "#"}`}
                        className="block w-full h-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {prog.title} {prog.highlightitle}
                      </Link>
                    </div>
                  );
                })
              ) : (
                <p className="text-white p-5">No programmes available.</p>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="xl:w-1/2 rounded-r-3xl bg-white py-[30px] pl-16 pr-10 -ml-10 hidden xl:block"
        style={{
          boxShadow:
            "0px -0.6088px 2.21381px 0px rgba(0, 0, 0, 0.02), 0px -1.46302px 5.32008px 0px rgba(0, 0, 0, 0.03), 0px -2.75474px 10.01724px 0px rgba(0, 0, 0, 0.04), 0px -4.91399px 17.86905px 0px rgba(0, 0, 0, 0.04), 0px -9.19107px 33.42209px 0px rgba(0, 0, 0, 0.05), 0px -22px 80px 0px rgba(0, 0, 0, 0.07)",
        }}
      >
        {criteria ? (
          <>
            <div className="mt-20 text-xl font-semibold text-[#051630] mb-5">
              <p>Fee Structure</p>
            </div>
            <div className="flex gap-4">
              <div className="border-r border-black pr-4">
                <p className="mb-5 font-normal text-base uppercase leading-[1]">
                  Semester I
                </p>
                <p className="text-base  leading-[1] font-bold">
                  {criteria.semester_i === "TBD" ? "" : "Rs."}{" "}
                  {criteria.semester_i || "N/A"}{" "}
                  {criteria.semester_i === "TBD" ? "" : "/-"}
                </p>
              </div>
              <div className="border-r border-black pr-4">
                <p className="mb-5 font-normal text-base uppercase leading-[1]">
                  Semester II
                </p>
                <p className="text-base  leading-[1] font-bold">
                  {criteria.semester_ii === "TBD" ? "" : "Rs."}{" "}
                  {criteria.semester_ii || "N/A"}{" "}
                  {criteria.semester_ii === "TBD" ? "" : "/-"}
                </p>
              </div>
              <div>
                <p className="mb-5 font-normal text-base  leading-[1]">
                  Programme Fee Per Year
                </p>
                <p className="text-base uppercase leading-[1] font-bold">
                  {criteria.programme_fee_per_year === "TBD" ? "" : "Rs."}{" "}
                  {criteria.programme_fee_per_year || "N/A"}{" "}
                  {criteria.programme_fee_per_year === "TBD" ? "" : "/-"}
                </p>
              </div>
            </div>

            <div className="mt-16">
              <p className="font-semibold text-xl">Duration:</p>
              <p className="mb-5 font-bold text-xl">
                {criteria.Duration || "N/A"}
              </p>
            </div>

            <div className="mt-16">
              <p className="font-semibold text-xl mb-2.5">Eligibility:</p>
              <p className="font-semibold text-base mb-5">
                {criteria.eligibility_criteria || "Not available"}
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                href={criteria.eligibility_utm_links || "#"}
                className="text-[#051630] text-center font-bold text-base py-2.5 px-[30px] rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  boxShadow:
                    "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
                }}
              >
                Apply Now
              </Link>
              <Link
                href={`/programs/${currentProgram?.programmeslug || "#"}`}
                className="text-white bg-[#051630] text-center font-bold text-base py-2.5 px-[30px] rounded-md"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  boxShadow:
                    "0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08)",
                }}
              >
                Know More
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
  );
};

export default ProgrammeInfo;
