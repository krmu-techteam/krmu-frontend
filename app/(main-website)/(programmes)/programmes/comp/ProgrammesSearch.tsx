"use client";

import { ArrowRight, ChevronDown, ChevronRight, Search } from "lucide-react";
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

function normalize(text: string) {
  return text.toLowerCase().replace(/[\.\s]/g, "");
}

import Image from "next/image";
import Link from "next/link";
import ProgrammesHero from "./ProgrammesHero";
// import { Skeleton } from "@/components/ui/skeleton";

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

  return (
    <section className="pt-40 pb-[50px] px-4 bg-[#f9f9f9]">
      <ProgrammesHero />

      <div className="max-w-[1320px] mx-auto w-full">
        {/* FILTER BOX */}
        <div className="bg-white rounded-[10px]">
          <div className="py-2.5 px-5 flex flex-col lg:flex-row items-center gap-5">
            {/* SCHOOL DROPDOWN */}
            <div className="lg:w-1/4 relative" ref={schoolRef}>
              <div
                className="flex items-center justify-between gap-2.5 cursor-pointer"
                onClick={() => {
                  setOpenSchoolDropdown(!openSchoolDropdown);
                  setOpenDegreeDropdown(false);
                }}
              >
                <span className="text-lg font-semibold">
                  {allSchools.find(
                    (s) => s.school_category.slug === selectedSchool,
                  )?.schoolname || "Select School"}
                </span>
                <ChevronDown color="#e61f21" />
              </div>

              {openSchoolDropdown && (
                <div className="pb-2 absolute left-0 top-10 bg-white w-full rounded-[5px] border border-[#0000002d] z-10">
                  <ul>
                    <li className="pt-2.5 pb-2 px-3 cursor-pointer hover:bg-[#f0f0f0] flex justify-between group">
                      <span>Zenith School of AI</span> <ChevronRight />
                      <div className="w-full border border-[#0000002d] z-10 max-w-xs absolute hidden top-0 left-full  bg-white group-hover:block">
                        <ul>
                          <li className="hover:bg-[#f0f0f0] hover:font-weight py-2 px-3 hover:text-blue-500">
                            <Link
                              href="https://zenithschool.ai/?utm_source=KRMU&utm_medium=krmu_website&utm_campaign=Zenith_Admission_2026"
                              target="_blank"
                            >
                              BTech AI
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {allSchools.map((school) => (
                      <li
                        key={school.id}
                        onClick={() => {
                          setSelectedSchool(school.school_category.slug);
                          setSearchQuery(""); // clear search
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
            <div className="lg:w-1/4 relative" ref={degreeRef}>
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
            <div className="lg:w-2/4">
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

        {/* PROGRAMMES LIST */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {programmes.length === 0 ? (
            <p className="col-span-3 text-center text-lg font-semibold text-gray-500">
              No programme found
            </p>
          ) : (
            programmes.map((item) => (
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

                <Link
                  href={`/programs/${
                    "programmeslug" in item ? item.programmeslug : item.phdslug
                  }`}
                  className="text-[10px] md:text-base font-medium border-b border-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Show More
                </Link>

                <Image
                  src="/programmes/dots.png"
                  width={45}
                  height={51}
                  alt="dots"
                  className="absolute right-2.5 bottom-2.5"
                />
              </div>
            ))
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

export default ProgrammesSearch;
