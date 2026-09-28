"use client";

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

    if (!facDatas || !facDatas.length) return null;

    return (
        <div className="font-poppins mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
                {facDatas.map((faculty) => (
                    <div
                        key={faculty.id}
                        className="w-full flex justify-center h-full"
                    >
                        <FacultyAdvisoryCard
                            schoolCat={schoolCat}
                            name={faculty.title?.rendered ?? ""}
                            imgURL={faculty.featured_media_url ?? ""}
                            qual={faculty.acf?.["staff-qualification"] ?? ""}
                            desg={faculty.acf?.staff_designation ?? ""}
                            slug={faculty.slug}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacultyAdvisoryCards;
