"use client";

import { useState } from "react";
import { StaticFacultyEmployeeCard } from "@/app/(main-website)/components/Cards/StaticFacultyEmployeeCard";
import { Button } from "@/components/ui/button";

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

// ---------- Constants ----------
const ITEMS_PER_LOAD = 4;

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

// ✅ Union type derived from array
export type SchoolCategory = (typeof SCHOOL_CATEGORIES)[number];

// ---------- Type Guard (IMPORTANT) ----------
const isSchoolCategory = (value: string): value is SchoolCategory => {
  return SCHOOL_CATEGORIES.includes(value as SchoolCategory);
};

// ---------- Faculty Type ----------
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

// ---------- Props ----------
type Props = {
  schoolCat: SchoolCategory | string; // allow string safely
};

// ---------- Faculty Map ----------
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
const StaticFacultyLoop = ({ schoolCat }: Props) => {

  // ✅ Runtime safety
  if (!isSchoolCategory(schoolCat)) return null;

  const facDatas = facultyMap[schoolCat];

  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  if (!facDatas.length) return null;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  const visibleFaculties = facDatas.slice(0, visibleCount);

  return (
    <div className="pt-16 px-4 pb-4">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {visibleFaculties.map((faculty) => (
          <StaticFacultyEmployeeCard
            key={faculty.id}
            name={faculty.title?.rendered ?? ""}
            imgURL={faculty.featured_media_url ?? ""}
            qual={faculty.acf?.["staff-qualification"] ?? ""}
            desg={faculty.acf?.staff_designation ?? ""}
            slug={faculty.slug}
          />
        ))}
      </div>

      {visibleCount < facDatas.length && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleLoadMore}
            className="py-3.5 px-8 bg-[#051630] text-white font-bold cursor-pointer"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default StaticFacultyLoop;
