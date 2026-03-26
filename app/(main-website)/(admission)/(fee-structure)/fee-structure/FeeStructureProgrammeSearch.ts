import { FETCH_STRAPI_URL } from "@/app/constant";

export async function getAllProgramme(
  query: string = ""
): Promise<ProgrammeResponse["data"]> {
  const queryParams = new URLSearchParams({
    "sort[0]": "title:asc",
    "filters[title][$containsi]": `${query}`,
    "fields[0]": "title",
    "fields[1]": "programmeslug",
    "pagination[pageSize]": "1000",
    "pagination[page]": "1",
  });

  const res = await fetch(
    `${FETCH_STRAPI_URL}/api/school-programmes?${queryParams.toString()}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) throw new Error("Failed to fetch School Info");

  const json = await res.json();
  return json.data;
}

export interface ProgrammeItem {
  id: number;
  documentId: string;
  title: string;
  programmeslug: string;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ProgrammeResponse {
  data: ProgrammeItem[];
  meta: {
    pagination: Pagination;
  };
}

// {
//   sort: ['title:asc'],
//   filters: {
//     title: {
//       $containsi: 'Hons'
//     }
//   },
//   fields: ['title', 'programmeslug'],
//   pagination: {
//     pageSize: 20,
//     page: 1,
//   },
// }
