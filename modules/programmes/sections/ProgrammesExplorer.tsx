"use client";

import { X, Check, Download } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
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

function normalize(text: string | null | undefined) {
  if (!text) return "";
  return text.toLowerCase().replace(/[\.\s]/g, "");
}

import Link from "next/link";
import ProgrammesSidebar from "../components/ProgrammesSidebar";
import ProgrammesList from "../components/ProgrammesList";
import ProgrammesFilterHeader from "../components/ProgrammesFilterHeader";
import { SidebarSchool } from "../components/ProgrammesSidebar";
import { SidebarDegree } from "../components/ProgrammesList";
import { ProgrammeCardData } from "../components/ProgrammeCard";
import CommonLeadPopup from "@/app/(main-website)/components/CommonLeadPopup";
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

interface ProgrammesExplorerProps {
  initialSchoolSlug?: string;
  title?: string;
  content?: string;
  isProspectusPopupEnabled?: boolean;
  prospectusUrl?: string;
}

const ProgrammesExplorer = ({
  initialSchoolSlug,
  title,
  content,
  isProspectusPopupEnabled = false,
  prospectusUrl = "#",
}: ProgrammesExplorerProps = {}) => {
  const [allSchools, setAllSchools] = useState<SchoolItem[]>([]);
  const [allDegrees, setAllDegrees] = useState<ProgrammeLevel[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProgramme, setSelectedProgramme] =
    useState<ProgrammeItem | null>(null);
  const [slugValue, setSlug] = useState("");
  // default dropdown selections
  const [selectedSchool, setSelectedSchool] = useState(
    initialSchoolSlug || "soet",
  );
  const [selectedDegree, setSelectedDegree] = useState("all");

  const [openSchoolDropdown, setOpenSchoolDropdown] = useState(false);
  const [openDegreeDropdown, setOpenDegreeDropdown] = useState(false);

  const schoolRef = useRef<HTMLDivElement | null>(null);
  const degreeRef = useRef<HTMLDivElement | null>(null);

  const [programmes, setProgrammes] = useState<ProgrammeItem[]>([]);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "grid">("grid");
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltersLoading, setIsFiltersLoading] = useState(true);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const [availableDegrees, setAvailableDegrees] = useState<string[]>([
    "all",
    "undergraduate-programmes",
    "postgraduate-programmes",
    "doctoral-programmes",
    "diploma-programmes",
  ]);

  // keep refs of dropdown values
  const schoolRefValue = useRef(initialSchoolSlug || "soet");
  const degreeRefValue = useRef("all");
  const ZENITH_SLUG = "zenith-ai";

  const searchParams = useSearchParams();

  // Read URL params safely on mount or URL change
  useEffect(() => {
    const schoolParam = searchParams.get("school");
    if (schoolParam) {
      setSelectedSchool(schoolParam);
      schoolRefValue.current = schoolParam;
    } else {
      setSelectedSchool(initialSchoolSlug || "soet");
      schoolRefValue.current = initialSchoolSlug || "soet";
    }

    const degreeParam = searchParams.get("degree");
    if (degreeParam) {
      setSelectedDegree(degreeParam);
      degreeRefValue.current = degreeParam;
    } else {
      setSelectedDegree("all");
      degreeRefValue.current = "all";
    }
  }, [searchParams]);

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
    let isMounted = true;
    async function loadFilters() {
      const s = await getAllSchoolsInfo();
      const d = await getAllDegreeInfo();
      if (isMounted) {
        setAllSchools(s || []);
        setAllDegrees(d || []);
        setIsFiltersLoading(false);
      }
    }
    loadFilters();

    return () => {
      isMounted = false;
    };
  }, []);

  // check available degrees for the selected school
  useEffect(() => {
    let isMounted = true;
    const checkDegrees = async () => {
      if (schoolRefValue.current === ZENITH_SLUG) {
        if (isMounted) setAvailableDegrees(["all", "undergraduate-programmes"]);
        return;
      }
      try {
        const [ug, pg, dip, phd] = await Promise.all([
          getAllSchoolProgrammeByDegOrCatPaginated(
            "undergraduate-programmes",
            schoolRefValue.current,
            1,
            1,
          ),
          getAllSchoolProgrammeByDegOrCatPaginated(
            "postgraduate-programmes",
            schoolRefValue.current,
            1,
            1,
          ),
          getAllSchoolProgrammeByDegOrCatPaginated(
            "diploma-programmes",
            schoolRefValue.current,
            1,
            1,
          ),
          getAllSchoolPhdProgrammeByCatPaginated(schoolRefValue.current, 1, 1),
        ]);
        if (!isMounted) return;
        const active = ["all"];
        if (ug?.meta?.pagination?.total > 0)
          active.push("undergraduate-programmes");
        if (pg?.meta?.pagination?.total > 0)
          active.push("postgraduate-programmes");
        if (phd?.meta?.pagination?.total > 0)
          active.push("doctoral-programmes");
        if (dip?.meta?.pagination?.total > 0) active.push("diploma-programmes");
        setAvailableDegrees(active);

        // If the currently selected degree is not available anymore, switch to "all"
        if (
          degreeRefValue.current !== "all" &&
          !active.includes(degreeRefValue.current)
        ) {
          setSelectedDegree("all");
        }
      } catch (err) {
        console.error("Failed to check available degrees:", err);
      }
    };
    checkDegrees();
    return () => {
      isMounted = false;
    };
  }, [selectedSchool]);

  const fetchProgrammes = useCallback(
    async (
      reset: boolean = false,
      query: string = "",
      loadAll: boolean = false,
    ) => {
      setIsLoading(true);
      try {
        let newData: ProgrammeItem[] = [];
        const limit = 1000; // Load all
        if (schoolRefValue.current === ZENITH_SLUG && query.length === 0) {
          setShowLoadMore(false);
          setProgrammes(zenithProgrammes);
          return;
        }
        if (query.length > 0) {
          // SEARCH MODE — all results, no slice
          if (degreeRefValue.current === "doctoral-programmes") {
            const res = await searchPhdProgrammes("", 1, limit);
            const allData = res.data || [];
            newData = allData.filter((item) =>
              normalize(item.heading).includes(normalize(query)),
            );
          } else {
            const res = await searchSchoolProgrammes("", 1, limit);
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
              1,
              limit,
            );
            newData = res?.data || [];
          } else if (degreeRefValue.current === "all") {
            const [progRes, phdRes] = await Promise.all([
              getAllSchoolProgrammeByDegOrCatPaginated(
                "all",
                schoolRefValue.current,
                1,
                limit,
              ),
              getAllSchoolPhdProgrammeByCatPaginated(
                schoolRefValue.current,
                1,
                limit,
              ),
            ]);
            newData = [...(progRes?.data || []), ...(phdRes?.data || [])];
          } else {
            const res = await getAllSchoolProgrammeByDegOrCatPaginated(
              degreeRefValue.current,
              schoolRefValue.current,
              1,
              limit,
            );
            newData = res?.data || [];
          }

          setShowLoadMore(false);
        }

        setProgrammes(newData);
      } finally {
        setIsLoading(false);
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

  const progNewLine = [
    "b-tech-cse",
    "btech-cse-ai-ml",
    "btech-full-stack-development",
    "btech-cse-ui-ux",
    "btech-cse-cyber-security",
    "btech-cse-in-data-science",
    "b-tech-cse-robotics-ai",
  ];

  // Map data to component props
  const mappedSchools: SidebarSchool[] = sortedSchools.map((s) => ({
    id: s.id,
    name: s.schoolname,
    slug: s.school_category.slug,
  }));

  const mappedDegrees: SidebarDegree[] = allDegrees.map((d) => ({
    id: d.id,
    name: d.name,
    slug: d.slug,
  }));

  const mappedProgrammes: ProgrammeCardData[] = programmes.map((item) => {
    // Determine the correct slug and isZenith
    let slug = "";
    let isZenith = false;

    if ("programmeslug" in item) {
      slug = item.programmeslug || "";
      const fullTitle =
        (item.title || "") +
        ((item as any).highlightitle ? ` ${(item as any).highlightitle}` : "");
      isZenith =
        fullTitle.includes("Zenith") || slug.includes("zenithschool.ai");
    } else {
      slug = item.phdslug || "";
    }

    const titleStr =
      "title" in item
        ? (item.title || "") +
          ((item as any).highlightitle ? ` ${(item as any).highlightitle}` : "")
        : item.heading || "";

    return {
      id: item.id,
      title: titleStr,
      slug: slug,
      isZenith: isZenith,
      duration: item.criteria?.Duration || "N/A",
      fees: item.criteria?.programme_fee_per_year || "N/A",
      eligibilityUtmLink: item.criteria?.eligibility_utm_links || "",
      showApplyNow: !isZenith,
      isNewLines: progNewLine.includes(slug),
    };
  });

  return (
    <section className="w-full px-0 xl:px-16 font-poppins">
      <div className="mx-auto max-w-[1530px]">
        {(title || content) && (
          <div className="px-6 lg:px-3 xl:px-0">
            <div className="flex-1">
              {title && (
                <h2 className="heading-primary text-center md:text-left mb-3 md:mb-4">{title}</h2>
              )}
            </div>
            <div className="mb-8 md:mb-8 flex flex-col md:flex-row gap-6  items-start lg:items-center justify-between">
              {content && (
                <p className="text-white/70 text-center md:text-left text-base md:text-md max-w-[1100px]">
                  {content}
                </p>
              )}
              {isProspectusPopupEnabled ? (
                <CommonLeadPopup
                  buttonText={
                    <div className="flex items-center gap-2">
                      <Download size={18} />
                      <span>Download Prospectus</span>
                    </div>
                  }
                  buttonClassName="flex mx-auto md:mx-0 items-center gap-2 px-5 py-2.5 border border-white/20 text-white/90 text-[15px] font-medium rounded-sm hover:bg-white/5 transition-all whitespace-nowrap shrink-0"
                  redirectUrl={prospectusUrl}
                  form_name="Download Prospectus"
                  
                />
              ) : (
                <Link
                  href={prospectusUrl}
                  className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white/90 text-[15px] font-medium rounded-sm hover:bg-white/5 transition-all whitespace-nowrap shrink-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} />
                  <span>Download Prospectus</span>
                </Link>
              )}
            </div>
          </div>
        )}
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 items-start">
          {/* Sidebar for Schools */}
          <div className="w-[calc(100%+2rem)] md:w-[calc(100%+4rem)] xl:w-[300px] shrink-0 xl:sticky xl:top-[130px] self-start xl:max-h-[calc(100vh-140px)] xl:overflow-y-auto no-scrollbar -mx-4 md:-mx-8 xl:mx-0 bg-[#061623] xl:bg-transparent py-1 xl:py-0">
            <ProgrammesSidebar
              activeSchoolSlug={selectedSchool}
              onSchoolChange={(slug) => {
                setSelectedSchool(slug);
                setSearchQuery("");
                setOpenSchoolDropdown(false);
              }}
              schoolsList={mappedSchools}
              isLoading={isFiltersLoading}
            />
          </div>

          {/* Main Content Area: Tabs + Search + Cards */}
          <div className="flex-1 w-full min-w-0 flex flex-col">
            <ProgrammesFilterHeader
              activeDegreeSlug={selectedDegree}
              onDegreeChange={(slug) => {
                setSelectedDegree(slug);
                setSearchQuery("");
                setOpenDegreeDropdown(false);
              }}
              degreesList={mappedDegrees}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              programCount={programmes.length}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              availableDegrees={availableDegrees}
            />
            <div className="flex-1 mt-4 xl:mt-0">
              <ProgrammesList
                programmes={mappedProgrammes}
                isLoading={isLoading}
                showLoadMore={showLoadMore}
                onLoadMore={() => {}}
                onProgrammeClick={(id) => {
                  const p = programmes.find((x) => x.id === id);
                  if (p) {
                    setSelectedProgramme(p);
                    setIsPopupOpen(true);
                    setSlug(
                      ("programmeslug" in p ? p.programmeslug : p.phdslug) ||
                        "",
                    );
                  }
                }}
                viewMode={viewMode}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fee Structure Popup (Unchanged logic/UI) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${isPopupOpen ? "flex" : "hidden"}`}
      >
        <div className="w-full max-w-4xl max-h-[90vh] relative shadow-2xl rounded-md overflow-hidden border border-white/10 flex flex-col bg-[#0B1221]">
          {/* Decorative Backgrounds */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div
              className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] opacity-40 blur-[100px]"
              style={{ background: "url('/blue-bg.png') center/cover" }}
            ></div>
            <div
              className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] opacity-30 blur-[100px]"
              style={{ background: "url('/yellow-bg.png') center/cover" }}
            ></div>
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                background: "url('/bg-noise.png') repeat",
                backgroundSize: "50px",
              }}
            ></div>
          </div>

          <button
            className="absolute right-4 cursor-pointer top-4 p-2 text-white/50 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 rounded-full transition-all z-50 backdrop-blur-md"
            onClick={() => setIsPopupOpen(false)}
          >
            <X size={24} />
          </button>

          <div className="w-full max-h-[90vh] p-5 md:p-8 overflow-y-auto relative z-10 no-scrollbar">
            <div className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
              <h2>Fee Structure</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 border-b border-white/10 pb-8 mb-8">
              {!isZenithPopup && (
                <>
                  <div className="bg-white/5 border border-white/10 p-5 rounded-sm backdrop-blur-sm">
                    <p className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-1.5">
                      Semester I
                    </p>
                    <p className="text-lg font-medium text-white/90">
                      Rs. {selectedProgramme?.criteria?.semester_i || "N/A"} /-
                    </p>
                  </div>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-sm backdrop-blur-sm">
                    <p className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-1.5">
                      Semester II
                    </p>
                    <p className="text-lg font-medium text-white/90">
                      Rs. {selectedProgramme?.criteria?.semester_ii || "N/A"} /-
                    </p>
                  </div>
                </>
              )}
              <div className="bg-gradient-to-br from-[#0161b0]/20 to-[#00AEEF]/10 border border-[#00AEEF]/20 p-5 rounded-sm sm:col-span-2 lg:col-span-1 backdrop-blur-sm">
                <p className="mb-2 font-medium text-sm sm:text-base text-[#00AEEF] leading-tight">
                  Programme Fee Per Year{" "}
                  {slugValue === "bhmct-hotel-management" ? "(2025-26)" : ""}
                </p>
                <p className="text-xl leading-[1] font-semibold text-white">
                  Rs. {selectedProgramme?.criteria?.programme_fee_per_year} /-
                </p>
              </div>
            </div>

            <div className="my-8 bg-white/5 border border-white/10 p-5 rounded-sm backdrop-blur-sm">
              <p className="text-xs text-white/50 uppercase tracking-wider font-semibold mb-1.5">
                Duration:
              </p>
              <p className="text-lg font-medium text-white/90">
                {selectedProgramme?.criteria?.Duration}
              </p>
            </div>

            <div>
              <p className="font-semibold text-white text-sm sm:text-base mb-3">
                Eligibility:
              </p>
              <div className="text-sm mb-5 text-white/80 font-normal leading-relaxed">
                {isZenithPopup ? (
                  <div className="flex flex-col gap-4 mt-4">
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 flex items-center justify-center mt-0.5">
                        <Check
                          className="text-[#00AEEF]"
                          size={20}
                          strokeWidth={3}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-medium text-white text-base">
                          Class 12th with PCM
                        </h4>
                        <p className="text-white/60 text-sm">
                          Physics, Chemistry, Mathematics as core subjects.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="shrink-0 flex items-center justify-center mt-0.5">
                        <Check
                          className="text-[#00AEEF]"
                          size={20}
                          strokeWidth={3}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h4 className="font-medium text-white text-base">
                          Minimum 60% in Class 12th
                        </h4>
                        <p className="text-white/60 text-sm">
                          Or equivalent CGPA from a recognized board.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="leading-relaxed">
                    {selectedProgramme?.criteria?.eligibility_criteria}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mt-8 pt-8 border-t border-white/10">
              <Link
                href={`${isZenithPopup ? "https://zenithschool.ai/?utm_source=KRMU&utm_medium=krmu_website&utm_campaign=Zenith_Admission_2026" : `/programs/${slugValue}`}`}
                className="bg-white/10 border border-white/20 text-white hover:bg-white/20 text-center px-8 py-3 text-[14px] font-medium rounded-sm transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Know More
              </Link>
              {!isZenithPopup &&
                selectedProgramme?.criteria?.eligibility_utm_links && (
                  <Link
                    href={selectedProgramme.criteria.eligibility_utm_links}
                    className="bg-[#cb000d]/10 border border-[#cb000d] text-[#eb1321] hover:bg-[#cb000d] hover:text-white text-center px-8 py-3 text-[14px] font-medium rounded-sm transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply Now
                  </Link>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgrammesExplorer;
