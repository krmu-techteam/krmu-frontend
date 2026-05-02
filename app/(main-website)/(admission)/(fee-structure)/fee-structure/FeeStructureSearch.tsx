"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllProgramme, ProgrammeItem } from "./FeeStructureProgrammeSearch";
function normalize(text: string) {
  return text.toLowerCase().replace(/[\.\s]/g, "");
}

const FeeStructureSearch = () => {
  const [query, setQuery] = useState("");
  const [programmes, setProgrammes] = useState<ProgrammeItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!query.trim()) {
        setProgrammes([]);
        return;
      }

      setLoading(true);
      try {
        const data = await getAllProgramme("");
        const filtered = data.filter((item) =>
          normalize(item.title).includes(normalize(query))
        );
        setProgrammes(filtered);
      } catch (err) {
        console.error(err);
      } 
      setLoading(false);
    };

    const delay = setTimeout(fetchData, 400); // debounce
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <section className="md:py-8 py-6 px-4 bg-gradient-to-br from-[#f1f5f9] to-[#f8fafc]">
      <div className="max-w-[750px] mx-auto w-full relative">
        {/* Input Search Container */}
        <div className="relative group">
          <div className="absolute left-6 top-1/2 -translate-y-1/2 text-[#0062aa] group-focus-within:scale-110 transition-transform duration-300">
            <Search className="w-5 h-5 stroke-[2.5]" />
          </div>
          <input
            type="text"
            placeholder="Search for a program (e.g. B.Tech, MBA)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-13 pl-16 pr-8 text-[17px] text-gray-800 bg-white border border-gray-200 rounded-sm shadow-[0_10px_35px_rgba(0,0,0,0.05)] focus:border-[#0062aa] focus:ring-8 focus:ring-[#0062aa]/5 transition-all duration-300 outline-none placeholder:text-gray-400 font-medium"
          />
        </div>

        {/* Search Result Dropdown */}
        {query.trim() !== "" && (
          <div className="absolute top-full left-0 right-0 bg-white rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.12)] z-50 overflow-hidden border border-gray-100">
            <div className="max-h-[450px] overflow-y-auto scrollbar-hide">
              {/* Loading State */}
              {loading && (
                <div className="flex flex-col items-center justify-center p-16 space-y-4">
                  <div className="w-8 h-8 border-3 border-gray-100 border-t-[#0062aa] rounded-full animate-spin"></div>
                  <p className="text-sm text-gray-400 font-medium tracking-wider uppercase">Searching programs...</p>
                </div>
              )}

              {/* No Results Found */}
              {!loading && programmes.length === 0 && (
                <div className="p-16 text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-200" />
                  </div>
                  <p className="text-gray-500 font-medium text-lg">No results found for "{query}"</p>
                </div>
              )}

              {/* Results List */}
              {!loading &&
                programmes.map((item) => (
                  <Link
                    key={item.id}
                    href={`/programs/${item.programmeslug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-6 py-3 hover:bg-[#0062aa] transition-all duration-200 group border-b border-gray-100/50 last:border-none"
                  >
                    <div className="flex flex-col">
                      <span className="text-[17px] font-semibold text-gray-800 group-hover:text-white transition-colors">
                        {item.title}
                      </span>
                    </div>
                    <div className="translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                       <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                       </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeeStructureSearch;
