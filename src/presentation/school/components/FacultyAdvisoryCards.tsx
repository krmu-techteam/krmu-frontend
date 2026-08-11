"use client";

import { useEffect, useState, useRef, useCallback } from "react";
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
  const facDatas = facultyMap[schoolCat as SchoolCategory] || [];

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

  const observerTarget = useRef<HTMLDivElement>(null);

  const handleLoadMore = useCallback(() => {
    if (loadingMore || visibleCount >= facDatas.length) return;
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + itemsPerLoad, facDatas.length));
      setLoadingMore(false);
    }, 800); // simulate skeleton loading for 800ms
  }, [loadingMore, visibleCount, facDatas.length, itemsPerLoad]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore();
        }
      },
      { threshold: 0.1 },
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [handleLoadMore]);

  const visibleFaculties = facDatas?.slice(0, visibleCount) || [];

  if (!facDatas || !facDatas.length) return null;

  return (
    <div className="font-poppins mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {visibleFaculties.map((faculty) => (
          <div key={faculty.id} className="w-full flex justify-center h-full">
            <FacultyAdvisoryCard
              name={faculty.title?.rendered ?? ""}
              imgURL={faculty.featured_media_url ?? ""}
              qual={faculty.acf?.["staff-qualification"] ?? ""}
              desg={faculty.acf?.staff_designation ?? ""}
              slug={faculty.slug}
            />
          </div>
        ))}

        {/* Skeletons showing when loadingMore is true */}
        {loadingMore &&
          Array.from({
            length: Math.min(itemsPerLoad, facDatas.length - visibleCount),
          }).map((_, idx) => (
            <div
              key={`skeleton-${idx}`}
              className="w-full flex justify-center h-full"
            >
              <div className="overflow-hidden bg-[#001732] flex flex-col w-full h-full font-poppins">
                {/* IMAGE SECTION */}
                <div className="relative flex h-[240px] sm:h-[280px] w-full items-center justify-center overflow-hidden bg-[#ffffff]">
                  {/* SOCIAL ICONS SKELETON */}
                  <div className="absolute top-3 right-3 z-30 flex items-center gap-1.5">
                    <Skeleton className="h-7 w-7 rounded bg-gray-300" />
                    <Skeleton className="h-7 w-7 rounded bg-gray-300" />
                  </div>
                  <Skeleton className="w-24 h-24 rounded-full bg-gray-300" />
                </div>

                {/* CONTENT SECTION */}
                <div className="flex flex-col flex-1 p-5 sm:p-6 bg-[#001732] gap-3">
                  <Skeleton className="h-5 w-3/4 bg-white/10" />
                  <Skeleton className="h-4 w-1/2 bg-[#009bf2]/40" />
                  <Skeleton className="h-4 w-2/3 bg-white/10" />
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Scroll Trigger Target */}
      {!loadingMore && visibleCount < facDatas.length && (
        <div ref={observerTarget} className="h-10 w-full" />
      )}
    </div>
  );
};

export default FacultyAdvisoryCards;
