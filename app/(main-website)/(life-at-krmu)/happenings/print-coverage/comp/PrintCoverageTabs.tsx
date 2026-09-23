"use client";

import { useEffect, useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import PrintCoverageCard from "./PrintCoverageCard";
import {
  getAllPrintCoverageYears,
  getPrintCoverageAccordingToYear,
} from "@/lib/api/print-coverages";
import {
  DataItem,
  PrintCoverageYearItem,
} from "@/lib/types/print-coverage";

const parseCoverageDate = (value: unknown): number => {
  if (!value) return 0;

  if (value instanceof Date) {
    return value.getTime();
  }

  if (typeof value !== "string") {
    return 0;
  }

  // Convert:
  // 23rd Sep 2026 → 23 Sep 2026
  // 1st Jan 2026  → 1 Jan 2026
  // 2nd Jan 2026 → 2 Jan 2026
  // 3rd Jan 2026 → 3 Jan 2026
  const dateString = value
    .trim()
    .replace(/(\d{1,2})(st|nd|rd|th)/gi, "$1");

  const timestamp = new Date(dateString).getTime();

  return Number.isNaN(timestamp) ? 0 : timestamp;
};

const getCoverageDate = (item: DataItem): number => {
  // Convert through unknown first to satisfy TypeScript
  const record = item as unknown as Record<string, unknown>;

  const preferredKeys = [
    "date",
    "Date",
    "coverageDate",
    "coverage_date",
    "printDate",
    "print_date",
    "eventDate",
    "event_date",
    "publishedDate",
    "published_date",
    "publicationDate",
    "publication_date",
    "publishDate",
    "publish_date",
  ];

  // Check common date fields first
  for (const key of preferredKeys) {
    if (key in record) {
      const timestamp = parseCoverageDate(record[key]);

      if (timestamp > 0) {
        return timestamp;
      }
    }
  }

  // Fallback: check any property containing date-related words
  const possibleDateKeys = Object.keys(record).filter((key) => {
    const normalizedKey = key.toLowerCase();

    return (
      normalizedKey.includes("date") ||
      normalizedKey.includes("published") ||
      normalizedKey.includes("publication") ||
      normalizedKey.includes("event")
    );
  });

  for (const key of possibleDateKeys) {
    const timestamp = parseCoverageDate(record[key]);

    if (timestamp > 0) {
      return timestamp;
    }
  }

  return 0;
};

const PrintCoverageTabs = () => {
  const [years, setYears] = useState<string[]>([]);
  const [activeYear, setActiveYear] = useState<string>("all");
  const [coverageData, setCoverageData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch years
  useEffect(() => {
    async function fetchYears() {
      try {
        const data: PrintCoverageYearItem[] | undefined =
          await getAllPrintCoverageYears();

        const yearsList = (data ?? [])
          .map((item) => String(item.Years))
          .filter(Boolean)
          .sort((a, b) => Number(b) - Number(a));

        setYears(yearsList);
      } catch (error) {
        console.error(
          "Failed to fetch print coverage years:",
          error
        );

        setYears([]);
      }
    }

    fetchYears();
  }, []);

  // Fetch coverage data
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        let data: DataItem[] = [];

        if (activeYear === "all") {
          // years is already sorted:
          // 2026, 2025, 2024, ...
          const promises = years.map((year) =>
            getPrintCoverageAccordingToYear(Number(year))
          );

          const results = await Promise.all(promises);

          data = results
            .filter(
              (result): result is DataItem[] =>
                Array.isArray(result)
            )
            .flat();
        } else {
          const result =
            await getPrintCoverageAccordingToYear(
              Number(activeYear)
            );

          if (Array.isArray(result)) {
            data = result;
          }
        }

        // Latest date first
        data.sort((a, b) => {
          const dateA = getCoverageDate(a);
          const dateB = getCoverageDate(b);

          return dateB - dateA;
        });

        setCoverageData(data);
      } catch (error) {
        console.error(
          "Failed to fetch print coverage data:",
          error
        );

        setCoverageData([]);
      } finally {
        setLoading(false);
      }
    }

    if (years.length > 0) {
      fetchData();
    }
  }, [activeYear, years]);

  return (
    <section className="py-16 bg-[url(/bg-gradient.webp)] bg-cover bg-no-repeat px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <Tabs
          value={activeYear}
          onValueChange={setActiveYear}
        >
          <TabsList className="bg-transparent mt-4 mb-14 flex-wrap gap-2">
            <TabsTrigger
              value="all"
              className="rounded-full px-5 border border-white not-last:mr-[30px] text-base py-4 text-white data-[state=active]:text-black cursor-pointer"
            >
              All
            </TabsTrigger>

            {years.map((year) => (
              <TabsTrigger
                key={year}
                value={year}
                className="rounded-full px-5 border border-white not-last:mr-[30px] text-base py-4 text-white data-[state=active]:text-black cursor-pointer"
              >
                {year}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-28 sm:mt-0">
            <TabsContent value={activeYear}>
              {loading ? (
                <p className="text-white">
                  Loading...
                </p>
              ) : coverageData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                  {coverageData.map((item, index) => (
                    <PrintCoverageCard
                      key={index}
                      data={item}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-white">
                  No data available
                </p>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default PrintCoverageTabs;