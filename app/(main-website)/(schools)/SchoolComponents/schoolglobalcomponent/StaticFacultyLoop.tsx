"use client";

import { useEffect, useState, useRef } from "react";
import { StaticFacultyEmployeeCard } from "@/app/(main-website)/components/Cards/StaticFacultyEmployeeCard";

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
const getItemsPerLoad = () => {
  // if (typeof window === "undefined") return 5;

  const width = window.innerWidth;
  if (width == 1512) return 4;
  if (width == 1440) return 4;
  if (width > 1512) return 5;
  if (width > 1440) return 4;
  if (width < 1440 && width >= 1024) return 3;
  if (width < 1024) return 2;
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

  const [itemsPerLoad, setItemsPerLoad] = useState(5);
  const [visibleCount, setVisibleCount] = useState(5);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateItems = () => {
      const newCount = getItemsPerLoad();
      setItemsPerLoad(newCount);
      setVisibleCount(newCount); // reset on resize
    };

    updateItems(); // initial run

    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Infinite Scroll with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < facDatas.length) {
          setVisibleCount((prev) =>
            Math.min(prev + itemsPerLoad, facDatas.length),
          );
        }
      },
      { threshold: 0.1 },
    );

    if (endRef.current) {
      observer.observe(endRef.current);
    }

    return () => {
      if (endRef.current) {
        observer.unobserve(endRef.current);
      }
    };
  }, [visibleCount, facDatas.length, itemsPerLoad]);

  if (!facDatas.length) return null;

  const visibleFaculties = facDatas.slice(0, visibleCount);

  return (
    <div>
      <div className="flex flex-wrap justify-center pt-5 sm:pt-16 px-4 pb-4 gap-5 mt-16 sm:mt-0">
        {visibleFaculties.map((faculty) => (
          <div
            key={faculty.id}
            className="w-full sm:w-[272px] flex justify-center"
          >
            <StaticFacultyEmployeeCard
              name={faculty.title?.rendered ?? ""}
              imgURL={faculty.featured_media_url ?? ""}
              qual={faculty.acf?.["staff-qualification"] ?? ""}
              desg={faculty.acf?.staff_designation ?? ""}
              slug={faculty.slug}
            />
          </div>
        ))}
      </div>

      {/* Infinite scroll trigger element */}
      <div ref={endRef} className="h-4" />
    </div>
  );
};

export default StaticFacultyLoop;
