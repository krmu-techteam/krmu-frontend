"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllProgramme } from "../../(admission)/(fee-structure)/fee-structure/FeeStructureProgrammeSearch";
import { Search } from "lucide-react";

interface ProgrammeItem {
  id: number;
  documentId: string;
  title: string;
  programmeslug: string;
}

interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
function normalize(text: string) {
  return text.toLowerCase().replace(/[\.\s]/g, "");
}
const HomeYourJourneyForm = () => {
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
        const normalizedQuery = normalize(query);
        const filtered = data.filter((item) =>
          normalize(item.title).includes(normalizedQuery),
        );

        // Rank matches: whole-word match (e.g. "MA" in "MA English") > prefix
        // match on normalized title > generic substring match.
        const rawQuery = query.toLowerCase().replace(/\./g, "").trim();
        const escapedQuery = rawQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const wordRe = new RegExp(`(^|\\s)${escapedQuery}(\\s|$)`);
        const rankMatch = (title: string): number => {
          const lowered = title.toLowerCase().replace(/\./g, "");
          if (wordRe.test(lowered)) return 0;
          if (normalize(title).startsWith(normalizedQuery)) return 1;
          return 2;
        };

        const sorted = filtered
          .map((item, idx) => ({
            item,
            rank: rankMatch(item.title),
            idx,
          }))
          .sort((a, b) => a.rank - b.rank || a.idx - b.idx)
          .map(({ item }) => item);

        setProgrammes(sorted);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    const delay = setTimeout(fetchData, 400);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="relative w-full  ">
      <form onSubmit={(e) => e.preventDefault()} className="relative w-full  ">
        <Search className="absolute left-[5rem] sm:left-3 top-7 transform -translate-y-1/2 text-[#7f8b80]" />

        {/* Search Input */}
        <input
          type="search"
          placeholder="Search Your Programmes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full  flex items-center justify-center  gap-2 h-14 rounded-md font-medium transition-all  text-[14px] md:text-lg leading-none tracking-wide relative overflow-hidden group text-[#7f8b80] border-1 border-[#001732]  shadow-lg pl-[7rem] sm:pl-10  mb-2.5 "
        />

        {/* Submit Button */}
      </form>

      {/* Dropdown Results */}
      {query.trim() !== "" && (
        <div
          className="absolute left-0 right-0 mt-2 bg-white rounded-md p-4 z-20
               max-h-[300px] overflow-y-auto"
          style={{ boxShadow: "0 0 6px -1px #001732 " }}
        >
          {loading && <p className="text-sm">Searching...</p>}

          {!loading && programmes.length === 0 && (
            <p className="text-sm text-gray-500">No programmes found.</p>
          )}

          {!loading &&
            programmes.map((item) => (
              <div key={item.id} className="mb-3 last:mb-0">
                <Link
                  href={`/programs/${item.programmeslug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-lg font-semibold text-black hover:text-[#cb000d] cursor-pointer">
                    {item.title}
                  </span>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default HomeYourJourneyForm;
