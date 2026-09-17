"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const API_URL =
  "https://forms.krmangalam.ac.in/back-desk/get-past-recruiters.php";

const INITIAL_RECORDS = 10;

interface Recruiter {
  id: number;
  company: string | null;
  role: string | null;
  hiring: number | null;
  sector: string | null;
  year: string | null;
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface ApiResponse {
  success: boolean;
  data: Recruiter[];
  pagination: Pagination;
  message?: string;
}

interface FilterResponse {
  success: boolean;
  filters: {
    companies: string[];
    years: string[];
  };
}

// ==================================================
// MAIN COMPONENT
// ==================================================

const PastRecruiters = () => {
  const [recruiters, setRecruiters] = useState<Recruiter[]>([]);

  const [company, setCompany] = useState("all");

  const [year, setYear] = useState("all");

  const [companies, setCompanies] = useState<string[]>([]);

  const [years, setYears] = useState<string[]>([]);

  const [page, setPage] = useState(1);

  const [pagination, setPagination] = useState<Pagination | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // ==================================================
  // GET FILTER OPTIONS
  // ==================================================

  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const response = await fetch(`${API_URL}?filter_options=1`, {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to load filters");
        }

        const result: FilterResponse = await response.json();

        if (!result.success) {
          throw new Error("Failed to load filters");
        }

        setCompanies(result.filters?.companies || []);

        setYears(result.filters?.years || []);
      } catch (error) {
        console.error("Filter error:", error);
      }
    };

