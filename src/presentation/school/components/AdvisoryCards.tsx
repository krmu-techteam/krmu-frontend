"use client";

import { useState, useEffect } from "react";
import { AdvisoryCard } from "./AdvisoryCard";
import { getFacultyByCat } from "@/lib/api/schools";
import { FACULTYCARD } from "@/lib/types/schools";

type Props = {
    schoolCat: string;
};

const AdvisoryCards = ({ schoolCat }: Props) => {
    const [faculties, setFaculties] = useState<FACULTYCARD[]>([]);
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

    // ✅ Show only Advisory members
    const advisoryFaculties = faculties.filter(
        (faculty) =>
            faculty.faculty_type?.toLowerCase() === "advisory" ||
            faculty.faculty_type?.toLowerCase() === "both"
    );

    return (
        <div className="font-poppins mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {advisoryFaculties.length > 0 ? (
                    advisoryFaculties.map((faculty) => (
                        <div
                            key={faculty?.id}
                            className="w-full flex justify-center h-full"
                        >
                            <AdvisoryCard
                                schoolCat={schoolCat}
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
        </div>
    );
};

export default AdvisoryCards;
