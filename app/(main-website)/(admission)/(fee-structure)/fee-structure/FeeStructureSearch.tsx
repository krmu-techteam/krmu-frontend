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
    <section className="py-5 px-4">
      <div className="max-w-[400px] mx-auto w-full relative">

        {/* Input Search */}
        <form
          action="#"
          className="relative w-full"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Search Your Programmes"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-2 w-full rounded-full border-[#de6464] h-10 pl-4 pr-12 text-sm text-gray-600 outline-none"
          />

          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-[#de6464] w-4 h-4" />
        </form>

        {/* Search Result Dropdown */}
        {query.trim() !== "" && (
          <div
            className="w-full p-5 rounded-[8px] mt-3 bg-white absolute z-10"
            style={{ boxShadow: "0 0 3px -1px rgba(0,0,0,.3)" }}
          >
            {/* Loading */}
            {loading && <p className="text-sm">Searching...</p>}

            {/* No results */}
            {!loading && programmes.length === 0 && (
              <p className="text-sm text-gray-500">No programmes found.</p>
            )}

            {/* Results list */}
            {!loading &&
              programmes.map((item) => (
                <div key={item.id} className="mb-3 last:mb-0">
                  <Link href={`/programs/${item.programmeslug}`} target="_blank" rel="noopener noreferrer">
                    <span className="text-xl font-semibold hover:text-red-500">
                      {item.title}
                    </span>
                  </Link>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeeStructureSearch;
