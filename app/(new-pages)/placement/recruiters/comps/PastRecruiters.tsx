"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

interface Recruiter {
  id: number;
  company: string;
  role: string;
  hiring: number;
  sector: string;
  year: string;
}

const recruiters: Recruiter[] = [
  {
    id: 1,
    company: "Cloud Certitude Pvt Ltd",
    role: "Salesforce Trainee",
    hiring: 14,
    sector: "Financial Services",
    year: "2025",
  },
  {
    id: 2,
    company: "Cloud Certitude Pvt Ltd",
    role: "Salesforce Trainee",
    hiring: 14,
    sector: "Financial Services",
    year: "2025",
  },
  {
    id: 3,
    company: "Cloud Certitude Pvt Ltd",
    role: "Salesforce Trainee",
    hiring: 14,
    sector: "Financial Services",
    year: "2024",
  },
  {
    id: 4,
    company: "Cloud Certitude Pvt Ltd",
    role: "Salesforce Trainee",
    hiring: 14,
    sector: "Financial Services",
    year: "2024",
  },
  {
    id: 5,
    company: "Cloud Certitude Pvt Ltd",
    role: "Salesforce Trainee",
    hiring: 14,
    sector: "Financial Services",
    year: "2024",
  },
  {
    id: 6,
    company: "Cloud Certitude Pvt Ltd",
    role: "Salesforce Trainee",
    hiring: 14,
    sector: "Financial Services",
    year: "2023",
  },
  {
    id: 7,
    company: "Cloud Certitude Pvt Ltd",
    role: "Salesforce Trainee",
    hiring: 14,
    sector: "Financial Services",
    year: "2023",
  },
  {
    id: 8,
    company: "Cloud Certitude Pvt Ltd",
    role: "Salesforce Trainee",
    hiring: 14,
    sector: "Financial Services",
    year: "2023",
  },
];

const PastRecruiters = () => {
  const [company, setCompany] = useState("all");
  const [year, setYear] = useState("all");

  const companies = useMemo(
    () => [...new Set(recruiters.map((item) => item.company))],
    [],
  );

  const years = useMemo(
    () => [...new Set(recruiters.map((item) => item.year))],
    [],
  );

  const filteredRecruiters = useMemo(() => {
    return recruiters.filter((item) => {
      const companyMatch = company === "all" || item.company === company;
      const yearMatch = year === "all" || item.year === year;

      return companyMatch && yearMatch;
    });
  }, [company, year]);

  return (
    <section className="bg-[#f8f6f2] px-5 py-12 sm:px-8 sm:py-16 md:px-10 lg:py-20 xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 lg:mb-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-newsreader text-[36px] leading-none tracking-[-0.025em] text-[#06264b] sm:text-[44px] md:text-[48px]">
              Past recruiters
            </h2>
          </div>

          {/* Filters */}
          <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:w-[500px] xl:w-[520px]">
            <FilterSelect
              value={company}
              onChange={setCompany}
              placeholder="Search Company"
              options={companies}
            />

            <FilterSelect
              value={year}
              onChange={setYear}
              placeholder="Search Year"
              options={years}
            />
          </div>
        </div>

        {/* Recruiters Table */}
        <div className="border-t border-[#373737]">
          {/* Desktop Header */}
          <div className="hidden grid-cols-[2fr_1.15fr_1.45fr_1.2fr] border-b border-[#d7d5d1] py-3.5 md:grid">
            <TableHeading>Company</TableHeading>
            <TableHeading>Role</TableHeading>
            <TableHeading>Hiring</TableHeading>
            <TableHeading>Sector</TableHeading>
          </div>

          {/* Rows */}
          <div>
            {filteredRecruiters.length > 0 ? (
              filteredRecruiters.map((recruiter) => (
                <RecruiterRow key={recruiter.id} recruiter={recruiter} />
              ))
            ) : (
              <div className="px-4 py-12 text-center text-sm text-[#666]">
                No recruiters found.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

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
        className="h-14 w-full appearance-none border border-[#d5d3cf] bg-[#faf9f6] px-4 pr-12 text-[13px] text-[#282624] outline-none transition-colors focus:border-[#06264b] sm:h-16 sm:px-5 sm:text-[14px]"
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
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-black sm:right-5"
      />
    </div>
  );
};

const TableHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#222] lg:text-[11px] lg:tracking-[0.28em]">
      {children}
    </div>
  );
};

interface RecruiterRowProps {
  recruiter: Recruiter;
}

const RecruiterRow = ({ recruiter }: RecruiterRowProps) => {
  return (
    <div
      className="
        border-b border-[#d7d5d1]
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

        <p className="font-newsreader text-[19px] leading-tight text-[#171717] sm:text-[20px] md:text-[19px]">
          {recruiter.company}
        </p>
      </div>

      {/* Mobile details grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 md:contents">
        {/* Role */}
        <div>
          <span className="mb-1.5 block text-[9px] font-medium uppercase tracking-[0.18em] text-[#999] md:hidden">
            Role
          </span>

          <p className="text-[12px] leading-5 text-[#292929] sm:text-[13px] md:text-[12px]">
            {recruiter.role}
          </p>
        </div>

        {/* Hiring */}
        <div>
          <span className="mb-1.5 block text-[9px] font-medium uppercase tracking-[0.18em] text-[#999] md:hidden">
            Hiring
          </span>

          <p className="text-[12px] leading-5 text-[#292929] sm:text-[13px] md:text-[12px]">
            {recruiter.hiring}
          </p>
        </div>

        {/* Sector */}
        <div className="col-span-2 md:col-span-1">
          <span className="mb-1.5 block text-[9px] font-medium uppercase tracking-[0.18em] text-[#999] md:hidden">
            Sector
          </span>

          <p className="text-[12px] leading-5 text-[#292929] sm:text-[13px] md:text-[12px]">
            {recruiter.sector}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PastRecruiters;