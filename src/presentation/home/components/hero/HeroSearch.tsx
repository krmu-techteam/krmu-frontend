"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, Search, Loader2, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import {
    searchSchoolProgrammes,
    searchPhdProgrammes,
} from "@/app/(main-website)/(programmes)/programmesApi/api";

interface HeroSearchProps {
    isOpen: boolean;
    onClose: () => void;
}

export const HeroSearch = ({ isOpen, onClose }: HeroSearchProps) => {
    const [mounted, setMounted] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");
     
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const fetchSuggestions = async () => {
            const searchTerm = query.trim();
            if (searchTerm.length < 2) {
                setSuggestions([]);
                return;
            }
            setIsSearching(true);
            try {
                // Fetch all data once (cached by Next.js) and filter locally for robust fuzzy matching
                const [schoolRes, phdRes] = await Promise.all([
                    searchSchoolProgrammes("", 1, 1000),
                    searchPhdProgrammes("", 1, 1000),
                ]);

                const schoolData = schoolRes?.data || [];
                const phdData = phdRes?.data || [];
                const allData = [...schoolData, ...phdData];

                // Clean user query: remove spaces and dots for fuzzy match (e.g. "b tech" -> "btech")
                const cleanSearch = searchTerm
                    .replace(/[\s.]/g, "")
                    .toLowerCase();

                const filtered = allData
                     
                    .filter((item: any) => {
                        const title = (
                            item.title ||
                            item.heading ||
                            ""
                        ).toLowerCase();
                        // Clean the target title as well
                        const cleanTitle = title.replace(/[\s.]/g, "");
                        return cleanTitle.includes(cleanSearch);
                    })
                    .slice(0, 6);

                setSuggestions(filtered);
            } catch (err) {
                console.error("Failed to fetch suggestions", err);
            } finally {
                setIsSearching(false);
            }
        };

        const timer = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(timer);
    }, [query]);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            inputRef.current?.focus();
            window.addEventListener("keydown", handleEsc);
        } else {
            setQuery("");
            setSuggestions([]);
        }
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[999] flex items-start justify-center transition-all duration-300 overflow-hidden pt-20 md:pt-[20vh]">
            {/* Black Background Overlay */}
            <div
                className="absolute inset-0 bg-black/50 cursor-pointer"
                onClick={onClose}
            />
            <div className="w-full max-w-2xl px-4 md:px-6 flex flex-col items-center animate-in fade-in zoom-in-95 duration-200 ease-out relative z-10 pb-4">
                <div className="w-full bg-[#061623] border border-white/10 rounded-[4px] overflow-hidden  flex flex-col">
                    {/* Top Search Input */}
                    <div className="flex items-center px-4 md:px-6 py-4  w-full relative group overflow-hidden shrink-0">
                        <Search
                            className="text-white/60 shrink-0"
                            size={22}
                            strokeWidth={1.5}
                        />
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search programs..."
                            className="w-full bg-transparent font-poppins border-none text-white pl-4 pr-10 md:pr-14 text-[16px] md:text-[18px] focus:outline-none focus:ring-0 placeholder-white/40 tracking-wide"
                        />
                        <button
                            onClick={onClose}
                            className="cursor-pointer text-white/90 opacity-0 translate-x-8 pointer-events-none group-focus-within:opacity-100 group-focus-within:translate-x-0 group-focus-within:pointer-events-auto transition-all duration-300 ease-out absolute right-4 md:right-6 shrink-0"
                            title="Close"
                        >
                            <X
                                className="text-white/60 shrink-0 hover:text-white transition-colors"
                                size={22}
                                strokeWidth={1.5}
                            />
                        </button>
                    </div>

                    {/* Suggestions or Loader */}
                    {query.trim().length > 0 && (
                        <div className="flex flex-col p-2 max-h-[60vh] md:max-h-[55vh] overflow-y-auto custom-scrollbar">
                            {isSearching ? (
                                <div className="flex justify-center py-10">
                                    <Loader2
                                        className="animate-spin text-white/50"
                                        size={24}
                                    />
                                </div>
                            ) : suggestions.length > 0 ? (
                                 
                                suggestions.map((item: any) => {
                                    const slug =
                                        item.programmeslug || item.phdslug;
                                    const titleStr = item.title
                                        ? item.title +
                                          (item.highlightitle
                                              ? ` ${item.highlightitle}`
                                              : "")
                                        : item.heading;
                                    const cleanTitle = (
                                        item.title
                                            ? item.title +
                                              (item.highlightitle
                                                  ? ` ${item.highlightitle}`
                                                  : "")
                                            : item.heading || ""
                                    ).replace(/<[^>]*>?/gm, "");

                                    return (
                                        <Link
                                            key={item.id}
                                            href={`/programs/${slug}`}
                                            onClick={onClose}
                                            title={cleanTitle}
                                            className="flex items-center gap-4 px-4 py-3 md:py-3.5 rounded-[4px] border border-transparent hover:border-white/10 hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-200 group"
                                        >
                                            <div className="text-[#00AEEF] group-hover:text-white shrink-0 transition-colors">
                                                <BookOpen
                                                    size={24}
                                                    strokeWidth={1.5}
                                                />
                                            </div>
                                            <div className="flex flex-col flex-1">
                                                <span
                                                    className="text-[15px] md:text-[16px] font-poppins font-medium text-white/90 group-hover:text-white transition-colors tracking-wide line-clamp-1"
                                                    dangerouslySetInnerHTML={{
                                                        __html: titleStr,
                                                    }}
                                                />
                                                {/* <span className="text-[12px] md:text-[13px] text-white/50 group-hover:text-white/80 transition-colors mt-0.5">
                          {item.programmeslug ? "Degree Programme" : "Ph.D. Programme"}
                        </span> */}
                                            </div>
                                            <ArrowRight
                                                size={18}
                                                className="text-white/90 group-hover:text-white/80 transition-all duration-300 shrink-0 group-hover:translate-x-1.5"
                                                strokeWidth={1.5}
                                            />
                                        </Link>
                                    );
                                })
                            ) : (
                                <div className="py-10 text-center text-white/40 text-sm tracking-wide">
                                    No results found for {query}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Footer */}
                    <div className="border-t border-white/5 bg-white/[0.02] px-4 py-3 flex justify-center items-center">
                        <span className="text-[12px] text-white/40 font-medium tracking-wide">
                            Press{" "}
                            <kbd className="px-1.5 py-0.5 bg-white/10 rounded-sm text-white/60 mx-1 border border-white/5 font-sans font-semibold">
                                ESC
                            </kbd>{" "}
                            to close
                        </span>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};
