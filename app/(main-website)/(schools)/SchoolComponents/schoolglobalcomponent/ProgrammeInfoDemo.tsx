"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getSchoolProgrammeInfoByDegree,
  getSchoolProgrammePhdDataDegree,
} from "@/lib/api/school-programmes";
import { ProgrammeCardData } from "@/lib/types/school-programme";
import {
  Calendar,
  CalendarDays,
  CircleArrowRight,
  Clock,
  IndianRupee,
  X,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import ProgramCard from "../hoc/ProgramCard";

type Props = {
  degName: string;
  catName: string;
  title?: string;
  slug: string;
};

const ProgrammeInfoDemo = ({ catName, title, slug }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [programs, setPrograms] = useState<Record<string, ProgrammeCardData[]>>(
    {},
  );
  const [activeDegree, setActiveDegree] = useState("Undergraduate Programmes");
  const [activeProgramId, setActiveProgramId] = useState<number | null>(null);
  const [hoverProgramId, setHoverProgramId] = useState<number | null>(null);

  // ✅ NEW: track whether all degrees have finished loading once
  const [allLoaded, setAllLoaded] = useState(false);

  const degreeTabs = [
    { label: "UG", value: "Undergraduate Programmes", tabValue: "ug" },
    { label: "PG", value: "Postgraduate Programmes", tabValue: "pg" },
    { label: "Ph.D.", value: "Doctoral Programmes", tabValue: "phd" },
    { label: "Diploma", value: "Diploma Programmes", tabValue: "diploma" },
  ];

  const sectionRef = useRef<HTMLDivElement>(null);

  // Fetch programmes for a single degree, returns the fetched data
  const fetchProg = useCallback(
    async (deg: string) => {
      try {
        let data: ProgrammeCardData[] = [];

        if (deg === "Doctoral Programmes") {
          const phdData = await getSchoolProgrammePhdDataDegree(
            "Doctoral Programme",
            catName,
          );

          data =
            phdData?.map((item) => ({
              id: item.id,
              documentId: item.documentId,
              title: item.heading,
              programmeslug: item?.phdslug,
              highlightitle: "",
              criteria: item.criteria,
            })) || [];
        } else {
          const programmeData = await getSchoolProgrammeInfoByDegree(
            deg,
            catName,
          );
          data = programmeData || [];
        }

        setPrograms((prev) => ({ ...prev, [deg]: data }));
        return data;
      } catch (err) {
        console.error("Failed to fetch programmes:", err);
        setPrograms((prev) => ({ ...prev, [deg]: [] }));
        return [];
      }
    },
    [catName],
  );

  // ✅ NEW: fetch ALL degree tabs up front so we know which ones have data
  useEffect(() => {
    let cancelled = false;

    const loadAll = async () => {
      const results = await Promise.all(
        degreeTabs.map((deg) => fetchProg(deg.value)),
      );

      if (cancelled) return;

      // pick the first degree that actually has programmes as active
      const firstAvailableIndex = results.findIndex((data) => data.length > 0);
      if (firstAvailableIndex !== -1) {
        const firstAvailableDeg = degreeTabs[firstAvailableIndex];
        setActiveDegree(firstAvailableDeg.value);
        setActiveProgramId(results[firstAvailableIndex][0].id);
      }

      setAllLoaded(true);
    };

    loadAll();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catName]);

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

  const progNewLine = [
    "b-tech-cse",
    "btech-cse-ai-ml",
    "btech-full-stack-development",
    "btech-cse-ui-ux",
    "btech-cse-cyber-security",
    "btech-cse-in-data-science",
    "b-tech-cse-robotics-ai",
  ];

  // ✅ NEW: only tabs that actually have programmes
  const visibleDegreeTabs = degreeTabs.filter(
    (deg) => (programs[deg.value]?.length ?? 0) > 0,
  );

  return (
    <>
      <div className="scroll-mt-[90px]" ref={sectionRef}>
        <div className="w-full  xl:p-5 rounded-3xl">
          {!allLoaded ? (
            // ✅ NEW: single loader while we check all degrees
            <div className="flex flex-col items-center justify-center py-14">
              <div className="relative h-14 w-14">
                <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
                <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
              </div>
              <p className="mt-4 text-sm font-medium text-gray-700 animate-pulse">
                Loading...
              </p>
            </div>
          ) : visibleDegreeTabs.length === 0 ? (
            <p className="text-black p-5 text-center">
              No programmes available.
            </p>
          ) : (
            <Tabs
              defaultValue={visibleDegreeTabs[0]?.tabValue}
              value={
                visibleDegreeTabs.find((d) => d.value === activeDegree)
                  ?.tabValue
              }
            >
              {/* TAB HEADERS — only degrees that have data */}
              <TabsList className="w-full grid grid-cols-2 sm:flex flex-wrap gap-2 sm:gap-0 justify-center h-auto px-1 sm:px-2.5 mb-2 sm:mb-5  sticky top-[44px] md:top-[44px] xl:top-[76px] z-30 after:content-[''] after:absolute left-0 after:-bottom-[5px] after:w-full after:h-[6px] after:bg-gradient-to-r after:from-white after:via-neutral-500 after:to-white after:opacity-30 bg-white rounded-none">
                {visibleDegreeTabs.map((deg) => (
                  <TabsTrigger
                    key={deg.tabValue}
                    value={deg.tabValue}
                    onClick={() => {
                      handleDegreeChange(deg.value);

                      sectionRef.current?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                    className="flex-none mx-2.5 relative py-2 px-10 rounded-xl text-xl cursor-pointer data-[state=active]:shadow-none font-medium text-black data-[state=active]:font-bold data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:-bottom-[9px] data-[state=active]:after:left-0 data-[state=active]:after:w-full data-[state=active]:after:h-1 sm:data-[state=active]:after:h-1.5 data-[state=active]:after:bg-[#001732]"
                  >
                    {deg.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* TAB CONTENTS — only degrees that have data */}
              {visibleDegreeTabs.map((deg) => (
                <TabsContent
                  key={deg.tabValue}
                  value={deg.tabValue}
                  className={`${programs[deg.value]?.length > 3 ? "grid md:grid-cols-2 xl:grid-cols-4 gap-5" : "flex flex-col sm:flex-row flex-wrap lg:grid grid-cols-2 xl:flex justify-center gap-5"} px-4 `}
                >
                  {programs[deg.value].map((prog, index) => {
                    const isActive =
                      hoverProgramId !== null
                        ? hoverProgramId === prog.id
                        : activeProgramId === prog.id;
                    const totalCards = programs[deg.value]?.length;

                    return (
                      <ProgramCard
                        key={prog.id}
                        prog={prog}
                        deg={deg}
                        programs={programs}
                        isActive={isActive}
                        handleProgramClick={handleProgramClick}
                        handleMouseEnter={handleMouseEnter}
                        criteria={criteria}
                        setShow={setShow}
                        index={index}
                        totalCards={totalCards}
                        progNewLine={progNewLine}
                      />
                    );
                  })}
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </div>
      <div
        className={`fixed  top-0 left-0 w-full z-50 h-full bg-black/50 ${show ? "block" : "hidden"}`}
      >
        <div
          className="w-full rounded-md sm:m-0 p-2.5 md:py-5 md:px-8 h-fit bg-white max-w-2xl md:max-w-3xl absolute top-1/2 left-1/2 -translate-1/2"
          style={{
            boxShadow:
              "0px -0.6088px 2.21381px 0px rgba(0, 0, 0, 0.02), 0px -1.46302px 5.32008px 0px rgba(0, 0, 0, 0.03), 0px -2.75474px 10.01724px 0px rgba(0, 0, 0, 0.04), 0px -4.91399px 17.86905px 0px rgba(0, 0, 0, 0.04), 0px -9.19107px 33.42209px 0px rgba(0, 0, 0, 0.05), 0px -22px 80px 0px rgba(0, 0, 0, 0.07)",
          }}
        >
          <span
            className="absolute right-5 top-5  inline-block  cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            <X />
          </span>
          {criteria ? (
            <>
              <div className="text-xl font-semibold text-[#051630] mb-5">
                <p>Fee Structure</p>
              </div>
              <div className="grid grid-cols-2 sm:flex flex-col md:flex-row gap-4 border-b border-gray-300 pb-2.5 sm:pb-5 mb-2.5 sm:mb-5">
                <div className="lg:border-r border-gray-200 pr-4">
                  <p className="mb-2.5 font-normal text-base leading-[1]">
                    Semester I
                  </p>
                  <p className="text-sm leading-[1] font-bold">
                    {criteria.semester_i === "TBD" ? "" : "Rs."}{" "}
                    {criteria.semester_i || "N/A"}{" "}
                    {criteria.semester_i === "TBD" ? "" : "/-"}
                  </p>
                </div>
                <div className="lg:border-r border-gray-200 pr-4">
                  <p className="mb-2.5 font-normal text-sm leading-[1]">
                    Semester II
                  </p>
                  <p className="text-sm  leading-[1] font-bold">
                    {criteria.semester_ii === "TBD" ? "" : "Rs."}{" "}
                    {criteria.semester_ii || "N/A"}{" "}
                    {criteria.semester_ii === "TBD" ? "" : "/-"}
                  </p>
                </div>
                <div>
                  <p className="mb-2.5 font-normal text-sm leading-[1]">
                    Programme Fee Per Year{" "}
                    {currentProgram?.programmeslug === "bhmct-hotel-management"
                      ? "(2025-26)"
                      : ""}
                  </p>
                  <p className="text-sm leading-[1] font-bold">
                    {criteria.programme_fee_per_year === "TBD" ? "" : "Rs."}{" "}
                    {criteria.programme_fee_per_year || "N/A"}{" "}
                    {criteria.programme_fee_per_year === "TBD" ? "" : "/-"}
                  </p>
                </div>
                <div className="pr-4 sm:ml-auto">
                  <div className="flex items-center gap-2.5">
                    <Clock size={20} />
                    <div>
                      <p className="mb-2.5 font-normal text-sm leading-[1]">
                        Duration
                      </p>
                      <p className="text-sm  leading-[1] font-bold">
                        {criteria.Duration || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-sm mb-2.5">Eligibility:</p>
                <p className="text-xs sm:text-sm mb-5">
                  {criteria.eligibility_criteria || "Not available"}
                </p>
              </div>

              <div className="flex gap-4 items-center">
                <Link
                  href={`/programs/${currentProgram?.programmeslug || "#"}`}
                  className="bg-[#001732] text-white text-center inline-block px-4 py-2.5 leading-none font-semibold rounded-sm transition-all  relative overflow-hidden group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
                  Know More
                </Link>
                {slug !==
                  "school-of-hotel-management-and-catering-technology" && (
                  <Link
                    href={criteria.eligibility_utm_links || "#"}
                    className="#cb000d text-white text-center inline-block px-4 py-2.5 leading-none rounded-sm font-semibold bg-[#cb000d]  transition-all  relative overflow-hidden group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 ease-in-out pointer-events-none"></div>
                    Apply Now
                  </Link>
                )}
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