"use client";

import { useState, useEffect } from "react";
import { AdvisoryCard } from "./AdvisoryCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getFacultyByCat } from "@/lib/api/schools";
import { FACULTYCARD } from "@/lib/types/schools";

type Props = {
  schoolCat: string;
};

const AdvisoryCards = ({ schoolCat }: Props) => {
  const [faculties, setFaculties] = useState<FACULTYCARD[]>([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

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

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 5, advisoryFaculties.length));
      setLoadingMore(false);
    }, 800); // simulate skeleton loading for 800ms
  };

  const visibleFaculties = advisoryFaculties.slice(0, visibleCount);

  // Initial loading state or empty state with skeletons
  if (loading && faculties.length === 0) {
    return (
      <div className="mt-5 sm:mt-0 grid grid-cols-2 md:grid-cols-5 pt-16 px-4 md:px-0 pb-4 gap-5">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-t-xl bg-white/5 border border-white/10 flex flex-col w-full font-poppins"
          >
            {/* IMAGE SECTION */}
            <div className="relative h-[120px] sm:h-[295px] w-full bg-white/10 flex items-center justify-center">
              <Skeleton className="w-12 h-12 rounded-full bg-white/5" />
            </div>
            {/* DETAILS */}
            <div className="p-1.5 sm:p-5 space-y-2.5">
              <Skeleton className="h-4 sm:h-5 w-3/4 bg-white/15" />
              <Skeleton className="h-3 sm:h-4 w-1/2 bg-white/10" />
              <Skeleton className="h-3 sm:h-4 w-2/3 bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="font-poppins">
      <div className="mt-5 sm:mt-0 grid grid-cols-2 md:grid-cols-5 pt-16 px-4 md:px-0 pb-4 gap-5">
        {visibleFaculties.length > 0 ? (
          visibleFaculties.map((faculty) => (
            <AdvisoryCard
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

      {/* Skeletons showing when loadingMore is true */}
      {loadingMore && (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 w-full px-4 md:px-0 mt-5">
          {Array.from({ length: Math.min(5, advisoryFaculties.length - visibleCount) }).map((_, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-t-xl bg-white/5 border border-white/10 flex flex-col w-full font-poppins"
            >
              {/* IMAGE SECTION */}
              <div className="relative h-[120px] sm:h-[295px] w-full bg-white/10 flex items-center justify-center">
                <Skeleton className="w-12 h-12 rounded-full bg-white/5" />
              </div>
              {/* DETAILS */}
              <div className="p-1.5 sm:p-5 space-y-2.5">
                <Skeleton className="h-4 sm:h-5 w-3/4 bg-white/15" />
                <Skeleton className="h-3 sm:h-4 w-1/2 bg-white/10" />
                <Skeleton className="h-3 sm:h-4 w-2/3 bg-white/10" />
              </div>
            </div>
          ))}
        </div>
      )}

      {!loadingMore && visibleCount < advisoryFaculties.length && (
        <div className="py-10 flex justify-center">
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

export default AdvisoryCards;
