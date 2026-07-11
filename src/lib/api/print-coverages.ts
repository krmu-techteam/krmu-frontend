import { FETCH_STRAPI_URL } from "@/app/constant";
import {
  PrintCoverageResponse,
  PrintCoverageYearsResponse,
} from "../types/print-coverage";

export async function getPrintCoverageAccordingToYear(year: number = 2025) {
  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/print-coverages?filters[print_coverage_years][Years][$eq]=${year}&populate[upload_data]=true&populate[print_coverage_years]=true`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch Print Coverage Data");
  const json: PrintCoverageResponse = await res.json();
  return json.data;
}

export async function getAllPrintCoverageYears() {
  try {
    const res = await fetch(
      `${FETCH_STRAPI_URL}/api/print-coverage-years?populate=*`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch Print Coverage Data");
    const json: PrintCoverageYearsResponse = await res.json();
    return json.data;
  } catch (error) {
    console.log(error);
  }
}

// {
//   filters: {
//     print_coverage_years: {
//       Years: {
//         $eq: "2025"
//       }
//     }
//   },
//   populate: {
//     upload_data: true, // populate the single upload relation
//     print_coverage_years: true // optional, if you also want the years data
//   }
// }
