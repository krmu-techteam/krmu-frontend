const publications = [
    "Trends in Biomaterials and Artificial Organs",
    "Journal of Water and Environmental Nanotechnology",
    "Chalcogenide Letters",
    "Engineers Society of Corrosion IDK Materials Protection",
    "Frontiers in Mechanical Engineering",
    "Drug Deliver Letters",
    "Discover Mental Health",
];

const PublicationPartners = () => {
    return (
        <section
            className="bg-[#F6F4EF] pb-14 sm:pb-16 md:pb-20 xl:pb-24 px-5 sm:px-6 md:px-10 xl:px-0"
            id="publication-partners"
        >
            <div className="max-w-6xl mx-auto">
                {/* Divider Line */}
                <div className="border-t border-[#D1C9B8] mb-10 sm:mb-14" />

                {/* Section Header */}
                <div className="text-left space-y-3 mb-8 sm:mb-10">
                    <h4 className="text-2xl sm:text-3xl font-bold font-lora text-[#1c2822] leading-tight">
                        Publication Partners
                    </h4>

                    <p className="text-xs sm:text-sm text-[#44504A] leading-relaxed">
                        Selected papers will be published in Scopus-indexed
                        journals, conference proceedings or as book chapters in
                        Edited volumes with valid ISBN and DOI, subject to peer
                        review and editorial approval.
                    </p>
                </div>

                {/* Publication Boxes (border only, no bg) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {publications.map((book, index) => (
                        <div
                            key={book}
                            className="border border-[#BFA878] rounded-[10px] p-4 flex items-center gap-3.5 bg-transparent transition-all group"
                        >
                            <span className="shrink-0 w-7 h-7 rounded-full border border-[#A9812F] text-[#A9812F] text-xs font-bold flex items-center justify-center">
                                {index + 1}
                            </span>

                            <p className="font-lora font-semibold text-sm sm:text-[15px] text-[#1C2822] leading-snug">
                                {book}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PublicationPartners;
