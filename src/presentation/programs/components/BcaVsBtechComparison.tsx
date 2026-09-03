import React from "react";

export default function BcaVsBtechComparison() {
    const comparisonData = [
        {
            parameter: "Duration",
            bca: "3 Years",
            btech: "4 Years",
        },
        {
            parameter: "Academic Depth",
            bca: "Application-focused",
            btech: "Engineering-level technical depth",
        },
        {
            parameter: "Curriculum",
            bca: "Programming & IT tools",
            btech: "Algorithms, AI, systems, networks",
        },
        {
            parameter: "Mathematics",
            bca: "Basic–Moderate",
            btech: "Advanced",
        },
        {
            parameter: "Career Scope",
            bca: "IT roles",
            btech: "Wider technical & engineering roles",
        },
        {
            parameter: "Higher Studies",
            bca: "Usually MCA",
            btech: "Can directly pursue M.Tech/MS",
        },
        {
            parameter: "Best Suited For",
            bca: "Quick job entry",
            btech: "Long-term tech careers",
        },
    ];

    return (
        <div className="w-full py-8 md:py-12">
            <div className="w-full mx-auto px-2 sm:px-4">
                {/* Section Header */}
                <div className="text-center mb-6 md:mb-8">
                    <h3 className="heading-primary mb-3 text-center text-white">
                        BCA vs B.Tech (Computer Science) Comparison
                    </h3>
                    <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto font-poppins font-light leading-relaxed">
                        Choosing between BCA and B.Tech in Computer Science?
                        Here’s a quick comparison to help you decide.
                    </p>
                </div>

                {/* Modern Grid Table */}
                <div className="rounded-2xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#06182c] to-[#000f1e] shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse font-poppins min-w-[640px]">
                            <thead>
                                <tr className="border-b border-white/15 text-white">
                                    <th className="px-6 py-5 bg-[#001224] text-xs font-semibold uppercase tracking-wider text-white/60 w-1/4">
                                        Parameter
                                    </th>
                                    <th className="px-6 py-5 bg-[#0a233c] text-center w-3/8 border-x border-white/10 text-white font-bold text-base sm:text-lg tracking-wide">
                                        BCA
                                    </th>
                                    <th className="px-6 py-5 bg-[#0b2f52] text-center w-3/8 text-white font-bold text-base sm:text-lg tracking-wide">
                                        B.Tech Computer Science
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-white/10">
                                {comparisonData.map((row, index) => (
                                    <tr
                                        key={index}
                                        className="transition-colors duration-150 hover:bg-blue-600/10 group"
                                    >
                                        {/* Parameter */}
                                        <td className="px-6 py-4 bg-[#001428]/80 text-sm sm:text-base font-semibold text-white/90 border-r border-white/10 group-hover:text-white">
                                            {row.parameter}
                                        </td>

                                        {/* BCA */}
                                        <td className="px-6 py-4 bg-[#001935]/30 text-center text-sm sm:text-base text-white/80 border-r border-white/10">
                                            {row.bca}
                                        </td>

                                        {/* B.Tech */}
                                        <td className="px-6 py-4 bg-[#002247]/30 text-center text-sm sm:text-base text-white font-medium">
                                            {row.btech}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
