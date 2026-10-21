"use client";

import React from "react";

interface SectionDividerProps {
    className?: string;
    maxWidth?: string;
}

export default function SectionDivider({
    className = "",
    maxWidth = "1400px",
}: SectionDividerProps) {
    return (
        <div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] z-10 ${className}`}
            style={{ maxWidth }}
        >
            <div
                className="w-full h-full opacity-80"
                style={{
                    background:
                        "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.35) 15%, #FFFFFF 50%, rgba(255, 255, 255, 0.35) 85%, transparent 100%)",
                }}
            />
        </div>
    );
}
