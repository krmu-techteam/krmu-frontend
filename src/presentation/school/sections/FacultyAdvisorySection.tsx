"use client";

import { useEffect, useRef } from "react";
import SectionDivider from "@/components/common/SectionDivider";
import { FACADV } from "@/lib/types/schools";
import {
    AdvisoryCards,
    FacultyAdvisoryCards,
} from "@/presentation/school/components";

type Props = {
    schoolCat: string;
    WordSchoolslug?: string;
    fac_adv: FACADV;
};

const FacultyAdvisorySection = ({ schoolCat, fac_adv }: Props) => {
    const isBoth = fac_adv?.fac_adv !== "Single";
    const sectionRef = useRef<HTMLElement>(null);

    // Keep scroll position anchored to #faculty when navigated to, even if other sections above take time to load
    useEffect(() => {
        if (typeof window === "undefined") return;

        const scrollToFaculty = () => {
            if (window.location.hash === "#faculty" && sectionRef.current) {
                const headerEl = document.querySelector("header");
                const headerH = headerEl
                    ? headerEl.getBoundingClientRect().height
                    : 80;
                const subNavH = 55;
                const offset = headerH + subNavH + 15;
                const elementTop =
                    sectionRef.current.getBoundingClientRect().top +
                    window.pageYOffset;

                window.scrollTo({
                    top: Math.max(0, elementTop - offset),
                    behavior: "smooth",
                });
            }
        };

        if (window.location.hash === "#faculty") {
            const t1 = setTimeout(scrollToFaculty, 200);
            const t2 = setTimeout(scrollToFaculty, 700);
            return () => {
                clearTimeout(t1);
                clearTimeout(t2);
            };
        }

        window.addEventListener("hashchange", scrollToFaculty);
        return () => window.removeEventListener("hashchange", scrollToFaculty);
    }, []);

    return (
        <section
            ref={sectionRef}
            id="faculty"
            className="relative pb-1 pt-10 md:pt-12 md:pb-4 xl:pt-16 xl:pb-10 min-h-[500px] md:min-h-[600px] bg-transparent font-poppins scroll-mt-[135px] md:scroll-mt-[145px] xl:scroll-mt-[155px]"
        >
            <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 lg:px-12">
                {/* Faculty List */}
                <div>
                    <h2 className="heading-primary mb-4 md:mb-8">
                        Faculty at {schoolCat}
                    </h2>
                    <FacultyAdvisoryCards schoolCat={schoolCat} />
                </div>

                {/* Advisory List (if applicable) */}
                {isBoth && (
                    <div className="mt-8 md:mt-12">
                        <h2 className="heading-primary mb-4 md:mb-8">
                            Advisory Board
                        </h2>
                        <AdvisoryCards schoolCat={schoolCat} />
                    </div>
                )}
            </div>
            <SectionDivider />
        </section>
    );
};

export default FacultyAdvisorySection;
