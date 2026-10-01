import React from "react";
import Link from "next/link";
import { ChevronRight, Compass } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-[#061623] pt-[130px] md:pt-[160px] pb-12 md:pb-16 text-white">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav
                    className="flex items-center gap-2 text-sm text-white/80 mb-4"
                    aria-label="Breadcrumb"
                >
                    <Link
                        href="/"
                        className="hover:text-white transition-colors"
                    >
                        Home
                    </Link>
                    <ChevronRight className="w-3.5 h-3.5 text-white/60" />
                    <span className="text-white font-medium">Sitemap</span>
                </nav>

                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs md:text-sm font-medium text-white mb-4">
                        <Compass className="w-4 h-4 text-white" />
                        <span>University Directory &amp; Navigation</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                        Website Sitemap
                    </h1>

                    <div className="h-1 w-20 bg-[#f8f8f8] rounded-full my-4" />

                    <p className="text-white text-sm md:text-base font-light leading-relaxed">
                        Explore the complete directory of academic programmes,
                        schools, admissions, research centres, placements, and
                        campus life at K.R. Mangalam University.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
