"use client";

import { useEffect, useRef } from "react";
import SectionDivider from "@/components/common/SectionDivider";
import Image from "next/image";
import Link from "next/link";
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
    const isBoth =
        fac_adv?.fac_adv !== "Single" || schoolCat?.toUpperCase() === "SOET";
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

                {/* Section Divider between Faculty and Advisory */}
                {isBoth && (
                    <div className="relative w-full h-[1px] my-10 md:my-14">
                        <SectionDivider />
                    </div>
                )}

                {/* Advisory List (if applicable) */}
                {isBoth && (
                    <div>
                        {schoolCat?.toUpperCase() === "SOET" ? (
                            <div>
                                {/* Featured B. Chandra Box (styled like Meet the Dean) */}
                                <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-8 mb-8">
                                    {/* Left Column: Image and Details */}
                                    <div className="w-full md:w-[260px] lg:w-[280px] flex flex-col items-center md:items-start text-center md:text-left shrink-0">
                                        <Link
                                            href="/faculty/prof-dr-b-chandra"
                                            className="bg-white w-full rounded-[4px] overflow-hidden mb-4 flex justify-center items-center shadow-xl group block"
                                        >
                                            <Image
                                                src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Prof_Dr_B_Chandra_0d28e1ea68.png"
                                                width={358}
                                                height={465}
                                                alt="Prof (Dr.) B. Chandra - Advisory Board"
                                                className="w-full h-auto object-contain"
                                            />
                                        </Link>
                                    </div>

                                    {/* Right Column: Title and Content */}
                                    <div className="flex-1 text-white flex flex-col justify-start">
                                        <div className="text-white w-full mb-6">
                                            <Link href="/faculty/prof-dr-b-chandra">
                                                <h3 className="text-2xl font-bold mb-1 font-serif transition-colors">
                                                    Prof (Dr.) B. Chandra
                                                </h3>
                                            </Link>
                                            <p className="text-sm uppercase tracking-wide text-[#09b] font-medium mb-1">
                                                Adjunct Professor
                                            </p>
                                            <p className="text-sm text-white/80 font-medium">
                                                Indian Institute of Technology,
                                                Delhi
                                            </p>
                                        </div>

                                        <div className="text-md text-white/90 text-justify md:text-left leading-relaxed space-y-4 font-normal">
                                            <p>
                                                Dr. (Mrs.) B. Chandra is an
                                                Adjunct Professor at the School
                                                of Information Technology,
                                                Indian Institute of Technology
                                                Delhi (IIT Delhi). With
                                                distinguished academic and
                                                research experience, she has
                                                served as Professor in the
                                                Computer Science Group,
                                                Department of Mathematics, IIT
                                                Delhi, and as Head of the
                                                Department from 2004 to 2007.
                                                Her research expertise
                                                encompasses Machine Learning,
                                                Deep Learning, Neural Networks,
                                                Data Mining, Feature Selection,
                                                and Natural Language Processing.
                                                She has guided 15 Ph.D.
                                                scholars, supervised over 180
                                                M.Tech. projects, and published
                                                more than 80 research papers in
                                                reputed journals and
                                                conferences. She has also
                                                authored books and led several
                                                sponsored research and
                                                consultancy projects.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider between Featured Chandra Box and Advisory Grid */}
                                <div className="relative w-full h-[1px] my-10 md:my-14">
                                    <SectionDivider />
                                </div>

                                {/* Rest of Advisory Board Grid List */}
                                <div className="mt-8">
                                    <h3 className="heading-primary mb-4 md:mb-8 text-xl sm:text-2xl">
                                        Advisory Board
                                    </h3>
                                    <AdvisoryCards schoolCat={schoolCat} />
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h2 className="heading-primary mb-4 md:mb-8">
                                    Advisory Board
                                </h2>
                                <AdvisoryCards schoolCat={schoolCat} />
                            </div>
                        )}
                    </div>
                )}
            </div>
            <SectionDivider />
        </section>
    );
};

export default FacultyAdvisorySection;
