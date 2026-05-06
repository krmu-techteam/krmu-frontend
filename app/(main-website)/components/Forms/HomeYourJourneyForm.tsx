"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllProgramme } from "../../(admission)/(fee-structure)/fee-structure/FeeStructureProgrammeSearch";

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
function normalize(text:string) {
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
        const filtered = data.filter((item) =>
          normalize(item.title).includes(normalize(query))
        );
        setProgrammes(filtered);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    const delay = setTimeout(fetchData, 400);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="relative w-full">
      <form onSubmit={(e) => e.preventDefault()}>
        {/* Search Input */}
        <input
          type="search"
          placeholder="Search Your Programmes"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="text-center max-w-xs w-full bg-white font-semibold p-2.5 mb-2.5 rounded-md h-14 text-xl outline-none text-[#0160af] border-2 border-[#0160af]"
        />

        {/* Submit Button */}
    
      </form>

      {/* Dropdown Results */}
      {query.trim() !== "" && (
        <div
          className="absolute left-0 right-0 mt-2 bg-white rounded-md p-4 z-20
               max-h-[300px] overflow-y-auto"
          style={{ boxShadow: "0 0 6px -1px rgba(0,0,0,.3)" }}
        >
          {loading && <p className="text-sm">Searching...</p>}

          {!loading && programmes.length === 0 && (
            <p className="text-sm text-gray-500">No programmes found.</p>
          )}

          {!loading &&
            programmes.map((item) => (
              <div key={item.id} className="mb-3 last:mb-0">
                <Link href={`/programs/${item.programmeslug}`} target="_blank" rel="noopener noreferrer">
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