    fetchFilters();
  }, []);

  // ==================================================
  // GET RECRUITERS
  // ==================================================

  useEffect(() => {
    const fetchRecruiters = async () => {
      try {
        setLoading(true);

        setError("");

        const params = new URLSearchParams();

        params.set("page", String(page));

        params.set("limit", String(INITIAL_RECORDS));

        // Company

        if (company !== "all") {
          params.set("company", company);
        }

        // Year

        if (year !== "all") {
          params.set("year", year);
        }

        const response = await fetch(`${API_URL}?${params.toString()}`, {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch recruiters");
        }

        const result: ApiResponse = await response.json();

        if (!result.success) {
          throw new Error(result.message || "Failed to fetch recruiters");
        }

        setRecruiters(result.data || []);

        setPagination(result.pagination);
      } catch (error) {
        console.error("Recruiters API error:", error);

        setError("Unable to load past recruiters. Please try again.");

        setRecruiters([]);

        setPagination(null);
      } finally {
        setLoading(false);
      }
    };

    fetchRecruiters();
  }, [page, company, year]);

  // ==================================================
  // COMPANY CHANGE
  // ==================================================

  const handleCompanyChange = (value: string) => {
    setCompany(value);

    setPage(1);
  };

  // ==================================================
  // YEAR CHANGE
  // ==================================================

  const handleYearChange = (value: string) => {
    setYear(value);

    setPage(1);
  };

  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16 md:px-10 lg:py-20 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        {/* ========================================= */}
        {/* HEADER */}
        {/* ========================================= */}

        <div className="mb-8 flex flex-col gap-6 lg:mb-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-newsreader text-[36px] leading-none tracking-[-0.025em] text-[#06264b] sm:text-[44px] md:text-[48px]">
              Past recruiters
            </h2>
          </div>

          {/* ========================================= */}
          {/* FILTERS */}
          {/* ========================================= */}

          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:w-[500px] xl:w-[520px]">
            <FilterSelect
              value={company}
              onChange={handleCompanyChange}
              placeholder="Search Company"
              options={companies}
            />

            <FilterSelect
              value={year}
              onChange={handleYearChange}
              placeholder="Search Year"
              options={years}
            />
          </div>
        </div>

        {/* ========================================= */}
        {/* TABLE */}
        {/* ========================================= */}

        <div className="border-t border-[#373737]">
          {/* ========================================= */}
          {/* DESKTOP HEADER */}
          {/* ========================================= */}

          <div className="hidden grid-cols-[2fr_1.15fr_1.45fr_1.2fr] border-b border-[#d7d5d1] py-3.5 md:grid">
            <TableHeading>Company</TableHeading>

            <TableHeading>Role</TableHeading>

            <TableHeading>Hiring</TableHeading>

            <TableHeading>Sector</TableHeading>
          </div>

          {/* ========================================= */}
          {/* LOADING */}
          {/* ========================================= */}

          {loading && (
            <>
              {Array.from({
                length: 5,
              }).map((_, index) => (
                <RecruiterSkeleton key={index} />
              ))}
            </>
          )}

          {/* ========================================= */}
          {/* ERROR */}
          {/* ========================================= */}

          {!loading && error && (
            <div className="px-4 py-12 text-center text-sm text-red-500">
              {error}
            </div>
          )}

          {/* ========================================= */}
          {/* RECORDS */}
          {/* ========================================= */}

          {!loading && !error && recruiters.length > 0 && (
            <div>
              {recruiters.map((recruiter) => (
                <RecruiterRow key={recruiter.id} recruiter={recruiter} />
              ))}
            </div>
          )}

          {/* ========================================= */}
          {/* NO RECORDS */}
          {/* ========================================= */}

          {!loading && !error && recruiters.length === 0 && (
            <div className="px-4 py-12 text-center text-sm text-[#666]">
              No recruiters found.
            </div>
          )}
        </div>

        {/* ========================================= */}
        {/* PAGINATION */}
        {/* ========================================= */}

        {!loading && !error && pagination && pagination.totalPages > 1 && (
          <div className="mt-7 flex items-center justify-center gap-3 sm:mt-8">
            {/* Previous */}

            <button
              type="button"
              disabled={!pagination.hasPreviousPage}
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              className="
                  border
                  border-[#d8d8d8]
                  px-4
                  py-2
                  text-sm
                  text-[#12233F]
                  transition-colors
                  hover:bg-[#06264b]
                  hover:text-white
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                  cursor-pointer
                "
            >
              Previous
            </button>

            {/* Page */}

            <span className="text-sm text-[#667085]">
              {pagination.page} / {pagination.totalPages}
            </span>

            {/* Next */}

            <button
              type="button"
              disabled={!pagination.hasNextPage}
              onClick={() => setPage((prev) => prev + 1)}
              className="
                  border
                  border-[#d8d8d8]
                  px-4
                  py-2
                  text-sm
                  text-[#12233F]
                  transition-colors
                  hover:bg-[#06264b]
                  hover:text-white
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                  cursor-pointer
                "
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

// ==================================================
// FILTER SELECT
// ==================================================

interface FilterSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}

const FilterSelect = ({
  value,
  onChange,
  placeholder,
  options,
}: FilterSelectProps) => {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-14
          w-full
          appearance-none
          border
          border-[#d5d3cf]
          bg-[#faf9f6]
          px-4
          pr-12
          text-[13px]
          text-[#282624]
          outline-none
          transition-colors
          focus:border-[#06264b]
          sm:h-16
          sm:px-5
          sm:text-[14px]
        "
      >
        <option value="all">{placeholder}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={18}
        strokeWidth={1.5}
        className="
          pointer-events-none
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-black
          sm:right-5
        "
      />
    </div>
  );
};

// ==================================================
// TABLE HEADING
// ==================================================

const TableHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="text-base font-medium uppercase  text-black tracking-[4px]">
      {children}
    </div>
  );
};

// ==================================================
// RECRUITER ROW
// ==================================================

interface RecruiterRowProps {
  recruiter: Recruiter;
}

const RecruiterRow = ({ recruiter }: RecruiterRowProps) => {
  return (
    <div
      className="
        border-b
        border-[#d7d5d1]
        py-5
        sm:py-6
        md:grid
        md:grid-cols-[2fr_1.15fr_1.45fr_1.2fr]
        md:items-center
        md:py-[19px]
      "
    >
      {/* Company */}

      <div className="mb-4 md:mb-0">
        <span className="mb-1.5 block text-[9px] font-medium uppercase tracking-[0.18em] text-[#999] md:hidden">
          Company
        </span>

        <p className="font-newsreader text-[19px] leading-tight text-[#171717] sm:text-[20px] md:text-2xl">
          {recruiter.company || "-"}
        </p>
      </div>

      {/* Mobile Details */}

      <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:contents">
        {/* Role */}

        <div>
          <span className="mb-1.5 block text-[9px] font-medium uppercase tracking-[0.18em] text-[#999] md:hidden">
            Role
          </span>

          <p className="text-[12px] leading-5 text-[#292929] sm:text-[13px] md:text-sm">
            {recruiter.role || "-"}
          </p>
        </div>

        {/* Hiring */}

        <div>
          <span className="mb-1.5 block text-[9px] font-medium uppercase tracking-[0.18em] text-[#999] md:hidden">
            Hiring
          </span>

          <p className="text-sm leading-5 text-[#292929] sm:text-[13px] md:text-sm">
            {recruiter.hiring ?? 0}
          </p>
        </div>

        {/* Sector */}

        <div className="col-span-2 md:col-span-1">
          <span className="mb-1.5 block text-sm font-medium uppercase tracking-[0.18em] text-[#999] md:hidden">
            Internship/Placement/PPO
          </span>

          <p className="text-[12px] leading-5 text-[#292929] sm:text-[13px] md:text-[12px]">
            {recruiter.sector || "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

// ==================================================
// SKELETON
// ==================================================

const RecruiterSkeleton = () => {
  return (
    <div
      className="
        animate-pulse
        border-b
        border-[#d7d5d1]
        py-5
        sm:py-6
        md:grid
        md:grid-cols-[2fr_1.15fr_1.45fr_1.2fr]
        md:items-center
        md:py-[19px]
      "
    >
      <div className="mb-4 md:mb-0">
        <div className="h-5 w-48 bg-[#e2e0dc]" />
      </div>

      <div className="mb-4 md:mb-0">
        <div className="h-4 w-32 bg-[#e2e0dc]" />
      </div>

      <div className="mb-4 md:mb-0">
        <div className="h-4 w-16 bg-[#e2e0dc]" />
      </div>

      <div>
        <div className="h-4 w-28 bg-[#e2e0dc]" />
      </div>
    </div>
  );
};

export default PastRecruiters;
