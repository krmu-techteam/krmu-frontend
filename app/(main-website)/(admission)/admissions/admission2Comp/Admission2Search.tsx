"use client";

import { ArrowRight, ChevronDown, Search, IndianRupee, Calendar, CircleArrowRight, X } from "lucide-react";
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

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState<any>(null);
  const [slug, setSlug] = useState("");

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
    <section className="py-8 md:py-16 px-4 md:px-0 bg-[#f9f9f9]">
      <div className="max-w-[800px] mx-auto w-full">
        <div>
          <h1 className="text-2xl md:text-[40px] font-bold text-center mb-5 leading-[1.2] text-black">
            Transform your Life with the Right Programme
          </h1>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full mt-8 md:mt-12">
        {/* FILTER BOX */}
        <div className="bg-white rounded-md md:rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center lg:divide-x divide-gray-100">
            {/* SCHOOL DROPDOWN */}
            <div className="w-full lg:w-[35%] relative group" ref={schoolRef}>
              <div
                className="flex items-center justify-between px-8 py-5 cursor-pointer hover:bg-gray-50 transition-colors border-b lg:border-b-0 border-gray-50"
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
                <div className="absolute left-0 top-full mt-2 bg-white w-full max-h-[400px] overflow-y-auto rounded-2xl shadow-2xl border border-gray-100 z-50 py-3 scrollbar-hide">
                  <ul>
                    {sortedSchools.map((school) => (
                      <li
                        key={school.id}
                        onClick={() => {
                          setSelectedSchool(school.school_category.slug);
                          setSearchQuery("");
                          setOpenSchoolDropdown(false);
                        }}
                        className={`py-3 px-6 text-[15px] cursor-pointer hover:bg-gray-50 transition-colors leading-tight ${
                          selectedSchool === school.school_category.slug
                            ? "bg-blue-50 text-[#0a41a1] font-bold"
                            : "text-gray-700 font-medium"
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
                className="flex items-center justify-between px-8 py-5 cursor-pointer hover:bg-gray-50 transition-colors border-b lg:border-b-0 border-gray-50"
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
                <div className="absolute left-0 top-full mt-2 bg-white w-full rounded-2xl shadow-2xl border border-gray-100 z-50 py-3">
                  <ul>
                    {allDegrees.map((degree) => (
                      <li
                        key={degree.id}
                        onClick={() => {
                          setSelectedDegree(degree.slug);
                          setSearchQuery("");
                          setOpenDegreeDropdown(false);
                        }}
                        className={`py-3 px-6 text-[15px] cursor-pointer hover:bg-gray-50 transition-colors leading-tight ${
                          selectedDegree === degree.slug
                            ? "bg-blue-50 text-[#0a41a1] font-bold"
                            : "text-gray-700 font-medium"
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
            <div className="w-full lg:w-[35%] bg-white">
              <div className="flex items-center px-8 py-5">
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
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.length === 0 ? (
            <p className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-lg font-semibold text-gray-500">
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
                  className="group w-full rounded-sm md:rounded-xl bg-[#0a41a1] hover:bg-[#051730] font-semibold p-6 lg:p-7 transition-all duration-300 flex flex-col gap-6 justify-between shadow-md hover:shadow-xl cursor-pointer overflow-hidden relative h-full min-h-[250px]"
                >
                  <Link href={`/programs/${slug}`} target="_blank" title={"title" in item ? item.title : item.heading}>
                    <h6 className="block w-full text-white text-sm lg:text-lg font-semibold line-clamp-2 overflow-hidden min-h-[40px] lg:min-h-[48px]">
                      {"title" in item ? item.title : item.heading}
                    </h6>
                  </Link>
                  <div className="flex flex-col sm:flex-row sm:gap-8">
                    <div className="flex py-2 gap-3 text-white items-center">
                      <IndianRupee size={22} className="shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[11px] sm:text-xs font-normal opacity-90">Duration:</span>
                        <span className="text-sm sm:text-base font-bold">{item.criteria?.Duration}</span>
                      </div>
                    </div>
                    <div className="flex py-2 gap-3 text-white items-center">
                      <Calendar size={22} className="shrink-0" />
                      <div className="flex flex-col">
                        <span className="text-[11px] sm:text-xs font-normal opacity-90">Programme Fee:</span>
                        <span className="text-sm sm:text-base font-bold">Rs. {item.criteria?.programme_fee_per_year} / Year</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center gap-3 pt-4 border-t border-white/20">
                    <div className="flex flex-row items-center gap-2 md:contents">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSelectedProgramme(item);
                          setIsPopupOpen(true);
                          setSlug(slug);
                        }}
                        className="flex-1 md:flex-none border border-white text-white px-3 sm:px-4 py-2.5 rounded-md text-[11px] sm:text-xs cursor-pointer font-bold hover:bg-white hover:text-[#0a41a1] transition-all whitespace-nowrap text-center"
                      >
                        Fee Structure
                      </button>
                      {!slug.includes("zenithschool.ai") && (
                        <Link
                          href={item.criteria?.eligibility_utm_links || "#"}
                          target="_blank"
                          className="flex-1 md:flex-none bg-white text-red-600 px-3 sm:px-4 py-2.5 rounded-md text-[11px] sm:text-xs font-bold hover:bg-[#e61f21] hover:text-white group-hover:bg-[#e61f21] group-hover:text-white transition-all duration-300 whitespace-nowrap text-center shadow-sm"
                        >
                          Apply Now
                        </Link>
                      )}
                    </div>
                    <Link
                      href={slug.includes("zenithschool.ai") ? "https://zenithschool.ai/?utm_source=KRMU&utm_medium=krmu_website&utm_campaign=Zenith_Admission_2026" : `/programs/${slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white flex items-center  justify-start gap-2 text-[14px] font-medium hover:underline pt-1 md:pt-0 md:ml-auto"
                    >
                      <CircleArrowRight size={20} className="shrink-0" /> <span className="whitespace-nowrap">View Programme</span>
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {showLoadMore && (
          <div className="py-8 md:py-12 flex items-center justify-center">
            <button
              onClick={() => fetchProgrammes(false, searchQuery, true)}
              className="group text-center py-3.5 px-8 md:py-4 md:px-10 bg-[#0a41a1] hover:bg-[#051730] text-white flex items-center justify-center gap-3 md:gap-4 rounded-sm md:rounded-xl text-md md:text-xl font-semibold transition-all duration-500 ease-in-out shadow-[0_10px_25px_rgba(10,65,161,0.15)] hover:shadow-[0_15px_35px_rgba(10,65,161,0.25)] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer whitespace-nowrap"
            >
              <span>View All Programmes</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>

      {/* FEE STRUCTURE POPUP */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-[9999] transition-opacity duration-300 ${
          isPopupOpen ? "opacity-100 flex" : "opacity-0 hidden"
        }`}
      >
        <div className="w-full rounded-xl m-4 p-8 md:p-12 bg-white max-w-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-2xl overflow-y-auto max-h-[90vh]">
          <span
            className="absolute right-6 top-6 p-1 hover:bg-gray-100 rounded-full cursor-pointer transition-colors"
            onClick={() => setIsPopupOpen(false)}
          >
            <X size={28} strokeWidth={1.5} />
          </span>

          <div className="text-2xl font-bold text-[#051630] mb-8">
            Fee Structure
          </div>

          {selectedProgramme && (
            <div className="space-y-8">
              {!isZenithPopup ? (
                <>
                  {/* TOP ROW: FEES */}
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 border-b border-gray-100 pb-8">
                    <div className="flex-1 md:pr-8">
                      <p className="text-[13px] text-gray-500 uppercase tracking-wide mb-2 font-medium">Semester I</p>
                      <p className="text-xl font-bold text-black">Rs. {selectedProgramme.criteria?.semester_i} /-</p>
                    </div>
                    <div className="hidden md:block w-[1px] h-12 bg-gray-200"></div>
                    <div className="flex-1 md:px-8">
                      <p className="text-[13px] text-gray-500 uppercase tracking-wide mb-2 font-medium">Semester II</p>
                      <p className="text-xl font-bold text-black">Rs. {selectedProgramme.criteria?.semester_ii} /-</p>
                    </div>
                    <div className="hidden md:block w-[1px] h-12 bg-gray-200"></div>
                    <div className="flex-1 md:pl-8">
                      <p className="text-[13px] text-gray-500 uppercase tracking-wide mb-2 font-medium">Programme Fee Per Year</p>
                      <p className="text-xl font-bold text-black">Rs. {selectedProgramme.criteria?.programme_fee_per_year} /-</p>
                    </div>
                  </div>

                  {/* MIDDLE ROW: DURATION */}
                  <div className="border-b border-gray-100 pb-8">
                    <p className="text-lg font-semibold text-black mb-1">Duration:</p>
                    <p className="text-lg font-bold text-black">{selectedProgramme.criteria?.Duration}</p>
                  </div>

                  {/* BOTTOM ROW: ELIGIBILITY */}
                  <div>
                    <p className="text-lg font-semibold text-black mb-3">Eligibility:</p>
                    <p className="text-base text-gray-600 leading-relaxed font-medium">
                      {selectedProgramme.criteria?.eligibility_criteria}
                    </p>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      href={`/programs/${slug}`}
                      className="bg-[#0a41a1] text-white px-8 py-3 rounded-[5px] font-semibold hover:bg-[#051730] transition-colors"
                    >
                      Know More
                    </Link>
                    <Link
                      href={selectedProgramme.criteria?.eligibility_utm_links || "#"}
                      target="_blank"
                      className="bg-[#e61f21] text-white px-8 py-3 rounded-[5px] font-semibold hover:bg-[#c41a1c] transition-colors"
                    >
                      Apply Now
                    </Link>
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <h3 className="text-xl font-bold mb-4">Zenith School of AI Programme</h3>
                  <p className="mb-8 text-gray-600">Please visit the official Zenith website for detailed fee structures and admission process.</p>
                  <a
                    href="https://zenithschool.ai/?utm_source=KRMU&utm_medium=krmu_website&utm_campaign=Zenith_Admission_2026"
                    target="_blank"
                    className="inline-block bg-[#e61f21] text-white px-10 py-3 rounded-[5px] font-bold"
                  >
                    Go to Zenith Website
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Admission2Search;