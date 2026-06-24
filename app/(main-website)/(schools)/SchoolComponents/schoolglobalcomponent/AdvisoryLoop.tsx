"use client";

import { useState, useEffect, useRef } from "react";
import { AdvisoryEmployeeCard } from "@/app/(main-website)/components/Cards/AdvisoryEmployeeCard";
import { getFacultyByCat } from "@/lib/api/schools";
import { FACULTYCARD } from "@/lib/types/schools";

type Props = {
  schoolCat: string;
};

const ITEMS_PER_LOAD = 5;

const AdvisoryLoop = ({ schoolCat }: Props) => {
  const [faculties, setFaculties] = useState<FACULTYCARD[]>([]);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);
  const [loading, setLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchFaculties = async () => {
      setLoading(true);
      const data = await getFacultyByCat(schoolCat);
      setFaculties(data || []);
      setLoading(false);
    };
    fetchFaculties();
  }, [schoolCat]);

  // ✅ Show only Advisory members
  const advisoryFaculties = faculties.filter(
    (faculty) =>
      faculty.faculty_type?.toLowerCase() === "advisory" ||
      faculty.faculty_type?.toLowerCase() === "both",
  );

  // Infinite Scroll with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          visibleCount < advisoryFaculties.length &&
          !isLoadingMore
        ) {
          setIsLoadingMore(true);
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
  }, [visibleCount, advisoryFaculties.length, isLoadingMore]);

  // Delayed batch reveal so the spinner remains visible briefly
  useEffect(() => {
    if (!isLoadingMore) return;

    const timer = setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + ITEMS_PER_LOAD, advisoryFaculties.length),
      );
      setIsLoadingMore(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [isLoadingMore, advisoryFaculties.length]);

  const visibleFaculties = advisoryFaculties.slice(0, visibleCount);
  const hasMore = visibleCount < advisoryFaculties.length;

  // Initial fetch loader
  if (loading && visibleFaculties.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-14">
        {/* Loader */}
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
        </div>

        {/* Text */}
        <p className="mt-4 text-sm font-medium text-gray-700 animate-pulse">
          Loading...
        </p>
      </div>
    );

  return (
    <>
      <div className="mt-5 sm:mt-0 grid grid-cols-2 md:grid-cols-5 pt-16 px-2 sm:px-4 pb-4 gap-5">
        {visibleFaculties.length > 0 ? (
          visibleFaculties.map((faculty) => (
            <AdvisoryEmployeeCard
              key={faculty?.id}
              name={faculty?.faculty_name}
              imgUrl={faculty?.faculty_img?.url}
              qual={faculty?.faculty_qualification}
              desg={faculty?.faculty_card_desg}
              slug={faculty?.facultyslug}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            No advisory members found.
          </div>
        )}
      </div>

      {/* Loading indicator while next batch is being prepared */}
      {isLoadingMore && hasMore && (
        <div className="flex flex-col items-center justify-center py-14">
          {/* Loader */}
          <div className="relative h-14 w-14">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
            <div className="absolute inset-0 rounded-full border-4 border-black border-t-transparent animate-spin"></div>
          </div>

          {/* Text */}
          <p className="mt-4 text-sm font-medium text-gray-700 animate-pulse">
            Loading...
          </p>
        </div>
      )}

      {/* Infinite scroll trigger element */}
      <div ref={endRef} className="h-4" />
    </>
  );
};

export default AdvisoryLoop;
