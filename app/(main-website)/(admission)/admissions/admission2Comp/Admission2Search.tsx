"use client";

import { ArrowRight, ChevronDown, Search } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";

import Image from "next/image";
import Link from "next/link";
import {
  getAllSchoolsInfo,
  getAllDegreeInfo,
  ProgrammeLevel,
  SchoolItem,
  getAllSchoolPhdProgrammeByCatPaginated,
  getAllSchoolProgrammeByDegOrCatPaginated,
  searchSchoolProgrammes,
  searchPhdProgrammes,
} from "@/app/(main-website)/(programmes)/programmesApi/api";

function normalize(text: string) {
  return text.toLowerCase().replace(/[\.\s]/g, "");
}


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

const Admission2Search = () => {
 const [allSchools, setAllSchools] = useState<SchoolItem[]>([]);
  const [allDegrees, setAllDegrees] = useState<ProgrammeLevel[]>([]);

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
    <section className="px-4 bg-[#f9f9f9] temp-class py-8 md:py-16">
         <div className="max-w-[600px] mx-auto w-full">
        <div>
          <h1 className="text-3xl md:text-[40px] font-bold text-center mb-5 leading-[1.2] text-black">
            Transform your Life with the Right Programme
          </h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full mt-12">
        {/* FILTER BOX */}
        <div className="bg-white rounded-xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100">
          <div className="flex flex-col lg:flex-row items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            {/* SCHOOL DROPDOWN */}
            <div className="w-full lg:w-[35%] relative group rounded-l-xl" ref={schoolRef}>
              <div
                className="flex items-center justify-between px-8 py-4 cursor-pointer hover:bg-gray-50 transition-colors rounded-l-xl"
                onClick={() => {
                  setOpenSchoolDropdown(!openSchoolDropdown);
                  setOpenDegreeDropdown(false);
                }}
              >
                <span className="text-[15px] font-medium text-gray-800 truncate">
                  {selectedSchool === ZENITH_SLUG
                    ? "Zenith School of AI"
                    : allSchools.find(
                        (s) => s.school_category.slug === selectedSchool,
                      )?.schoolname || "Select School"}
                </span>
                <ChevronDown className="w-4 h-4 text-[#e61f21] flex-shrink-0" />
              </div>

              {openSchoolDropdown && (
                <div className="absolute left-0 top-full mt-2 bg-white w-full max-h-[300px] overflow-y-auto rounded-2xl shadow-2xl border border-gray-100 z-50 py-2 scrollbar-hide">
                  <ul>
                    {sortedSchools.map((school) => (
                      <li
                        key={school.id}
                        onClick={() => {
                          setSelectedSchool(school.school_category.slug);
                          setSearchQuery("");
                          setOpenSchoolDropdown(false);
                        }}
                        className={`py-2.5 px-6 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${
                          selectedSchool === school.school_category.slug
                            ? "bg-blue-50 text-[#0a41a1] font-semibold"
                            : "text-gray-700"
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
            <div className="w-full lg:w-[30%] relative group" ref={degreeRef}>
              <div
                className="flex items-center justify-between px-8 py-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => {
                  setOpenDegreeDropdown(!openDegreeDropdown);
                  setOpenSchoolDropdown(false);
                }}
              >
                <span className="text-[15px] font-medium text-gray-800 truncate">
                  {allDegrees.find((d) => d.slug === selectedDegree)?.name ||
                    "Select Programme Level"}
                </span>
                <ChevronDown className="w-4 h-4 text-[#e61f21] flex-shrink-0" />
              </div>

              {openDegreeDropdown && (
                <div className="absolute left-0 top-full mt-2 bg-white w-full rounded-2xl shadow-2xl border border-gray-100 z-50 py-2">
                  <ul>
                    {allDegrees.map((degree) => (
                      <li
                        key={degree.id}
                        onClick={() => {
                          setSelectedDegree(degree.slug);
                          setSearchQuery("");
                          setOpenDegreeDropdown(false);
                        }}
                        className={`py-2.5 px-6 text-sm cursor-pointer hover:bg-gray-50 transition-colors ${
                          selectedDegree === degree.slug
                            ? "bg-blue-50 text-[#0a41a1] font-semibold"
                            : "text-gray-700"
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
            <div className="w-full lg:w-[35%] bg-white rounded-r-xl">
              <div className="flex items-center px-8 py-4 rounded-r-xl">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full bg-transparent text-[15px] font-medium text-gray-800 placeholder:text-gray-400 focus:outline-none border-none p-0"
                  placeholder="Search by Programme Name…"
                />
                <Search className="w-5 h-5 text-[#e61f21] flex-shrink-0 ml-2" />
              </div>
            </div>
          </div>
        </div>

        {/* PROGRAMMES LIST */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {programmes.length === 0 ? (
            <p className="col-span-3 text-center text-lg font-semibold text-gray-500">
              No programme found
            </p>
          ) : (
            programmes.map((item) => {
              const slug =
                "programmeslug" in item ? item.programmeslug : item.phdslug;

              const isExternal = slug.startsWith("http");

              return (
                <div
                  key={item.id}
                  className="bg-[#0a41a1] py-[15px] px-4 lg:py-[30px] lg:px-10 rounded-[15px] h-[175px] md:h-[235px] text-white relative"
                >
                  <div className="mb-[30px]">
                    <h6 className="font-semibold text-xs lg:text-base mb-2 line-clamp-2 sm:line-clamp-3">
                      {"title" in item ? item.title : item.heading}
                    </h6>
                    <p className="text-[10px] sm:text-sm">
                      Duration: {item.criteria?.Duration}
                    </p>
                    <p className="text-[10px] sm:text-sm">
                      Fees: Rs. {item.criteria?.programme_fee_per_year}/-
                    </p>
                  </div>

                  {/* ✅ Smart Link Handling */}
                  {isExternal ? (
                    <a
                      href={slug}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] md:text-base font-medium border-b border-white"
                    >
                      Show More
                    </a>
                  ) : (
                    <Link
                      href={`/programs/${slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] md:text-base font-medium border-b border-white"
                    >
                      Show More
                    </Link>
                  )}

                  <Image
                    src="/programmes/dots.png"
                    width={45}
                    height={51}
                    alt="dots"
                    className="absolute right-2.5 bottom-2.5"
                  />
                </div>
              );
            })
          )}
        </div>

        {showLoadMore && (
          <div className="p-4 md:p-12 flex items-center justify-center">
            <button
              onClick={() => fetchProgrammes(false, searchQuery, true)}
              className="py-[15px] px-[30px] bg-[#e61f21] text-white flex items-center gap-5 rounded-[10px] font-semibold cursor-pointer"
              style={{ boxShadow: "rgba(0,0,0,0.35) 0px 5px 15px" }}
            >
              <span>View All Programmes</span>
              <ArrowRight color="#fff" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Admission2Search;