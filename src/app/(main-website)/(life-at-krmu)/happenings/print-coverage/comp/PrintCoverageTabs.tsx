"use client";

import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrintCoverageCard from "./PrintCoverageCard";
import {
  getAllPrintCoverageYears,
  getPrintCoverageAccordingToYear,
} from "@/lib/api/print-coverages";
import { DataItem, PrintCoverageYearItem } from "@/lib/types/print-coverage";

const PrintCoverageTabs = () => {
  const [years, setYears] = useState<string[]>([]);
  const [activeYear, setActiveYear] = useState<string>("all");
  const [coverageData, setCoverageData] = useState<DataItem[]>([]);

  useEffect(() => {
    async function fetchYears() {
      const data: PrintCoverageYearItem[] | undefined =
        await getAllPrintCoverageYears();
      const yearsList = (data ?? []).map((item) => item.Years);
      setYears(yearsList);
    }
    fetchYears();
  }, []);

  // fetch coverage data based on selected year
  useEffect(() => {
    async function fetchData() {
      let data: DataItem[] = [];

      if (activeYear === "all") {
        const promises = years.map((year) =>
          getPrintCoverageAccordingToYear(Number(year))
        );
        const results = await Promise.all(promises);

        // Filter out undefined and flatten
        data = results.filter((res): res is DataItem[] => !!res).flat();
      } else {
        const result = await getPrintCoverageAccordingToYear(
          Number(activeYear)
        );
        if (result) data = result;
      }

      setCoverageData(data);
    }

    if (years.length > 0) fetchData();
  }, [activeYear, years]);

  return (
    <section className="py-16 bg-[url(/bg-gradient.webp)] bg-cover bg-no-repeat px-4">
      <div className="max-w-[1664px] mx-auto w-full">
        <Tabs value={activeYear} onValueChange={setActiveYear}>
          <TabsList className="bg-transparent mt-4 mb-14 flex-wrap gap-2">
            <TabsTrigger
              value="all"
              className="rounded-full px-5 border border-white not-last:mr-[30px] text-base py-4 text-white data-[state=active]:text-black cursor-pointer"
            >
              All
            </TabsTrigger>
            {years.map((year, i) => (
              <TabsTrigger
                key={i}
                value={year}
                className="rounded-full px-5 border border-white not-last:mr-[30px]  text-base py-4 text-white data-[state=active]:text-black cursor-pointer"
              >
                {year}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-28 sm:mt-0">
            <TabsContent value={activeYear}>
              {coverageData.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                  {coverageData.map((item, i) => (
                    <PrintCoverageCard key={i} data={item} />
                  ))}
                </div>
              ) : (
                <p className="text-white">No data available</p>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default PrintCoverageTabs;
