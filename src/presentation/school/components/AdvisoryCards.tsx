"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AdvisoryCard } from "./AdvisoryCard";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { getFacultyByCat } from "@/lib/api/schools";
import { FACULTYCARD } from "@/lib/types/schools";

type Props = {
  schoolCat: string;
};

// ---------- Constants ----------
const getItemsPerLoad = () => {
  if (typeof window === "undefined") return 5;
  const width = window.innerWidth;
  if (width >= 1440) return 5;
  if (width >= 1280) return 5;
  if (width >= 1024) return 3;
  if (width >= 768) return 3;
  return 2;
};

const AdvisoryCards = ({ schoolCat }: Props) => {
  const [faculties, setFaculties] = useState<FACULTYCARD[]>([]);
  const [itemsPerLoad, setItemsPerLoad] = useState(5);
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

  // ✅ Show only Advisory members
  const advisoryFaculties = faculties.filter(
    (faculty) =>
      faculty.faculty_type?.toLowerCase() === "advisory" ||
      faculty.faculty_type?.toLowerCase() === "both",
  );

  const observerTarget = useRef<HTMLDivElement>(null);

  const handleLoadMore = useCallback(() => {
    if (loadingMore || visibleCount >= advisoryFaculties.length) return;
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + itemsPerLoad, advisoryFaculties.length),
      );
      setLoadingMore(false);
    }, 400); // short simulated loading
  }, [loadingMore, visibleCount, advisoryFaculties.length, itemsPerLoad]);

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

  const visibleFaculties = advisoryFaculties.slice(0, visibleCount);

  return (
    <div className="font-poppins mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {visibleFaculties.length > 0 ? (
          visibleFaculties.map((faculty) => (
            <div
              key={faculty?.id}
              className="w-full flex justify-center h-full"
            >
              <AdvisoryCard
                name={faculty?.faculty_name}
                imgUrl={faculty?.faculty_img?.url}
                qual={faculty?.faculty_qualification}
                desg={faculty?.faculty_card_desg}
                slug={faculty?.facultyslug}
              />
            </div>
          ))
        ) : !loading ? (
          <div className="col-span-full text-center text-gray-500 py-10">
            No advisory members found.
          </div>
        ) : null}
      </div>

      {/* Scroll Trigger Target */}
      {!loadingMore && visibleCount < advisoryFaculties.length && (
        <div ref={observerTarget} className="h-10 w-full" />
      )}
    </div>
  );
};

export default AdvisoryCards;
