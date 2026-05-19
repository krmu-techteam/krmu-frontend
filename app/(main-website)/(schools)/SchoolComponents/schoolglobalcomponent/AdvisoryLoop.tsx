"use client";

import { useState, useEffect } from "react";
import { AdvisoryEmployeeCard } from "@/app/(main-website)/components/Cards/AdvisoryEmployeeCard";
import { Button } from "@/components/ui/button";
import { getFacultyByCat } from "@/lib/api/schools";
import { FACULTYCARD } from "@/lib/types/schools";

type Props = {
  schoolCat: string;
};

const AdvisoryLoop = ({ schoolCat }: Props) => {
  const [faculties, setFaculties] = useState<FACULTYCARD[]>([]);
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFaculties = async () => {
      setLoading(true);
      const data = await getFacultyByCat(schoolCat);
      setFaculties(data || []);
      setLoading(false);
    };
    fetchFaculties();
  }, [schoolCat]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 5);
  };

  // ✅ Show only Advisory members
  const advisoryFaculties = faculties.filter(
    (faculty) =>
      faculty.faculty_type?.toLowerCase() === "advisory" ||
      faculty.faculty_type?.toLowerCase() === "both",
  );

  const visibleFaculties = advisoryFaculties.slice(0, visibleCount);

  if (visibleFaculties?.length === 0)
    return <div className="text-center text-black py-10">Loading ...</div>;
  return (
    <>
      <div className="flex flex-wrap justify-center pt-16 px-2 sm:px-4 pb-4 gap-5">
        {visibleFaculties.length > 0 ? (
          visibleFaculties.map((faculty) => (
<<<<<<< HEAD
            <AdvisoryEmployeeCard
              key={faculty?.id}
              name={faculty?.faculty_name}
              imgUrl={faculty?.faculty_img?.url}
              qual={faculty?.faculty_qualification}
              desg={faculty?.faculty_card_desg}
              slug={faculty?.facultyslug}
            />
=======
            <div key={faculty?.id} className="w-full sm:w-[272px] flex justify-center">
              <AdvisoryEmployeeCard
                name={faculty?.faculty_name}
                imgUrl={faculty?.faculty_img?.url}
                qual={faculty?.faculty_qualification}
                desg={faculty?.faculty_card_desg}
                slug={faculty?.facultyslug}
              />
            </div>
>>>>>>> 5079e22537d8e6c406bb14bec19c2431dc8b9fba
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            No advisory members found.
          </div>
        )}
      </div>

      {/* Load More Button */}
      {visibleCount < advisoryFaculties.length && (
        <div className="py-10 flex justify-center">
          <Button
            onClick={handleLoadMore}
            disabled={loading}
            className="py-3.5 px-8 bg-[#051630] text-white font-bold cursor-pointer"
          >
            {loading ? "Loading..." : "Load More"}
          </Button>
        </div>
      )}
    </>
  );
};

export default AdvisoryLoop;
