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
        <div className="bg-[#051630] py-8 px-5">
          <div className="py-2.5 px-5 flex flex-col lg:flex-row items-center gap-5 max-w-[1440px] mx-auto w-full bg-white rounded-xl">
            {/* SCHOOL DROPDOWN */}
            <div className="lg:w-5/12 relative" ref={schoolRef}>
              <div
                className="flex items-center justify-between gap-2.5 cursor-pointer"
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
                <div className="pb-2 absolute left-0 top-10 bg-white w-full rounded-[5px] border border-[#0000002d] z-10">
                  <ul>
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
            <div className="lg:w-3/12 relative" ref={degreeRef}>
              <div
                className="flex items-center justify-between gap-2.5 cursor-pointer"
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
                <div className="py-2 absolute left-0 top-10 bg-white w-full rounded-[5px] border border-[#0000002d] z-10">
                  <ul>
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
            <div className="lg:w-4/12">
              <div className="flex">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  id="default-search"
                  className="block w-full bg-transparent text-lg font-semibold placeholder:text-base"
                  placeholder="Search by Programme Name…"
                />
                <Search className="text-[#e61f21]" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto w-full px-5 2xl:px-0">
          {/* PROGRAMMES LIST */}
          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8">
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
                    className="group max-w-[458px] min-h-[200px] w-full rounded-xl bg-[#0a41a1] group hover:bg-[#001F3F] h-full  font-semibold p-5 transition-colors flex flex-col gap-2 justify-between hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  hover:text-black"
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
                            Rs. {item.criteria?.programme_fee_per_year} / Year
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
                            className="bg-white text-red-600 rounded-sm border p-2.5 2xl:px-5 2xl:py-2.5 text-xs cursor-pointer group-hover:bg-red-500 group-hover:text-white hover:border hover:border-red-500"
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
                        className="text-white rounded-sm py-2.5 2xl:py-2.5 text-sm flex items-center gap-2"
                      >
                        <CircleArrowRight /> <span>View Programme</span>
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
        className={`fixed  top-0 left-0 w-full h-full bg-black/50 z-50 ${isPopupOpen ? "flex" : "hidden"}`}
      >
        <div
          className="w-full rounded-md sm:m-0 p-2.5 md:p-10 h-fit bg-white max-w-2xl md:max-w-4xl absolute top-1/2 left-1/2 -translate-1/2"
          style={{
            boxShadow:
              "0px -0.6088px 2.21381px 0px rgba(0, 0, 0, 0.02), 0px -1.46302px 5.32008px 0px rgba(0, 0, 0, 0.03), 0px -2.75474px 10.01724px 0px rgba(0, 0, 0, 0.04), 0px -4.91399px 17.86905px 0px rgba(0, 0, 0, 0.04), 0px -9.19107px 33.42209px 0px rgba(0, 0, 0, 0.05), 0px -22px 80px 0px rgba(0, 0, 0, 0.07)",
          }}
        >
          <span
            className="absolute right-5 top-5  inline-block z-50 cursor-pointer"
            onClick={() => setIsPopupOpen(false)}
          >
            <X />
          </span>

          <div className="text-xl font-semibold text-[#051630] mb-5">
            <p>Fee Structure</p>
          </div>
          <div className="grid grid-cols-2 sm:flex flex-col md:flex-row gap-4 border-b border-gray-300 pb-2.5 sm:pb-5">
            {!isZenithPopup && (
              <>
                <div className="lg:border-r border-black pr-4">
                  <p className="mb-5 font-normal text-sm sm:text-base uppercase leading-[1]">
                    Semester I
                  </p>
                  <p className="text-sm sm:text-base leading-[1] font-bold">
                    Rs. {selectedProgramme?.criteria?.semester_i || "N/A"} /-
                  </p>
                </div>

                <div className="lg:border-r border-black pr-4">
                  <p className="mb-5 font-normal text-sm sm:text-base uppercase leading-[1]">
                    Semester II
                  </p>
                  <p className="text-sm sm:text-base leading-[1] font-bold">
                    Rs. {selectedProgramme?.criteria?.semester_ii || "N/A"} /-
                  </p>
                </div>
              </>
            )}
            <div>
              <p className="mb-5 font-normal text-sm sm:text-base  leading-[1]">
                Programme Fee Per Year
              </p>
              <p className="text-sm sm:text-base leading-[1] font-bold">
                {/* {criteria.programme_fee_per_year === "TBD" ? "" : "Rs."}{" "}
                    {criteria.programme_fee_per_year || "N/A"}{" "}
                    {criteria.programme_fee_per_year === "TBD" ? "" : "/-"} */}
                Rs. {selectedProgramme?.criteria?.programme_fee_per_year} /-
              </p>
            </div>
          </div>

          <div className="my-5 border-b border-gray-300">
            <p className="font-semibold text-sm sm:text-base">Duration:</p>
            <p className="mb-2.5 sm:mb-5 font-bold text-sm sm:text-base">
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

          <div className="flex gap-4 items-center">
            <Link
              href={`${isZenithPopup ? "https://zenithschool.ai/?utm_source=KRMU&utm_medium=krmu_website&utm_campaign=Zenith_Admission_2026" : `/programs/${slugValue}`}`}
              className="bg-[#0161b0] text-white text-center inline-block px-4 py-2.5 leading-none rounded-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Know More
            </Link>
            {!isZenithPopup && selectedProgramme?.criteria?.eligibility_utm_links && (
              <Link
                href={selectedProgramme.criteria.eligibility_utm_links}
                className="bg-red-500 text-white text-center inline-block px-4 py-2.5 leading-none rounded-sm"
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
