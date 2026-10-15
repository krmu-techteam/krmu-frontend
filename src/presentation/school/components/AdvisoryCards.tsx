"use client";

import { useState, useEffect } from "react";
import { AdvisoryCard } from "./AdvisoryCard";
import { getFacultyByCat } from "@/lib/api/schools";
import { FACULTYCARD } from "@/lib/types/schools";

type Props = {
    schoolCat: string;
};

const soetChandraAdvisory: FACULTYCARD = {
    id: 783,
    faculty_name: "Prof (Dr.) B. Chandra",
    facultyslug: "prof-dr-b-chandra",
    faculty_designation: "Adjunct Professor",
    faculty_card_desg: "Adjunct Professor",
    faculty_qualification: "Indian Institute of Technology, Delhi",
    faculty_type: "advisory",
    faculty_img: {
        url: "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Prof_Dr_B_Chandra_0d28e1ea68.png",
    } as any,
};

const AdvisoryCards = ({ schoolCat }: Props) => {
    const isSoet = schoolCat?.toUpperCase() === "SOET";
    const [faculties, setFaculties] = useState<FACULTYCARD[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let mounted = true;
        const fetchFaculties = async () => {
            setLoading(true);
            const data = await getFacultyByCat(schoolCat);
            if (!mounted) return;
            setFaculties(data || []);
            setLoading(false);
        };
        fetchFaculties();
        return () => {
            mounted = false;
        };
    }, [schoolCat]);

    // ✅ Show all other advisory members in the list (B. Chandra is featured in the main Dean-style box above)
    const advisoryFaculties = faculties.filter((faculty) => {
        const isAdvisory =
            faculty.faculty_type?.toLowerCase() === "advisory" ||
            faculty.faculty_type?.toLowerCase() === "both";
        if (!isAdvisory) return false;

        if (isSoet) {
            const isChandra =
                faculty.facultyslug === "prof-dr-b-chandra" ||
                faculty.faculty_name?.toLowerCase().includes("chandra");
            return !isChandra;
        }

        return true;
    });

    console.log("");

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
