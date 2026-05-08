"use client";

import {
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronRight,
  CircleArrowRight,
  IndianRupee,
  Search,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import {
  getAllSchoolsInfo,
  getAllDegreeInfo,
  ProgrammeLevel,
  SchoolItem,
  getAllSchoolPhdProgrammeByCatPaginated,
  getAllSchoolProgrammeByDegOrCatPaginated,
  searchSchoolProgrammes,
  searchPhdProgrammes,
} from "../../programmesApi/api";

function normalize(text: string | null | undefined) {
  if (!text) return "";
  return text.toLowerCase().replace(/[\.\s]/g, "");
}

import Image from "next/image";
import Link from "next/link";
import ProgrammesHero from "./ProgrammesHero";
// import { Skeleton } from "@/components/ui/skeleton";

type ZenithCriteria = {
  id: number;
  eligibility_criteria: string;
  Duration: string;
  semester_i: string;
  semester_ii: string;
  programme_fee_per_year: string;
  eligibility_utm_links: string;
  programme_offered_number: string;
};

type ZenithProgrammeItem = {
  id: number;
  documentId: string;
  title: string;
  programmeslug: string;
  criteria: ZenithCriteria;
};

const zenithProgrammes: ZenithProgrammeItem[] = [
  {
    id: 9991,
    documentId: "zenith-1",
    title: "BTech AI",
    programmeslug:
      "https://zenithschool.ai/?utm_source=KRMU&utm_medium=krmu_website&utm_campaign=Zenith_Admission_2026",
    criteria: {
      id: 1,
      eligibility_criteria: "",
      Duration: "4 Years",
      semester_i: "",
      semester_ii: "",
      programme_fee_per_year: "4.75L ",
      eligibility_utm_links: "",
      programme_offered_number: "",
    },
  },
];

const schoolOrderMap: Record<string, number> = {
  "School of Engineering & Technology": 1,
  "Zenith School of AI": 2,
  "School of Management and Commerce": 3,
  "School of Legal Studies": 4,
  "School of Medical & Allied Sciences": 5,
  "School of Liberal Arts ": 6,
  "School of Basic & Applied Sciences": 7,
  "School of Architecture & Design": 8,
  "School of Physiotherapy and Rehabilitation Sciences": 9,
  "School of Emerging Media and Creator Economy": 10,
  "School of Education": 11,
  "School of Agricultural Sciences": 12,
  "School of Hotel Management & Catering Technology": 13,
};

export interface Criteria {
  id: number;
  eligibility_criteria: string;
  Duration: string;
  semester_i: string;
  semester_ii: string;
  programme_fee_per_year: string;
  eligibility_utm_links: string;
  programme_offered_number: string;
}

export interface Programme {
  id: number;
  documentId: string;
  title: string;
  programmeslug: string;
  criteria: Criteria;
}

export interface PhdProgramme {
  id: number;
  documentId: string;
  heading: string;
  phdslug: string;
  criteria: Criteria;
}

export type ProgrammeItem = Programme | PhdProgramme;

const ProgrammesSearch = () => {
  const [allSchools, setAllSchools] = useState<SchoolItem[]>([]);
  const [allDegrees, setAllDegrees] = useState<ProgrammeLevel[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] =
    useState<ProgrammeItem | null>(null);
  const [slugValue, setSlug] = useState("");
  // default dropdown selections
  const [selectedSchool, setSelectedSchool] = useState("soet");
  const [selectedDegree, setSelectedDegree] = useState(
    "undergraduate-programmes",
  );

  const [openSchoolDropdown, setOpenSchoolDropdown] = useState(false);
  const [openDegreeDropdown, setOpenDegreeDropdown] = useState(false);

  const schoolRef = useRef<HTMLDivElement | null>(null);
  const degreeRef = useRef<HTMLDivElement | null>(null);

  const [programmes, setProgrammes] = useState<ProgrammeItem[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");

  // pagination ref (not state)
  const pageRef = useRef(1);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // keep refs of dropdown values
  const schoolRefValue = useRef("soet");
  const degreeRefValue = useRef("undergraduate-programmes");
  const ZENITH_SLUG = "zenith-ai";

  const isZenithPopup =
    selectedProgramme &&
    "programmeslug" in selectedProgramme &&
    selectedProgramme.programmeslug.includes("zenithschool.ai");

  useEffect(() => {
    schoolRefValue.current = selectedSchool; 
    degreeRefValue.current = selectedDegree;
  }, [selectedSchool, selectedDegree]);

  // close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (schoolRef.current && !schoolRef.current.contains(e.target as Node)) {
        setOpenSchoolDropdown(false);
      }
      if (degreeRef.current && !degreeRef.current.contains(e.target as Node)) {
        setOpenDegreeDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // load dropdown filters
  useEffect(() => {
    async function loadFilters() {
      const s = await getAllSchoolsInfo();
      const d = await getAllDegreeInfo();
      setAllSchools(s || []);
      setAllDegrees(d || []);
    }
    loadFilters();
  }, []);

  // --------------------------------------------
  // MAIN FETCH FUNCTION — no dependencies
  // --------------------------------------------

  // correct code
  // const fetchProgrammes = useCallback(
  //   async (reset: boolean = false, query: string = "") => {
  //     const nextPage = reset ? 1 : pageRef.current;
  //     let newData: ProgrammeItem[] = [];

  //     if (query.length > 0) {
  //       // SEARCH MODE
  //       if (degreeRefValue.current === "doctoral-programmes") {
  //         const res = await searchPhdProgrammes("", 1, 1000);
  //         const allData = res.data || [];
  //         newData = allData.filter((item) =>
  //           normalize(item.heading).includes(normalize(query))
  //         );
  //       } else {
  //         const res = await searchSchoolProgrammes("", 1, 1000);
  //         const allData = res.data || [];
  //         newData = allData.filter((item) =>
  //           normalize(item.title).includes(normalize(query))
  //         );
  //       }
  //     } else {
  //       // DROPDOWN MODE
  //       if (degreeRefValue.current === "doctoral-programmes") {
  //         const res = await getAllSchoolPhdProgrammeByCatPaginated(
  //           schoolRefValue.current,
  //           nextPage,
  //           6
  //         );
  //         newData = res?.data || [];
  //       } else {
  //         const res = await getAllSchoolProgrammeByDegOrCatPaginated(
  //           degreeRefValue.current,
  //           schoolRefValue.current,
  //           nextPage,
  //           6
  //         );
  //         newData = res?.data || [];
  //       }
  //     }

  //     setShowLoadMore(newData.length === 6);

  //     if (reset) {
  //       pageRef.current = 2;
  //       setProgrammes(newData);
  //     } else {
  //       pageRef.current += 1;
  //       setProgrammes((prev) => [...prev, ...newData]);
  //     }
  //   },
  //   []
  // );

  // --------------------------------------------
  // Debounced search effect
  // --------------------------------------------

  const fetchProgrammes = useCallback(
    async (
      reset: boolean = false,
      query: string = "",
      loadAll: boolean = false,
    ) => {
      const nextPage = reset ? 1 : pageRef.current;
      let newData: ProgrammeItem[] = [];

      const limit = loadAll ? 1000 : 7; // fetch 7 to detect "has more"
      if (schoolRefValue.current === ZENITH_SLUG) {
        setShowLoadMore(false);

        let filtered = zenithProgrammes;

        if (query.length > 0) {
          filtered = zenithProgrammes.filter((item) =>
            normalize(item.title).includes(normalize(query)),
          );
        }

        setProgrammes(filtered);
        return;
      }
      if (query.length > 0) {
        // SEARCH MODE
        if (degreeRefValue.current === "doctoral-programmes") {
          const res = await searchPhdProgrammes("", 1, 1000);
          const allData = res.data || [];
          newData = allData.filter((item) =>
            normalize(item.heading).includes(normalize(query)),
          );
        } else {
          const res = await searchSchoolProgrammes("", 1, 1000);
          const allData = res.data || [];
          newData = allData.filter((item) =>
            normalize(item.title).includes(normalize(query)),
          );
        }

        setShowLoadMore(false); // no button in search
      } else {
        // DROPDOWN MODE
        if (degreeRefValue.current === "doctoral-programmes") {
          const res = await getAllSchoolPhdProgrammeByCatPaginated(
            schoolRefValue.current,
            loadAll ? 1 : nextPage,
            limit,
          );
          newData = res?.data || [];
        } else {
          const res = await getAllSchoolProgrammeByDegOrCatPaginated(
            degreeRefValue.current,
            schoolRefValue.current,
            loadAll ? 1 : nextPage,
            limit,
          );
          newData = res?.data || [];
        }

        // 👇 check if more than 6 exist
        const hasMore = newData.length > 6;
        setShowLoadMore(!loadAll && hasMore);
      }

      // 👇 IMPORTANT: only show 6 unless loadAll
      const displayData = loadAll ? newData : newData.slice(0, 6);

      if (reset || loadAll) {
        pageRef.current = 2;
        setProgrammes(displayData);
      } else {
        pageRef.current += 1;
        setProgrammes((prev) => [...prev, ...displayData]);
      }
    },
    [],
  );

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      // if search empty → use dropdown
      fetchProgrammes(true, searchQuery.trim());
    }, 400);

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [searchQuery, selectedSchool, selectedDegree, fetchProgrammes]);
  const allSchoolsWithZenith = [
    {
      id: "zenith",
      schoolname: "Zenith School of AI",
      school_category: { slug: ZENITH_SLUG },
    },
    ...allSchools,
  ];
  const sortedSchools = [...allSchoolsWithZenith].sort((a, b) => {
    const orderA = schoolOrderMap[a.schoolname] ?? Number.MAX_SAFE_INTEGER;
    const orderB = schoolOrderMap[b.schoolname] ?? Number.MAX_SAFE_INTEGER;
    return orderA - orderB;
  });

  return (
    <section>
      <div>
        {/* FILTER BOX */}
        <div className="bg-[#051630] py-5 md:py-8 px-4 md:px-5">
          <div className="p-3 lg:py-2.5 lg:px-5 flex flex-col lg:flex-row items-stretch lg:items-center gap-4 lg:gap-5 max-w-[1440px] mx-auto w-full bg-white rounded-lg md:rounded-xl shadow-lg">
            {/* SCHOOL DROPDOWN */}
            <div className="w-full lg:w-5/12 relative border-b lg:border-b-0 lg:border-r border-gray-100 pb-3 lg:pb-0 lg:pr-5" ref={schoolRef}>
              <div
                className="flex items-center justify-between gap-2.5 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => {
                  setOpenSchoolDropdown(!openSchoolDropdown);
                  setOpenDegreeDropdown(false);
                }}
              >
                <span className="text-lg font-semibold">
                  {selectedSchool === ZENITH_SLUG
                    ? "Zenith School of AI"
                    : allSchools.find(
                        (s) => s.school_category.slug === selectedSchool,
                      )?.schoolname || "Select School"}
                </span>
                {/* <span className="text-lg font-semibold">
                  {allSchools.find(
                    (s) => s.school_category.slug === selectedSchool,
                  )?.schoolname || "Select School"}
                </span> */}
                <ChevronDown color="#e61f21" />
              </div>

              {openSchoolDropdown && (
                <div className="pb-2 absolute left-0 top-full mt-2 bg-white w-full rounded-lg border border-gray-200 z-30 shadow-2xl overflow-hidden">
                  <ul className="max-h-[300px] overflow-y-auto custom-scrollbar">
                    {sortedSchools.map((school) => (
                      <li
                        key={school.id}
                        onClick={() => {
                          setSelectedSchool(school.school_category.slug);
                          setSearchQuery("");
                          setOpenSchoolDropdown(false);
                        }}
                        className={`py-2 px-3 cursor-pointer hover:bg-[#f0f0f0] ${
                          selectedSchool === school.school_category.slug
                            ? "bg-[#f0f0f0] font-semibold"
                            : ""
                        }`}
                      >
                        {school.schoolname}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* DEGREE DROPDOWN */}
            <div className="w-full lg:w-3/12 relative border-b lg:border-b-0 lg:border-r border-gray-100 pb-3 lg:pb-0 lg:pr-5" ref={degreeRef}>
              <div
                className="flex items-center justify-between gap-2.5 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => {
                  setOpenDegreeDropdown(!openDegreeDropdown);
                  setOpenSchoolDropdown(false);
                }}
              >
                <span className="text-lg font-semibold">
                  {allDegrees.find((d) => d.slug === selectedDegree)?.name ||
                    "Select Programme Level"}
                </span>
                <ChevronDown color="#e61f21" />
              </div>

              {openDegreeDropdown && (
                <div className="py-2 absolute left-0 top-full mt-2 bg-white w-full rounded-lg border border-gray-200 z-30 shadow-2xl overflow-hidden">
                  <ul className="max-h-[300px] overflow-y-auto custom-scrollbar">
                    {allDegrees.map((degree) => (
                      <li
                        key={degree.id}
                        onClick={() => {
                          setSelectedDegree(degree.slug);
                          setSearchQuery(""); // clear search
                          setOpenDegreeDropdown(false);
                        }}
                        className={`py-2 px-3 cursor-pointer hover:bg-[#f0f0f0] ${
                          selectedDegree === degree.slug
                            ? "bg-[#f0f0f0] font-semibold"
                            : ""
                        }`}
                      >
                        {degree.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* SEARCH INPUT */}
            <div className="w-full lg:w-4/12 pt-1 lg:pt-0">
              <div className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  id="default-search"
                  className="block w-full bg-transparent text-lg font-semibold placeholder:text-gray-400 placeholder:text-base focus:outline-none"
                  placeholder="Search by Programme Name…"
                />
                <Search className="text-[#e61f21] shrink-0" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto w-full px-4 md:px-5 2xl:px-0">
          {/* PROGRAMMES LIST */}
          <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8 justify-items-center md:justify-items-stretch">
            {programmes.length === 0 ? (
              <p className="col-span-3 text-center text-lg font-semibold text-gray-500">
                No programme found
              </p>
            ) : (
              programmes.map((item) => {
                const slug =
                  ("programmeslug" in item ? item.programmeslug : item.phdslug) ||
                  "";

                const isExternal = slug.startsWith("http");

                return (
                  <div
                    key={item.id}
                    className="group w-full max-w-[458px] min-h-[220px] rounded-xl bg-[#001F3F] hover:bg-[#0a41a1] font-semibold p-5 transition-all duration-300 flex flex-col gap-3 justify-between hover:shadow-xl shadow-md text-white border border-white/10"
                  >
                    {" "}
                    <Link href={`/programs/${slug}`} target="_blank">
                      <h6 className="block w-full text-white">
                        {"title" in item ? item.title : item.heading}
                      </h6>
                    </Link>
                    <div className="flex flex-col sm:flex-row  sm:gap-5">
                      <div className="w-3/12 flex py-2.5 gap-2 text-sm cursor-text text-white items-center">
                        <span>
                           <Calendar />
                        </span>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-normal">Duration:</span>
                          <span>{item.criteria?.Duration}</span>
                        </div>
                      </div>
                      <div className="w-9/12 flex py-2.5 gap-2 text-sm cursor-text text-white items-center">
                        <span>
                          
                          <IndianRupee />
                        </span>
                        <div className="flex flex-col gap-0.5">
                          <span className="font-normal">Programme Fee:</span>
                          <span>
                            Rs. {item.criteria?.programme_fee_per_year} / Year {slug === "bhmct-hotel-management" ? "(2025-26)" : ""}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap md:flex-nowrap gap-2.5 items-center border-t border-[#395c6e] pt-2.5">
                      <button
                        // href={item.criteria.eligibility_utm_links}
                        // target="_blank"
                        onClick={() => {
                          setSelectedProgramme(item);
                          setIsPopupOpen(true);
                          setSlug(slug);
                        }}
                        className="border rounded-sm p-2.5 2xl:px-5 2xl:py-2.5 text-xs cursor-pointer border-white text-white"
                      >
                        Fee Structure
                      </button>
                      {!(slug || "").includes("zenithschool.ai") &&
                        item.criteria?.eligibility_utm_links && (
                          <Link
                            href={item.criteria.eligibility_utm_links}
                            target="_blank"
                            className="bg-red-600 text-white rounded-sm border p-2.5 2xl:px-5 2xl:py-2.5 text-xs cursor-pointer group-hover:bg-white group-hover:text-red-600 hover:border-white hover:border-white"
                          >
                            Apply Now
                          </Link>
                        )}

                      {/* {isExternal ? (
                        <Link
                          href={slug}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] md:text-base font-medium"
                        >
                          Show More
                        </Link>
                      ) : ( */}

                      <Link
                        href={`${slug.includes("zenithschool.ai") ? "https://zenithschool.ai/?utm_source=KRMU&utm_medium=krmu_website&utm_campaign=Zenith_Admission_2026" : `/programs/${slug}`}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white rounded-md py-2.5 text-sm flex items-center gap-2 hover:translate-x-1 transition-transform"
                      >
                        <CircleArrowRight size={20} /> <span>View Programme</span>
                      </Link>
                      {/* )} */}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {showLoadMore && (
            <div className="pt-4 md:pt-12 flex items-center justify-center">
              <button
                onClick={() => fetchProgrammes(false, searchQuery, true)}
                className="text-white flex justify-center items-center px-5 py-1.5 rounded-md gap-4 font-semibold bg-[#034272] cursor-pointer"
                // style={{ boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px" }}
              >
                <span>View All Programmes</span>
                <ArrowRight color="#fff" />
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isPopupOpen ? "flex" : "hidden"}`}
      >
        <div
          className="w-full bg-white rounded-2xl p-5 md:p-10 max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
          style={{
            boxShadow:
              "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <button
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-50"
            onClick={() => setIsPopupOpen(false)}
          >
            <X size={24} />
          </button>

          <div className="text-2xl font-bold text-[#051630] mb-6 border-b pb-4">
            <h2>Fee Structure</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b border-gray-100 pb-6 mb-6">
            {!isZenithPopup && (
              <>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
                    Semester I
                  </p>
                  <p className="text-lg font-bold text-[#051630]">
                    Rs. {selectedProgramme?.criteria?.semester_i || "N/A"} /-
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">
                    Semester II
                  </p>
                  <p className="text-lg font-bold text-[#051630]">
                    Rs. {selectedProgramme?.criteria?.semester_ii || "N/A"} /-
                  </p>
                </div>
              </>
            )}
            <div className="bg-blue-50 p-4 rounded-xl sm:col-span-2 lg:col-span-1">
              <p className="mb-5 font-normal text-sm sm:text-base  leading-[1]">
                Programme Fee Per Year {slugValue === "bhmct-hotel-management" ? "(2025-26)" : ""}
              </p>
              <p className="text-sm sm:text-base leading-[1] font-bold">
                {/* {criteria.programme_fee_per_year === "TBD" ? "" : "Rs."}{" "}
                    {criteria.programme_fee_per_year || "N/A"}{" "}
                    {criteria.programme_fee_per_year === "TBD" ? "" : "/-"} */}
                Rs. {selectedProgramme?.criteria?.programme_fee_per_year} /-
              </p>
            </div>
          </div>

          <div className="my-6 bg-gray-50 p-5 rounded-2xl border border-gray-100">
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-2">Duration:</p>
            <p className="text-xl font-bold text-[#051630]">
              {selectedProgramme?.criteria?.Duration}
            </p>
          </div>

          <div>
            <p className="font-bold text-sm sm:text-base mb-2.5">
              Eligibility:
            </p>
            <div className="text-xs sm:text-sm mb-5">
              {isZenithPopup ? (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="shrink-0 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-[#49DE80] p-0.5 bg-[#194129] rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-base">
                        Class 12th with PCM
                      </h4>
                      <p className="text-black text-sm font-medium">
                        Physics, Chemistry, Mathematics as core subjects.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="shrink-0 flex items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-[#49DE80] p-0.5 bg-[#194129] rounded-full"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h4 className="font-bold text-base">
                        Minimum 60% in Class 12th
                      </h4>
                      <p className="text-black text-sm font-medium">
                        Or equivalent CGPA from a recognized board.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                selectedProgramme?.criteria?.eligibility_criteria
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mt-8">
            <Link
              href={`${isZenithPopup ? "https://zenithschool.ai/?utm_source=KRMU&utm_medium=krmu_website&utm_campaign=Zenith_Admission_2026" : `/programs/${slugValue}`}`}
              className="bg-[#0161b0] text-white text-center px-8 py-3.5 font-bold rounded-xl hover:bg-[#014d8c] transition-colors shadow-lg shadow-blue-900/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              Know More
            </Link>
            {!isZenithPopup && selectedProgramme?.criteria?.eligibility_utm_links && (
              <Link
                href={selectedProgramme.criteria.eligibility_utm_links}
                className="bg-red-600 text-white text-center px-8 py-3.5 font-bold rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammesSearch;
