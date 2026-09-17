"use client";
import React, { useState } from "react";
import {
    ugColumn1Notes,
    ugColumn2Notes,
    ugColumn3Notes,
    NoteItem,
} from "@/features/admission/scholarship";

const NotesUG = () => {
    const [showAll, setShowAll] = useState(false);

    // Combine all notes
    const allNotes: NoteItem[] = [
        ...ugColumn1Notes,
        ...ugColumn2Notes,
        ...ugColumn3Notes,
    ];

    // Show first 6 notes as in the design, or all when toggled
    const displayedNotes = showAll ? allNotes : allNotes.slice(0, 6);

    return (
        <div className="max-w-[1530px] mx-auto w-full px-6 md:px-8 xl:px-16 my-10">
            <div
                className="p-6 sm:p-8 md:p-10 bg-white"
                style={{
                    border: "4px solid transparent",
                    background:
                        "linear-gradient(white, white) padding-box, linear-gradient(180deg, #011833 0%, #DE0000 100%) border-box",
                    borderRadius: "10px",
                }}
            >
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-6">
                    Notes:
                </h3>
                <div className="flex flex-col gap-4">
                    {displayedNotes.map((item) => (
                        <div key={item.id} className="flex items-start gap-3.5">
                            <span className="w-5 h-5 rounded-full border border-black/80 flex items-center justify-center shrink-0 mt-0.5">
                                <svg
                                    className="w-3 h-3 text-black"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M5 12h14" />
                                    <path d="M12 5l7 7-7 7" />
                                </svg>
                            </span>
                            <div className="text-sm sm:text-base font-normal text-black leading-relaxed">
                                {item.text}
                                {item.list && (
                                    <div className="flex flex-col gap-1.5 my-2 pl-4 text-sm text-black/90">
                                        {item.list.map((sub, idx) => (
                                            <span key={idx}>{sub}</span>
                                        ))}
                                    </div>
                                )}
                                {item.extra}
                            </div>
                        </div>
                    ))}
                </div>

                {allNotes.length > 6 && (
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="mt-8 px-5 py-2 rounded-[6px] border border-[#D5D5D5] text-sm font-semibold text-black hover:bg-gray-50 flex items-center gap-2 transition-colors cursor-pointer"
                    >
                        {showAll ? "View Less" : "View All"} <span>&rarr;</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default NotesUG;
