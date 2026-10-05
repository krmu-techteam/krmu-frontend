"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MoveRight, Search } from "lucide-react";
import CareerJob from "../components/CareerJob";
import { KRMUWordUrl } from "@/app/constant";

const ACTIVE_FACULTIES = [
    {
        code: "SOET",
        name: "School of Engineering & Technology",
        desc: "Computer Science, AI & ML, Data Science, Cyber Security, Mechanical & Civil Engineering",
    },
    {
        code: "SOLA",
        name: "School of Liberal Arts",
        desc: "Psychology, English, Economics, Political Science, Journalism & Mass Communication",
    },
    {
        code: "SOMC",
        name: "School of Management & Commerce",
        desc: "Finance, Marketing, Business Analytics, International Business & HR Management",
    },
    {
        code: "SOLS",
        name: "School of Legal Studies",
        desc: "Corporate Law, Criminal Law, Constitutional Law, Cyber Law & IPR",
    },
];

const CareerJobListings = () => {
    const [search, setSearch] = useState("");
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    const abortRef = useRef<AbortController | null>(null);

    // Optimized Fetch Function
    const fetchJobs = async (text: string) => {
        // Cancel previous request
        if (abortRef.current) {
            abortRef.current.abort();
        }

        const controller = new AbortController();
        abortRef.current = controller;
        const url = `${KRMUWordUrl}/careers2/wp-json/wp/v2/awsm_job_openings?page=1&per_page=60&_fields=id,slug,title.rendered&search=${encodeURIComponent(
            text
        )}&search_columns[]=post_title`;

        try {
            setLoading(true);
            const res = await fetch(url, { signal: controller.signal });
            const data = await res.json();
            setJobs(data);
        } catch (err) {
            if (err instanceof DOMException && err.name === "AbortError") {
                return; // ignore abort errors
            }
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    // Debounce (250ms)
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchJobs(search);
        }, 250);

        return () => clearTimeout(timer);
    }, [search]);

    // Load all jobs initially
    useEffect(() => {
        fetchJobs("");
    }, []);

    return (
        <section className="pt-12 pb-24 bg-transparent">
            <div className="max-w-[1440px] mx-auto w-full px-4 md:px-8 lg:px-12">
                {/* SEARCH UI */}
                <div className="max-w-[500px] mx-auto w-full py-8">
                    <div className="relative flex items-center w-full rounded-full border border-white/20 p-1.5">
                        <Search className="w-5 h-5 text-white/50 ml-3.5 shrink-0" />
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-transparent px-3 py-2 text-white placeholder-white/40 text-sm md:text-base outline-none"
                            placeholder="Search by job title..."
                        />
                        <button
                            type="button"
                            aria-label="Search"
                            className="bg-[#164744] hover:bg-[#1B3937] text-white p-3 rounded-full transition-all duration-300 shadow-md hover:scale-105 active:scale-95 shrink-0 group cursor-pointer"
                        >
                            <MoveRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* RESULTS */}
                <div className="flex flex-col gap-[15px]">
                    {loading && (
                        <div className="flex items-center justify-center py-10 gap-3">
                            <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            <p className="text-white/70 text-sm">
                                Searching openings...
                            </p>
                        </div>
                    )}

                    {!loading &&
                        jobs?.map((job: any) => (
                            <CareerJob
                                key={job.id}
                                title={job.title.rendered}
                                slug={job.slug}
                            />
                        ))}

                    {!loading && jobs?.length === 0 && (
                        <div className="w-full rounded-2xl bg-white/[0.04] border border-white/10 p-6 md:p-10 backdrop-blur-sm">
                            <div className="text-center max-w-2xl mx-auto mb-8">
                                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#e7c268]/15 text-[#e7c268] border border-[#e7c268]/30 mb-3 tracking-wider uppercase">
                                    Active Faculty Recruitment
                                </span>
                                <h3 className="text-2xl md:text-3xl font-fraunces font-bold text-white mb-3">
                                    We Are Actively Recruiting Across Schools
                                </h3>
                                <p className="text-white/80 text-sm md:text-base leading-relaxed">
                                    {search
                                        ? `No specific openings matching "${search}". However, recruitment is actively open for faculty and leadership positions across our core schools:`
                                        : "K.R. Mangalam University invites applications from distinguished academicians, researchers, and educators across our core faculties:"}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                {ACTIVE_FACULTIES.map((faculty) => (
                                    <div
                                        key={faculty.code}
                                        className="p-5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00a2ff]/40 transition-colors"
                                    >
                                        <div className="flex items-center gap-2.5 mb-2">
                                            <span className="font-bold text-xs text-[#38bdf8] bg-[#00a2ff]/15 px-2.5 py-1 rounded">
                                                {faculty.code}
                                            </span>
                                            <h4 className="font-semibold text-white text-base">
                                                {faculty.name}
                                            </h4>
                                        </div>
                                        <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                                            {faculty.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 border-t border-white/10 text-center">
                                <a
                                    href="mailto:careers@krmangalam.edu.in?subject=Application for Faculty Position - KRMU"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#E31B23] hover:bg-[#c6151d] text-white font-medium text-sm transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                                >
                                    <Mail className="w-4 h-4" />
                                    Send Your CV to careers@krmangalam.edu.in
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CareerJobListings;
