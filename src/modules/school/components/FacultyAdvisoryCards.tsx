"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// ---------- Faculty Data Imports ----------
import { soetFaculties } from "@/lib/api/school-faculties/soet";
import { somcFaculties } from "@/lib/api/school-faculties/somc";
import { solsFaculties } from "@/lib/api/school-faculties/sols";
import { smasFaculties } from "@/lib/api/school-faculties/smas";
import { sprsFaculties } from "@/lib/api/school-faculties/sprs";
import { solaFaculties } from "@/lib/api/school-faculties/sola";
import { soadFaculties } from "@/lib/api/school-faculties/soad";
import { sbasFaculties } from "@/lib/api/school-faculties/sbas";
import { sjmcFaculties } from "@/lib/api/school-faculties/sjmc";
import { sohmctFaculties } from "@/lib/api/school-faculties/sohmct";
import { soedFaculties } from "@/lib/api/school-faculties/soed";
import { soasFaculties } from "@/lib/api/school-faculties/soas";
import { FacultyAdvisoryCard } from "./FacultyAdvisoryCard";

// ---------- Constants ----------
const getItemsPerLoad = () => {
  const width = window.innerWidth;
  if (width >= 1440) return 5;
  if (width >= 1280) return 5;
  if (width >= 1024) return 3;
  if (width >= 768) return 3;
  return 2;
};

// ---------- School Categories (runtime + type-safe) ----------
export const SCHOOL_CATEGORIES = [
  "SOET",
  "SOMC",
  "SOLS",
  "SMAS",
  "SPRS",
  "SOLA",
  "SOAD",
  "SBAS",
  "SEMCE",
  "SOHMCT",
  "SOED",
  "SOAS",
] as const;

export type SchoolCategory = (typeof SCHOOL_CATEGORIES)[number];

const isSchoolCategory = (value: string): value is SchoolCategory => {
  return SCHOOL_CATEGORIES.includes(value as SchoolCategory);
};

type Faculty = {
  id: number;
  slug: string;
  title?: {
    rendered?: string;
  };
  featured_media_url?: string;
  acf?: {
    "staff-qualification"?: string;
    staff_designation?: string;
  };
};

type Props = {
  schoolCat: SchoolCategory | string;
};

const facultyMap: Record<SchoolCategory, Faculty[]> = {
  SOET: soetFaculties,
  SOMC: somcFaculties,
  SOLS: solsFaculties,
  SMAS: smasFaculties,
  SPRS: sprsFaculties,
  SOLA: solaFaculties,
  SOAD: soadFaculties,
  SBAS: sbasFaculties,
  SEMCE: sjmcFaculties,
  SOHMCT: sohmctFaculties,
  SOED: soedFaculties,
  SOAS: soasFaculties,
};

// ---------- Component ----------
const FacultyAdvisoryCards = ({ schoolCat }: Props) => {
  if (!isSchoolCategory(schoolCat)) return null;

  const facDatas = facultyMap[schoolCat];

  const [itemsPerLoad, setItemsPerLoad] = useState(5);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const updateItems = () => {
      const newCount = getItemsPerLoad();
      setItemsPerLoad(newCount);
      setVisibleCount(newCount);
    };

    updateItems();

    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  if (!facDatas.length) return null;

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + itemsPerLoad, facDatas.length));
      setLoadingMore(false);
    }, 800); // simulate skeleton loading for 800ms
  };

  const visibleFaculties = facDatas.slice(0, visibleCount);

  return (
    <div className="font-poppins">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
        {visibleFaculties.map((faculty) => (
          <div
            key={faculty.id}
            className="w-full flex justify-center"
          >
            <FacultyAdvisoryCard
              name={faculty.title?.rendered ?? ""}
              imgURL={faculty.featured_media_url ?? ""}
              qual={faculty.acf?.["staff-qualification"] ?? ""}
              desg={faculty.acf?.staff_designation ?? ""}
              slug={faculty.slug}
            />
          </div>
        ))}
      </div>

      {/* Skeletons showing when loadingMore is true */}
      {loadingMore && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5  gap-5">
          {Array.from({ length: Math.min(itemsPerLoad, facDatas.length - visibleCount) }).map((_, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-t-xl bg-white/5 border border-white/10 flex flex-col w-full font-poppins"
            >
              {/* IMAGE SECTION */}
              <div className="relative h-[240px] sm:h-[280px] w-full bg-white/10 flex items-center justify-center">
                <Skeleton className="w-16 h-16 rounded-full bg-white/5" />
              </div>
              {/* DETAILS */}
              <div className="min-h-[105px] border-b border-white/10 p-1.5 sm:p-5 flex-1 space-y-3.5">
                <Skeleton className="h-5 w-3/4 bg-white/15" />
                <Skeleton className="h-4 w-1/2 bg-white/10" />
                <Skeleton className="h-4 w-2/3 bg-white/10" />
              </div>
              {/* SOCIAL ICONS */}
              <div className="flex h-16 items-center justify-center mt-auto gap-3">
                <Skeleton className="h-9 w-9 rounded-md bg-white/10" />
                <Skeleton className="h-9 w-9 rounded-md bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loadingMore && visibleCount < facDatas.length && (
        <div className="flex justify-center py-10">
          <button
            onClick={handleLoadMore}
            className="text-white font-medium cursor-pointer transition-all hover:underline text-lg bg-transparent border-none outline-none"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default FacultyAdvisoryCards;
