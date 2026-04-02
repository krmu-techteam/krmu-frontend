"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  getSchoolInfoForFacultyBySlug,
  getWordSchoolFaculty,
} from "@/lib/api/schools";
import { WordSchoolFaculties } from "@/lib/types/schools";
import { FacultyEmployeeCard } from "@/app/(main-website)/components/Cards/FacultyEmployeeCard";

type Props = {
  WordSchoolslug: string;
  // schoolCat: string;
};

const FacultyLoop = ({ WordSchoolslug }: Props) => {
  const [facultyList, setFacultyList] = useState<WordSchoolFaculties[]>([]);
  const [page, setPage] = useState(1);
  const [schoolFacultyId, setSchoolFacultyId] = useState(null);
  const [loading, setLoading] = useState(false);

  const [totalPages, setTotalPages] = useState(1); // 👈 added
  const perPage = 4;

  // STEP 1 — Get school faculty ID
  useEffect(() => {
    const fetchSchoolInfo = async () => {
      const info = await getSchoolInfoForFacultyBySlug(WordSchoolslug);

      let id = info[0]?.school_faculty?.[0];

      // 👉 If no id found & slug matches, set default id (16)
      if (!id && WordSchoolslug === "school-of-basic-and-applied-sciences") {
        id = 16;
      }

      setSchoolFacultyId(id);
    };

    fetchSchoolInfo();
  }, [WordSchoolslug]);

  // useEffect(() => {
  //   const fetchSchoolInfo = async () => {
  //     const info = await getSchoolInfoForFacultyBySlug(WordSchoolslug);

  //     const id = info[0]?.school_faculty?.[0];

  //     setSchoolFacultyId(id);
  //   };

  //   fetchSchoolInfo();
  // }, [WordSchoolslug]);

  // STEP 2 — Load first page
  useEffect(() => {
    if (!schoolFacultyId) return;

    const loadInitial = async () => {
      const { data, totalPages } = await getWordSchoolFaculty(
        schoolFacultyId,
        1,
        perPage
      );

      setFacultyList(data);

      setTotalPages(totalPages); // 👈 set total pages
    };

    loadInitial();
  }, [schoolFacultyId]);

  // STEP 3 — Load More button
  const handleLoadMore = async () => {
    if (!schoolFacultyId) return;
    if (page >= totalPages) return; // 👈 stop if last page

    setLoading(true);

    const nextPage = page + 1;

    const { data } = await getWordSchoolFaculty(
      schoolFacultyId,
      nextPage,
      perPage
    );

    setFacultyList((prev) => [...prev, ...data]);
    setPage(nextPage);
    setLoading(false);
  };

  return (
    <div className="pt-16 px-4 pb-4">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {facultyList.map((faculty) => (
          <FacultyEmployeeCard
            key={faculty.id}
            name={faculty.title?.rendered}
            imgId={faculty.featured_media}
            qual={faculty.acf?.["staff-qualification"]}
            desg={faculty.acf?.staff_designation}
            slug={faculty.slug}
          />
        ))}
      </div>

      {/* SHOW BUTTON ONLY IF MORE PAGES */}
      {page < totalPages && (
        <div className="flex justify-center mt-8">
          <Button
            onClick={handleLoadMore}
            disabled={loading}
            className="py-3.5 px-8 bg-[#051630] text-white font-bold"
          >
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default FacultyLoop;
