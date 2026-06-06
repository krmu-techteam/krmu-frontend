"use client";

import React, { useEffect, useRef, useState } from 'react';
import { X, Search, Loader2, GraduationCap, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { searchSchoolProgrammes, searchPhdProgrammes } from '@/app/(main-website)/(programmes)/programmesApi/api';

interface HeroSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HeroSearch = ({ isOpen, onClose }: HeroSearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

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
          searchPhdProgrammes("", 1, 1000)
        ]);
        
        const schoolData = schoolRes?.data || [];
        const phdData = phdRes?.data || [];
        const allData = [...schoolData, ...phdData];

        // Clean user query: remove spaces and dots for fuzzy match (e.g. "b tech" -> "btech")
        const cleanSearch = searchTerm.replace(/[\s.]/g, '').toLowerCase();

        const filtered = allData.filter((item) => {
          const title = (item.title || item.heading || "").toLowerCase();
          // Clean the target title as well
          const cleanTitle = title.replace(/[\s.]/g, '');
          return cleanTitle.includes(cleanSearch);
        }).slice(0, 6);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center transition-all duration-300 overflow-hidden pt-[15vh] md:pt-[20vh]">
      {/* Base Light Blur for the whole screen */}
      <div className="absolute inset-0 bg-[#04101A]/30 backdrop-blur-sm" />
      
      {/* Heavy Blur only in the center, fading out to the left and right */}
      <div 
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl backdrop-blur-xl pointer-events-none"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      />
      <div className="w-full max-w-2xl px-6 flex flex-col items-center animate-in fade-in zoom-in-95 duration-200 ease-out relative z-10">
        <div className="w-full bg-white/[0.05] border border-white/10 rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl flex flex-col">
          {/* Top Search Input */}
          <div className="flex items-center px-4 md:px-6 py-4 border-b border-white/10 w-full relative">
            <Search className="text-white/60 shrink-0" size={22} strokeWidth={1.5} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search programs..."
              className="w-full bg-transparent border-none text-white px-4 text-lg md:text-[19px] focus:outline-none focus:ring-0 placeholder-white/40 tracking-wide"
            />
            <button
              onClick={onClose}
              className="cursor-pointer text-white/90"
              title="Close"
            >
              <X className="text-white/60 shrink-0" size={22} strokeWidth={1.5}/>
            </button>
          </div>

          {/* Suggestions or Loader */}
          {query.trim().length > 0 && (
            <div className="flex flex-col p-2 max-h-[55vh] overflow-y-auto custom-scrollbar">
              {isSearching ? (
                <div className="flex justify-center py-10">
                  <Loader2 className="animate-spin text-white/50" size={24} />
                </div>
              ) : suggestions.length > 0 ? (
                suggestions.map((item) => {
                  const slug = item.programmeslug || item.phdslug;
                  const titleStr = item.title 
                    ? (item.title + (item.highlightitle ? ` ${item.highlightitle}` : "")) 
                    : item.heading;
                  const cleanTitle = (item.title 
                    ? (item.title + (item.highlightitle ? ` ${item.highlightitle}` : "")) 
                    : item.heading || "").replace(/<[^>]*>?/gm, '');

                  return (
                    <Link
                      key={item.id}
                      href={`/programs/${slug}`}
                      onClick={onClose}
                      title={cleanTitle}
                      className="flex items-center gap-4 px-4 py-3 md:py-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-300 group"
                    >
                      <div className="text-[#00AEEF] group-hover:text-white shrink-0 transition-colors">
                        <BookOpen size={24} strokeWidth={1.5} />
                      </div>
                      <div className="flex flex-col flex-1">
                        <span 
                          className="text-[15px] md:text-[16px] font-medium text-white/90 group-hover:text-white transition-colors tracking-wide line-clamp-1"
                          dangerouslySetInnerHTML={{ __html: titleStr }}
                        />
                        {/* <span className="text-[12px] md:text-[13px] text-white/50 group-hover:text-white/80 transition-colors mt-0.5">
                          {item.programmeslug ? "Degree Programme" : "Ph.D. Programme"}
                        </span> */}
                      </div>
                      <ArrowRight size={18} className="text-white/90 group-hover:text-white/80 transition-all duration-300 shrink-0 group-hover:translate-x-1.5" strokeWidth={1.5} />
                    </Link>
                  );
                })
              ) : (
                <div className="py-10 text-center text-white/40 text-sm tracking-wide">
                  No results found for "{query}"
                </div>
              )}
            </div>
          )}

          {/* Footer */}
          <div className="border-t border-white/5 bg-white/[0.02] px-4 py-3 flex justify-center items-center">
            <span className="text-[12px] text-white/40 font-medium tracking-wide">
              Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded-sm text-white/60 mx-1 border border-white/5 font-sans font-semibold">ESC</kbd> to close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
